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
 * Thanks to Fred Lin for building BlockyDuino!
 * @author greich@ac-versailles.fr Guillaume Reich
 */

goog.provide('Blockly.Arduino.infrarouge');

goog.require('Blockly.Arduino');

Blockly.Arduino.IR_init = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['includes_IR'] = 
  '#include <IRremote.h>\n';
  Blockly.Arduino.definitions_['define_IR_init'] =
  "int IRpin = " + value_pin + ";\n" +
  "IRrecv irrecv(IRpin);\n" +
   "decode_results results;\n";

  Blockly.Arduino.setups_['setup_IR_init'] = 
  'irrecv.enableIRIn();\n';

  var code = '';
  return code;
};

Blockly.Arduino.IR_test_LED = function() {
  Blockly.Arduino.setups_['setup_IR_test_LED'] = 
  'pinMode(13, OUTPUT);\n';
  var code =
  'if (irrecv.decode(&results))\n' +
  '  {\n' +
  '  digitalWrite(13, HIGH);\n' +
  '  delay(100);\n' +
  '  digitalWrite(LEDpin, LOW);\n' +
  '  irrecv.resume();   // Receive the next value\n' +
  '  }\n';
  return code;
};

Blockly.Arduino.IR_test_monitor = function() {
  Blockly.Arduino.setups_['setup_IR_test_monitor'] = 
  'Serial.begin(9600);\n';
  var code =
  'if (irrecv.decode(&results))\n' +
  '  {\n' +
  '  Serial.println(results.value, DEC); // Print the Serial results.value\n' +
  '  irrecv.resume();   // Receive the next value\n' +
  '  }\n';
  return code;
};

Blockly.Arduino.IR_next_value = function() {
  var code = 'irrecv.resume();   // Receive the next value\n';
  return code;
};

Blockly.Arduino.IR_detection = function() {
  var code = 'irrecv.decode(&results)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.IR_reception_code = function() {
  var code = 'results.value';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
