'use strict';

goog.provide('Blockly.Python.pins');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_pin_touched'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.is_touched()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_pin_read_analog'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.read_analog()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_pin_write_analog'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_output = Blockly.Python.valueToCode(block, 'output', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.write_analog(' + value_output + ')\n';
  return code;
};

Blockly.Python['microbit_pin_read_digital'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.read_digital()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_pin_write_digital'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_output = Blockly.Python.valueToCode(block, 'output', Blockly.Python.ORDER_ATOMIC);
  // Only 0 or 1 allowed.
  if(value_output > 0) {
    value_output = 1;
  } else if (value_output < 0) {
    value_output = 0;
  }
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'pin' + dropdown_pin + '.write_digital(' + value_output + ')\n';
  return code;
};
