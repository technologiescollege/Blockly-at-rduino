/**
 * Blockly@rduino
 */

'use strict';


/**
 * Populate the edit textarea "edit_code" with the pre arduino code
 */
BlocklyDuino.editArduinoCode = function() {
	    $('#edit_code').val($('#pre_arduino').text());
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
	            'download': "blockly_arduino"+datenow+".B@",
				'href': uri,
				'target': '_blank'
	});
};

BlocklyDuino.saveXmlFile_IDE = function () {
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
    BlocklyArduinoServer.IDEsaveXML(data);
};
/**
 * Creates an INO file containing the Arduino code from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */

BlocklyDuino.saveArduinoFile_IDE = function () {
	var data = Blockly.Arduino.workspaceToCode();
	var datenow = Date.now();
//NBR	  var uri = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);  
	var uri = 'data:text/ino;charset=utf-8,' + encodeURIComponent(data); // NBR: set INO as data type to force the browser to propose to load directly the code into the arduino IDE
	if (BlocklyArduinoServer){
        BlocklyArduinoServer.saveCode(data);
		} else {
            console.log("Server problem");
	}
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
		  Blockly.Xml.domToWorkspace(xml, BlocklyDuino.workspace);
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
			search = search.replace(/([?&]url=)[^&]*/, '');
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

BlocklyDuino.load_IDE = function (event) {
	var xml = "";
	try {
		xml = Blockly.Xml.textToDom(BlocklyArduinoServer ? BlocklyArduinoServer.IDEloadXML() : localStorage.workspaceXml);
		BlocklyDuino.workspace.clear();
		} catch (e) {}
	var count = BlocklyDuino.workspace.getAllBlocks().length;
	$('#tab_blocks a').tab('show');
	Blockly.Xml.domToWorkspace(xml, BlocklyDuino.workspace);
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
 * Reset Blockly@rduino and clean webbrowser cache, local storage
 */
BlocklyDuino.clearLocalStorage = function () {
	window.removeEventListener('unload', BlocklyDuino.backupBlocks, false);
	localStorage.clear();
	sessionStorage.clear();
};


/**
 * Change ergonomy and resize left buttons in just icons
 */ 
BlocklyDuino.miniMenuPanel = function() {
  // Store the blocks for the duration of the reload.
  BlocklyDuino.backupBlocks();

  var search = window.location.search;
  if (search.length <= 1) {
    search = '?size=miniMenu';
  } else if (search.match(/[?&]size=[^&]*/)) {
    search = search.replace(/([?&]size=)[^&]*/, '');
    search = search.replace(/\&/, '?');
  } else {
    search = search.replace(/\?/, '?size=miniMenu&');
  }

  // remove url file
  //search = search.replace(/([?&]url=)[^&]*/, '');
  window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};


/**
 * Verify code if AIO mode
 */
BlocklyDuino.verify_local_Click = function() {
	//first change board
	var board = "board=" + profile.defaultBoard['upload_arg'];
    var url = "http://127.0.0.1:5005/set_board";
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();
    request.open(method, url, async);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//Call a function when the state changes.
    request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			alert(request.responseText);
		}
	}
    request.send(board);
    setTimeout( function() {		
		//then send code after 1000ms
		var code = $('#pre_arduino').text();
		url = "http://127.0.0.1:5005/compile";
		request.open(method, url, async);
		request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		request.send(code);
	}, 1000);
};

/**
 * Load Arduino code from component pre_arduino to webserver
 * and open it in IDE Arduino
 */
BlocklyDuino.ArduinoIDEClick = function() {
    var code = $('#pre_arduino').text();
    
    /*var url = "http://127.0.0.1:5005/openIDE";
    var method = "POST";
    var async = true;
	var request = new XMLHttpRequest();*/
	var filename = "leCodeGenere.ino";
 
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/ino;charset=utf-8,' + encodeURIComponent(code)); // put INO in data type to force direct upload to arduino IDE
	element.setAttribute('download', filename);
	//  element.hidden = true;

	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);

  /*request.open(method, url, async);
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	request.send(code);	*/
};

BlocklyDuino.uploadClick = function() {
	//first change board
	var board = "board=" + profile.defaultBoard['upload_arg'];
    var url = "http://127.0.0.1:5005/set_board";
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();
    request.open(method, url, async);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//Call a function when the state changes.
	request.onreadystatechange = function() {
		if(request.readyState == 4 && request.status == 200) {
			alert(request.responseText);
		}
	}
	request.send(board);
    setTimeout( function() {		
		//then send code after 1000ms
		var code = $('#pre_arduino').text();
		url = "http://127.0.0.1:5005/upload";
		request.open(method, url, async);
		request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		request.send(code);
	}, 1000);
};

/**
 * Load Arduino code from component pre_arduino to webserver
 * communicate with Java server launched from Arduino IDE
 */
BlocklyDuino.ArduinoIDEClick_IDE = function() {
	if (!window.BlocklyArduinoServer) {
		BlocklyArduinoServer = false;
		}
	var code = $('#pre_previewArduino').text();
	if ((typeof BlocklyArduinoServer) != 'undefined' && BlocklyArduinoServer){
        BlocklyArduinoServer.pasteCode(code);
    }	
};

BlocklyDuino.uploadClick_IDE = function() {
	if (!window.BlocklyArduinoServer) {
		BlocklyArduinoServer = false;
		}
	var code = $('#pre_previewArduino').text();
	if ((typeof BlocklyArduinoServer) != 'undefined' && BlocklyArduinoServer){
        BlocklyArduinoServer.uploadCode(code);
    }
};


/**
 * Try to take a screen capture of all blocks on workspace
 * Thanks to fontaine.jp from forum http://blockly.technologiescollege.fr/forum/index.php/topic,128.msg635.html#new
 *
 */
BlocklyDuino.workspace_capture_IDE = function() {
	var ws = BlocklyDuino.workspace.svgBlockCanvas_.cloneNode(true);
	ws.removeAttribute("width");
	ws.removeAttribute("height");
	ws.removeAttribute("transform");
	var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
	styleElem.textContent = Blockly.Css.CONTENT.join('') ;
	ws.insertBefore(styleElem, ws.firstChild);
	var bbox = BlocklyDuino.workspace.svgBlockCanvas_.getBBox();
	var canvas = document.createElement( "canvas" );
	canvas.width = Math.ceil(bbox.width+10);
	canvas.height = Math.ceil(bbox.height+10);
	var ctx = canvas.getContext( "2d" );
	var xml = new XMLSerializer().serializeToString(ws);
	xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+bbox.width+'" height="'+bbox.height+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>'+xml+'</svg>';
	BlocklyArduinoServer.saveWorkspaceCapture(xml);
};