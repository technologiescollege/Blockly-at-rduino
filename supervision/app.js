/*************************************************************************
* Demo application for ArduGate JavaScript binding
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/

var statusBar = document.getElementById("statusbar");

transformXML(SerialGetPortsXML(), loadXML("ports.xsl"), "ports");
self.setTimeout(Update, 250);

servos = new Array();

function UpdateConnectOptions()
{
	document.getElementById("btnConnect").setAttribute("value", connected ? "Disconnect" : "Connect");
	document.getElementById("listPorts").disabled = connected;
	document.getElementById("listBaudrate").disabled = connected;
	document.getElementById("btnReset").disabled = !connected;
	statusBar.innerHTML = connected ? "Connected" : "Disconnected";
}

function Open()
{
	var port = document.getElementById("listPorts").value;
	var baudrate = document.getElementById("listBaudrate").value;
	statusBar.innerHTML = "Connecting...";
	if (!Connect(port, baudrate)) {
		alert("Unable to connect");
	}
	UpdateConnectOptions();
}

function Close()
{
	Disconnect();
	UpdateConnectOptions();
}

function ShowDigitalPin(pin, value)
{
	document.getElementById("STATE_D"+pin).checked = (value != 0 ? true : false);
}

function ShowAnalogPin(pin, value)
{
	document.getElementById("VALUE_A"+pin).value = value;
}

function Unload()
{
	if (connected) Close();	
}

function SetPinModeAnalog(pin, mode)
{
	analogPinModes[pin] = mode;
}

function SetPinValue(pin, value)
{
	switch (digitalPinModes[pin]) {
	case SERVO:
		var ret = servos[pin].write(value);
		if (ret) {
			ret = servos[pin].read();
		}
		return ret;
	case PWM:
		return analogWrite(pin, value);
	}
}

function SpinValue(pin, inc)
{
	var ctrl = document.getElementById("VALUE_D"+pin);
	var val = parseInt(ctrl.value) + inc;
	if (val < 0)
		val = 0;
	switch (digitalPinModes[pin]) {
	case PWM:
		if (val > 255) val = 255;
		break;
	case SERVO:
		if (val > 180) val = 180;
		break;
	default:
		return;
	}
	var ret = SetPinValue(pin, val);
	if (ret) {
		ctrl.value = val;
	}
}

function SetPinMode(pin, mode)
{
	if (digitalPinModes[pin] == mode)
		return;
		
	if (digitalPinModes[pin] == SERVO) {
		servos[pin].detach();
	}
	
	switch (mode) {
	case INPUT:
	case OUTPUT:
		pinMode(pin, mode);
		break;
	case SERVO:
		if (!servos[pin]) {
			servos[pin] = new Servo();
		}
		servos[pin].attach(pin);
		break;
	}
	digitalPinModes[pin] = mode;
}


function ReadEEP()
{
	var addr = getIntValue('EEPROM_ADDR', 16);
	var data = EEPROM.read(addr);
	setValue('EEPROM_DATA', decimalToHex(data, 2));
}

function WriteEEP()
{
	var addr = getIntValue('EEPROM_ADDR', 16);
	var data = getIntValue('EEPROM_DATA', 16);
	if (!EEPROM.write(addr, data)) {
		setValue('EEPROM_DATA', "XX");
	}
}

function WriteI2C()
{
	var addrI2C = parseInt(document.getElementById("i2c_addr").value, 16);
	var dataI2C = parseInt(document.getElementById("i2c_data").value, 16);
	do {
		Wire.begin()
		if (Wire.beginTransmission(addrI2C) == null) break;
		if (Wire.write(dataI2C) == null) break;
		if (Wire.endTransmission() == null) break;
		alert("I2C write successful");
		document.getElementById("resultI2C").value = "";
		return;
	} while(0);
}

function ReadI2C()
{
	var addrI2C = parseInt(document.getElementById("i2c_addr").value, 16);
	var dataI2C = parseInt(document.getElementById("i2c_data").value, 16);

	Wire.begin()
    Wire.requestFrom(addrI2C, 1);
    var ret = Wire.read(500);
	document.getElementById("resultI2C").value = document.getElementById("resultI2C").value + decimalToHex(ret, 2) + " ";
}
