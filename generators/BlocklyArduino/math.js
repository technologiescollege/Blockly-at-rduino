/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Arduino for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Arduino.math');

goog.require('Blockly.Arduino');


Blockly.Arduino.math_interval = function (block) {
	var OPERATORS = {
		'LT': '<',
		'LTE': '<=',
		'GT': '>',
		'GTE': '>='
	};
	var value_inf = Blockly.Arduino.valueToCode(block, 'inf', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_comp_inf = OPERATORS[block.getFieldValue('comp_inf')];
	var value_valeur = Blockly.Arduino.valueToCode(block, 'valeur', Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_comp_sup = OPERATORS[block.getFieldValue('comp_sup')];
	var value_sup = Blockly.Arduino.valueToCode(block, 'sup', Blockly.Arduino.ORDER_ATOMIC);
	var code = '(( ' + value_inf + ' ' + dropdown_comp_inf + ' ' + value_valeur + ') && (' + value_valeur + ' ' + dropdown_comp_sup + ' ' + value_sup + '))';
	return [code, Blockly.Arduino.ORDER_NONE];
};
