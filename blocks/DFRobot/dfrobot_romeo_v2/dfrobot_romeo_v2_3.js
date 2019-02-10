//http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29

'use strict';

goog.provide('Blockly.Blocks.RoMeo3');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['romeo_M1_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_left_sens.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROMEO3_MOTOR1_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ROMEO3_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_M1_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_left_pwm.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROMEO3_MOTOR1_PWM);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_M2_sens'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_right_sens.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROMEO3_MOTOR2_SENS)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ROMEO3_MOTOR_SENS);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_M2_PWM'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendValueInput("PWM")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/mot_right_pwm.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROMEO3_MOTOR2_PWM);
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROMEO3_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['romeo_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.RoMeo3.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_romeo_v2/switch.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROMEO3_SWITCH)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.ROMEO_SWITCH_FIELDDROPDOWN), 'SWITCH');
	this.setHelpUrl(Blockly.Msg.ROMEO_HELPURL);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ROMEO3_SWITCH_TOOLTIP);
  }
};