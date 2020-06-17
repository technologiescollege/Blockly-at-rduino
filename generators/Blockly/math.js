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


Blockly.Arduino.math_number = function() {
  // Numeric value.
  var code = window.parseFloat(this.getFieldValue('NUM'));
  // -4 is actually an operator and a number.  Reflect this in the order.
  var order = code < 0 ?
      Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
  return [code, order];
};

Blockly.Arduino.math_arithmetic = function() {
  // Basic arithmetic operators, and power.
  var mode = this.getFieldValue('OP');
  var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '0';
  var code;
  if (!operator) {
    code = 'pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.Arduino.math_arithmetic.OPERATORS = {
  ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
  MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
  MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.Arduino.ORDER_NONE]  // Handle power separately.
};

Blockly.Arduino['math_single'] = function() {
  // Math operators with single operand.
  var operator = this.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = Blockly.Arduino.valueToCode(this, 'NUM',
        Blockly.Arduino.ORDER_UNARY_NEGATION) || '0';
    if (arg[0] == '-') {
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.Arduino.ORDER_UNARY_NEGATION];
  }
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.Arduino.valueToCode(this, 'NUM',
        Blockly.Arduino.ORDER_DIVISION) || '0';
  } else {
    arg = Blockly.Arduino.valueToCode(this, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'sqrt(' + arg + ')';
      break;
    case 'ROUND':
      code = 'round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'sin(' + arg + ')';
      break;
    case 'COS':
      code = 'cos(' + arg + ')';
      break;
    case 'TAN':
      code = 'tan(' + arg + ')';
      break;
	default:
      throw 'Unknown math operator: ' + operator;
  }
  if (code) {
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
  return [code, Blockly.Arduino.ORDER_DIVISION];
};

Blockly.Arduino['math_constant'] = function() {
  // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  var CONSTANTS = {
    'PI': ['PI', Blockly.Arduino.ORDER_MEMBER],
    'E': ['E', Blockly.Arduino.ORDER_MEMBER],
    'GOLDEN_RATIO':
        ['(1 + sqrt(5)) / 2', Blockly.Arduino.ORDER_DIVISION],
    'SQRT2': ['SQRT2', Blockly.Arduino.ORDER_MEMBER],
    'SQRT1_2': ['SQRT1_2', Blockly.Arduino.ORDER_MEMBER],
    'INFINITY': ['Infinity', Blockly.Arduino.ORDER_ATOMIC]
  };
  return CONSTANTS[this.getFieldValue('CONSTANT')];
};

