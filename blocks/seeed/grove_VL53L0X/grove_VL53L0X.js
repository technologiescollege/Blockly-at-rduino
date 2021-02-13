'use strict';

goog.provide('Blockly.Blocks.grove_VL53L0X');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['grove_VL53L0X_test'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove_VL53L0X.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_VL53L0X_test_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.grove_VL53L0X_test_TOOLTIP);
	this.setHelpUrl(Blockly.Msg.grove_VL53L0X_MISC_HELPURL);
  }
};

Blockly.Blocks['grove_VL53L0X_start_and_report'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove_VL53L0X.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.grove_VL53L0X_start_and_report_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.grove_VL53L0X_start_and_report_TOOLTIP);
	this.setHelpUrl(Blockly.Msg.grove_VL53L0X_MISC_HELPURL);
  }
};

// Blockly.Blocks['grove_VL53L0X_stop_measure'] = {
  // init: function() {
    // this.setColour(Blockly.Blocks.grove_VL53L0X.HUE);
    // this.appendDummyInput("")
        // .appendField(Blockly.Msg.grove_VL53L0X_stop_measure_TITLE);
    // this.appendDummyInput()
        // .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_VL53L0X/grove_VL53L0X.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    // this.setInputsInline(true);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setTooltip(Blockly.Msg.grove_VL53L0X_stop_measure_TOOLTIP);
	// this.setHelpUrl(Blockly.Msg.grove_VL53L0X_MISC_HELPURL);
  // }
// };