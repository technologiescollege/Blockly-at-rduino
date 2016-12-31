/**
 * Block pour composants robot icn
 * http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014
 * @author Damien VARREL (damien@varrel.fr)
 */
'use strict';

goog.provide('Blockly.Blocks.icn');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Blocks.icn.HUE = '#FF8C00';

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
    this.setHelpUrl("http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014");
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
    this.setHelpUrl("http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014");
  }
};

Blockly.Blocks['hcsr04'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField('HC-SR04')
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/hc-sr04.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput('hcsr04_pin')
    	.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number')
	    .appendField('TRIG-ECHO#');
	this.setOutput(true, 'Number');
	this.setTooltip('ultrasonic sensor - return float distance');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl("http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014");
  }
};

Blockly.Blocks['ds18b20_search'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField('DS18B20 DATA#')
		.appendField(new Blockly.FieldTextInput('11',  Blockly.Arduino.pinDualValidator), 'ds18b20_pin')
	    .appendField('address')
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'address');
	this.setOutput(true, 'Boolean');
	this.setTooltip('temperature sensor - return true if found');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl("http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014");
  }
};

Blockly.Blocks['ds18b20_temp'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField('address')
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'address');
	this.setOutput(true, 'Number');
	this.setTooltip('temperature sensor - return float temp');
    this.setColour(Blockly.Blocks.icn.HUE);
    this.setHelpUrl("http://www.ebay.fr/cln/dam74999/robot-arduino/271320303014");
  }
};
