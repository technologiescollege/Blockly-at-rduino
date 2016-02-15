// define blocks
'use strict';

Blockly.Blocks['lp2i_ledRGB_WS2812B_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_LedRGB" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin);				
    this.appendValueInput("Number_of_Pixels" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CAC7BE");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};

Blockly.Blocks['lp2i_ledRGB_WS2812B_setPixelColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/led-rgb-ws2812b/led-rgb-ws2812b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));					
    this.appendValueInput("Red" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red);			
    this.appendValueInput("Green" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green);			
    this.appendValueInput("Blue" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue);	
    this.appendValueInput("Pixel_number" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CAC7BE");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};