'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['robobox_month6_lineD'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH6_LINED);
	this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['robobox_month6_lineC'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH6_LINEC);
	this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['robobox_month6_lineG'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH6_LINEG);
	this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['robobox_month6_calcAngle'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOBOX_MONTH6_CALCANGLE);
	this.setOutput(true, 'Number');
    }
};
