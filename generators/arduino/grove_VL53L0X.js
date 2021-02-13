'use strict';

goog.provide('Blockly.Arduino.grove_VL53L0X');

goog.require('Blockly.Arduino');


Blockly.Arduino.grove_VL53L0X_test = function() {
  Blockly.Arduino.includes_["includes_grove_VL53L0X"] = 
  "#include <Seeed_vl53l0x.h>";
  
  Blockly.Arduino.codeFunctions_["codeFunctions_grove_VL53L0X"] =
  "void initSensor(){\n" +
  "  VL53L0X_Error Status = VL53L0X_ERROR_NONE;\n" +
  "  Status = VL53L0X.VL53L0X_common_init();\n" +
  "  if (VL53L0X_ERROR_NONE != Status) {\n" +
  "      Serial.println(" + '"' + "start vl53l0x mesurement failed!" + '"' + ");\n" +
  "      VL53L0X.print_pal_error(Status);\n" +
  "  } else Serial.println(" + '"' + "ok!" + '"' + ");\n" +
  "  VL53L0X.VL53L0X_long_distance_ranging_init();\n" +
  "  if (VL53L0X_ERROR_NONE != Status) {\n" +
  "      Serial.println(" + '"' + "start vl53l0x mesurement failed!" + '"' + ");\n" +
  "      VL53L0X.print_pal_error(Status);\n" +
  "  } else Serial.println(" + '"' + "ok!" + '"' + ");\n" +
  "delay(300);\n" +
  "}\n";
  
  Blockly.Arduino.definitions_["defines_grove_VL53L0X"] =
  "Seeed_vl53l0x VL53L0X;";
  
  Blockly.Arduino.setups_['setup_grove_VL53L0X'] = 
  "Serial.begin(9600);";
  
  var code = "initSensor();";    
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_VL53L0X_start_and_report = function() {
  Blockly.Arduino.includes_["includes_grove_VL53L0X"] = 
  "#include <Seeed_vl53l0x.h>";  
  
  Blockly.Arduino.codeFunctions_["codeFunctions_grove_VL53L0X"] =
  "int VL53L0X_get_distance(){\n" +
  "  VL53L0X_RangingMeasurementData_t RangingMeasurementData;\n" +
  "  VL53L0X_Error Status = VL53L0X_ERROR_NONE;\n" +
  "  memset(&RangingMeasurementData, 0, sizeof(VL53L0X_RangingMeasurementData_t));\n" +
  "  Status = VL53L0X.PerformSingleRangingMeasurement(&RangingMeasurementData);\n" +
  "  return(RangingMeasurementData.RangeMilliMeter);\n" +
  "}";
  
  Blockly.Arduino.definitions_["defines_grove_VL53L0X"] =
  "Seeed_vl53l0x VL53L0X;";
  
  Blockly.Arduino.setups_['setup_grove_VL53L0X'] = 
  "VL53L0X.VL53L0X_common_init();\n" +
  "  VL53L0X.VL53L0X_long_distance_ranging_init();";
  
  var code = "VL53L0X_get_distance()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Blockly.Arduino.grove_VL53L0X_stop_measure = function() {
  // Blockly.Arduino.includes_["includes_grove_VL53L0X"] = 
  // "#include <Seeed_vl53l0x.h>";
  
   // Blockly.Arduino.definitions_["defines_grove_VL53L0X"] =
  // "Seeed_vl53l0x VL53L0X;";
  
  // var code = "VL53L0X.VL53L0X_StopMeasurement()";
  // return [code, Blockly.Arduino.ORDER_ATOMIC];
// };