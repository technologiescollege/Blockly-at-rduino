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

goog.provide('Blockly.Blocks.Zumo_auto');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['Zumo_line_follower'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Zumo_auto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER);
    this.appendValueInput("ERROR")
        .setCheck("Number");
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_TOOLTIP);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_HELPURL);
 }
};

Blockly.Blocks['Zumo_SensorCalibration'] = {
  init: function() {
    this.setColour(Blockly.Blocks.Zumo_auto.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_TOOLTIP);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_HELPURL);
 }
};