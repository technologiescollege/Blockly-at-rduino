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

goog.provide('Blockly.Blocks.otto_');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

//otto block
//https://www.ottodiy.com/

Blockly.Blocks['otto9_home'] = {
  init: function() {
    this.appendDummyInput("")
        .appendField(Blockly.Msg.OTTO9_HOME_TEXT);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_TEXT)
        .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backward", "BACKWARD"], ["left", "LEFT"], ["right", "RIGHT"], ["bend", "BEND"], ["shake leg", "SHAKE"]]), "otto_move_sens");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOVE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown([["slow", "600"], ["normal", "800"], ["fast", "1000"], ["very fast", "1200"], ["luminic", "1400"]]), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_TEXT)
        .appendField(new Blockly.FieldDropdown([["moonwalker", "moonwalker"], ["crusaito", "crusaito"], ["flapping", "flapping"], ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]]), "otto_dance_movement");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SPEED_TEXT)
        .appendField(new Blockly.FieldDropdown([["slow", "600"], ["normal", "800"], ["fast", "1000"], ["very fast", "1200"], ["luminic", "1400"]]), "otto_dance_speed");
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_DANCE_SIZE_TEXT)
        .appendField(new Blockly.FieldDropdown([["normal", "NORMAL"], ["little", "LITTLE"], ["big", "BIG"]]), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GESTURE_TEXT)
        .appendField(new Blockly.FieldDropdown([["happy", "OttoHappy"], ["super happy", "OttoSuperHappy"], ["sad", "OttoSad"], ["sleeping", "OttoSleeping"], ["fart", "OttoFart"], ["confused", "OttoConfused"], ["fretful", "OttoFretful"], ["love", "OttoLove"], ["angry", "OttoAngry"], ["magic", "OttoMagic"], ["wave", "OttoWave"], ["victory", "OttoVictory"], ["fail", "OttoFail"]]), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_SOUND_TEXT)
        .appendField(new Blockly.FieldDropdown([["cuddly", "S_cuddly"], ["OhOoh", "S_OhOoh"], ["OhOoh2", "S_OhOoh2"], ["surprise", "S_surprise"], ["button pushed", "S_buttonPushed"], ["mode1", "S_mode1"], ["mode2", "S_mode2"], ["mode3", "S_mode3"], ["sleeping", "S_sleeping"], ["fart1", "S_fart1"], ["fart2", "S_fart2"], ["fart3", "S_fart3"], ["happy", "S_happy"], ["happy short", "S_happy_short"], ["super happy", "S_superHappy"], ["sad", "S_sad"], ["confused", "S_confused"], ["connection", "S_connection"], ["disconnection", "S_disconnection"]]), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETDISTANCE_TEXT)
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getnoise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETNOISE_TEXT)
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_touchbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_GETTOUCH_TEXT)
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_mouth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MOUTH_TEXT)
        .appendField(new Blockly.FieldDropdown([["happy", "happyOpen"], ["smile", "smile"], ["heart", "heart"], ["small surprise", "smallSurprise"], ["big surprise", "bigSurprise"], ["confused", "confused"], ["zero", "zero"], ["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"], ["x", "xMouth"], ["ok", "okMouth"], ["thunder", "thunder"], ["line", "lineMouth"], ["little Uuh", "littleUuh, i"], ["dreamMouth0", "dreamMouth, 0"], ["dreamMouth1", "dreamMouth, 1"], ["dreamMouth2", "dreamMouth, 2"]]), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIX_TEXT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('    1')
        .appendField('   2')
        .appendField('    3')
        .appendField('   4')
        .appendField('    5')
        .appendField('   6')
        .appendField('    7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel0')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel1')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel2')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel3')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel4')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel5')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel6')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel8')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel9')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel10')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel11')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel12')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel13')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel14')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel16')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel17')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel18')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel19')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel20')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel21')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel22')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel24')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel25')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel26')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel27')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel28')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel29')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel30')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel32')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel33')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel34')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel35')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel36')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel37')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel38')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel40')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel41')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel42')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel43')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel44')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel45')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel46')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel48')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel49')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel50')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel51')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel52')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel53')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel54')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel55');
    this.appendDummyInput()
        .appendField('7 ')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel56')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel57')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel58')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel59')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel60')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel61')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel62')
        .appendField(new Blockly.FieldColour('rgb(255, 255, 255)'), 'otto9_matrix_pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_matrix_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.OTTO9_MATRIXTEXT_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.multifunction.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

