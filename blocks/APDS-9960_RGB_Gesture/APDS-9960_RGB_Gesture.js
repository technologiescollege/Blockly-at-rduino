'use strict';

goog.provide('Blockly.Blocks.APDS9960');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['APDS9960_ColorSensor_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_INIT_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.APDS9960_INIT_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_test'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_TEST_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.APDS9960_TEST_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_ambient'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_AMBIENT_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_AMBIENT_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_red'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_RED_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_green'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_GREEN_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_blue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_BLUE_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};