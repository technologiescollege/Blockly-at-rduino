/**
 * Blocks pour I2C 
	* void i2c_init();
	* void i2c_start(char add | bool RW);
	* void i2c_restart(char add | bool RW);
	* void i2c_stop();
	* void i2c_write(char Byte);
	* char i2c_read(bool Last)
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Blocks.I2C');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.I2C_init = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_INIT_TEXT);  
    this.appendValueInput("Pin_SCL")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_INIT_PIN_SCL); 
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_INIT_PORT_SCL)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SCL), 'Port_SCL');
	this.appendValueInput("Pin_SDA")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_INIT_PIN_SDA); 
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_INIT_PORT_SDA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SDA), 'Port_SDA');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_INIT_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_INIT_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_start = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_TEXT); 
    this.appendValueInput("Address")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_START_ADRESS);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_START_RW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_START_FIELDDROPDOWN), 'RW');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_START_HELPURL);
  }
};

Blockly.Blocks.I2C_restart = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_RESTART_TEXT); 
    this.appendValueInput("Address")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_RESTART_ADRESS);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_RESTART_RW)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_RESTART_FIELDDROPDOWN), 'RW');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_RESTART_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_RESTART_HELPURL);
  }
};

Blockly.Blocks.I2C_stop = { 
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_STOP_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_STOP_HELPURL);
  }
};

Blockly.Blocks.I2C_write = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_TEXT);  
    this.appendValueInput("Data")
        .setCheck("Number")
        .appendField(Blockly.Msg.I2C_WRITE_DATA);            
	//this.setOutput(true, "Boolean");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_WRITE_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_WRITE_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_read = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_READ_TEXT);  
    this.appendDummyInput("")
        .appendField(Blockly.Msg.I2C_READ_LAST)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_READ_FIELDDROPDOWN), 'Last');   
	this.setOutput(true, "Number");
	this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_READ_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_READ_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_scan = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_SCAN_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_SCAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_SCAN_HELPURL);
  }
};