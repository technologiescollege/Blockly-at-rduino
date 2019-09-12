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

goog.provide('Blockly.Arduino.otto');

goog.require('Blockly.Arduino');

Blockly.Arduino['otto9_home'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg\n'
	+ '#define PIN_YR 3 // right leg\n'
	+ '#define PIN_RL 4 // left foot\n'
	+ '#define PIN_RR 5 // right foot';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.home();\n';
  return code;
};

Blockly.Arduino['otto9_move'] = function(block) {
  var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg\n'
	+ '#define PIN_YR 3 // right leg\n'
	+ '#define PIN_RL 4 // left foot\n'
	+ '#define PIN_RR 5 // right foot\n';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = '';
  switch(dropdown_otto_move_sens) {
	case 'FORWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1); // FORWARD\n';
		break;
	case 'BACKWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1); // BACKWARD\n';
		break;
	case 'RIGHT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // FORWARD\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // BACKWARD\n';
		break;
	case 'BEND':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'SHAKE':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1);\n';
		break;
  }
  return code;
};

Blockly.Arduino['otto9_dance'] = function(block) {
  var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
  var dropdown_otto_dance_speed = block.getFieldValue('otto_dance_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg\n'
	+ '#define PIN_YR 3 // right leg\n'
	+ '#define PIN_RL 4 // left foot\n'
	+ '#define PIN_RR 5 // right foot\n';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = '';
  if(dropdown_otto_dance_movement == ('moonwalker')||('crusaito')||('flapping'))
		code = 'Otto.' + dropdown_otto_dance_movement + '(1,' + dropdown_otto_dance_speed + ',' + dropdown_otto_dance_size + ', 1);\n';
  else
		code = 'Otto.' + dropdown_otto_dance_movement + '(1,' + dropdown_otto_dance_speed + ',' + dropdown_otto_dance_size + ');\n';
  return code;
};

Blockly.Arduino['otto9_gesture'] = function(block) {
  var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg\n'
	+ '#define PIN_YR 3 // right leg\n'
	+ '#define PIN_RL 4 // left foot\n'
	+ '#define PIN_RR 5 // right foot\n';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8\n'
	+ '#define PIN_Echo 9';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.playGesture(' + dropdown_otto_gesture + ');\n';
  return code;
};

Blockly.Arduino['otto9_sound'] = function(block) {
  var dropdown_otto_sound = block.getFieldValue('otto_sound');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Buzzer  13 \n';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
  return code;
};

Blockly.Arduino['otto9_getdistance'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.includes_['otto9_lib_dist'] = '#include <US.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8\n'
	+ '#define PIN_Echo 9';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_getnoise'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_noise'] = 'bool estado = false;';
  Blockly.Arduino.definitions_['otto9_noise'] = '#define PIN_NoiseSensor A6';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.getNoise()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_touchbutton'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>';
  Blockly.Arduino.variables_['otto9_touchbutton'] = 'volatile bool buttonPushed = false;';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Button A0';
  Blockly.Arduino.setups_['otto9_init']='pinMode(PIN_Button, INPUT);\n';
  var code = 'digital.Read(PIN_Button)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_mouth'] = function(block) {
  var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
  Blockly.Arduino.includes_['otto9_matrix'] = '#include <Otto_Matrix9.h>';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int otto9_matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n';
  var code = '';
  if ((dropdown_otto9_mouth_choice == 'littleUuh, i')||(dropdown_otto9_mouth_choice == 'dreamMouth, 0')||(dropdown_otto9_mouth_choice == 'dreamMouth, 1')||(dropdown_otto9_mouth_choice == 'dreamMouth, 2'))
	code = 'Otto.putAnimationMouth(' + dropdown_otto9_mouth_choice + ');\n';
	else code = 'Otto.putMouth(' + dropdown_otto9_mouth_choice + ');\n';
  return code;
};

Blockly.Arduino['otto9_matrix'] = function(block) {
  Blockly.Arduino.includes_['otto9_matrix'] = '#include <Otto_Matrix9.h>';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int otto9_matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n'
  var code = 'matrix = 0b';
  for (var i=0; i<64; i++) {
	if (this.getFieldValue('otto9_matrix_pixel' + i) != 'rgb(255, 255, 255)')
		code += '1';
		else code +='0';
  };
  code += ';\n';
  return code;
};

Blockly.Arduino['otto9_matrix_text'] = function(block) {
  Blockly.Arduino.includes_['otto9_matrix'] = '#include <Otto_Matrix9.h>';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int otto9_matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n';
  var code = '';
  return code;
};