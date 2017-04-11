'use strict';

goog.provide('Blockly.Blocks.ADXL335');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['ADXL335_ColorSensor_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_INIT_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADXL335_INIT_TOOLTIP);
  }
};

Blockly.Blocks['ADXL335_ColorSensor_test'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_TEST_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ADXL335_TEST_TOOLTIP);
  }
};

Blockly.Blocks['ADXL335_ColorSensor_ambient'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_AMBIENT_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL335_AMBIENT_TOOLTIP);
  }
};

Blockly.Blocks['ADXL335_ColorSensor_red'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_RED_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL335_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['ADXL335_ColorSensor_green'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_GREEN_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL335_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['ADXL335_ColorSensor_blue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ADXL335_MISC_HELPURL);
    this.setColour(Blockly.Blocks.ADXL335.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ADXL335_BLUE_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ADXL335_COLORSENSOR_TOOLTIP);
  }
};