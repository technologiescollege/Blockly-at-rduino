
//www.bq.com/fr

'use strict';

goog.provide('Blockly.Arduino.bq');

goog.require('Blockly.Arduino');

// define blocks

Blockly.Blocks['bq_led'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/LED.jpg', 64, 64));
    this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);		
    //this.setInputsInline(true);
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_LED1_TOOLTIP);
  }
};

Blockly.Blocks['bq_buzzer'] = {
  init: function() {
    this.setColour(190);	
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.TECHNOZONE_BUZZER1_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/buzzer.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN);	
    this.appendValueInput("NUM", 'Number')
        .appendField(Blockly.Msg.TECHNOZONE_BUZZER1_FREQ)
        .setCheck(Number);
    this.appendValueInput("TPS", 'Number')
        .appendField(Blockly.Msg.TECHNOZONE_BUZZER1_DUR)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BQ_BUZZER1_TOOLTIP);
  }
};

Blockly.Blocks['bq_ultrason'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.TECHNOZONE_SONAR1_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/ranger.jpg', 64, 64));
    this.appendValueInput("TRIGER", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE_SONAR1_TRIG);
    this.appendValueInput("DIST", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE_SONAR1_DIST);
	this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BQ_SONAR1_TOOLTIP);
  }
};

Blockly.Blocks['bq_servo'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.BQ_SERVO1_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/mini-servo.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_PWM);
    this.appendValueInput("DEGREE", 'Number')
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
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_SERVO2_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/servo-continu.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_PWM);
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_SERVO2_TITLEB);
	this.appendValueInput("VITESSE", 'Number')
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
    this.setColour(120);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/BP.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_DIGITAL);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BQ_BP_TOOLTIP);
  }
};

Blockly.Blocks['bq_luminosite'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_LUX_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/LDR.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BQ_LUX_TOOLTIP);
  }
};

Blockly.Blocks['bq_potentiometre'] = {
  init: function() {
    this.setColour(10);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.BQ_POT_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/potentiometre.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.BQ_POT_TOOLTIP);
  }
};

Blockly.Blocks['bq_bluetooth_slave'] = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BQ_BT_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/bluetooth.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
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
    this.setColour(120);
	this.setHelpUrl(Blockly.Msg.BQ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.BQ_IR_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/bitbloq/IR.jpg', 64, 64));
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN_DIGITAL);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.BQ_IR_TOOLTIP);
  }
};