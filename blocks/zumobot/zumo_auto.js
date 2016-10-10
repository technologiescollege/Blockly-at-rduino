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

goog.provide('Blockly.Blocks.Zumo_auto');

goog.require('Blockly.Blocks');

Blockly.Blocks['Zumo_line_follower'] = {
  init: function() {
    this.setColour("#00138b");
    this.appendDummyInput()
        .appendField("Suiveur de ligne");
    this.setTooltip('se calibre en cherchant une ligne noire, puis se cale dessus');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/7.d');
 }
};

Blockly.Blocks['Zumo_BorderDetect'] = {
  init: function() {
    this.setColour("#00138b");
    this.appendDummyInput()
        .appendField("détecteur de bord");
    this.setTooltip("détecte si le bord d'une zone est atteint, pour ne pas en sortir");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setHelpUrl('https://www.pololu.com/docs/0J57/7.b');
 }
};