'use strict';

goog.provide('Blockly.Blocks.adafruit_motorshield_v2');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Moteur DC - V2
Blockly.Blocks['dcmotor_v2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'MOTEUR');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP, "RELEASE"]]), 'ETAT');    
    this.appendValueInput('Vitesse')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.adafruit_motorshield_v2.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/overview');
  }
};


//Moteur Pas-à-pas - V2
Blockly.Blocks['pap_v2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"]]), 'PAP2');
    this.appendValueInput('Pas_par_tour2')
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP, ""]]), 'direction_PAP2');
    this.appendValueInput('RPM2')
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM);
    this.appendValueInput('Nb_de_pas2')
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.adafruit_motorshield_v2.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/overview');
  }
};


//Joystick + moteurs - V2
Blockly.Blocks['joystick_mot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY_MOT2);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_X)
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]]), 'entree_x');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_Y)
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]]), 'entree_y');
    this.appendValueInput('zone_neutre')
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_NEUTRE);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'motor_dc1');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'motor_dc2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.adafruit_motorshield_v2.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://robot.sumo.free.fr/robot-sumo-la-fabrique.html');
  }
};


//Joystick - V2
Blockly.Blocks['joystick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY2);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_X)
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]]), 'entree_x');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_Y)
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"]]), 'entree_y');
    this.appendValueInput('zone_neutre')
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_NEUTRE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'motor_dc1');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'motor_dc2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.adafruit_motorshield_v2.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/overview');
  }
};