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

goog.provide('Blockly.Blocks.arduino_base');

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

Blockly.Blocks.base_begin = {
    init: function() {
        this.setColour(Blockly.Blocks.arduino_base.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_BASE_BEGIN);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_BEGIN_TOOLTIP);
        this.setHelpUrl("")
    }
};

Blockly.Blocks.base_setup = {
  init: function () {
        this.setColour(Blockly.Blocks.arduino_base.HUE);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARDUINO_BASE_SETUP);
        this.appendStatementInput('DO');
        this.setTooltip("Exécuté seulement dans le 'Setup'");
    },
	/** @return {!boolean} True if the block instance is in the workspace. */
	getArduinoLoopsInstance: function() {
    return true;
	}
};

Blockly.Blocks.base_loop = {
  init: function () {
        this.setColour(Blockly.Blocks.arduino_base.HUE);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL);
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARDUINO_BASE_LOOP);
		this.appendStatementInput('LOOP');
		this.setInputsInline(false);
        this.setTooltip("Exécuté seulement dans le 'Loop'");
		this.contextMenu = false;
    },
	/** @return {!boolean} True if the block instance is in the workspace. */
	getArduinoLoopsInstance: function() {
    return true;
	}
};

Blockly.Blocks.base_setup_loop = {
  init: function () {
        this.setColour(Blockly.Blocks.arduino_base.HUE);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARDUINO_BASE_SETUP);
        this.appendStatementInput('DO');
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARDUINO_BASE_LOOP);
		this.appendStatementInput('LOOP');
		this.setInputsInline(false);
        this.setTooltip("Définis le 'setup()' et le 'loop()'");
		this.contextMenu = false;
    },
	/** @return {!boolean} True if the block instance is in the workspace. */
	getArduinoLoopsInstance: function() {
    return true;
	}
};

Blockly.Blocks.base_define_bloc = {
  init: function () {
        this.setColour(Blockly.Blocks.arduino_base.HUE);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DEFINE_HELPURL);
        this.appendDummyInput("")
            .appendField(Blockly.Msg.ARDUINO_BASE_DEFINE);
        this.appendStatementInput('DO')
            .appendField(Blockly.LANG_CONTROLS_REPEAT_INPUT_DO);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_DEFINE_TOOLTIP);
    }
};

Blockly.Blocks.base_define = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_HELPURL);
    this.setColour(Blockly.Blocks.arduino_base.HUE);
	this.appendValueInput("TEXT1", 'Null')
        .setAlign(Blockly.ALIGN_RIGHT)
     	.appendField(Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_INPUT1);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_INPUT2)
        .appendField(new Blockly.FieldTextInput(''), 'TEXT2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_TOOLTIP);
  }
};

Blockly.Blocks.base_code = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_BASE_CODE)
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  }
};

Blockly.Blocks.base_comment = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_COMMENT_HELPURL);
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_BASE_COMMENT_TEXT)
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  }
};

Blockly.Blocks.base_end = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_BASE_END);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.END_TOOLTIP);
  }
};

Blockly.Blocks.current_date = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.appendDummyInput()
        .appendField('date:')
        .appendField(new Blockly.FieldDate(), 'FIELDNAME');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP);
  }
};

Blockly.Blocks.millis = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP);
  }
};

Blockly.Blocks.millis_sec = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL);
    this.appendDummyInput("")
         .appendField(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_SEC);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP);
  }
};

Blockly.Blocks.var_random = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
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
    this.setColour(Blockly.Blocks.arduino_base.HUE);
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

Blockly.Blocks.base_delay_sec = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL);
    this.appendValueInput("DELAY_TIME", 'Number')
        .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME_SEC)
        .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
  }
};

Blockly.Blocks.base_map = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
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
    this.setColour(Blockly.Blocks.arduino_base.HUE);
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

//@pbra 20160607
Blockly.Blocks.inout_digital_mode = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_HELPURL);
	this.appendValueInput("PIN", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.setCheck('Number')
        .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT1);
	this.appendValueInput("PINMODE", 'Null')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP);
  }
};

// @pbra dropdown pinmode
Blockly.Blocks['pinmode'] = {
  init: function() {
    this.setColour(Blockly.Blocks.arduino_base.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_HELPURL);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_DROPDOWN), 'PINMODE');
    this.setOutput(true,'Null');
    this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP);
  }
};

Blockly.Blocks['biblio_include'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_BASE_INCLUDE_LIB_TEXT)
        .appendField(new Blockly.FieldTextInput(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_NAME), "File")
        .appendField(".h");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_INCLUDE_LIB_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_HELPURL);
  }
};

// @BZH 10072018
Blockly.Blocks.include_file = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TEXT)
        .appendField(new Blockly.FieldTextInput(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_NAME), "File2")
        .appendField(".h");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.arduino_base.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_HELPURL);
  }
};

//@JP Fontaine 02092017
Blockly.Blocks.tempo_no_delay = {
	init: function() {
		this.appendValueInput("DELAY_TIME")
			.setCheck("Number")
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO1);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(Blockly.Msg.ARDUINO_BASE_TEMPO_TIME), "unite")
			.appendField(Blockly.Msg.ARDUINO_BASE_TEMPO2);
		this.appendStatementInput("branche");
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(Blockly.Blocks.arduino_base.HUE);
		this.setTooltip(Blockly.Msg.ARDUINO_BASE_TEMPO_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_TEMPO_HELPURL);
	}
};

Blockly.Blocks.base_toggle = {
    init: function() {
		this.setColour(Blockly.Blocks.arduino_base.HUE);
        this.appendValueInput("PIN", "Number")
			.setCheck("Number")
			.appendField(Blockly.Msg.ARDUINO_BASE_TOGGLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
		this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_TEMPO_HELPURL);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_TOGGLE_TOOLTIP);
    }
};
