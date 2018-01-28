'use strict';

goog.provide('Blockly.Arduino.arduino_BT');

goog.require('Blockly.Arduino');

Blockly.Arduino.arduino_BT_send = function(block) {
    var value_data_s = Blockly.Arduino.valueToCode(block, "data_s", Blockly.Arduino.ORDER_NONE);
    Blockly.Arduino.setups_["BLUETOOTH"] = "Serial.begin(9600);";
    return "if (Serial.available() > 0) {\n  Serial.write(" + value_data_s + ");\n}\n"
};

Blockly.Arduino.arduino_BT_verify_send = function(block) {	
    Blockly.Arduino.setups_["BLUETOOTH"] = "Serial.begin(9600);";
    var n = 0;
	var switchvar = Blockly.Arduino.variableDB_.getName(this.getFieldValue('SWVAR'), Blockly.Variables.NAME_TYPE);
	var argument = Blockly.Arduino.valueToCode(this, 'CASE' + n, Blockly.Arduino.ORDER_NONE) || 'false';
	var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
	var code = "if (Serial.available() > 0) {\n  char dataR = Serial.read();\n  if (dataR == " + argument + ") {\n  " + branch + "}\n";
	for (n = 1; n <= this.casebreakCount_; n++) {
		argument = Blockly.Arduino.valueToCode(this, 'CASE' + n, Blockly.Arduino.ORDER_NONE) || 'false';
		branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
		code += "  if (dataR == " + argument + ") {\n  " + branch + "}\n";
	  }
	if (this.defaultCount_) {
		branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
		code += ' default :\n' + branch + ' ';
	  }
	code += "  delay(200);\n}\n";
	return code;
};