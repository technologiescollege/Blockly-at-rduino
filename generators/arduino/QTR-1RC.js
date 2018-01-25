/**
 * Blocks pour capteur Pololu QTR-1RC
	
 * @author SebCanet
 */
 
'use strict';

goog.provide('Blockly.Arduino.QTR_1RC');
goog.require('Blockly.Arduino');

Blockly.Arduino.QTR_1RC_calibration = function() {
  Blockly.Arduino.includes_["includes_QTR_1RC_SensorCalibration"] = 
  "#include <QTRSensors.h>";
  
  Blockly.Arduino.definitions_["defines_QTR_1RC_SensorCalibration"] =
  "// Create an object for your type of sensor (RC or Analog).\n" +
  "QTRSensorsRC qtr((char[]) {8, 9}, 2);";
  
  Blockly.Arduino.setups_['setup_QTR_1RC_SensorCalibration'] = 
  "for (int i = 0; i < 400; i++)  // make the calibration take about 10 seconds\n" +
  "    {\n" +
  "    qtrrc.calibrate();       // reads all sensors 10 times at 2500 us per read (i.e. ~25 ms per call)\n" +
  "    }";
  
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

  Blockly.Arduino.definitions_['var_QTR_1RC_' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_QTR_1RC_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';
  return '';
};

Blockly.Arduino.QTR_1RC_read = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');

  var code = "unsigned int sensors[2]; // number of sensors\n" +
  dropdown_name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};