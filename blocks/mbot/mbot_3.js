//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Blocks.mBot_3');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['mbot_left_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_LEFT_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_left_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_3.HUE);
	this.appendValueInput("PWM", 'Number')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_LEFT_PWM);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_right_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['mbot_right_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_3.HUE);
	this.appendValueInput("PWM", 'Number')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_PWM);
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};