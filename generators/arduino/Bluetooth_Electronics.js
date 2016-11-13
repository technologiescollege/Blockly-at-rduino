//http://www.keuwl.com/electronics.html

'use strict';

goog.provide('Blockly.Arduino.BT_ELEC');

goog.require('Blockly.Arduino');

Blockly.Arduino.BT_ELEC_Init = function() {
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.BT_ELEC_LED_brightness = function() {
  Blockly.Arduino.definitions_['BT_ELEC_LED_brightness_def'] = "//PWM LED Brightness and Bluetooth Serial Link Demo\n" +
	"//By keuwlsoft:  www.keuwl.com  23rd Aug 2015\n" +
	"int Red_LED_Pin = 9; // PWM Pin for Red LED\n" +
	"int Green_LED_Pin = 10; // PWM Pin for Green LED\n" +
	"int Blue_LED_Pin = 11; // PWM Pin for Blue LED\n" +
	"//Variables to hold brightness values ranging from 0 (off) to 255 (fully on)\n" +
	"int Red_value = 0;\n" +
	"int Green_value = 0;\n" +
	"int Blue_value = 0;\n" +
	"char BluetoothData; // the data received from bluetooth serial link";
  Blockly.Arduino.setups_['BT_ELEC_LED_brightness_setup'] = "// Initialise LED pins as outputs\n" +
	"  pinMode(Red_LED_Pin, OUTPUT);\n" +
	"  pinMode(Green_LED_Pin, OUTPUT);\n" +
	"  pinMode(Blue_LED_Pin, OUTPUT);\n" +
	"  //initialsie serial communication\n" +
	"  Serial.begin(9600);\n";
  var code =  "//Process any info coming from the bluetooth serial link\n" +
	"if (Serial.available()){\n" +
		"	BluetoothData=Serial.read(); //Get next character from bluetooth\n" +
		"	if(BluetoothData=='R') Red_value=Serial.parseInt(); //Read Red value\n" +
		"	if(BluetoothData=='G') Green_value=Serial.parseInt(); //Read Green Value\n" +
		"	if(BluetoothData=='B') Blue_value=Serial.parseInt(); //Read Blue Value\n" +
	"}\n" +  
	"//update LED Brightness\n" +
	"analogWrite(Red_LED_Pin, Red_value);\n" +
	"analogWrite(Green_LED_Pin, Green_value);\n" +
	"analogWrite(Blue_LED_Pin, Blue_value);\n" +
	"delay(10);";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.BT_ELEC_RC_car = function() {
  Blockly.Arduino.definitions_['BT_ELEC_RC_car_def'] = "//RC Car Bluetooth Serial Link Demo\n" +
	"//By keuwlsoft:  www.keuwl.com  23rd Aug 2015\n" +
	"char BluetoothData; // the Bluetooth data received";
  Blockly.Arduino.setups_['BT_ELEC_RC_car_setup'] = "Serial.begin(9600);\n" +  
	"  //Set Digital Pins 4 to 7 as Output\n" +
	"  pinMode(4,OUTPUT);\n" +
	"  pinMode(5,OUTPUT);\n" +
	"  pinMode(6,OUTPUT);\n" +
	"  pinMode(7,OUTPUT);\n" +  
	"  //Set State of Pins all to LOW (0)\n" +
	"  digitalWrite(4,0);\n" +
	"  digitalWrite(5,0);\n" +
	"  digitalWrite(6,0);\n" +
	"  digitalWrite(7,0);";
  var code =  "if (Serial.available()){\n" +  
    "	BluetoothData=Serial.read(); //Get next character from bluetooth\n" +  
    "	if(BluetoothData=='R'){ // Red Button Pressed\n" +
    "	  digitalWrite(4,1); //Turn digital out 4 to High\n" +
    "	  digitalWrite(5,0); //Turn digital out 5 to Low\n" +
    "	}\n" +
    "	if(BluetoothData=='Y'){ // Yellow Button Pressed\n" +
    "	  digitalWrite(5,1);\n" +
    "	  digitalWrite(4,0);\n" +
    "	}\n" +
    "	if(BluetoothData=='r'||BluetoothData=='y'){ // Red or Yellow Button Released\n" +
    "	  digitalWrite(4,0);\n" +
    "	  digitalWrite(5,0);\n" +
    "	}\n" +
    "	if(BluetoothData=='G'){ // Green Button Pressed\n" +
    "	  digitalWrite(6,1);\n" +
    "	  digitalWrite(7,0);\n" +
    "	}\n" +
    "	if(BluetoothData=='B'){ // Blue Button Pressed\n" +
    "	  digitalWrite(7,1);\n" +
    "	  digitalWrite(6,0);\n" +
    "	}\n" +
    "	if(BluetoothData=='g'||BluetoothData=='b'){ // Green or Blue Button Released\n" +
    "	  digitalWrite(7,0);\n" +
    "	  digitalWrite(6,0);\n" +
    "	}\n" +
  "  }\n" +
  "delay(10);// wait 10 ms";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};