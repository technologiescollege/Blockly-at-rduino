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
 * @author Sébastien Canet
 */
'use strict';

goog.provide('Blockly.Blocks.otto_');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

//otto block
//https://www.ottodiy.com/

Blockly.Blocks['otto9_home'] = {
  init: function() {
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_plus.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_bend.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_CHOICE), "otto_move_sens");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_moonwalk.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_CHOICE), "otto_dance_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SPEED_CHOICE), "otto_dance_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};
Blockly.Blocks['otto9_do'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_do.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_DO_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_CHOICE), "otto_do_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DO_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_SPEED_CHOICE), "otto_do_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DO_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_DO_SIZE_CHOICE), "otto_do_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_emoji.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_GESTURE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_GESTURE_CHOICE), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_music.png', 48, 48, "*"))
        .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_SOUND_CHOICE), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_detect_distance.png', 48, 48, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#32D900");
    // this.setColour(Blockly.Blocks.otto_1.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getnoise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_detect_noise.png', 48, 48, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#FF5700");
    // this.setColour(Blockly.Blocks.otto_2.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_touchbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/otto/otto_detect_touch.png', 48, 48, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#FF5700");
    // this.setColour(Blockly.Blocks.otto_2.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_mouth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_MOUTH_CHOICE), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#747F8A");
    // this.setColour(Blockly.Blocks.otto_3.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIX_TEXT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField('1')
        .appendField('  2')
        .appendField('  3')
        .appendField('  4')
        .appendField(' 5')
        .appendField('  6')
        .appendField(' 7')
        .appendField('  8');
   Blockly.FieldCheckbox.CHECK_CHAR= '▉'
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel5')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel7');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel11')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel15');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel17')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel23');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel29')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel30')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel31');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel32')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel33')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel34')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel35')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel36')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel37')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel38')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel39');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel40')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel41')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel42')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel43')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel44')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel45')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel46')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel47');
    this.appendDummyInput()
        .appendField('7 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel48')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel49')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel50')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel51')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel52')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel53')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel54')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel55');
    this.appendDummyInput()
        .appendField('8 ')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel56')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel57')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel58')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel59')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel60')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel61')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel62')
        .appendField(new Blockly.FieldCheckbox("FALSE"), 'otto9_matrix_pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#747F8A");
    // this.setColour(Blockly.Blocks.otto_3.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_matrix_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT)
        .appendField(new Blockly.FieldTextInput("HI OTTO"), "input");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#747F8A");
    // this.setColour(Blockly.Blocks.otto_3.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_arms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_ARMS_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.OTTO9_ARMS_CHOICE), "otto9_arms_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#747F8A");
    // this.setColour(Blockly.Blocks.otto_3.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};