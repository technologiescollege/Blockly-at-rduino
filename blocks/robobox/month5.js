'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['connecteMoteurs'] = {
    init: function() {
	this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
	this.appendDummyInput()
		.appendField('Connections des moteurs');
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    }
};

Blockly.Blocks['lectureDistance'] = {
    init: function() {
	this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT28)
            .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/ranger.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("TRIGER")
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT29);
	this.appendValueInput("DIST")
            .setCheck('Number')
            .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT30);
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.BQ_SONAR1_TOOLTIP);
    }
};
