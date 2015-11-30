// connect to the server
var ipAddress = "localhost";
var ipPort = "9000";

var inputMode = "0";
var outputMode = "1";
var analogMode = "2";
var pwmMode = "3";

var socket = new WebSocket('ws://' + ipAddress + ':' + ipPort);
var pin_mode = "";
var pin = "";
var outputValue = "";


socket.onopen = function (event) {
	$("#connected").text('Supervision Has Successfully Connected');

};

socket.onclose = function (event) {
	alert("The socket has closed!");
};

socket.onmessage = function (message) {
	//console.log('got message' + message.data);
	//console.log(message.data);
	var msg = JSON.parse(message.data);
	var method = msg["method"];
	//console.log(method);
	var params = msg["params"];
	//console.log(params);

	//var out = data;
	////console.log(out)
	switch (method) {
		case "analog_message_reply":
		{
			//console.log('analog');
			var pin = params[0];
			////console.log(a)
			var out = params[1];
			//console.log("out: " + out);
			switch (pin) {
				case 0:
					document.getElementById("ia0").value = out;
					break;
				case 1:
					document.getElementById("ia1").value = out;
					break;
				case 2:
					document.getElementById("ia2").value = out;
					break;
				case 3:
					document.getElementById("ia3").value = out;
					break;
				case 4:
					document.getElementById("ia4").value = out;
					break;
				case 5:
					document.getElementById("ia5").value = out;
					break;
				default:
					alert("unknown analog pin")


			}
			break;
		}

		case "digital_message_reply":
		{
			//console.log('digital message');

			pin = params[0];
			////console.log(a)
			out = params[1];
			//console.log('digital message');
			//console.log('pin: ' + pin);
			//console.log('value =' + out);
			switch (pin) {

				case 2:
					document.getElementById("ip2").value = out;
					break;
				case 3:
					document.getElementById("ip3").value = out;
					break;
				case 4:
					document.getElementById("ip4").value = out;
					break;
				case 5:
					document.getElementById("ip5").value = out;
					break;
				case 6:
					document.getElementById("ip6").value = out;
					break;
				case 7:
					document.getElementById("ip7").value = out;
					break;
				case 8:
					document.getElementById("ip8").value = out;
					break;
				case 9:
					document.getElementById("ip9").value = out;
					break;
				case 10:
					document.getElementById("ip10").value = out;
					break;
				case 11:
					document.getElementById("ip11").value = out;
					break;
				case 12:
					document.getElementById("ip12").value = out;
					break;
				case 13:
					document.getElementById("ip13").value = out;
					break;
				case 14:
					document.getElementById("ip14").value = out;
					break;
				case 15:
					document.getElementById("ip15").value = out;
					break;
				case 16:
					document.getElementById("ip16").value = out;
					break;
				case 17:
					document.getElementById("ip17").value = out;
					break;
				case 18:
					document.getElementById("ip18").value = out;
					break;
				case 19:
					document.getElementById("ip19").value = out;
					break;
				default:
					alert("unknown digital pin");
				//console.log('unknown digital pin: ' + pin);
			}
		}
			break;
		case "i2c_read_request_reply":
			console.log('i2c_request_result' + params);

			TemperatureSum = (params[1] << 8 | params[2]) >> 4

			celsius = TemperatureSum * 0.0625
			console.log(celsius)

			fahrenheit = (1.8 * celsius) + 32
			console.log(fahrenheit)
			document.getElementById("i2cRequestResult").value = params
			document.getElementById("i2cRequestResultf").value = fahrenheit
			document.getElementById("i2cRequestResultc").value = celsius
			break;

		case "i2c_read_data_reply":
			console.log('i2c_read_result');
				console.log(params);
				document.getElementById("i2cReadResult").value = params
			break;

		case "encoder_data_reply":
			console.log('received encoder data');
			console.log(params);
			document.getElementById("encoderValue").value = params[1];
			break;
		case "encoder_read_reply":
			console.log('encoder_read_reply  ' + params);
			document.getElementById("encoderValue2").value = params[1];
			break;
		case "sonar_data_reply":
			console.log('received sonar data');
			console.log(params[1]);
			document.getElementById("sonarValue").value = params[1];
			break;
		case "sonar_read_reply":
			console.log('sonar_read_reply  ' + params);
			document.getElementById("sonarValue2").value = params[1];
			break;
		case "analog_map_reply":
		case "capability_report_reply":
		case "firmware_version_reply":
		case "protocol_version_reply":
		case "pymata_version_reply":
		case "pin_state_reply":
				console.log(params);
			document.getElementById("reports").value = params;
			break;
		case "digital_latch_data_reply":
			//console.log('digital_latch_callback');
			pin = params[0].slice(1);
			var id = 'dlevent' + pin;
			//console.log(id)

			document.getElementById(id).value = params;
			id = 'dlatch' + pin;
			console.log('al: ' + id);
			//console.log(document.getElementyById(id).value);
			//document.getElementyById(id).value = '1';
			document.getElementById(id).selectedIndex = "0";

			//console.log(message.data);

			break;
		case "analog_latch_data_reply":
			//console.log('analog_latch_callback');
			pin = params[0].slice(1);
			id = 'alevent' + pin;
			//console.log(id);

			document.getElementById(id).value = params;
			id = 'alatch' + pin;
			console.log('al: ' + id);
			//console.log(document.getElementyById(id).value);
			//document.getElementyById(id).value = '1';
			document.getElementById(id).selectedIndex = "0";
			break;

		case "digital_read_reply":
			document.getElementById('ddata').value = params[1];
			break;

		case "analog_read_reply":
			document.getElementById('adata').value = params[1];
			break;
		case "get_digital_latch_data_reply":
			console.log(params);
			if (params[1] == null) {
				document.getElementById('dlatchdata').value = "No Latch Set"
			}
			else {

				document.getElementById('dlatchdata').value = params[1]
			}
			break;

		case "get_analog_latch_data_reply":
			console.log('get_analog_latch_data_reply' + params);
			if (params[1] == null) {
				document.getElementById('alatchdata').value = "No Latch Set"
			}
			else {

				document.getElementById('alatchdata').value = params[1]
			}
			break;

		default:
			break;
	}
	//document.getElementById("ain").value = out;
};


