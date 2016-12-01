'use strict';

goog.provide('Blockly.Arduino.RoMeo2');

goog.require('Blockly.Arduino');

Blockly.Arduino.romeo_mot_M2 = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	//var value_sens1 = false;
	//var value_vitesse1 = 255;
	var value_sens1 = this.getFieldValue('STAT');
	var value_vitesse1 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot_left'] = "void cmd_mBot_mot_left(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
		"{\n"+
		"  digitalWrite(dirpin,sens);\n"+
		"  analogWrite(pwmpin,vitesse);\n"+
		"}\n";
	var code="cmd_mBot_mot_left("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+");\n";
	return code;
};

Blockly.Arduino.romeo_mot_M1 = function() {
	var pindir2 = 4;
	var pinpwm2 = 5;
	//var value_sens2 = false;
	//var value_vitesse2 = 255;
	var value_sens2 = this.getFieldValue('STAT');
	var value_vitesse2 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot_right'] = "void cmd_mBot_mot_right(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
		"{\n"+
		"  digitalWrite(dirpin,sens);\n"+
		"  analogWrite(pwmpin,vitesse);\n"+
		"}\n";
	var code="cmd_mBot_mot_right("+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};