/**
 * Block pour le capteur anémomètre intégrant un contact reed (avec un aimant sur sa partie mobile)
 */
'use strict';

goog.provide('Blockly.Blocks.anemometre');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.vitesse_rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	this.setHelpUrl(Blockly.Msg.VITESSE_ROTATION_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_ROTATION_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/anemo_rotation/anemo_rotation.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_ROTATION_INPUT);   
    this.setOutput(true, 'Number');   
    this.setTooltip(Blockly.Msg.VITESSE_ROTATION_TOOLTIP);
  }
};

