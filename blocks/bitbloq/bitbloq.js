
//www.bq.com/fr

'use strict';

goog.provide('Blockly.Blocks.bq');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['bq_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/LED.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.BQ_LED1_TOOLTIP);
  }
};

Blockly.Blocks['bq_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);	
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT43)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN);	
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT44)
        .setCheck('Number');
    this.appendValueInput("TPS")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT45)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_BUZZER1_TOOLTIP);
  }
};

Blockly.Blocks['bq_ultrason'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.TECHNOZONE51_TEXT28)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/ranger.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TRIGER")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT29);
    this.appendValueInput("DIST")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT30);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BQ_SONAR1_TOOLTIP);
  }
};

Blockly.Blocks['bq_servo'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.BQ_SERVO1_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/mini-servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_PWM);
    this.appendValueInput("DEGREE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_SERVO1_TITLEB);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_SERVO1_TOOLTIP);
  }
};

Blockly.Blocks['bq_servo_rotation_continue'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_SERVO2_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/servo-continu.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_PWM);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_SERVO2_TITLEB);
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_SERVO2_TITLEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks['bq_bouton_poussoir'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/BP.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_DIGITAL);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BQ_BP_TOOLTIP);
  }
};

Blockly.Blocks['bq_luminosite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_LUX_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/LDR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BQ_LUX_TOOLTIP);
  }
};

Blockly.Blocks['bq_potentiometre'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.BQ_POT_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/potentiometre.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BQ_POT_TOOLTIP);
  }
};

Blockly.Blocks['bq_bluetooth_slave'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BQ_BT_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/bluetooth.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("nom déclaré")
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("code PIN")
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("recevoir");
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("envoyer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_BT_TOOLTIP);
  }
};

Blockly.Blocks['bq_capteur_de_ligne'] = {
  init: function() {
    this.setColour(Blockly.Blocks.bq.HUE);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_IR_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/IR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_DIGITAL);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BQ_IR_TOOLTIP);
  }
};