//http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29

'use strict';

goog.provide('Blockly.Blocks.RoMeo3');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['romeo_left_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/dfrobot_romeo_v2/mot_left_sens.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_LEFT_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_left_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/dfrobot_romeo_v2/mot_left_pwm.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_LEFT_PWM);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_right_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/dfrobot_romeo_v2/mot_right_sens.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.MBOT_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_right_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/dfrobot_romeo_v2/mot_right_pwm.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MBOT_MOTOR_RIGHT_PWM);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};