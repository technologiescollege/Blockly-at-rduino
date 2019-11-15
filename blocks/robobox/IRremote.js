'use strict';

goog.provide('Blockly.Blocks.robobox');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks['robobox_IRremote_decode'] = {
    init: function() {
	this.setColour(Blockly.Blocks.robobox.HUE);
	this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_DECODE);
      this.appendValueInput("PIN")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_PIN);
      this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks["robobox_IRremote_signalLen"] = {
    init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALLEN);
      this.appendValueInput("PIN")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_PIN);
      this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['robobox_IRremote_signalArray'] = {
  init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALARRAY);
      this.appendValueInput("PIN")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_PIN);
      this.setOutput(true, 'Array');
  }
};

Blockly.Blocks['robobox_IRremote_signalCode'] = {
  init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALCODE);
      this.appendValueInput("PIN")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_PIN);
      this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['robobox_IRremote_resume'] = {
  init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_RESUME);
      this.appendValueInput("PIN")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_PIN);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};

Blockly.Blocks['robobox_IRremote_send'] = {
  init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_SEND);
      this.appendDummyInput()
          .appendField('Signal:')
          .appendField(new Blockly.FieldDropdown([
	      ['On/Off', 'signalOn']])
	      , 'SIGNAL');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};

Blockly.Blocks['robobox_IRremote_sendArray'] = {
  init: function() {
      this.setColour(Blockly.Blocks.robobox.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOBOX_IRREMOTE_SENDARRAY);
      this.appendValueInput("ARRAY")
          .setCheck('Array')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_ARRAY);
      this.appendValueInput("SIZE")
          .setCheck('Number')
          .setAlign(Blockly.ALIGN_RIGHT)
    	  .appendField(Blockly.Msg.ROBOBOX_LEN);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};
