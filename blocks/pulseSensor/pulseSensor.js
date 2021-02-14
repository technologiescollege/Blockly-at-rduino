/*
 * Created for pulseSensor Library
 */
 
 'use strict';

goog.provide('Blockly.Blocks.pulseSensor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks.pulseSensor_check = {
  init: function() {
    this.setColour(Blockly.Blocks.pulseSensor.HUE);
	this.setHelpUrl(Blockly.Msg.pulseSensor_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.pulseSensor_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/pulseSensor/pulseSensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
    this.appendValueInput("PIN")
        .setCheck('Number')
        .appendField(Blockly.Msg.pulseSensor_TEXT2)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.pulseSensor_INPUT);
    this.setOutput(true, 'Number');   
    this.setTooltip(Blockly.Msg.pulseSensor_TOOLTIP);
	this.setInputsInline(false);
  }
};