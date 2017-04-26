'use strict';

goog.provide('Blockly.Arduino.drone');

goog.require('Blockly.Arduino');

Blockly.Arduino.drone_ESC_pwm = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_power = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + value_pin] = 'Servo ESC;';
  Blockly.Arduino.setups_['setup_servo_' + value_pin] = 'ESC.attach(' + value_pin + ');';
  var code = 'ESC.writeMicroseconds(map(' + value_power + ', 0, 255, 1000, 2000));\n';
  return code;
};