'use strict';

goog.provide('Blockly.Arduino.bq');

goog.require('Blockly.Arduino');

Blockly.Arduino.robobox_sensors_ultrasound = function() {
  var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_dist_pin = Blockly.Arduino.valueToCode(this, 'DIST', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int mesure_distance_cm(byte trig_pin,byte dist_pin)\n"
    + "{\n"
    + "  digitalWrite(trig_pin,HIGH);\n"
    + "  delayMicroseconds(1000);\n"
    + "  digitalWrite(trig_pin,LOW);\n"
    + "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"
    + "  if (value>255) { value=255; }\n"
    + "  delay(20);\n"
    + "  return value;\n"
    + "}";
  Blockly.Arduino.setups_['setup_sonar_BQ_' + dropdown_triger_pin] = 'pinMode('+dropdown_triger_pin+',OUTPUT);//Sonar triger pin\n'+
  '  pinMode('+dropdown_dist_pin+',INPUT);//Sonar distance pulse pin';
  var code = 'mesure_distance_cm('+dropdown_triger_pin+','+dropdown_dist_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
