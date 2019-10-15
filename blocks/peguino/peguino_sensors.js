/*
Peguino Sensors 2019
more at www.peguino.com

*/
 
// Peguino Nano Board default wiring:
// Port C1 = Pin 23 = D5; C2 = Pin 20 = D2; C3 = Pin 6 = A2; D1 = Pin 10 = A6; D2 = Pin 7 = A3; D3 = Pin 24 = D6;
 
'use strict';

goog.provide('Blockly.Blocks.peguino_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/*
Blockly.Blocks['peguino_sensors_pir_motion_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_PIR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_PIR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Body_Sensor_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_PIR_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_PIR_TOOLTIP);
  }
};*/

Blockly.Blocks['peguino_sensors_pir_motion_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_Bodysensor_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_Bodysensor_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Body_Sensor_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.Peguino_Bodysensor_PLUG)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_Bodysensor_UNIT_CHOICE), Blockly.Msg.Peguino_Bodysensor_UNIT);
		//.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_Bodysensor_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.Peguino_ButtonBrick_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_ButtonBrick_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Button_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.Peguino_ButtonBrick_INPUT)
		//.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_ButtonBrick_UNIT_CHOICE), Blockly.Msg.Peguino_ButtonBrick_UNIT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.Peguino_ButtonBrick_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_dht_read_UnoNano'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_DHT_HELPURL);

    this.appendDummyInput()
	//	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.Peguino_ClimateBrick_TEXT)
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Climate_Sesnor_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR + Blockly.Msg.Peguino_ClimateBrick_PLUG)
	.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_ClimateBrick_CHOICENANO), Blockly.Msg.Peguino_ClimateBrick_PLUG);
	this.appendDummyInput("")
	.setAlign(Blockly.ALIGN_LEFT)
	.appendField("  ");
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
	.appendField("  ")
    //.appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Peguino_ClimateBrick_DHT_READ_H,"h"],[Blockly.Msg.Peguino_ClimateBrick_DHT_READ_C,"C"]]), "TYPE");
    //.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_ClimateBrick_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_dht_read_UnoESP32'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_DHT_HELPURL);
    this.appendDummyInput()
	  .appendField(Blockly.Msg.Peguino_ClimateBrick_TEXT)
      //.appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Peguino_ClimateBrick_DHT_READ_H,"h"],[Blockly.Msg.Peguino_ClimateBrick_DHT_READ_C,"C"]]), "TYPE");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Climate_Sesnor_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      //.appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR + Blockly.Msg.GROVE_INOUT_DHT_READ_PIN)
	  .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR + Blockly.Msg.Peguino_ClimateBrick_PLUG)
	  .appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_ClimateBrick_CHOICENANO), Blockly.Msg.Peguino_ClimateBrick_PLUG);
      //.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_ClimateBrick_TOOLTIP);
  }
};

/*
Blockly.Blocks['peguino_sensors_EMETTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL);
	this.appendDummyInput()
      .appendField(Blockly.Msg.PeguinoIRsender_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_EMETTEUR_IR)
	  .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_IR_LED_Sender_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_EMETTEUR_IR_TOOLTIP);
  }
};
Blockly.Blocks['peguino_sensors_RECEPTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_RECEPTEUR_IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_RECEPTEUR_IR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_IR_LED_Receiver_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_RECEPTEUR_IR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_RECEPTEUR_IR_TOOLTIP);
  }
}; */


Blockly.Blocks['peguino_sensors_ldr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_Lightsensor_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_Lightsensor_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Lightsensor_brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.Peguino_Lightsensor_PLUG)
        //.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_Lightsensor_UNIT_CHOICE), Blockly.Msg.Peguino_Lightsensor_UNIT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_Lightsensor_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_PotiBrick_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_PotiBrick_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Potentiometer_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.Peguino_PotiBrick_PLUG)
        //.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_PotiBrick_UNIT_CHOICE), Blockly.Msg.Peguino_PotiBrick_UNIT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_PotiBrick_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_microprox'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_Microprox_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_Microprox_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microprox_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.Peguino_Microprox_PLUG)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_Microprox_UNIT_CHOICE), Blockly.Msg.Peguino_Microprox_UNIT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.Peguino_Microprox_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_ultrasonic_ranger'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.Peguino_ProximityBrick_HELPURL);
	this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.Peguino_ProximityBrick_TEXT)
    	.setAlign(Blockly.ALIGN_LEFT)
        //.appendField(Blockly.Msg.PETITBOT_HCSR04);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/hc-sr04.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Proximity_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.Peguino_ProximityBrick_TOOLTIP);
  }
};