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
 * @fileoverview Helper functions for generating sensor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

goog.provide('Blockly.Arduino.Zumo_sensors');

goog.require('Blockly.Arduino');


Blockly.Arduino.Zumo_setup_button_wait_il = function() {
  var wait_pin = this.getFieldValue('PIN');  
  Blockly.Arduino.definitions_["define_button_wait"] = 
  "const int buttonPin = 12;\n"+
  "int buttonState = 0;\n"+
  "void WaitForButton (){\n"+
  "	buttonState = digitalRead(buttonPin);\n"+
  "	while(buttonState == LOW) {\n"+
  "		buttonState = digitalRead(buttonPin);\n" +
  "		}\n" +
  "	}\n";
  Blockly.Arduino.setups_['setup_button_wait'] = "pinMode(buttonPin, INPUT);\n"+
  "WaitForButton();\n"; 
  var code = '';
  return code;
};

Blockly.Arduino.Zumo_setup_button_wait_iph = function() {
  var wait_pin = this.getFieldValue('PIN');  
  Blockly.Arduino.definitions_["define_button_wait"] = 
  "const int buttonPin = 12;\n"+
  "int buttonState = 0;\n"+
  "void WaitForButton (){\n"+
  "	buttonState = digitalRead(buttonPin);\n"+
  "	while(buttonState == HIGH) {\n" +
  "		buttonState = digitalRead(buttonPin);\n" +
  "		}\n" +
  "	}\n";
 Blockly.Arduino.setups_['setup_button_wait'] = " pinMode(buttonPin, INPUT_PULLUP);\n"+
 "WaitForButton();\n";
  var code = '';
  return code;
};

Blockly.Arduino.Zumo_wait_button_push = function() {
  Blockly.Arduino.definitions_["define_zumo_button_wait"] = "#include <Pushbutton.h>\n" +
  "Pushbutton button(ZUMO_BUTTON);";
  
  var code = 'button.waitForButton();';
  return code;
};