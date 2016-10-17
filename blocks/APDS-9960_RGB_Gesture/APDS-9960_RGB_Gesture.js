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

goog.provide('Blockly.Blocks.APDS9960');

goog.require('Blockly.Blocks');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.APDS9960.HUE = "#D9242D";


Blockly.Blocks['APDS9960_ColorSensor_init'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_INIT_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.APDS9960_INIT_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_test'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_TEST_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.APDS9960_TEST_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_ambient'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_AMBIENT_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_AMBIENT_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_red'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_RED_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_green'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_GREEN_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['APDS9960_ColorSensor_blue'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.APDS9960_MISC_HELPURL);
    this.setColour(Blockly.Blocks.APDS9960.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.APDS9960_BLUE_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP);
  }
};