function clicked(id) {
	//console.log('clicked: ' + id);
	switch (id) {
		// show the pwm value field
		case 'pwm3':
			$("#v3").show();
			setPinMode('3', pwmMode);
			break;
		case 'pwm5':
			$("#v5").show();
			setPinMode('5', pwmMode);
			break;
		case 'pwm6':
			$("#v6").show();
			setPinMode('6', pwmMode);
			break;
		case 'pwm9':
			$("#v9").show();
			setPinMode('9', pwmMode);
			break;
		case 'pwm10':
			$("#v10").show();
			setPinMode('10', pwmMode);
			break;
		case 'pwm11':
			$("#v11").show();
			setPinMode('11', pwmMode);
			break;

		// hide the pwm field
		case "p3low":
			$("#v3").hide();
			setPinMode('3', outputMode);
			digitalWrite('3', '0');
			break;
		case 'p3high':
			$("#v3").hide();
			setPinMode('3', outputMode);
			digitalWrite('3', '1');
			break;

		case 'p4low':
			setPinMode('4', outputMode);
			digitalWrite('4', '0');
			break;

		case 'p4high':
			setPinMode('4', outputMode);
			digitalWrite('4', '1');
			break;

		case "p5low":
			$("#v5").hide();
			setPinMode('5', outputMode);
			digitalWrite('5', '0');
			break;
		case 'p5high':
			$("#v5").hide();
			setPinMode('5', outputMode);
			digitalWrite('5', '1');
			break;

		case "p6low":
			$("#v6").hide();
			setPinMode('6', outputMode);
			digitalWrite('6', '0');
			break;

		case 'p6high':
			$("#v6").hide();
			setPinMode('6', outputMode);
			digitalWrite('6', '1');
			break;

		case 'p7low':
			setPinMode('7', outputMode);
			digitalWrite('7', '0');
			break;

		case 'p7high':
			setPinMode('7', outputMode);
			digitalWrite('7', '1');
			break;

		case 'p8low':
			setPinMode('8', outputMode);
			digitalWrite('86', '0');
			break;

		case 'p8igh':
			setPinMode('8', outputMode);
			digitalWrite('8', '1');
			break;

		case "p9low":
			$("#v9").hide();
			setPinMode('9', outputMode);
			digitalWrite('9', '0');
			break;
		case 'p9high':
			$("#v9").hide();
			setPinMode('9', outputMode);
			digitalWrite('9', '1');
			break;

		case "p10low":
			$("#v10").hide();
			setPinMode('10', outputMode);
			digitalWrite('10', '0');
			break;
		case 'p10high':
			$("#v10").hide();
			setPinMode('10', outputMode);
			digitalWrite('10', '1');
			break;

		case "p11low":
			$("#v11").hide();
			setPinMode('11', outputMode);
			digitalWrite('11', '0');
			break;

		case 'p11high':
			$("#v11").hide();
			setPinMode('11', outputMode);
			digitalWrite('11', '1');
			break;

		case 'p12low':
			setPinMode('12', outputMode);
			digitalWrite('12', '0');
			break;

		case 'p12high':
			setPinMode('12', outputMode);
			digitalWrite('12', '1');
			break;

		case 'p13low':
			setPinMode('13', outputMode);
			digitalWrite('13', '0');
			break;

		case 'p13high':
			setPinMode('13', outputMode);
			digitalWrite('13', '1');
			break;

		case 'p14low':
			setPinMode('14', outputMode);
			digitalWrite('14', '0');
			break;

		case 'p14high':
			setPinMode('14', outputMode);
			digitalWrite('14', '1');
			break;

		case 'p15low':
			setPinMode('15', outputMode);
			digitalWrite('15', '0');
			break;

		case 'p15high':
			setPinMode('15', outputMode);
			digitalWrite('15', '1');
			break;

		case 'p16low':
			setPinMode('16', outputMode);
			digitalWrite('16', '0');
			break;

		case 'p16high':
			setPinMode('16', outputMode);
			digitalWrite('16', '1');
			break;

		case 'p17low':
			setPinMode('17', outputMode);
			digitalWrite('17', '0');
			break;

		case 'p17high':
			setPinMode('17', outputMode);
			digitalWrite('17', '1');
			break;

		case 'p18low':
			setPinMode('18', outputMode);
			digitalWrite('18', '0');
			break;

		case 'p18high':
			setPinMode('18', outputMode);
			digitalWrite('18', '1');
			break;

		case 'p19low':
			setPinMode('19', outputMode);
			digitalWrite('19', '0');
			break;

		case 'p19high':
			setPinMode('19', outputMode);
			digitalWrite('19', '1');
			break;

		case 'in0a':
			disableAnalogReporting("0");
			break;

		case 'in1a':
			disableAnalogReporting("1");
			break;

		case 'in2a':
			//console.log("disable analog pin 2");
			disableAnalogReporting("2");
			break;

		case 'in3a':
			disableAnalogReporting("3");
			break;

		case 'in4a':
			disableAnalogReporting("4");
			break;

		case 'in5a':
			disableAnalogReporting("5");
			break;

		case 'in2d':
			disableDigitalReporting("2");
			break;
		case 'in3d':
			disableDigitalReporting("3");
			break;

		case 'in4d':
			disableDigitalReporting("4");
			break;
		case 'in5d':
			disableDigitalReporting("5");
			break;

		case 'in6d':
			disableDigitalReporting("6");
			break;
		case 'in7d':
			disableDigitalReporting("7");
			break;

		case 'in8d':
			disableDigitalReporting("8");
			break;

		case 'in9d':
			disableDigitalReporting("9");
			break;

		case 'in10d':
			disableDigitalReporting("10");
			break;

		case 'in11d':
			disableDigitalReporting("11");
			break;

		case 'in12d':
			disableDigitalReporting("12");
			break;

		case 'in13d':
			disableDigitalReporting("13");
			break;

		case 'in14d':
			disableDigitalReporting("14");
			break;

		case 'in15d':
			disableDigitalReporting("15");
			break;

		case 'in16d':
			disableDigitalReporting("16");
			break;

		case 'in17d':
			disableDigitalReporting("17");
			break;

		case 'in18d':
			disableDigitalReporting("18");
			break;

		case 'in19d':
			disableDigitalReporting("19");
			break;


		case 'out2d':
			setPinMode('2', inputMode);
			break;

		case 'out3d':
			setPinMode('3', inputMode);
			break;

		case 'out4d':
			setPinMode('4', inputMode);
			break;

		case 'out5d':
			setPinMode('5', inputMode);
			break;

		case 'out6d':
			setPinMode('6', inputMode);
			break;

		case 'out7d':
			setPinMode('7', inputMode);
			break;

		case 'out8d':
			setPinMode('8', inputMode);
			break;

		case 'out9d':
			setPinMode('9', inputMode);
			break;

		case 'out10d':
			setPinMode('10', inputMode);
			break;

		case 'out11d':
			setPinMode('11', inputMode);
			break;

		case 'out12d':
			//console.log('setting pin mode for pin 12');
			setPinMode('12', inputMode);
			break;

		case 'out13d':
			setPinMode('13', inputMode);
			break;

		case 'out0a':
			setPinMode('0', analogMode);
			break;

		case 'out1a':
			setPinMode('1', analogMode);
			break;

		case 'out2a':

			setPinMode('2', analogMode);
			break;

		case 'out3a':
			setPinMode('3', analogMode);
			break;

		case 'out4a':
			setPinMode('4', analogMode);
			break;

		case 'out5a':
			setPinMode('5', analogMode);
			break;


	}
	//console.log(id);

}

