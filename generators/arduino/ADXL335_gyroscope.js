'use strict';

goog.provide('Blockly.Arduino.ADXL335');

goog.require('Blockly.Arduino');

Blockly.Arduino.ADXL335_ColorSensor_init = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n";
  
  var code = 
  "apds.readAmbientLight(ambient_light);\n" +
  "apds.readRedLight(red_light);\n" +
  "apds.readGreenLight(green_light);\n" +
  "apds.readBlueLight(blue_light);";
  return code;
};

Blockly.Arduino.ADXL335_ColorSensor_test = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = 
  "(!apds.readAmbientLight(ambient_light) ||\n" +
  "      !apds.readRedLight(red_light) ||\n" +
  "      !apds.readGreenLight(green_light) ||\n" +
  "      !apds.readBlueLight(blue_light))";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL335_ColorSensor_ambient = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "ambient_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL335_ColorSensor_red = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "red_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL335_ColorSensor_green = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "green_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL335_ColorSensor_blue = function() {
  Blockly.Arduino.includes_["includes_ADXL335"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_ADXL335.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL335"] =
  "SparkFun_ADXL335 apds = SparkFun_ADXL335();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_ADXL335'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "blue_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
