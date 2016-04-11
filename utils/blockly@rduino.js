/**
 * BlocklyDuino
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

BlocklyDuino.selectedTab = 'blocks';
BlocklyDuino.selectedCard = 'arduino_uno';
BlocklyDuino.inlineBool = true;
BlocklyDuino.withImage = true;
BlocklyDuino.ajaxOK = true;
BlocklyDuino.toolboxInIndexHtml = false;

BlocklyDuino.pictSize = 2;
//set default image size
Blockly.Arduino.imageSizeNull = 0; //pictSize = 0
Blockly.Arduino.imageSizeSmall = 32; //pictSize = 1
Blockly.Arduino.imageSizeNormal = 64; //pictSize = 2
Blockly.Arduino.imageSizeBig = 96; //pictSize = 3
Blockly.Arduino.imageSizeOld = 32;
Blockly.Arduino.imageSize = Blockly.Arduino.imageSizeNormal;
Blockly.Arduino.imageBool = true;
Blockly.Arduino.cardSize = 200; //same as width in index.html showcardModal
/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
BlocklyDuino.workspace = null;

/**
 * Toggle blocks picture : 
 */
BlocklyDuino.blockPicture = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
	var blocks = xmlBlocks.getElementsByTagName("block");
	
	Blockly.Arduino.imageBool = !Blockly.Arduino.imageBool;
	
	if (Blockly.Arduino.imageBool) {
		$('#icon_btn_blocs_picture').removeClass('glyphicon-eye-close');
		$('#icon_btn_blocs_picture').addClass('glyphicon-eye-open');
		Blockly.Arduino.imageSize = Blockly.Arduino.imageSizeOld;		
		$('#btn_blocs_picture_mini').show();
		$('#btn_blocs_picture_maxi').show();
	} else {
		Blockly.Arduino.imageSizeOld = Blockly.Arduino.imageSize;
		$('#icon_btn_blocs_picture').removeClass('glyphicon-eye-open');
		$('#icon_btn_blocs_picture').addClass('glyphicon-eye-close');
		Blockly.Arduino.imageSize = 0;
		$('#btn_blocs_picture_mini').hide();
		$('#btn_blocs_picture_maxi').hide();
	}	
	
	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyDuino.blockPicture_maxi = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
	
	var blocks = xmlBlocks.getElementsByTagName("block");
	
	if (BlocklyDuino.pictSize<6) BlocklyDuino.pictSize++;
	
	if (BlocklyDuino.pictSize > 7) BlocklyDuino.pictSize=5;
	
	Blockly.Arduino.imageSize = 32 * BlocklyDuino.pictSize;
	
	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyDuino.blockPicture_mini = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
	
	var blocks = xmlBlocks.getElementsByTagName("block");
	
	if (BlocklyDuino.pictSize>1) BlocklyDuino.pictSize--;
	
	if (BlocklyDuino.pictSize <1) BlocklyDuino.pictSize=1;
	
	Blockly.Arduino.imageSize = 32 * BlocklyDuino.pictSize;
	
	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
};

BlocklyDuino.cardPicture_maxi = function() {	
	var img = $("#arduino_card_picture");
	var modal = $("#showcardModal");
	
    if ((img.width() < 450)||(img.height() < 650))
    {
		Blockly.Arduino.cardSize += 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }	
};

BlocklyDuino.cardPicture_mini = function() {
	var img = $("#arduino_card_picture");
	var modal = $("#showcardModal");
    
    if ((img.width() > 200)||(img.height() > 220))
    {
		Blockly.Arduino.cardSize -= 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }	
};
/**
 * Toggle blocks rendering : inline or block
 */
