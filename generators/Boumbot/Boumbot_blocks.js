/* planete sciences - bombot generator */
'use strict';

goog.provide('Blockly.Arduino.Boumbot');

goog.require('Blockly.Arduino');

Blockly.Arduino.Boumbot_initialisation = function() {
Blockly.Arduino.definitions_['define_boumbot'] = "//declaration des variables\n"+
												 "BoumBot boumbot;\n";
  Blockly.Arduino.includes_['define_boumbot'] = '#include <BoumBot.h>';	//includes pour le bombot
  Blockly.Arduino.setups_['Boumbot_init'] = 'boumbot.initialise();'; //code à insérer dans le setup Arduino
  return '';
};

Blockly.Arduino.Boumbot_avance = function() {
  var code = 'boumbot.avance();\n';
  return code;
};

Blockly.Arduino.Boumbot_recule = function() {
  var code = 'boumbot.recule();\n';
  return code;
};

Blockly.Arduino.Boumbot_stop = function() {
  var code = 'boumbot.arrete();\n';
  return code;
};

Blockly.Arduino.Boumbot_tourne_gauche = function() {
  var code = 'boumbot.tourneGauche();\n';
  return code;
};

Blockly.Arduino.Boumbot_tourne_droite = function() {
  var code = 'boumbot.tourneDroite();\n';
  return code;
};

Blockly.Arduino.Boumbot_pas_gauche = function() {
  var code = 'boumbot.pasAGauche();\n';
  return code;
};

Blockly.Arduino.Boumbot_pas_droite = function() {
  var code = 'boumbot.pasADroite();\n';
  return code;
};

Blockly.Arduino.Boumbot_vitesse_moteur_gauche = function() {
  var code = 'boumbot.vitesseGauche();\n';
  return code;
};

Blockly.Arduino.Boumbot_vitesse_moteur_droite = function() {
  var code = 'boumbot.vitesseDroite();\n';
  return code;
};

Blockly.Arduino.Boumbot_led = function();


// Blockly.Arduino.Sharp_IR_read = function() {
  // var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  // var dropdown_name = this.getFieldValue('SHARP_IR_NAME');

  // var code = dropdown_name + '.distance()';
  // return [code, Blockly.Arduino.ORDER_ATOMIC];
// };
