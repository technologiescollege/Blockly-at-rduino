/**
 * Blocs pour le capteur anémomètre intégrant un contact reed (avec un aimant sur sa partie mobile)
 * par : franck.piot@ac-besancon.fr
 */
'use strict';

goog.provide('Blockly.Blocks.PIR_HC_SR505');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.PIR_HC_SR505_detect = {
  init: function() {
    this.setColour(Blockly.Blocks.anemometre.HUE);
	this.setHelpUrl(Blockly.Msg.VITESSE_ROTATION_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.VITESSE_ROTATION_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/PIR_HC_SR505/PIR_HC_SR505.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.VITESSE_ROTATION_INPUT);   
    this.setOutput(true, 'Number');   
    this.setTooltip(Blockly.Msg.VITESSE_ROTATION_TOOLTIP);
  }
};