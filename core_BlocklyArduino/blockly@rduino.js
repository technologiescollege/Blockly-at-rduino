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
BlocklyDuino.pluginCodebender_found = navigator.plugins['Codebender.cc'] !== undefined
|| navigator.plugins['Codebendercc'] !== undefined;

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
	if (!cardId) {
		cardId = "arduino_uno";
		$("#pinout").val(cardId);
	}
	
	// set the card from url parameters
	window.profile["defaultBoard"]=window.profile[cardId];
	$('#arduino_card_picture').attr("src", profile.defaultBoard['picture']);
	$('#arduino_card_miniPicture').attr("src", profile.defaultBoard['miniPicture']);	
	$('#pictureModalLabel').text(profile.defaultBoard['description']);
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
	$('#btn_validConfigGlobale').on("click", BlocklyDuino.validateConfigGlobal);
	$('#btn_card_picture_change').on("click", BlocklyDuino.validateConfigOffline);
	
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

	// open ConfigToolbox modal
	if (BlocklyDuino.getStringParamFromUrl('openConfigToolbox', '') != '') {
		delete window.localStorage.toolboxids;
		BlocklyDuino.openConfigToolbox();
		$("#configModal .close").hide();
		$('#btn_close_config').hide();
		$("#configModal").modal({ backdrop: 'static', keyboard: false });
//		$("#configModalGlobal .close").hide();
//		$('#btn_close_config_global').hide();
//		$("#configModalGlobal").modal({ backdrop: 'static', keyboard: false });
	}
	
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
	$.ajax({
	    cache: false,
	    url: "./examples/examples.json",
	    dataType: "json",
	    success :  function(data) {
				$("#includedContent").empty();
				$.each(data, function(i, example){
					if (example.visible) {
						var line = "<tr>"
								   + "<td><a href='index.html?lang=fr&url=./examples/"+example.source_url+"'>"
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
	    	if (!window.sessionStorage.msg_ajax_seen) {
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
 * Modal first connection -> info
 */
BlocklyDuino.firstBlocklyArduino = function() {
	if (BlocklyDuino.getStringParamFromUrl('AIO', '') == 'on') {
		$('#firstModal').addClass('draggable');
	} else if (!window.sessionStorage.msg_first_seen) {
		$('#firstModal iframe').prop('src', "https://player.vimeo.com/video/179569437?autoplay=1&title=0&byline=0&portrait=0"); 
		$('#firstModal').modal('show');	
	}
};