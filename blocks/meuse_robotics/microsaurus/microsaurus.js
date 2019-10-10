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

goog.provide('Blockly.Blocks.microsaurus');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Msg.IR_HELPURL = 'http://greich.fr/v1/blog/post.php?id=13';

Blockly.Blocks['ms_IR_receiver'] = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.ms_IR_init_TEXT)
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/IR/ir-receiver.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.IR_init_INPUT)
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

Blockly.Blocks['ms_IR_checker'] = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.ms_IR_check_TEXT)
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/IR/ir-receiver.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

Blockly.Blocks['ms_IR_reset_flag'] = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
	this.setHelpUrl(Blockly.Msg.IR_HELPURL);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
        .appendField(Blockly.Msg.ms_IR_reset_TEXT)
        //.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/IR/ir-receiver.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

Blockly.Blocks['ms_IR_recv_flag'] = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
    this.setHelpUrl(Blockly.Msg.IR_HELPURL);
  this.appendDummyInput()
    .appendField(Blockly.Msg.ms_IR_flag_TEXT)
    this.setOutput(true, 'Boolean');
    this.setTooltip("");
  }
};

Blockly.Blocks['ms_IR_get_code'] = {
  init: function() {
    this.setColour(Blockly.Blocks.infrarouge.HUE);
    this.setHelpUrl(Blockly.Msg.IR_HELPURL);
  this.appendDummyInput()
    .appendField(Blockly.Msg.ms_IR_reception_code_TEXT)
    this.setOutput(true, 'Number');
    this.setTooltip("");
  }
};

Blockly.Blocks['ms_init_wav'] = {
  init: function() {
    this.appendValueInput("sound_name1")
        .setCheck("String")
        .appendField(Blockly.Msg.ms_INIT_WAV);
    this.appendValueInput("sound_name2")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_INIT_WAV_SOUND2);
    this.appendValueInput("sound_name3")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_INIT_WAV_SOUND3);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_INIT_WAV_AUDPIN)
        .appendField(new Blockly.FieldNumber(0, 0, 99), "PIN")
        .appendField(Blockly.Msg.ms_INIT_WAV_ENBLPIN)
        .appendField(new Blockly.FieldNumber(0, 0, 99), "ENBL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_play_wav'] = {
  init: function() {
    this.appendValueInput("sound_name")
        .setCheck("String")
        .appendField(Blockly.Msg.ms_PLAY_WAV);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.arduino_io.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_action_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_ACTION_STOP);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_FRONT)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'front_leg');
    this.appendValueInput("f_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_REAR)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'rear_leg');
    this.appendValueInput("r_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_action_fwrd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_ACTION_FWRD);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_FRONT)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'front_leg');
    this.appendValueInput("f_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_REAR)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'rear_leg');
    this.appendValueInput("r_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_action_bwrd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_ACTION_BWRD);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_FRONT)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'front_leg');
    this.appendValueInput("f_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_REAR)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'rear_leg');
    this.appendValueInput("r_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_action_ltrn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_ACTION_LTRN);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_FRONT)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'front_leg');
    this.appendValueInput("f_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_REAR)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'rear_leg');
    this.appendValueInput("r_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ms_action_rtrn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ms_ACTION_RTRN);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_FRONT)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'front_leg');
    this.appendValueInput("f_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ms_ACTION_REAR)    
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'rear_leg');
    this.appendValueInput("r_offset")
        //.setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ms_ACTION_OFFSET);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.servo.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};