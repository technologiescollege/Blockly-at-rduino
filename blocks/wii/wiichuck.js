// define blocks
'use strict';

goog.provide('Blockly.Blocks.wii');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');


Blockly.Blocks.wiichuck_joy = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WII_JOYSTICK)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/wii/wiichuck.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WII_JOYSTICK_AXE)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.WII_JOY_DROPDOWN), "DIRECTION");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.wii.HUE);
    this.setTooltip(Blockly.Msg.WII_JOYSTICK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.WII_JOYSTICK_HELPURL);
  }
};

Blockly.Blocks.wiichuck_accel = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WII_ACCEL1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/wii/wiichuck.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WII_ACCEL2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.WII_ACCEL_DROPDOWN), "DIRECTION");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.wii.HUE);
    this.setTooltip(Blockly.Msg.WII_ACCEL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.WII_JOYSTICK_HELPURL);
  }
};

Blockly.Blocks.wiichuck_button = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/wii/wiichuck.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));    
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.WII_BUTTON1)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.WII_ACCEL_BUTTON), "BUTTON");
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg.WII_BUTTON2)
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.WII_ACCEL_BUTTON_STATE), "ACTION");
		this.setOutput(true, null);
		this.setColour(Blockly.Blocks.wii.HUE);
		this.setTooltip(Blockly.Msg.WII_BUTTON_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.WII_JOYSTICK_HELPURL);
	}
};

Blockly.Blocks.wiichuck_update = {
    init: function() {
        this.setColour(Blockly.Blocks.wii.HUE);
        this.appendDummyInput()
			.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/wii/wiichuck.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize)) 
			.appendField(Blockly.Msg.WII_UPDATE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.WII_UPDATE_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.WII_JOYSTICK_HELPURL);
    }
};