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

goog.provide('Blockly.Blocks.dfrobot_ISD1820');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.dfrobot_ISD1820_record = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot_ISD1820.HUE);
	this.setHelpUrl(Blockly.Msg.dfrobot_ISD1820_HELPURL);
	this.setInputsInline(true);
    this.appendDummyInput()
		.appendField(Blockly.Msg.dfrobot_ISD1820_record)
		.setAlign(Blockly.ALIGN_LEFT);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_ISD1820/dfrobot_ISD1820.jpg', 128, 128));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.dfrobot_ISD1820_TOOLTIP);
  }
};


Blockly.Blocks.dfrobot_ISD1820_play = {
  init: function() {
    this.setColour(Blockly.Blocks.dfrobot_ISD1820.HUE);
	this.setHelpUrl(Blockly.Msg.dfrobot_ISD1820_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.dfrobot_ISD1820_play)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/DFRobot/dfrobot_ISD1820/dfrobot_ISD1820.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));			
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.dfrobot_ISD1820_play_Input);			
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.dfrobot_ISD1820_TOOLTIP);
  }
};