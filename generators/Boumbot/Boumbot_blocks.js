/* planete sciences - bombot generator */
'use strict';

goog.provide('Blockly.Arduino.Boumbot');

goog.require('Blockly.Arduino');

Blockly.Arduino.Boumbot_initialisation = function() {
Blockly.Arduino.variables_['define_boumbot'] = "//declaration des variables\n"+
												 "BoumBot_v2 boumbot;\n";
  Blockly.Arduino.includes_['define_boumbot'] = '#include <BoumBot_v2.h>';	//includes pour le bombot
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
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_vitesse_moteur_droit = function() {
  var code = 'boumbot.vitesseDroite();\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_obstacle = function() {
    var code = 'boumbot.obstacle()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_distance = function() {
  var code = 'boumbot.distance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_ligne_gauche = function() {
    var code = 'boumbot.ligneGauche()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_ligne_droite = function() {
    var code = 'boumbot.ligneDroite()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_capteur_gauche = function() {
    var code = 'boumbot.capteurGauche()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Boumbot_capteur_droit = function() {
    var code = 'boumbot.capteurDroit()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.Boumbot_son = function() {
  var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  //var tps = Blockly.Arduino.valueToCode(this. 'TPS', Blockly.Arduino.ORDER_ATOMIC);

  var code = "boumbot.son("+num+");\n";
  return code;
};


Blockly.Arduino.Boumbot_led = function() {
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var Led = Blockly.Arduino.valueToCode(this, 'Led', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'boumbot.allume_rgb('+Led+', '+red+', '+green+', '+blue+');\n';
  return code;
};

Blockly.Arduino.Boumbot_eteind = function() {

    var led = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    var code = 'boumbot.eteind('+led+');\n';
    return code;
};


// Blockly.Arduino.Sharp_IR_read = function() {
  // var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  // var dropdown_name = this.getFieldValue('SHARP_IR_NAME');

  // var code = dropdown_name + '.distance()';
  // return [code, Blockly.Arduino.ORDER_ATOMIC];
// };
