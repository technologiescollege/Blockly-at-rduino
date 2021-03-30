/**
 * Block pour composants robot icn
 * http://www.ebay.fr/cln/dvarrel/robot-arduino/271320303014
 * @author Damien VARREL (damien@varrel.fr)
 */
'use strict';

goog.provide('Blockly.Blocks.icn');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['tb6612_setup'] = {
  init: function() {
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/tb6612.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField('TB6612 Setup')
		.appendField('STDBY#')
        .appendField(new Blockly.FieldTextInput('10',  Blockly.Arduino.pinDualValidator), 'STDBY');
    this.appendDummyInput()
	    .appendField('PWMA#')
		.appendField(new Blockly.FieldTextInput('3',  Blockly.Arduino.pinPWMValidator), 'PWMA')
	    .appendField('AIN1#')
		.appendField(new Blockly.FieldTextInput('9',  Blockly.Arduino.pinDualValidator), 'AIN1')
	    .appendField('AIN2#')
		.appendField(new Blockly.FieldTextInput('8',  Blockly.Arduino.pinDualValidator), 'AIN2')
		.setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
	    .appendField('PWMB#')
		.appendField(new Blockly.FieldTextInput('5',  Blockly.Arduino.pinPWMValidator), 'PWMB')
	    .appendField('BIN1#')
		.appendField(new Blockly.FieldTextInput('11',  Blockly.Arduino.pinDualValidator), 'BIN1')
	    .appendField('BIN2#')
		.appendField(new Blockly.FieldTextInput('12',  Blockly.Arduino.pinDualValidator), 'BIN2')
		.setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('tb6612 controller setup');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};

Blockly.Blocks['tb6612_controller'] = {
  init: function() {
	this.setInputsInline(true);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/tb6612.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), 'STATE');
	this.appendValueInput("MOTORA")
        .setCheck('Number')
        .appendField('SpeedA');
    this.appendValueInput("MOTORB")
        .setCheck('Number')
        .appendField('SpeedB');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('tb6612 controller -255<speed<255');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};

Blockly.Blocks['hcsr04'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField('HC-SR04')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/hc-sr04.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
	    .appendField('TRIG-ECHO#')
		.appendField(new Blockly.FieldTextInput('2',  Blockly.Arduino.pinDualValidator), 'hcsr04_pin')
		.setAlign(Blockly.ALIGN_RIGHT);
	this.setOutput(true, 'Number');
	this.setTooltip('ultrasonic sensor - return float distance');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};

Blockly.Blocks['servomotor_angle'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField('servo')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/servo.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField('CONTROL#')
		.appendField(new Blockly.FieldTextInput('A4',  Blockly.Arduino.pinDualValidator), 'servo_pin');
	this.appendValueInput("servo_angle")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('angle (0~180°)');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('servomotor (0~180°)');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};

Blockly.Blocks['servomotor_detach'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField('detach servo CONTROL#')
		.appendField(new Blockly.FieldTextInput('A4',  Blockly.Arduino.pinDualValidator), 'servo_pin');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('detach servomotor and allow pin 9&10 for PWM');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};
Blockly.Blocks['servomotor_attach'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField('attach servo CONTROL#')
		.appendField(new Blockly.FieldTextInput('A4',  Blockly.Arduino.pinDualValidator), 'servo_pin');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('attach servomotor');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};
Blockly.Blocks['servomotor_attached'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField('servo CONTROL#')
		.appendField(new Blockly.FieldTextInput('A4',  Blockly.Arduino.pinDualValidator), 'servo_pin');
	this.setOutput(true, 'Boolean');
	this.setTooltip('return TRUE if servomotor is attached');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_HelpUrl);
  }
};

Blockly.Blocks['ds18b20_search'] = {
  init: function() {
	this.appendValueInput("ds18b20_pin")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField('DS18B20 DATA#');
	this.appendValueInput("ds18b20_array")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField('ADRESS ARRAY#');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('ds18b20',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'DS18B20_NAME');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('temperature sensor - return integer array with adress if found');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_ds18b20_HelpUrl);
  }
};

Blockly.Blocks['ds18b20_temp'] = {
  init: function() {
	this.appendDummyInput("address")
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
            new Blockly.FieldInstance('ds18b20',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'DS18B20_NAME');
	this.setOutput(true, 'Number');
	this.setTooltip('temperature sensor - return float temp');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl(Blockly.Msg.icn_ds18b20_HelpUrl);
  }
};