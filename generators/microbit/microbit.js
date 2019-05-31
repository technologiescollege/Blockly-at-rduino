'use strict';

goog.provide('Blockly.Python.microbit');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_microbit_panic'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var number_code = block.getFieldValue('code');
  var code = 'panic(' + number_code + ')\n';
  return code;
};

Blockly.Python['microbit_microbit_reset'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'reset()\n';
  return code;
};

Blockly.Python['microbit_microbit_sleep'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var code = 'sleep(' + value_duration + ')\n';
  return code;
};

Blockly.Python['microbit_microbit_running_time'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'running_time()';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_microbit_temperature'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'temperature()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
