/**
 * Blocks pour capteur Pololu QTR-1RC
	
 * @author SebCanet
 */
 
'use strict';

goog.provide('Blockly.Arduino.QTR_1RC');
goog.require('Blockly.Arduino');

Blockly.Arduino.QTR_1RC_calibration = function() {
  Blockly.Arduino.includes_["includes_QTR_1RC_SensorCalibration"] = 
  "#include <QTRSensors.h>\n" +
  "#include <ZumoReflectanceSensorArray.h>";
  
  Blockly.Arduino.definitions_["defines_QTR_1RC_SensorCalibration"] =
  "// Define an array for holding sensor values.\n" +
  "#define NUM_SENSORS 6\n" +
  "unsigned int sensorValues[NUM_SENSORS];";

  Blockly.Arduino.definitions_["defines_QTR_1RC_Reflectance"] =
  "ZumoReflectanceSensorArray reflectanceSensors;\n";
  
  Blockly.Arduino.setups_['setup_QTR_1RC_SensorCalibration'] = 
  "reflectanceSensors.init();\n" +
  "  delay(500);\n" +
  "  pinMode(13, OUTPUT);\n" +
  "  digitalWrite(13, HIGH);        // turn on LED to indicate we are in calibration mode\n" +  
  "  unsigned long startTime = millis();\n" +
  "  while(millis() - startTime < 10000)   // make the calibration take 10 seconds\n" +
  "  {\n" +
  "    reflectanceSensors.calibrate();\n" +
  "  }\n" +
  "  digitalWrite(13, LOW);         // turn off LED to indicate we are through with calibration\n" +
  "  // print the calibration minimum values measured when emitters were on\n" +
  "  Serial.begin(9600);\n" +
  "  for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "  {\n" +
  "    Serial.print(reflectanceSensors.calibratedMinimumOn[i]);\n" +
  "    Serial.print(' ');\n" +
  "  }\n" +
  "  Serial.println();\n" +  
  "  // print the calibration maximum values measured when emitters were on\n" +
  "  for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "  {\n" +
  "    Serial.print(reflectanceSensors.calibratedMaximumOn[i]);\n" +
  "    Serial.print(' ');\n" +
  "  }\n" +
  "  Serial.println();\n" +
  "  Serial.println();\n" +
  "  delay(1000);\n";
  
  var code = 
  "unsigned int position = reflectanceSensors.readLine(sensorValues);\n" +
  "// To get raw sensor values instead, call:  \n" +
  "//reflectanceSensors.read(sensorValues);\n" +
  "for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "{\n" +
  "  Serial.print(sensorValues[i]);\n" +
  "  Serial.print(' ');\n" +
  "}\n" +
  "Serial.print('   ');\n" +
  "Serial.println(position);\n" +  
  "delay(250);";  
  
  return code;
};

Blockly.Arduino.QTR_1RC_attach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';
  return '';
};

Blockly.Arduino.QTR_1RC_read = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');

  var code = dropdown_name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};