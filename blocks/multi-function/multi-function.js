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

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

Blockly.Msg.multifunction_HELPURL = 'http://arduinolearning.com/code/multi-function-shield-examples.php'

Blockly.Blocks.multifunction_buildin_led = {
   init: function() {
    this.setColour("#0152AB");
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/DEL.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
		.appendField(new Blockly.FieldDropdown([["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]), 'DEL');
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_STAT)		
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	 
    this.setOutput(null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP);
   }
};

Blockly.Blocks.multifunction_digital_read = {
  init: function() {
    this.setColour("#0152AB");
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/BP.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["S1", "S1"], ["S2", "S2"], ["S3", "S3"]]), 'BP');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_pot_read = {
  init: function() {
    this.setColour("#0152AB");
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/pot.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_analog_read = {
  init: function() {
    this.setColour("#0152AB");
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/A5.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_PWM_write = {
  init: function() {
    this.setColour("#0152AB");
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([["~5", "5"], ["~6", "6"], ["~9", "9"]]), 'PIN');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_tone = {
  init: function() {
    this.setColour("#0152AB");
    this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("NUM", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
        .setCheck('Number');
    this.appendValueInput("TPS", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_notone = {
  init: function() {
    this.setColour("#0152AB");
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
  }
};

Blockly.Blocks.multifunction_segment = {
  init: function() {
    this.setColour("#0152AB");
	this.setHelpUrl(Blockly.Msg.multifunction_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/multi-function/segments.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("NUM1", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
	this.appendValueInput("NUM2", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
	this.appendValueInput("NUM3", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
	this.appendValueInput("NUM4", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};