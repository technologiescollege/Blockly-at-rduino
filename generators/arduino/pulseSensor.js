/*
 * Created for pulseSensor Library
 */

'use strict';

goog.provide('Blockly.Arduino.pulseSensor');
goog.require('Blockly.Arduino');

Blockly.Arduino.pulseSensor_check = function () {
  var pinReceive = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['pulseSensor_lib'] = '#include <PulseSensorPlayground.h>';

  var code = 'analogRead(A' + pinReceive + ')';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