function pwmChange(control) {
	var pin = 0;
	value = 0;
	switch (control) {
		case 'v3':
			pin = '3';
			break;
		case 'v5':
			pin = '5';
			break;
		case 'v6':
			pin = '6';
			break;
		case 'v9':
			pin = '9';
			break;
		case 'v10':
			pin = '10';
			break;
		case 'v11':
			pin = '11';
			break;
	}
	value = document.getElementById(control).value;
	var msg = JSON.stringify({"method": "analog_write", "params": [pin, value]});
	socket.send(msg);
	//console.log(pin + ':' + value);

}


function servo() {
	pin = document.getElementById('servoPin').value;
	console.log('servoPin: ' + pin);
	var angle = document.getElementById('servoAngle').value;
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
	msg = JSON.stringify({"method": "digital_write", "params": [pin, value]});
	socket.send(msg);
}

function disableDigitalReporting(pin) {
	msg = JSON.stringify({"method": "disable_digital_reporting", "params": [pin]});
	socket.send(msg);
}

function enableDigitalReporting(pin) {
	msg = JSON.stringify({"method": "enable_digital_reporting", "params": [pin]});
	socket.send(msg);
}

function disableAnalogReporting(pin) {
	msg = JSON.stringify({"method": "disable_analog_reporting", "params": [pin]});
	socket.send(msg);
}

