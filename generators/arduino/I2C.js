/**
 * Blocks pour I2C 
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Arduino.I2C');
goog.require('Blockly.Arduino');

Blockly.Arduino.I2C_init = function() {
	var Pin_SCL = Blockly.Arduino.valueToCode(this, 'Pin_SCL', Blockly.Arduino.ORDER_ATOMIC);
	var Port_SCL = this.getFieldValue('Port_SCL');
	var Pin_SDA = Blockly.Arduino.valueToCode(this, 'Pin_SDA', Blockly.Arduino.ORDER_ATOMIC);
	var Port_SDA = this.getFieldValue('Port_SDA');	
	
	Blockly.Arduino.includes_['define_pin_SCL']  = '#define SCL_PIN '+Pin_SCL;
	Blockly.Arduino.includes_['define_port_SCL'] = '#define SCL_PORT PORT'+Port_SCL;
	Blockly.Arduino.includes_['define_pin_SDA']  = '#define SDA_PIN '+Pin_SDA;
	Blockly.Arduino.includes_['define_port_SDA'] = '#define SDA_PORT PORT'+Port_SDA;
	Blockly.Arduino.includes_['define_I2C_soft'] = '#include <SoftI2CMaster.h>';
	Blockly.Arduino.setups_['setup_I2C'] = 'i2c_init(); \n';
		
	return "";
};

Blockly.Arduino.I2C_start = function() {
	var addr = Blockly.Arduino.valueToCode(this, 'Address', Blockly.Arduino.ORDER_ATOMIC);
	var rw = this.getFieldValue('RW');
		
	var code = 'i2c_start('+addr+' | '+rw+');\n'
	
	return code;
};

Blockly.Arduino.I2C_restart = function() {
	var addr = Blockly.Arduino.valueToCode(this, 'Address', Blockly.Arduino.ORDER_ATOMIC);
	var rw = this.getFieldValue('RW');
		
	var code = 'i2c_rep_start('+addr+' | '+rw+');\n'
	
	return code;
};

Blockly.Arduino.I2C_stop = function() {
	
	var code = 'i2c_stop();\n'
	
	return code;
};

Blockly.Arduino.I2C_write = function() {
	
	var data = Blockly.Arduino.valueToCode(this, 'Data', Blockly.Arduino.ORDER_ATOMIC);
	
	//var code = 'i2c_write('+data+')';
	var code = 'i2c_write('+data+');';
	
	//return [code, Blockly.Arduino.ORDER_ATOMIC];
	return code;
};

Blockly.Arduino.I2C_read = function() {
	
	var last = this.getFieldValue('Last');
	
	var code = 'i2c_read('+last+')';
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
