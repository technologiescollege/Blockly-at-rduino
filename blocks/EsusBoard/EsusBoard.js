'use strict';

goog.provide('Blockly.Blocks.EsusBoard');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['EsusBoard_init'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.ESUS_EsusBoard_init)
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['EsusBoard_motor1'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.ESUS_MOTOR1_SPEED);
    this.setInputsInline(true);
	this.appendValueInput("NEW_LINE", 'Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESUS_MOTOR1_DIRECTION);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['EsusBoard_motor2'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.ESUS_MOTOR2_SPEED);
    this.setInputsInline(true);
	this.appendValueInput("NEW_LINE", 'Boolean') 
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ESUS_MOTOR2_DIRECTION);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['EsusBoard_analog'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['EsusBoard_WifiConfig'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
    this.appendValueInput("Text_ssid")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_SSID);
    this.appendValueInput("Text_password")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_PASSWORD);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ESUS_WIFI_CONFIG);
  }
};

Blockly.Blocks['EsusBoard_WifiConfigIP'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
    this.appendValueInput("Text_ip1")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_IP);
    this.appendValueInput("Text_ip2")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip3")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip4")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_WifiConfigAP'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
    this.appendValueInput("Text_ssid")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_AP);
    this.appendValueInput("Text_password")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WIFI_PASSWORD);
    this.appendValueInput("Text_ip1AP")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_AP_IP);
    this.appendValueInput("Text_ip2AP")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip3AP")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
	this.appendValueInput("Text_ip4AP")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ESUS_WIFI_CONFIG);
  }
};

Blockly.Blocks['EsusBoard_ReadStream'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.ESUS_WIFI_READ_STREAM);
    this.setOutput(true, 'String');
	this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_dataWifiAvailable'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.appendDummyInput("")
	    .appendField(Blockly.Msg.ESUS_WIFI_DATA_AVAILABLE);
	this.setOutput(true, 'Boolean');
	this.setTooltip('');
  }
};

Blockly.Blocks['EsusBoard_WifiContain'] = {
  init: function() {
	this.setHelpUrl('http://www.macerobotics.com');
    this.setColour("#2475FA");
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ESUS_WIFI_CONTAIN);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR')
        .appendField(Blockly.Msg.ESUS_WIFI_CONTAIN2);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',thisBlock.getFieldValue('VAR'));
    });
    this.setOutput(true, 'String');
  }
};

Blockly.Blocks['EsusBoard_SendStream'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendValueInput("Text_send")
		.setCheck('String')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_SEND_STREAM);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['EsusBoard_SendFloatStream'] = {
  init: function() {
    this.setColour("#2475FA");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendValueInput("sendFloat")
		.setCheck('Number')
	    .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ESUS_WIFI_SEND_FLOAT_STREAM);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setNextStatement(true, null);
  }
};