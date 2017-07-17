'use strict';

goog.provide('Blockly.Blocks.arduino_conversion');

goog.require('Blockly.Blocks');

Blockly.Arduino['conversion_tochar'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'char('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_tobyte'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'byte('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_toint'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'int('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_tofloat'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'float('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['conversion_toString'] = function(block) {
	var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'String('+value_name+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.conversion_map = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
  var value_imin = Blockly.Arduino.valueToCode(this, 'IN_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_imax = Blockly.Arduino.valueToCode(this, 'IN_MAX', Blockly.Arduino.ORDER_ATOMIC);
  var value_omin = Blockly.Arduino.valueToCode(this, 'OUT_MIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_omax = Blockly.Arduino.valueToCode(this, 'OUT_MAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'map(' + value_num + ', '+ value_imin + ', ' + value_imax + ', ' + value_omin + ', ' + value_omax + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};