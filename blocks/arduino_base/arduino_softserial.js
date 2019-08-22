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

goog.provide('Blockly.Blocks.arduino_softserial');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');


Blockly.Blocks['soft_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
	//only arduino mega admit multi softserial connection
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME');
	} else {
		this.appendDummyInput()
			.appendField(Blockly.Msg.SSERIAL_Init)
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME');
		};
    this.appendValueInput("PIN1")
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.SSERIAL_RX);
    this.appendValueInput("PIN2")
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.SSERIAL_TX);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.SSERIAL_SPEED)
     	.appendField(new Blockly.FieldDropdown(profile.defaultBoard.serial), "SPEED");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('A call to SoftwareSerial(rxPin, txPin) creates a new SoftwareSerial object');
  }
};

Blockly.Blocks['soft_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_Read);
	} else {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_Read);
		};
    this.setInputsInline(false);
    this.setOutput(true, 'String');
    this.setTooltip('');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['soft_readStringUntil'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_HELPURL);
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME');
	} else {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME');
		};
    this.appendValueInput("CONTENT")
		.setCheck('String')
        .appendField(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_CONTENT);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['soft_print'] = {
  init: function() {
	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendValueInput("CONTENT")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME')
			.setCheck('String')
			.appendField(Blockly.Msg.SSERIAL_Print);
	} else {
		this.appendValueInput("CONTENT")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME')
			.setCheck('String')
			.appendField(Blockly.Msg.SSERIAL_Print);
		};
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['soft_write'] = {
  init: function() {
	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendValueInput("CONTENT")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME')
			.setCheck('String')
			.appendField(Blockly.Msg.SSERIAL_Write);
	} else {
		this.appendValueInput("CONTENT")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME')
			.setCheck('String')
			.appendField(Blockly.Msg.SSERIAL_Write);
		};
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['soft_available'] = {
  init: function() {
	this.setHelpUrl('https://www.arduino.cc/en/Reference/SoftwareSerial');
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput("")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_Avai);
	} else {
		this.appendDummyInput("")
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.SSERIAL_Avai);
		};
    this.setInputsInline(false);
    this.setOutput(true, 'Boolean');
    this.setTooltip('');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['soft_flush'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_softserial.HUE);
	this.setHelpUrl('http://arduino.cc/en/Serial/Flush');
	if (window.profile.defaultBoard != window.profile["mega"]) {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, true, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.Serial_flush);
	} else {
		this.appendDummyInput()
			.appendField(
				new Blockly.FieldInstance('SoftSerial',
										  Blockly.Msg.SSERIAL_DEFAULT_NAME,
										  false, false, false),
				'SOFTSERIAL_NAME')
			.appendField(Blockly.Msg.Serial_flush);
		};
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Waits for the transmission of outgoing serial data to complete.');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SOFTSERIAL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'SoftSerial', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.SOFTSERIAL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};