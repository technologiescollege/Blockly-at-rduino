'use strict';

goog.provide('Blockly.Python.compass');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_compass_calibrate'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'compass.calibrate()\n';
  return code;
};

Blockly.Python['microbit_compass_is_calibrated'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'compass.is_calibrated()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_compass_heading'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'compass.heading()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_compass_get_field_strength'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'compass.get_field_strength()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
