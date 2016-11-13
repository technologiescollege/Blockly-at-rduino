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

goog.provide('Blockly.Blocks.Zumo_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['Zumo_setup_button_wait_il'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Zumo_sensors.HUE);
    this.appendDummyInput()
        .appendField("1 Time wait - push")/*
        //.appendField(new Blockly.FieldImage("http://", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("PIN#")
        .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN')*/;
    this.setTooltip('1 time wait button (in setup) - INPUT & wait for HIGH');
	this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/5');
 }
};

Blockly.Blocks['Zumo_setup_button_wait_iph'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Zumo_sensors.HUE);
    this.appendDummyInput()
        .appendField("1 Time wait - pull")/*
        //.appendField(new Blockly.FieldImage("http://", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("PIN#")
        .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN')*/;
    this.setTooltip('1 time wait button (in setup) - INPUT_PULLUP & wait for LOW');
	this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/5');
 }
};

Blockly.Blocks['Zumo_wait_button_push'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Zumo_sensors.HUE);
    this.appendDummyInput()
        .appendField("attendre appui sur le bouton");
    this.setTooltip("tant qu'on n'appuie pas sur le bouton le programe est en attente");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/5');
 }
};

Blockly.Blocks['Zumo_play_notes_z'] = {
  init: function() {
    this.setColour('#00138b');
	this.appendDummyInput()
	    .appendField(Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TITLE);
    this.appendDummyInput()
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_C(3)",	"NOTE_C(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_D(3)",	"NOTE_D(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_E(3)",	"NOTE_E(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_F(3)",	"NOTE_F(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_G(3)",	"NOTE_G(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_A(3)",	"NOTE_A(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_B(3)",	"NOTE_B(3)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_C(2)",	"NOTE_C(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_D(2)",	"NOTE_D(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_E(2)",	"NOTE_E(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_F(2)",	"NOTE_F(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_G(2)",	"NOTE_G(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_A(2)",	"NOTE_A(2)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_B(1)",	"NOTE_B(1)" ],
						[ Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE + "_C(1)",	"NOTE_C(1)" ] ]), "NOTE");
	this.setInputsInline(true) ;
    this.appendValueInput("DUR")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MISC_BUZZER_DURATION);
    this.appendValueInput("VOL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MISC_BUZZER_VOLUME);
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_HELPURL);
  }
};