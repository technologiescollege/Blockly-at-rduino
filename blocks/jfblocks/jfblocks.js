/*
Custom blocks by JFB
*/

'use strict';

goog.provide('Blockly.Blocks.jfblocks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.jfblocks_decode = {
  init: function() {
    this.setColour(Blockly.Blocks.jfblocks.HUE);
    this.setTooltip(Blockly.Msg.jfblocks_decode_tooltip);
    this.appendDummyInput()
        .appendField(Blockly.Msg.jfblocks_decode_titre);
	this.appendStatementInput("DECODE_DO")
        .appendField(Blockly.Msg.jfblocks_decode_do);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
}; //jfblocks_decode

Blockly.Blocks.jfblocks_action = {
  init: function() {
    this.setColour(Blockly.Blocks.jfblocks.HUE);
    this.setTooltip(Blockly.Msg.jfblocks_action_tooltip);
	this.appendValueInput("ACTION_START_CODE")
        .appendField(Blockly.Msg.jfblocks_action_start_code)
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('String');
    this.setInputsInline(true);
	this.appendStatementInput("ACTION_DO")
        .appendField(Blockly.Msg.jfblocks_action_do);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
}; //jfblocks_action

Blockly.Blocks.jfblocks_tx = {
  init: function() {
    this.setColour(Blockly.Blocks.jfblocks.HUE);
    this.setTooltip(Blockly.Msg.jfblocks_tx_tooltip);
    this.setInputsInline(false);
    this.appendDummyInput()
        .appendField(Blockly.Msg.jfblocks_tx_titre);
	this.appendValueInput("TX_START_CODE")
        .appendField(Blockly.Msg.jfblocks_tx_start_code)
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('String');
	this.appendValueInput("TX_DATA")
        .appendField(Blockly.Msg.jfblocks_tx_data)
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
	this.appendValueInput("TX_END_CODE")
        .appendField(Blockly.Msg.jfblocks_tx_end_code)
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
}; //jfblocks_tx

Blockly.Blocks.jfblocks_last_value = {
  init: function() {
    this.setColour(Blockly.Blocks.jfblocks.HUE);
    this.setTooltip(Blockly.Msg.jfblocks_last_value_tooltip);
    this.appendDummyInput()
        .appendField(Blockly.Msg.jfblocks_last_value_titre);
	this.setOutput(true, 'Number');
  }
}; //jfblocks_last_value
