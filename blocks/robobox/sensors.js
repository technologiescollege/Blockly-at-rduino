'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['robobox_sensors_ultrasound'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robobox.HUE);
    this.appendDummyInput()
    	.appendField(Blockly.Msg.ROBOBOX_SENSORS_ULTRASOUND)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robobox/asset/ultrasound.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TRIGER")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
    	.appendField(Blockly.Msg.ROBOBOX_TRIGGER_PIN);
    this.appendValueInput("DIST")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
    	.appendField(Blockly.Msg.ROBOBOX_LISTEN_PIN);
      this.setOutput(true, 'Number');
      this.setTooltip(Blockly.Msg.ROBOBOX_SENSORS_HELP);
  }
};
