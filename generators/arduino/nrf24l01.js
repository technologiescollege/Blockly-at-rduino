/**
 * Blocks pour NRF24L01 
	
 * @author JP Fontaine
 */
'use strict';

goog.provide('Blockly.Arduino.nrf24l01');
goog.require('Blockly.Arduino');

Blockly.Arduino.nrf24l01_init = function(block) {
	var _irq = Blockly.Arduino.valueToCode(block, 'irq', Blockly.Arduino.ORDER_ATOMIC);
	var _ce = Blockly.Arduino.valueToCode(block, 'ce', Blockly.Arduino.ORDER_ATOMIC);
	var _csn = Blockly.Arduino.valueToCode(block, 'csn', Blockly.Arduino.ORDER_ATOMIC);
	var _csn = Blockly.Arduino.valueToCode(block, 'canal', Blockly.Arduino.ORDER_ATOMIC);
	var data_send ;
	var	data_get ;
	Blockly.Arduino.includes_["SPI"] = "#include <SPI.h>";
	Blockly.Arduino.includes_["Mirf"] = "#include <Mirf.h>";
	Blockly.Arduino.includes_["nRF24L01"] = "#include <nRF24L01.h>";
	Blockly.Arduino.includes_["MirfHardwareSpiDriver"] = "#include <MirfHardwareSpiDriver.h>";
	Blockly.Arduino.variables_[data_send] = "byte data_send[32];";
	Blockly.Arduino.variables_[data_get] = "byte data_get[32];";
	Blockly.Arduino.setups_["mon_setup"] = 'Mirf.cePin = '+_ce+';\n  Mirf.csnPin = '+_csn+';\n  Mirf.spi = &MirfHardwareSpi;\n  Mirf.init();\n  Mirf.channel = 1;\n  Mirf.payload = 32;\n  Mirf.config();\n  Mirf.setTADDR((byte *) "nrf02");\n  Mirf.setRADDR((byte *) "nrf01");' ;
	return '' ;
};

Blockly.Arduino.nrf24l01_send = function(block) {
	var _data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
	return 'strcpy(data_send, "'+_data+'");\nMirf.send(data_send);\nwhile(Mirf.isSending());\n' ;
};

Blockly.Arduino.nrf24l01_get = function(block) {
	return 'while(!Mirf.dataReady())\nMirf.getData(data_get);\n' ;
};