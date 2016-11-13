'use strict';

goog.provide('Blockly.Arduino.RoMeo1');

goog.require('Blockly.Arduino');

Blockly.Arduino.romeo_forward = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	var pindir2 = 4;
	var pinpwm2 = 5;
	var value_sens1 = true;
	var value_vitesse1 = 255;
	var value_sens2 = true;
	var value_vitesse2 = 255;
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot'] = "void cmd_mBot_mot(byte dirpin1,byte pwmpin1,boolean sens1,byte vitesse1,byte dirpin2,byte pwmpin2,boolean sens2,byte vitesse2)\n"+
    "{\n"+
    "  digitalWrite(dirpin1,sens1);\n"+
    "  analogWrite(pwmpin1,vitesse1);\n"+
    "  digitalWrite(dirpin2,sens2);\n"+
    "  analogWrite(pwmpin2,vitesse2);\n"+
    "}\n";
	var code="//avancer\n" + "cmd_mBot_mot("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+","+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};

Blockly.Arduino.romeo_backward = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	var pindir2 = 4;
	var pinpwm2 = 5;
	var value_sens1 = false;
	var value_vitesse1 = 255;
	var value_sens2 = false;
	var value_vitesse2 = 255;
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot'] = "void cmd_mBot_mot(byte dirpin1,byte pwmpin1,boolean sens1,byte vitesse1,byte dirpin2,byte pwmpin2,boolean sens2,byte vitesse2)\n"+
    "{\n"+
    "  digitalWrite(dirpin1,sens1);\n"+
    "  analogWrite(pwmpin1,vitesse1);\n"+
    "  digitalWrite(dirpin2,sens2);\n"+
    "  analogWrite(pwmpin2,vitesse2);\n"+
    "}\n";
	var code="//reculer\n" + "cmd_mBot_mot("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+","+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};

Blockly.Arduino.romeo_turn_left = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	var pindir2 = 4;
	var pinpwm2 = 5;
	var value_sens1 = true;
	var value_vitesse1 = 255;
	var value_sens2 = false;
	var value_vitesse2 = 255;
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot'] = "void cmd_mBot_mot(byte dirpin1,byte pwmpin1,boolean sens1,byte vitesse1,byte dirpin2,byte pwmpin2,boolean sens2,byte vitesse2)\n"+
    "{\n"+
    "  digitalWrite(dirpin1,sens1);\n"+
    "  analogWrite(pwmpin1,vitesse1);\n"+
    "  digitalWrite(dirpin2,sens2);\n"+
    "  analogWrite(pwmpin2,vitesse2);\n"+
    "}\n";
	var code="//tourne à gauche\n" + "cmd_mBot_mot("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+","+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};

Blockly.Arduino.romeo_turn_right = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	var pindir2 = 4;
	var pinpwm2 = 5;
	var value_sens1 = false;
	var value_vitesse1 = 255;
	var value_sens2 = true;
	var value_vitesse2 = 255;
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot'] = "void cmd_mBot_mot(byte dirpin1,byte pwmpin1,boolean sens1,byte vitesse1,byte dirpin2,byte pwmpin2,boolean sens2,byte vitesse2)\n"+
    "{\n"+
    "  digitalWrite(dirpin1,sens1);\n"+
    "  analogWrite(pwmpin1,vitesse1);\n"+
    "  digitalWrite(dirpin2,sens2);\n"+
    "  analogWrite(pwmpin2,vitesse2);\n"+
    "}\n";
	var code="//tourne à droite\n" + "cmd_mBot_mot("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+","+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};