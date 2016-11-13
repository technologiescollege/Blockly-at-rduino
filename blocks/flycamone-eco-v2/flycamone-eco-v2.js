/**
 * Block pour la FlyCamOne Eco v2
 * @author Seb Canet (canet.s@free.fr)
 */
'use strict';

goog.provide('Blockly.Blocks.flycam');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.flycam_switch = {
  init: function() {
    this.setColour(Blockly.Blocks.flycam.HUE);
	this.setHelpUrl(Blockly.Msg.FLYCAM_SWITCH_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FLYCAM_SWITCH_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/flycamone-eco-v2/flycam_switch.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FLYCAM_SWITCH_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FLYCAM_SWITCH_TOOLTIP);
  }
};

Blockly.Blocks.flycam_record = {
  init: function() {
    this.setColour(Blockly.Blocks.flycam.HUE);
	this.setHelpUrl(Blockly.Msg.FLYCAM_RECORD_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FLYCAM_RECORD_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/flycamone-eco-v2/flycam_record.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FLYCAM_RECORD_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FLYCAM_RECORD_TOOLTIP);
  }
};

Blockly.Blocks.flycam_stop = {
  init: function() {
    this.setColour(Blockly.Blocks.flycam.HUE);
	this.setHelpUrl(Blockly.Msg.FLYCAM_STOP_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FLYCAM_STOP_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/flycamone-eco-v2/flycam_stop.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FLYCAM_STOP_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FLYCAM_STOP_TOOLTIP);
  }
};