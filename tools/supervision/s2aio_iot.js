var ipAddress = "localhost";
var ipPort = "9000";

var inputMode = "0";
var outputMode = "1";
var analogMode = "2";
var pwmMode = "3";

var pin_mode = "";
var pin = "";
var outputValue = "";
var socket = new WebSocket('ws://' + ipAddress + ':' + ipPort);
window.parent.$("#tabs").tabs("select",1);

function WebSocketTest() {
	if ("WebSocket" in window)
		{
			alert(Blockly.Msg.SV_alert1);
			socket = new WebSocket('ws://' + ipAddress + ':' + ipPort);
		}            
		else
		{
			// The browser doesn't support WebSocket
			alert(Blockly.Msg.SV_alert2);
		}
}; 

socket.onerror = function (event) {
	$("#sup_debug").html("<img src='media/icon_supervision_off.jpg'>");
	//$("#connected").append(Blockly.Msg.SV_NotCon);
};

socket.onopen = function (event) {
	$("#sup_debug").html("<img src='media/icon_supervision_on.jpg'>");
	//$("#connected").append(Blockly.Msg.SV_onOpen);
};

socket.onclose = function (event) {
	$("#sup_debug").html("<img src='media/icon_supervision_off.jpg'>");
	//$("#connected").append(Blockly.Msg.SV_onClose);
};

socket.onmessage = function (message) {
	console.log('got message' + JSON.stringify(message.data));
	//console.log(message.data);
	var msg = JSON.parse(message.data);
	var method = msg["method"];
	//console.log(method);
	var params = msg["params"];
	//console.log(params);

	//var out = data;
	//console.log("method : " + method);
	switch (method) {
		case "analog_message_reply":
			//console.log('analog');
			var pin = params[0];
			////console.log(a)
			var out = params[1];
			//console.log("out: " + out);
			if ($("#ia"+pin).length) {
				$("#ia"+pin).val(out);
			} else {
				alert(Blockly.Msg.SV_onMessage_analog);
			}
			break;

		case "digital_message_reply":
			//console.log('digital message');

			var pin = params[0];
			////console.log(a)
			var out = params[1];
			//console.log('digital message');
			//console.log('pin: ' + pin);
			//console.log('value =' + out);
			if ($("#ip"+pin).length) {
				$("#ip"+pin).val(out);
			} else {
					alert(Blockly.Msg.SV_onMessage_digital);
				//console.log('unknown digital pin: ' + pin);
			}
			break;
			
		case "i2c_read_request_reply":
			console.log('i2c_request_result' + params);

			var temperatureSum = (params[1] << 8 | params[2]) >> 4;

			var celsius = temperatureSum * 0.0625;
			console.log(celsius);

			var fahrenheit = (1.8 * celsius) + 32;
			console.log(fahrenheit);
			$("#i2cRequestResult").val(params);
			$("#i2cRequestResultf").val(fahrenheit);
			$("#i2cRequestResultc").val(celsius);
			break;

		case "i2c_read_data_reply":
			console.log('i2c_read_result');
			console.log(params);
			$("#i2cReadResult").val(params);
			break;

		case "encoder_data_reply":
			console.log('received encoder data');
			console.log(params);
			$("#encoderValue").val(params[1]);
			break;
			
		case "encoder_read_reply":
			console.log('encoder_read_reply  ' + params);
			$("#encoderValue2").val(params[1]);
			break;
			
		case "sonar_data_reply":
			console.log('received sonar data');
			//console.log(params[1]);
			//javascript version
			//document.getElementById("sonarValue").value = params[1];
			//jquery version
			$("#sonarValue").val(params[1]);
			break;
			
		case "sonar_read_reply":
			console.log('sonar_read_reply  ' + params[1]);
			//document.getElementById("sonarValue2").value = params[1];
			$("#sonarValue2").val(params[1]);
			break;
			
		case "analog_map_reply":
		case "capability_report_reply":
		case "firmware_version_reply":
		case "protocol_version_reply":
		case "pymata_version_reply":
		case "pin_state_reply":
				console.log(params);
			$("#reports").val(params);
			break;
			
		case "digital_latch_data_reply":
			//console.log('digital_latch_callback');
			var pin = params[0].slice(1);

			$("#dlevent"+pin).val(params);
			console.log('al: dlatch' + id);
			//console.log(document.getElementyById(id).value);
			//document.getElementyById(id).value = '1';
			$("#dlatch" + pin).val("1");

			//console.log(message.data);
			break;
			
		case "analog_latch_data_reply":
			//console.log('analog_latch_callback');
			var pin = params[0].slice(1);

			$("#alevent"+pin).val(params);
			console.log('al: alatch' + pin);
			//console.log(document.getElementyById(id).value);
			//document.getElementyById(id).value = '1';
			$("#alatch" + pin).val("1");
			break;

		case "digital_read_reply":
			$('#ddata').val(params[1]);
			break;

		case "analog_read_reply":
			$('#adata').val(params[1]);
			break;
			

		case "get_digital_latch_data_reply":
			console.log(params);
			if (params[1] == null) {
				$('#dlatchdata').val("No Latch Set");
			} else {
				$('#dlatchdata').val(params[1]);
			}
			break;

		case "get_analog_latch_data_reply":
			console.log('get_analog_latch_data_reply' + params);
			if (params[1] == null) {
				$('#alatchdata').val(Blockly.Msg.SV_onMessage_i2c);
			} else {
				$('#alatchdata').val(params[1]);
			}
			break;

		default:
			break;
	}
	//document.getElementById("ain").value = out;
};


