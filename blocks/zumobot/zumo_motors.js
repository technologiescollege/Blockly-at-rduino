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
 * @fileoverview Helper functions for generating motor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

goog.provide('Blockly.Blocks.Zumo_motors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['zumo_motors_FN'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FNs'] = {
   init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FR'] = {
 init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FRs'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()    
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
	this.setInputsInline(true) ;   
  this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FL'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FLs'] = {
init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
     this.appendDummyInput()    
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FBs'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
     this.appendDummyInput()    
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FB'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FUs'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(Blockly.Blocks.Zumo_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FUS_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J4110.250.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.appendValueInput("SPEEDA")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
	this.appendValueInput('FLIPL')
		.appendField('Flip left motor')
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Boolean');
    this.appendValueInput('FLIPR')
		.appendField('Flip right motor')
		.setAlign(Blockly.ALIGN_RIGHT)
        .setCheck('Boolean');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FUS_TOOLTIP);
  }
};