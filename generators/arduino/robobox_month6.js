'use strict';

goog.provide('Blockly.robobox.month4');

goog.require('Blockly.robobox');

Blockly.Arduino.robobox_month6_lineC = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month6_lineC'] = "int pinLineC = A0;\n";
    Blockly.Arduino.setups_['robobox_month6_lineC'] = "pinMode(pinLineC, INPUT);\n";
    var code = '((analogRead(pinLineC) > 620) ? 0 : 1)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_month6_lineD = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month6_lineD'] = "int pinLineD = A1;\n";
    Blockly.Arduino.setups_['robobox_month6_lineD'] = "pinMode(pinLineD, INPUT);\n";
    var code = '((analogRead(pinLineD) > 620) ? 0 : 1)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_month6_lineG = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month6_lineG'] = "int pinLineG = A2;\n";
    Blockly.Arduino.setups_['robobox_month6_lineG'] = "pinMode(pinLineG, INPUT);\n";
    var code = '((analogRead(pinLineG) > 620) ? 0 : 1)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_month6_calcAngle = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month6_lineG'] = "int calcAngle()\n"
	+ "{\n"
	+ "  int a = analogRead(A0);\n"
	+ "  int b = analogRead(A0);\n"
	+ "  int b = analogRead(A0);\n"
	+ "  int x = b - cos(60 * PI / 180) * a - cos(60 * PI / 180) * c;\n"
	+ "  int x = 0 - sin(60 * PI / 180) * a - sin(60 * PI / 180) * c;\n"
	+ "  return (atan2(x, y) * (180 / PI));\n"
	+ "}\n";
    Blockly.Arduino.setups_['robobox_month6_calcAngle'] = "pinMode(A0, INPUT);\n"
	+ "pinMode(A1, INPUT);\n"
	+ "pinMode(A2, INPUT);\n";
    var code = 'calcAngle()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
