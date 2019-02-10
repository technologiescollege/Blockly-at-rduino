/*	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Blocks.Adafruit_RGB_LCD_Shield');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['Adafruit_RGB_LCD_Shield_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TOOLTIP);
  }
};

Blockly.Blocks['Adafruit_RGB_LCD_Shield_clear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TOOLTIP);
  }
};

Blockly.Blocks['Adafruit_RGB_LCD_Shield_scrolling'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT_FIELDDROPDOWN), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TOOLTIP);
  }
};

Blockly.Blocks['Adafruit_RGB_LCD_Shield_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne")
        .appendField(new Blockly.FieldTextInput("0"), "Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne")
        .appendField(new Blockly.FieldTextInput("0"), "Row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_HELPURL);
  }
};


Blockly.Blocks['Adafruit_RGB_LCD_Shield_set_RGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TEXT);
    
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR_FIELDDROPDOWN), "COLOUR");	
	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_HELPURL);
  }
};


Blockly.Blocks['Adafruit_RGB_LCD_Shield_print_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_DATA);
    this.appendValueInput("DATA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_INPUTDATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['Adafruit_RGB_LCD_Shield_write_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
	this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_HELPURL);
	
	this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_DATA);
			
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_INPUTDATA)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_FORMAT_FIELDDROPDOWN), "FORMAT")
		.appendField(new Blockly.FieldTextInput(""), "DATA");
	
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.Adafruit_RGB_LCD_Shield_read_button = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TEXT);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.Adafruit_RGB_LCD_Shield.HUE);
 this.setTooltip(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_HELPURL);
  }
};



