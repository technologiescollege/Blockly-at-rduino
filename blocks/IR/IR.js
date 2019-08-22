/**
 * @license
 * Visual Blocks Editor
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

/**
 * Thanks to Fred Lin for building BlockyDuino!
 * @author greich@ac-versailles.fr Guillaume Reich
 */

'use strict';

goog.provide('Blockly.Blocks.infrarouge');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Msg.IR_HELPURL = 'http://greich.fr/v1/blog/post.php?id=13';

Blockly.Blocks.IR_init = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.IR_init_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/IR/ir-receiver.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IR_init_INPUT)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.IR_init_TOOLTIP);
  }
};

Blockly.Blocks.IR_test_LED = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.IR_test_LED_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.IR_test_LED_TOOLTIP);
  }
};

Blockly.Blocks.IR_test_monitor = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.IR_test_monitor_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.IR_test_monitor_TOOLTIP);
  }
};

Blockly.Blocks.IR_next_value = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
  this.setHelpUrl(Blockly.Msg.IR_HELPURL);
  this.appendDummyInput()
        .appendField(Blockly.Msg.IR_next_value_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.IR_next_value_TOOLTIP);
  }
};

Blockly.Blocks.IR_detection = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
    this.setHelpUrl(Blockly.Msg.IR_HELPURL);
  this.appendDummyInput()
    .appendField(Blockly.Msg.IR_detection_TEXT)
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.IR_detection_TOOLTIP);
  }
};

Blockly.Blocks.IR_reception_code = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
    this.setHelpUrl(Blockly.Msg.IR_HELPURL);
  this.appendDummyInput()
    .appendField(Blockly.Msg.IR_reception_code_TEXT)
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.IR_reception_code_TOOLTIP);
  }
};