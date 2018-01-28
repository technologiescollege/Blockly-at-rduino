/**
 * Blocks pour capteur Pololu QTR-1RC
	
 * @author SebCanet
 */
 
'use strict';

goog.provide('Blockly.Arduino.QTR_1RC');
goog.require('Blockly.Arduino');

var QTR_nb_sensors =0;

Blockly.Arduino.QTR_1RC_calibration = function() {
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');
 
  Blockly.Arduino.includes_["includes_QTR_1RC_SensorCalibration"] = "#include <QTRSensors.h>";
  
  var code = 
  "for (int i = 0; i < 250; i++)  // make the calibration take about 10 seconds\n" +
  "    {\n" +
  "    VarQTR_" + dropdown_name + ".calibrate();       // reads all sensors 10 times at 2500 us per read (i.e. ~25 ms per call)\n" +
  "    delay(20);\n" +	
  "    }";  
  
  return code;
};

Blockly.Arduino.QTR_1RC_attach = function() {
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');

  Blockly.Arduino.includes_["includes_QTR_1RC_SensorCalibration"] = "#include <QTRSensors.h>";
  
  var code = new Array(this.itemCount_);
  QTR_nb_sensors = this.itemCount_;
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || 'null';
  }
    
  Blockly.Arduino.definitions_["defines_QTR_1RC_SensorCalibration"] =
  "// Create an object for your sensor.\n" +
  "QTRSensorsRC VarQTR_" + dropdown_name + "((char[]) {" + code.join(", ") + "}, "+ this.itemCount_ + ");\n";
  
  return '';
};

Blockly.Arduino.QTR_1RC_readLine = function() {
  var dropdown_name = this.getFieldValue('QTR_1RC_NAME');

  Blockly.Arduino.definitions_["defines_QTR_1RC_SensorCalibration"] += "unsigned int sensors_" + dropdown_name + "[" + QTR_nb_sensors + "];\n";
  
  var code = "VarQTR_" + dropdown_name + '.readLine(sensors_' + dropdown_name + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};