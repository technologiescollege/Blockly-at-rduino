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

goog.provide('Blockly.Blocks.robots_motors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['ardu_motor'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL);
    this.setColour(Blockly.Blocks.robots_motors.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TITLE )
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/09815-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ROBOTS_MOTORS_STOP, "stop"], [Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward"], [Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right"], [Blockly.Msg.ROBOTS_MOTORS_LEFT, "left"], [Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP);
  }
};

Blockly.Blocks['ardu_motor_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL);
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_S_TITLE )
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/09815-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP);
  }
};

Blockly.Blocks['arduino_s'] = {
   init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL);
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.setInputsInline(false) ; 
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE)
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/MotorShield_R3_Front.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP);
  }
};

Blockly.Blocks['pololu_drv8835_s'] = {
  init: function() {
	this.setHelpUrl('https://www.pololu.com/product/2511/resources');
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/0J5705.1200.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TOOLTIP);
  }
};


Blockly.Blocks['radio_shack_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_HELPURL);
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TITLE )
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/02770168_00.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TOOLTIP);
  }
};

Blockly.Blocks['dfrobot_s'] = {
  init: function() {
	this.setHelpUrl(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL);
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.setInputsInline(false) ; 
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robots/53AU4096-900x600.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
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
    this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP);
  }
};

Blockly.Blocks['generic_motor_s'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_S_TITLE)
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
	//this.setInputsInline(true);
   this.appendValueInput("SPEEDA")
       .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_A);
	this.appendValueInput("SPEEDB")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_B);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_A)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-AD')
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_B)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-BD');
	this.setInputsInline(false);
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("../../media/fourpin_range.jpg", 40, 40))
       .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_A)
       .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN-AS')
	   .setAlign(Blockly.ALIGN_RIGHT)
	   .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_B)
       .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN-BS')
	   .setAlign(Blockly.ALIGN_RIGHT);
	//   this.setInputsInline(false);
	//	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Generic motor driver');
  }
};

//@pbra 20160613
Blockly.Blocks['l298n_motor_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_INIT_TITLE)
		.appendField(new Blockly.FieldImage("blocks/robots/l298n.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_ID)
        .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_EN)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinPWMValidator), 'PIN-EN')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN1)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN1')
		.appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN2)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN2')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_L298N_INIT_TOOLTIP);
  }
};


//@pbra 20160613
Blockly.Blocks['l298n_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_TITLE)
		.appendField(new Blockly.FieldImage("blocks/robots/l298n.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_L298N_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_L298N_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_L298N_BACKWARD, "backward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_L298N_BRAKE, "brake" ] ]),
				"DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_ID)
        .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_SPEED);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.ROBOTS_MOTORS_L298N_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.
    var instanceName = this.getFieldValue('L298_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'L298_ID', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['generic_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robots_motors.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_TITLE)
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.ROBOTS_MOTORS_STOP, "stop" ],
						[ Blockly.Msg.ROBOTS_MOTORS_FORWARD, "forward" ],
						[ Blockly.Msg.ROBOTS_MOTORS_RIGHT, "right" ],
						[ Blockly.Msg.ROBOTS_MOTORS_LEFT, "left" ],
						[ Blockly.Msg.ROBOTS_MOTORS_BACKWARD, "backward" ] ]),
				"DIRECTION");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-A1')
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-B1')
		.setAlign(Blockly.ALIGN_RIGHT)
	this.setInputsInline(false);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A2)
       .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-A2')
	   .setAlign(Blockly.ALIGN_RIGHT)
	   .appendField(Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B2)
       .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDualValidator), 'PIN-B2')
	   .setAlign(Blockly.ALIGN_RIGHT);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip('Generic motor driver');
  }
};
