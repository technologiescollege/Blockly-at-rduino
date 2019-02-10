'use strict';

goog.provide('Blockly.Arduino.dfrobot_ISD1820');

goog.require('Blockly.Arduino');

Blockly.Arduino.dfrobot_ISD1820_record = function() {
};

Blockly.Arduino.dfrobot_ISD1820_play = function() {
  var pinISD = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['ISD1820_play'] = 'pinMode(' + pinISD + ', OUTPUT);\n' + '  digitalWrite(' + pinISD + ', LOW);'
  var code = 'digitalWrite(' + pinISD + ', HIGH);\n'
  return code;
};