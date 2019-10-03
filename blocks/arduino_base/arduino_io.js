/**
 * Visual Blocks Language
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

goog.provide('Blockly.Blocks.arduino_io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

Blockly.Blocks.inout_buildin_led = {
   init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL);
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP);
   }
};

Blockly.Blocks.inout_pulsein = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl('http://arduino.cc/en/Reference/pulseIn');
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_PULSEIN);
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_STAT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds. Gives up and returns 0 if no pulse starts within a specified time out.');
  }
};

Blockly.Blocks.inout_pulsein_timeout = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl('http://arduino.cc/en/Reference/pulseIn');
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_PULSEIN);
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_STAT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
	this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_PULSEIN_TIMEOUT);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('Reads a pulse (either HIGH or LOW) on a pin. For example, if value is HIGH, pulseIn() waits for the pin to go HIGH, starts timing, then waits for the pin to go LOW and stops timing. Returns the length of the pulse in microseconds. Gives up and returns 0 if no pulse starts within a specified time out.');
  }
};

Blockly.Blocks.inout_digital_write_validator = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDualValidator), 'PIN');
	this.appendDummyInput()
      	.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
	this.appendValueInput("PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1);
    this.setInputsInline(true);
	this.appendValueInput("STAT")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read_check = {
    init: function() {
		this.setColour(Blockly.Blocks.arduino_io.HUE);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
        this.appendValueInput("PIN", "Number")
			.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        this.appendDummyInput()
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(new Blockly.FieldCheckbox("FALSE"), "pullup")
			.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP);
        this.setInputsInline(false);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP_TOOLTIP);
    }
};

Blockly.Blocks.inout_digital_read_validator = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_button_wait_il'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.appendDummyInput()
        .appendField("1 time wait - push")
        //.appendField(new Blockly.FieldImage("http://", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("PIN#")
        .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setTooltip('1 time wait button in setup) - INPUT & wait for HIGH');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('http://arduino.cc/en/tutorial/button');
 }
};

Blockly.Blocks['inout_button_wait_iph'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.appendDummyInput()
        .appendField("1 Time wait - pull")
        //.appendField(new Blockly.FieldImage("http://", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("PIN#")
        .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setTooltip('1 time wait button (in setup) - INPUT_PULLUP & wait for LOW)');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/5');
 }
};

Blockly.Blocks.inout_PWM_write_validator = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN');
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_PWM_write = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_write = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_write_validator = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN');
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.tone = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
        .setCheck('Number');
    this.appendValueInput("TPS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
  }
};

Blockly.Blocks.tone_notime = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
  this.appendValueInput("PIN")
    .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
  }
};

Blockly.Blocks.notone = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read_validator = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_onoff = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'BOOL');
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks.inout_angle = {
  init: function() {
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANGLE)
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.arduino_io.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANGLE_TOOLTIP);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANGLE_HELPURL);
  }
};

Blockly.Blocks.inout_attachInterrupt = {
  init: function() {
	this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/AttachInterrupt');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.LKL_ATTACHINTERRUPT_PIN)
        .appendField(new Blockly.FieldDropdown(profile.defaultBoard.interrupt), 'PIN');
    this.appendDummyInput("")
      	.appendField(Blockly.Msg.LKL_MODE)
      	.appendField(new Blockly.FieldDropdown(Blockly.Msg.LKL_DROPDOWN), "mode");
	this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DO);
    this.setInputsInline(true);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
	this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.inout_detachInterrupt = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_io.HUE);
	this.setHelpUrl('https://www.arduino.cc/en/Reference/DetachInterrupt');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.LKL_DETACHINTERRUPT_PIN)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinInterruptValidator), 'PIN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT);
  }
};

Blockly.Blocks.inout_pullup = {
   init: function() {
   this.setColour(Blockly.Blocks.arduino_io.HUE);
   this.setHelpUrl("https://www.arduino.cc/en/Tutorial/DigitalPins");
   this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("valeur de la broche");
    this.setOutput(true, 'Boolean');
    this.setTooltip("");
    }
};