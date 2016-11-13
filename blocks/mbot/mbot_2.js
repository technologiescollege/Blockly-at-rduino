//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Blocks.mBot_2');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['mbot_mot_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_2.HUE);
	this.appendValueInput("PWM", 'Number')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_LEFT_TITLE);	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_TITLE)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_mot_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_2.HUE);
	this.appendValueInput("PWM", 'Number')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_TITLE);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_TITLE)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);	
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};