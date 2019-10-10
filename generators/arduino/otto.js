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

goog.provide('Blockly.Arduino.otto');

goog.require('Blockly.Arduino');

Blockly.Arduino['otto9_home'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);';
  var code = 'Otto.home();\n';
  return code;
};

Blockly.Arduino['otto9_move'] = function(block) {
  var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
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
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // LEFT\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // RIGHT\n';
		break;
	case 'BENDLEFT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'BENDRIGHT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',-1);\n';
		break;
	case 'SHAKELEFT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'SHAKERIGHT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',-1);\n';
    break;
    case 'jump':
		code = 'Otto.jump(1,' + dropdown_otto_move_speed + ');\n';
		break;
  }
  return code;
};

Blockly.Arduino['otto9_dance'] = function(block) {
  var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
  var dropdown_otto_dance_speed = block.getFieldValue('otto_dance_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = '';
  switch(dropdown_otto_dance_movement) {
    case 'moonwalkerLEFT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'moonwalkerRIGHT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'crusaitoLEFT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'crusaitoRIGHT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'flappingFRONT':
      code = 'Otto.flapping(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'flappingBACK':
      code = 'Otto.flapping(1, ' + dropdown_otto_dance_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    }
  return code;
};
Blockly.Arduino['otto9_do'] = function(block) {
  var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
  var dropdown_otto_do_speed = block.getFieldValue('otto_do_speed');
  var dropdown_otto_do_size = block.getFieldValue('otto_do_size');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_do_speed + ', ' + dropdown_otto_do_size + ');\n';
  return code;
};

Blockly.Arduino['otto9_gesture'] = function(block) {
  var dropdown_otto_gesture = block.getFieldValue('otto_gesture');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
	+ '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_Buzzer  13 //buzzer';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8 // ultrasound \n'
	+ '#define PIN_Echo 9 // ultrasound';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.playGesture(' + dropdown_otto_gesture + ');\n';
  return code;
};

Blockly.Arduino['otto9_sound'] = function(block) {
  var dropdown_otto_sound = block.getFieldValue('otto_sound');
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Buzzer  13 \n';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
  return code;
};

Blockly.Arduino['otto9_getdistance'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.includes_['otto9_lib_dist'] = '#include <US.h>';
  Blockly.Arduino.variables_['otto9_distance'] = 'int distance;\n'
	+ 'bool obstacleDetected = false;';
  Blockly.Arduino.definitions_['otto9_distance'] = '#define PIN_Trigger 8 // ultrasound \n'
	+ '#define PIN_Echo 9 // ultrasound';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_getnoise'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_noise'] = 'bool estado = false;';
  Blockly.Arduino.definitions_['otto9_noise'] = '#define PIN_NoiseSensor A6';
  Blockly.Arduino.setups_['otto9_init']='Otto.init(PIN_YL, PIN_YR, PIN_RL, PIN_RR, true, A6, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.getNoise()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_touchbutton'] = function(block) {
  Blockly.Arduino.includes_['otto9_lib'] = '#include <Otto9.h>\n'
	+ 'Otto9 Otto;';
  Blockly.Arduino.variables_['otto9_touchbutton'] = 'volatile bool buttonPushed = false;';
  Blockly.Arduino.definitions_['otto9_sound'] = '#define PIN_Button A0';
  Blockly.Arduino.setups_['otto9_init']='pinMode(PIN_Button, INPUT);\n';
  var code = 'digitalRead(PIN_Button)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['otto9_mouth'] = function(block) {
  var dropdown_otto9_mouth_choice = block.getFieldValue('otto9_mouth_choice');
  Blockly.Arduino.includes_['otto9_humanoid'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
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
  Blockly.Arduino.includes_['otto9_humanoid'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_matrix'] = 'unsigned long int matrix;';
  Blockly.Arduino.definitions_['otto9_matrix_def'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n'
  var code = 'Otto.setLed(0,0,1);\n'
    +'Otto.setLed(1,0,1);\n'
    +'Otto.setLed(2,0,1);\n'
    +'Otto.setLed(3,0,1);\n'
    +'Otto.setLed(4,0,1);\n'
    +'Otto.setLed(5,0,1);\n'
    +'Otto.setLed(6,0,1);\n'
    +'Otto.setLed(7,0,1);\n'
    +'Otto.setLed(1,1,1);\n'
    +'Otto.setLed(2,1,1);\n'
    +'Otto.setLed(3,1,1);\n'
    +'Otto.setLed(4,1,1);\n'
    +'Otto.setLed(5,1,1);\n'
    +'Otto.setLed(6,1,1);\n'
    +'Otto.setLed(7,1,1);\n'
    +'Otto.setLed(0,1,1);\n'
    +'Otto.setLed(1,1,1);\n'
    +'Otto.setLed(2,1,1);\n'
    +'Otto.setLed(3,1,1);\n'
    +'Otto.setLed(4,1,1);\n'
    +'Otto.setLed(5,1,1);\n'
    +'Otto.setLed(6,1,1);\n'
    +'Otto.setLed(7,1,1);\n'
    +'Otto.setLed(0,7,1);\n'
    +'Otto.setLed(1,7,1);\n'
    +'Otto.setLed(2,7,1);\n'
    +'Otto.setLed(3,7,1);\n'
    +'Otto.setLed(4,7,1);\n'
    +'Otto.setLed(5,7,1);\n'
    +'Otto.setLed(6,7,1);\n'
    +'Otto.setLed(7,7,1);';
    return code;
  
};

Blockly.Arduino['otto9_matrix_text'] = function(block) {
  var text_input = block.getFieldValue('input');
  Blockly.Arduino.includes_['otto9_humanoid'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.definitions_['otto9_matrix__textdef'] = '#define DIN_PIN A3\n'
	+ '#define CS_PIN A2\n'
	+ '#define CLK_PIN A1\n'
	+ '#define LED_DIRECTION 1';
  Blockly.Arduino.setups_['otto9_matrix_text']='Otto.initMATRIX( DIN_PIN, CS_PIN, CLK_PIN, LED_DIRECTION);\n';
  var code = 'Otto.writeText ( '+ '"' + this.getFieldValue('input') +'"' +',100); // limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters \n';
 
  return code;
};

Blockly.Arduino['otto9_arms'] = function(block) {
  var dropdown_otto9_arms_choice = block.getFieldValue('otto9_arms_choice');
  Blockly.Arduino.includes_['otto9_humanoid'] = '#include <Otto9Humanoid.h>\n'
	+ 'Otto9Humanoid Otto;';
  Blockly.Arduino.variables_['otto9_arms'] = 'int moveSize = 20;';
  Blockly.Arduino.definitions_['otto9_legs'] = '#define PIN_YL 2 // left leg, servo[0]\n'
	+ '#define PIN_YR 3 // right leg, servo[1]\n'
	+ '#define PIN_RL 4 // left foot, servo[2]\n'
  + '#define PIN_RR 5 // right foot, servo[3]\n'
  + '#define PIN_LA 6 //servo[4]  Left arm\n'
  + '#define PIN_RA 7 //servo[5]  Right arm\n'
  + '#define PIN_Trigger 8 // ultrasound \n'
  + '#define PIN_Echo 9 // ultrasound \n'
  + '#define PIN_NoiseSensor A6  \n'
  + '#define PIN_Buzzer  13 ';
  Blockly.Arduino.definitions_['otto9_arms'] = '#define PIN_LA 6 //servo[4]  Left arm\n'
	+ '#define PIN_RA 7 //servo[5]  Right arm\n';
  Blockly.Arduino.setups_['otto9_matrix']='Otto.initHUMANOID(PIN_YL, PIN_YR, PIN_RL, PIN_RR, PIN_LA, PIN_RA, true, PIN_NoiseSensor, PIN_Buzzer, PIN_Trigger, PIN_Echo);\n';
  var code = 'Otto.';
  
  switch(dropdown_otto9_arms_choice) {
	case 'HANDSUP':
		code += 'handsup();\n';
		break;
	case 'HANDWAVE1':
		code += 'handwave(1);\n';
		break;
	case 'HANDWAVE2':
		code += 'handwave(-1);\n';
		break;
  }
  return code;
};