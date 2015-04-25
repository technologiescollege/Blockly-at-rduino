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

goog.provide('Blockly.Blocks.motors');

goog.require('Blockly.Blocks');




Blockly.Blocks['zumo_motors_FN'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FNs'] = {
   init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FR'] = {
 init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FRs'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
    this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
	this.setInputsInline(true) ;   
  this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FL'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FLs'] = {
init: function() {
    this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
     this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FBs'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
     this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TOOLTIP);
  }
};

Blockly.Blocks['zumo_motors_FB'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TOOLTIP);
  }
};

Blockly.Blocks['ardu_motor'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TITLE )
        .appendField(new Blockly.FieldImage("https://cdn.sparkfun.com//assets/parts/3/8/4/9/09815-01.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP);
  }
};

Blockly.Blocks['ardu_motor_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_S_TITLE )
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION")
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://cdn.sparkfun.com//assets/parts/3/8/4/9/09815-01.jpg", 40,40));
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP);
  }
};

Blockly.Blocks['arduino_s'] = {
   init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION")
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://arduino.cc/en/uploads/Main/MotorShield_R3_Front.jpg.jpg", 40,40));
   this.setInputsInline(true) ; 
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP);
  }
};

Blockly.Blocks['pololu_drv8835_s'] = {
  init: function() {
	this.setHelpUrl('https://www.pololu.com/product/2511/resources');
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J5705.1200.jpg", 64, 64))
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TOOLTIP);
  }
};


Blockly.Blocks['radio_shack_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TITLE )
        .appendField(new Blockly.FieldImage("http://demandware.edgesuite.net/sits_pod26/dw/image/v2/AASR_PRD/on/demandware.static/Sites-radioshack-Site/Sites-master-catalog/default/v1427306427938/images/02770168_00.jpg", 64, 64))
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TOOLTIP);
  }
};

Blockly.Blocks['dfrobot_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL);
    this.setColour(190);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE)
        .appendField(new Blockly.FieldImage("http://image.dfrobot.com/image/cache/data/DRI0009/53AU4096-900x600.jpg", 64, 64))
	this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
   this.setInputsInline(true) ;
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP);
  }
};

Blockly.Blocks.generic_motor = {
  init: function() {
    this.setColour(190);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_TITLE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION")
	//this.setInputsInline(true);
   this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_A)
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_B)
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_A)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN-AD")
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_B)
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN-BD")
	this.setInputsInline(false);
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("../../media/fourpin_range.jpg", 40, 40))
       .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_A)
       .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN-AS")
	   .setAlign(Blockly.ALIGN_RIGHT)
	    .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_B)
       .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN-BS")
	   .setAlign(Blockly.ALIGN_RIGHT)
	//   this.setInputsInline(false);
	//	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Generic motor driver');
  }
};

Blockly.Blocks['zumo_motors_FUs'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL);
    this.setColour(190);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ZUMO_FUS_TITLE)
        .appendField(new Blockly.FieldImage("https://a.pololu-files.com/picture/0J4110.250.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
       this.appendValueInput("SPEEDA", 'Number')
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDL);
	this.appendValueInput("SPEEDB", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_SPEEDR);
	this.appendValueInput('FLIPL','Boolean')
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