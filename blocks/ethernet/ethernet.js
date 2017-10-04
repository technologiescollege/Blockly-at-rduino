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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.ethernet');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['ethernet_begin_dhcp'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_BEGIN_DHCP_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAC_ADDRESS);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_mac_address'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput("DE"),"MAC_ADDRESS_1")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("AD"),"MAC_ADDRESS_2")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("BE"),"MAC_ADDRESS_3")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("EF"),"MAC_ADDRESS_4")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("FE"),"MAC_ADDRESS_5")
      .appendField('-')
      .appendField(new Blockly.FieldTextInput("ED"),"MAC_ADDRESS_6");
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_client_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION')
      .appendField(Blockly.Msg.ETHERNET_BEGIN_TITLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MAC_ADDRESS)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED"),"MAC_ADDRESS");
    this.appendDummyInput()
      .appendField(Blockly.Msg.IP_ADDRESS)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldTextInput("192.168.0.100"),"IP_ADDRESS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_begin_dhcp_server'] = {		// by BZH
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_BEGIN_HELPURL); // a finir
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_BEGIN_DHCP_SERVER_TITLE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ETHERNET_VERSION_1,""],[Blockly.Msg.ETHERNET_VERSION_2,"2"]]), 'VERSION');
    this.appendValueInput("MAC_ADDRESS")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_MAC_ADDRESS);
	this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_PORT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP); // à finir
  }
};

Blockly.Blocks['ethernet_client_for_server'] = { // by BZH
  init: function() {
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_localip'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_LOCALIP_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_LOCALIP_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_available'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_AVAILABLE_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_AVAILABLE_TITLE);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_connected'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECTED_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CONNECTED_TITLE);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_connect'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CONNECT_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CONNECT_TITLE);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .appendField(Blockly.Msg.SERVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PORT)
      .appendField(new Blockly.FieldTextInput("80"),"PORT");
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ETHERNET_CONNECT_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_println'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_stop'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_STOP_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_STOP_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_STOP_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_read'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_READ_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_READ_TITLE);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ETHERNET_READ_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_get_request'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_GET_REQUEST_TITLE);
    this.appendValueInput("URL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SERVER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP);
  }
};

Blockly.Blocks['ethernet_post_request'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL);
    this.setColour(Blockly.Blocks.ethernet.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ETHERNET_POST_REQUEST_TITLE);
    this.appendValueInput("URL")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.URL);
    this.appendValueInput("SERVER")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.SERVER);
    this.appendValueInput("POST_DATA")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ETHERNET_POST_DATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP);
  }
};
