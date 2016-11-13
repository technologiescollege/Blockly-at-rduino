/**
 * Visual Blocks Language
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Blocks.multifunction');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

Blockly.Msg.multifunction_HELPURL = 'http://arduinolearning.com/code/multi-function-shield-examples.php'

Blockly.Blocks.multifunction_buildin_led = {
   init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/DEL.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.multifunction_buildin_led_INPUT)
		.appendField(new Blockly.FieldDropdown([["D1", "13"], ["D2", "12"], ["D3", "11"], ["D4", "10"]]), 'DEL');
	this.appendDummyInput()
      	.appendField(Blockly.Msg.multifunction_buildin_led_STAT)		
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	 
    this.setOutput(null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.multifunction_buildin_led_TOOLTIP);
   }
};

Blockly.Blocks.multifunction_digital_read = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/BP.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.multifunction_digital_read_INPUT)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["S1", "A1"], ["S2", "A2"], ["S3", "A3"]]), 'BP');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.multifunction_digital_read_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_pot_read = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_pot_read_INPUT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/pot.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.multifunction_pot_read_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_analog_read = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_analog_read_INPUT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/A5.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.multifunction_analog_read_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_tone = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_tone_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_tone_INPUT2)
        .setCheck('Number');
    this.appendValueInput("TPS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_tone_INPUT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.multifunction_tone_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_notone = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.multifunction_notone_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.multifunction_notone_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_segment = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.multifunction_segment_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/segments.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("NUM1")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_segment_INPUT1)
        .setCheck('Number');
	this.appendValueInput("NUM2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_segment_INPUT2)
        .setCheck('Number');
	this.appendValueInput("NUM3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_segment_INPUT3)
        .setCheck('Number');
	this.appendValueInput("NUM4")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_segment_INPUT4)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.multifunction_segment_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_segment_number = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/segments.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_segment_TEXT)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.multifunction_segment_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_PWM_write = {
  init: function() {
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.multifunction_PWM_write_OUTPUT);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([["~5", "5"], ["~6", "6"], ["~9", "9"]]), 'PIN');
	this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.multifunction_PWM_write_ANGLE)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.multifunction_PWM_write_TOOLTIP);
  }
};