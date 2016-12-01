'use strict';

goog.provide('Blockly.Arduino.RoMeo3');

goog.require('Blockly.Arduino');

Blockly.Arduino.romeo_M2_sens = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	//var value_sens1 = false;
	//var value_vitesse1 = 255;
	var value_sens1 = this.getFieldValue('STAT');
	//var value_vitesse1 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	var code="digitalWrite("+pindir1+","+value_sens1+");\n";
	return code;
};

Blockly.Arduino.romeo_M2_PWM = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	//var value_sens1 = false;
	//var value_vitesse1 = 255;
	//var value_sens1 = this.getFieldValue('STAT');
	var value_vitesse1 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	var code="analogWrite("+pinpwm1+","+value_vitesse1+");\n";
	return code;
};

Blockly.Arduino.romeo_M1_sens = function() {
	var pindir2 = 4;
	var pinpwm2 = 5;
	//var value_sens2 = false;
	//var value_vitesse2 = 255;
	var value_sens2 = this.getFieldValue('STAT');
	//var value_vitesse2 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	var code="digitalWrite("+pindir2+","+value_sens2+");\n";
	return code;
};

Blockly.Arduino.romeo_M1_PWM = function() {
	var pindir2 = 4;
	var pinpwm2 = 5;
	//var value_sens2 = false;
	//var value_vitesse2 = 255;
	//var value_sens2 = this.getFieldValue('STAT');
	var value_vitesse2 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	var code="analogWrite("+pinpwm2+","+value_vitesse2+");\n";
	return code;
};

Blockly.Arduino.romeo_switch = function() {
	var select_switch = this.getFieldValue('SWITCH');
	var code="analogRead(0) == " + select_switch;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};