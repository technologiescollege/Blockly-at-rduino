'use strict';

goog.provide('Blockly.Arduino.ADXL362');

goog.require('Blockly.Arduino');

Blockly.Arduino.ADXL362_init = function() {
};

Blockly.Arduino.ADXL362_XValue = function() {
  Blockly.Arduino.includes_["includes_ADXL362"] = 
  "#include <SPI.h>\n" +
  "#include <ADXL362.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL362"] =
  "ADXL362 xl;\n" +
  "\n" +
  "int ADXL362_measure(int Val){\n" +
  "  int XValue, YValue, ZValue, Temperature;\n" +
  "  xl.readXYZTData(XValue, YValue, ZValue, Temperature);\n" +
  "  if (Val == 1) return XValue;\n" +
  "  if (Val == 2) return YValue;\n" +
  "  if (Val == 3) return ZValue;\n" +
  "  if (Val == 4) return Temperature;\n" +
  "}";
  
  Blockly.Arduino.setups_['setup_ADXL362'] = 
  "xl.begin(10);\n" +
  "  xl.beginMeasure();\n";
  
  var code = "ADXL362_measure(1)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL362_YValue = function() {
  Blockly.Arduino.includes_["includes_ADXL362"] = 
  "#include <SPI.h>\n" +
  "#include <ADXL362.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL362"] =
  "ADXL362 xl;\n" +
  "\n" +
  "int ADXL362_measure(int Val){\n" +
  "  int XValue, YValue, ZValue, Temperature;\n" +
  "  xl.readXYZTData(XValue, YValue, ZValue, Temperature);\n" +
  "  if (Val == 1) return XValue;\n" +
  "  if (Val == 2) return YValue;\n" +
  "  if (Val == 3) return ZValue;\n" +
  "  if (Val == 4) return Temperature;\n" +
  "}";
  
  Blockly.Arduino.setups_['setup_ADXL362'] = 
  "xl.begin(10);\n" +
  "  xl.beginMeasure();\n";
  
  var code = "ADXL362_measure(2)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL362_ZValue = function() {
  Blockly.Arduino.includes_["includes_ADXL362"] = 
  "#include <SPI.h>\n" +
  "#include <ADXL362.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL362"] =
  "ADXL362 xl;\n" +
  "\n" +
  "int ADXL362_measure(int Val){\n" +
  "  int XValue, YValue, ZValue, Temperature;\n" +
  "  xl.readXYZTData(XValue, YValue, ZValue, Temperature);\n" +
  "  if (Val == 1) return XValue;\n" +
  "  if (Val == 2) return YValue;\n" +
  "  if (Val == 3) return ZValue;\n" +
  "  if (Val == 4) return Temperature;\n" +
  "}";
  
  Blockly.Arduino.setups_['setup_ADXL362'] = 
  "xl.begin(10);\n" +
  "  xl.beginMeasure();\n";
  
  var code = "ADXL362_measure(3)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ADXL362_TempValue = function() {
  Blockly.Arduino.includes_["includes_ADXL362"] = 
  "#include <SPI.h>\n" +
  "#include <ADXL362.h>";
  
   Blockly.Arduino.definitions_["defines_ADXL362"] =
  "ADXL362 xl;\n" +
  "\n" +
  "int ADXL362_measure(int Val){\n" +
  "  int XValue, YValue, ZValue, Temperature;\n" +
  "  xl.readXYZTData(XValue, YValue, ZValue, Temperature);\n" +
  "  if (Val == 1) return XValue;\n" +
  "  if (Val == 2) return YValue;\n" +
  "  if (Val == 3) return ZValue;\n" +
  "  if (Val == 4) return Temperature;\n" +
  "}";
  
  Blockly.Arduino.setups_['setup_ADXL362'] = 
  "xl.begin(10);\n" +
  "  xl.beginMeasure();\n";
  
  var code = "ADXL362_measure(4)";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};