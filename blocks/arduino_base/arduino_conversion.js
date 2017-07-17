/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.arduino_conversion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['conversion_tochar'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CONV_tochar);
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/CharCast');
  }
};

Blockly.Blocks['conversion_tobyte'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField(Blockly.Msg.CONV_tobyte);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/ByteCast');
  }
};

Blockly.Blocks['conversion_toint'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField(Blockly.Msg.CONV_toint);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tofloat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField(Blockly.Msg.CONV_tofloat);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/floatCast');
  }
};

Blockly.Blocks['conversion_toString'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.appendValueInput("NAME")
		//.setCheck('Number')
        .appendField(Blockly.Msg.CONV_toString);
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/StringConstructor');
  }
};

Blockly.Blocks.conversion_map = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_conversion.HUE);
    this.setHelpUrl(Blockly.Msg.CONVERSION_MAP_HELPURL);
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.CONVERSION_MAP_NUM)
        .setCheck('Number');
    this.appendValueInput("IN_MIN")
        .appendField(Blockly.Msg.CONVERSION_MAP_IN_MIN)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("IN_MAX")
        .appendField(Blockly.Msg.CONVERSION_MAP_IN_MAX)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("OUT_MIN")
        .appendField(Blockly.Msg.CONVERSION_MAP_OUT_MIN)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.appendValueInput("OUT_MAX")
        .appendField(Blockly.Msg.CONVERSION_MAP_OUT_MAX)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.CONVERSION_MAP_TOOLTIP);
  }
};