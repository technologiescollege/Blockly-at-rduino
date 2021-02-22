/**
 * Blockly@rduino
 */

'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldDate');

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

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
BlocklyDuino.workspace = null;
var BlocklyLevel = 'none';


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
		$(".blocklyToolboxDiv").show();		
		$("#tools_blocks").show();
		$("#btn_levels").show();
		$("#barre").hide();
	} else {		
		switch (content.prop('id')) {
		// case 'content_xml':
			// $(".blocklyToolboxDiv").hide();
			// $('#pre_xml').text(Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(BlocklyDuino.workspace)));
			// if (typeof prettyPrintOne == 'function') {
				// $('#pre_xml').html(prettyPrintOne($('#pre_xml').html(), 'xml'));
			// }
			// $("#tools_blocks").hide();
			// break;

		case 'content_arduino':
			$(".blocklyToolboxDiv").hide();
			try {
				var cardId = BlocklyDuino.getStringParamFromUrl('card', '');
				if (cardId != 'kit_microbit') $('#pre_Arduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
					else $('#pre_Arduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
				if (typeof prettyPrintOne == 'function') {
					$('#pre_arduino').html(prettyPrintOne($('#pre_arduino').html(), 'cpp'));
				}
				BlocklyDuino.toggleFunctionsChoice();
			} catch (e) {
				alert(e);
			}
			$("#tools_blocks").hide();
			$("#btn_levels").hide();
			$("#barre").show();
			break;

		// case 'content_supervision':
			// $("#content_supervision").load('./tools/supervision/pymata_arduino.html', BlocklyDuino.renderSupervisionContent);
			// $("#tools_blocks").hide();
			// $("#divTitre").hide();
		}
	}	
};

/**
 * Render block factory
 */
BlocklyDuino.renderArduinoCodePreview = function() {
	var cardId = BlocklyDuino.getStringParamFromUrl('card', '');
	if (cardId != 'kit_microbit') {
		$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_arduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
	}
		else {
			$('#pre_previewArduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
			$('#pre_arduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
		}
	if (typeof prettyPrintOne == 'function') {
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
		$('#pre_arduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
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
	jscolor.installByClassName("jscolor");
	$.getScript("./tools/supervision/s2aio_iot.js" );
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
	var cardId = BlocklyDuino.getStringParamFromUrl('card', '');
	if (cardId != 'kit_microbit') {
		$('#pre_previewArduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
		$('#pre_arduino').text(Blockly.Arduino.workspaceToCode(BlocklyDuino.workspace));
	}
		else {
			$('#pre_previewArduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
			$('#pre_arduino').text(Blockly.Python.workspaceToCode(BlocklyDuino.workspace));
		}
	if (typeof prettyPrintOne == 'function') {
		$('#pre_previewArduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
		$('#pre_arduino').html(prettyPrintOne($('#pre_previewArduino').html(), 'cpp'));
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
	} else {
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
		Blockly.Xml.domToWorkspace(xml, BlocklyDuino.workspace);
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
			Blockly.Xml.domToWorkspace(xml, BlocklyDuino.workspace);
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
BlocklyDuino.setArduinoBoard =  function () {
	var cardId = BlocklyDuino.getStringParamFromUrl('card', '');
	if (!cardId) {
		cardId = BlocklyDuino.selectedCard;
	}
	$("#board_select").val(cardId);
	
	// set the card from url parameters
	profile["defaultBoard"] = profile[cardId];
	$('#arduino_card_picture').attr("src", profile.defaultBoard['picture']);
	$('#arduino_card_miniPicture').attr("src", profile.defaultBoard['miniPicture']);
	$('#arduino_card_miniPicture_Menu').attr("src", profile.defaultBoard['miniPicture_hor']);	
	$('#pictureModalLabel').attr('title',(profile.defaultBoard['description']));
	if ($("#board_select").val().substring(0,4) == "kit_") {
		$("#btn_config").remove();
		$("#btn_config_kit").removeClass('hidden');
		$('#btn_config_kit').attr("href", profile[$("#board_select").val()]['help_link']);
	}
	BlocklyDuino.cardPicture_change_AIO();
};


/**
 * Binds functions to each of the buttons, nav links, and related.
 */
BlocklyDuino.bindFunctions = function() {
		
	$('#clearLink', '#btn_reset').on("click", BlocklyDuino.clearLocalStorage);
	
	var clipboard = new Clipboard('#btn_CopyCode');
	
	// Navigation buttons
	$('#btn_delete').on("click", BlocklyDuino.discard);
	$('#btn_undo').on("click", BlocklyDuino.Undo);
	$('#btn_redo').on("click", BlocklyDuino.Redo);
	$('#btn_verify_local').on("click", BlocklyDuino.verify_local_Click_IDE);
	$('#btn_flash_local').on("click", BlocklyDuino.uploadClick_IDE);
	$('#btn_pasteIDEArduino').on("click", BlocklyDuino.ArduinoIDEClick_IDE);
	$('#btn_saveArduino').on("click", BlocklyDuino.saveArduinoFile_IDE);
	$('#btn_block_capture').on("click", BlocklyDuino.workspace_capture_IDE);
	$('#btn_saveXML, #menu_12').on("click", BlocklyDuino.saveXmlFile_IDE);
	$('#btn_fakeload, #menu_11').on("click", BlocklyDuino.load_IDE);
	$('#btn_preview').on("click", BlocklyDuino.DialogCode);		
	$('#btn_validCode').on("click", BlocklyDuino.valideEditedCode_IDE);
	$('#btn_CopyCode').remove();
	$('#btn_verify_local').remove();
	$('#debug_arduino').remove();
	$('#tab_supervision').remove();
	$('#tab_arduino').remove();
	$('#pre_arduino').css({'height' : '95%'});
		
	$('#toggle-Colors').on("change", BlocklyDuino.toggleTextColors);

	$('#board_select').on("focus", function() {
		BlocklyDuino.selectedCard = $(this).val();
	});
	$('#btn_edit_code').mouseover(function() {
		document.getElementById("survol").textContent = MSG['span_edit_code'];
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_saveArduino').mouseover(function() {
		document.getElementById("survol").textContent = MSG['span_saveIno'];
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_verify_local').mouseover(function() {
		document.getElementById("survol").textContent = MSG['span_verify_local'];
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_flash_local').mouseover(function() {
		document.getElementById("survol").textContent = MSG['span_flash_local'];
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_term').mouseover(function() {
		document.getElementById("survol").textContent = MSG['span_connect_serial'];
	}).mouseout(function() {
		document.getElementById("survol").textContent = "";
	});
	$('#btn_configGlobal').on("click", BlocklyDuino.buildlibraries);
	$('#configModalGlobal').on("hidden.bs.modal", function() {
		$("#board_select").val(BlocklyDuino.selectedCard);
		BlocklyDuino.cardPicture_change_AIO();
	});	
	
	$('#toolboxes').on("focus", function() {
		BlocklyDuino.selectedToolbox = $(this).val();
	});
	
	//menu déroulant
	$('#toolboxes, #toggle-Functions').on("change", BlocklyDuino.changeToolboxDefinition);
	// $('#toolboxes').on("change", BlocklyDuino.changeToolboxDefinition);
	
	//bouton de niveaux
	$('#toolbox_algo, #menu_420').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 1;
		BlocklyDuino.changeToolboxDefinition();
	});
	
	$('#toolbox_arduino_1, #menu_421').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 2;
		BlocklyDuino.changeToolboxDefinition();
	});
	
	$('#toolbox_arduino_2, #menu_422').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 3;
		BlocklyDuino.changeToolboxDefinition();
	});
	
	$('#toolbox_arduino_3, #menu_423').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 4;
		BlocklyDuino.changeToolboxDefinition();
	});
	
	$('#toolbox_arduino_4, #menu_424').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 5;
		BlocklyDuino.changeToolboxDefinition();
	});
	
	$('#toolbox_arduino_all, #menu_429').on("click", function(e) {
		e.preventDefault();
		document.getElementById("toolboxes").options.selectedIndex = 6;
		BlocklyDuino.changeToolboxDefinition();
	});

	$('#menuPanelBlockly li[id^=tab_]').on("click", function() {
		BlocklyDuino.selectedTab = $(this).attr('id').substring(4);
		BlocklyDuino.renderContent();
	});

	$('#divTitreMenu_menu li[id^=mtab_]').on("click", function() {
		BlocklyDuino.selectedTab = $(this).attr('id').substring(5);
		BlocklyDuino.renderContent();
	});

	$('#btn_miniMenuPanel, #menu_441').on("click", BlocklyDuino.miniMenuPanel);

	$('#btn_size').on("click", BlocklyDuino.changeSize);
	$('#btn_config').on("click", BlocklyDuino.openConfigToolbox);

	$('#btn_edit_code').on("click", BlocklyDuino.editArduinoCode);

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
	
	$('#btn_inline').on("click", BlocklyDuino.inline);
	//$('#btn_wiring').on("click", BlocklyDuino.openWiringDialog);
	$('#btn_blocs_picture_mini').on("click", BlocklyDuino.blockPicture_mini);
	$('#btn_blocs_picture_maxi').on("click", BlocklyDuino.blockPicture_maxi);
	$('#btn_blocs_picture').on("click", BlocklyDuino.blockPicture);
	
	$('#btn_card_picture_mini').on("click", BlocklyDuino.cardPicture_mini);
	$('#btn_card_picture_maxi').on("click", BlocklyDuino.cardPicture_maxi);
	$('#btn_wiring_mini').on("click", BlocklyDuino.wiring_mini);
	$('#btn_wiring_maxi').on("click", BlocklyDuino.wiring_maxi);

	$('#btn_example, #menu_131').on("click", BlocklyDuino.buildExamples);

	$('#miniCard, #miniCard_Menu').on('click', function() {
		var dialogConvert = $("#pictureModalLabel").dialog({
			autoOpen: false,
			resizable: false,
			height: $("#arduino_card_picture").offsetHeight,
			width: $("#arduino_card_picture").offsetWidth,
			show: {
				effect: "drop",
				duration: 600
			},
			hide: {
				effect: "drop",
				duration: 600
			},
			position: {
				my: "center",
				at: "center",
				of: window
			},
		});
		if (!dialogConvert.dialog("isOpen")) {
			dialogConvert.dialog("open").dialog( "option", "buttons" );
		};
	});
	
	$('#btn_wiring, #menu_21').on('click', function() {
		var dialogConvert = $("#wiringModal").dialog({
			autoOpen: false,
			resizable: true,
			height: 400,
			width: 600,
			show: {
				effect: "drop",
				duration: 600
			},
			hide: {
				effect: "drop",
				duration: 600
			},
			position: {
				my: "center",
				at: "center",
				of: window
			},
		});
		if (!dialogConvert.dialog("isOpen")) {
			dialogConvert.dialog("open").dialog( "option", "buttons" );
		};
	});
	
	$('#btn_convert, #menu_31').on('click', function() {
		var dialogConvert = $("#convertModal").dialog({
			autoOpen: false,
			resizable: false,
			height: 200,
			width: 480,
			show: {
				effect: "drop",
				duration: 600
			},
			hide: {
				effect: "drop",
				duration: 600
			},
			position: {
				my: "center",
				at: "center",
				of: window
			},
		});
		if (!dialogConvert.dialog("isOpen")) {
			dialogConvert.dialog("open").dialog( "option", "buttons" );
		};
	});
	
	$('#btn_screenduino, #menu_32').on('click', function() {
		var iframe = $("#screen_falsemodal > iframe");
		var $screenlang = "./tools/screenduino/index.html";
		var dialogScreen = $("#screen_falsemodal").dialog({
			autoOpen: false,
			resizable: true,
			height: 600,
			width: 650,
			show: {
				effect: "drop",
				duration: 600
			},
			hide: {
				effect: "drop",
				duration: 600
			},
			position: {
				my: "center",
				at: "center",
				of: window
			},
		});
		iframe.attr({
			width: "100%",
			height: "100%",
			src: $screenlang
		});
		if (!dialogScreen.dialog("isOpen")) {
			dialogScreen.dialog("open").dialog( "option", "buttons" );
		};
	});
	$('#btn_RGB, #menu_33').on('click', function() {
		var iframe = $("#RGB_falsemodal > iframe");
		var $RGBlang = "./tools/RGB/RGB_" + Code.LANG + ".html";
		var dialogRGB = $("#RGB_falsemodal").dialog({
			autoOpen: false,
			resizable: true,
			height: 760,
			width: 550,
			show: {
				effect: "drop",
				duration: 600
			},
			hide: {
				effect: "drop",
				duration: 600
			},
			position: {
				my: "center",
				at: "center",
				of: window
			},
		});
		iframe.attr({
			width: "100%",
			height: "100%",
			src: $RGBlang
		});
		if (!dialogRGB.dialog("isOpen")) {
			dialogRGB.dialog("open").dialog( "option", "buttons" );
		};
	});
	//mini menus version
	$('#menu_24').on('click', function() {
		$("#barre").prependTo("#content_arduino");
	});
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
 * Change the ToolBox following the chosen configuration in the modal
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
	// put id's in url
	search = BlocklyDuino.addReplaceParamToUrl(search, 'toolboxids', toolboxIds);
	
	// store toolboxe id in session
	window.localStorage.toolbox = $("#toolboxes").val();
	
	search = BlocklyDuino.addReplaceParamToUrl(search, 'toolbox', $("#toolboxes").val());
	
	BlocklyDuino.toggleFunctionsChoice();
	
	// remove values from url to test toggles
	search = search.replace(/([?&]sortby=)[^&]*/, '');
	// put values in url
	if (search.length <= 1) {
		search = '?sortby=' + window.localStorage.catblocsort;
	} else {
		search = search + '&sortby=' + window.localStorage.catblocsort;
	}
	
	window.location = window.location.protocol + '//'+ window.location.host + window.location.pathname + search;
};

