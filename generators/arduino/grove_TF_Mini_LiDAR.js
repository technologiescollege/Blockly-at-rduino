'use strict';

goog.provide('Blockly.Arduino.grove_TF_Mini_LiDAR');

goog.require('Blockly.Arduino');

Blockly.Arduino.grove_TF_Mini_LiDAR_attach = function() {
  var value_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('LIDAR_NAME');
  Blockly.Arduino.includes_["includes_grove_TF_Mini_LiDAR"] = 
  "#include <TFLidar.h>";
  
  Blockly.Arduino.definitions_["defines_grove_TF_Mini_LiDAR_" + dropdown_name] =
  "SoftwareSerial uart(" + value_pin1 + ", " + value_pin2 + ");\n" +
  "TFMini SeeedTFMini;\n" +
  "TFLidar " + dropdown_name + "(&SeeedTFMini);\n";
  
  Blockly.Arduino.setups_["setup_grove_TF_Mini_LiDAR_" + dropdown_name] = 
  dropdown_name + ".begin(&uart,115200);\n";
  
  return '';
};

Blockly.Arduino.grove_TF_Mini_LiDAR_distance = function() {
  var dropdown_name = this.getFieldValue('LIDAR_NAME');
  
  var code = dropdown_name + ".get_distance()";    
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_TF_Mini_LiDAR_strength = function() {
  var dropdown_name = this.getFieldValue('LIDAR_NAME');
  
  var code = dropdown_name + ".get_strength()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_TF_Mini_LiDAR_chip_temp = function() {
  var dropdown_name = this.getFieldValue('LIDAR_NAME');
  
  var code = dropdown_name + ".get_chip_temperature()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};