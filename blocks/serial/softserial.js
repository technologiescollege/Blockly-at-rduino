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

goog.provide('Blockly.Blocks.softserial');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

Blockly.Blocks['soft_init'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogWrite',
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
	.appendField(Blockly.Msg.SSERIAL_Init)
        .appendField(Blockly.Msg.SSERIAL_TX)
	.appendField(new Blockly.FieldDropdown([['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10'],['11', '11'],['12', '12'],['13', '13']]), "PIN1");
//	.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN1");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SSERIAL_RX)
	    .appendField(new Blockly.FieldDropdown([['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10'],['11', '11'],['12', '12'],['13', '13']]), "PIN2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};

Blockly.Blocks['soft_read'] = {
	helpUrl: '',
  init: function() {
    this.setColour(50);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_Read);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(50);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_Print);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_write'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(50);
    this.appendValueInput("CONTENT", 'String')
        .appendField(Blockly.Msg.SSERIAL_Write);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['soft_available'] = {
	helpUrl: '',
  init: function() {
    this.setColour(50);
	this.appendDummyInput("")
	    .appendTitle(Blockly.Msg.SSERIAL_Avai);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  }
};


