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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.array');

goog.require('Blockly.Arduino');

Blockly.Arduino.array_create_with = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || 'null';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.array_getIndex = function() {
  var at = Blockly.Arduino.valueToCode(this, 'AT', Blockly.Arduino.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_MEMBER) || '[]';

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, decrement it right now.
    at = parseFloat(at) - 1;
  }
  var code = list + '[' + at + ']';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['array_modify'] = function(block) {
  var value_indice = Blockly.Arduino.valueToCode(block, 'indice', Blockly.Arduino.ORDER_ATOMIC);
  var value_name = Blockly.Arduino.valueToCode(block, 'name', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = value_name+'['+value_indice+'] = '+value_value+';\n';
  return code;
};

Blockly.Arduino['array_declare'] = function(block) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'contenu', Blockly.Arduino.ORDER_ASSIGNMENT) ;
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
	var choice = block.getFieldValue("choix");
	var dimension = block.getFieldValue("dim");
	switch (choice) {
        case "c1":
            if (dimension == "d2"){
				Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + '['+argument0+']['+argument0+'];';
			} else {
				Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + '['+argument0+'];';
			}
			break;
        case "c2":
            if (dimension == "d2"){
				var argument = argument0.split('{');
				var nb1 = argument.length - 2 ;
				var arg = argument[2].split(',');
				var nb2 = arg.length - 1 ;
				Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + '['+ nb1+']'+ '['+ nb2+'] = '+argument0+';';
			} else {
				Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + '[] = '+argument0+';';
			}
			break;
	}
	return '';
};

/* deprecated
Blockly.Arduino['array_declare'] = function(block) {
  var var_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var_name = var_name.substring(1, var_name.length - 1);
  var varType = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
  var value = Blockly.Arduino.valueToCode(block, 'taille', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_[var_name] = varType+" "+var_name+"["+value+"];";
  return '';
};
*/