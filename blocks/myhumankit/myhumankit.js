
'use strict';

goog.provide('Blockly.Arduino.mhk');

goog.require('Blockly.Arduino');

// define blocks

Blockly.Blocks['mhk_ultrason'] = {
  init: function() {
    this.setColour("#FF6B37");
	this.setHelpUrl(Blockly.Msg.MHK_ULTRASON_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.MHK_ULTRASON1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/myhumankit/hc_sr04.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TRIGER")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MHK_ULTRASON2);
    this.appendValueInput("DIST")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MHK_ULTRASON3);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MHK_ULTRASON_TOOLTIP);
  }
};

Blockly.Blocks['mhk_capteur_myoware'] = {
  init: function() {
    this.setColour("#FF6B37");
	this.setHelpUrl(Blockly.Msg.MHK_CAPTEUR_MYOWARE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.MHK_CAPTEUR_MYOWARE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/myhumankit/capteur_myoware.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MHK_CAPTEUR_MYOWARE2);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MHK_CAPTEUR_MYOWARE_TOOLTIP);
  }
};

Blockly.Blocks['mhk_moteur_vibreur'] = {
  init: function() {
    this.setColour("#FF6B37");
    this.setHelpUrl(Blockly.Msg.MHK_MOTEUR_VIBREUR_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.MHK_MOTEUR_VIBREUR1);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/myhumankit/moteur_vibreur.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownPWM), 'PIN');
	this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MHK_MOTEUR_VIBREUR2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MHK_MOTEUR_VIBREUR_TOOLTIP);
  }
};