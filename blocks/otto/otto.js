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

goog.provide('Blockly.Blocks.otto');

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
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"], ["backward", "BACKWARD"], ["left", "LEFT"], ["right", "RIGHT"], ["bend", "BEND"], ["shake leg", "SHAKE"]]), "otto_move_sens");
    this.appendDummyInput()
        .appendField("speed")
        .appendField(new Blockly.FieldDropdown([["slow", "600"], ["normal", "800"], ["fast", "1000"], ["very fast", "1200"], ["luminic", "1400"]]), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_dance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dance")
        .appendField(new Blockly.FieldDropdown([["moonwalker", "moonwalker"], ["crusaito", "crusaito"], ["flapping", "flapping"], ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]]), "otto_dance_movement");
    this.appendDummyInput()
        .appendField("speed")
        .appendField(new Blockly.FieldDropdown([["slow", "600"], ["normal", "800"], ["fast", "1000"], ["very fast", "1200"], ["luminic", "1400"]]), "otto_dance_speed");
    this.appendDummyInput()
        .appendField("size")
        .appendField(new Blockly.FieldDropdown([["normal", "NORMAL"], ["little", "LITTLE"], ["big", "BIG"]]), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gesture")
        .appendField(new Blockly.FieldDropdown([["happy", "OttoHappy"], ["super happy", "OttoSuperHappy"], ["sad", "OttoSad"], ["sleeping", "OttoSleeping"], ["fart", "OttoFart"], ["confused", "OttoConfused"], ["fretful", "OttoFretful"], ["love", "OttoLove"], ["angry", "OttoAngry"], ["magic", "OttoMagic"], ["wave", "OttoWave"], ["victory", "OttoVictory"], ["fail", "OttoFail"]]), "otto_gesture");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sound")
        .appendField(new Blockly.FieldDropdown([["cuddly", "S_cuddly"], ["OhOoh", "S_OhOoh"], ["OhOoh2", "S_OhOoh2"], ["surprise", "S_surprise"], ["button pushed", "S_buttonPushed"], ["mode1", "S_mode1"], ["mode2", "S_mode2"], ["mode3", "S_mode3"], ["sleeping", "S_sleeping"], ["fart1", "S_fart1"], ["fart2", "S_fart2"], ["fart3", "S_fart3"], ["happy", "S_happy"], ["happy short", "S_happy_short"], ["super happy", "S_superHappy"], ["sad", "S_sad"], ["confused", "S_confused"], ["connection", "S_connection"], ["disconnection", "S_disconnection"]]), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("distance")
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_getnoise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("noise")
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_touchbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("touch")
        .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABA9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzNEFBOEU3ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNEFBOEU2ODUyRTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YmZlYzFmZjgtZjI0MS00MTdhLWJmYTQtMjZiOTdkYTJkZGI2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTJhODNmYmQtY2NkNC0xMTc4LTg4N2EtOWQ5MDZmZTFhNmQ0Ii8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uc19zb2NpYWw8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnRpdGxlPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlS4AF8AAADxSURBVHjatFbbDcMgDDRV/8sGzQjdoIySbtAROkpHyAiMwAjJBjABhcpIfBCwE0A6BSFzhx+YAACoABvgOyNyKoGTG4wZDk6ccCXaHSKeMbRDBGbv//sWiv31SGCFEDp8niTb5EYlSQbnOeGGHjwQ1SLZc+8bIGM4MCQy4B0J01q2vnBzoHOSFvAwLAHFIJ/ZVcQ8va4JXAo52Xpe5ZLAnclhWwYl1yZGiBQ3RGkTaQSRmINXamxUD1hlip6s3F7Uq1SrXVMSyGXjwapeEpNEsOd8EFNGbs62a7tDYihPbaubDrlo3QXcQH4Ho39bfgIMAMz8AJn0V4bRAAAAAElFTkSuQmCC", 24, 24, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

Blockly.Blocks['otto9_mouth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouth")
        .appendField(new Blockly.FieldDropdown([["happy", "happyOpen"], ["smile", "smile"], ["heart", "heart"], ["small surprise", "smallSurprise"], ["big surprise", "bigSurprise"], ["confused", "confused"], ["zero", "zero"], ["one", "one"], ["two", "two"], ["three", "three"], ["four", "four"], ["x", "xMouth"], ["ok", "okMouth"], ["thunder", "thunder"], ["line", "lineMouth"], ["little Uuh", "littleUuh, i"], ["dreamMouth0", "dreamMouth, 0"], ["dreamMouth1", "dreamMouth, 1"], ["dreamMouth2", "dreamMouth, 2"]]), "otto9_mouth_choice");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.otto.HUE);
    this.setTooltip(Blockly.Msg.OTTO9_HOME);
    this.setHelpUrl(Blockly.Msg.OTTO9_HOME_URL);
  }
};

