'use strict';

goog.provide('Blockly.Blocks.grove_TF_Mini_LiDAR');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['grove_TF_Mini_LiDAR_distance'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_distance_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_TF_Mini_LiDAR/grove_TF_Mini_LiDAR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_distance_TOOLTIP);
  }
};

Blockly.Blocks['grove_TF_Mini_LiDAR_strength'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_strength_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_TF_Mini_LiDAR/grove_TF_Mini_LiDAR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_strength_TOOLTIP);
  }
};

Blockly.Blocks['grove_TF_Mini_LiDAR_chip_temp'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_TF_Mini_LiDAR/grove_TF_Mini_LiDAR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TOOLTIP);
  }
};