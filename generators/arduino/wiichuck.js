'use strict';

goog.provide('Blockly.Arduino.wiichuck');

goog.require('Blockly.Arduino');

Blockly.Arduino.wiichuck_joy = function() {
	var direction = this.getFieldValue('DIRECTION'); 
	Blockly.Arduino.includes_['define_wii'] = '#include <ArduinoNunchuk.h>';
	Blockly.Arduino.includes_['define_wire'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['var_wii_object'] = 'ArduinoNunchuk nunchuk = ArduinoNunchuk();';
	Blockly.Arduino.setups_['setup_wii'] = 'nunchuk.init();';
	var code = "nunchuk.analog";
	if (direction == "H") code += "X";
	if (direction == "V") code += "Y";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wiichuck_accel = function() {
	var direction = this.getFieldValue('DIRECTION'); 
	Blockly.Arduino.includes_['define_wii'] = '#include <ArduinoNunchuk.h>';
	Blockly.Arduino.includes_['define_wire'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['var_wii_object'] = 'ArduinoNunchuk nunchuk = ArduinoNunchuk();';
	Blockly.Arduino.setups_['setup_wii'] = 'nunchuk.init();';
	var code = "nunchuk.accel";
	if (direction == "X") code += "X";
	if (direction == "Y") code += "Y";
	if (direction == "Z") code += "Z";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wiichuck_button = function(){
	var button = this.getFieldValue('BUTTON');
	var action = this.getFieldValue('ACTION');  
	var code = "(bool)(nunchuk.";  
	Blockly.Arduino.includes_['define_wii'] = '#include <ArduinoNunchuk.h>';
	Blockly.Arduino.includes_['define_wire'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['var_wii_object'] = 'ArduinoNunchuk nunchuk = ArduinoNunchuk();';
	Blockly.Arduino.setups_['setup_wii'] = 'nunchuk.init();'

	if ((button == "C")&&(action == "PRESSED")) code += "cButton == 1)";
	if ((button == "C")&&(action == "RELEASED")) code += "cButton == 0)";
	if ((button == "Z")&&(action == "PRESSED")) code += "zButton == 1)";
	if ((button == "Z")&&(action == "RELEASED")) code += "zButton == 0)";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.wiichuck_update = function(){ 
	var code = "nunchuk.update();\n";
	return code;
};