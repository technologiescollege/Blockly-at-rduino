/**
 * Block pour la FlyCamOne Eco v2
 * @author Seb Canet (canet.s@free.fr)
 */
'use strict';

goog.provide('Blockly.Arduino.flycam');

goog.require('Blockly.Arduino');

Blockly.Arduino.flycam_switch = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + value_pin] = 'Servo servo_' + value_pin + ';\n';  
  Blockly.Arduino.definitions_['flycam_switch_function'] = 'void flycam_switch(Servo SERVO) {\n'
  + '  SERVO.write(180);\n'
  + '  delay(3000);\n'
  + '  SERVO.write(0);\n'
  + '  delay(1000);\n'
  + '}';
  var code = 'flycam_switch(servo_' + value_pin + ');\n';
  return code;
};

Blockly.Arduino.flycam_record = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + value_pin] = 'Servo servo_' + value_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + value_pin] = 'servo_' + value_pin + '.attach(' + value_pin + ');\n';
  var code = 'servo_' + value_pin + '.write(180);\n'
  + 'delay(500);\n'
  + 'servo_' + value_pin + '.write(0);\n'
  + 'delay(2000);\n';
  return code;
};

Blockly.Arduino.flycam_stop = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + value_pin] = 'Servo servo_' + value_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + value_pin] = 'servo_' + value_pin + '.attach(' + value_pin + ');\n';
  var code = 'servo_' + value_pin + '.write(180);\n'
  + 'delay(500);\n'
  + 'servo_' + value_pin + '.write(0);\n'
  + 'delay(2000);\n';
  return code;
};