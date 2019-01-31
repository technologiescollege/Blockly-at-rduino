/**
 * @license GNU GENERAL PUBLIC LICENSE Version 2, June 1991
 * @author Auteurs : Image : Domaine public, cyberscotty : https://openclipart.org/detail/201458/stepper-motor
 * @author Code : Ghislain Fabre https://www.open-elearning.com/contact/ à partir du code réalisé par Seb Canet 
 * Tuto : http://libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling/blocdef
 * Outil facilitateur : https://technologiescollege.github.io/Blockly-at-rduino/tools/factory/block_factory.html
 */
 
 /**
 * Block pour le moteur pas à pas 28BYJ-48 avec driver ULN2003A
 */
 
 //cf. http://libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling/blocdef
'use strict';//nécessaire
 
goog.provide('Blockly.Blocks.unipolar_stepper_motor'); //nom du fichier et non le nom de la fonction

goog.require('Blockly.Blocks'); //A besoin de cette bibliothèque
goog.require('Blockly.Types'); //idem
goog.require('Blockly.FieldInstance'); //utilisation de variables paritculières dites 'instances'


//bloc pour configurer le moteur pas à pas 28BYJ-48 avec driver ULN2003A, réalisé avec https://technologiescollege.github.io/Blockly-at-rduino/tools/factory/block_factory.html
Blockly.Blocks['unipolar_stepper_motor_init'] = { init: function() {
    this.appendDummyInput()
        .appendField("CONFIGURER le moteur pas à pas unipolaire")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.STEPPER_DEFAULT_NAME,
                                      false, false, false),
            'unipolar_stepper_motor_variable');
    this.appendDummyInput()
        .appendField("avec un driver ULN2003.")
        .appendField(new Blockly.FieldImage("blocks/unipolar_stepper_motor/unipolar_stepper_motor_init.png", 80, 80, "*"));
    this.appendValueInput("unipolar_stepper_motor_IN1")
        .setCheck(["Number", "String"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IN1");
    this.appendValueInput("unipolar_stepper_motor_IN2")
        .setCheck(["Number", "String"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IN2");
    this.appendValueInput("unipolar_stepper_motor_IN3")
        .setCheck(["Number", "String"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IN3");
    this.appendValueInput("unipolar_stepper_motor_IN4")
        .setCheck(["Number", "String"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("IN4");
    this.appendValueInput("unipolar_stepper_motor_number_of_step_by_revolution")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nombre de pas par tour");
    this.appendValueInput("unipolar_stepper_motor_initial_speed")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vitesse initiale");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Ce bloc sert à déclarer le moteur pas à pas unipolaire.');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperConstructor');
  }
};

//Bloc pour avancer en pas
Blockly.Blocks['unipolar_stepper_motor_steps'] = { init: function() {
    this.appendValueInput("unipolar_stepper_motor_number_of_steps")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("blocks/unipolar_stepper_motor/unipolar_stepper_motor_init.png", 50, 50, "*"))
        .appendField("AVANCER le moteur pas à pas unipolaire ")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.STEPPER_DEFAULT_NAME,
                                      false, false, false),
            'unipolar_stepper_motor_variable')
        .appendField("de");
    this.appendDummyInput()
        .appendField("PAS.");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Ce bloc sert à faire tourner le moteur pas à pas.');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperStep');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

//Bloc pour avancer en tours
Blockly.Blocks['unipolar_stepper_motor_turns'] = { init: function() {
    this.appendValueInput("unipolar_stepper_motor_number_of_turns")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("blocks/unipolar_stepper_motor/unipolar_stepper_motor_init.png", 50, 50, "*"))
        .appendField("AVANCER le moteur pas à pas unipolaire ")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.STEPPER_DEFAULT_NAME,
                                      false, false, false),
            'unipolar_stepper_motor_variable')
        .appendField("de");
    this.appendDummyInput()
        .appendField("TOUR(S).");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Ce bloc sert à faire tourner le moteur pas à pas.');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperStep');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

//Bloc pour la vitesse


Blockly.Blocks['unipolar_stepper_motor_speed_block'] = { init: function() {
    this.appendValueInput("unipolar_stepper_motor_speed")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("blocks/unipolar_stepper_motor/unipolar_stepper_motor_init.png", 50, 50, "*"))
        .appendField("Régler la VITESSE du moteur pas à pas unipolaire ")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.STEPPER_DEFAULT_NAME,
                                      false, false, false),
            'unipolar_stepper_motor_variable')
        .appendField("à");
    this.appendDummyInput()
        .appendField(".");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Ce bloc sert à régler la vitesse du moteur pas à pas.');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StepperSetSpeed');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};