function clicked(id) {
	//console.log('clicked: ' + id);
	//get first part of ID
	var first = id.substring(0, id.indexOf('_'));
	var next = id.substring(id.indexOf('_') + 1);
	switch (first) {
		case 'pwm':
			// next = pin_number
			// show the pwm value field
			if ($("#"+id).prop("checked")) {				
				$("#v"+next).show();				
			} else {
				$("#v"+next).hide();				
			}
			setPinMode(next, pwmMode);
			break;
		case 'low' :
			// next = pin_number
			// hide the pwm field
			$("#v"+next).hide();
			setPinMode(next, outputMode);
			digitalWrite(next, '0');
			break;
		case 'high' :
			// next = pin_number
			// hide the pwm field
			$("#v"+next).hide();
			setPinMode(next, outputMode);
			digitalWrite(next, '1');
			break;
		case 'in' :
			// next = mode + pin_number
			var mode = next.substring(0, next.indexOf('_'));
			var pin_number = next.substring(next.indexOf('_') + 1);
			switch (mode) {
				case 'dig':
					disableDigitalReporting(pin_number);
					$("#scrute_out_dig_" + pin_number + "_tab4").hide(); //checkbox
					$("#scrute_span_supervision_pin_e" + pin_number + "_tab4").hide(); //label
					$("#scrute_ip" + pin_number + "_tab4").hide(); //input
					$("#Graph_pickcolor_D" + pin_number).hide(); //color
					$("#Graph_pickcolor_button_D" + pin_number).hide(); //color
					break;
				case 'ana':
					disableAnalogReporting(pin_number);
					$("#scrute_out_ana_" + pin_number + "_tab4").hide(); //checkbox
					$("#scrute_span_supervision_pin_e" + pin_number + "_tab4").hide(); //label
					$("#scrute_ia" + pin_number + "_tab4").hide(); //input
					$("#Graph_pickcolor_A" + pin_number).hide(); //color
					$("#Graph_pickcolor_button_A" + pin_number).hide(); //color
					break;
			}
			break;
		case 'out' :
			// next = mode + pin_number
			var mode = next.substring(0, next.indexOf('_'));
			var pin_number = next.substring(next.indexOf('_') + 1);
			switch (mode) {
				case 'dig':
					setPinMode(pin_number, inputMode);
					$("#scrute_out_dig_" + pin_number + "_tab4").show(); //checkbox
					$("#scrute_span_supervision_pin_e" + pin_number + "_tab4").show(); //label
					$("#scrute_ip" + pin_number + "_tab4").show(); //input
					$("#Graph_pickcolor_D" + pin_number).show(); //color
					$("#Graph_pickcolor_button_D" + pin_number).show(); //color
					break;
				case 'ana':
					setPinMode(pin_number, analogMode);
					$("#scrute_out_ana_" + pin_number + "_tab4").show();
					$("#scrute_span_supervision_pin_e" + pin_number + "_tab4").show(); //label
					$("#scrute_ia" + pin_number + "_tab4").show(); //input
					$("#Graph_pickcolor_A" + pin_number).show(); //color
					$("#Graph_pickcolor_button_A" + pin_number).show(); //color
					break;
			}
			break;
		
	}
	//console.log(id);

}

function pwmChange(control) {
	var pin = 0;
	var value = 0;
	pin = control.substring(1);
	value = $("#"+control).val();
	var msg = JSON.stringify({"method": "analog_write", "params": [pin, value]});
	socket.send(msg);
	//console.log(pin + ':' + value);
}


function servo() {
	var pin = $('#servoPin').val();
	console.log('servoPin: ' + pin);
	var angle = ('#servoAngle').val();
	console.log('servoAngle: ' + angle);
	var msg = JSON.stringify({"method": "servo_config", "params": [pin, "544", "2400"]});
	socket.send(msg);
	msg = JSON.stringify({"method": "analog_write", "params": [pin, angle]});
	socket.send(msg);
}


