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
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.array');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['array_create_with'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.ARRAY_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.array.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['array_create_with_item']));
    this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
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
    var containerBlock =
        Blockly.Block.obtain(workspace, 'array_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'array_create_with_item');
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
    var i = 0;
    while (itemBlock) {
      connections[i] = itemBlock.valueConnection_;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      i++;
    }
    this.itemCount_ = i;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
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
    // Delete everything.
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
    // Rebuild block.
    if (this.itemCount_ == 0) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE);
    } else {
      for (var i = 0; i < this.itemCount_; i++) {
        var input = this.appendValueInput('ADD' + i);
        if (i == 0) {
          input.appendField(Blockly.Msg.ARRAY_CREATE_WITH);
        }
      }
    }
  }
};

Blockly.Blocks['array_create_with_item'] = {
  /**
   * Mutator block for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.array.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['array_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.array.HUE);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['array_getIndex'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ARRAY_GETINDEX);
    this.setColour(Blockly.Blocks.array.HUE);
    this.appendValueInput("AT")
		.setCheck("Number")
		.appendField(Blockly.Msg.ARRAY_GETINDEX_AT);
    this.appendValueInput("VAR")
		.setCheck('Array')
		.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP);
  }
};

Blockly.Blocks['array_modify'] = {
  init: function() {
    this.setColour(Blockly.Blocks.array.HUE);
	this.appendValueInput("indice")
        .setCheck("Number")
		.appendField(Blockly.Msg.ARRAY_MODIFY_INDICE);
    this.appendValueInput("name")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARRAY_MODIFY_NAME);
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARRAY_MODIFY_VALUE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARRAY_MODIFY_TOOLTIP);
	this.setHelpUrl('http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.Tableaux');
  }
};

Blockly.Blocks["array_declare"]={
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARRAY_CREATE)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARRAY_LIST, "d1"],
                [Blockly.Msg.ARRAY_ARRAY, "d2"]
            ]), "dim")
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
            .appendField(Blockly.Msg.VARIABLES_AS)
            .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type");
        this.appendValueInput("contenu")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                [Blockly.Msg.ARRAY_TAILLE, "c1"],
                [Blockly.Msg.ARRAY_CONTIENT, "c2"]
            ]), "choix");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.array.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        /*this.contextMenuMsg_ = "créer 'affecter à l élément de rang..'";
    },
    contextMenuType_: "array_modify",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")*/
    }
};

//from JPFontaine

Blockly.Blocks["creer_tableau"] = {
    init: function() {
		var prog = window.localStorage.prog;
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE + Blockly.Msg.ARRAY_ARRAY).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR').appendField(Blockly.Msg.VARIABLES_AS).appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type");
		} else {
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE + Blockly.Msg.ARRAY_ARRAY).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
		}
		this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("D0")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARRAY_taille, "c1"],[Blockly.Msg.ARRAY_contenu, "c2"]]), "choix");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.array.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["fixer_tableau"] = {
    init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_fixe)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
			.appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("value").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.array.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL)
        this.contextMenuMsg_ = Blockly.Msg.tab_create
    },
    contextMenuType_: "array_getIndex",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};

Blockly.Blocks["tableau_getIndex"] = {
    init: function() {
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
			.appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setOutput(true);
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.array.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL)
		this.contextMenuMsg_ = Blockly.Msg.tab_create_fix
    },
    contextMenuType_: "fixer_tableau",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};