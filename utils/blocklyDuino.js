/**
 * BlocklyDuino
 */

'use strict';

/**
 * Create a namespace for the application.
 */
var BlocklyDuino = {};
Blockly.pathToBlockly = './';
Blockly.ajax = null;

/**
 * List of tab names.
 * @private
 */
BlocklyDuino.TABS_ = ['blocks', 'arduino', 'term', 'xml'];

BlocklyDuino.selectedTab = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * 
 * @param {string}
 *            clickedName Name of tab clicked.
 */
BlocklyDuino.tabClick = function(clickedName) {
	BlocklyDuino.selectedTab = clickedName;

	BlocklyDuino.renderContent();
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
BlocklyDuino.renderContent = function() {
  var content = document.getElementById('content_' + BlocklyDuino.selectedTab);
  
  if (content.id == 'content_blocks') {
	    // If the workspace was changed by the XML tab, Firefox will have performed
	    // an incomplete rendering due to Blockly being invisible.  Rerender.
	    Blockly.mainWorkspace.render();
	  } else if (content.id == 'content_xml') {
		var xml_content = document.getElementById('pre_xml');
	    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	    xml_content.textContent = Blockly.Xml.domToPrettyText(xmlDom);
	    if (typeof prettyPrintOne == 'function') {
	      var code_html = prettyPrintOne(xml_content.innerHTML, 'xml');
	      xml_content.innerHTML = code_html;
	    }
	  } else if (content.id == 'content_arduino') {
	    var arduino_content = document.getElementById('pre_arduino');
	    try {
		    arduino_content.textContent = Blockly.Arduino.workspaceToCode();
		    if (typeof prettyPrintOne == 'function') {
		      var code_html = prettyPrintOne(arduino_content.innerHTML, 'cpp');
		      arduino_content.innerHTML = code_html;
		    }
	    } catch (e) {
	            alert(e);
		}
	  }
};

/**
 * Populate the the edit textarea "edit_code" with the pre arduino code
 */
BlocklyDuino.editArduinoCode = function() {
	    var arduino_code = document.getElementById('edit_code');
	    var arduino_content = document.getElementById('pre_arduino');
	    
	    arduino_code.value = arduino_content.textContent;
};

/**
 * Populate the content arduino code pane with the edit textarea "edit_code"
 */
BlocklyDuino.valideEditedCode = function() {
	    var arduino_code = document.getElementById('edit_code');
	    var arduino_content = document.getElementById('pre_arduino');
	    try {
		    arduino_content.textContent = arduino_code.value;
		    if (typeof prettyPrintOne == 'function') {
		      var code_html = prettyPrintOne(arduino_content.innerHTML, 'cpp');
		      arduino_content.innerHTML = code_html;
		    }
	    } catch (e) {
	            alert(e);
		}
};

/**
 * Render Arduino code in preview box
 */
BlocklyDuino.renderArduinoCodePreview = function() {
	var arduino_content = document.getElementById('pre_previewArduino');
	arduino_content.textContent = Blockly.Arduino.workspaceToCode();
	if (typeof prettyPrintOne == 'function') {
		var code_html = prettyPrintOne(arduino_content.innerHTML, 'cpp');
		arduino_content.innerHTML = code_html;
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
 * Create AJAX request
 *
 * @return {request} The AJAX request
 */
BlocklyDuino.createAJAX = function() {
	var request;
	try {
		// Firefox, Chrome, IE7+, Opera, Safari
		request = new XMLHttpRequest();
	} catch (e) {
		try {
			// IE6 and earlier
			request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				request = null;
			}
		}
	}
	return request;
};

/**
 * Load blocks from AJAX load
 */
BlocklyDuino.onSuccess = function() {
	if (BlocklyDuino.ajax.readyState == 4) {
		if (BlocklyDuino.ajax.status == 200) {
			try {
				BlocklyDuino.loadBlocks(BlocklyDuino.ajax.responseText);
			} catch (e) {
				alert(e);
			}
		}
	}
};

/**
 * Load blocks from URL file using AJAX request
 */
BlocklyDuino.load_by_url = function(uri) {
	BlocklyDuino.ajax = BlocklyDuino.createAJAX();
	if (!BlocklyDuino.ajax) {
		return 0;
	}
	if (BlocklyDuino.ajax.overrideMimeType) {
		BlocklyDuino.ajax.overrideMimeType('text/xml');
	}
	BlocklyDuino.ajax.onreadystatechange = BlocklyDuino.onSuccess;
	BlocklyDuino.ajax.open("GET", uri, true);
	BlocklyDuino.ajax.send("");
	
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
		Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
	} else {
		try {
			var loadOnce = window.localStorage.loadOnceBlocks;
		} catch (e) {
			// Firefox sometimes throws a SecurityError when accessing
			// localStorage.
			// Restarting Firefox fixes this, so it looks like a bug.
			var loadOnce = null;
		}
		if (loadOnce) {
			// Language switching stores the blocks during the reload.
			delete window.localStorage.loadOnceBlocks;
			var xml = Blockly.Xml.textToDom(loadOnce);
			Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
		}
	}
};

/*
 *  Store the blocks for the duration of the reload.
 */
BlocklyDuino.backupBlocks = function () {
  if (typeof Blockly != 'undefined' && window.localStorage) {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var text = Blockly.Xml.domToText(xml);
    window.localStorage.loadOnceBlocks = text;
  }
};

/**
 * Choose Arduino card : UNO or MEGA
 */
BlocklyDuino.arduinoCard =  function (){
  var Cacheobj=document.getElementById("pinout");
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (window.profile["default"]!=window.profile[Cacheobj.options[Cacheobj.selectedIndex].value]) {
  if (false || window.confirm(MSG['arduino_card']+' '+window.profile[Cacheobj.options[Cacheobj.selectedIndex].value].description+' ?')) {
    window.profile["default"]=window.profile[Cacheobj.options[Cacheobj.selectedIndex].value];
//    BlocklyDuino.backupBlocks();
    Blockly.mainWorkspace.clear();
//    BlocklyDuino.loadBlocks('');
    BlocklyDuino.renderContent();
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
	  var uri = 'data:text/xml;charset=utf-8,' + encodeURIComponent(data);
	  $(this)
	            .attr({
	            'download': "blockly_arduino.xml",
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
	  var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
	  $(this)
	            .attr({
	            'download': "code_arduino.ino",
	                'href': uri,
	                'target': '_blank'
	        });
};

/**
 * Load Arduino code from component pre_arduino
 */
BlocklyDuino.getFiles = function (){
    var code = document.getElementById('pre_arduino').textContent;
    code=code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return {"sketch.ino": code }
};

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
      var count = Blockly.mainWorkspace.getAllBlocks().length;
      if (count && confirm(MSG['xmlLoad'])) {
        Blockly.mainWorkspace.clear();
      }
      Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
    }
    // Reset value of input after loading because Chrome will not fire
    // a 'change' event if the same file is loaded again.
    document.getElementById('load').value = '';
  };
  reader.readAsText(files[0]);
};

/**
 * Discard all blocks from the workspace.
 */
BlocklyDuino.discard = function () {
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count < 2 || window.confirm(MSG['discard'].replace('%1', count))) {
    Blockly.mainWorkspace.clear();
    BlocklyDuino.renderContent();
  }
};

/**
 * Bind an event to a function call.
 * @param {!Element} element Element upon which to listen.
 * @param {string} name Event name to listen to (e.g. 'mousedown').
 * @param {!Function} func Function to call when event is triggered.
 *     W3 browsers will call the function with the event object as a parameter,
 *     MSIE will not.
 */
BlocklyDuino.bindEvent = function (element, name, func) {
  if (element.addEventListener) {  // W3C
    element.addEventListener(name, func, false);
  } else if (element.attachEvent) {  // IE
    element.attachEvent('on' + name, func);
  }
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
BlocklyDuino.bindClick = function (el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Binds functions to each of the buttons, nav links, and related.
 */
BlocklyDuino.bindFunctions = function () {
  // Navigation buttons
	BlocklyDuino.bindClick('btn_delete', BlocklyDuino.discard);
	BlocklyDuino.bindClick('btn_saveXML',  BlocklyDuino.saveXmlFile);
	BlocklyDuino.bindClick('btn_saveArduino',  BlocklyDuino.saveArduinoFile);

  var pinout = document.getElementById('pinout');
  BlocklyDuino.bindEvent(pinout, 'change', BlocklyDuino.arduinoCard);

  var loadInput = document.getElementById('load');
  BlocklyDuino.bindEvent(loadInput, 'change', BlocklyDuino.load);
  BlocklyDuino.bindClick('btn_fakeload', function() {loadInput.click(); });

  for (var i = 0; i < BlocklyDuino.TABS_.length; i++) {
	    var name = BlocklyDuino.TABS_[i];
	    BlocklyDuino.bindClick('tab_' + name,
		        function(name_) {return function() {BlocklyDuino.tabClick(name_);};}(name));
  }

  BlocklyDuino.bindClick('btn_size',  BlocklyDuino.changeSize);
  BlocklyDuino.bindClick('btn_config',  BlocklyDuino.openConfigToolbox);

  BlocklyDuino.bindClick('btn_edit_code', BlocklyDuino.editArduinoCode);
  BlocklyDuino.bindClick('btn_validCode', BlocklyDuino.valideEditedCode);

  BlocklyDuino.bindClick('select_all',  BlocklyDuino.checkAll);
  BlocklyDuino.bindClick('btn_valid',  BlocklyDuino.changeToolbox);
  
  BlocklyDuino.bindClick('btn_preview', function() {
	   $( "#toggle" ).toggle( "slide" );
  });
  BlocklyDuino.bindClick('pre_previewArduino', function() {
	   $( "#toggle" ).toggle( "slide" );
 });

  BlocklyDuino.bindClick('btn_switch',  BlocklyDuino.switchOrientation);

};

/**
 * checks all checkboxes in modal "configModal"
 */
BlocklyDuino.checkAll = function () {
    if(this.checked) {
        // Iterate each checkbox
        $('#modal-body input:checkbox').each(function() {
            this.checked = true;
        });
    } 
      else {
      $('#modal-body input:checkbox').each(function() {
            this.checked = false;
        });
    }
};

/**
 * Build modal to configure ToolBox
 */
BlocklyDuino.openConfigToolbox = function () {
	var modalbody = document.getElementById("modal-body");
	// load all xml toolboxes
	var xmls = document.getElementsByTagName("xml");
	// load the toolboxes id's stored in session
	var loadIds = window.localStorage.toolboxids;
	
	if (loadIds === undefined) {
		loadIds = "CAT_LOGIC";
	}

	var i, n, ligne;
	// clear modal
	modalbody.innerHTML = "";
	// create a checkbox for each toolbox 
	for (i = 0; i < xmls.length; i++) {
		n = loadIds.search(xmls[i].id);
		// checks if toolbox was already chosen
		if (n >= 0) {
			ligne = '<input type="checkbox" checked="checked" name="checkbox_'
					+ i + '" id="checkbox_' + xmls[i].id + '"/> '
					+ Blockly.Msg[xmls[i].id] + '<br/>';
		} else {
			ligne = '<input type="checkbox" name="checkbox_' + i
					+ '" id="checkbox_' + xmls[i].id + '"/> '
					+ Blockly.Msg[xmls[i].id] + '<br/>';
		}
		modalbody.innerHTML += ligne;
	}

	// checks if "selec_all" checkbox was already chosen
	n = loadIds.search("select_all");
	if (n >= 0) {
		document.getElementById("select_all").checked = true;
	}
};

/**
 * Change the ToolBox following the chosen configuration
 */
BlocklyDuino.changeToolbox = function () {
	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
	// read the toolboxes id's from the checkboxes
	var toolboxIds = [];
	$('#modal-body input:checkbox').each(function() {
		if (this.checked == true) {
			var xmlid = this.id;
			toolboxIds.push(xmlid.replace("checkbox_", ""));
		}
	});

	if (document.getElementById("select_all").checked == true) {
			toolboxIds.push("select_all");
		}

	// store id's in session
	window.localStorage.toolboxids = toolboxIds;

	// reload ...
	location.reload();
};

/**
 * Build the xml using toolboxes checked in config modal and stored in session 
 */
BlocklyDuino.buildToolbox = function() {
	var loadIds = window.localStorage.toolboxids;

	// set the default toolbox if none in session
	if (loadIds === undefined || loadIds === "") {
		loadIds = "CAT_LOGIC,CAT_LOOPS,CAT_VARIABLES,CAT_FUNCTIONS";
		window.localStorage.toolboxids = loadIds;
	}
	
	var xmlValue = '<xml>';
	var xmlids = loadIds.split(",");
	var element;
	for (var i = 0; i < xmlids.length; i++) {
		element = document.getElementById(xmlids[i]);
		if (element != null) {
			xmlValue += element.innerHTML;
		}
	}
	xmlValue += '</xml>';

	return xmlValue;
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
	
	Code.initLanguage();

	if (BlocklyDuino.getSize() == 'max') {
		// place div on top
		var divBody = document.getElementById("divBody");
		divBody.style.top = "0px";

		// maximize div
		var divTabpanel = document.getElementById("divTabpanel");
		divTabpanel.style.width = "100%";
		divTabpanel.style.height = "100%";
		divTabpanel.style.position = "absolute";
		divTabpanel.style.top = "0px";
		divTabpanel.style.marginLeft = "0px";

		// hide Title
		var divTitle = document.getElementById("divTitre");
		divTitle.style.display = "none";

		// change maximize to minimize
		var icon_btn_size = document.getElementById("icon_btn_size");
		icon_btn_size.className += " rotate180";
		if (Code.isRtl()) {
			icon_btn_size.className += " rotate90";
		}

		document.getElementById('btn_size').title = MSG['btn_size_min'];
	} else {
		document.getElementById('btn_size').title = MSG['btn_size_max'];
		if (Code.isRtl()) {
			var icon_btn_size = document.getElementById("icon_btn_size");
			icon_btn_size.className += " rotate270";
		}

	}

	// build Blockly ...
	Blockly.inject(document.getElementById('content_blocks'), {
		media : 'media/',
		rtl : Code.isRtl(),
		toolbox : BlocklyDuino.buildToolbox()
	});

	Blockly.addChangeListener(BlocklyDuino.renderArduinoCodePreview);

	// set the tab
	BlocklyDuino.tabClick(BlocklyDuino.selectedTab);

	// load blocks stored in session or passed by url
	var urlFile = BlocklyDuino.getStringParamFromUrl('url', '');

	if (urlFile) {
		BlocklyDuino.load_by_url(urlFile);
	} else {
		BlocklyDuino.loadBlocks(urlFile);
	}
    // Hook a save function onto unload.
	window.addEventListener('unload', BlocklyDuino.backupBlocks, false);

	// bind events to html elements
	BlocklyDuino.bindFunctions();

	// load the compilerflasher module
	$(document).ready(
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
	
	// Init zoom on Block's SVG
	var panZoom = svgPanZoom('#IdBlocklySVG', 
			{viewportSelector: '.svg-pan-zoom_viewport', 
				center:false, 
				fit:false,
				panEnabled: true, 
				zoomEnabled: false}
	);

	document.getElementById('btn_zoomin').addEventListener('click', function() {panZoom.zoomIn(); });

	document.getElementById('btn_zoomout').addEventListener('click', function() {panZoom.zoomOut();	});

	document.getElementById('btn_zoomreset').addEventListener('click', function() {location.reload(); });

};

/**
 * Set menu orientation 
 */
BlocklyDuino.setOrientation = function() {

	var newOrientation = BlocklyDuino.getStringParamFromUrl('ort', '');
	
	
	if (newOrientation == 'hor') {
		var ulNav = document.getElementById("ul_nav");
		var menuPanelCenter = document.getElementById("menuPanelCenter");
		var menuPanelRight = document.getElementById("menuPanelRight");
		var divTabpanel = document.getElementById("divTabpanel");
		var divSwitch = document.getElementById("divSwitch");
		var divCard = document.getElementById("divCard");
		var divConfig = document.getElementById("divConfig");
		
        ulNav.className = "nav nav-pills";
        menuPanelCenter.className += " menuPanelCenter-hor";
        menuPanelRight.className += " menuPanelRight-hor";
        divTabpanel.className += " divTabpanel-hor";
        divSwitch.className += " divSwitch-hor";
        divCard.className += " divCard-hor";
        divConfig.className += " divConfig-hor";
	} else {
		var ulNav = document.getElementById("ul_nav");
		var menuPanel = document.getElementById("menuPanel");
		var menuPanelCenter = document.getElementById("menuPanelCenter");
		var btn_config = document.getElementById("btn_config");
		var btn_saveXML = document.getElementById("btn_saveXML");
		var divTabpanel = document.getElementById("divTabpanel");
		
        ulNav.className = "nav nav-pills nav-stacked";
		if (Code.isRtl()) {
	        ulNav.className += " navbar-right";
	        menuPanelCenter.className += " menuPanelCenter-ver";
		}
        menuPanel.className += " menuPanel-ver";
        btn_config.className += " btn_config-ver";
        btn_saveXML.className += " btn_saveXML-ver";
        divTabpanel.className += " divTabpanel-ver";
	}
};

/**
 * Switch menu orientation 
 */
BlocklyDuino.switchOrientation = function() {
  // Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();

  var search = window.location.search;
  if (search.length <= 1) {
	    search = '?ort=hor';
	  } else if (search.match(/[?&]ort=[^&]*/)) {
	    search = search.replace(/([?&]ort=)[^&]*/, '');
	    search = search.replace(/\&/, '?');
	  } else {
	    search = search.replace(/\?/, '?ort=hor&');
	  }

  	// remove url file
  	search = search.replace(/([?&]url=)[^&]*/, '');

	window.location = window.location.protocol + '//' +
	      window.location.host + window.location.pathname + search;
};