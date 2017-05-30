/**
 * Blocks pour SPI
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Arduino.SPI');
goog.require('Blockly.Arduino');

Blockly.Arduino.SPI_init = function() {
	
	var Speed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ATOMIC);
	var Mode = this.getFieldValue('Mode');
	var Bit_order = this.getFieldValue('BitOrder');
	
	Blockly.Arduino.definitions_['library_SPI'] = '#include <SPI.h>';
	
	Blockly.Arduino.setups_['setup_SPI'] = 'SPI.beginTransaction(SPISettings('+Speed*1000000+' ,'+Bit_order+', '+Mode+' ));';
	Blockly.Arduino.setups_['begin_SPI'] = 'SPI.begin();';
		
	return "";
};

Blockly.Arduino.SPI_send = function() {
	
	var data = Blockly.Arduino.valueToCode(this, 'Data', Blockly.Arduino.ORDER_ATOMIC);
	
	var code = 'SPI.transfer('+data+'); \n';
	
	return code;
};

Blockly.Arduino.SPI_receive = function() {
	
	var code = 'SPI.transfer(0x00)';
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};