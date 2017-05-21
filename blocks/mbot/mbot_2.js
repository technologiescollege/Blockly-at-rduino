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

//NBR added on 2017-04-05
Blockly.Blocks['mbot_line_finder'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_2.HUE);
	this.setHelpUrl(Blockly.Msg.MBOT_INOUT_LINE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MBOT_INOUT_LINE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/lineFollower.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField(Blockly.Msg.MBOT_INOUT_LINE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_PORT_CHOICE), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MBOT_INOUT_LINE_TOOLTIP);
  }
};

//NBR added on 2017-04-05
Blockly.Blocks['mbot_ultrasonic_ranger'] = {
	init: function() {
    this.setColour(Blockly.Blocks.mBot_2.HUE);
	this.setHelpUrl(Blockly.Msg.MBOT_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.MBOT_INOUT_ULTRASONIC_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/ultrasonic2.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.MBOT_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_PORT_CHOICE), "PIN")
        .appendField(Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MBOT_INOUT_ULTRASONIC_TOOLTIP);
  }
};

//NBR added on 2017-04-05
Blockly.Blocks['mbot_IR_receiver'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_2.HUE);
    this.setHelpUrl(Blockly.Msg.MBOT_RECEPTEUR_IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.MBOT_RECEPTEUR_IR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/IR-receiver.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.MBOT_RECEPTEUR_IR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MBOT_IR_PORT_CHOICE), "PIN");
//    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MBOT_RECEPTEUR_IR_TOOLTIP);
  }
};
