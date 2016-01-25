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

goog.provide('Blockly.Blocks.conversion');

goog.require('Blockly.Blocks');

Blockly.Blocks.conversion.HUE = "#00979D";

Blockly.Blocks['conversion_tochar'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.CONV_tochar);
    this.setOutput(true, 'String');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/CharCast');
  }
};

Blockly.Blocks['conversion_tobyte'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_tobyte);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/ByteCast');
  }
};

Blockly.Blocks['conversion_toint'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_toint);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/IntCast');
  }
};

Blockly.Blocks['conversion_tofloat'] = {
  init: function() {
    this.setColour(Blockly.Blocks.conversion.HUE);
    this.appendValueInput("NAME", 'Number')
        .appendField(Blockly.Msg.CONV_tofloat);
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('https://www.arduino.cc/en/Reference/floatCast');
  }
};