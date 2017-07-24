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
	this.setHelpUrl(Blockly.Msg.BLYNK_CC_usb_HELPURL);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/blynk_cc/blynk_logo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
		.appendField(Blockly.Msg.BLYNK_CC_usb_TEXT);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.BLYNK_CC_usb_INPUT);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldTextInput('azertyuiopqsdfghjklmwxcvbnnbvcxw'), 'TOKEN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BLYNK_CC_usb_TOOlTIP);
  }
};