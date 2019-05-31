'use strict';

goog.provide('Blockly.Python.display');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');


Blockly.Python['microbit_display_get_pixel'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var code = 'display.get_pixel(' + value_x + ', ' + value_y + ')';
  return [code, Blockly.Python.ORDER_MEMBER];
};

Blockly.Python['microbit_display_set_pixel'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = 'display.set_pixel(' + value_x + ', ' + value_y + ', ' + value_value + ')\n';
  return code;
};

Blockly.Python['microbit_display_clear'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'display.clear()\n';
  return code;
};

Blockly.Python['microbit_display_show_image'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_MEMBER);
  var code = 'display.show(' + value_image + ')\n';
  return code;
};

Blockly.Python['microbit_display_show_animation'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_images = Blockly.Python.valueToCode(block, 'images', Blockly.Python.ORDER_MEMBER);
  var number_delay = block.getFieldValue('delay');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var checkbox_clear = block.getFieldValue('clear') == 'TRUE' ? 'True' : 'False';
  var code = 'display.show(' + value_images + ', delay=' + number_delay + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ', clear=' + checkbox_clear + ')\n';
  return code;
};

Blockly.Python['microbit_display_scroll'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  var code = 'display.scroll(' + value_message + ')\n';
  return code;
};

Blockly.Python['microbit_display_on'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'display.on()\n';
  return code;
};

Blockly.Python['microbit_display_off'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'display.off()\n';
  return code;
};

Blockly.Python['microbit_display_is_on'] = function(block) {
  Blockly.Python.definitions_['import_microbit'] = 'from microbit import *';
  var code = 'display.is_on()';
  return [code, Blockly.Python.ORDER_MEMBER];
};
