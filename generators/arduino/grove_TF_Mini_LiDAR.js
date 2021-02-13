'use strict';

goog.provide('Blockly.Arduino.grove_TF_Mini_LiDAR');

goog.require('Blockly.Arduino');


Blockly.Arduino.grove_TF_Mini_LiDAR_distance = function() {
  Blockly.Arduino.includes_["includes_grove_TF_Mini_LiDAR"] = 
  "#include <TFLidar.h>";
  
   Blockly.Arduino.definitions_["defines_grove_TF_Mini_LiDAR"] =
  "#define USETFMIN\n" +
  "#define SERIAL Serial\n" +
  "#if defined(SEEED_XIAO_M0)\n" +
  "  #define uart  Serial1\n" +
  "#elif defined(SEEED_WIO_TERMINAL)\n" +
  "    #define uart  Serial1\n" +
  "#else\n" +
  "    SoftwareSerial uart(2, 3);\n" +
  "#endif\n" +
  "#ifdef USETFLUNA\n" +
  "TFLuna SeeedTFLuna;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFLuna);\n" +
  "#endif\n" +
  "#ifdef USETFMINI\n" +
  "TFMini SeeedTFMini;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFMini);\n" +
  "#endif\n";
  
  Blockly.Arduino.setups_['setup_grove_TF_Mini_LiDAR'] = 
  "SERIAL.begin(9600);\n" +
  "while(!Serial);\n" +
  "SeeedTFLidar.begin(&uart,115200);\n";
  
  var code = "SeeedTFLidar.get_distance()";    
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_TF_Mini_LiDAR_strength = function() {
  Blockly.Arduino.includes_["includes_grove_TF_Mini_LiDAR"] = 
  "#include <TFLidar.h>";
  
   Blockly.Arduino.definitions_["defines_grove_TF_Mini_LiDAR"] =
  "#define USETFMIN\n" +
  "#define SERIAL Serial\n" +
  "#if defined(SEEED_XIAO_M0)\n" +
  "  #define uart  Serial1\n" +
  "#elif defined(SEEED_WIO_TERMINAL)\n" +
  "    #define uart  Serial1\n" +
  "#else\n" +
  "    SoftwareSerial uart(2, 3);\n" +
  "#endif\n" +
  "#ifdef USETFLUNA\n" +
  "TFLuna SeeedTFLuna;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFLuna);\n" +
  "#endif\n" +
  "#ifdef USETFMINI\n" +
  "TFMini SeeedTFMini;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFMini);\n" +
  "#endif\n";
  
  Blockly.Arduino.setups_['setup_grove_TF_Mini_LiDAR'] = 
  "SERIAL.begin(9600);\n" +
  "while(!Serial);\n" +
  "SeeedTFLidar.begin(&uart,115200);\n";
  
  var code = "SeeedTFLidar.get_strength()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_TF_Mini_LiDAR_chip_temp = function() {
  Blockly.Arduino.includes_["includes_grove_TF_Mini_LiDAR"] = 
  "#include <TFLidar.h>";
  
   Blockly.Arduino.definitions_["defines_grove_TF_Mini_LiDAR"] =
  "#define USETFMIN\n" +
  "#define SERIAL Serial\n" +
  "#if defined(SEEED_XIAO_M0)\n" +
  "  #define uart  Serial1\n" +
  "#elif defined(SEEED_WIO_TERMINAL)\n" +
  "    #define uart  Serial1\n" +
  "#else\n" +
  "    SoftwareSerial uart(2, 3);\n" +
  "#endif\n" +
  "#ifdef USETFLUNA\n" +
  "TFLuna SeeedTFLuna;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFLuna);\n" +
  "#endif\n" +
  "#ifdef USETFMINI\n" +
  "TFMini SeeedTFMini;\n" +
  "TFLidar SeeedTFLidar(&SeeedTFMini);\n" +
  "#endif\n";
  
  Blockly.Arduino.setups_['setup_grove_TF_Mini_LiDAR'] = 
  "SERIAL.begin(9600);\n" +
  "while(!Serial);\n" +
  "SeeedTFLidar.begin(&uart,115200);\n";
  
  var code = "SeeedTFLidar.get_chip_temperature()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};