'use strict';

goog.provide('Blockly.Blocks.process');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['process'] = {
    init: function() {
        var name = Blockly.Process.findLegalName('process name', this) ;
        var nameField = new Blockly.FieldTextInput(name, Blockly.Process.rename);
        nameField.setSpellcheck(false);
        
        this.appendDummyInput()
            .appendField("process")
            .appendField(nameField, 'NAME') ;

        this.appendStatementInput("body") ;
        this.setInputsInline(false);
        this.setColour(330);
        this.setTooltip('A process that repeats forever');
    },

    getProcessDef: function() {
        return (this.getFieldValue('NAME')) ;
    },

    /**
     * Add custom menu options to this block's context menu.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function(options) {
        // Add option to create caller.
        var option = {enabled: true};
        var name = this.getFieldValue('NAME');
        option.text = 'Create ' + name ;
        
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    },

    callType_: 'pgoto'
};

Blockly.Blocks['statedef'] = {
    init: function() {
	this.appendStatementInput("body")
            .appendField("State")
            .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'STATENUM')
            .appendField(" :");
	this.setInputsInline(false);
	this.setPreviousStatement(true, "statedef");
	this.setNextStatement(true, "statedef");
	this.setColour(330);
	this.setTooltip('Statedef');
    }
};

Blockly.Blocks['goto'] = {
    init: function() {
	this.appendDummyInput()
            .appendField("to state")
	    .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'dest')
	this.setInputsInline(true);
	this.setPreviousStatement(true, "statedef");
	this.setColour(330);
	this.setTooltip('GOTO STATE');
    }
};

Blockly.Blocks['pgoto'] = {
    init: function() {
	this.appendDummyInput()
            .appendField('', 'NAME')
            .appendField("to state")
	    .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'dest')
	this.setInputsInline(true);
	this.setPreviousStatement(true, "statedef");
        this.setNextStatement(true, "statedef");
	this.setColour(330);
	this.setTooltip('Send process to another state');
    },
    domToMutation: function(xmlElement) {
        var name = xmlElement.getAttribute('name');
        this.setFieldValue(name, 'NAME');
    },
      /**
   * Create XML to represent the (non-editable) name and arguments.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('name', this.getProcedureCall());
    return container;
  },
    /**
     * Returns the name of the procedure this block calls.
     * @return {string} Procedure name.
     * @this Blockly.Block
     */
    getProcedureCall: function() {
        return (this.getFieldValue('NAME'));
    },
};

Blockly.Blocks['timestatedef'] = {
    init: function() {
        this.appendStatementInput("body1")
            .appendField("State")
      	    .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'STATENUM')
            .appendField(": do") ;
        this.appendDummyInput()
            .appendField("then wait")
	    .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'wait')
            .appendField("ms") ;
        this.appendStatementInput("body2")
            .appendField("then do") ;
        this.appendDummyInput()
            .appendField("then go to state")
	    .appendField(new Blockly.FieldTextInput('0',Blockly.FieldTextInput.nonnegativeIntegerValidator), 'dest') ;
	this.setInputsInline(true);
	this.setPreviousStatement(true, "statedef");
	this.setNextStatement(true, "statedef");
	this.setColour(330);
	this.setTooltip('');
	this.setHelpUrl('http://www.example.com/');
        this.setTooltip('Defines a timed transition');
    }
};
