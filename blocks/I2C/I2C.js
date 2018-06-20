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



///////////////////////////////////////////////////

Blockly.Blocks.I2C_init_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_INIT_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_INIT_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_INIT_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_stop_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_STOP_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_STOP_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_STOP_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_restart_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_RESTART_HW_TITRE);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_RESTART_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_RESTART_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_write_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_HW_TEXT);  
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_WRITE_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_WRITE_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "data1");
   	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_WRITE_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_WRITE_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_start_HW = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_HW_TEXT);  
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_START_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_START_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "data1");
   	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setColour(Blockly.Blocks.I2C.HUE);
    this.setTooltip(Blockly.Msg.I2C_START_HW_TOOLTIP); 
    this.setHelpUrl(Blockly.Msg.I2C_START_HW_HELPURL);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.I2C_request_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_TEXT);
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_DATA)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.I2C_REQUEST_HW_FIELDDROPDOWN), "Format")
        .appendField(new Blockly.FieldTextInput("00"), "address");
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_REQUEST_HW_NB_BYTES)
        .appendField(new Blockly.FieldNumber(1), "nb_bytes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
 this.setTooltip(Blockly.Msg.I2C_REQUEST_HW_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.I2C_REQUEST_HW_HELPURL);
  }
};
    
    
Blockly.Blocks.I2C_available_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_AVAILABLE_HW_TITRE);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
 this.setTooltip(Blockly.Msg.I2C_AVAILABLE_HW_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.I2C_AVAILABLE_HW_HELPURL);
  }
};


Blockly.Blocks.I2C_data_HW = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_DATA_HW_TITRE);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.I2C.HUE);
 this.setTooltip(Blockly.Msg.I2C_DATA_HW_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.I2C_DATA_HW_HELPURL);
  }
};











