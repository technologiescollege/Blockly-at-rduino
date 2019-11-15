'use strict';

goog.provide('Blockly.robobox.month4');

goog.require('Blockly.robobox');

function robobox_month4_init() {
    // Blockly.Arduino.includes_['define_month4'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_month4'] = "int pin1Moteur1 = 12;\n" 
	+ "int pin2Moteur1 = 8;\n"
	+ "int pinPMoteur1 = 11;\n"
	+ "int pin1Moteur2 = 2;\n"
	+ "int pin2Moteur2 = 4;\n"
	+ "int pinPMoteur2 = 5;\n\n"
	+ "void dirMoteur(int moteur,int sens,int pourcentage){"
	+ "  int pin1,etat1,pin2,etat2,pinP,puissance;\n\n"
	+ "  if (moteur==1){\n"
	+ "	pin1=pin1Moteur1;\n"
	+ "	pin2=pin2Moteur1;\n"
	+ "	pinP=pinPMoteur1;\n"
	+ "  }\n"
	+ "  else {\n"
	+ "	pin1=pin1Moteur2;\n"
	+ "	pin2=pin2Moteur2;\n"
	+ "	pinP=pinPMoteur2;\n"
	+ "  }\n"
	+ "  if (sens==1){\n"
	+ "	etat1=1;\n"
	+ "	etat2=0;\n"
	+ "  }\n"
	+ "  else if (sens==-1){\n"
	+ "	etat1=0;\n"
	+ "	etat2=1;\n"
	+ "  }\n"
	+ "  else {\n"
	+ "	etat1=0;\n"
	+ "	etat2=0;\n"
	+ "  }\n"
	+ "  puissance=map(pourcentage,0,100,0,255);\n"
	+ "  analogWrite(pinP,puissance);\n"
	+ "  digitalWrite(pin1,etat1);\n"
	+ "  digitalWrite(pin2,etat2);\n"
	+ "}\n";
    Blockly.Arduino.setups_["setup_month4"] = "  pinMode(pin1Moteur1,OUTPUT);\n"
	+ "  pinMode(pin2Moteur1,OUTPUT);\n"
	+ "  pinMode(pinPMoteur1,OUTPUT);\n"
	+ "  pinMode(pin1Moteur2,OUTPUT);\n"
	+ "  pinMode(pin2Moteur2,OUTPUT);\n"
	+ "  pinMode(pinPMoteur2,OUTPUT);\n";
    return ''
};

Blockly.Arduino.robobox_month4_move = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month4_move_func'] = "void avancer(){\n"
    	+ "  dirMoteur(1,1,100);\n"
    	+ "  dirMoteur(2,1,100);\n"
    	+ "}\n";
    var code = 'avancer();\n';
    return code;
};

Blockly.Arduino.robobox_month4_moveBackward = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month4_moveBackward_func'] = "void reculer(){\n"
	+ "  dirMoteur(1,0,100);\n"
	+ "  dirMoteur(2,0,100);\n"
	+ "  delay(300);\n"
	+ "  dirMoteur(1,-1,100);\n"
	+ "  dirMoteur(2,-1,100);\n"
	+ "  delay(1000);\n"
	+ "}\n";
    var code = 'reculer();\n';
    return code;
};

Blockly.Arduino.robobox_month4_turn = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month4_turn_func'] = "void tournerDroite(){\n"
	+ "  dirMoteur(1,-1,100);\n" 
	+ "  dirMoteur(2,0,0);\n"
	+ "  delay(500);\n"
	+ "}\n";
    var code = 'tournerDroite();\n';
    return code;
};

Blockly.Arduino.robobox_month4_turnLeft = function() {
    robobox_month4_init.call();
    Blockly.Arduino.definitions_['robobox_month4_turnLeft_func'] = "void tournerGauche(){\n"
	+ "  dirMoteur(1,0,0);\n" 
	+ "  dirMoteur(2,-1,100);\n"
	+ "  delay(500);\n"
	+ "}\n";
    var code = 'tournerGauche();\n';
    return code;
};
