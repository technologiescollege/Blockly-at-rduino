/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.arduino_serial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */

 Blockly.Blocks['serial_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_Init)
     	.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serial), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Serial communication init speed.');
  }
};
 
Blockly.Blocks['serial_printfor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Println');
	this.setInputsInline(true);
    this.appendValueInput("CONTENT")
        .setCheck('Number')
        .appendField(Blockly.Msg.Serial_Print_Format)
     	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Serial_Print_ForDecimal, "DEC"],[Blockly.Msg.Serial_Print_ForHexa, "HEX"],[Blockly.Msg.Serial_Print_ForBin, "BIN"],[Blockly.Msg.Serial_Print_ForOct, "OCT"]]), "TYPE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port with a specific format.');
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/read');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_read);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Reads incoming serial data. ');
  }
};

Blockly.Blocks['serial_readStringUntil'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_CONTENT);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_TOOLTIP);
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/available');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_avai);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('Get the number of bytes (characters) available for reading from the serial port. This is data that s already arrived and stored in the serial receive buffer (which holds 64 bytes). ');
  }
};

Blockly.Blocks['serial_print'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_print_tab'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_println'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_print_var'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("Text")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT);		
	this.appendValueInput("N")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER);			
	this.appendValueInput("NEW_LINE")
		.setCheck('Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['serial_write'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('');
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.Serial_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes to send the characters representing the digits of a number use the print() function instead. ');
  }
};


Blockly.Blocks['serial_write_out'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
    this.appendValueInput("valeur")
		.setCheck('String')		
        .appendField(Blockly.Msg.Serial_write_out);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('Writes binary data to the serial port. This data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.');
  }
};

Blockly.Blocks['serial_flush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Flush');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.Serial_flush);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  }
};

Blockly.Blocks['serial_line'] = {
    init: function() {
		this.setColour(Blockly.Blocks.arduino_serial.HUE);
        this.setHelpUrl('http://arduino.cc/en/Serial/');
        this.appendDummyInput("")
			.appendField(Blockly.Msg.Serial_line);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.Serial_line_tooltip)
    }
};

Blockly.Blocks['serial_print_multi'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_serial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("N")
		.setCheck(['Number','String'])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NUMBER);			
	this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NEWLINE)   
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_FIELDDROPDOWN), 'newline');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};