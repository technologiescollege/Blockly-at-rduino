// define blocks
'use strict';

goog.provide('Blockly.Blocks.u8g');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['lp2i_u8g_draw_string'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_string)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Text")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Text);	  
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.u8g.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};
Blockly.Blocks['lp2i_u8g_draw_4strings'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display);		
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1);		
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2);			
    this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3);			
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4);			
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.u8g.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};
Blockly.Blocks['lp2i_u8g_print'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_print)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
	this.appendValueInput("N")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_N);		
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_Y);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.u8g.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};

Blockly.Blocks['lp2i_u8g_4draw_print'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/display-oled-128x64-i2c/display-oled-128x64-i2c.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_to_display);			
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line1);		
	this.appendValueInput("N1")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N1);			
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line2);			
	this.appendValueInput("N2")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N2);		
	this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line3);			
	this.appendValueInput("N3")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N3);		
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line4);			
	this.appendValueInput("N4")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N4);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.u8g.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};