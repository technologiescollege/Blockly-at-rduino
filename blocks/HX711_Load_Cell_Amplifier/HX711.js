'use strict';

goog.provide('Blockly.Blocks.HX711');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['HX711_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.HX711_HELPURL);
    this.setColour(Blockly.Blocks.HX711.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HX711_INIT_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/HX711_Load_Cell_Amplifier/HX711.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.HX711_INIT_TOOLTIP);
  }
};

Blockly.Blocks['HX711_read'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.HX711_HELPURL);
    this.setColour(Blockly.Blocks.HX711.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.HX711_READ_TITLE)
		.setAlign(Blockly.ALIGN_LEFT);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/HX711_Load_Cell_Amplifier/HX711.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("CALIBRATION")
        .appendField(Blockly.Msg.HX711_READ_TEXT)
		.setCheck("Number");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.HX711_READ_TOOLTIP);
  }
};