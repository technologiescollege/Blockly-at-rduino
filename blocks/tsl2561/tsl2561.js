/**
 * Block pour composant TSL2561
 * http://www.
 * @author Julien bennica (julien.bennica@gmail.com)
 */
'use strict';

goog.provide('Blockly.Blocks.tsl2561');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['tsl2561_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.tsl2561_MISC_HELPURL);
    this.setColour(Blockly.Blocks.tsl2561.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TSL2561_INIT_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/tsl2561/tsl2561.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TSL2561_INIT_TOOLTIP);
  }
};

Blockly.Blocks['tsl2561_read'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.TSL2561_MISC_HELPURL);
    this.setColour(Blockly.Blocks.tsl2561.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TSL2561_READ_TITLE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/tsl2561/tsl2561.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TSL2561_READ_TOOLTIP);
  }
};