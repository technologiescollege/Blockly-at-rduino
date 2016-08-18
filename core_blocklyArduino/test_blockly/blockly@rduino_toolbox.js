/**
 * BlocklyArduino : toolbox functions
 */

'use strict';

/**
 * Build modal to configure ToolBox
 */
BlocklyArduino.openConfigToolbox = function () {
	var modalbody = $("#modal-body-config");
	
	// load the toolboxes id's stored in session
	var loadIds = window.localStorage.toolboxids;

	// set the default toolbox if none
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}

	if (!BlocklyArduino.ajaxOK || BlocklyArduino.toolboxInIndexHtml) {
		$('#divToolbox').hide();
	}
	
	// clear modal
	modalbody.empty();
	var i=0, n;
	var ligne = "";
	// create a checkbox for each toolbox category
	$("#toolbox").children("category").each(function() {
		n = loadIds.search($(this).attr("id"));
		// checks if toolbox was already chosen
		if (n >= 0) {
			ligne = '<input type="checkbox" checked="checked" name="checkbox_'
					+ i + '" id="checkbox_' + $(this).attr("id") + '"/> '
					+ Blockly.Msg[$(this).attr("id")] + '<br/>';
		} else {
			ligne = '<input type="checkbox" name="checkbox_' + i
					+ '" id="checkbox_' + $(this).attr("id") + '"/> '
					+ Blockly.Msg[$(this).attr("id")] + '<br/>';
		}
		i++;
		modalbody.append(ligne);
     });
};

/**
 * Change the ToolBox following the chosen configuration
 */
BlocklyArduino.changeToolbox = function () {
	// Store the blocks for the duration of the reload.
	BlocklyArduino.backupBlocks();
	
	// read the toolboxes id's from the checkboxes
	var toolboxIds = [];
	$('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""));
		}
	});

	// store id's in session
	window.localStorage.toolboxids = toolboxIds;
	
	var search = window.location.search;
	if ($("#put_in_url").prop('checked')) {
		// put id's in url
		if (search.length <= 1) {
			search = '?toolboxids=' + toolboxIds;
		} else {
			search = search + '&toolboxids=' + toolboxIds;
		}
	} else {
		// remove id's from url
		search = search.replace(/([?&]toolboxids=)[^&]*/, '');
	}
	
	search = search.replace(/&openConfigToolbox=true/g, '');
	
	window.location = window.location.protocol + '//'
	+ window.location.host + window.location.pathname + search;
};

/**
 * Build the xml using toolboxes checked in config modal and stored in session
 */
BlocklyArduino.buildToolbox = function() {
	// set the toolbox from url parameters
	var loadIds = BlocklyArduino.getStringParamFromUrl('toolboxids', '');
	
	// set the toolbox from local storage
	if (loadIds === undefined || loadIds === "") {
		loadIds = window.localStorage.toolboxids;
	}

	// set the default toolbox if none
	if (loadIds === undefined || loadIds === "") {
		if ($('#defaultCategories').length) {
			loadIds = $('#defaultCategories').html();
		} else {
			loadIds = '';
		}
	}
	
	window.localStorage.toolboxids = loadIds;

	var xmlValue = '<xml id="toolbox">';	
	var xmlids = loadIds.split(",");
	for (var i = 0; i < xmlids.length; i++) {
		if ($('#'+xmlids[i]).length) {
			xmlValue += $('#'+xmlids[i])[0].outerHTML;
		}
	}

	xmlValue += '</xml>';

	return xmlValue;
};

/**
 * load the xml toolbox definition
 */
BlocklyArduino.loadToolboxDefinition = function() {
	var toolboxFile = BlocklyArduino.getStringParamFromUrl('toolbox', '');

	if (toolboxFile) {
		$("#toolboxes").val(toolboxFile);
	}
	
	$.ajax( {
				type: "GET",
				url: "./" + $("#toolboxes").val() + ".xml",
				dataType: "xml",
				async : false
			}).done(function(data) {
				var toolboxXml = '<xml id="toolbox" style="display: none">';
				toolboxXml += $(data).find('toolbox').html();
				toolboxXml += '</xml>';
				$('body').append(toolboxXml);	
			});
			
}

/**
 * Change toolbox definition
 */
BlocklyArduino.changeToolboxDefinition =  function (){
  var search = window.location.search;
  if (search.length <= 1) {
	search = '?toolbox=' + $("#toolboxes").val();
  } else if (search.match(/[?&]toolbox=[^&]*/)) {
	search = search.replace(/([?&]toolbox=)[^&]*/, '$1' + $("#toolboxes").val());
  } else {
	search = search.replace(/\?/, '?toolbox=' + $("#toolboxes").val() + '&');
  }

  window.location = window.location.protocol + '//' +
	  window.location.host + window.location.pathname + search + "&openConfigToolbox=true";
}; 


/**
 * checks all checkboxes in modal "configModal"
 */
BlocklyArduino.checkAll = function () {
    if(this.checked) {
        // Iterate each checkbox
        $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = true;
        });
    } 
      else {
      $('#modal-body-config input:checkbox[id^=checkbox_]').each(function() {
            this.checked = false;
        });
    }
};
