'use strict';

goog.provide('Blockly.Blocks.drone');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.drone_ESC_pwm = {
  init: function() {
    this.setColour(Blockly.Blocks.drone.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/drone/drone_ESC.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.DRONE_INTRO);
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DRONE_PIN);
	this.appendValueInput("PWM")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DRONE_PWM);
	this.setHelpUrl(Blockly.Msg.DRONE_HELPURL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRONE_TOOLTIP);
  }
};