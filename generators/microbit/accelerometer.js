'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_accelerometer_get_x'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.get_x()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_get_y'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.get_y()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_get_z'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.get_z()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_was_gesture'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_gesture = block.getFieldValue('gesture');
  var code = 'accelerometer.was_gesture("' + dropdown_gesture + '")';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_is_gesture'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var dropdown_gesture = block.getFieldValue('gesture');
  var code = 'accelerometer.is_gesture("' + dropdown_gesture + '")';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_get_gestures'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.get_gestures()'
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_accelerometer_current_gesture'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'accelerometer.current_gesture()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
