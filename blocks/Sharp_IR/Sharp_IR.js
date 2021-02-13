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

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Blocks.Sharp_IR');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks.Sharp_IR_attach = {
  init: function() {
    this.setColour(Blockly.Blocks.Sharp_IR.HUE);
	this.setHelpUrl(Blockly.Msg.Sharp_IR_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.Sharp_IR_ATTACH1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Sharp_IR/Sharp_IR.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Sharp_IR_MODEL)
        .appendField(new Blockly.FieldDropdown([["GP2Y0A41SK0F"], ["GP2Y0A21YK0F"], ["GP2Y0A02YK0F"]]), "SHARP_IR_MODEL");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Sharp_IR_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('Sharp_IR',
                                      Blockly.Msg.SHARP_IR_DEFAULT_NAME,
                                      false, false, false),
            'SHARP_IR_NAME');
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Sharp_IR_INPUT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Sharp_IR_TOOLTIP1);
  }
};

Blockly.Blocks.Sharp_IR_read = {
  init: function() {
    this.setColour(Blockly.Blocks.Sharp_IR.HUE);
	this.setHelpUrl(Blockly.Msg.Sharp_IR_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.Sharp_IR_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Sharp_IR/Sharp_IR.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Sharp_IR',
                                      Blockly.Msg.SHARP_IR_DEFAULT_NAME,
                                      false, false, false),
            'SHARP_IR_NAME');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Sharp_IR_TOOLTIP2);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SHARP_IR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Sharp_IR', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SHARP_IR_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};