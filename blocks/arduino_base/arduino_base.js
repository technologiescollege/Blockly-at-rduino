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
        this.setColour(230);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL);
        this.appendDummyInput("")
                .appendTitle("Setup")
        this.appendStatementInput('DO')
                .appendTitle(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
        this.setTooltip("Exécuté seulement dans le 'Setup'");
    }
};

Blockly.Blocks.base_delay = {
  init: function() {
    this.setColour(230);
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
    this.setColour(230);
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

Blockly.Blocks.inout_buildin_led = {
   init: function() {
     this.setColour(230);
     this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL);
     this.appendDummyInput("")
	     .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
	     .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
     this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP);
   }
};

Blockly.Blocks.inout_digital_write = {
  init: function() {
    this.setColour(230);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2)
      	.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
  }
};

Blockly.Blocks.inout_digital_read = {
  init: function() {
    this.setColour(230);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setInputsInline(true);
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks.inout_PWM_write = {
  init: function() {
    this.setColour(230);
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

Blockly.Blocks.inout_analog_write = {
  init: function() {
    this.setColour(230);
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
    this.setColour(230);
    this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.appendValueInput("NUM", 'Number')
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
        .setCheck('Number');
    this.appendValueInput("TPS", 'Number')
        .appendField(Blockly.Msg.ARDUINO_TONE_INPUT3)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
  }
};

Blockly.Blocks.notone = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
  }
};

Blockly.Blocks.inout_analog_read = {
  init: function() {
    this.setColour(230);
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
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'BOOL');
    this.setOutput(true,'Boolean');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

//servo block
//http://www.seeedstudio.com/depot/emax-9g-es08a-high-sensitive-mini-servo-p-760.html?cPath=170_171
Blockly.Blocks.servo_move = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/arduino_base/servomoteur.jpg', 64, 64));
    /* old version with Digital PWM correction
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN'); */
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2);
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP);
  }
};

Blockly.Blocks.servo_read_degrees = {
  init: function() {
    this.setColour(190);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/arduino_base/servomoteur.jpg', 64, 64));
/* old version with Digital PWM correction
 	this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN'); */
	this.appendValueInput("PIN", 'Number')
        .setCheck('Number')
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2);    
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP);
  }
};

Blockly.Blocks.serial_print = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
    this.appendValueInput("CONTENT", String)
        .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
  }
};
