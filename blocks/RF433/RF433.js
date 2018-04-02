'use strict';

goog.provide('Blockly.Blocks.RF433');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks.rf433rxready = {
  init: function() {
    this.appendDummyInput()
        .appendField("Message Ready");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Input Pin");        
    this.setColour(120);
    this.setOutput(true, "Boolean")
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks.rf433rx = {
  init: function() {
    this.appendDummyInput()
        .appendField("Receive Char");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Input Pin");        
    this.setColour(120);
    this.setOutput(true, "String")
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks.rf433tx = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send Message");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Output Pin");        
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("Message");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};