
//http://www.fischertechnik.de/en/Home.aspx

'use strict';

goog.provide('Blockly.Arduino.fischertechnik');

goog.require('Blockly.Arduino');

// define blocks

Blockly.Blocks['fischertechnik_feu_rouge'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/Feu_Rouge.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2);		
    //this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_feu_orange'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/Feu_Orange.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2);		
    //this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_feu_vert'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT5)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/Feu_Vert.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2);		
    //this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_barriere_lumineuse'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT6)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/lampe_barriere_lumineuse.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2);		
    //this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_buzzer'] = {
  init: function() {
    this.setColour("#778E9A");	
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.FISCHERTECHNIK_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/Buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_PIN);	
    this.appendValueInput("NUM", 'Number')
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT2)
        .setCheck(Number);
    this.appendValueInput("TPS", 'Number')
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT3)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_BUZZER1_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_BP_capteur_de_presence'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/BP_Capteur_de_presence.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT5)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT17);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_TEXT7);
  }
};

Blockly.Blocks['fischertechnik_capteur_magnetique'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT8)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/Capteur_magnetique.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT5)
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_TEXT7);
  }
};

Blockly.Blocks['fischertechnik_capteur_de_lumiere'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FISCHERTECHNIK_LUX_TITLE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/fischertechnik/LDR_Capteur_de_lumiere.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_LUX_TOOLTIP);
  }
};

Blockly.Blocks['fischertechnik_moteurs_CC'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl(Blockly.Msg.FISCHERTECHNIK_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT9)
        .appendField(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT10)
        .appendField(new Blockly.FieldImage("blocks/robuno/Shield_moteurs_CC.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        //.appendField(Blockly.Msg.FISCHERTECHNIK_TEXT11);
    this.appendValueInput("PINDIR", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT12)
    this.appendValueInput("PINPWM", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT13)
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT15);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.FISCHERTECHNIK_TEXT14);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.FISCHERTECHNIK_TEXT16);
  }
};

