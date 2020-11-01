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
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['variables_get'] = {
    /**
     * Block for variable getter.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    },
    contextMenuType_: 'variables_set',
    /**
     * Add menu option to create getter/setter block for this setter/getter.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        var option = {
            enabled: true
        };
        var name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    },
    /**
     * @return {!string} Retrieves the type (stored in varType) of this block.
     * @this Blockly.Block
     */
    getBlockType: function () {
        return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
    },
    /**
     * Gets the stored type of the variable indicated in the argument. As only one
     * variable is stored in this block, no need to check input
     * @this Blockly.
     * @param {!string} varName Name of this block variable to check type.
     * @return {!string} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        //return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
        return Blockly.Types.getChildBlockType(this)
    }
};

Blockly.Blocks['variables_set'] = {
    /**
     * Block for variable setter.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput("VALUE")
        .appendField(Blockly.Msg.VARIABLES_SET)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
        .appendField(Blockly.Msg._AT);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    /**
     * Searches through the nested blocks to find a variable type.
     * @this Blockly.Block
     * @param {!string} varName Name of this block variable to check type.
     * @return {string} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        return Blockly.Types.getChildBlockType(this);
    }
};

Blockly.Blocks['variables_set_type'] = {
    /**
     * Block for variable casting.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendValueInput('VARIABLE_SETTYPE_INPUT');
        this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_AS)
        .appendField(new Blockly.FieldDropdown(
                Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Sets a value to a specific type');
    },
    /**
     * Assigns a type to the block based on the selected type to cast.
     * @return {!string} Blockly type for this block configuration.
     * @this Blockly.Block
     */
    getBlockType: function () {
        var blocklyTypeKey = this.getFieldValue('VARIABLE_SETTYPE_TYPE');
        return Blockly.Types[blocklyTypeKey];
    }
};

Blockly.Blocks['variables_const'] = {
    init: function () {
        this.appendValueInput("VAL_CONST")
        .appendField(Blockly.Msg.VARIABLES_SET_CONST)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_SET_CONST_AT);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_CONST_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VARIABLES_SET_CONST_HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    /**
     * Searches through the nested blocks to find a variable type.
     * @this Blockly.Block
     * @param {!string} varName Name of this block variable to check type.
     * @return {string} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        return Blockly.Types.getChildBlockType(this);
    }
};

Blockly.Blocks['variables_set_init'] = {
    init: function () {
        this.appendValueInput("VALUE")
        .appendField(Blockly.Msg.VARIABLES_SET_INIT)
        .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_AS)
        .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE')
        .appendField(Blockly.Msg._AT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setHelpUrl(Blockly.Msg.VARIABLES_SET_INIT_HELPURL);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_INIT_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    /**
     * Searches through the nested blocks to find a variable type.
     * @this Blockly.Block
     * @param {!string} varName Name of this block variable to check type.
     * @return {string} String to indicate the type of this block.
     */
    getVarType: function (varName) {
        return Blockly.Types.getChildBlockType(this);
    }
};
