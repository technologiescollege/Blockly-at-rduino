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

goog.provide('Blockly.Arduino.multifunction');

goog.require('Blockly.Arduino');

Blockly.Arduino.multifunction_buildin_led = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var dropdown_DEL = this.getFieldValue('DEL');
  Blockly.Arduino.setups_['setup_buildin_LED_' + dropdown_DEL] = 'pinMode(' + dropdown_DEL + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_DEL + ', ' + '!' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino.multifunction_digital_read = function() {
  var dropdown_BP = this.getFieldValue('BP');
  var code = 'digitalRead(' + dropdown_BP + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.multifunction_pot_read = function() {
  var code = 'analogRead(A0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.multifunction_analog_read = function() {
  var code = 'analogRead(A5)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.multifunction_tone = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_multifunction_buzzer'] = 'pinMode(3, OUTPUT);';
  var code = 'tone(3,'+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.multifunction_notone = function() {
  Blockly.Arduino.setups_['setup_multifunction_buzzer'] = 'pinMode(3, OUTPUT);';
  var code = 'noTone(3);\n';
  return code;
};

Blockly.Arduino.multifunction_segment = function() {
  var value_num1 = Blockly.Arduino.valueToCode(this, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
  var value_num2 = Blockly.Arduino.valueToCode(this, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
  var value_num3 = Blockly.Arduino.valueToCode(this, 'NUM3', Blockly.Arduino.ORDER_ATOMIC);
  var value_num4 = Blockly.Arduino.valueToCode(this, 'NUM4', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_multifunction_segments'] = '#define LATCH_DIO 4\n' +
  '#define CLK_DIO 7\n' +
  '#define DATA_DIO 8';
  Blockly.Arduino.definitions_['definition_multifunction_segments'] =
  '/* Segment byte maps for numbers 0 to 9 */\n' +
  'const byte SEGMENT_MAP[] = {0xC0,0xF9,0xA4,0xB0,0x99,0x92,0x82,0xF8,0X80,0X90};\n\n' +
  '/* Byte maps to select digit 1 to 4 */\n' +
  'const byte SEGMENT_SELECT[] = {0xF1,0xF2,0xF4,0xF8};;\n\n' +
  '/* Wite a ecimal number between 0 and 9 to one of the 4 digits of the display */\n' +
  'void WriteNumberToSegment(byte Segment, byte Value)\n' +
  '  {\n' +
  '  digitalWrite(LATCH_DIO,LOW);\n' +
  '  shiftOut(DATA_DIO, CLK_DIO, MSBFIRST, SEGMENT_MAP[Value]);\n' +
  '  shiftOut(DATA_DIO, CLK_DIO, MSBFIRST, SEGMENT_SELECT[Segment] );\n' +
  '  digitalWrite(LATCH_DIO,HIGH);\n' +
  '  }\n\n' +
  '/* Write a decimal number between 0 and 9999 to the display */\n' +
  'void WriteNumber(int Number)\n' +
  '  {\n' +
  '  WriteNumberToSegment(0 , ' + value_num1 + ');\n' +
  '  WriteNumberToSegment(1 , ' + value_num2 + ' % 10);\n' +
  '  WriteNumberToSegment(2 , ' + value_num3 + ' % 10);\n' +
  '  WriteNumberToSegment(3 , ' + value_num4 + ' % 10);\n' +
  '  }\n';
  
  Blockly.Arduino.setups_['setup_multifunction_segments'] = '/* Set DIO pins to outputs */\n' +
  'pinMode(LATCH_DIO,OUTPUT);\n' +
  'pinMode(CLK_DIO,OUTPUT);\n' +
  'pinMode(DATA_DIO,OUTPUT);\n';
  var code = 'WriteNumber(' + value_num1 + value_num2 + value_num3 + value_num4 + ');\n';
  return code;
};

Blockly.Arduino.multifunction_segment_number = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_multifunction_segments'] = '#define LATCH_DIO 4\n' +
  '#define CLK_DIO 7\n' +
  '#define DATA_DIO 8';
  Blockly.Arduino.definitions_['definition_multifunction_segments'] =
  '/* Segment byte maps for numbers 0 to 9 */\n' +
  'const byte SEGMENT_MAP[] = {0xC0,0xF9,0xA4,0xB0,0x99,0x92,0x82,0xF8,0X80,0X90};\n\n' +
  '/* Byte maps to select digit 1 to 4 */\n' +
  'const byte SEGMENT_SELECT[] = {0xF1,0xF2,0xF4,0xF8};;\n\n' +
  '/* Wite a ecimal number between 0 and 9 to one of the 4 digits of the display */\n' +
  'void WriteNumberToSegment(byte Segment, byte Value)\n' +
  '  {\n' +
  '  digitalWrite(LATCH_DIO,LOW);\n' +
  '  shiftOut(DATA_DIO, CLK_DIO, MSBFIRST, SEGMENT_MAP[Value]);\n' +
  '  shiftOut(DATA_DIO, CLK_DIO, MSBFIRST, SEGMENT_SELECT[Segment] );\n' +
  '  digitalWrite(LATCH_DIO,HIGH);\n' +
  '  }\n\n' +
  '/* Write a decimal number between 0 and 9999 to the display */\n' +
  'void WriteNumber(int Number)\n' +
  '  {\n' +
  '  WriteNumberToSegment(0 , ' + value_num + '/1000);\n' +
  '  WriteNumberToSegment(1 , ' + value_num + '/100 % 10);\n' +
  '  WriteNumberToSegment(2 , ' + value_num + '/10 % 10);\n' +
  '  WriteNumberToSegment(3 , ' + value_num + ' % 10);\n' +
  '  }\n\n';
  
  Blockly.Arduino.setups_['setup_multifunction_segments'] = '/* Set DIO pins to outputs */\n' +
  '  pinMode(LATCH_DIO,OUTPUT);\n' +
  '  pinMode(CLK_DIO,OUTPUT);\n' +
  '  pinMode(DATA_DIO,OUTPUT);\n';
  var code = 'WriteNumber(' + value_num + ');\n';
  return code;
};
Blockly.Arduino.multifunction_PWM_write = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};