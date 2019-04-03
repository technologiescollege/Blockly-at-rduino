/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
 'use strict';

goog.provide('Blockly.Blocks.capacitiveSensor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['capacitiveSensor_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.capacitiveSensor.HUE);
	this.setHelpUrl(Blockly.Msg.CAPACITIV_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.CAPACITIV_INIT_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/capacitiveSensor/capacitiveSensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/capacitiveSensor/capacitiveSensor_full.jpg', 256, 256));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CAPACITIV_TOOLTIP);
  }
};


Blockly.Blocks.capacitiveSensor_check = {
  init: function() {
    this.setColour(Blockly.Blocks.capacitiveSensor.HUE);
	this.setHelpUrl(Blockly.Msg.CAPACITIV_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.CAPACITIV_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/capacitiveSensor/capacitiveSensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
	this.appendValueInput("PIN_SEND")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CAPACITIV_INPUT1);
	this.appendValueInput("PIN_RECEIVE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CAPACITIV_INPUT2);
	this.appendDummyInput()
        .appendField(Blockly.Msg.CAPACITIV_CALIBRATION)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "Calibration");
    this.setOutput(true, 'Number');   
    this.setTooltip(Blockly.Msg.CAPACITIV_TOOLTIP);
	this.setInputsInline(false);
  }
};