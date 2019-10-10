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

goog.provide('Blockly.Arduino.microsaurus');

goog.require('Blockly.Arduino');

Blockly.Arduino.ms_IR_receiver = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_ms_IR_init'] =
  "const uint8_t interruptPin = " + value_pin + ";\n" +
  "// remote\n" +
  "boolean  rmReceived = 0;  //信号受信完了した\n" +
  "uint8_t  i;               //受信データの桁\n" +
  "uint8_t  rmState = 0;     //信号受信状況\n" +
  "uint8_t  dataCode;        //データコード(8bit)\n" +
  "uint8_t  rmData;        //データコード(8bit)外部用\n" +
  "uint8_t  invDataCode;     //反転データコード(8bit)\n" +
  "uint16_t customCode;      //カスタムコード(16bit)\n" +
  "uint32_t rmCode;          //コード全体(32bit)\n" +
  "volatile uint32_t prevMicros = 0; //時間計測用\n" +
  "\n" +
  "void rmUpdate() //信号が変化した\n" +
  "{\n" +
  "  uint32_t width; //パルスの幅を計測\n" +
  "  if(rmState != 0){\n" +
  "    width = micros() - prevMicros;  //時間間隔を計算\n" +
  "    if(width > 10000)rmState = 0; //長すぎ\n" +
  "    prevMicros = micros();  //次の計算用\n" +
  "  }\n" +
  "  switch(rmState){\n" +
  "    case 0: //信号未達\n" +
  "    prevMicros = micros();  //現在時刻(microseconds)を記憶\n" +
  "    rmState = 1;  //最初のOFF->ON信号を検出した\n" +
  "    i = 0;\n" +
  "    return;\n" +
  "    case 1: //最初のON状態\n" +
  "      if((width > 9500) || (width < 8500)){ //リーダーコード(9ms)ではない\n" +
  "        rmState = 0;\n" +
  "      }else{\n" +
  "        rmState = 2;  //ON->OFFで9ms検出\n" +
  "      }\n" +
  "      break;\n" +
  "    case 2: //9ms検出した\n" +
  "      if((width > 5000) || (width < 4000)){ //リーダーコード(4.5ms)ではない\n" +
  "        rmState = 0;\n" +
  "      }else{\n" +
  "        rmState = 3;  //OFF->ONで4.5ms検出\n" +
  "      }\n" +
  "      break;\n" +
  "    case 3: //4.5ms検出した\n" +
  "      if((width > 700) || (width < 400)){\n" +
  "        rmState = 0;\n" +
  "      }else{\n" +
  "        rmState = 4;  //ON->OFFで0.56ms検出した\n" +
  "      }\n" +
  "      break;\n" +
  "    case 4: //0.56ms検出した\n" +
  "      if((width > 1800) || (width < 400)){  //OFF期間(2.25-0.56)msより長い or (1.125-0.56)msより短い\n" +
  "        rmState = 0;\n" +
  "      }else{\n" +
  "        if(width > 1000){ //OFF期間長い -> 1\n" +
  "          bitSet(rmCode, (i));\n" +
  "        }else{             //OFF期間短い -> 0\n" +
  "          bitClear(rmCode, (i));\n" +
  "        }\n" +
  "        i++;  //次のbit\n" +
  "        if(i > 31){ //完了\n" +
  "          rmReceived = 1;\n" +
  "          return;\n" +
  "        }\n" +
  "        rmState = 3;  //次のON->OFFを待つ\n" +
  "      }\n" +
  "      break;\n" +
  "    }\n" +
  "}\n";

  Blockly.Arduino.setups_['setup_ms_IR_init'] = 
  'attachInterrupt(digitalPinToInterrupt(interruptPin), rmUpdate, CHANGE);\n';

  var code = '';
  return code;
};

Blockly.Arduino.ms_IR_checker = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 
  "if(rmReceived){ //リモコン受信した\n" +
  "  detachInterrupt(digitalPinToInterrupt(interruptPin));\n" +
  "  rmState = 0;      //初期化\n" +
  "  //図とは左右が逆であることに注意\n" +
  "  customCode = rmCode;    //下16bitがcustomCode\n" +
  "  dataCode = rmCode >> 16;  //下16bitを捨てたあとの下8bitがdataCode\n" +
  "  invDataCode = rmCode >> 24; //下24bitを捨てたあとの下8bitがinvDataCode\n" +
  "  if((dataCode + invDataCode) == 0xff){   //反転確認\n" +
  "    rmData = dataCode;\n" +
  "  }\n" +
  "  rmReceived = 0;\n" +
  "  attachInterrupt(digitalPinToInterrupt(interruptPin), rmUpdate, CHANGE);\n" +
  "}else{rmData = 0;}\n"
  ;
  return code;
};

