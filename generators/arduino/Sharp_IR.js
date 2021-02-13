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

goog.provide('Blockly.Arduino.Sharp_IR');

goog.require('Blockly.Arduino');

Blockly.Arduino.Sharp_IR_attach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_model = this.getFieldValue('SHARP_IR_MODEL');
  var dropdown_name = this.getFieldValue('SHARP_IR_NAME');

  Blockly.Arduino.includes_['define_sharp_ir'] = '#include <SharpIR.h>';
  Blockly.Arduino.definitions_['var_sharp_ir_' + dropdown_name] = 'SharpIR ' + dropdown_name + '(SharpIR::' + dropdown_model + ', A' + value_pin + ');';
  return '';
};

Blockly.Arduino.Sharp_IR_read = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SHARP_IR_NAME');

  var code = dropdown_name + '.getDistance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};