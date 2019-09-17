'use strict';

goog.provide('Blockly.Arduino.adafruit_motorshield_v2');
goog.require('Blockly.Arduino');

// Moteur DC - VERSION 2
Blockly.Arduino.dcmotor_v2 = function() {

//Définition variables
  var dropdown_moteur = this.getFieldValue('MOTEUR');
  var dropdown_etat = this.getFieldValue('ETAT');
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'Vitesse');

//librairie
Blockly.Arduino.includes_['Wire.h'] = '#include <Wire.h>';
Blockly.Arduino.includes_['Adafruit_MotorShield.h'] = '#include <Adafruit_MotorShield.h>';
Blockly.Arduino.includes_['utility/Adafruit_MS_PWMServoDriver.h'] = '#include "utility/Adafruit_MS_PWMServoDriver.h"';

//Définition des moteurs
Blockly.Arduino.definitions_['Adafruit_AFMS'] = 'Adafruit_MotorShield AFMS = Adafruit_MotorShield();';
Blockly.Arduino.definitions_['Adafruit_DCMotor *myMotor'+dropdown_moteur] = 'Adafruit_DCMotor *myMotor'+dropdown_moteur+' = AFMS.getMotor('+dropdown_moteur+');\n';

//Setup
Blockly.Arduino.setups_['AFMS.begin()'] = 'AFMS.begin();';


//Code moteur : direction et vitesse
  var code = 'myMotor'+dropdown_moteur+'->setSpeed('+value_vitesse+');\n';
    code +=  'myMotor'+dropdown_moteur+'->run('+dropdown_etat+');\n';
 
  return code;
};

// Moteur Pas-à-pas - VERSION 2
Blockly.Arduino.pap_v2 = function() {

//Définition variables
  var dropdown_PAP2 = this.getFieldValue('PAP2');
  var dropdown_direction_PAP2 = this.getFieldValue('direction_PAP2');
  var value_Pas_par_tour_PAP2 = Blockly.Arduino.valueToCode(this, 'Pas_par_tour2');
  var value_RPM_PAP2 = Blockly.Arduino.valueToCode(this, 'RPM2');
  var value_Nb_de_pas_PAP2 = Blockly.Arduino.valueToCode(this, 'Nb_de_pas2');

//librairie
Blockly.Arduino.includes_['Wire.h'] = '#include <Wire.h>';
Blockly.Arduino.includes_['Adafruit_MotorShield.h'] = '#include <Adafruit_MotorShield.h>';
Blockly.Arduino.includes_['utility/Adafruit_MS_PWMServoDriver.h'] = '#include "utility/Adafruit_MS_PWMServoDriver.h"';

//Définition des moteurs
Blockly.Arduino.definitions_['Adafruit_AFMS'] = 'Adafruit_MotorShield AFMS = Adafruit_MotorShield();';
Blockly.Arduino.definitions_['Adafruit_StepperMotor *myMotor' +dropdown_PAP2] = 'Adafruit_StepperMotor *myMotor'+dropdown_PAP2+' = AFMS.getMotor('+value_Pas_par_tour_PAP2+','+dropdown_PAP2+');\n';


//Code moteur : direction et vitesse
  var code = 'myMotor'+dropdown_PAP2+'->setSpeed('+value_RPM_PAP2+');\n';
    code +=  'myMotor'+dropdown_PAP2+'->step('+value_Nb_de_pas_PAP2+','+dropdown_direction_PAP2+', SINGLE);\n';

 return code;
};

