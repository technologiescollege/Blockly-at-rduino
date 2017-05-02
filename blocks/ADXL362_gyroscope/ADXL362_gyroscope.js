'use strict';

goog.provide('Blockly.Blocks.ADXL362');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['ADXL362_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL362_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL362.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL362_INIT_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope_pinout.jpg', 256, 256));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADXL362_INIT_TOOLTIP);
  }
};

Blockly.Blocks['ADXL362_XValue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL362_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL362.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL362_XVALUE_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ADXL362_XVALUE_TOOLTIP);
  }
};

Blockly.Blocks['ADXL362_YValue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL362_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL362.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL362_YVALUE_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL362_YVALUE_TOOLTIP);
  }
};

Blockly.Blocks['ADXL362_ZValue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL362_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL362.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL362_ZVALUE_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL362_ZVALUE_TOOLTIP);
  }
};

Blockly.Blocks['ADXL362_TempValue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL362_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL362.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL362_TEMPVALUE_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ADXL362_gyroscope/ADXL362_gyroscope.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL362_TEMPVALUE_TOOLTIP);
  }
};