/**
 * Blocks pour NRF24L01 
	* void nrf24l01_init();
	* void nrf24l01_send();
	* void nrf24l01_get();
	
 * @author JP Fontaine
 */
'use strict';

goog.provide('Blockly.Blocks.nrf24l01');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.nrf24l01_init = {
	init: function() {
        this.appendDummyInput()
			.appendField("nrf24l01")
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/nrf24l01/nrf24l01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        this.appendValueInput("irq")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("irq");
        this.appendValueInput("ce")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("ce");
        this.appendValueInput("csn")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("csn");
        this.appendValueInput("canal")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("canal");
        this.setColour(Blockly.Blocks.nrf24l01.HUE);
        this.setTooltip("https://www.carnetdumaker.net/articles/communiquer-sans-fil-avec-un-module-nrf24l01-la-bibliotheque-mirf-et-une-carte-arduino-genuino/");
        this.setHelpUrl("https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo");
    }
};

Blockly.Blocks.nrf24l01_send = {
	init: function() {
        this.appendValueInput("data")
			.appendField("envoyer la donnée")
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/nrf24l01/nrf24l01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.nrf24l01.HUE);
        this.setTooltip("https://www.carnetdumaker.net/articles/communiquer-sans-fil-avec-un-module-nrf24l01-la-bibliotheque-mirf-et-une-carte-arduino-genuino/");
        this.setHelpUrl("https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo");
    }
};

Blockly.Blocks.nrf24l01_get = {
	init: function() {
        this.appendDummyInput("data")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField("données reçues")
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/nrf24l01/nrf24l01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.nrf24l01.HUE);
        this.setTooltip("https://www.carnetdumaker.net/articles/communiquer-sans-fil-avec-un-module-nrf24l01-la-bibliotheque-mirf-et-une-carte-arduino-genuino/");
        this.setHelpUrl("https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo");
    }
};