function setPinMode(pin, mode) {
	var msg = JSON.stringify({"method": "set_pin_mode", "params": [pin, mode]});
	socket.send(msg);
}

function digitalWrite(pin, value) {
	var msg = JSON.stringify({"method": "digital_write", "params": [pin, value]});
	socket.send(msg);
}

function disableDigitalReporting(pin) {
	var msg = JSON.stringify({"method": "disable_digital_reporting", "params": [pin]});
	socket.send(msg);
}

function enableDigitalReporting(pin) {
	var msg = JSON.stringify({"method": "enable_digital_reporting", "params": [pin]});
	socket.send(msg);
}

function disableAnalogReporting(pin) {
	var msg = JSON.stringify({"method": "disable_analog_reporting", "params": [pin]});
	socket.send(msg);
}

function enbleAnalogReporting(pin) {
	var msg = JSON.stringify({"method": "endable_analog_reporting", "params": [pin]});
	socket.send(msg);
}

function getAnalogMap() {
	var msg = JSON.stringify({"method": "get_analog_map", "params": ["null"]});
	console.log(msg);
	socket.send(msg);
}

function getCapabilityReport() {
	var msg = JSON.stringify({"method": "get_capability_report", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getFirmwareVersion() {
	var msg = JSON.stringify({"method": "get_firmware_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getProtocolVersion() {
	var msg = JSON.stringify({"method": "get_protocol_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getPymataVersion() {
	var msg = JSON.stringify({"method": "get_pymata_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getPinState() {
	// first get the pin number from the spinner
	var pin = $('#pinSpinner').val();

	var msg = JSON.stringify({"method": "get_pin_state", "params": [pin]});
	//console.log(msg);
	socket.send(msg);
}

function digitalLatch(pin, id) {
	//console.log('digitalLatch pin: ' + pin);
	//console.log('id = ' + id);
	var choice = document.getElementById(id).value;
	var threshold = "";
	//console.log('choice: ' + choice);
	switch (choice) {
		case '2':
			threshold = "1";
			break;
		case '3':
			threshold = "0";
			break;
	}
	//console.log(threshold)
	var msg = JSON.stringify({"method": "set_digital_latch", "params": [pin, threshold]});
	//console.log(msg)
	socket.send(msg);
}

function analogLatch(pin, id) {
	//get threshold
	//console.log('analog latch pin: ' + pin);
	var thId = "a1thr" + pin;
	//console.log(thId)
	var threshold = $("#"+thId).val();
	//console.log('threshold: ' + threshold);
	var choice = $("#" + id).val();
	var comp = "";
	//console.log('choice = ' + choice)
	switch (choice) {
		case '2':
			comp = "0";
			break;
		case '3':
			comp = "2";
			break;
		case '4':
			comp = "4";
			break;
		case '5':
			comp = "1";
			break;
		case '6':
			comp = "3";
			break;
	}
	var msg = JSON.stringify({"method": "set_analog_latch", "params": [pin, comp, threshold]});
	//console.log(msg)
	socket.send(msg);
}


function digitalRead() {
	var pin = $("#drPin").val();
	setPinMode(pin, inputMode);
	var msg = JSON.stringify({"method": "digital_read", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}

function analogRead() {
	var pin = ("#arPin").val();
	setPinMode(pin, analogMode);
	var msg = JSON.stringify({"method": "analog_read", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}

function digitalLatchRead() {
	var pin = $("#dlData").val();
	console.log('digitalLatchdata pin ' + pin);
	setPinMode(pin, inputMode);
	var msg = JSON.stringify({"method": "get_digital_latch_data", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}

function analogLatchRead() {
	var pin = $("#alData").val();
	console.log('analogLatchdata pin ' + pin);
	setPinMode(pin, analogMode);
	msg = JSON.stringify({"method": "get_analog_latch_data", "params": [pin]});
	console.log(msg);
	socket.send(msg);
}

function playTone() {
	var pin = $("#tonePin").val();
	var frequency = $("#freq").val();
	var duration = $("duration").val();
	var msg = JSON.stringify({"method": "play_tone", "params": [pin, "TONE_TONE", frequency, duration]});
	console.log(msg);
	socket.send(msg);
}

function encoderRead(type) {
	var pin_a = $("#encoderPinA").val();
	var pin_b = $("#encoderPinB").val();
	var msg = JSON.stringify({"method": "encoder_config", "params": [pin_a, pin_b]});
	console.log(msg);
	socket.send(msg);
	if (type == 1) {
		msg = JSON.stringify(({"method": "encoder_read", "params": [pin_a]}));
		console.log(msg);
		socket.send(msg);
	}
}

function sonarRead(type) {
	var trigger = $("#sonarTriggerPin").val();
	var echo = $("#sonarEchoPin").val();
	var ping_interval = "50";
	var max_dist = "200";
	var msg = JSON.stringify({"method": "sonar_config", "params": [trigger, echo, ping_interval, max_dist]});
	console.log(msg);
	socket.send(msg);
	if (type == 1) {
		msg = JSON.stringify(({"method": "sonar_read", "params": [trigger]}));
		console.log(msg);
		socket.send(msg);
	}
}

function runStepMotor() {
	console.log('runStepMotor');
	var pin1 = $("#stepperPin1").val();
	var pin2 = $("#stepperPin2").val();
	var pin3 = $("#stepperPin3").val();
	var pin4 = $("#stepperPin4").val();
	var stepsPerRev = $("#stepRev").val();
	var speed = $("#motorSpeed").val();
	var steps = $("#numSteps").val();
	var msg = JSON.stringify({"method": "stepper_config", "params": [stepsPerRev, [pin1, pin2, pin3, pin4]]});
	console.log(msg);
	socket.send(msg);
	msg = JSON.stringify({"method": "stepper_step", "params": [speed, steps]});
	console.log(msg);
	socket.send(msg);
}

function i2cConfig() {
	var delay = $("#i2cDelayTime").val();
	var msg = JSON.stringify({"method": "i2c_config", "params": [delay]});
	console.log(msg);
	socket.send(msg);
}

function i2cReadRequest() {
	var i2cAddress =  $("#i2cReadAddress").val();
	var i2cRegister = $("#i2cReadRegister").val();
	var i2cNumBytes = $("#i2cReadNumBytes").val();
	var i2cReadTp = $("#i2cReadType").val();
	var msg = JSON.stringify({"method": "i2c_read_request", "params": [i2cAddress, i2cRegister,
		i2cNumBytes, i2cReadTp ]});
	console.log(msg);
	socket.send(msg);

}

function i2cReadData() {
	var i2cAddress =  $("#i2cReadAddress").val();
	var msg = JSON.stringify({"method": "i2c_read_data", "params": [i2cAddress ]});
	console.log(msg);
	socket.send(msg);

}

function i2cWriteDemo(state) {
	// send i2cConfig
	var delay = 0;
	var matrix_address = 112;
	var oscillatorOn = 33;
	var blinkCommand = 129;
	var brightness = 231;

	var msg = JSON.stringify({"method": "i2c_config", "params": [matrix_address, [delay]]});
	console.log(msg);
	socket.send(msg);

	// turn oscillator on
	msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address, [oscillatorOn]]});
	socket.send(msg);

	// set blink rate
	msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address, [blinkCommand]]});
	socket.send(msg);

	// set brightness
	msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address, [brightness]]});
	socket.send(msg);

	// turn off all Leds
	for( var r = 0; r < 8 ; r++) {
		msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address, [r * 2, 0, 0]]});
		socket.send(msg);
		msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address,[ ((r * 2) + 1) , 0, 0]]});
		socket.send(msg);
	}

	if( state == 1) {
		for (r = 0; r < 8; r++) {
			msg = JSON.stringify({"method": "i2c_write_request", "params": [matrix_address, [r * 2, 0, 1]]});
			socket.send(msg);
			msg = JSON.stringify({
				"method": "i2c_write_request",
				"params": [matrix_address, [((r * 2) + 1), 0, 1]]
			});
			socket.send(msg);
		}
	}
}

function HTTPRequest(request) {
	var xhr_object = null;

	if (window.XMLHttpRequest) {// Firefox
		xhr_object = new XMLHttpRequest();
	} else if (window.ActiveXObject) {// Internet Explorer
		xhr_object = new ActiveXObject("Microsoft.XMLHTTP");
	} else { // XMLHttpRequest non supporté par le navigateur
		alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
		return;
	}

	var method = f.elements["method"][0].checked ? "GET" : "POST";
	var s1 = f.elements["string1"].value;
	var s2 = f.elements["string2"].value;
	var data = null;

	if (s1 != "" && s2 != "")
		data = "s1=" + s1 + "&s2=" + s2;

	if (method == "GET" && data != null) {
		filename += "?" + data;
		data = null;
	}

	xhr_object.open(method, filename, true);

	xhr_object.onreadystatechange = function() {
		if (this.readyState == 4) {
			var tmp = this.responseText.split(":");
			if (typeof (tmp[1]) != "undefined") {
				f.elements["string1_r"].value = tmp[1];
			}
			alert(tmp[0]);
		}
	}

	if (method == "POST")
		xhr_object.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");

	xhr_object.send(data);
}