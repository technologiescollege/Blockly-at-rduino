'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['robobox_month4_move'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH4_MOVE);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};

Blockly.Blocks['robobox_month4_moveBackward'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH4_MOVEBACKWARD);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};

Blockly.Blocks['robobox_month4_turn'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH4_TURNRIGHT);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};

Blockly.Blocks['robobox_month4_turnLeft'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH4_TURNLEFT);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};
