/**
 * BlocklyArduino : specific to upload, communication with Python server
 */

'use strict';

/**
 * Configuration & modify buttons state
 */
BlocklyArduino.toggleWeb = function () {
	//checked = online
	if ($('#toggle-WebAccess').prop('checked')) {
			$("#cb_cf_boards").removeClass('hidden');
			$("#cb_cf_ports").removeClass('hidden');
			$("#cb_cf_verify_btn").removeClass('hidden');
			$("#cb_cf_flash_btn").removeClass('hidden');
			$("#btn_plugin_codebender").removeClass('hidden');
			$('#toggle-LocalCodebender').bootstrapToggle('enable');
			if ($('#toggle-LocalCodebender').prop('checked')) {
				$("#btn_Help_Online").removeClass('hidden');			
			}
		} else {
			$("#cb_cf_boards").addClass('hidden');
			$("#cb_cf_ports").addClass('hidden');
			$("#cb_cf_verify_btn").addClass('hidden');
			$("#cb_cf_flash_btn").addClass('hidden');
			$("#btn_plugin_codebender").addClass('hidden');
			$('#toggle-LocalCodebender').bootstrapToggle('on');
			$('#toggle-LocalCodebender').bootstrapToggle('disable');
			$("#btn_Help_Offline").removeClass('hidden');	
			if ($('#toggle-LocalCodebender').prop('checked')) {
				$("#btn_Help_Online").addClass('hidden');	
			}
		}
};

BlocklyArduino.toggleLocalCodeBender = function () {
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
 * Load Arduino code from component pre_arduino to webserver
 * and open it in IDE Arduino
 */

BlocklyArduino.ArduinoIDEClick = function() {
    var code = $('#pre_arduino').text();
    
    var url = "http://127.0.0.1:5005/openIDE";
    var method = "POST";

    var async = true;
	var request = new XMLHttpRequest();

	request.open(method, url, async);
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	request.send(code);	
}

BlocklyArduino.uploadClick = function() {
    var code = $('#pre_arduino').text();
    
    var url = "http://127.0.0.1:5005/upload";
    var method = "POST";

    var async = true;
	var request = new XMLHttpRequest();

	request.open(method, url, async);
	request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	request.send(code);	
}
