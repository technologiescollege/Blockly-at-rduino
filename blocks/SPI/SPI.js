/**
 * Blocks pour SPI 
	* void SPI_init();
	* void SPI_send();
	* void SPI_receive();
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Blocks.SPI');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.SPI_init = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_TEXT);  
	this.appendValueInput("Speed")
        .setCheck("Number")
        .appendField(Blockly.Msg.SPI_INIT_SPEED);
	this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_MODE)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_INIT_MODE_FIELDDROPDOWN), 'Mode');
	this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_INIT_BITORDER)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_INIT_BITORDER_FIELDDROPDOWN), 'BitOrder');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.SPI.HUE);
    this.setTooltip(Blockly.Msg.SPI_INIT_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_INIT_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.SPI_send = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_SEND_TEXT);  
	this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_SEND_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_SEND_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "data");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.SPI.HUE);
    this.setTooltip(Blockly.Msg.SPI_SEND_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_SEND_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.SPI_send_param = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_SEND_TEXT);
	this.appendValueInput("data")
        .appendField(Blockly.Msg.SPI_SEND_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.SPI_SEND_FIELDDROPDOWN), "Format");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.SPI.HUE);
    this.setTooltip(Blockly.Msg.SPI_SEND_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_SEND_HELPURL);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.SPI_receive = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SPI_RECEIVE_TEXT);  
	this.setOutput(true, "Number");
	this.setColour(Blockly.Blocks.SPI.HUE);
    this.setTooltip(Blockly.Msg.SPI_RECEIVE_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.SPI_RECEIVE_HELPURL);
	this.setInputsInline(false);
  }
};
