'use strict';

goog.provide('Blockly.Arduino.jfblocks');

goog.require('Blockly.Arduino');

Blockly.Arduino.jfblocks_decode = function() {
  Blockly.Arduino.definitions_['jfblocks_decode_def'] =
	"//JFBlocks Decode serial frame\n" +
	"#include <SoftwareSerial.h>\n" +
	"char rxBluetooth;\n" +
	"int lastJfblockValue;\n" +
	"SoftwareSerial mySerial10(10,11);" ;
  Blockly.Arduino.setups_['jfblocks_decode_setup'] =
	"//Initialize software serial at 9600bps\n" +
	"	mySerial10.begin(9600);\n";
  var do_statement = Blockly.Arduino.statementToCode(this, "DECODE_DO");
  var code =  "//read from soft serial\n" +
	"if ( mySerial10.available() ) {\n" +
	"	rxBluetooth = mySerial10.read();\n" +
		do_statement +
	"}\n" ;
  return code;
}; //jfblocks_decode

Blockly.Arduino.jfblocks_action = function() {
  var action_start_code = Blockly.Arduino.valueToCode(this, 'ACTION_START_CODE', Blockly.Arduino.ORDER_ATOMIC);
  var action_statement = Blockly.Arduino.statementToCode(this, "ACTION_DO");
  var code = "	if ( rxBluetooth == " + action_start_code + " ) {\n" +
	"		lastJfblockValue = mySerial10.parseInt();\n" +
	"		" + action_statement +
	"		mySerial10.read();\n" +
	"	}\n";
//  return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
}; //jfblocks_action

Blockly.Arduino.jfblocks_tx = function() {
  Blockly.Arduino.definitions_['jfblocks_tx_def'] =
	"//transmit serial frame\n" +
	"int tx_data;";
  var tx_start_code = Blockly.Arduino.valueToCode(this, 'TX_START_CODE', Blockly.Arduino.ORDER_ATOMIC);
  var tx_data = Blockly.Arduino.valueToCode(this, 'TX_DATA', Blockly.Arduino.ORDER_ATOMIC);
  var tx_end_code = Blockly.Arduino.valueToCode(this, 'TX_END_CODE', Blockly.Arduino.ORDER_ATOMIC);
  var code =  "//send frame to soft serial\n" +
	"mySerial10.print(" + tx_start_code + ");\n" +
	"mySerial10.print(" + tx_data + ");\n" + 
	"mySerial10.print(" + tx_end_code +");\n" ;
  return code;
}; //jfblocks_tx

Blockly.Arduino.jfblocks_last_value = function() {
  var code =  "lastJfblockValue";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}; //jfblocks_last_value