Blockly.Arduino['math_number_property'] = function() {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.Arduino.valueToCode(this, 'NUMBER_TO_CHECK',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var dropdown_property = this.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    var functionName = Blockly.Arduino.provideFunction_(
        'math_isPrime',
        [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is NaN, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.Arduino.valueToCode(this, 'DIVISOR',
          Blockly.Arduino.ORDER_MODULUS) || '0';
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.Arduino.ORDER_EQUALITY];
};

Blockly.Arduino['math_change'] = function() {
  // Add to a variable in place.
  var argument0 = Blockly.Arduino.valueToCode(this, 'DELTA', Blockly.Arduino.ORDER_ADDITIVE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = varName + ' = ' + varName + ' + ' + argument0 + ';\n';
  return code;
};

// Rounding functions have a single operand.
Blockly.Arduino['math_round'] = Blockly.Arduino['math_single'];

// Trigonometry functions have a single operand.
Blockly.Arduino['math_trig'] = Blockly.Arduino['math_single'];

Blockly.Arduino['math_on_list'] = function() {
  // Math functions for lists.
  var func = this.getFieldValue('OP');
  var list, code;
  switch (func) {
    case 'SUM':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_MEMBER) || '[]';
      code = list + '.reduce(function(x, y) {return x + y;})';
      break;
    case 'MIN':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_COMMA) || '[]';
      code = 'min.apply(null, ' + list + ')';
      break;
    case 'MAX':
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_COMMA) || '[]';
      code = 'max.apply(null, ' + list + ')';
      break;
    case 'AVERAGE':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.Arduino.provideFunction_(
          'math_mean',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  return myList.reduce(function(x, y) {return x + y;}) / ' +
                  'myList.length;',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      // math_median([null,null,1,3]) == 2.0.
      var functionName = Blockly.Arduino.provideFunction_(
          'math_median',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(myList) {',
            '  var localList = myList.filter(function (x) ' +
              '{return typeof x == \'number\';});',
            '  if (!localList.length) return null;',
            '  localList.sort(function(a, b) {return b - a;});',
            '  if (localList.length % 2 == 0) {',
            '    return (localList[localList.length / 2 - 1] + ' +
              'localList[localList.length / 2]) / 2;',
            '  } else {',
            '    return localList[(localList.length - 1) / 2];',
            '  }',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      // As a list of numbers can contain more than one mode,
      // the returned result is provided as an array.
      // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
      var functionName = Blockly.Arduino.provideFunction_(
          'math_modes',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(values) {',
            '  var modes = [];',
            '  var counts = [];',
            '  var maxCount = 0;',
            '  for (var i = 0; i < values.length; i++) {',
            '    var value = values[i];',
            '    var found = false;',
            '    var thisCount;',
            '    for (var j = 0; j < counts.length; j++) {',
            '      if (counts[j][0] === value) {',
            '        thisCount = ++counts[j][1];',
            '        found = true;',
            '        break;',
            '      }',
            '    }',
            '    if (!found) {',
            '      counts.push([value, 1]);',
            '      thisCount = 1;',
            '    }',
            '    maxCount = max(thisCount, maxCount);',
            '  }',
            '  for (var j = 0; j < counts.length; j++) {',
            '    if (counts[j][1] == maxCount) {',
            '        modes.push(counts[j][0]);',
            '    }',
            '  }',
            '  return modes;',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      var functionName = Blockly.Arduino.provideFunction_(
          'math_standard_deviation',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(numbers) {',
            '  var n = numbers.length;',
            '  if (!n) return null;',
            '  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;',
            '  var variance = 0;',
            '  for (var j = 0; j < n; j++) {',
            '    variance += pow(numbers[j] - mean, 2);',
            '  }',
            '  variance = variance / n;',
            '  return sqrt(variance);',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      var functionName = Blockly.Arduino.provideFunction_(
          'math_random_list',
          [ 'function ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
              '(list) {',
            '  var x = floor(random() * list.length);',
            '  return list[x];',
            '}']);
      list = Blockly.Arduino.valueToCode(this, 'LIST',
          Blockly.Arduino.ORDER_NONE) || '[]';
      code = functionName + '(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['math_modulo'] = function() {
  // Remainder computation.
  var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
      Blockly.Arduino.ORDER_MODULUS) || '0';
  var code = '(' + argument0 + ') % ' + argument1;
  return [code, Blockly.Arduino.ORDER_MODULUS];
};

Blockly.Arduino['math_constrain'] = function() {
  // Constrain a number between two limits.
  var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE',
      Blockly.Arduino.ORDER_COMMA) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'LOW',
      Blockly.Arduino.ORDER_COMMA) || '0';
  var argument2 = Blockly.Arduino.valueToCode(this, 'HIGH',
      Blockly.Arduino.ORDER_COMMA) || 'Infinity';
  var code = 'min(max(' + argument0 + ', ' + argument1 + '), ' +
      argument2 + ')';
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['math_random_int'] = function() {
  // Random integer between [X] and [Y].
  var argument0 = Blockly.Arduino.valueToCode(this, 'FROM',
      Blockly.Arduino.ORDER_COMMA) || '0';
  var argument1 = Blockly.Arduino.valueToCode(this, 'TO',
      Blockly.Arduino.ORDER_COMMA) || '0';
  var functionName = Blockly.Arduino.provideFunction_(
      'math_random_int',
      [ 'long ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
          '(int a,int b) {',
        '  if (a > b) {',
        '    // Swap a and b to ensure a is smaller.',
        '    int c = a;',
        '    a = b;',
        '    b = c;',
        '  }',
        '  return random(a,b);',
        '}']);
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
};

Blockly.Arduino['math_random_float'] = function() {
  // Random fraction between 0 and 1.
  var functionName = Blockly.Arduino.provideFunction_(
      'math_random_float',
      [ 'float ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ +
          '{',
        '  return random(0, 1000000)/1000000;',
        '}\n']);
  return ['math_random_float', Blockly.Arduino.ORDER_FUNCTION_CALL];
};
