/**
 * Block pour composants robot icn
 * http://www.ebay.fr/cln/dvarrel/robot-arduino/271320303014
 * @author Damien VARREL (damien@varrel.fr)
 */
'use strict';

goog.provide('Blockly.Blocks.ds18b20');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Blocks.ds18b20.HUE = '#B7A700';
Blockly.Blocks.ds18b20.HelpUrl="";

Blockly.Blocks['ds18b20_search1'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ds18b20/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField('sur la broche N°')
		.appendField(new Blockly.FieldTextInput('11',  Blockly.Arduino.pinDualValidator), 'ds18b20_pin')
	    .appendField('addresse')
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'addresse');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('capteur de température DS18B20 - renvoie la valeur 1 si capteur connecté à la carte Arduino');
    this.setColour(Blockly.Blocks.ds18b20.HUE);
    this.setHelpUrl(Blockly.Blocks.ds18b20.HelpUrl);
  }
};

Blockly.Blocks['ds18b20_temp1'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/ds18b20/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField('addresse')
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'address');
	this.setOutput(true, 'Number');
	this.setTooltip('capteur de température DS18B20 - renvoie la température en °C');
    this.setColour(Blockly.Blocks.ds18b20.HUE);
    this.setHelpUrl(Blockly.Blocks.ds18b20.HelpUrl);
  }
};





