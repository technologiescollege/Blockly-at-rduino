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

goog.provide('Blockly.Arduino.arduino_base');

goog.require('Blockly.Arduino');

Blockly.Arduino.base_begin = function(block) {
    return ""
};

Blockly.Arduino.base_setup = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    var code = //'{\n' +
            branch;// + '\n}\n';
    var setup_key = Blockly.Arduino.variableDB_.getDistinctName('base_setup', Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key] = code;
    return ""; //do not return any actual code
};

Blockly.Arduino.base_loop = function () {
	var loop = Blockly.Arduino.statementToCode(this, 'LOOP');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    return [loop, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.base_setup_loop = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var loop = Blockly.Arduino.statementToCode(this, 'LOOP');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    var code = //'{\n' +
            branch;// + '\n}\n';
    var setup_key = Blockly.Arduino.variableDB_.getDistinctName('base_setup', Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key] = code;
    return [loop, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.base_define_bloc = function () {
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
    }
    var setup_key = Blockly.Arduino.variableDB_.getDistinctName('base_setup', Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.variables_[setup_key] = branch;
	
    // branch = Blockly.Arduino.scrub_(block, branch);
    // Blockly.Arduino.variables_[setup_key] = branch;
	
    return "";
};

Blockly.Arduino.base_define = function() {
  // Text value.
  var value_text1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  var value_text2 = this.getFieldValue('TEXT2');
  Blockly.Arduino.includes_[value_text1] = '#define ' + value_text1 + ' ' + value_text2;
  return "";
};

Blockly.Arduino.base_code = function() {
  // Text value.
  var code = this.getFieldValue('TEXT') + '\n';
  return code;
};

Blockly.Arduino.base_comment = function() {
  // Text value.
  var code = '// ' + this.getFieldValue('TEXT') + '\n';
  return code;
};

Blockly.Arduino.base_end = function() {
  // Forever loop.
  var code = 'while(true);\n';
  return code;
};

Blockly.Arduino.millis = function(block) {
  var code = 'millis()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.millis_sec = function(block) {
  var code = 'millis()/1000';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.base_delay = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.base_delay_sec = function() {
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'delay(' + 1000*delay_time + ');\n';
  return code;
};

Blockly.Arduino.var_random = function(block) {
  var value_rand_min = Blockly.Arduino.valueToCode(this, 'rand_min', Blockly.Arduino.ORDER_ATOMIC);
  var value_rand_max = Blockly.Arduino.valueToCode(this, 'rand_max', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random('+value_rand_min+','+value_rand_max+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.base_map = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
  var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'map(' + value_num + ', 0, 1023, 0, ' + value_dmax + ')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.various_constrain = function() {
  var value_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
  var value_a = Blockly.Arduino.valueToCode(this, 'a', Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'constrain('+value_x+','+value_a+','+value_b+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

//@pbra 20160607
Blockly.Arduino.inout_digital_mode = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_mode = Blockly.Arduino.valueToCode(this, 'PINMODE', Blockly.Arduino.ORDER_ATOMIC).replace(/['"]+/g, '');
  var code = 'pinMode(' + dropdown_pin + ', ' + dropdown_mode + ');\n';
  return code;
};

// @pbra dropdown pinmode
Blockly.Arduino.pinmode = function() {
  return [this.getFieldValue('PINMODE'), Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.inout_buildin_led = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_13'] = 'pinMode(13, OUTPUT);';
  var code = 'digitalWrite(13, ' + dropdown_stat + ');\n';
  return code;
};
// génére #include < text_file .h>
Blockly.Arduino['biblio_include'] = function() {
  var text_file = this.getFieldValue('File');
  var funcInclude = text_file+'.h';
  Blockly.Arduino.includes_[funcInclude] = '#include <'+text_file+'.h>';
  return "";
};
// génére #include "text_file .h"
Blockly.Arduino.include_file = function(block) {
  var text_file = this.getFieldValue('File2');
  Blockly.Arduino.includes_["File_include"] = '#include "'+text_file+'.h"';
  return "";
};
//@JP Fontaine 02092017
Blockly.Arduino.base_toggle = function(block) {
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_["toggle"+dropdown_pin] = "boolean etat_" + dropdown_pin + "=LOW;";
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", OUTPUT);";
    var code = "digitalWrite(" + dropdown_pin + ", etat_" + dropdown_pin + ");\netat_"+ dropdown_pin + "=!etat_"+ dropdown_pin + ";\n";
    return code
};

Blockly.Arduino.tempo_no_delay = function(block) {
    var _u = block.getFieldValue("unite");
    var delay_time = Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
	var faire = Blockly.Arduino.statementToCode(block, "branche");
	var temps = "temps"+delay_time;
	Blockly.Arduino.definitions_["temporisation"+delay_time] = "long "+temps+" = 0 ;";
    switch (_u) {
        case "us":
            var code = "if ((micros()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=micros();\n"+faire+"}\n";
            break;
        case "ms":
            var code = "if ((millis()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=millis();\n"+faire+"}\n";
            break;
        case "s":
            code = "if ((millis()-"+temps+")>=" + delay_time + "*1000) {\n  "+temps+"=millis();\n"+faire+"}\n";
            break
    };
    return code
};
