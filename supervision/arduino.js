/*************************************************************************
* ArduGate JavaScript binding
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/

var DIGITAL_PIN_COUNT = 14;
var ANALOG_PIN_COUNT = 6;

var HIGH = 0x1;
var LOW = 0x0;

var INPUT = 0x0;
var OUTPUT = 0x1;
var PWM = 0x2;
var SERVO = 0x3;
var TONE = 0x4;

var DEFAULT_SERVO_MIN = 544;
var DEFAULT_SERVO_MAX = 2400;
var CMD_PIN_MODE_INPUT = 0x10;
var CMD_PIN_MODE_OUTPUT = 0x11;
var CMD_DIGITAL_WRITE_LO = 0x12;
var CMD_DIGITAL_WRITE_HI = 0x13;
var CMD_ANALOG_WRITE = 0x14;
var CMD_DIGITAL_READ = 0x15;
var CMD_ANALOG_READ = 0x16;
var CMD_TONE_WRITE = 0x27;
var CMD_EEPROM_WRITE = 0x20;
var CMD_EEPROM_READ = 0x21;
var CMD_SERVO_ATTACH = 0x30;
var CMD_SERVO_DETACH = 0x40;
var CMD_SERVO_WRITE = 0x50;
var CMD_SERVO_READ = 0x60;
var CMD_BUS = 0x70;
var CMD_WIRE_BEGIN = 0x72;
var CMD_WIRE_REQUEST_FROM = 0x73;
var CMD_WIRE_BEGIN_XFER = 0x74;
var CMD_WIRE_END_XFER = 0x75;
var CMD_WIRE_READ = 0x76;
var CMD_WIRE_WRITE = 0x77;
var CMD_WIRE_AVAILABLE = 0x78;

var CMD_MATRIX_PIXEL = 0xD1;
var CMD_MATRIX_DRAW = 0xD2;
var CMD_MATRIX_CLS = 0xD3;

var digitalPinModes = new Array(DIGITAL_PIN_COUNT);
var digitalPinValues = new Array(DIGITAL_PIN_COUNT);
var analogPinModes = new Array(ANALOG_PIN_COUNT);
var analogPinValues = new Array(ANALOG_PIN_COUNT);

var connected = false;
var lastErrorCode = 0;

function SendCommand(cmd, args)
{
	var cmdhex = decimalToHex(cmd, 2);
	var cmdline = cmdhex;
	if (args) cmdline += " " + args;
	cmdline += "\r";
	if (SerialWriteEcho(cmdline)) {
		ret = SerialReadEOS("%0D%", 500);
		var retword = ret.substr(0, 2);
		if (retword == 'XX') {
			lastErrorCode = parseInt(ret.substr(3, 2), 16);		
			alert("Error receiving echo!\nCommand: 0x" + cmdhex);	
		} else if (parseInt(retword, 16) == cmd) {
			return parseInt(ret.substr(3), 16);
		}
	} else {
		alert("Error sending command!\nCommand: 0x" + cmdhex + " \nCode: " + lastErrorCode);
	}
	return null;
}

function pinMode(pin, mode)
{
	if (mode != INPUT && mode != OUTPUT) {
		digitalPinModes[pin] = null;
		return null;
	}
	var ret = SendCommand(CMD_PIN_MODE_INPUT | mode, decimalToHex(pin, 2));
	if (ret != null) {
		digitalPinModes[pin] = ret;
		return true;
	} else {
		alert("Error: pinMode");
		return null;
	}
}

function digitalWrite(pin, value)
{
	if (digitalPinModes[pin] == INPUT || (value != LOW && value != HIGH)) return null;
	
	var ret = SendCommand(CMD_DIGITAL_WRITE_LO | value, decimalToHex(pin, 2));
	if (ret != null) {
		digitalPinValues[pin] = ret;
		return true;
	}
	return null;
}

function digitalRead(pin)
{
	if (digitalPinModes[pin] == OUTPUT) return null;

	var ret = SendCommand(CMD_DIGITAL_READ, decimalToHex(pin, 2));
	if (ret != null) {
		digitalPinValues[pin] = ret;
	}
	return ret;
}

function analogWrite(pin, value)
{
	if (digitalPinModes[pin] == INPUT) return null;
	
	var args = decimalToHex(pin, 2) + " " + decimalToHex(value, 2);
	var ret = SendCommand(CMD_ANALOG_WRITE, args);
	if (ret != null) {
		digitalPinValues[pin] = value;
		return true;
	} 
	return null;
}

function analogRead(pin)
{
	if (analogPinModes[pin] == 0) return null;

	var ret = SendCommand(CMD_ANALOG_READ, decimalToHex(pin, 2));
	if (ret != null) {
		analogPinValues[pin] = ret;
	}
	return ret;
}

EEPROM=new Object();

EEPROM.read = function (addr)
{
	return SendCommand(CMD_EEPROM_READ, decimalToHex(addr, 4));
}

EEPROM.write = function (addr, byte)
{
	var args = decimalToHex(addr, 4) + " " + decimalToHex(byte, 2);
	return SendCommand(CMD_EEPROM_WRITE, args);
}

var servoTable = new Array(16);

function GetFreeServoIndex()
{
	for (var i = 0; i < servoTable.length; i++) {
		if (!servoTable[i]) {
			servoTable[i] = true;
			return i;
		}
	}
	return null;	
}

function Servo()
{
	var m_pin;
	var m_index = GetFreeServoIndex();;
	this.attach = function(pin, min, max)
	{
		if (m_index == null) return null;
		if (!min) min = DEFAULT_SERVO_MIN;
		if (!max) max = DEFAULT_SERVO_MAX;
		var args = decimalToHex(pin, 2) + " " + decimalToHex(min, 4) + " " + decimalToHex(max, 4);
		var ret = SendCommand(CMD_SERVO_ATTACH | m_index, args);
		if (ret == m_index) {
			m_pin = pin;
			return true;
		}
		return null;
	}
	this.detach = function()
	{
		if (m_index == null) return null;

		var ret = SendCommand(CMD_SERVO_DETACH | m_index);
		if (ret == m_index) {
			m_pin = null;
			return true;
		}
		return false;
	}
	this.read = function()
	{
		if (m_index == null) return null;
		return SendCommand(CMD_SERVO_READ | m_index);
	}
	this.write = function(angle)
	{
		if (m_index == null) return null;

		return SendCommand(CMD_SERVO_WRITE | m_index, decimalToHex(angle, 4));
	}
}

Wire = new Object();
Wire.begin = function(address)
{
	return SendCommand(CMD_WIRE_BEGIN, decimalToHex(address ? address : 0, 2));
}
Wire.requestFrom = function(address, count)
{
	return SendCommand(CMD_WIRE_REQUEST_FROM, decimalToHex(address, 2) + " " + decimalToHex(count, 2));
}
Wire.beginTransmission = function(address)
{
	return SendCommand(CMD_WIRE_BEGIN_XFER, decimalToHex(address, 2));
}
Wire.endTransmission = function()
{
	return SendCommand(CMD_WIRE_END_XFER);
}
Wire.read = function(timeout)
{
	var arg;
	if (timeout) arg = decimalToHex(timeout >> 4, 2);
	return SendCommand(CMD_WIRE_READ, arg);
}
Wire.write = function(value)
{
	return SendCommand(CMD_WIRE_WRITE, decimalToHex(value, 2));
}

function Update()
{
	if (connected) {
		for (i = 2; i < DIGITAL_PIN_COUNT; i++) {
			if (digitalPinModes[i] == INPUT) {
				var val = digitalRead(i);
				if (val == 0 || val == 1) {
					ShowDigitalPin(i, val);
				}
			}
		}
		for (i = 0; i < ANALOG_PIN_COUNT; i++) {
			if (analogPinModes[i]) {
				var val = analogRead(i);
				ShowAnalogPin(i, val);
			}
		}
	}
	self.setTimeout(Update, 250);
}

function Reset()
{
	SerialSetLine(true);
	SerialSetLine(false);
}

function Connect(port, baudrate)
{
	if (!connected) {
		if (SerialOpen(port, baudrate)) {
			Reset();
			for (var i = 0; !connected && i < 20; i++) {
				if (SerialWrite("\r") && SerialRead(1, 100) == "\r") {
					connected = (SerialReadEOS("%0D%", 100) == "OK");
				}
			}
			if (!connected) SerialClose();
		} else {
			connected = false;
		}
	}
	return connected;
}

function Disconnect()
{
	SerialClose();
	connected = false;
}