BlocklyDuino.inline = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);
	
	var blocks = xmlBlocks.getElementsByTagName("block");

	BlocklyDuino.inlineBool = !BlocklyDuino.inlineBool;

	for(var i=0; i<blocks.length;i++) {
		blocks.item(i).setAttribute("inline", BlocklyDuino.inlineBool);
	}
	
	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
	
	if (BlocklyDuino.inlineBool) {
		$('#icon_btn_inline').removeClass('glyphicon-option-horizontal');
		$('#icon_btn_inline').addClass('glyphicon-option-vertical');
	} else {
		$('#icon_btn_inline').addClass('glyphicon-option-horizontal');
		$('#icon_btn_inline').removeClass('glyphicon-option-vertical');
	}
};

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
				//neutralise le bouton 'btn_plugin_codebender'
				if ($("select#cb_cf_ports").prop("disabled")) {
					$("#btn_plugin_codebender").removeClass("disabled");
				} else {
					$("#btn_plugin_codebender").addClass("disabled");
				}

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
	var analogNumbers = window.profile["defaultBoard"].analog;
	for (var i in analogNumbers) {
		var pinNumber = analogNumbers[i].substring(1);
		var pinLine = pinTemplate3.replace(/#pin_number#/g, pinNumber);
		$("#tabs-3").append(pinLine);
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

	if (cardId) {
		$("#pinout").val(cardId);
	}
	
	// set the card from url parameters
	window.profile["defaultBoard"]=window.profile[$("#pinout").val()];
	$('#arduino_card_picture').attr("src", profile.defaultBoard['picture']);
	$('#arduino_card_miniPicture').attr("src", profile.defaultBoard['miniPicture']);
};

/**
 * Change Arduino card
 */
BlocklyDuino.arduinoCard =  function (){
  $("#pinout").blur();
  if (window.profile["defaultBoard"]!=window.profile[$("#pinout").val()])
  {
	  if (window.confirm(MSG['arduino_card']+' '+window.profile[$("#pinout").val()].description+' ?'))
		  {
			BlocklyDuino.workspace.clear();
			  var search = window.location.search;
			  if (search.length <= 1) {
			    search = '?card=' + $("#pinout").val();
			  } else if (search.match(/[?&]card=[^&]*/)) {
			    search = search.replace(/([?&]card=)[^&]*/, '$1' + $("#pinout").val());
			  } else {
			    search = search.replace(/\?/, '?card=' + $("#pinout").val() + '&');
			  }

			  window.location = window.location.protocol + '//' +
			      window.location.host + window.location.pathname + search;
		} else {
			$("#pinout").val(BlocklyDuino.selectedCard);
		}
  }
}; 

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
BlocklyDuino.saveXmlFile = function () {
	  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	  var data = Blockly.Xml.domToPrettyText(xml);
	  var datenow = Date.now();
	  var uri = 'data:text/xml;charset=utf-8,' + encodeURIComponent(data);
	  $(this)
	            .attr({
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
	  var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
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
 * Load Arduino code from component pre_arduino to webserver
 * and open it in IDE Arduino
 * Thansk to gasolin
 */

BlocklyDuino.uploadClick = function() {
    var code = $('#pre_arduino').text();
    
    var url = "http://127.0.0.1:888/";
    var method = "POST";

    // You REALLY want async = true.
    // Otherwise, it'll block ALL execution waiting for server response.
    var async = true;
	var response = confirm("Ready to upload to Arduino?");
	
	if (response == true) {
		var request = new XMLHttpRequest();
		
		request.onreadystatechange = function() {
			if (request.readyState != 4) { 
				return; 
			}
			
			var status = parseInt(request.status); // HTTP response status, e.g., 200 for "200 OK"
			var errorInfo = null;
		};

		request.open(method, url, async);
		request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		request.send(code);	  
	}
}

/**
 * Load blocks from local file.
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
    BlocklyDuino.renderContent();
  }
};

/**
 * Binds functions to each of the buttons, nav links, and related.
 */
BlocklyDuino.bindFunctions = function() {
	// Navigation buttons
	$('#btn_delete').on("click", BlocklyDuino.discard);
	$('#btn_saveXML').on("click", BlocklyDuino.saveXmlFile);
	$('#btn_saveArduino').on("click", BlocklyDuino.saveArduinoFile);	
	$('#btn_pasteIDEArduino').on("click", BlocklyDuino.uploadClick);

	$('#pinout').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val();
	});
	$('#pinout').on("change", BlocklyDuino.arduinoCard);
	
	$('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);

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
	
	$('#btn_valid_msg').on("click", function() {
		if ($('#ajax_msg').prop("checked")) {
			window.sessionStorage.msg_ajax_seen = true;
		}
		$('#ajaxModal').modal('hide');
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
	});

	$('#videoModal button.close').on('click', function() {
		$('#videoModal').css("z-index", 0);
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
BlocklyDuino.loadToolboxDefinition = function() {
	var toolboxFile = BlocklyDuino.getStringParamFromUrl('toolbox', '');

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
BlocklyDuino.changeToolboxDefinition =  function (){
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
 * Get the size selected from the URL.
 * 
 * @return {int} selectd size.
 */
BlocklyDuino.getSize = function() {
  var size = BlocklyDuino.getStringParamFromUrl('size', '');
  if (size != 'max') {
	  size = '';
  }
  return size;
};

/**
 * Maximize/Minimize content blocks div 
 */
BlocklyDuino.changeSize = function() {
  // Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();

  var search = window.location.search;
  if (search.length <= 1) {
    search = '?size=max';
  } else if (search.match(/[?&]size=[^&]*/)) {
    search = search.replace(/([?&]size=)[^&]*/, '');
    search = search.replace(/\&/, '?');
  } else {
    search = search.replace(/\?/, '?size=max&');
  }

  // remove url file
  search = search.replace(/([?&]url=)[^&]*/, '');

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Initialize Blockly.  Called on page load.
 */
BlocklyDuino.init = function() {
	
	BlocklyDuino.setOrientation();
	
	BlocklyDuino.testAjax();
	
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

	// bind events to html elements
	BlocklyDuino.bindFunctions();

	// open ConfigToolbox modal
	if (BlocklyDuino.getStringParamFromUrl('openConfigToolbox', '') != '') {
		delete window.localStorage.toolboxids;
		BlocklyDuino.openConfigToolbox();
		$("#configModal .close").hide();
		$('#btn_close_config').hide();
		$("#configModal").modal({ backdrop: 'static', keyboard: false });
	}
	
	$(document).ready(
		// load the compilerflasher module
		function() {
			compilerflasher = new compilerflasher(BlocklyDuino.getFiles);
					
			compilerflasher.on("pre_verify", function() {
				$("#debug_arduino").html(MSG['pre_verify']);
			});
			compilerflasher.on("verification_succeed",
					function(binary_size) {
						$("#debug_arduino").html(
								MSG['verification_succeed'] + binary_size);
					});
			compilerflasher.on("verification_failed",
					function(error_output) {
						$("#debug_arduino").html(
								MSG['verification_failed'] + error_output);
					});
		});
		
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
					$("#btn_create_example").attr("href","examples.php");
					} else {
					$("#btn_create_example").attr("href","examples.html");	
					}
};

/**
 * Set menu orientation 
 */
BlocklyDuino.setOrientation = function() {

	var newOrientation = BlocklyDuino.getStringParamFromUrl('ort', '');
	
	if (newOrientation == 'hor') {
		$("#ul_nav").addClass("nav nav-pills");
		$("#menuPanelConfig").addClass("menuPanelBlockly-hor");
		$("#menuPanelBlockly").addClass("menuPanelBlockly-hor");
		$("#menuPanelFiles").addClass("menuPanelFiles-hor");
		$("#divTabpanel").addClass("divTabpanel-hor");
		$("#div_help_button").addClass("div_help_button-hor");
		$("#div_tools_button").addClass("div_tools_button-hor");		
		$("#div_miniPicture").addClass("div_miniPicture-hor");
		
		$("#btn_picture").removeClass("btn-block");
		$("#btn_config").removeClass("btn-block");
		$("#btn_supervision").removeClass("btn-block");

		$("#btn_saveXML").removeClass("btn-block");
		$("#btn_fakeload").removeClass("btn-block");
		$("#btn_example").removeClass("btn-block");
		
	} else {
		$("#ul_nav").addClass("nav nav-pills nav-stacked");
		$("#menuPanelBlockly").addClass("menuPanelBlockly-ver");
		if (Code.isRtl()) {
			$("#ul_nav").addClass("navbar-right");
		}
		
		$("#menuPanel").addClass("menuPanel-ver");
//		var menuPanelFiles = document.getElementById("menuPanelFiles");
		$("#btn_config").addClass("btn_ver");
		$("#btn_supervision").addClass("btn_ver");
		$("#btn_saveXML").addClass("btn_ver");
		$("#btn_fakeload").addClass("btn_ver");
		$("#btn_picture").addClass("btn_ver");
		$("#btn_example").addClass("btn_ver");
		//$("#btn_plugin_codebender").addClass("btn_ver");
		$("#divTabpanel").addClass("divTabpanel-ver");
		$("#div_help_button").addClass("div_help_button-ver");
		$("#div_tools_button").addClass("div_tools_button-ver");
		$("#div_miniPicture").addClass("div_miniPicture-ver");	
		var div_miniPicture_height = $("#div_help_button").position().top
												- ($("#menuPanelFiles").offset().top + $("#menuPanelFiles").outerHeight(true))
												- 10;
		$("#arduino_card_miniPicture").css({"max-width" : '180px',  "max-height" : div_miniPicture_height});
		if (div_miniPicture_height < 180) {
			$("#arduino_card_miniPicture").addClass("rotate90");
		}
	}
};

/**
 * Create content for modal example 
 */
BlocklyDuino.buildExamples = function() {
	$.ajax({
	    cache: false,
	    url: "./examples/examples.json",
	    dataType: "json",
	    success :  function(data) {
				$("#includedContent").empty();
				$.each(data, function(i, example){
					if (example.visible) {
						var line = "<tr>"
								   + "<td><a href='index.html?lang=fr?url="+example.source_url+"'>"
								   + example.source_text
								   + "</a></td>"
								   + "<td>"
								   + "<a href='"+example.image+"' target=_blank>"
								   + "<img class='vignette' src='"+example.image+"'>"
								   + "</a>"
								   + "</td>"
								   + "<td>"
								   + "<a href='"+example.link_url+"' target=_blank>"
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
	    	if (!window.sessionStorage.msg_ajax_seen) {
	    		$('#ajaxModal').modal('show');	    		
	    	}
			BlocklyDuino.ajaxOK = false;
	    }
	});
};


/**
 * Add convert bin <-> text
 */
BlocklyDuino.text2bin = function() {
  var output = document.getElementById("ti2");
  var input = document.getElementById("ti1").value;
  output.value = "";
  var data=input;
	var binArray = [];
	var datEncode = "";
	var i;
	for (i=0; i < data.length; i++) {
	binArray.push(data[i].charCodeAt(0).toString(2));
	}
	var j;
	for (j=0; j < binArray.length; j++) {
	var pad = padding_left(binArray[j], '0', 8);
	datEncode += pad + ' ';
	}
	output.value = datEncode;
};

function padding_left(s, c, n) {
	if (!s || !c || s.length >= n) {
		return s;
	}

	var max = (n - s.length) / c.length;
	for ( var i = 0; i < max; i++) {
		s = c + s;
	}
	return s;
};

BlocklyDuino.bin2text = function() {
var output = document.getElementById("ti4");
var input = document.getElementById("ti3").value;
output.value = "";
var s = input;
	s = s.replace(/\s/g, "");
	var data = "";
	if (s.length % 8 != 0) {
		data = "???:";
	} else {
		while (s.length > 0) {
			var first8 = s.substring(0, 8);
			s = s.substring(8);
			var chr = parseInt(first8, 2);
			data += String.fromCharCode(chr);
		}
	}
	output.value = data;
};