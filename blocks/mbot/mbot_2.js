//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Arduino.mBot');

goog.require('Blockly.Arduino');

// define blocks

Blockly.Blocks['mbot_mot_left'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("moteur gauche : puissance");	
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);	
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_LED1_TOOLTIP);
  }
};

Blockly.Blocks['mbot_mot_right'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/mot_right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("moteur droit : puissance");
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);	
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_LED1_TOOLTIP);
  }
};