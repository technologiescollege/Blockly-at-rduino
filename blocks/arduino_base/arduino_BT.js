"use strict";

goog.provide("Blockly.Blocks.arduino_BT");

goog.require("Blockly.Blocks");
goog.require('Blockly.Types');

Blockly.Blocks.arduino_BT_send = {
    init: function() {
        this.setColour(Blockly.Blocks.arduino_BT.HUE);
        this.appendValueInput("data_s")
			.setCheck("Number")
			.appendField(new Blockly.FieldImage("media/bluetooth.jpg", 25, 25,"B"))
			.appendField("envoyer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("envoie des données par bluetooth\nIl faut croiser Rx et Tx");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};

Blockly.Blocks.arduino_BT_verify_send = {
    init: function() {
        this.setColour(Blockly.Blocks.arduino_BT.HUE);
        this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/bluetooth.jpg", 30, 30, "B"))
			.appendField("si la donnée reçue");
		this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
		this.contextMenuType_ = 'variables_set';
        this.appendValueInput("CASE0")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("vaut");
        this.appendStatementInput("DO0")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("alors");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip("réception de données par bluetooth\nIl faut croiser Rx et Tx");
        // Assign 'this' to a variable for use in the tooltip closure below.
		var thisBlock = this;
		this.setTooltip(function() {
		  if (!thisBlock.casebreakCount_ && !thisBlock.defaultCount_) {
			return "réception de données par bluetooth\nIl faut croiser Rx et Tx";
		  } else if (!thisBlock.casebreakCount_ && thisBlock.defaultCount_) {
			return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2;
		  } else if (thisBlock.casebreakCount_ && !thisBlock.defaultCount_) {
			return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3;
		  } else if (thisBlock.casebreakCount_ && thisBlock.defaultCount_) {
			return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4;
		  }
		  return '';
		});
		this.casebreakCount_ = 0;
        this.defaultCount_ = 0;
    },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('SWVAR'))) {
      this.setFieldValue(newName, 'SWVAR');
    }
  },
  //do I need a custom context menu like from 'variables_get' ?
  /**
   * Create XML to represent the number of case-do and default inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    if (!this.casebreakCount_ && !this.defaultCount_) {
      return null;
    }
    var container = document.createElement('mutation');
    if (this.casebreakCount_) {
      container.setAttribute('casebreak', this.casebreakCount_);
    }
    if (this.defaultCount_) {
      container.setAttribute('default', 1);
    }
    return container;
  },
  /**
   * Parse XML to restore the else-if and default inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.casebreakCount_ = parseInt(xmlElement.getAttribute('casebreak'), 10);
    this.defaultCount_ = parseInt(xmlElement.getAttribute('default'), 10);
    for (var i = 1; i <= this.casebreakCount_; i++) {
      this.appendValueInput('CASE' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
      this.appendStatementInput('DO' + i)
          .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DO);
    }
    if (this.defaultCount_) {
      this.appendStatementInput('DEFAULT')
          .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('bluetooth_switch_var');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 1; i <= this.casebreakCount_; i++) {
      var casebreakBlock = workspace.newBlock('bluetooth_create_item');
      casebreakBlock.initSvg();
      connection.connect(casebreakBlock.previousConnection);
      connection = casebreakBlock.nextConnection;
    }
    if (this.defaultCount_) {
      var defaultBlock = workspace.newBlock('bluetooth_default');
      defaultBlock.initSvg();
      connection.connect(defaultBlock.previousConnection);
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    // Disconnect the default input blocks and remove the inputs.
    if (this.defaultCount_) {
      this.removeInput('DEFAULT');
    }
    this.defaultCount_ = 0;
    // Disconnect all the casebreak input blocks and remove the inputs.
    for (var i = this.casebreakCount_; i > 0; i--) {
      this.removeInput('CASE' + i);
      this.removeInput('DO' + i);
    }
    this.casebreakCount_ = 0;
    // Rebuild the block's optional inputs.
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'bluetooth_create_item':
          this.casebreakCount_++;
          var ifInput = this.appendValueInput('CASE' + this.casebreakCount_)
              .setCheck('Number')
              .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
          var doInput = this.appendStatementInput('DO' + this.casebreakCount_);
          doInput.appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DO);
          // Reconnect any child blocks.
          if (clauseBlock.valueConnection_) {
            ifInput.connection.connect(clauseBlock.valueConnection_);
          }
          if (clauseBlock.statementConnection_) {
            doInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        case 'bluetooth_default':
          this.defaultCount_++;
          var defaultInput = this.appendStatementInput('DEFAULT');
          defaultInput.appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
          // Reconnect any child blocks.
          if (clauseBlock.statementConnection_) {
            defaultInput.connection.connect(clauseBlock.statementConnection_);
          }
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'bluetooth_create_item':
          var inputIf = this.getInput('CASE' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'bluetooth_default':
          var inputDo = this.getInput('DEFAULT');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw 'Unknown block type.';
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  }
};

Blockly.Blocks['bluetooth_switch_var'] = {
  /**
   * Mutator block for if container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.arduino_BT.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.bluetooth_switch_var_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['bluetooth_create_item'] = {
  /**
   * Mutator bolck for case-break condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.arduino_BT.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK );
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['bluetooth_default'] = {
  /**
   * Mutator block for default condition.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.arduino_BT.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP);
    this.contextMenu = false;
  }
};