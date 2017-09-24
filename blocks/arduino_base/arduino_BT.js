"use strict";

goog.provide("Blockly.Blocks.arduino_BT");

goog.require("Blockly.Blocks");

Blockly.Blocks.arduino_BT_send = {
    init: function() {
        this.setColour("#6981F9");
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
        this.setColour("#6981F9");
        this.appendDummyInput()
			.appendField(new Blockly.FieldImage("media/bluetooth.jpg", 30, 30, "B"))
			.appendField("si la donnée reçue");
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField("alors");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip("réception de données par bluetooth\nIl faut croiser Rx et Tx");
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0;
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("alors")
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField("sinon")
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = Blockly.Block.obtain(workspace, "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = Blockly.Block.obtain(workspace, "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField("alors");
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField("sinon");
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};