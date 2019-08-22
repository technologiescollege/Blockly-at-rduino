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
 * Thanks to Fred Lin for building BlockyDuino!
 * @author greich@ac-versailles.fr Guillaume Reich
 */

'use strict';

goog.provide('Blockly.Blocks.RF433');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
//goog.require('Blockly.FieldInstance');

Blockly.Msg.RF433_HELPURL = 'http://greich.fr/v1/blog/post.php?id=14';

Blockly.Blocks.rf433_rxready = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_rxready_TEXT);
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.RF433_rxready_INPUT);        
    this.setOutput(true, "Boolean");
    this.setTooltip(Blockly.Msg.RF433_rxready_TOOLTIP);
  }
};

Blockly.Blocks.rf433_rx = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_rx_TEXT);
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.RF433_rx_INPUT);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.RF433_rx_TOOLTIP);
  }
};

Blockly.Blocks.rf433_tx = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_tx_TEXT);
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.RF433_tx_INPUT1);
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField(Blockly.Msg.RF433_tx_INPUT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_tx_TOOLTIP);
  }
};

Blockly.Blocks.rf433_init_receiver = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.RF433_init_receiver_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/RF433/rf433_recepteur.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RF433_init_receiver_INPUT)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_init_receiver_TOOLTIP);
  }
};

Blockly.Blocks.rf433_init_transmitter = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.RF433_init_transmitter_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/RF433/rf433_emetteur.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RF433_init_transmitter_INPUT)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_init_transmitter_TOOLTIP);
  }
};

Blockly.Blocks.rf433_define_message = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_define_message_TEXT);
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField(Blockly.Msg.RF433_define_message_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_define_message_TOOLTIP);
  }
};

Blockly.Blocks.rf433_send_message_full = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_send_message_full_TEXT);
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField(Blockly.Msg.RF433_send_message_full_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_send_message_full_TOOLTIP);
  }
};

Blockly.Blocks.rf433_show_message = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_show_message_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_show_message_TOOLTIP);
  }
};

Blockly.Blocks.rf433_send_message = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_send_message_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_send_message_TOOLTIP);
  }
};

Blockly.Blocks.rf433_wait_rx = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_wait_rx_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_wait_rx_TOOLTIP);
  }
};

Blockly.Blocks.rf433_wait_tx = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_wait_tx_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RF433_wait_tx_TOOLTIP);
  }
};

Blockly.Blocks.rf433_reception_message = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_reception_message_TEXT);        
    this.setOutput(true, "Boolean");
    this.setTooltip(Blockly.Msg.RF433_reception_message_TOOLTIP);
  }
};

Blockly.Blocks.rf433_receive_message = {
  init: function() {
    this.setColour(Blockly.Blocks.RF433.HUE);
    this.setHelpUrl(Blockly.Msg.RF433_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF433_receive_message_TEXT);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.RF433_receive_message_TOOLTIP);
  }
};