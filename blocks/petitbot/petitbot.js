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

goog.provide('Blockly.Blocks.petitbot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//petitbot blocks
//https://github.com/julienrat/petitbot

Blockly.Blocks.petitbot_hcsr04 = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.PETITBOT_HCSR04);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/icn/hc-sr04.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.PETITBOT_HCSR04_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_analog_read = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
      	.appendField(Blockly.Msg.PETITBOT_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.PETITBOT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_move_left = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PETITBOT_SERVO1_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/servomoteur_rot_continue.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PETITBOT_SERVO1_TITLEB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PETITBOT_SERVO1_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_move_right = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PETITBOT_SERVO2_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/servomoteur_rot_continue.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PETITBOT_SERVO2_TITLEB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PETITBOT_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_move_1 = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PETITBOT_SERVO31_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/servo.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SENS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PETITBOT_SERVO31_TITLEB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PETITBOT_SERVO31_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_move_2 = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PETITBOT_SERVO32_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/servo.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SENS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PETITBOT_SERVO32_TITLEB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PETITBOT_SERVO32_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_move_3 = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PETITBOT_SERVO33_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/servo.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SENS")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PETITBOT_SERVO33_TITLEB);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.PETITBOT_SERVO33_TOOLTIP);
  }
};

Blockly.Blocks.petitbot_digital_write_led1 = {
   init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/LED.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.PETITBOT_LED_INPUT1)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Blockly.Msg.PETITBOT_LED_TOOLTIP1);
   }
};

Blockly.Blocks.petitbot_digital_write_led2 = {
   init: function() {
    this.setHelpUrl(Blockly.Msg.PETITBOT_HELPURL);
    this.setColour(Blockly.Blocks.petitbot.HUE);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/petitbot/LED.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      	.appendField(Blockly.Msg.PETITBOT_LED_INPUT2)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Blockly.Msg.PETITBOT_LED_TOOLTIP2);
   }
};