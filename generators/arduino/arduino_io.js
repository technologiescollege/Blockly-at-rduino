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

goog.provide('Blockly.Arduino.arduino_io');

goog.require('Blockly.Arduino');

Blockly.Arduino.inout_digital_write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino.inout_digital_write_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin + ', ' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino.inout_PWM_write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.inout_PWM_write_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.inout_digital_read = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  var code = 'digitalRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_digital_read_check = function(block) {
    var pull_up = block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (pull_up) {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", INPUT);"
    };
    var code = "digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.inout_digital_read_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  var code = 'digitalRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_button_wait_il = function() {
  //var wait_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var wait_pin = this.getFieldValue('PIN');  
  Blockly.Arduino.definitions_["define_button_wait_push"] = "const int PushbuttonPin = "+wait_pin+";\n" +
	"int PushbuttonState = 0;";
  Blockly.Arduino.codeFunctions_["function_button_wait_push"] = 
	"void WaitForPushButton (){\n" +
	"  PushbuttonState = digitalRead(PushbuttonPin);\n"+
	"  while(PushbuttonState == LOW)\n" +
	"    PushbuttonState = digitalRead(PushbuttonPin);\n" +
	"}";
 Blockly.Arduino.setups_['setup_button_wait_push'] = "pinMode(PushbuttonPin, INPUT);";
 var code = 'WaitForPushButton();';
 return code;
};

Blockly.Arduino.inout_button_wait_iph = function() {
  //var wait_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var wait_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_["define_button_wait_pull"] = "const int PullbuttonPin = "+wait_pin+";\n" +
	"int PullbuttonState = 0;";
  Blockly.Arduino.codeFunctions_["function_button_wait_pull"] = 
	"void WaitForPullButton (){\n" +
	"  PullbuttonState = digitalRead(PullbuttonPin);\n"+
	"  while(PullbuttonState == HIGH)\n" +
	"    PullbuttonState = digitalRead(PullbuttonPin);\n" +
	"}";
 Blockly.Arduino.setups_['setup_button_wait_pull'] = "pinMode(PullbuttonPin, INPUT_PULLUP);";
  var code = 'WaitForPullButton();';
  return code;
};

Blockly.Arduino.inout_analog_write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.inout_analog_write_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.inout_analog_read = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_analog_read_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead(' + dropdown_pin.substring(1,2) + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_onoff = function() {
  // Boolean values HIGH and LOW. 
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_angle = function() {
  // Just angle
  var angle = this.getFieldValue('ANGLE');
  // TODO: Change ORDER_NONE to the correct strength.
  return [angle, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_angle_maths = function() {
  // Just angle
  var angle = this.getFieldValue('ANGLE');
  // TODO: Change ORDER_NONE to the correct strength.
  return [angle, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.tone = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'tone('+value_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.tone_notime = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'tone('+value_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.notone = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'noTone('+value_pin+');\n';
  return code;
};

Blockly.Arduino.inout_pulsein = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+','+dropdown_stat+ ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.inout_pulsein_timeout = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getTitleValue('STAT');
  var timeout=Blockly.Arduino.valueToCode(this, 'TIMEOUT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'pulseIn('+dropdown_pin+', '+dropdown_stat+', '+timeout+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.inout_attachInterrupt = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_mode = this.getFieldValue('mode');
  var funcName='attachInterrupt_'+dropdown_pin;
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);\n'
  + '  attachInterrupt(digitalPinToInterrupt('+dropdown_pin+'),'+'attachInterrupt_'+dropdown_pin+','+dropdown_mode+');\n';
  
  var branch = Blockly.Arduino.statementToCode(this, 'DO' );
  var code2='void'+ ' ' + funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.userFunctions_[funcName] = code2;
  return "";
};

Blockly.Arduino.inout_detachInterrupt = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'detachInterrupt('+dropdown_pin+');\n'
  return code;
};

Blockly.Arduino.inout_pullup = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin ] = 'pinMode(' + dropdown_pin + ', INPUT_PULLUP);';
  var code = 'digitalRead(' + dropdown_pin + ')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};