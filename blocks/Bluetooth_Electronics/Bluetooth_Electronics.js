'use strict';

goog.provide('Blockly.Blocks.BT_ELEC');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['BT_ELEC_Init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.BT_ELEC.HUE);
	this.setHelpUrl(Blockly.Msg.BT_ELEC_Init_HELPURL);
	this.setInputsInline(true);
    /*this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/Bluetooth_Electronics_app.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));*/
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
	    .appendField(new Blockly.FieldLabel(Blockly.Msg.BT_ELEC_init_text));
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/QRCode_1479053702055.png', 256, 256));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BT_ELEC_TOOLTIP);
  }
};

Blockly.Blocks['BT_ELEC_LED_brightness'] = {
  init: function() {
    this.setColour(Blockly.Blocks.BT_ELEC.HUE);
	this.setHelpUrl(Blockly.Msg.BT_ELEC_LED_brightness_HELPURL);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/Bluetooth_Electronics_app.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.BT_ELEC_LED_brightness_text)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/LED_brightness.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BT_ELEC_LED_brightness_TOOLTIP);
  }
};

Blockly.Blocks['BT_ELEC_RC_car'] = {
  init: function() {
    this.setColour(Blockly.Blocks.BT_ELEC.HUE);
	this.setHelpUrl(Blockly.Msg.BT_ELEC_RC_car_HELPURL);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/Bluetooth_Electronics_app.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.BT_ELEC_RC_car_text)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Bluetooth_Electronics/RC_car.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.BT_ELEC_RC_car_TOOLTIP);
  }
};