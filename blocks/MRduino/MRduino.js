/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Colour blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.serial');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */

 Blockly.Blocks['MRduino_init'] = {
  init: function() {
    this.setColour("#00979D");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_init)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Serial communication init speed.');
  }
};

Blockly.Blocks['MRduino_forward'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_forward);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_controlEnable'] = {
  init: function() {
    this.setColour("#ee5411");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_controlEnable)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('controlEnable');
  }
};

 Blockly.Blocks['MRduino_controlDisable'] = {
  init: function() {
    this.setColour("#ee5411");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_controlDisable)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('controlDisable');
  }
};

Blockly.Blocks['MRduino_forward_mm'] = {
  init: function() {
    this.setColour("#ee5411");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_forward_mm);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};


 Blockly.Blocks['MRduino_stop'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_stop)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('stop');
  }
};

 Blockly.Blocks['MRduino_back'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_back);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['MRduino_back_mm'] = {
  init: function() {
    this.setColour("#ee5411");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_back_mm);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_turnLeft'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_turnLeft);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_turnLeft_degree'] = {
  init: function() {
    this.setColour("#ee5411");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_turnLeft_degree);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_turnRight_degree'] = {
  init: function() {
    this.setColour("#ee5411");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_turnRight_degree);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_turnRight'] = {
  init: function() {
    this.setColour("#33C7F2");
	this.appendValueInput("PWM", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MRduino_turnRight);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MBOT_MOTOR_TOOLTIP);
  }
};

 Blockly.Blocks['MRduino_proxSensor1'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor1)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor1');
  }
};

 Blockly.Blocks['MRduino_proxSensor2'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor2)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor2');
  }
};

 Blockly.Blocks['MRduino_proxSensor3'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor3)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor3');
  }
};

 Blockly.Blocks['MRduino_proxSensor4'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor4)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor4');
  }
};

 Blockly.Blocks['MRduino_proxSensor5'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor5)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor5');
  }
};

Blockly.Blocks['MRduino_proxSensor6'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_proxSensor6)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('proxSensor6');
  }
};

 Blockly.Blocks['MRduino_ambiantLight1'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight1)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight1');
  }
};

 Blockly.Blocks['MRduino_ambiantLight2'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight2)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight2');
  }
};

 Blockly.Blocks['MRduino_ambiantLight3'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com/');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight3)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight3');
  }
};

 Blockly.Blocks['MRduino_ambiantLight3'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com/');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight3)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight3');
  }
};

 Blockly.Blocks['MRduino_ambiantLight4'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com/');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight4)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight4');
  }
};

 Blockly.Blocks['MRduino_ambiantLight5'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com/');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight5)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight5');
  }
};

 Blockly.Blocks['MRduino_ambiantLight6'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com/');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_ambiantLight6)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ambiantLight6');
  }
};


Blockly.Blocks['MRduino_groundSensor1'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_groundSensor1)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ground sensor 1');
  }
};

Blockly.Blocks['MRduino_groundSensor2'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_groundSensor2)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ground sensor 2');
  }
};

Blockly.Blocks['MRduino_groundSensor3'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_groundSensor3)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'int');
    this.setTooltip('ground sensor 3');
  }
};

 Blockly.Blocks['MRduino_led1On'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led1On)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 1 on');
  }
};

 Blockly.Blocks['MRduino_led2On'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led2On)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 2 on');
  }
};

 Blockly.Blocks['MRduino_led3On'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led3On)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 3 on');
  }
};

 Blockly.Blocks['MRduino_led1Off'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led1Off)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 1 off');
  }
};

 Blockly.Blocks['MRduino_led2Off'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led2Off)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 2 off');
  }
};

 Blockly.Blocks['MRduino_led3Off'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led3Off)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 3 off');
  }
};

 Blockly.Blocks['MRduino_led1Toggle'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led1Toggle)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 1 toggle');
  }
};

 Blockly.Blocks['MRduino_led2Toggle'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led2Toggle)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 2 toggle');
  }
};

 Blockly.Blocks['MRduino_led3Toggle'] = {
  init: function() {
    this.setColour("#8ec31f");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_led3Toggle)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('led 3 toggle');
  }
};

Blockly.Blocks['MRduino_battery'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_battery)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'float');
    this.setTooltip('battery');
  }
};

Blockly.Blocks['MRduino_temperature'] = {
  init: function() {
    this.setColour("#778E9A");
	this.setHelpUrl('http://www.macerobotics.com');
	this.setInputsInline(true);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.MRduino_temperature)
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setOutput(true, 'float');
    this.setTooltip('temperature');
  }
};
