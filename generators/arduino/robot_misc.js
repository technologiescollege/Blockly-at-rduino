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

goog.provide('Blockly.Arduino.robots_sensors');

goog.require('Blockly.Arduino');


Blockly.Arduino.IR_serial_decoder = function() {
 //var dropdown_ipin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
 var dropdown_ipin = this.getFieldValue('PIN');
  Blockly.Arduino.includes_["includes_IR"] = "//Playing this requires the IR Remote Libraries to work\n" +
  "//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables  \n"+
  "#include <IRremote.h>\n";
  Blockly.Arduino.definitions_["define_IR_serial_decoder"] = "int IRpin = "+dropdown_ipin+";\n"+
  "IRrecv irrecv(IRpin);\n"+
   "decode_results results;\n";   
  Blockly.Arduino.setups_["setup_IR_serial_decoder"] = "pinMode(IRpin, INPUT);\n"+
 "  Serial.begin(9600);\n"+
 "  irrecv.enableIRIn();\n";
  var code = "";
  var code = "if (irrecv.decode(&results))\n "+
  " {\n"+
  "   Serial.println(results.value, DEC); // Print the Serial 'results.value'\n"+
  "   irrecv.resume();   // Receive the next value\n"+
  "  }\n";
  return code;
};

Blockly.Arduino.IR_get_blink = function() {
  // var dropdown_ipin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
   var dropdown_lpin = this.getFieldValue('PIN2');
   var dropdown_ipin = this.getFieldValue('PIN');
   var IR_number = Blockly.Arduino.valueToCode(this, 'IR_NUM', Blockly.Arduino.ORDER_ATOMIC) 
  Blockly.Arduino.includes_["includes_IR"] = "//Playing this requires the IR Remote Libraries to work\n" +
  "//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables  \n"+
  "#include <IRremote.h>\n";
  Blockly.Arduino.definitions_["define_IR_get_blink"] = "int IRpin = "+dropdown_ipin+";\n"+
  "int LEDpin = "+dropdown_lpin+";\n"+
  "boolean LEDon = true; // initializing LEDon as true\n"+
  "IRrecv irrecv(IRpin);\n"+
  "decode_results results;\n"; 
Blockly.Arduino.setups_["setup_IR_get_blink"] = "pinMode(IRpin, INPUT);\n"+
 "  pinMode(LEDpin, OUTPUT);\n"+
 "  Serial.begin(9600);\n"+
 "  irrecv.enableIRIn();\n";
  var code = "";
  var code = "if (irrecv.decode(&results))\n "+
  " {\n"+
  "   Serial.println(results.value, DEC); // Print the Serial 'results.value'\n"+
  "   irrecv.resume();   // Receive the next value\n"+
  "  }\n"+
  "if (results.value == "+IR_number+")\n "+
  " {\n"+
   "if (LEDon == true)   // is LEDon equal to true? \n "+
   " {\n"+
  "   LEDon = false; \n"+
  "   digitalWrite(LEDpin, HIGH);\n"+
  "  delay(100);      // keeps the transition smooth\n"+
  "  }\n"+
     "else \n "+
   " {\n"+
  "   LEDon = true; \n"+
  "   digitalWrite(LEDpin, LOW);\n"+
  "  delay(100);      // keeps the transition smooth\n"+
  "  }\n"+
    "  }\n";
  return code;
 }; 

 Blockly.Arduino.IR_get= function() {
  // var dropdown_ipin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
   var dropdown_ipin = this.getFieldValue('PIN');
  Blockly.Arduino.includes_["includes_IR"] = "//Playing this requires the IR Remote Libraries to work\n" +
  "//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables  \n"+
  "#include <IRremote.h>\n";
   Blockly.Arduino.definitions_["define_IR_get"] = "unsigned long IRCode = 0;\n"+
  "int IRpin = "+dropdown_ipin+";\n"+
  "IRrecv irrecv(IRpin);\n"+
  "decode_results results;\n"+ 
   "unsigned long IRRequest ()\n "+
   "{\n"+
   "  unsigned long IRResult = 0;\n"+
   "  if (irrecv.decode(&results)) \n"+
   "     {\n"+
   "      IRResult = results.value;\n"+
   "      irrecv.resume();   // Receive the next value\n"+
   "     }\n"+
   "   return IRResult;\n"+
   "  }\n";
 Blockly.Arduino.setups_["setup_IR_get_blink"] = "pinMode(IRpin, INPUT);\n"+
  "  irrecv.enableIRIn();\n";

  var code = "";
  var code =  "IRRequest()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
 }; 
