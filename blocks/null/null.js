/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 
'use strict';

goog.provide('Blockly.Blocks.null');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.null_in = {
  init: function() {
    this.setColour(Blockly.Blocks.null.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
  }
};

Blockly.Blocks.null_out = {
  init: function() {
    this.setColour(Blockly.Blocks.null.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
  }
};

Blockly.Blocks.null_in_out = {
  init: function() {
    this.setColour(Blockly.Blocks.null.HUE);		
    this.appendValueInput("TEXT")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
  }
};

Blockly.Blocks.null_start = {
  init: function() {
    this.setColour(Blockly.Blocks.null.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
  }
};

Blockly.Blocks.null_end = {
  init: function() {
    this.setColour(Blockly.Blocks.null.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
  }
};

Blockly.Blocks.null_loop = {
  init: function () {
	this.setColour(Blockly.Blocks.null.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput(''), 'TEXT');
	this.appendStatementInput('LOOP');
	this.setInputsInline(false);
	this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
    }
};

Blockly.Blocks.null_loop_inside = {
  init: function () {
	this.setColour(Blockly.Blocks.null.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput(''), 'TEXT');
	this.appendStatementInput('LOOP');
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
    }
};

Blockly.Blocks.null_loop_inside_in = {
  init: function () {
	this.setColour(Blockly.Blocks.null.HUE);
    this.appendValueInput("TEXT")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
	this.appendStatementInput('LOOP');
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
    }
};

Blockly.Blocks.null_loop_do_inside = {
  init: function () {
	this.setColour(Blockly.Blocks.null.HUE);
	this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.appendStatementInput('DO')
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
    }
};

Blockly.Blocks.null_loop_do_inside_in = {
  init: function () {
	this.setColour(Blockly.Blocks.null.HUE);	
    this.appendValueInput("TEXT")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.appendStatementInput('DO')
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.NULL_TOOLTIP);
    }
};