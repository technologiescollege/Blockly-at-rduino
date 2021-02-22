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
 
'use strict';

goog.provide('Blockly.Blocks.I2C_to_GPIO_Module');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.I2C_to_GPIO_Module_scan = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_SCAN_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.I2C_to_GPIO_Module.HUE);
    this.setTooltip(Blockly.Msg.I2C_to_GPIO_Module_SCAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.I2C_to_GPIO_Module_SCAN_HELPURL);
  }
};

Blockly.Blocks.I2C_to_GPIO_Module_attach = {
  init: function() {
    this.setColour(Blockly.Blocks.I2C_to_GPIO_Module.HUE);
	this.setHelpUrl(Blockly.Msg.I2C_to_GPIO_Module_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_ATTACH1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/I2C_to_GPIO_Module/I2C_to_GPIO_Module.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('I2C',
                                      Blockly.Msg.I2C_DEFAULT_NAME,
                                      false, false, false),
            'I2C_NAME');
	this.appendValueInput("ADDRESS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_INPUT1);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.I2C_to_GPIO_Module_attach_TOOLTIP);
  }
};

Blockly.Blocks.I2C_to_GPIO_Module_read = {
  init: function() {
    this.setColour(Blockly.Blocks.I2C_to_GPIO_Module.HUE);
	this.setHelpUrl(Blockly.Msg.I2C_to_GPIO_Module_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_INPUT2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/I2C_to_GPIO_Module/I2C_to_GPIO_Module.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_ATTACH3)
        .appendField(
            new Blockly.FieldInstance('I2C',
                                      Blockly.Msg.I2C_DEFAULT_NAME,
                                      false, false, false),
            'I2C_NAME');
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_INPUT3);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.I2C_to_GPIO_Module_read_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('I2C_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'I2C', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.I2C_to_GPIO_Module_write = {
  init: function() {
    this.setColour(Blockly.Blocks.I2C_to_GPIO_Module.HUE);
	this.setHelpUrl(Blockly.Msg.I2C_to_GPIO_Module_HELPURL);
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_OUTPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/I2C_to_GPIO_Module/I2C_to_GPIO_Module.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_OUTPUT2)
        .appendField(
            new Blockly.FieldInstance('I2C',
                                      Blockly.Msg.I2C_DEFAULT_NAME,
                                      false, false, false),
            'I2C_NAME');
    this.appendValueInput("STATE")
        .setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.I2C_to_GPIO_Module_OUTPUT3);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.I2C_to_GPIO_Module_write_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('I2C_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'I2C', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};