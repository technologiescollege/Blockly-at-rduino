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

goog.provide('Blockly.Blocks.micromachine');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Msg.IR_HELPURL = 'http://greich.fr/v1/blog/post.php?id=13';

Blockly.Blocks['mm_init_wav'] = {
  init: function() {
    this.appendValueInput("sound_name1")
        .setCheck("String")
        .appendField(Blockly.Msg.mm_INIT_WAV);
    this.appendValueInput("sound_name2")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.mm_INIT_WAV_SOUND2);
    this.appendValueInput("sound_name3")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.mm_INIT_WAV_SOUND3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_INIT_WAV_AUDPIN)
        .appendField(new Blockly.FieldNumber(0, 0, 99), "PIN")
        .appendField(Blockly.Msg.mm_INIT_WAV_ENBLPIN)
        .appendField(new Blockly.FieldNumber(0, 0, 99), "ENBL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_play_wav'] = {
  init: function() {
    this.appendValueInput("sound_name")
        .setCheck("String")
        .appendField(Blockly.Msg.mm_PLAY_WAV);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.mm_ACTION_INIT);
      this.appendValueInput("offset")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Offset");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.servo.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['mm_action_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_ACTION_STOP);
    this.appendDummyInput()
        .appendField("                    ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_fwrd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_ACTION_FWRD);
    this.appendDummyInput()
        .appendField("                    ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_bwrd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_ACTION_BWRD);
    this.appendDummyInput()
        .appendField("                    ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_ltrn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_ACTION_LTRN);
    this.appendDummyInput()
        .appendField("                    ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_rtrn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.mm_ACTION_RTRN);
    this.appendDummyInput()
        .appendField("                    ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mm_action_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.mm_ACTION_LEFT);
      this.appendDummyInput()
          .appendField("                    ");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.servo.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['mm_action_rght'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.mm_ACTION_RGHT);
      this.appendDummyInput()
          .appendField("                    ");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.servo.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['mm_servo_drive'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.mm_SERVO_DRIVE);
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.mm_SERVO_CON)
          .appendField(new Blockly.FieldNumber(0, 0, 12, 1), "con");
      this.appendValueInput("angle")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.mm_SERVO_ANGLE);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.servo.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['mm_action_free'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.mm_ACTION_FREE);
      this.appendValueInput("array")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.Msg.mm_ACTION_ARRAY);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Blocks.servo.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['mm_array_create_with'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl(Blockly.Msg.ARRAY_CREATE_WITH_HELPURL);
      this.setColour(Blockly.Blocks.array.HUE);
      //this.appendDummyInput()
      //    .appendField(Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH);
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
            input.appendField(Blockly.Msg.mm_ARRAY_CREATE_WITH);
          }
        }
      }
    }
  };
  
Blockly.Blocks['mm_array_create_with_item'] = {
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
  
Blockly.Blocks['mm_array_create_with_container'] = {
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
  
Blockly.Blocks['mm_array_getIndex'] = {
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
  
Blockly.Blocks['mm_array_modify'] = {
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
  
Blockly.Blocks["mm_array_declare"]={
      init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARRAY_CREATE)
        this.appendValueInput("contenu")
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
            .setAlign(Blockly.ALIGN_RIGHT)
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                  [Blockly.Msg.ARRAY_LIST, "d1"],
                  [Blockly.Msg.ARRAY_ARRAY, "d2"]
            ]), "dim");
        /*this.appendDummyInput()
              .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
              .appendField(Blockly.Msg.VARIABLES_AS)
              .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type");*/
        
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