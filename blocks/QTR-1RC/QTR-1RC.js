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

goog.provide('Blockly.Blocks.QTR_1RC');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.QTR_1RC_calibration = {
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
	this.setHelpUrl(Blockly.Msg.QTR_1RC_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.QTR_1RC_SENSORCALIBRATION);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.QTR_1RC_SENSORCALIBRATION_TOOLTIP);
 }
};

Blockly.Blocks.QTR_1RC_attach = {
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
	this.setHelpUrl(Blockly.Msg.QTR_1RC_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.QTR_1RC_ATTACH1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/QTR-1RC/QTR-1RC.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.QTR_1RC_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('QTR_1RC',
                                      Blockly.Msg.QTR_1RC_DEFAULT_NAME,
                                      false, false, false),
            'QTR_1RC_NAME');
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.QTR_1RC_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.QTR_1RC_ATTACH_TOOLTIP);
 }
};

Blockly.Blocks.QTR_1RC_read = {
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
	this.setHelpUrl(Blockly.Msg.QTR_1RC_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.QTR_1RC_READ_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/QTR-1RC/QTR-1RC.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.QTR_1RC_READ_INPUT2)
        .appendField(
            new Blockly.FieldInstance('QTR_1RC',
                                      Blockly.Msg.QTR_1RC_DEFAULT_NAME,
                                      false, false, false),
            'QTR_1RC_NAME');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.QTR_1RC_READ_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('QTR_1RC_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'QTR_1RC', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.QTR_1RC_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};