/**
 * Build the xml using toolboxes checked in config modal and stored in session
 */
BlocklyDuino.buildToolbox = function() {
	// set the toolbox from url parameters
	var loadIds = BlocklyDuino.getStringParamFromUrl('toolboxids', '');
	var kitURL = BlocklyDuino.getStringParamFromUrl('card', '');
	
	// set the toolbox from local storage
	if (loadIds === undefined || loadIds === "") {
		loadIds = window.localStorage.toolboxids;
	}

	// set the default toolbox if none
	if (loadIds === undefined || loadIds === "" || kitURL.startsWith('kit')) {
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
	// update buttons levels
	$('#toolbox_algo').removeClass("active");
	$('#toolbox_arduino_1').removeClass("active");
	$('#toolbox_arduino_2').removeClass("active");
	$('#toolbox_arduino_3').removeClass("active");
	$('#toolbox_arduino_4').removeClass("active");
	$('#toolbox_arduino_all').removeClass("active");
	$('#'+toolboxFile).addClass("active");
	
	BlocklyDuino.toggleFunctionsChoice();
	if (window.localStorage.catblocsort == "F") {
		toolboxFile += '_functions';
	}
	
	$.ajax({
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
				console.log('toolbox file problem');
			});
};

/**
 * Change toolbox definition
 */
BlocklyDuino.changeToolboxDefinition =  function (){
	BlocklyDuino.loadToolboxDefinition($("#toolboxes").val());
	BlocklyDuino.openConfigToolbox();
}; 

BlocklyDuino.changeLevelToolboxDefinition =  function (level){
	BlocklyDuino.loadToolboxDefinition(level);
	BlocklyDuino.openConfigToolbox();
}; 


/**
 * Initialize Blockly.  Called on page load.
 */
BlocklyDuino.init = function() {

	BlocklyDuino.setOrientation();
	
	BlocklyDuino.testAjax();
	
	BlocklyDuino.changeFontURL();
	
	if ($('#toolbox').length) {
		BlocklyDuino.toolboxInIndexHtml = true;		
	}
	
	if (!BlocklyDuino.toolboxInIndexHtml && BlocklyDuino.ajaxOK) {
		BlocklyDuino.loadToolboxDefinition();
	}
	
	Code.initLanguage();

	if (BlocklyDuino.getSize() != '') {
		if (BlocklyDuino.getSize() == 'max') {
			$("#menuPanel").css({"display" : "none"});
			// maximize div
			$("#divTabpanel").css({"margin-left" : "0px"});
			$('#btn_size').attr("title", MSG['btn_size_min']);
			$('#divTitre').addClass("hidden");
			$('#div_toolboxes').addClass("hidden");
			$('#divTitreMenu').removeClass("hidden");
			$('#icon_btn_size').removeClass('glyphicon-resize-full');
			$('#icon_btn_size').addClass('glyphicon-resize-small');				
			$('#div_toolboxes').prepend($('#toolboxes'));
		}
		if (BlocklyDuino.getSize() == 'miniMenu') {
			$("#menuPanel").css({"width" : "40px"});
			$("#divTabpanel").css({"margin-left" : "50px"});
			$(".blocklyFlyout").css({"margin-left" : "155px"});
			$(".blocklySvg").css({"margin-left" : "205px"});
			$(".blocklyWorkspace").css({"margin-left" : "205px"});
			$("#configGlobalLabel").remove();
			$("#btn_configGlobal").removeClass("btn-block");
			$("#divTitreMenu_miniCard").removeClass("hidden");			
			$('#icon_btn_size').addClass('glyphicon-resize-full');
			$('#icon_btn_size').removeClass('glyphicon-resize-small');
			$("#div_miniPicture").remove();
			$("#btn_config_kit").remove();
			$("#btn_miniMenuPanel > span").removeClass("glyphicon-step-backward");
			$("#btn_miniMenuPanel > span").addClass("glyphicon-step-forward");
			
			$("#span_config").addClass("hidden");
			$("#btn_config").removeClass("btn-block");
			
			$(".nav").removeClass("display-block");
			$(".nav").css({"width" : "40px"});
			$("#a_supervision").addClass("hidden");
			$("#a_blocks").addClass("hidden");
			$("#a_arduino").addClass("hidden");
			
			$("#span_saveXML").addClass("hidden");
			$("#btn_saveXML").removeClass("btn-block");
			
			$("#span_fakeload").addClass("hidden");
			$("#btn_fakeload").removeClass("btn-block");
			
			$("#span_example").addClass("hidden");
			$("#btn_example").removeClass("btn-block");
			
			$("#span_create_example").addClass("hidden");
			$("#btn_create_example").removeClass("btn-block");
			
			$("#menuPanelConfig").addClass("btn-group-vertical");
			$("#menuPanelFiles").addClass("btn-group-vertical");
			$("#menuPanelFiles").css({"margin-bottom" : "10px"});
			$("#div_about").addClass("btn-group-vertical");
			$("#div_about").css({"width" : "40px", "bottom" : "10px", "position" : "fixed"});
			$("#span_about").remove();
			$("#div_tools_button").addClass("btn-group-vertical");
			$("#div_tools_button").removeClass("div_tools_button-ver");
			$("#div_tools_button").css({"width" : "40px", "margin-bottom" : "10px"});
			
			$("#logo_Titre").css({'width' : '40px',
				'position' : 'absolute',
				'right' : '250px',
				'bottom' : '40px',
				'z-index' : '10'});
			$("#header").css({"height" : "0px"});
			$("#divBody").css({"top" : "0px"});
			$("#logo_Titre").removeClass("hidden");
			$("#btn_delete").css({"bottom" : "80px"});
			$("#divTitreMenu_miniCard").css({'position' : 'fixed',
				'top' : '510px',
				'left' : '5px',
				'z-index' : '10'});		
			$("#tools_blocks").css({'position' : 'absolute',
				'z-index' : '10',
				'right' : '0px'});
		}
	} else {
		$("#menuPanel").css({"display" : ""});
		// minimize div
		$("#divTabpanel").css({"margin-left" : "205px"});
		$('#btn_size').attr("title", MSG['btn_size_max']);
		$('#divTitre').removeClass("hidden");
		$('#div_toolboxes').removeClass("hidden");
		$('#divTitreMenu').addClass("hidden");
		$("#divTitreMenu_miniCard").addClass("hidden");
		$("#div_miniPicture").removeClass("hidden");	
		$('#icon_btn_size').addClass('glyphicon-resize-full');
		$('#icon_btn_size').removeClass('glyphicon-resize-small');
		$("#btn_miniMenuPanel > span").addClass("glyphicon-step-backward");
		$("#btn_miniMenuPanel > span").removeClass("glyphicon-step-forward");
		}
		
	BlocklyDuino.setArduinoBoard();
	
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
	
	//global config
	BlocklyDuino.initBlocSort();
	
	/*pour changer couleur texte dans toolbox */
//    $("div:contains('bitbloq').blocklyTreeRow, div:contains('bitbloq').blocklyTreeRow ~ div").on("click", function() {
//        $(this).removeClass("blocklyTreeSelected")
//        $(this).find("span").removeClass("blocklyTreeIconNone")
//        $(this).find("span").addClass('blocklyTreeIcon fa fa-cloud');
//    });
	
	if (window.location.protocol == 'http:') {
					$("#btn_create_example, menu_132").attr("href","./examples/examples.php?lang=" + Code.LANG);
					} else {
					$("#btn_create_example, menu_132").attr("href","./examples/examples.html?lang=" + Code.LANG);	
					}
	
	BlocklyDuino.OnOffLine();
	BlocklyDuino.ExampleWiring();
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
								   + "<td><a href='" + search + "&url=./examples/" + example.source_url+"'>"
								   + example.source_text
								   + "</a></td>"
								   + "<td>"
								   + "<a href='./examples/" + example.image + "' target=_blank>"
								   + "<img class='vignette' src='./examples/" + example.image + "'>"
								   + "</a>"
								   + "</td>"
								   + "<td>"
								   + "<a href='./examples/" + example.link_url + "' target=_blank>"
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
    if (Blockly.Blocks['variables_const']) {
      // <block type="variables_const" gap="20">
      //   <field name="VAR">item</field>
      // </block>
      var block = goog.dom.createDom('block');
      block.setAttribute('type', 'variables_const');
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
    if (Blockly.Blocks['variables_set_init']) {
    	var block = goog.dom.createDom('block');
    	block.setAttribute('type', 'variables_set_init');
    	if (Blockly.Blocks['variables_set_init']) {
    		block.setAttribute('gap', 8);
    	} else {
    		block.setAttribute('gap', 24);
    	}
    	xmlList.push(block);
    }
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
/*
BlocklyDuino.openWiringDialog = function() {
	var iframe = $("#wiring_dialog > iframe");
	var dialog = $("#wiring_dialog").dialog({
		autoOpen: false,
		resizable: true,
		height: 600,
		width: 800,
		show: {
			effect: "slide",
			duration: 1000
		  },
		hide: {
			effect: "drop",
			duration: 1000
		  }
	});
	iframe.attr({
		width: "100%",
		height: "100%",
		src: "https://fr.robom.ru"
	});
	if (!dialog.dialog("isOpen")) {
		dialog.dialog("open");
	}
};*/

BlocklyDuino.DialogCode = function() {
	var dialogCode = $("#pre_previewArduino").dialog({
		autoOpen: false,
		resizable: true,
		height: 600,
		width: 400,
		show: {
			effect: "drop",
			duration: 1000
		},
		hide: {
			effect: "drop",
			duration: 1000
		},
		position: {
			my: "right top",
			at: "right top",
			of: "#content_blocks"
		},
		buttons: [
			{
				text: "copy-paste",
				icon: {
					primary: "btn btn_ver btn-danger btn-block"
					},
				click: BlocklyDuino.ArduinoIDEClick_IDE,
			},
			{
				text: 'save',
				icons: {
					primary: "ui-icon-cancel"
					},
				click: BlocklyDuino.saveArduinoFile_IDE,
			},
			{
				text: 'upload',
				icons: {
					primary: "ui-icon-cancel"
					},
				click: BlocklyDuino.uploadClick_IDE,
			}
		]
	});
	if (!dialogCode.dialog("isOpen")) {
		dialogCode.dialog("open").dialog( "option", "buttons" );
	};
};

BlocklyDuino.DialogCode_edit = function() {
	$('#edit_code').val($('#pre_previewArduino').text());	
	if (typeof prettyPrintOne == 'function') {
		$('#edit_code').html(prettyPrintOne($('#edit_code').html(), 'cpp'));
	}
	//$('#pre_previewArduino').addClass('hidden');
	
}