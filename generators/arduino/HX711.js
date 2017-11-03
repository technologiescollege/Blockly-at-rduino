'use strict';

goog.provide('Blockly.Arduino.HX711');

goog.require('Blockly.Arduino');

Blockly.Arduino.HX711_init = function() {
  Blockly.Arduino.includes_['includes_HX711'] = 
  "/*D2 -> HX711 CLK\n" +
  "D3 -> HX711 DOUT\n" +
  "5V -> HX711 VCC\n" +
  "GND -> HX711 GND*/\n" +
  "\n" +
  '#include "HX711.h"';
  
   Blockly.Arduino.definitions_["defines_HX711"] =
  "#define DOUT 3\n" +
  "#define CLK 2\n" +
  "HX711 scale(DOUT, CLK);\n" +
  "float calibration_factor = -7050;";
  
  Blockly.Arduino.setups_['setup_HX711_init'] = 
  'Serial.println("HX711 calibration sketch");\n' +
  '  Serial.println("Remove all weight from scale");\n' +
  '  Serial.println("After readings begin, place known weight on scale");\n' +
  '  Serial.println("Press + or a to increase calibration factor");\n' +
  '  Serial.println("Press - or z to decrease calibration factor");\n' +
  '  scale.set_scale();\n' +
  '  scale.tare(); //Reset the scale to 0\n' +
  '  long zero_factor = scale.read_average(); //Get a baseline reading\n' +
  '  Serial.print("Zero factor: "); //This can be used to remove the need to tare the scale. Useful in permanent scale projects.\n' +
  '  Serial.println(zero_factor);';
  
  var code = 
  'scale.set_scale(calibration_factor); //Adjust to this calibration factor\n' +
  'Serial.print("Reading: ");\n' +
  'Serial.print(scale.get_units() * 0.453592, 1);\n' +
  'Serial.print(" kg");\n' +
  'Serial.print(" calibration_factor: ");\n' +
  'Serial.print(calibration_factor);\n' +
  'Serial.println();\n' +
  'if(Serial.available())\n' +
  '{\n' +
  '  char temp = Serial.read();\n' +
  "  if(temp == '+' || temp == 'a') calibration_factor += 10;\n" +
  "  else if(temp == '-' || temp == 'z') calibration_factor -= 10;\n" +
  '}';
  
  return code;
};

Blockly.Arduino.HX711_read = function() {
  var CALIB_VAR = Blockly.Arduino.valueToCode(this, 'CALIBRATION', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['includes_HX711'] = 
  "/*\n" +
  "D2 -> HX711 CLK\n" +
  "D3 -> HX711 DOUT\n" +
  "5V -> HX711 VCC\n" +
  "GND -> HX711 GND\n" +
  "*/\n" +
  '#include "HX711.h"';
  
   Blockly.Arduino.definitions_["defines_HX711"] =
  "#define calibration_factor " + CALIB_VAR + " //This value is obtained using the SparkFun_HX711_Calibration sketch\n" +
  "#define DOUT 3\n" +
  "#define CLK 2\n" +
  "\n" +
  "HX711 scale(DOUT, CLK);";
  
  Blockly.Arduino.setups_['setup_HX711_read'] = 
  "scale.set_scale(calibration_factor); //This value is obtained by using the SparkFun_HX711_Calibration sketch\n" +
  "  scale.tare(); //Assuming there is no weight on the scale at start up, reset the scale to 0";
  
  var code = "scale.get_units()";
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
