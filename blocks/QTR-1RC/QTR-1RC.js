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

Blockly.Blocks.QTR_1RC_attach = {
  /**
   * Block for creating a string made up of any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.QTR_1RC_HELPURL);
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
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
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['QTR_1RC_number_item']));
    this.setTooltip(Blockly.Msg.QTR_1RC_SENSORCALIBRATION_TOOLTIP);
  },
  /**
   * Create XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('QTR_1RC_number_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('QTR_1RC_number_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(this.newQuote_(true))
          .appendField(this.newQuote_(false));
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
		input.setAlign(Blockly.ALIGN_RIGHT);
        input.appendField(Blockly.Msg.QTR_1RC_INPUT);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['QTR_1RC_number_item'] = {
  /**
   * Mutator block for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['QTR_1RC_number_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks.QTR_1RC_calibration = {
  init: function() {
    this.setColour(Blockly.Blocks.QTR_1RC.HUE);
	this.setHelpUrl(Blockly.Msg.QTR_1RC_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.QTR_1RC_SENSORCALIBRATION);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.QTR_1RC_READ_INPUT2)
        .appendField(
            new Blockly.FieldInstance('QTR_1RC',
                                      Blockly.Msg.QTR_1RC_DEFAULT_NAME,
                                      false, false, false),
            'QTR_1RC_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.QTR_1RC_ATTACH_TOOLTIP);
 }
};

Blockly.Blocks.QTR_1RC_readLine = {
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