// Joystick - VERSION 2
Blockly.Arduino.joystick_mot = function() {

//Implantation Librairies
Blockly.Arduino.includes_['Wire.h'] = '#include <Wire.h>';
Blockly.Arduino.includes_['Adafruit_MotorShield.h'] = '#include <Adafruit_MotorShield.h>';
Blockly.Arduino.includes_['utility/Adafruit_MS_PWMServoDriver.h'] = '#include "utility/Adafruit_MS_PWMServoDriver.h"';

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

Blockly.Arduino.definitions_['Commentaire2'] = '//Definition des moteurs';
Blockly.Arduino.definitions_['Adafruit_AFMS'] = 'Adafruit_MotorShield AFMS = Adafruit_MotorShield();';
Blockly.Arduino.definitions_['Adafruit_DCMotor *myMotor'+dropdown_motor_dc1] = 'Adafruit_DCMotor *myMotor'+dropdown_motor_dc1+' = AFMS.getMotor('+dropdown_motor_dc1+');';
Blockly.Arduino.definitions_['Adafruit_DCMotor *myMotor'+dropdown_motor_dc2] = 'Adafruit_DCMotor *myMotor'+dropdown_motor_dc2+' = AFMS.getMotor('+dropdown_motor_dc2+');\n';

Blockly.Arduino.setups_['Commentaire3'] = '//Setup';
Blockly.Arduino.setups_['serial.begin'] = 'Serial.begin(9600);';
Blockly.Arduino.setups_['AFMS.begin()'] = 'AFMS.begin();\n';

Blockly.Arduino.setups_['Commentaire4'] = '//Setup : Lecture des valeurs en x et y';
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

code +=  'if ((abs(retX)) > (abs(retY)))\n';
code +=  '{\n';
code +=  'vit = (abs(retX));\n';
code +=  '}\n';
code +=  'else\n';
code +=  '{\n';
code +=  'vit = (abs(retY));\n';
code +=  '}\n\n';

code +=  '// Vitesse et direction moteurs\n';
code +=  'if (((retX) > (neut)) && ((retY) < (neutn)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(abs(vit));\n';
code +=  'myMotor1->run(FORWARD);\n';
code +=  'myMotor2->setSpeed(abs(vit));\n';
code +=  'myMotor2->run(BACKWARD);\n';
code +=  'Serial.print("Bas-gauche");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retX) < (neutn)) && ((retY) < (neutn)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(abs(vit));\n';
code +=  'myMotor1->run(BACKWARD);\n';
code +=  'myMotor2->setSpeed(abs(vit));\n';
code +=  'myMotor2->run(FORWARD);\n';
code +=  'Serial.print("Bas-droit");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retX) < (neutn)) && ((retY) > (neut)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(abs(vit));\n';
code +=  'myMotor1->run(FORWARD);\n';
code +=  'myMotor2->setSpeed(abs(vit));\n';
code +=  'myMotor2->run(BACKWARD);\n';
code +=  'Serial.print("Haut-droit");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retX) > (neut)) && ((retY) > (neut)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(vit);\n';
code +=  'myMotor1->run(BACKWARD);\n';
code +=  'myMotor2->setSpeed(vit);\n';
code +=  'myMotor2->run(FORWARD);\n';
code +=  'Serial.print("Haut-gauche");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retY) <= (neut)) && ((retY) >= (neutn)) && ((retX) >= (neut)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(vit);\n';
code +=  'myMotor1->run(BACKWARD);\n';
code +=  'myMotor2->setSpeed(vit);\n';
code +=  'myMotor2->run(FORWARD);\n';
code +=  'Serial.print("demi-tour-gauche");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retY) <= (neut)) && ((retY) >= (neutn)) && ((retX) <= (neutn)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(vit);\n';
code +=  'myMotor1->run(FORWARD);\n';
code +=  'myMotor2->setSpeed(vit);\n';
code +=  'myMotor2->run(BACKWARD);\n';
code +=  'Serial.print("demi-tour-droit");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retX) <= (neut)) && ((retX) >= (neutn)) && ((retY) >= (neut)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(vit);\n';
code +=  'myMotor1->run(FORWARD);\n';
code +=  'myMotor2->setSpeed(vit);\n';
code +=  'myMotor2->run(FORWARD);\n';
code +=  'Serial.print("Avant");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else if (((retX) <= (neut)) && ((retX) >= (neutn)) && ((retY) <= (neutn)))\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(vit);\n';
code +=  'myMotor1->run(BACKWARD);\n';
code +=  'myMotor2->setSpeed(vit);\n';
code +=  'myMotor2->run(BACKWARD);\n';
code +=  'Serial.print("Arriere");\n';
code +=  'Serial.println();\n';
code +=  '}\n';
code +=  'else\n';
code +=  '{\n';
code +=  'myMotor1->setSpeed(0);\n';
code +=  'myMotor1->run(RELEASE);\n';
code +=  'myMotor2->setSpeed(0);\n';
code +=  'myMotor2->run(RELEASE);\n';
code +=  '}\n';

  return code;
};