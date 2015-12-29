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

goog.provide('Blockly.Arduino.sensors');

goog.require('Blockly.Arduino');


Blockly.Arduino.setup_button_wait_il = function() {
  var wait_pin = this.getFieldValue('PIN');
  var code = '';
  
   Blockly.Arduino.definitions_["define_button_wait"] = ""+
   "const int buttonPin = " +wait_pin+ ";\n"+
   "int buttonState = 0;\n"+
	"void WaitForButton (){\n"+
	"buttonState = digitalRead(buttonPin);\n"+
	"while(buttonState == LOW) {buttonState = digitalRead(buttonPin);}}\n";
	Blockly.Arduino.setups_['setup_button_wait'] = " pinMode(buttonPin, INPUT);\n"+
	 '   WaitForButton();\n';
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.setup_button_wait_iph = function() {
  var wait_pin = this.getFieldValue('PIN');
   Blockly.Arduino.definitions_["define_button_wait"] = ""+
   "   const int buttonPin = "+wait_pin+";\n"+
   "   int buttonState = 0;\n"+
	"   void WaitForButton (){\n"+
	"   buttonState = digitalRead(buttonPin);\n"+
	"   while(buttonState == HIGH) {buttonState = digitalRead(buttonPin);}}\n";
 Blockly.Arduino.setups_['setup_button_wait'] = " pinMode(buttonPin, INPUT_PULLUP);\n"+
 '   WaitForButton();\n';
  var code = '';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.fourpin_ranger = function() {
  var dropdown_triger_pin = this.getFieldValue('PIN1');
  var dropdown_dist_pin = this.getFieldValue('PIN2');
  Blockly.Arduino.setups_["setup_sonar1"+dropdown_triger_pin] = "pinMode("+dropdown_triger_pin+",OUTPUT);//Sonar triger pin\n"+
  "  pinMode("+dropdown_dist_pin+",INPUT);//Sonar distance pulse pin\n";
  var code = "";
  
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int mesure_distance_cm(byte trig_pin, byte dist_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}\n";
  code="mesure_distance_cm("+dropdown_triger_pin+","+dropdown_dist_pin+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};