'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['robobox_servo_setAngle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robobox.HUE)
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBOBOX_SERVO_SETANGLE)
        .appendField(new Blockly.FieldImage("blocks/robobox/asset/servo.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOBOX_PIN)
    this.appendValueInput("DEGREE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOBOX_ANGLE180);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setTooltip(Blockly.Msg.ROBOBOX_SERVO_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['robobox_servo_getAngle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robobox.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBOBOX_SERVO_GETANGLE)
        .appendField(new Blockly.FieldImage("blocks/robobox/asset/servo.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOBOX_PIN)
    this.setOutput(true, 'Number');
    // this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};
