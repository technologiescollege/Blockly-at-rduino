/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
'use strict';

goog.provide('Blockly.Arduino.capacitiveSensor');
goog.require('Blockly.Arduino');

Blockly.Arduino.capacitiveSensor_check = function() {
 
 var pinSend = Blockly.Arduino.valueToCode(this, 'PIN_SEND', Blockly.Arduino.ORDER_ATOMIC); 
 var pinReceive = Blockly.Arduino.valueToCode(this, 'PIN_RECEIVE', Blockly.Arduino.ORDER_ATOMIC);
 var calibOnOff = this.getFieldValue('Calibration');
 
  Blockly.Arduino.includes_['capacitiveSensor_lib'] = '#include <CapacitiveSensor.h>';
  Blockly.Arduino.definitions_['capacitiveSensor_def'] = 'CapacitiveSensor   cs_' + pinSend + '_' + pinReceive + ' = CapacitiveSensor(' + pinSend + ',' + pinReceive + ');'
 if (calibOnOff == 'ON' )
	Blockly.Arduino.setups_['capacitiveSensor_setup'] = 'cs_' + pinSend + '_' + pinReceive + '.set_CS_AutocaL_Millis(0xFFFFFFFF);';
 
 var code = 'cs_' + pinSend + '_' + pinReceive + '.capacitiveSensor(30)';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};  