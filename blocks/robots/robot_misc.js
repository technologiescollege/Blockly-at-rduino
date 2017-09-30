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

/**
 * @fileoverview Helper functions for generating sensor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

goog.provide('Blockly.Blocks.robots_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['IR_serial_decoder'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_sensors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MISC_IR_DECODE_TITLE)
        .appendField(Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN')
    this.setTooltip(Blockly.Msg.ROBOTS_MISC_IR_DECODE_TOOLTIP);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl("http://www.instructables.com/id/The-Easiest-Way-to-Use-Any-IR-Remote-with-Ardiuno/");
 }
};

Blockly.Blocks['IR_get_blink'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_sensors.HUE);
	this.appendValueInput("IR_NUM")
       .setCheck('Number')
        .appendField(Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TITLE)
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MISC_IR_CODE)
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN')
		.setAlign(Blockly.ALIGN_RIGHT)
		this.setInputsInline(false);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MISC_LED_PIN )
       .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN2')
	   .setAlign(Blockly.ALIGN_RIGHT)
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TOOLTIP);
	this.setHelpUrl("http://www.instructables.com/id/The-Easiest-Way-to-Use-Any-IR-Remote-with-Ardiuno/");
  }
};

Blockly.Blocks['IR_get'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_sensors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MISC_IR_GET_TITLE)
	    .appendField(Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN')
		.setAlign(Blockly.ALIGN_RIGHT)
		this.setInputsInline(false);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBOTS_MISC_IR_GET_TOOLTIP);
	this.setHelpUrl("http://www.instructables.com/id/The-Easiest-Way-to-Use-Any-IR-Remote-with-Ardiuno/");
  }
};