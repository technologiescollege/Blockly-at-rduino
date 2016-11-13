//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Blocks.mBot_1');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['mbot_forward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/forward.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_FORWARD_TOOLTIP);
  }
};

Blockly.Blocks['mbot_backward'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/backward.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_BACKWARD_TOOLTIP);
  }
};

Blockly.Blocks['mbot_turn_left'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/left.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_TURN_LEFT_TOOLTIP);
  }
};

Blockly.Blocks['mbot_turn_right'] = {
  init: function() {
    this.setColour(Blockly.Blocks.mBot_1.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/mbot/right.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setHelpUrl(Blockly.Msg.MBOT_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_TURN_RIGHT_TOOLTIP);
  }
};