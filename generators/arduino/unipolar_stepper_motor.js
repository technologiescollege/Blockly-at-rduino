  /**
 * Block pour le moteur pas à pas 28BYJ-48 avec driver ULN2003A
 * @license GNU GENERAL PUBLIC LICENSE Version 2, June 1991
 * @author Code : Ghislain Fabre https://www.open-elearning.com/contact/ à partir du code réalisé par Seb Canet (canet.s@free.fr)
 * Tuto : http://libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling/bloccode
 * Outil facilitateur : https://technologiescollege.github.io/Blockly-at-rduino/tools/factory/block_factory.html
 */
 //cf. http://libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling/bloccode
'use strict';

goog.provide('Blockly.Arduino.unipolar_stepper_motor'); //nom du fichier et non de la fonction. on définit encore notre catégorie et dépendances mais cette fois on dit qu'il s'agit de code Arduino : goog.provide('Blockly.Arduino.flycam');
goog.require('Blockly.Arduino');

//Bloc de configuration
Blockly.Arduino['unipolar_stepper_motor_init'] = function(block) { //Attention l'usine à bloc ajoute Blockly.Arduino['unipolar_stepper_motor_init'] au lieu de Blockly.Arduino.unipolar_stepper_motor_init
  var variable_unipolar_stepper_motor_variable = Blockly.Arduino.variableDB_.getName(block.getFieldValue('unipolar_stepper_motor_variable'), Blockly.Variables.NAME_TYPE);
  var value_unipolar_stepper_motor_in1 = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_IN1', Blockly.Arduino.ORDER_ATOMIC);
  var value_unipolar_stepper_motor_in2 = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_IN2', Blockly.Arduino.ORDER_ATOMIC);
  var value_unipolar_stepper_motor_in3 = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_IN3', Blockly.Arduino.ORDER_ATOMIC);
  var value_unipolar_stepper_motor_in4 = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_IN4', Blockly.Arduino.ORDER_ATOMIC);
  var value_unipolar_stepper_motor_number_of_step_by_revolution = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_number_of_step_by_revolution', Blockly.Arduino.ORDER_ATOMIC);
  var value_unipolar_stepper_motor_initial_speed = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_initial_speed', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['stepper'] = '#include <Stepper.h>' ; //bibliothèques. À quoi sert ce qui est entre crochet ? C'est pour éviter que soit inclue 2 fois la même bibliothèque, en effet, si un autre bloc utilise la même librairie et que ce qui a entre crochet est similaire, ardublock n'ajoutera la librairie une seule fois.
  Blockly.Arduino.variables_['variableNumberOfStepByRevolutionStepperMotor' + variable_unipolar_stepper_motor_variable] = 'int nombreDePasParTour_' + variable_unipolar_stepper_motor_variable + ' = ' + value_unipolar_stepper_motor_number_of_step_by_revolution + ';' ;//placer ici le code de mes variables - ajout de la variable pour être utilisé pour le bloc exprimant le nombre de tours à faire (au lieu du nombre de pas)
  Blockly.Arduino.definitions_['declarationStepperMotor' + variable_unipolar_stepper_motor_variable] = 'Stepper '  + variable_unipolar_stepper_motor_variable + '(' + value_unipolar_stepper_motor_number_of_step_by_revolution + ', ' + value_unipolar_stepper_motor_in2 + ', ' + value_unipolar_stepper_motor_in4 + ', ' + value_unipolar_stepper_motor_in3 + ', ' + value_unipolar_stepper_motor_in1 + ');'; //placer ici le code de mes instances. Astuces 1) Pour le nom des variables, prendre ce qui est à gauche ci-dessus var xxxxx 2) si on met + xxx + pour mettre les variables, il faut qu'il y ait du code orange à droite aussi (ex. ');' sinon ça ne marche pas)
//  Blockly.Arduino.userFunctions_[] = 'placer ici le code de mes fonctions' ;//placer ici le code de mes fonctions
  Blockly.Arduino.setups_['setup_stepper_motor' + variable_unipolar_stepper_motor_variable]= variable_unipolar_stepper_motor_variable + '.setSpeed(' + value_unipolar_stepper_motor_initial_speed + ');' ;//placer ici le code du setup()
//  var code = 'placer ici le code du loop()'; //placer ici le code du loop()'
  //return code; //commenté car ça faisait bugguer
  return '';//Mais ne surtout pas oublier ça sinon quand on colle un autre bloc en dessous, le code arduino du bloc du dessous disparaît
};


//Bloc pour avancer (en pas)
Blockly.Arduino['unipolar_stepper_motor_steps'] = function(block) {
  var value_unipolar_stepper_motor_number_of_steps = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_number_of_steps', Blockly.Arduino.ORDER_ATOMIC);
  var variable_unipolar_stepper_motor_variable = Blockly.Arduino.variableDB_.getName(block.getFieldValue('unipolar_stepper_motor_variable'), Blockly.Variables.NAME_TYPE);
//  var variable_unipolar_stepper_motor_variable = block.getFieldValue('unipolar_stepper_motor_variable');
  var code = variable_unipolar_stepper_motor_variable + '.step(' + value_unipolar_stepper_motor_number_of_steps + ');\n';//placer ici le code du loop
  return code;
};

//Bloc pour avancer (en tours)
Blockly.Arduino['unipolar_stepper_motor_turns'] = function(block) {
  var value_unipolar_stepper_motor_number_of_turns = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_number_of_turns', Blockly.Arduino.ORDER_ATOMIC);
  var variable_unipolar_stepper_motor_variable = Blockly.Arduino.variableDB_.getName(block.getFieldValue('unipolar_stepper_motor_variable'), Blockly.Variables.NAME_TYPE);
  var value_unipolar_stepper_motor_number_of_step_by_revolution = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_number_of_step_by_revolution', Blockly.Arduino.ORDER_ATOMIC);
  var code = variable_unipolar_stepper_motor_variable + '.step(' + value_unipolar_stepper_motor_number_of_turns + '* nombreDePasParTour_' + variable_unipolar_stepper_motor_variable + ');\n';//placer ici le code du loop
  return code;
};

//Bloc pour la vitesse
Blockly.Arduino['unipolar_stepper_motor_speed_block'] = function(block) {
  var value_unipolar_stepper_motor_speed = Blockly.Arduino.valueToCode(block, 'unipolar_stepper_motor_speed', Blockly.Arduino.ORDER_ATOMIC);
  var variable_unipolar_stepper_motor_variable = Blockly.Arduino.variableDB_.getName(block.getFieldValue('unipolar_stepper_motor_variable'), Blockly.Variables.NAME_TYPE);
  var code = variable_unipolar_stepper_motor_variable + '.setSpeed(' + value_unipolar_stepper_motor_speed + ');\n';//placer ici le code du loop
  return code;
};
