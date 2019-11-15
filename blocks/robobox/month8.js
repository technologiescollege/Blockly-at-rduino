'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['robobox_month8_analyze'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput().appendField(Blockly.Msg.ROBOBOX_MONTH8_ANALYZE);
	this.appendValueInput("PIN")
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
    	    .appendField(Blockly.Msg.ROBOBOX_PIN);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};
