'use strict';

goog.provide('Blockly.robobox.IRremote');

goog.require('Blockly.robobox');

Blockly.Arduino.robobox_month8_analyze = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote' + pin] = "IRrecv irrecv" + pin + "(" + pin + ");\ndecode_results results" + pin + ";";
    Blockly.Arduino.definitions_['analyze_func'] = "char checkAxis(int *recieved)\n"
	+ "{\n"
	+ "int sumDiff = abs(recieved[2] - 300) + abs(recieved[3] - 800)\n"
	+ "    + abs(recieved[4] - 300);\n"
	+ "if (sumDiff < 500)\n"
	+ "  return ('X');\n"
	+ "return ('Y');\n"
	+ "}\n\n"
	+ "int checkValue(int *recieved){\n"
	+ "if ((recieved[5] + recieved[6]) / 2 > 700)\n"
	+ "return ((recieved[7] + recieved[8]) / 200 - 4);\n"
	+ "else if ((recieved[5] + recieved[6]) / 2 < 600)\n"
	+ "return ((recieved[7] + recieved[8]) / 200 - 4);\n"
	+ "}\n\n"
	+ "void avance(int *coord){\n"
	+ "int tmpVit;"
	+ "if (coord[1] == 5){\n"
	+ "  if (coord[0] > 5)\n"
	+ "    tmpVit = map(coord[0], 5, 10, 0, 255);\n"
	+ "  else if (coord[0] == 5)\n"
	+ "    tmpVit = 0;\n"
	+ "  analogWrite(5, tmpVit);\n"
	+ "  analogWrite(6, tmpVit);\n"
	+ "}\n"
	+ "else if (coord[1] != 5){\n"
	+ "  if (coord[0] == 5 && coord[1] < 5){\n"
	+ "    tmpVit = map(coord[1], 0, 5, 255, 120);\n"
	+ "    analogWrite(5, tmpVit);\n"
	+ "  }\n"
	+ "  else if (coord[0] == 5 && coord[1] > 5){\n"
    	+ "    tmpVit = map(coord[1], 0, 5, 255, 120);\n"
	+ "    analogWrite(5, tmpVit);\n"
	+ "  }\n"
	+ "  else if (coord[0] > 5 && coord[1] > 5){\n"
	+ "    analogWrite(5, map(coord[1], 10, 5, 255, 120));\n"
	+ "    analogWrite(6, map(coord[0], 10, 5, 255, 120));\n"
	+ "  }\n"
	+ "}\n"
	+ "}\n\n"
	+ "void analyze()\n"
	+ "{\n"
	+ "int recieved[11];\n"
	+ "int coordinate[2];\n\n"
	+ "for (int i = 0; i < results" + pin + ".rawlen; ++i){\n"
	+ "  recieved[i] = results" + pin + ".rawbuf[i] * USECPERTICK;\n"
	+ "}\n\n"
	+ "if ((abs(recieved[1] - 5000)) < 100\n"
	+ "    && (abs(recieved[9] - 1000)) < 100\n"
	+ "    && (abs(recieved[10] - 500)) < 100)\n"
	+ "{\n"
	+ "  char axis = checkAxis(recieved);\n"
	+ "  int position = checkValue(recieved);\n"
	+ "  if (axis == 'X')\n"
	+ "    coordinate[0] = position;\n"
	+ "  else if (axis == 'Y')\n"
	+ "    coordinate[1] = position;\n"
	+ "  avance(coordinate);\n"
	+ "}}\n";
    Blockly.Arduino.setups_["setup_IRremote_" + pin] = "irrecv" + pin + '.enableIRIn();';

    var code = "analyze();\n";
    return code;
};
