/**
 * Visual Blocks for RFID
 *
 * Copyright 2017 Guillaume Reich.
 * http://greich.fr
 *
 * This work is licensed under a Creative Commons Attribution 4.0 International.
 * You may obtain a copy of the License at
 *
 *   https://creativecommons.org/licenses/by/4.0/
 *
 */

'use strict';

goog.provide('Blockly.Blocks.RFID');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Msg.RFID_HELPURL = 'http://greich.fr'

Blockly.Blocks.RFID_module = {
  init: function() {
  this.setColour(Blockly.Blocks.RFID.HUE);
	this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.RFID_module_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/RFID/module_rfid.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("SDA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_module_INPUT1)
        .setCheck('Number');
	this.appendValueInput("SCK")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_module_INPUT2)
        .setCheck('Number');
	this.appendValueInput("MOSI")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_module_INPUT3)
        .setCheck('Number');
	this.appendValueInput("MISO")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_module_INPUT4)
        .setCheck('Number');
    this.appendValueInput("RST")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_module_INPUT5)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RFID_module_TOOLTIP);
  }
};

Blockly.Blocks.RFID_detection = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
    this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_detection_TEXT)
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.RFID_detection_TOOLTIP);
  }
};

Blockly.Blocks.RFID_reception_cle = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
    this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_reception_cle_TEXT)
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.RFID_reception_cle_TOOLTIP);
  }
};

Blockly.Blocks.RFID_lecture_cle = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
	this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_lecture_cle_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RFID_lecture_cle_TOOLTIP);
  }
};

Blockly.Blocks.RFID_fermeture = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
	this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_fermeture_TEXT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RFID_fermeture_TOOLTIP);
  }
};

Blockly.Blocks.RFID_valeur_cle = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
    this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.RFID_valeur_cle_TEXT)
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.RFID_valeur_cle_TOOLTIP);
  }
};

Blockly.Blocks.RFID_code_acces = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
	this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.RFID_code_acces_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/RFID/badge_rfid.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldInstance('TAG_ID', 'TAG_ID', false, false, false), 'TAG_NAME');
	this.appendValueInput("VAL1")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_code_acces_INPUT1);
	this.appendValueInput("VAL2")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_code_acces_INPUT2);
	this.appendValueInput("VAL3")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_code_acces_INPUT3);
	this.appendValueInput("VAL4")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.RFID_code_acces_INPUT4);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.RFID_code_acces_TOOLTIP);
  }
};

Blockly.Blocks.RFID_acces_autorise = {
  init: function() {
    this.setColour(Blockly.Blocks.RFID.HUE);
    this.setHelpUrl(Blockly.Msg.RFID_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldInstance('TAG_ID', 'TAG_ID', false, false, false), 'TAG_NAME')
		.appendField(Blockly.Msg.RFID_acces_autorise_TEXT);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.RFID_acces_autorise_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.
    var instanceName = this.getFieldValue('TAG_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'TAG_ID', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};