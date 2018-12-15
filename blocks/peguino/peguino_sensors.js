/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
'use strict';

goog.provide('Blockly.Blocks.peguino_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


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
};

Blockly.Blocks['peguino_sensors_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Button_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_INOUT_BUTTON_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_dht_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_DHT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_INOUT_DHT_READ_H,"h"],[Blockly.Msg.GROVE_INOUT_DHT_READ_C,"C"],[Blockly.Msg.GROVE_INOUT_DHT_READ_F,"F"]]), "TYPE");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Climate_Sesnor_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR)
      .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]]), "SENSOR");
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_PIN)
      .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP);
  }
};


Blockly.Blocks['peguino_sensors_EMETTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL);
	this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_TEXT);
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
};

Blockly.Blocks['peguino_sensors_ldr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LDR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LDR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Lightsensor_brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_LDR_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Potentiometer_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['peguino_sensors_ultrasonic_ranger'] = {
	init: function() {
    this.setColour(Blockly.Blocks.peguino_sensors.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Proximity_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);
  }
};