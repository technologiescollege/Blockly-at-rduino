/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('Blockly.Arduino.APDS9960');

goog.require('Blockly.Arduino');

Blockly.Arduino.APDS9960_ColorSensor_init = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
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

Blockly.Arduino.APDS9960_ColorSensor_test = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
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

Blockly.Arduino.APDS9960_ColorSensor_ambient = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "ambient_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.APDS9960_ColorSensor_red = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "red_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.APDS9960_ColorSensor_green = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "green_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.APDS9960_ColorSensor_blue = function() {
  Blockly.Arduino.includes_["includes_APDS9960"] = 
  "#include <Wire.h>\n" +
  "#include <SparkFun_APDS9960.h>";
  
   Blockly.Arduino.definitions_["defines_APDS9960"] =
  "SparkFun_APDS9960 apds = SparkFun_APDS9960();\n" +
  "uint16_t ambient_light = 0;\n" +
  "uint16_t red_light = 0;\n" +
  "uint16_t green_light = 0;\n" +
  "uint16_t blue_light = 0;";
  
  Blockly.Arduino.setups_['setup_APDS9960'] = 
  "apds.init();\n" +
  "  apds.enableLightSensor(false);\n" +
  "  delay(500);\n"; 
  
  var code = "blue_light";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
