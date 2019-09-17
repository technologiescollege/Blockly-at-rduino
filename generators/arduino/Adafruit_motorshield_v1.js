'use strict';

goog.provide('Blockly.Arduino.adafruit_motorshield_v1');
goog.require('Blockly.Arduino');


// Moteur DC - VERSION 1
Blockly.Arduino.dcmotor_v1 = function() {

	//Définition variables
	var dropdown_moteur = this.getFieldValue('MOTEUR');
	var dropdown_etat = this.getFieldValue('ETAT');
	var value_vitesse = Blockly.Arduino.valueToCode(this, 'Vitesse');

	//librairie
	Blockly.Arduino.includes_['AFMotor.h'] = '#include <AFMotor.h>';

	//Définition des moteurs
	Blockly.Arduino.definitions_[' AF_DCMotor motor_dc_'+dropdown_moteur] = 'AF_DCMotor motor_dc_'+dropdown_moteur+'('+dropdown_moteur+', MOTOR12_2KHZ);\n';

	//Code moteur : direction et vitesse
	  var code = 'motor_dc_'+dropdown_moteur+'.setSpeed('+value_vitesse+');\n';
		 code += 'motor_dc_'+dropdown_moteur+'.run('+dropdown_etat+');\n';
	 
	  return code;
};

// Moteur Pas-à-pas - VERSION 1
Blockly.Arduino.pap_v1 = function() {

//Définition variables
  var dropdown_PAP1 = this.getFieldValue('PAP1');
  var dropdown_direction_PAP1 = this.getFieldValue('direction_PAP1');
  var value_Pas_par_tour_PAP1 = Blockly.Arduino.valueToCode(this, 'Pas_par_tour1');
  var value_RPM_PAP1 = Blockly.Arduino.valueToCode(this, 'RPM1');
  var value_Nb_de_pas_PAP1 = Blockly.Arduino.valueToCode(this, 'Nb_de_pas1');

//librairie
Blockly.Arduino.definitions_['AFMotor.h'] = '#include <AFMotor.h>';


//Définition des moteurs
Blockly.Arduino.definitions_['AF_Stepper motor' +dropdown_PAP1] = 'AF_Stepper motor'+dropdown_PAP1+'('+value_Pas_par_tour_PAP1+','+dropdown_PAP1+');\n';


//Code moteur : direction et vitesse
  var code = 'motor'+dropdown_PAP1+'.setSpeed('+value_RPM_PAP1+');\n';
    code +=  'motor'+dropdown_PAP1+'motor.step('+value_Nb_de_pas_PAP1+','+dropdown_direction_PAP1+', SINGLE);\n';

 return code;
};

// Joystick - VERSION 2
Blockly.Arduino.joystick = function() {

Blockly.Arduino.definitions_['Commentaire1'] = '//Definition variables';
  var dropdown_entree_x = this.getFieldValue('entree_x');
  var dropdown_entree_y = this.getFieldValue('entree_y');
  var neut = Blockly.Arduino.valueToCode(this, 'zone_neutre');
  var dropdown_motor_dc1 = this.getFieldValue('motor_dc1');
  var dropdown_motor_dc2 = this.getFieldValue('motor_dc2');
  Blockly.Arduino.definitions_['x'] = 'const int x = '+dropdown_entree_x+';';
  Blockly.Arduino.definitions_['xMin'] = 'const int xMin = 0;';
  Blockly.Arduino.definitions_['xMax'] = 'const int xMax = 1023;';
  Blockly.Arduino.definitions_['y'] = 'const int y = '+dropdown_entree_y+';';
  Blockly.Arduino.definitions_['yMin'] = 'const int yMin = 0;';
  Blockly.Arduino.definitions_['yMax'] = 'const int yMax = 1023;';
  Blockly.Arduino.definitions_['neut'] = 'int neut = '+neut+';';
  Blockly.Arduino.definitions_['neutn'] = 'int neutn = -'+neut+';';
  Blockly.Arduino.definitions_['calibration'] = 'int lecX, lecY, calX, calY, retX, retY, vit;\n';


Blockly.Arduino.setups_['Commentaire2'] = '//Setup';
Blockly.Arduino.setups_['serial.begin'] = 'Serial.begin(9600);';

Blockly.Arduino.setups_['Commentaire3'] = '//Setup : Lecture des valeurs en x et y';
Blockly.Arduino.setups_['lecX'] = 'lecX = analogRead(x);';
Blockly.Arduino.setups_['lecY'] = 'lecY = analogRead(y);';

  
//Code

var code = '// Calibration du joystick en 0,0\n';
code +=  'calX = analogRead(x)-lecX;\n';
code +=  'calY = analogRead(y)-lecY;\n\n';

code +=  '// Reetalonnage x et y de 0,1023 a -255,255\n';
code +=  'retX = map(calX, xMin, xMax, -255 , 255);\n';
code +=  'retX= constrain(calX, -255, 255);\n';
code +=  'retY = map(calY, yMin, yMax, -255, 255);\n';
code +=  'retY = constrain(calY, -255, 255);\n';
code +=  'Serial.print("X : ");\n';
code +=  'Serial.print(retX);\n';
code +=  'Serial.println();\n';
code +=  'Serial.print("Y : ");\n';
code +=  'Serial.print(retY);\n';
code +=  'Serial.println();\n';
code +=  'delay(50);\n';

  return code;
};
