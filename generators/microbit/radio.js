'use strict';

goog.provide('Blockly.Python.radio');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('radio');


Blockly.Python['microbit_radio_on'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var code = 'radio.on()\n';
  return code;
};

Blockly.Python['microbit_radio_off'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var code = 'radio.off()\n';
  return code;
};

Blockly.Python['microbit_radio_config'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var number_length = block.getFieldValue('length');
  var number_queue = block.getFieldValue('queue');
  var number_channel = block.getFieldValue('channel');
  var number_power = block.getFieldValue('power');
  var dropdown_data_rate = block.getFieldValue('data_rate');
  var code = 'radio.config(length=' + number_length +', queue=' + number_queue + ', channel=' + number_channel + ', power=' + number_power + ', data_rate=radio.' + dropdown_data_rate + ')\n';
  return code;
};

Blockly.Python['microbit_radio_reset'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var code = 'radio.reset()\n';
  return code;
};

Blockly.Python['microbit_radio_send_string'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var code = 'radio.send(' + value_message + ')\n';
  return code;
};

Blockly.Python['microbit_radio_receive'] = function(block) {
  Blockly.Python.definitions_['import_radio'] = 'import radio';
  var code = 'radio.receive()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