function enbleAnalogReporting(pin) {
	msg = JSON.stringify({"method": "endable_analog_reporting", "params": [pin]});
	socket.send(msg);
}

function getAnalogMap() {
	msg = JSON.stringify({"method": "get_analog_map", "params": ["null"]});
	console.log(msg);
	socket.send(msg);
}

function getCapabilityReport() {
	msg = JSON.stringify({"method": "get_capability_report", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getFirmwareVersion() {
	msg = JSON.stringify({"method": "get_firmware_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getProtocolVersion() {
	msg = JSON.stringify({"method": "get_protocol_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getPymataVersion() {
	msg = JSON.stringify({"method": "get_pymata_version", "params": ["null"]});
	//console.log(msg);
	socket.send(msg);
}

function getPinState() {
	// first get the pin number from the spinner
	pin = document.getElementById('pinSpinner').value;

	msg = JSON.stringify({"method": "get_pin_state", "params": [pin]});
	//console.log(msg);
	socket.send(msg);
}

function digitalLatch(pin, id) {
	//console.log('digitalLatch pin: ' + pin);
	//console.log('id = ' + id);
	var choice = document.getElementById(id).value;
	var threshold;
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
	msg = JSON.stringify({"method": "set_digital_latch", "params": [pin, threshold]});
	//console.log(msg)
	socket.send(msg);
}

function analogLatch(pin, id) {
	//get threshold
	//console.log('analog latch pin: ' + pin);
	var thId = "a1thr" + pin;
	//console.log(thId)
	var threshold = document.getElementById(thId).value;
	//console.log('threshold: ' + threshold);
	var choice = document.getElementById(id).value;

	//console.log('choice = ' + choice)
	switch (choice) {
		case '2':
			var comp = "0";
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
	msg = JSON.stringify({"method": "set_analog_latch", "params": [pin, comp, threshold]});
	//console.log(msg)
	socket.send(msg);

}


function digitalRead() {
	pin = document.getElementById("drPin").value;
	setPinMode(pin, inputMode);
	msg = JSON.stringify({"method": "digital_read", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}

function analogRead() {
	pin = document.getElementById("arPin").value;
	setPinMode(pin, analogMode);
	msg = JSON.stringify({"method": "analog_read", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}


function digitalLatchRead() {
	pin = document.getElementById("dlData").value;
	console.log('digitalLatchdata pin ' + pin);
	setPinMode(pin, inputMode);
	msg = JSON.stringify({"method": "get_digital_latch_data", "params": [pin]});
	console.log(pin);
	socket.send(msg);
}


function analogLatchRead() {
	pin = document.getElementById("alData").value;
	console.log('analogLatchdata pin ' + pin);
	setPinMode(pin, analogMode);
	msg = JSON.stringify({"method": "get_analog_latch_data", "params": [pin]});
	console.log(msg);

	socket.send(msg);
}

function playTone() {
	pin = document.getElementById("tonePin").value;
	var frequency = document.getElementById("freq").value;
	var duration = document.getElementById("duration").value;
	msg = JSON.stringify({"method": "play_tone", "params": [pin, "TONE_TONE", frequency, duration]});
	console.log(msg);
	socket.send(msg);
}

function encoderRead(type) {
	var pin_a = document.getElementById("encoderPinA").value;
	var pin_b = document.getElementById("encoderPinB").value;
	msg = JSON.stringify({"method": "encoder_config", "params": [pin_a, pin_b]});
	console.log(msg);
	socket.send(msg);
	if (type == 1) {
		var msg = JSON.stringify(({"method": "encoder_read", "params": [pin_a]}));
		console.log(msg);
		socket.send(msg);
	}
}

function sonarRead(type) {
	var trigger = document.getElementById("sonarTriggerPin").value;
	var echo = document.getElementById("sonarEchoPin").value;
	var ping_interval = "50";
	var max_dist = "200";
	msg = JSON.stringify({"method": "sonar_config", "params": [trigger, echo, ping_interval, max_dist]});
	console.log(msg);
	socket.send(msg);
	if (type == 1) {
		var msg = JSON.stringify(({"method": "sonar_read", "params": [trigger]}));
		console.log(msg);
		socket.send(msg);
	}
}

function runStepMotor() {
	console.log('runStepMotor');
	var pin1 = document.getElementById("stepperPin1").value;
	var pin2 = document.getElementById("stepperPin2").value;
	var pin3 = document.getElementById("stepperPin3").value;
	var pin4 = document.getElementById("stepperPin4").value;
	var stepsPerRev = document.getElementById("stepRev").value;
	var speed = document.getElementById("motorSpeed").value;
	var steps = document.getElementById("numSteps").value;
	msg = JSON.stringify({"method": "stepper_config", "params": [stepsPerRev, [pin1, pin2, pin3, pin4]]});
	console.log(msg);
	socket.send(msg);
	var msg = JSON.stringify({"method": "stepper_step", "params": [speed, steps]});
	console.log(msg);
	socket.send(msg);
}

function i2cConfig() {
	var delay = document.getElementById("i2cDelayTime").value;
	msg = JSON.stringify({"method": "i2c_config", "params": [delay]});
	console.log(msg);
	socket.send(msg);
}

function i2cReadRequest() {
	var i2cAddress =  document.getElementById("i2cReadAddress").value;
	var i2cRegister = document.getElementById("i2cReadRegister").value;
	var i2cNumBytes = document.getElementById("i2cReadNumBytes").value;
	var i2cReadTp = document.getElementById("i2cReadType").value;
	msg = JSON.stringify({"method": "i2c_read_request", "params": [i2cAddress, i2cRegister,
		i2cNumBytes, i2cReadTp ]});
	console.log(msg);
	socket.send(msg);

}

function i2cReadData() {
	i2cAddress =  document.getElementById("i2cReadAddress").value;
	msg = JSON.stringify({"method": "i2c_read_data", "params": [i2cAddress ]});
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

	msg = JSON.stringify({"method": "i2c_config", "params": [matrix_address, [delay]]});
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