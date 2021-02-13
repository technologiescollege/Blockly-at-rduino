'use strict';

goog.provide('Blockly.Blocks.grove_VL53L0X');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['grove_VL53L0X_test'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_distance_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_distance_TOOLTIP);
  }
};

Blockly.Blocks['grove_VL53L0X_start_measure'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_strength_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_strength_TOOLTIP);
  }
};

Blockly.Blocks['grove_VL53L0X_stop_measure'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL);
    this.setColour(Blockly.Blocks.grove_TF_Mini_LiDAR.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TOOLTIP);
  }
};