Blockly.Arduino.ms_IR_reset_flag = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'rmReceived = false;\n';
  return code;
};

Blockly.Arduino.ms_IR_recv_flag = function() {
  var code = 'rmReceived';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ms_IR_get_code = function() {
  var code = 'rmData';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ms_init_wav = function(block) {
  var value_sound_name1 = Blockly.Arduino.valueToCode(block, 'sound_name1', Blockly.Arduino.ORDER_ATOMIC);
  var value_sound_name2 = Blockly.Arduino.valueToCode(block, 'sound_name2', Blockly.Arduino.ORDER_ATOMIC);
  var value_sound_name3 = Blockly.Arduino.valueToCode(block, 'sound_name3', Blockly.Arduino.ORDER_ATOMIC);
  var number_pin = block.getFieldValue('PIN');
  var number_enbl = block.getFieldValue('ENBL');
  // TODO: Assemble Arduino into code variable.
  var comment1="//";
  var comment2="//";
  var comment3="//";
  if(value_sound_name1==""){comment1="//";}
  else{comment1="";}
  if(value_sound_name2==""){comment2="//";}
  else{comment2="";}
  if(value_sound_name3==""){comment3="//";}
  else{comment3="";}
  Blockly.Arduino.definitions_['define_wav_init'] =
  "#include <avr/interrupt.h>\n" +
  "#include <avr/io.h>\n" +
  "#include <avr/pgmspace.h>\n" +
  "\n" +
  "// audio variables\n" +
  "uint8_t audEnbl = "+number_enbl+";  //chip enable to HT82V739;\n" +
  "uint8_t audOut = "+number_pin+";  //pwm tp HT82V739\n" +
  "volatile uint16_t audCounter;\n" +
  "uint8_t soundNum=1;\n" +
  "int soundLength = 0;\n" +
  "int soundLength1 = 0;\n" +
  "int soundLength2 = 0;\n" +
  "int soundLength3 = 0;\n" +
  "\n" +
  "void stopPlayback()\n" +
  "{\n" +
  "    digitalWrite(audEnbl, HIGH);\n" +
  "    digitalWrite(audOut, LOW);\n" +
  "    cli();\n" +
  "}\n" +
  "\n" +
  "ISR(TIMER0_COMPA_vect)\n" +
  "{\n" +
  "  OCR0A = TCNT0 + 30;\n" +
  "  if (audCounter >= soundLength-1) {\n" +
  "    stopPlayback();\n" +
  "  } else {\n" +
  "     switch(soundNum){\n" +
  "     case 0:\n" +
  "       "+comment1+"OCR2A = pgm_read_byte(&" + value_sound_name1 + "[audCounter]);\n" +
  "     break;\n" +
  "     case 1:\n" +
  "       "+comment2+"OCR2A = pgm_read_byte(&" + value_sound_name2 + "[audCounter]);\n" +
  "     break;\n" +
  "     case 2:\n" +
  "       "+comment3+"OCR2A = pgm_read_byte(&" + value_sound_name3 + "[audCounter]);\n" +
  "     break;\n" +
  "     default:\n" +
  "     break;\n" +
  "   }\n" +
  "  }\n" +
  "  ++audCounter;\n" +
  "}\n" +
  "\n" +
  "void startPlayback(char* sp)\n" +
  "{\n" +
  "   if(sp==\"" + value_sound_name1 + "\"){\n" +
  "     soundNum = 0;\n" +
  "     soundLength = soundLength1;\n" +
  "   }else if(sp==\"" + value_sound_name2 + "\"){\n" +
  "     soundNum = 1;\n" +
  "     soundLength = soundLength2;\n" +
  "   }else if(sp==\"" + value_sound_name3 + "\"){\n" +
  "     soundNum = 2;\n" +
  "     soundLength = soundLength3;\n" +
  "   }else{\n" +
  "     return;\n" +
  "   }\n" +
  "    ASSR &= ~(_BV(EXCLK) | _BV(AS2));\n" +
  "    TCCR2A |= _BV(WGM21) | _BV(WGM20);\n" +
  "    TCCR2B &= ~_BV(WGM22);\n" +
  "    TCCR2A = (TCCR2A | _BV(COM2A1)) & ~_BV(COM2A0);\n" +
  "    TCCR2B = (TCCR2B & ~(_BV(CS22) | _BV(CS21))) | _BV(CS20);\n" +
  "    OCR2A = pgm_read_byte(&sound_data[0]);\n" +
  "    audCounter = 0;\n" +
  "    digitalWrite(audEnbl, LOW);\n" +
  "    cli();\n" +
  "    TCCR0A &= ~(_BV(WGM01) | _BV(WGM00));\n" +
  "    TIMSK0 |= _BV(OCIE0A);\n" +
  "    TIFR0 |= _BV(OCF0A);\n" +
  "    sei();\n" +
  "}\n";

  Blockly.Arduino.setups_['setup_wav_init'] = 
  "pinMode(audOut, OUTPUT);\n" +
  "pinMode(audEnbl, OUTPUT);\n" +
  "digitalWrite(audEnbl, HIGH);\n" +
  comment1+"soundLength1 = sizeof "+ value_sound_name1 +";\n" +
  comment2+"soundLength2 = sizeof "+ value_sound_name2 +";\n" +
  comment3+"soundLength3 = sizeof "+ value_sound_name3 +";\n";
  var code = '';
  return code;
};

Blockly.Arduino.ms_play_wav = function(block) {
  var value_sound_name = Blockly.Arduino.valueToCode(block, 'sound_name', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'startPlayback(\"'+value_sound_name+'\");\n';
  return code;
};

Blockly.Arduino.ms_action_stop = function(block) {
  var dropdown_name1 = this.getFieldValue('front_leg');
  var value_f_offset = Blockly.Arduino.valueToCode(block, 'f_offset', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name2 = this.getFieldValue('rear_leg');
  var value_r_offset = Blockly.Arduino.valueToCode(block, 'r_offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  dropdown_name1 + ".write(90 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(90 + " + value_r_offset + ");\n";
  return code;
};

Blockly.Arduino.ms_action_fwrd = function(block) {
  var dropdown_name1 = this.getFieldValue('front_leg');
  var value_f_offset = Blockly.Arduino.valueToCode(block, 'f_offset', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name2 = this.getFieldValue('rear_leg');
  var value_r_offset = Blockly.Arduino.valueToCode(block, 'r_offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(100 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(80 + " + value_r_offset + ");\n" +
  "delay(200);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(80 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(100 + " + value_r_offset + ");\n" +
  "delay(200);\n";
  return code;
};

Blockly.Arduino.ms_action_bwrd = function(block) {
  var dropdown_name1 = this.getFieldValue('front_leg');
  var value_f_offset = Blockly.Arduino.valueToCode(block, 'f_offset', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name2 = this.getFieldValue('rear_leg');
  var value_r_offset = Blockly.Arduino.valueToCode(block, 'r_offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(100 + " + value_r_offset + ");\n" +
  "delay(200);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(80 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(80 + " + value_r_offset + ");\n" +
  "delay(200);\n" +
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(100 + " + value_r_offset + ");\n" +
  "delay(100);\n";
  return code;
};

Blockly.Arduino.ms_action_ltrn = function(block) {
  var dropdown_name1 = this.getFieldValue('front_leg');
  var value_f_offset = Blockly.Arduino.valueToCode(block, 'f_offset', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name2 = this.getFieldValue('rear_leg');
  var value_r_offset = Blockly.Arduino.valueToCode(block, 'r_offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(90 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(90 + " + value_r_offset + ");\n" +
  "delay(200);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(70 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(110 + " + value_r_offset + ");\n" +
  "delay(200);\n";
  return code;
};

Blockly.Arduino.ms_action_rtrn = function(block) {
  var dropdown_name1 = this.getFieldValue('front_leg');
  var value_f_offset = Blockly.Arduino.valueToCode(block, 'f_offset', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name2 = this.getFieldValue('rear_leg');
  var value_r_offset = Blockly.Arduino.valueToCode(block, 'r_offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(110 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(80 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(70 + " + value_r_offset + ");\n" +
  "delay(200);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(90 + " + value_r_offset + ");\n" +
  "delay(100);\n" +
  dropdown_name1 + ".write(100 + " + value_f_offset + ");\n" +
  dropdown_name2 + ".write(90 + " + value_r_offset + ");\n" +
  "delay(200);\n";
  return code;
};