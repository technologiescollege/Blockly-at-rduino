/**
 * Blockly@rduino
 */

'use strict';

/**
 * Override Blockly.makeColour to use Hexa or HUE
 */
Blockly.makeColour = function(color) {
	if (typeof color != 'string' || color.substring(0,1) != '#') {
		color = goog.color.hsvToHex(color, Blockly.HSV_SATURATION, Blockly.HSV_VALUE * 255);
	}
	return color;
};

/**
 * Create a namespace for the application.
 */
var BlocklyDuino = {};
Blockly.pathToBlockly = './';
Blockly.pathToMedia = './media/';

BlocklyDuino.selectedToolbox = "toolbox_none";
BlocklyDuino.selectedCard = 'none';
BlocklyDuino.selectedTab = 'blocks';
BlocklyDuino.inlineBool = true;
BlocklyDuino.withImage = true;
BlocklyDuino.ajaxOK = true;
BlocklyDuino.toolboxInIndexHtml = false;
BlocklyDuino.pluginCodebender_found = navigator.plugins['Codebender.cc'] !== undefined || navigator.plugins['Codebendercc'] !== undefined;

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
BlocklyDuino.workspace = null;


/**
 * Populate the currently selected pane with content generated from the blocks.
 */
BlocklyDuino.renderContent = function() {
  var content = $('#content_' + BlocklyDuino.selectedTab);
  
	if (content.prop('id') == 'content_blocks') {
		// If the workspace was changed by the XML tab, Firefox will have
		// performed an incomplete rendering due to Blockly being invisible. Rerender.
		BlocklyDuino.workspace.render();
		$(".blocklyTreeSeparator").removeAttr("style");
//		BlocklyDuino.workspace.setVisible(true);
		$(".blocklyToolboxDiv").show();
	} else {
//		BlocklyDuino.workspace.setVisible(false);
		$(".blocklyToolboxDiv").hide();
		switch (content.prop('id')) {
		case 'content_xml':
			$('#pre_xml').text(
					Blockly.Xml.domToPrettyText(Blockly.Xml
							.workspaceToDom(BlocklyDuino.workspace)));
			if (typeof prettyPrintOne == 'function') {
				$('#pre_xml').html(prettyPrintOne($('#pre_xml').html(), 'xml'));
			}
			break;

		case 'content_arduino':
			try {
				$('#pre_arduino')
						.text(
								Blockly.Arduino
										.workspaceToCode(BlocklyDuino.workspace));
				if (typeof prettyPrintOne == 'function') {
					$('#pre_arduino').html(prettyPrintOne($('#pre_arduino').html(), 'cpp'));
				}
				BlocklyDuino.toggleWeb();	
				BlocklyDuino.toggleLocalCodeBender();
				BlocklyDuino.testPluginCodeBender();
			} catch (e) {
				alert(e);
			}
			break;

		case 'content_supervision':
			$("#content_supervision").load('./supervision/pymata_arduino.html', BlocklyDuino.renderSupervisionContent);
			
		}
	}	
};

/**
 * Populate the supervision tabs with selected card
 */
