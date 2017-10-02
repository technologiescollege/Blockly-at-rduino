
//www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html
'use strict';

goog.provide('Blockly.Blocks.robuno');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['robuno_led_rouge'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LED_Rouge.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_INOUT_LED_INPUT2);		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ROBUNO_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_LED1_TOOLTIP);
  }
};

Blockly.Blocks['robuno_led_blanche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_INOUT_LED_INPUT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LED_Blanche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_LED1_TOOLTIP);
  }
};

Blockly.Blocks['robuno_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);	
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ROBUNO_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN);	
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ROBUNO_TEXT2)
        .setCheck('Number');
    this.appendValueInput("TPS")
        .appendField(Blockly.Msg.ROBUNO_TEXT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_BUZZER1_TOOLTIP);
  }
};

Blockly.Blocks['robuno_servomoteur_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Servomoteur_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_PWM);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB);
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks['robuno_servomoteur_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLED)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Servomoteur_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_PWM);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB);
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks['robuno_capteur_collision_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Capteur_Collision_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT5);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT7);
  }
};

Blockly.Blocks['robuno_capteur_collision_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT8)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Capteur_Collision_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT5);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT7);
  }
};

Blockly.Blocks['robuno_ldr_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_LUX_TITLE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LDR_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBUNO_LUX_TOOLTIP);
  }
};

Blockly.Blocks['robuno_ldr_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_LUX_TITLE2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LDR_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBUNO_LUX_TOOLTIP);
  }
};

Blockly.Blocks['robuno_moteurs_CC'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT9)
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "MOT")
        .appendField(Blockly.Msg.ROBUNO_TEXT10)
        .appendField(new Blockly.FieldImage("blocks/robuno/Shield_moteurs_CC.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        //.appendField(Blockly.Msg.ROBUNO_TEXT11);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT14);  // inversion TEXT 14 -15 
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT15);  // inversion TEXT 14 -15         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT16);
  }
};

