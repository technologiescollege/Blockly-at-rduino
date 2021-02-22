'use strict';

goog.provide('Blockly.Arduino.I2C_to_GPIO_Module');

goog.require('Blockly.Arduino');

Blockly.Arduino.I2C_to_GPIO_Module_scan = function() {
	Blockly.Arduino.includes_['define_I2C_scan'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_I2C_scan'] = "Serial.begin (115200);\n" +
	"  // Leonardo: wait for serial port to connect\n" +
	"  while (!Serial)\n" +
	"    {\n" +
	"    }\n" +
	"  Serial.println();\n" +
	"  Serial.println('I2C scanner. Scanning ...');\n" +
	"  byte count = 0;\n" +
	"\n" + 
	"  Wire.begin();\n" +
	"  for (byte i = 8; i < 120; i++)\n" +
	"    {\n" +
	"	 Wire.beginTransmission (i);\n" +
	"	 if (Wire.endTransmission () == 0)\n" +
	"	   {\n" +
	'	   Serial.print ("Found address: ");\n' +
	"	   Serial.print (i, DEC);\n" +
	'	   Serial.print (" (0x");\n' +
	"	   Serial.print (i, HEX);\n" +
	'	   Serial.println (")");\n' +
	"	   count++;\n" +
	"	   delay (1);\n" +
	"	   } // end of good response\n" +
	"    } // end of for loop\n" +
	"  Serial.println ('Done.');\n" +
	"  Serial.print ('Found ');\n" +
	"  Serial.print (count, DEC);\n" +
	"  Serial.println (' device(s).');\n";
	var code = '';	
	return code;
};

Blockly.Arduino.I2C_to_GPIO_Module_attach = function() {
  var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('I2C_NAME');

  Blockly.Arduino.includes_['define_I2C_to_GPIO_Module'] = '#include <clsPCA9555.h>';
  Blockly.Arduino.includes_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['var_I2C_to_GPIO_Module' + dropdown_name] = 'PCA9555 ' + dropdown_name + '(0x' + address + ');';
  Blockly.Arduino.setups_['setup_I2C_to_GPIO_Module_' + dropdown_name] = dropdown_name + '.begin();';
  return '';
};

Blockly.Arduino.I2C_to_GPIO_Module_read = function() {
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('I2C_NAME');

  Blockly.Arduino.setups_['setup_I2C_to_GPIO_Module_read_' + dropdown_name] = dropdown_name + '.pinMode(' + pin + ', INPUT);';
  var code = dropdown_name + '.digitalRead(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.I2C_to_GPIO_Module_write = function() {
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var state = Blockly.Arduino.valueToCode(this, 'STATE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('I2C_NAME');

  Blockly.Arduino.setups_['setup_I2C_to_GPIO_Module_write_' + dropdown_name] = dropdown_name + '.pinMode(' + pin + ', OUTPUT);';
  var code = dropdown_name + '.digitalWrite(' + pin + ', ' + state + ');\n';
  return code;
};