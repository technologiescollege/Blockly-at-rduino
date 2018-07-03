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

//////////////////////////////////////////////

Blockly.Arduino.I2C_init_HW = function() {	
	Blockly.Arduino.includes_['librairie']  = '#include <Wire.h> ';
	Blockly.Arduino.setups_['setup_I2C'] = 'Wire.begin(); \n';		
	return "";
};

Blockly.Arduino.I2C_stop_HW = function() {	
	var code = 'Wire.endTransmission(1); \n';	
	return code;
};

Blockly.Arduino.I2C_restart_HW = function() {	
	var code = 'Wire.endTransmission(0); \n';	
	return code;
};


Blockly.Arduino.I2C_write_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var data = this.getFieldValue('data1'); 
	
	var code = 'Wire.write(';
	
	if (Format === "0x"){
		code+='0x'+data+'); \n';
	} else if  (Format === "0b"){
		code+='0b'+data+'); \n';		
	} else {
	code+=+data+'); \n';
	}
		
	return code;
};

Blockly.Arduino.I2C_start_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var data = this.getFieldValue('data1'); 
	
	var code = 'Wire.beginTransmission(';
	
	if (Format === "0x"){
		code+='0x'+data+'); \n';
	} else if  (Format === "0b"){
		code+='0b'+data+'); \n';		
	} else {
	code+=+data+'); \n';
	}	
	return code;
};


Blockly.Arduino.I2C_request_HW = function() {	
	var Format = this.getFieldValue('Format');	
	var Address = this.getFieldValue('address');
	var Nb_Bytes = this.getFieldValue('nb_bytes');
	
	var code = 'Wire.requestFrom(';
	
	if (Format === "0x"){
		code +='0x'+Address+','+Nb_Bytes+','+'1); \n';
	} else if  (Format === "0b"){
		code +='0b'+Address+','+Nb_Bytes+','+'1); \n';	
	} else {
	code += Address+','+Nb_Bytes+','+'1); \n';
	}	
	
	return code;
};

Blockly.Arduino.I2C_available_HW = function() {	
	var code = 'Wire.available()';	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.I2C_data_HW = function() {	
	var code = 'Wire.read()';	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


////////////////////////////////////////

Blockly.Arduino.I2C_scan = function() {	
	Blockly.Arduino.includes_['define_I2C_scan'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_I2C_scan'] = "Serial.begin (115200);\n" +
	"  // Leonardo: wait for serial port to connect\n" +
	"  while (!Serial)\n" +
	"    {\n" +
	"    }\n" +
	"  Serial.println();\n" +
	"  Serial.println('I2C scanner. Scanning ...');\n" +
	"  byte count = 0;\n" +
	"\n" + 
	"  Wire.begin();\n" +
	"  for (byte i = 8; i < 120; i++)\n" +
	"    {\n" +
	"	 Wire.beginTransmission (i);\n" +
	"	 if (Wire.endTransmission () == 0)\n" +
	"	   {\n" +
	'	   Serial.print ("Found address: ");\n' +
	"	   Serial.print (i, DEC);\n" +
	'	   Serial.print (" (0x");\n' +
	"	   Serial.print (i, HEX);\n" +
	'	   Serial.println (")");\n' +
	"	   count++;\n" +
	"	   delay (1);\n" +
	"	   } // end of good response\n" +
	"    } // end of for loop\n" +
	"  Serial.println ('Done.');\n" +
	"  Serial.print ('Found ');\n" +
	"  Serial.print (count, DEC);\n" +
	"  Serial.println (' device(s).');\n";
	var code = '';	
	return code;
};
