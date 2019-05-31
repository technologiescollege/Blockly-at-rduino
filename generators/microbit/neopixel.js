'use strict';

goog.provide('Blockly.Python.neopixel');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('neopixel');


Blockly.Python['microbit_neopixel_initialise'] = function(block) {
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var number_n = block.getFieldValue('n');
  var dropdown_pin = block.getFieldValue('pin');
  var code = 'neopixel.NeoPixel(' + dropdown_pin + ', ' + number_n + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_neopixel_clear'] = function(block) {
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
  var code = value_neopixel_object + '.clear()\n';
  return code;
};

Blockly.Python['microbit_neopixel_show'] = function(block) {
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
  var code = value_neopixel_object + '.show()\n';
  return code;
};

Blockly.Python['microbit_neopixel_set'] = function(block) {
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var value_pixel = Blockly.Python.valueToCode(block, 'pixel', Blockly.Python.ORDER_ATOMIC);
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);
  var value_neopixel_object = Blockly.Python.valueToCode(block, 'neopixel_object', Blockly.Python.ORDER_MEMBER);
  var code = value_neopixel_object + '[' + value_pixel + '] = (' + value_red + ', ' + value_green + ', ' + value_blue + ')\n';
  return code;
};
