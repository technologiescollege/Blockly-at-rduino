/**
 * BlocklyDuino
 */

'use strict';


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
    var code = $('#pre_arduino').text();
    
    var url = "http://127.0.0.1:5005/upload";
    var method = "POST";

    var async = true;
	var request = new XMLHttpRequest();

	request.open(method, url, async);
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	request.send(code);	
};

/**
 * Configuration & modify buttons state
 */
BlocklyDuino.toggleWeb = function () {
	//checked = online
	//$("select#cb_cf_ports").prop("disabled") == plugin non installed
	if ($("select#cb_cf_ports").prop("disabled")) {
				$("#cb_cf_boards").addClass('hidden');
				$("#cb_cf_ports").addClass('hidden');
				$("#cb_cf_verify_btn").addClass('hidden');
				$("#cb_cf_flash_btn").addClass('hidden');
				$("#btn_plugin_codebender").removeClass('hidden');
				$("#tab_term").addClass('hidden');
				document.querySelector("#debug_arduino").style.display="none";
				$("#pre_arduino").css('height', "100%");
				$('#toggle-LocalCodebender').bootstrapToggle('on');
				$('#toggle-LocalCodebender').bootstrapToggle('disable');
	} else {
		if ($('#toggle-WebAccess').prop('checked')) {
				$("#cb_cf_boards").removeClass('hidden');
				$("#cb_cf_ports").removeClass('hidden');
				$("#cb_cf_verify_btn").removeClass('hidden');
				$("#cb_cf_flash_btn").removeClass('hidden');
				$("#btn_plugin_codebender").addClass('hidden');
				$("#tab_term").removeClass('hidden');
				document.querySelector("#debug_arduino").style.display="block";
				$("#pre_arduino").css('height', "65%");
		} else {
				$("#cb_cf_boards").removeClass('hidden');
				$("#cb_cf_ports").removeClass('hidden');
				$("#cb_cf_verify_btn").addClass('hidden');
				$("#cb_cf_flash_btn").addClass('hidden');
				$("#btn_plugin_codebender").addClass('hidden');
				$("#tab_term").removeClass('hidden');
				document.querySelector("#debug_arduino").style.display="block";
				$("#pre_arduino").css('height', "65%");
			
		}				
	}
	if ($('#toggle-WebAccess').prop('checked')) {
			$('#toggle-LocalCodebender').bootstrapToggle('enable');
			if ($('#toggle-LocalCodebender').prop('checked')) {
				$("#btn_Help_Online").removeClass('hidden');			
			}
		} else {
			if ($("select#cb_cf_ports").prop("disabled")) 
					$("#btn_plugin_codebender").addClass('hidden');
			$('#toggle-LocalCodebender').bootstrapToggle('on');
			$('#toggle-LocalCodebender').bootstrapToggle('disable');
			$("#btn_Help_Offline").removeClass('hidden');	
			if ($('#toggle-LocalCodebender').prop('checked')) {
				$("#btn_Help_Online").addClass('hidden');	
			}
	}
};

BlocklyDuino.toggleLocalCodeBender = function () {
	//checked = local
	if ($('#toggle-LocalCodebender').prop('checked')) {
			$("#btn_flash_local").removeClass('hidden');
			$("#btn_getResult").removeClass('hidden');
			$("#btn_pasteIDEArduino").removeClass('hidden');
			$("#cb_cf_flash_btn").addClass('hidden');
			if ($('#toggle-WebAccess').prop('checked')) {
				$("#btn_Help_Offline").removeClass('hidden');	
				$("#btn_MyArduino").removeClass('hidden');				
			}
		} else {
			$("#btn_flash_local").addClass('hidden');
			$("#btn_getResult").addClass('hidden');
			$("#btn_pasteIDEArduino").addClass('hidden');
			$("#cb_cf_flash_btn").removeClass('hidden');
			if ($('#toggle-WebAccess').prop('checked')) {
				$("#btn_Help_Offline").addClass('hidden');	
				$("#btn_MyArduino").addClass('hidden');					
			}
	}
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