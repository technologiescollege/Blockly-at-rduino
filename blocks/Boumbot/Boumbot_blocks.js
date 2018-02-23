//Planete Sciences - Boumbot library

// define blocks
'use strict';

goog.provide('Blockly.Blocks.Boumbot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

//Init boumbot
Blockly.Blocks['Boumbot_initialisation'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_Init001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/initialise.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_Init002);
  }
};

//Boumbot avance
Blockly.Blocks['Boumbot_avance'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_Avance001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/avance.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_Avance002);
  }
};

//Boumbot recule
Blockly.Blocks['Boumbot_recule'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_Recule001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/recule.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_Recule002);
  }
};

//Boumbot stop
Blockly.Blocks['Boumbot_stop'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_Stop001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/arrete.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Boumbot_Stop002);
  }
};

//Boumbot tourne gauche
Blockly.Blocks['Boumbot_tourne_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_tourne_gauche001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/tourneGauche.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_tourne_gauche002);
  }
};

//Boumbot tourne droite
Blockly.Blocks['Boumbot_tourne_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_tourne_droite001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/tourneDroite.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_tourne_droite002);
  }
};

//Boumbot pas à gauche
Blockly.Blocks['Boumbot_pas_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_pas_gauche001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/PAG.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_pas_gauche002);
  }
};

//Boumbot pas à droite
Blockly.Blocks['Boumbot_pas_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_pas_droite001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/PAD.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_pas_droite002);
  }
};

//Boumbot vitesse gauche
Blockly.Blocks['Boumbot_vitesse_moteur_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_vitesse_moteur_gauche001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/vitesseGauche.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_vitesse_moteur_gauche002);
  }
};

//Boumbot vitesse droite
Blockly.Blocks['Boumbot_vitesse_moteur_droit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_vitesse_moteur_droit001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/vitesseDroite.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
    this.setTooltip(Blockly.Msg.Boumbot_vitesse_moteur_droit002);
  }
};

//Boumbot sharp obstacle
Blockly.Blocks['Boumbot_obstacle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_obstacle001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/obstacle.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.Boumbot_obstacle002);
  }
};

//Boumbot sharp distance
Blockly.Blocks['Boumbot_distance'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_distance001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/distance.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Boumbot_distance002);
  }
};

//Boumbot ligne gauche
Blockly.Blocks['Boumbot_ligne_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_ligne_gauche001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/ligneGauche.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.Boumbot_ligne_gauche002);
  }
};

//Boumbot ligne droite
Blockly.Blocks['Boumbot_ligne_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_ligne_droite001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/ligneDroit.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.Boumbot_ligne_droite002);
  }
};

//Boumbot capteur gauche
Blockly.Blocks['Boumbot_capteur_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_capteur_gauche001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/capteurGauche.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Boumbot_capteur_gauche002);
  }
};

//Boumbot capteur droit
Blockly.Blocks['Boumbot_capteur_droit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
    this.setHelpUrl('TBD');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.Boumbot_capteur_droit001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/capteurDroit.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Boumbot_capteur_droit002);
  }
};

//Boumbot son
Blockly.Blocks['Boumbot_son'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
	this.setHelpUrl('TBD');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.Boumbot_son001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/son.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("NUM")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_son002)
    this.appendValueInput("TPS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_son003)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Boumbot_son004);
  }
};

//Boumbot melody
Blockly.Blocks['Boumbot_melody'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
	this.setHelpUrl('TBD');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.Boumbot_melody001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/son.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("NUM")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_melody002)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Boumbot_melody003);
  }
};

//Boumbot led
Blockly.Blocks['Boumbot_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Boumbot.HUE);
	this.setHelpUrl('TBD');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.Boumbot_led001)
        .appendField(new Blockly.FieldImage("blocks/Boumbot/img/leds.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_led002)
	this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_led003)
	this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_led004)
	this.appendValueInput("Index")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Boumbot_led005)		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Boumbot_led006);
  }
};
