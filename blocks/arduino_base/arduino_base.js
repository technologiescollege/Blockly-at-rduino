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

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

Blockly.Blocks.base_setup = {
  init: function () {
        this.setColour("#00979D");
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARDUINO_BASE_SETUP);
        this.appendStatementInput('DO')
            .appendField(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
        this.setTooltip("Exécuté seulement dans le 'Setup'");
    }
};

Blockly.Blocks.base_const = {
  init: function () {
        this.setColour("#00979D");
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL);
        this.appendDummyInput("")
            .appendField("Constantes");
        this.appendStatementInput('DO')
            .appendField(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
        this.setTooltip("Définition de constantes");
    }
};

Blockly.Blocks.base_code = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour("#00979D");
    this.appendDummyInput()
        .appendField("Code")
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  }
};

Blockly.Blocks.millis = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL);
    this.appendDummyInput("")
         .appendField(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP);
  }
};

Blockly.Blocks.var_random = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl("");
    this.appendValueInput("rand_min")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_BETWEEN);
    this.appendValueInput("rand_max")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_BETWEEN_AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip('');
  }
};

Blockly.Blocks.base_delay = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
  }
};

Blockly.Blocks.base_map = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_MAP_HELPURL);
    this.appendValueInput("NUM", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_MAP_NUM)
        .setCheck('Number');
    this.appendValueInput("DMAX", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_MAP_DMAX)
        .setCheck('Number');
    this.appendDummyInput("")
	    .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP);
  }
};

Blockly.Blocks.various_constrain = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_CONSTRAIN_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_CONSTRAIN);
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_CONSTRAIN_X);
    this.appendValueInput("a")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_CONSTRAIN_A);
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARDUINO_CONSTRAIN_B);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip(Blockly.Msg.ARDUINO_CONSTRAIN_TOOLTIP);
  }
};

Blockly.Blocks.inout_buildin_led = {
   init: function() {
    this.setColour("#00979D");
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
    this.setColour("#00979D");
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
    this.setColour("#00979D");
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1);
    this.setInputsInline(true);
	this.appendValueInput("STAT", 'Boolean')
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
    this.setOutput(true, 'null');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read_validator = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_PWM_write_validator = {
  init: function() {
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN');
    this.appendValueInput("NUM", 'Number')
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1);
    this.appendValueInput("NUM", 'Number')
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1);
    this.appendValueInput("NUM", 'Number')
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.appendValueInput("NUM", 'Number')
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
    this.setColour("#00979D");
    this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
    this.appendValueInput("NUM", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
        .setCheck('Number');
    this.appendValueInput("TPS", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
  }
};

Blockly.Blocks.notone = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read_validator = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['inout_onoff'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'BOOL');
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks.inout_angle = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('https://developers.google.com/blockly/custom-blocks/defining-blocks#appendfield');
    this.appendDummyInput("")
        .appendField("angle")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setOutput(true, "Number");
    this.setTooltip('angle °');
  }
};

Blockly.Blocks.inout_angle_maths = {
  init: function() {
    this.setColour("#5CB712");
	this.setHelpUrl('https://developers.google.com/blockly/custom-blocks/defining-blocks#appendfield');
    this.appendDummyInput("")
        .appendField("angle")
        .appendField(new Blockly.FieldAngle("90"), "ANGLE");
    this.setOutput(true, "Number");
    this.setTooltip('angle °');
  }
};


Blockly.Blocks.inout_attachInterrupt = {
  init: function() {
	this.setColour("#00979D");
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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT);
  }
};

Blockly.Blocks.inout_detachInterrupt = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('https://www.arduino.cc/en/Reference/DetachInterrupt');
	this.appendDummyInput("")
        .appendField(Blockly.Msg.LKL_DETACHINTERRUPT_PIN)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinInterruptValidator), 'PIN');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT);
  }
};
