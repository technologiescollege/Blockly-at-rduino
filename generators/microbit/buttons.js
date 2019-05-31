'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_button_is_pressed'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_button = block.getFieldValue('button');
  var code = 'button_' + dropdown_button + '.is_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_button_was_pressed'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_button = block.getFieldValue('button');
  var code = 'button_' + dropdown_button + '.was_pressed()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_button_get_presses'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_button = block.getFieldValue('button');
  var code = 'button_' + dropdown_button + '.get_presses()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
