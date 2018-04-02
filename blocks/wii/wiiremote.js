// define blocks
'use strict';

goog.provide('Blockly.Blocks.wiiremote');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks.wiiremote_init = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_LedRGB_init")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin);
    this.appendValueInput("Number_of_Pixels")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};

Blockly.Blocks.wiiremote_calibrate = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_LedRGB_init")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin);
    this.appendValueInput("Number_of_Pixels")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};

Blockly.Blockswiiremote_accel = {

};

Blockly.Blockswiiremote_button = {

};