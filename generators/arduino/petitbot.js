/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.petitbot');

goog.require('Blockly.Arduino');

Blockly.Arduino.petitbot_hcsr04 = function() {
  Blockly.Arduino.definitions_['define_PB_mesure_distance_cm'] = "int mesure_distance_petitbot()\n"+
    "{\n"+
    "  digitalWrite(D5, HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(D5, LOW);\n"+
    "  int value = (pulseIn(D0,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}";
  Blockly.Arduino.setups_['setup_sonar_PB_'] = 'pinMode(D5,OUTPUT);//Sonar triger pin\n'+
  '  pinMode(D0,INPUT);//Sonar distance pulse pin';
  var code = 'mesure_distance_petitbot()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.petitbot_analog_read = function() {
  var code = 'analogRead(A0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.petitbot_move_left = function() {
  var value_pin = 'D1';
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = 'SERVOMOTORLEFT';

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_petitbot_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_petitbot_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.petitbot_move_right = function() {
  var value_pin = 'D2';
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = 'SERVOMOTORRIGHT';

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_petitbot_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_petitbot_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.petitbot_move_1 = function() {
  var value_pin = 'D8';
  var value_degree = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = 'SERVOMOTOR1';

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_petitbot_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_petitbot_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.petitbot_move_2 = function() {
  var value_pin = 'D7';
  var value_degree = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = 'SERVOMOTOR2';

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_petitbot_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_petitbot_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.petitbot_move_3 = function() {
  var value_pin = 'D6';
  var value_degree = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = 'SERVOMOTOR3';

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_petitbot_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_petitbot_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.petitbot_digital_write_led1 = function() {
  var dropdown_pin = 'D3';
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino.petitbot_digital_write_led2 = function() {
  var dropdown_pin = 'D4';
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  return code;
};