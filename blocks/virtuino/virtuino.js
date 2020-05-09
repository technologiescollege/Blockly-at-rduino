// define blocks
'use strict';

goog.provide('Blockly.Blocks.irtuino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks['virtuino_init']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/virtuino/virtuino.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
			.appendField(Blockly.Msg.VIRTUINO_INIT_TEXT);
		this.appendValueInput("RX")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VIRTUINO_INIT_RX);
		this.appendValueInput("TX")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VIRTUINO_INIT_TX);
		this.appendValueInput("speed")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VIRTUINO_INIT_SPEED);
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour("#DD3C23");
		this.setTooltip(Blockly.Msg.VIRTUINO_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.VIRTUINO_HELP);
	}
};

Blockly.Blocks['virtuino_read_state_dv']={
	init:function(){
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/virtuino/virtuino.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
			.appendField(Blockly.Msg.VIRTUINO_DV_TEXT);
		this.appendValueInput("DV")
			.setCheck("Number")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.VIRTUINO_DV_INPUT);
		this.setInputsInline(false);
		this.setOutput(true, "Boolean");
		this.setColour("#DD3C23");
		this.setTooltip(Blockly.Msg.VIRTUINO_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.VIRTUINO_HELP);
	}
};