BlocklyDuino.renderSupervisionContent = function() {
	// tabs-1
	var pinTemplate1 = $("#template_tabs1").html();
	var digitalNumbers = window.profile["defaultBoard"].digital;
	for (var i in digitalNumbers) {
		var pinLine = pinTemplate1.replace(/#pin_number#/g, digitalNumbers[i]);
		$("#tabs-1").append(pinLine);
	}

	// tabs-2
	var pinTemplate2 = $("#template_tabs2").html();
	var pwmTemplate = $("#template_tabs2_pwm").html();
	var pwmNumbers = window.profile["defaultBoard"].PWM;
	for (var i in digitalNumbers) {
		var pinLine = pinTemplate2;
		if ($.inArray(digitalNumbers[i], pwmNumbers) != -1) {
			pinLine = pinLine.replace("#pwm_line#", pwmTemplate);
		} else {
			pinLine = pinLine.replace("#pwm_line#", "");
		}
		pinLine = pinLine.replace(/#pin_number#/g, digitalNumbers[i]);
		$("#tabs-2").append(pinLine);
	}

	// tabs-3
	var pinTemplate3 = $("#template_tabs3").html();
	var analogNumbers3 = window.profile["defaultBoard"].analog;
	for (var i in analogNumbers3) {
		var pinNumber = analogNumbers3[i].substring(1);
		var pinLine = pinTemplate3.replace(/#pin_number#/g, pinNumber);
		$("#tabs-3").append(pinLine);
	}

	// tabs-4
	var pinTemplate4 = $("#template_tabs4").html();
	var analogNumbers4 = window.profile["defaultBoard"].analog;
	for (var i in analogNumbers4){
		var pinNumber = analogNumbers4[i].substring(1);
		var pinLine = pinTemplate4.replace(/#pin_number#/g, pinNumber);
		$("#tabs-4").append(pinLine);
	}

	Code.initLanguageSupervision();
	
	$.getScript("./supervision/s2aio_iot.js" );
};

/**
 * Populate the the edit textarea "edit_code" with the pre arduino code
 */
BlocklyDuino.editArduinoCode = function() {
	    $('#edit_code').val($('#pre_arduino').text());
};

/**
 * Populate the content arduino code pane with the edit textarea "edit_code"
 */
BlocklyDuino.valideEditedCode = function() {
	    try {
	    	$('#pre_arduino').text($('#edit_code').val());
		    if (typeof prettyPrintOne == 'function') {
		    	$('#pre_arduino').html(prettyPrintOne($('#pre_arduino').html(), 'cpp'));
		    }
	    } catch (e) {
	            alert(e);
		}
};

/**
 * Render Arduino code in preview box
 */
BlocklyDuino.renderArduinoCodePreview = function() {
	$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
	if (typeof prettyPrintOne == 'function') {
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
	}
};

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
BlocklyDuino.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Add or replace a parameter to the URL.
 * 
 * @param {string} name The name of the parameter.
 * @param {string} value Value to set
 * @return {string} The url completed with parameter and value
 */
BlocklyDuino.addReplaceParamToUrl = function(url, param, value) {
	var re = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
	var separator = url.indexOf('?') !== -1 ? "&" : "?";
	if (url.match(re)) {
		return url.replace(re, '$1' + param + "=" + value + '$2');
	}
	else {
		return url + separator + param + "=" + value;
	}
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * 
 * @param {string}
 *            defaultXml Text representation of default blocks.
 */
BlocklyDuino.loadBlocks = function(defaultXml) {
	
	if (defaultXml) {
		// Load the editor with default starting blocks.
		var xml = Blockly.Xml.textToDom(defaultXml);
		Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
	} else {
		var loadOnce = null;
		try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {
			// Firefox sometimes throws a SecurityError when accessing
			// localStorage.
			// Restarting Firefox fixes this, so it looks like a bug.
		}
		if (loadOnce != null) {
			// Language switching stores the blocks during the reload.
			delete window.localStorage.loadOnceBlocks;
			var xml = Blockly.Xml.textToDom(loadOnce);
			Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
		}
	}
};

/*
 *  Store the blocks for the duration of the reload.
 */
BlocklyDuino.backupBlocks = function () {
  if (typeof Blockly != 'undefined' && window.localStorage) {
    var xml = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
  }
};


/**
 * Sets Arduino card
 */
BlocklyDuino.setArduinoCard =  function () {
	var cardId = BlocklyDuino.getStringParamFromUrl('card', '');
	if (!cardId) {
		cardId = BlocklyDuino.selectedCard;
	}
	$("#pinout").val(cardId);
	
	// set the card from url parameters
	profile["defaultBoard"]=profile[cardId];
	$('#arduino_card_picture').attr("src", profile.defaultBoard['picture']);
	$('#arduino_card_miniPicture').attr("src", profile.defaultBoard['miniPicture']);	
	$('#pictureModalLabel').text(profile.defaultBoard['description']);
	if ($("#pinout").val().substring(0,4) == "kit_") {
		$("#btn_config").remove();
		$("#btn_config_kit").removeClass('hidden');
		$('#btn_config_kit').attr("href", profile[$("#pinout").val()]['help_link']);
	}

	BlocklyDuino.cardPicture_change_AIO();
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
BlocklyDuino.saveXmlFile = function () {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	
	var toolbox = window.localStorage.toolbox;
	if (!toolbox) {
		toolbox = $("#toolboxes").val();
	}
	
	if (toolbox) {
		var newel = document.createElement("toolbox");
		newel.appendChild(document.createTextNode(toolbox));
		xml.insertBefore(newel, xml.childNodes[0]);
	}
	
	var toolboxids = window.localStorage.toolboxids;
	if (toolboxids === undefined || toolboxids === "") {
		if ($('#defaultCategories').length) {
			toolboxids = $('#defaultCategories').html();
		}
	}
	
	if (toolboxids) {
		var newel = document.createElement("toolboxcategories");
		newel.appendChild(document.createTextNode(toolboxids));
		xml.insertBefore(newel, xml.childNodes[0]);
	}
	
	var data = Blockly.Xml.domToPrettyText(xml);
	var datenow = Date.now();
	var uri = 'data:text/xml;charset=utf-8,' + encodeURIComponent(data);
	$(this).attr({
	            'download': "blockly_arduino"+datenow+".xml",
				'href': uri,
				'target': '_blank'
	});
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
BlocklyDuino.saveArduinoFile = function () {
	  var data = Blockly.Arduino.workspaceToCode();
	  var datenow = Date.now();
//NBR	  var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);  
	  var uri = 'data:text/ino;charset=utf-8,' + encodeURIComponent(data); // NBR: set INO as data type to force the browser to propose to load directly the code into the arduino IDE
	  $(this)
	            .attr({
	            'download': "arduino"+datenow+".ino",
	                'href': uri,
	                'target': '_blank'
	        });
};

/**
 * Load Arduino code from component pre_arduino
 */
BlocklyDuino.getFiles = function (){
    var code = $('#pre_arduino').text();
    return {"sketch.ino": code.replace(/</g, '&lt;').replace(/>/g, '&gt;') };
};


/**
 // * Load blocks from local file.
 */
BlocklyDuino.load = function (event) {
  var files = event.target.files;
  // Only allow uploading one file.
  if (files.length != 1) {
    return;
  }

  // FileReader
  var reader = new FileReader();
  reader.onloadend = function(event) {
    var target = event.target;
    // 2 == FileReader.DONE
    if (target.readyState == 2) {
      try {
        var xml = Blockly.Xml.textToDom(target.result);
      } catch (e) {
        alert(MSG['xmlError']+'\n' + e);
        return;
      }
      var count = BlocklyDuino.workspace.getAllBlocks().length;
      if (count && confirm(MSG['xmlLoad'])) {
    	  BlocklyDuino.workspace.clear();
      }
      $('#tab_blocks a').tab('show');
      Blockly.Xml.domToWorkspace(BlocklyDuino.workspace, xml);
      BlocklyDuino.selectedTab = 'blocks';
      BlocklyDuino.renderContent();
      
	  // load toolbox
      var elem = xml.getElementsByTagName("toolbox")[0];
      if (elem != undefined) {
		var node = elem.childNodes[0];
		window.localStorage.toolbox = node.nodeValue;
		$("#toolboxes").val(node.nodeValue);
		
		// load toolbox categories
		elem = xml.getElementsByTagName("toolboxcategories")[0];
		if (elem != undefined) {
			node = elem.childNodes[0];
			window.localStorage.toolboxids = node.nodeValue;
		}

		var search = BlocklyDuino.addReplaceParamToUrl(window.location.search, 'toolbox', $("#toolboxes").val());
		window.location = window.location.protocol + '//'
				+ window.location.host + window.location.pathname
				+ search;
	}

    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    $('#load').val('');
  };
  reader.readAsText(files[0]);
};

/**
 * Discard all blocks from the workspace.
 */
BlocklyDuino.discard = function () {
  var count = BlocklyDuino.workspace.getAllBlocks().length;
  if (count < 2 || window.confirm(MSG['discard'].replace('%1', count))) {
    BlocklyDuino.workspace.clear();
    //clean URL from example if opened
	var search = window.location.search;
    var newsearch = search.replace(/([?&]url=)[^&]*/, '');
	window.history.pushState(search, "Title", newsearch);
    BlocklyDuino.renderContent();
  }
};

/**
 * Undo/redo functions
 */
BlocklyDuino.Undo = function () {
  Blockly.mainWorkspace.undo(0);
};
BlocklyDuino.Redo = function () {
  Blockly.mainWorkspace.undo(1);
};

/**
 * Binds functions to each of the buttons, nav links, and related.
 */
BlocklyDuino.bindFunctions = function() {
	
	$('#clearLink').on("click", BlocklyDuino.clearLocalStorage);
	
	// Navigation buttons
	$('#btn_delete').on("click", BlocklyDuino.discard);
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_saveXML').on("click", BlocklyDuino.saveXmlFile);
	$('#btn_saveArduino').on("click", BlocklyDuino.saveArduinoFile);	
	$('#btn_pasteIDEArduino').on("click", BlocklyDuino.ArduinoIDEClick);	
	$('#btn_flash_local').on("click", BlocklyDuino.uploadClick);
	$('#btn_verify_local').on("click", BlocklyDuino.verify_local_Click);
		
	$('#toggle-WebAccess').on("change", BlocklyDuino.toggleWeb);
	$('#toggle-LocalCodebender').on("change", BlocklyDuino.toggleLocalCodeBender);

	$('#pinout').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val();
	});
	
	$('#configModalGlobal').on("hidden.bs.modal", function() {
		$("#pinout").val(BlocklyDuino.selectedCard);
		BlocklyDuino.cardPicture_change_AIO();
	});	
	
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val();
	});
	
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);	

	$('#configModal').on('hidden.bs.modal', function(e) {
		BlocklyDuino.loadToolboxDefinition(BlocklyDuino.selectedToolbox);
	});

	$('#load').on("change", BlocklyDuino.load);
	$('#btn_fakeload').on("click", function() {
		$('#load').click();
	});

	$('#menuPanelBlockly li[id^=tab_]').on("click", function() {
		BlocklyDuino.selectedTab = $(this).attr('id').substring(4);
		BlocklyDuino.renderContent();
	});

	$('#btn_size').on("click", BlocklyDuino.changeSize);
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);

	$('#btn_edit_code').on("click", BlocklyDuino.editArduinoCode);
	$('#btn_validCode').on("click", BlocklyDuino.valideEditedCode);

	$('#select_all').on("click", BlocklyDuino.checkAll);
	$('#btn_valid_config').on("click", BlocklyDuino.changeToolbox);
	$('#btn_validConfigGlobale').on("click", BlocklyDuino.validateConfigGlobal);
	$('#btn_card_picture_change').on("click", BlocklyDuino.validateConfigOffline);
	$('#textSize').on("click", BlocklyDuino.tailleFonte);
	
	$('#btn_valid_msg').on("click", function() {
		if ($('#ajax_msg').prop("checked")) {
			window.sessionStorage.msg_ajax_seen = true;
		}
		$('#ajaxModal').modal('hide');
	});	
	
	$('#btn_valid_first_msg').on("click", function() {
		if ($('#first_msg').prop("checked")) {
			window.sessionStorage.msg_first_seen = true;
		}
		$('#firstModal').modal('hide');
	});

	$('#firstModal').on('hidden.bs.modal', function (e) {
		$('#firstModal iframe').remove();
	});
	
	$('#btn_inline').on("click", BlocklyDuino.inline);
	$('#btn_blocs_picture').on("click", BlocklyDuino.blockPicture);	
	$('#btn_blocs_picture_mini').on("click", BlocklyDuino.blockPicture_mini);
	$('#btn_blocs_picture_maxi').on("click", BlocklyDuino.blockPicture_maxi);
	
	$('#btn_card_picture_mini').on("click", BlocklyDuino.cardPicture_mini);
	$('#btn_card_picture_maxi').on("click", BlocklyDuino.cardPicture_maxi);
	
	$('#btn_preview').on("click", function() {
		$("#toggle").toggle("slide");
	});
	$('#pre_previewArduino').on("click", function() {
		$("#toggle").toggle("slide");
	});

	$('#btn_example').on("click", BlocklyDuino.buildExamples);

	$('#miniCard, #btn_picture').on('click', function() {
		$('#showcardModal').css("z-index", 1040);
		$('#showcardModal').css("display", "inline-block");
		Blockly.Arduino.cardSize = 200;
	});

	$('#showcardModal button.close').on('click', function() {
		$('#showcardModal').css("z-index", 0);
		$('#showcardModal').hide();
	});

	$('#btn_videos').on('click', function() {
		$('#videoModal').css("z-index", 1050);
		$('#videoModal').css("display", "inline-block");
		$('#videoModal1').prop('src', "https://www.youtube-nocookie.com/embed/nXWwNrwVFXM?list=PLwy0yw3Oq4-uFNmgedXx9_L_TJNORo-4N");
		$('#videoModal2').prop('src', "https://www.youtube-nocookie.com/embed/vlJl28qE5vg?list=PLwy0yw3Oq4-uFJl0j-efUAAlfCbqtcTMr");
		$('#videoModal3').prop('src', "https://player.vimeo.com/video/177939950?byline=0&portrait=0");
		$('#videoModal4').prop('src', "https://player.vimeo.com/video/179961741?byline=0&portrait=0");
	});

	$('#videoModal button.close').on('click', function() {
		$('#videoModal').css("z-index", 0);
		$('#videoModal1').prop('src', "");
		$('#videoModal2').prop('src', "");
		$('#videoModal3').prop('src', "");
		$('#videoModal4').prop('src', "");
		$('#videoModal').hide();
	});
	
	$('#btn_convert').on('click', function() {
		$('#convertModal').css("z-index", 1060);
		$('#convertModal').css("display", "inline-block");
	});
	
	$('#convertModal button.close').on('click', function() {
		$('#convertModal').css("z-index", 0);
		$('#convertModal').hide();
	});

	$('#btn_RGB').on('click', function() {
		$('#RGB_modal').css("z-index", 1070);
		$('#RGB_modal').css("display", "inline-block");
	});
	
	$('#RGB_modal button.close').on('click', function() {
		$('#RGB_modal').css("z-index", 0);
		$('#RGB_modal').hide();
	});
	
	// $('#btn_switch').on("click", BlocklyDuino.switchOrientation);

};

/**
 * checks all checkboxes in modal "configModal"
 */
BlocklyDuino.checkAll = function () {
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

/**
 * Build modal to configure ToolBox
 */
BlocklyDuino.openConfigToolbox = function () {
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

	if (!BlocklyDuino.ajaxOK || BlocklyDuino.toolboxInIndexHtml) {
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
BlocklyDuino.changeToolbox = function () {
	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
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
		search = BlocklyDuino.addReplaceParamToUrl(search, 'toolboxids', toolboxIds);
	} else {
		// remove id's from url
		search = search.replace(/([?&]toolboxids=)[^&]*/, '');
	}
	
	// store toolboxe id in session
	window.localStorage.toolbox = $("#toolboxes").val();
	
	search = BlocklyDuino.addReplaceParamToUrl(search, 'toolbox', $("#toolboxes").val());
	
	window.location = window.location.protocol + '//'
	+ window.location.host + window.location.pathname + search;
};

/**
 * Build the xml using toolboxes checked in config modal and stored in session
 */
BlocklyDuino.buildToolbox = function() {
	// set the toolbox from url parameters
	var loadIds = BlocklyDuino.getStringParamFromUrl('toolboxids', '');
	
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
BlocklyDuino.loadToolboxDefinition = function(toolboxFile) {
	if (!toolboxFile) {
		toolboxFile = BlocklyDuino.getStringParamFromUrl('toolbox', '');
	}
	
	if (!toolboxFile) {
		toolboxFile = window.localStorage.toolbox;
	}
	
	if (!toolboxFile) {
		toolboxFile = BlocklyDuino.selectedToolbox;
	}

	$("#toolboxes").val(toolboxFile);
	
	$.ajax( {
				type: "GET",
				url: "./toolbox/" + toolboxFile + ".xml",
				dataType: "xml",
				async : false
			}).done(function(data) {
				var toolboxXml = '<xml id="toolbox" style="display: none">';
				toolboxXml += $(data).find('toolbox').html();
				toolboxXml += '</xml>';
				$("#toolbox").remove();
				$('body').append(toolboxXml);	
				  $("xml").find("category").each(function() {
						// add attribute ID to keep categorie code
						if (!$(this).attr('id')) {
							$(this).attr('id', $(this).attr('name'));
							$(this).attr('name', Blockly.Msg[$(this).attr('name')]);
						}
					  });

			}).fail(function(data) {
				$("#toolbox").remove();
			});			
};

/**
 * Change toolbox definition
 */
BlocklyDuino.changeToolboxDefinition =  function (){
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
}; 


/**
 * Initialize Blockly.  Called on page load.
 */
BlocklyDuino.init = function() {

	BlocklyDuino.setOrientation();
	
	BlocklyDuino.testAjax();
					
	BlocklyDuino.firstBlocklyArduino();
	
	if ($('#toolbox').length) {
		BlocklyDuino.toolboxInIndexHtml = true;		
	}
	
	if (!BlocklyDuino.toolboxInIndexHtml && BlocklyDuino.ajaxOK) {
		BlocklyDuino.loadToolboxDefinition();
	}
	
	Code.initLanguage();

	if (BlocklyDuino.getSize() == 'max') {
		// place div on top
		$("#divBody").css("top", "0px");

		// maximize div
		$("#divTabpanel").css( {"width" : "100%",
										"height" : "100%",
										"position" : "absolute",
										"top" : "0px",
										"marginLeft" : "0px"});
		// hide Title
		$("#divTitre").css("display", "none");

		$('#btn_size').attr("title", MSG['btn_size_min']);
	} else {
		$('#btn_size').attr("title", MSG['btn_size_max']);

	}

	BlocklyDuino.setArduinoCard();
	
	// build Blockly ...
	BlocklyDuino.workspace = Blockly.inject('content_blocks',
		      {grid:
		          {	spacing: 25,
					length: 3,
					colour: '#ccc',
					snap: true},
					sounds : true,
					media: 'media/',
					rtl: Code.isRtl(),
					toolbox: BlocklyDuino.buildToolbox(),
					zoom:
						{controls: true,
						wheel: true}
		      });
	// bind events to html elements
	BlocklyDuino.bindFunctions();

	BlocklyDuino.renderContent();
	
	BlocklyDuino.workspace.addChangeListener(BlocklyDuino.renderArduinoCodePreview);

	// load blocks stored in session or passed by url
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');
	var loadOnce = null;
	try {
			loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {
			// Firefox sometimes throws a SecurityError when accessing
			// localStorage.
			// Restarting Firefox fixes this, so it looks like a bug.
		}
	if (urlFile) {
		if (loadOnce != null)
			{
			if (!confirm(MSG['xmlLoad']))
				{
				BlocklyDuino.loadBlocks();
				}
			}
		$.get( urlFile, function( data ) {
	        BlocklyDuino.loadBlocks(data );
			}, 'text');
	} else {
		BlocklyDuino.loadBlocks();
	}
	
    // Hook a save function onto unload.
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false);

	BlocklyDuino.initCompilerFlasher();
	
	//global config
	BlocklyDuino.initGlobalConfig();
	
	BlocklyDuino.OnOffLine();
	
	// draggable "modal" dialog containing card image & videos
    $('body').on('mousedown', '#showcardModal', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY,
                left: e.pageX - $('.draggable').outerWidth() / 2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
            e.preventDefault();
        });
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
	
	$('body').on('mousedown', '#videoModal', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY,
                left: e.pageX - $('.draggable').outerWidth()/2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
            e.preventDefault();
        });
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
	
	$('body').on('mousedown', '#convertModal', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY,
                left: e.pageX - $('.draggable').outerWidth()/2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
            e.preventDefault();
        });
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
	
	$('body').on('mousedown', '#RGB_modal', function() {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY,
                left: e.pageX - $('.draggable').outerWidth()/2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
            e.preventDefault();
        });
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
	
	/*pour changer couleur texte dans toolbox
    $("div:contains('bitbloq').blocklyTreeRow, div:contains('bitbloq').blocklyTreeRow ~ div").on("click", function() {
        $(this).removeClass("blocklyTreeSelected")
        $(this).find("div.blocklyTreeSelected").removeClass("blocklyTreeSelected")
        $(this).find("span").css("color", "#000000");
    });*/
	if (window.location.protocol == 'http:') {
					$("#btn_create_example").attr("href","./examples/examples.php?lang=" + Code.LANG);
					} else {
					$("#btn_create_example").attr("href","./examples/examples.html?lang=" + Code.LANG);	
					}
	
	/*debug from Codebender or from Python server*/
	if ($('#toggle-LocalCodebender').prop('checked')) {
		$("#debug_arduino").addClass("hidden");
		$("#local_debug").removeClass("hidden");
		$('#local_debug iframe').prop('src', "http://127.0.0.1:5005"); 
	} else {
		$("#debug_arduino").removeClass("hidden");
		$("#local_debug").addClass("hidden");
	}
};


/**
 * Load the compilerflasher module 
 */
BlocklyDuino.initCompilerFlasher = function() {
	compilerflasher = new compilerflasher(BlocklyDuino.getFiles);

	compilerflasher.on("pre_verify", function() {
		$("#debug_arduino").html(MSG['pre_verify']);
	});
	compilerflasher.on("verification_succeed", function(binary_size) {
		$("#debug_arduino").html(MSG['verification_succeed'] + binary_size);
	});
	compilerflasher.on("verification_failed", function(error_output) {
		$("#debug_arduino").html(MSG['verification_failed'] + error_output);
	});
};

/**
 * Create content for modal example
 */
BlocklyDuino.buildExamples = function() {
	var search = window.location.search;	
	// remove values from url
	search = search.replace(/([?&]url=)[^&]*/, '');
	
	$.ajax({
	    cache: false,
	    url: "./examples/examples.json",
	    dataType: "json",
	    success :  function(data) {
				$("#includedContent").empty();
				$.each(data, function(i, example){
					if (example.visible) {
						var line = "<tr>"
								   + "<td><a href='" + search + "&url=./examples/"+example.source_url+"'>"
								   + example.source_text
								   + "</a></td>"
								   + "<td>"
								   + "<a href='./examples/"+example.image+"' target=_blank>"
								   + "<img class='vignette' src='./examples/"+example.image+"'>"
								   + "</a>"
								   + "</td>"
								   + "<td>"
								   + "<a href='./examples/"+example.link_url+"' target=_blank>"
								   + example.link_text
								   + "</a>"
								   + "</td>"
								   + "</tr>";
	
						$("#includedContent").append(line);
					}
				});
			}
		});
};


/**
 * Test ajax request 
 */
BlocklyDuino.testAjax = function() {
	$.ajax({
	    type: "GET",
	    url: "./index.html",
	    dataType : 'text',
	    error: function(){
	    	if (window.sessionStorage && !window.sessionStorage.msg_ajax_seen) {
	    		$('#ajaxModal').modal('show');	    		
	    	}
			BlocklyDuino.ajaxOK = false;
	    }
	});
};


BlocklyDuino.clearLocalStorage = function () {
	window.removeEventListener('unload', BlocklyDuino.backupBlocks, false);
	localStorage.clear();
};


/**
 * iFrame for wiring
*/ 
BlocklyDuino.iframeWiring = function() {
    $.ajax({
        url: ("https://fr.robom.ru"),
		cache: false,
		success: function(c){	$("#content").html(c);}
		});
	return false;
	/*$('#content_area').load("https://fr.robom.ru");
	BlocklyDuino.workspace.setVisible(false);
	$("#content_supervision").load('./supervision/pymata_arduino.html', BlocklyDuino.renderSupervisionContent);
	*/
};


/**
 * Modal first connection -> info
 */
BlocklyDuino.firstBlocklyArduino = function() {
	if (BlocklyDuino.getStringParamFromUrl('AIO', '') == 'on') {
		$('#firstModal').addClass('draggable');
	} else if (window.sessionStorage && !window.sessionStorage.msg_first_seen) {
		$('#videoFirstModal').prop('src', "https://player.vimeo.com/video/179569437?autoplay=1&title=0&byline=0&portrait=0"); 
		$('#firstModal').modal('show');	
	}
};

/**
 * Override Blockly method (/Blockly/core/variable.js)
 * To add the block "variables_set_type"
 * 
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace contianing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.Variables.flyoutCategory = function(workspace) {
  var variableList = workspace.variableList;
  variableList.sort(goog.string.caseInsensitiveCompare);

  var xmlList = [];
  var button = goog.dom.createDom('button');
  button.setAttribute('text', Blockly.Msg.NEW_VARIABLE);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE');

  Blockly.registerButtonCallback('CREATE_VARIABLE', function(button) {
    Blockly.Variables.createVariable(button.getTargetWorkspace());
  });

  xmlList.push(button);

  if (variableList.length > 0) {
    if (Blockly.Blocks['variables_set']) {
      // <block type="variables_set" gap="20">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'variables_set');
      if (Blockly.Blocks['variables_set_type']) {
        block.setAttribute('gap', 8);
      } else {
        block.setAttribute('gap', 24);
      }
      var field = goog.dom.createDom('field', null, variableList[0]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);
      xmlList.push(block);
    }
    // override to inject variables_set_type block
    if (Blockly.Blocks['variables_set_type']) {
    	var block = goog.dom.createDom('block');
    	block.setAttribute('type', 'variables_set_type');
    	if (Blockly.Blocks['math_change']) {
    		block.setAttribute('gap', 8);
    	} else {
    		block.setAttribute('gap', 24);
    	}
    	xmlList.push(block);
    }
    // end override
    if (Blockly.Blocks['math_change']) {
      // <block type="math_change">
      //   <value name="DELTA">
      //     <shadow type="math_number">
      //       <field name="NUM">1</field>
      //     </shadow>
      //   </value>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'math_change');
      if (Blockly.Blocks['variables_get']) {
        block.setAttribute('gap', 20);
      }
      var value = goog.dom.createDom('value');
      value.setAttribute('name', 'DELTA');
      block.appendChild(value);

      var field = goog.dom.createDom('field', null, variableList[0]);
      field.setAttribute('name', 'VAR');
      block.appendChild(field);

      var shadowBlock = goog.dom.createDom('shadow');
      shadowBlock.setAttribute('type', 'math_number');
      value.appendChild(shadowBlock);

      var numberField = goog.dom.createDom('field', null, '1');
      numberField.setAttribute('name', 'NUM');
      shadowBlock.appendChild(numberField);

      xmlList.push(block);
    }

    for (var i = 0; i < variableList.length; i++) {
      if (Blockly.Blocks['variables_get']) {
        // <block type="variables_get" gap="8">
        //   <field name="VAR">item</field>
        // </block>
        var block = goog.dom.createDom('block');
        block.setAttribute('type', 'variables_get');
        if (Blockly.Blocks['variables_set']) {
          block.setAttribute('gap', 8);
        }
        var field = goog.dom.createDom('field', null, variableList[i]);
        field.setAttribute('name', 'VAR');
        block.appendChild(field);
        xmlList.push(block);
      }
    }
  }
  return xmlList;
};