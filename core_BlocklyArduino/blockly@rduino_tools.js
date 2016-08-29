/**
 * BlocklyDuino
 */

'use strict';


/**
 * Init modal Global Configuration
 */
BlocklyDuino.initGlobalConfig = function () {
	
	// set the webAccess from url parameters
	var AccessWeb = BlocklyDuino.getStringParamFromUrl('webaccess', '');
	if (AccessWeb === undefined || AccessWeb === "") {
		AccessWeb = window.localStorage.webAccess;
	}
	
	// set the localCodebender from url parameters
	var localOrCodebender = BlocklyDuino.getStringParamFromUrl('localcodebender', '');
	if (localOrCodebender === undefined || localOrCodebender === "") {
		localOrCodebender = window.localStorage.localCodebender;
	}

	if (AccessWeb == "true") {
		$('#toggle-WebAccess').bootstrapToggle('on');
	} else {
		$('#toggle-WebAccess').bootstrapToggle('off');
	}
	
	if (localOrCodebender == "true") {
		$('#toggle-LocalCodebender').bootstrapToggle('on');
	} else {
		$('#toggle-LocalCodebender').bootstrapToggle('off');
	}
}

/**
 * Load Arduino code from component pre_arduino to webserver
 * and open it in IDE Arduino
 */

BlocklyDuino.ArduinoIDEClick = function() {
    var code = $('#pre_arduino').text();
    
    var url = "http://127.0.0.1:5005/openIDE";
    var method = "POST";
    var async = true;
	var request = new XMLHttpRequest();

	request.open(method, url, async);
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	request.send(code);	
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
	}, 2000);
};

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
	}, 2000);
};

/**
 * Configuration & modify buttons state
 */
BlocklyDuino.toggleWeb = function() {
	// checked = online
	// $("select#cb_cf_ports").prop("disabled") == plugin non installed
	if ($("select#cb_cf_ports").prop("disabled")) {
		$('#toggle-LocalCodebender').bootstrapToggle('on');
		$('#toggle-LocalCodebender').bootstrapToggle('disable');
		window.localStorage.localCodebender = "true";
	} else {
		$('#toggle-LocalCodebender').bootstrapToggle('enable');
		}
	if ($('#toggle-WebAccess').prop('checked')) {
		if ($("select#cb_cf_ports").prop("enabled")) $('#toggle-LocalCodebender').bootstrapToggle('enable');
		$("#btn_Help_Online").removeClass('hidden');
		window.localStorage.webAccess = "true";
	} else {
		$('#toggle-LocalCodebender').bootstrapToggle('on');
		$('#toggle-LocalCodebender').bootstrapToggle('disable');
		$("#btn_Help_Online").addClass('hidden');
		window.localStorage.webAccess = "false";
	}
};

BlocklyDuino.toggleLocalCodeBender = function() {
	// checked = local
	if ($('#toggle-LocalCodebender').prop('checked')) {
		//inside modal
		$("#btn_Help_Offline").removeClass('hidden');
		$("#btn_MyArduino").removeClass('hidden');		
		window.localStorage.localCodebender = "true";
		//local
		$("#btn_flash_local").removeClass('hidden');
		$("#btn_verify_local").removeClass('hidden');
		$("#btn_getResult").removeClass('hidden');		
		$("#btn_pasteIDEArduino").removeClass('hidden');
		//codebender plugin
		$("#cb_cf_verify_btn").addClass('hidden');		
		$("#cb_cf_flash_btn").addClass('hidden');		
	} else {
		//inside modal
		$("#btn_Help_Offline").addClass('hidden');
		$("#btn_MyArduino").addClass('hidden');		
		window.localStorage.localCodebender = "false";
		//local
		$("#btn_flash_local").addClass('hidden');
		$("#btn_verify_local").addClass('hidden');
		$("#btn_getResult").addClass('hidden');		
		$("#btn_pasteIDEArduino").addClass('hidden');
		//codebender plugin
		$("#cb_cf_verify_btn").removeClass('hidden');		
		$("#cb_cf_flash_btn").removeClass('hidden');		
	}
};

BlocklyDuino.testPluginCodeBender = function() {	
	if ($("select#cb_cf_ports").prop("disabled")) {
		$("#cb_cf_boards").addClass('hidden');
		$("#cb_cf_ports").addClass('hidden');
		$("#tab_term").addClass('hidden');
		if (window.localStorage.webAccess == "true") $("#btn_plugin_codebender").removeClass('hidden');
			else $("#btn_plugin_codebender").addClass('hidden');
	} else {
		$("#cb_cf_boards").removeClass('hidden');
		$("#cb_cf_ports").removeClass('hidden');
		$("#tab_term").removeClass('hidden');
		$("#btn_plugin_codebender").addClass('hidden');
	}
}

/**
 * Validate global configuration
 */
BlocklyDuino.validateConfigGlobal = function () {

	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
	var search = window.location.search;
	// remove values from url to test toggles
	search = search.replace(/([?&]webaccess=)[^&]*/, '');
	search = search.replace(/([?&]localcodebender=)[^&]*/, '');
	
	if ($("#put_config_in_url").prop('checked')) {
		// put values in url
		if (search.length <= 1) {
			search = '?webaccess=' + window.localStorage.webAccess + '&localcodebender=' + window.localStorage.localCodebender;
		} else {
			search = search + '&webaccess=' + window.localStorage.webAccess + '&localcodebender=' + window.localStorage.localCodebender;
		}
	}
	
	//change Arduino card
	
	$("#pinout").blur();
	if (window.profile["defaultBoard"]!=window.profile[$("#pinout").val()])
		{
		if (window.confirm(MSG['arduino_card']+' '+window.profile[$("#pinout").val()].description+' ?'))
			{
			BlocklyDuino.workspace.clear();				  
			if (search.length <= 1) {
					search = '?card=' + $("#pinout").val();
				  } else if (search.match(/[?&]card=[^&]*/)) {
					search = search.replace(/([?&]card=)[^&]*/, '$1' + $("#pinout").val());
				  } else {
					search = search.replace(/\?/, '?card=' + $("#pinout").val() + '&');
				  }
			} else {
				$("#pinout").val(BlocklyDuino.selectedCard);
			}
	}
	  
	//change language

	var languageMenuSelected = $('#languageMenu option:selected').val();
	var newLang = encodeURIComponent(languageMenuSelected);
	if (search.length <= 1) {
		search = '?lang=' + newLang;
		} else if (search.match(/[?&]lang=[^&]*/)) {
			search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
			} else {
				search = search.replace(/\?/, '?lang=' + newLang + '&');
		}	  
	
	//BlocklyDuino.initGlobalConfig();
	BlocklyDuino.toggleWeb();
	BlocklyDuino.toggleLocalCodeBender();
	BlocklyDuino.testPluginCodeBender();
	
	window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
}
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