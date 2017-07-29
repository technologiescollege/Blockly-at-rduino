/**
 * Block for Blynk.cc Library https://www.blynk.cc/
 *
 * Shield Arduino Uno et Arduino UNO WIFI (firmaware 1.0.0 mini de chez Arduino.org)
 *
 * Emmanuel Leroy (tech.rostand@gmail.com) - 2017
 */
'use strict';

goog.provide('Blockly.Blocks.blynk_cc');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks.blynk_cc_uno_cnx_usb = {
  init: function() {
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
	this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize
		));
    this.appendDummyInput()
		.appendField(Blockly.Msg.BLYNK_usb_TEXT);
    this.appendValueInput("AUTH")
		.setAlign(Blockly.ALIGN_LEFT)	
		.appendField(Blockly.Msg.BLYNK_usb_INPUT)
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_AUTH);
	this.appendStatementInput("ACTION")
		.setCheck(null);
	this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip(Blockly.Msg.BLYNK_usb_TOOlTIP);
  }
};

Blockly.Blocks['blynk_cc_connect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
		.appendField(Blockly.Msg.BLYNK_CONNECT_TITLE);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.BLYNK_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_ethernet_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
		.appendField(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE)
    //  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.BLYNK_ETHERNET_VERSION_1,""],[Blockly.Msg.BLYNK_ETHERNET_VERSION_2,"2"]]), 'VERSION')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.BLYNK_ETHERNET_VERSION_1,""]], 'VERSION'));
    this.appendValueInput("AUTH")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_AUTH);
    this.appendValueInput("MAC_ADDRESS")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_MAC_ADDRESS);
	this.appendStatementInput("ACTION")
		.setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setTooltip(Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
		.appendField(Blockly.Msg.BLYNK_WRITE_TITLE);
    this.appendDummyInput()
		.appendField("V")
		.appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.appendStatementInput("ACTION")
		.setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_virtual_write'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
		.appendField(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE);
    this.appendDummyInput()
		.appendField("V")
		.appendField(new Blockly.FieldTextInput("0"),"PIN");
    this.appendValueInput("VALUE")
		.setCheck("Number","Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_VALUE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_email'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
		.appendField(Blockly.Msg.BLYNK_EMAIL_TITLE);
    this.appendValueInput("ADDRESS")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_EMAIL_ADDRESS);
    this.appendValueInput("TITLE")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_EMAIL_TITLE_2);
    this.appendValueInput("BODY")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_EMAIL_BODY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_notify'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
      .appendField(Blockly.Msg.BLYNK_NOTIFY_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BLYNK_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_EMAIL_TOOLTIP);
  }
};

Blockly.Blocks['blynk_cc_tweet'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.BLYNK_HELPURL);
    this.setColour(Blockly.Blocks.blynk_cc.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', 64, 64))
      .appendField(Blockly.Msg.BLYNK_TWEET_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.BLYNK_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_TWEET_TOOLTIP);
  }
};