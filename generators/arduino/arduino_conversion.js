'use strict';

goog.provide('Blockly.Blocks.arduino_conversion');

goog.require('Blockly.Blocks');

Blockly.Arduino['conversion_tochar'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'char('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['conversion_tobyte'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'byte('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['conversion_toint'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'int('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['conversion_tofloat'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'float('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}