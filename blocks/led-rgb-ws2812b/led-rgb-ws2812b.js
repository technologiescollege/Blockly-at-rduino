// define blocks
'use strict';

goog.provide('Blockly.Blocks.ledRGB_WS2812B');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['lp2i_ledRGB_WS2812B_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'NEOPIXEL_NAME');
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

Blockly.Blocks['lp2i_ledRGB_WS2812B_setPixelColor'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('WS2812',
										  Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'SOFTSERIAL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    /*this.appendValueInput("Pin_LedRGB")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin);*/
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red);
    this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green);
    this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue);
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  },
  onchange: function() {
    if (!this.workspace) { return; }  // Block has been deleted.

    // Get the Serial instance from this block
    var thisInstanceName = this.getFieldValue('NEOPIXEL_NAME');

    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
        }
      }
    }
  }
};

Blockly.Blocks['lp2i_ledRGB_WS2812B_setBrightness'] = {
  init: function() {
    this.appendDummyInput()
        //.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('WS2812',
										  Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME,
										  true, true, false),
				'SOFTSERIAL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    /*this.appendValueInput("Pin_LedRGB")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin);*/
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_Brightness);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.ledRGB_WS2812B.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  },
  onchange: function() {
    if (!this.workspace) { return; }  // Block has been deleted.

    // Get the Serial instance from this block
    var thisInstanceName = this.getFieldValue('NEOPIXEL_NAME');

    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
        }
      }
    }
  }
};
