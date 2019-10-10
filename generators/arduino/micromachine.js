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

goog.provide('Blockly.Arduino.micromachine');

goog.require('Blockly.Arduino');

Blockly.Arduino.mm_init_wav = function(block) {
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
  "// audio variables\n" +
  "uint8_t audEnbl = "+number_enbl+";\n" +
  "uint8_t audOut = "+number_pin+";\n" +
  "volatile uint16_t wavCounter;\n" +
  "hw_timer_t * timer = NULL;\n" +
  "volatile SemaphoreHandle_t timerSemaphore;\n" +
  "uint8_t soundNum=1;\n" +
  "int soundLength = 0;\n" +
  "int soundLength1 = 0;\n" +
  "int soundLength2 = 0;\n" +
  "int soundLength3 = 0;\n" +
  "\n";
  Blockly.Arduino.userFunctions_['function_init_wav'] =  
  
  "void stopPlayback()\n" +
  "{\n" +
  "  timerAlarmDisable(timer);\n" +
  "  digitalWrite("+number_enbl+", HIGH);\n" +
  "}\n" +
  "void IRAM_ATTR onTimer()\n" +
  "{\n" +
  "  xSemaphoreGiveFromISR(timerSemaphore, NULL);\n" +
  "  if (wavCounter >= soundLength-1) {\n" +
  "    stopPlayback();\n" +
  "  } else {\n" +
  "     switch(soundNum){\n" +
  "     case 0:\n" +
  "        "+comment1+"dacWrite("+number_pin+"," + value_sound_name1 + "[wavCounter++]);\n" +
  "     break;\n" +
  "     case 1:\n" +
  "        "+comment2+"dacWrite("+number_pin+"," + value_sound_name2 + "[wavCounter++]);\n" +
  "     break;\n" +
  "     case 2:\n" +
  "        "+comment3+"dacWrite("+number_pin+"," + value_sound_name3 + "[wavCounter++]);\n" +
  "     break;\n" +
  "     default:\n" +
  "     break;\n" +
  "   }\n" +
  "  }\n" +
  "  ++wavCounter;\n" +
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
  "   wavCounter = 0;\n" +
  "   timerAlarmEnable(timer);\n" +
  "   digitalWrite("+number_enbl+", LOW);\n" +
  "}\n" +
  "\n";

  Blockly.Arduino.setups_['setup_wav_init'] = 
  "// audio\n" +
  "timerSemaphore = xSemaphoreCreateBinary();\n" +
  "timer = timerBegin(0, 80, true);\n" +
  "timerAttachInterrupt(timer, &onTimer, true);\n" +
  "timerAlarmWrite(timer, 124, true);\n" +
  "wavCounter = 0;\n" +
  "pinMode("+number_enbl+", OUTPUT);\n" +
  "digitalWrite("+number_enbl+", HIGH);\n" +
  comment1+"soundLength1 = sizeof "+ value_sound_name1 +";\n" +
  comment2+"soundLength2 = sizeof "+ value_sound_name2 +";\n" +
  comment3+"soundLength3 = sizeof "+ value_sound_name3 +";\n";
  var code = '';
  return code;
};

Blockly.Arduino.mm_play_wav = function(block) {
  var value_sound_name = Blockly.Arduino.valueToCode(block, 'sound_name', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'startPlayback(\"'+value_sound_name+'\");\n';
  return code;
};


Blockly.Arduino.mm_action_init = function(block) {
  var value_offset_name = Blockly.Arduino.valueToCode(block, 'offset', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var comment1="//";
  var comment2="//";
  if(value_offset_name==""){comment1="//";comment2="";}
  else{comment1="";comment2="//";}
  Blockly.Arduino.definitions_['define_action_init'] =
  "#include <Wire.h>\n" +
  "// another timer\n" +
  "hw_timer_t * timer2 = NULL;\n" +
  "volatile SemaphoreHandle_t timerSemaphore2;\n" +
  "\n" +
  "// action\n" +
  "#define STOP  0\n" +
  "#define FWRD  1\n" +
  "#define BWRD  2\n" +
  "#define RTRN  3\n" +
  "#define LTRN  4\n" +
  "#define RGHT  5\n" +
  "#define LEFT  6\n" +
  "#define FREE  7\n" +
  "int tempAngles[12] = {90,90,90,90,90,90,90,90,90,90,90,90};\n" +
  "int stopAngles[12] = {90,90,90,90,90,90,90,90,90,90,90,90};\n" +
  "int leftAngles[6][13] = {\n" +
  "  // LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time \n" +
  "  { 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90,100, 90, 90, 90, 90,100, 90, 90, 90, 8},\n" +
  "  {100, 90, 90,100, 90, 90, 90, 90,100, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90, 80, 90, 90, 90, 90, 80, 90, 90, 80, 8},\n" +
  "  { 90, 90, 90, 80, 90, 90, 90, 90, 80, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 8}\n" +
  "};\n" +
  "int rghtAngles[6][13] = {\n" +
  "  // LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time \n" +
  "  { 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90, 80, 90, 90, 90, 90, 80, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90, 80, 90, 90, 90, 90, 80, 90, 90, 80, 8},\n" +
  "  {100, 90, 90,100, 90, 90, 90, 90,100, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90,100, 90, 90, 90, 90,100, 90, 90, 90, 8},\n" +
  "  { 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 8}\n" +
  "};\n" +
  "int rtrnAngles[8][13] = {\n" +
  "  //LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time\n" +
  "  {90,100,100, 90, 90, 90, 90, 90, 90,100,100, 90, 8},\n" +
  "  {90, 90, 90,100, 80, 90, 90, 80, 90,100,100, 90, 8},\n" +
  "  {90, 90, 90,100, 70, 90, 90, 70, 90, 90, 90, 90, 4},\n" +
  "  {90, 90, 90,100, 80, 90, 90, 80, 90, 80, 80, 90, 4},\n" +
  "  {90, 80, 80, 90, 90, 90, 90, 90, 90, 80, 80, 90, 8},\n" +
  "  {90, 80, 80,100,100, 90, 90,100,100, 90, 90, 90, 8},\n" +
  "  {90, 90, 90, 90,110, 90, 90,110,100, 90, 90, 90, 4},\n" +
  "  {90,100,100, 90,100, 90, 90,100,100, 90, 90, 90, 4}\n" +
  "};\n" +
  "int ltrnAngles[8][13] = {\n" +
  "  //LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time\n" +
  "  {90,100,100, 90, 90, 90, 90, 90, 90,100,100, 90, 8},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 80,100,100, 90, 8},\n" +
  "  {90, 90, 90, 80, 70, 90, 90, 70, 90, 90, 90, 90, 4},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 90, 80, 80, 90, 4},\n" +
  "  {90, 80, 80, 90, 90, 90, 90, 90, 90, 80, 80, 90, 8},\n" +
  "  {90, 80, 80, 90,100, 90, 90,100,100, 90, 90, 90, 8},\n" +
  "  {90, 90, 90, 90,110, 90, 90,110,100, 90, 90, 90, 4},\n" +
  "  {90,100,100, 90,100, 90, 90,100,100, 90, 90, 90, 4}\n" +
  "};\n" +
  "int bwrdAngles[8][13] = {\n" +
  "  //LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time\n" +
  "  {90,100,100, 90,100, 90, 90,100,100, 90, 90, 90, 4},\n" +
  "  {90, 90, 90, 90,110, 90, 90,110,100, 90, 90, 90, 4},\n" +
  "  {90, 80, 80,100,100, 90, 90,100,100, 90, 90, 90, 8},\n" +
  "  {90, 80, 80, 90, 90, 90, 90, 90, 90, 80, 80, 90, 8},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 90, 80, 80, 90, 4},\n" +
  "  {90, 90, 90, 80, 70, 90, 90, 70, 90, 90, 90, 90, 4},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 80,100,100, 90, 8},\n" +
  "  {90,100,100, 90, 90, 90, 90, 90, 90,100,100, 90, 8}\n" +
  "};\n" +
  "int fwrdAngles[8][13] = {\n" +
  "  //LHR LHP LAP LAR LSP LSR RSR RSP RAR RAP RHP RHR time\n" +
  "  {90,100,100, 90, 90, 90, 90, 90, 90,100,100, 90, 8},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 80,100,100, 90, 8},\n" +
  "  {90, 90, 90, 80, 70, 90, 90, 70, 90, 90, 90, 90, 4},\n" +
  "  {90, 90, 90, 80, 80, 90, 90, 80, 90, 80, 80, 90, 4},\n" +
  "  {90, 80, 80, 90, 90, 90, 90, 90, 90, 80, 80, 90, 8},\n" +
  "  {90, 80, 80,100,100, 90, 90,100,100, 90, 90, 90, 8},\n" +
  "  {90, 90, 90, 90,110, 90, 90,110,100, 90, 90, 90, 4},\n" +
  "  {90,100,100, 90,100, 90, 90,100,100, 90, 90, 90, 4}\n" +
  "};\n" +
  "int motionAngles[32][13];\n" +
  "uint8_t maxRows;\n" +
  "uint8_t divCounter;\n" +
  "uint8_t keyFrame;\n" +
  "uint8_t nextKeyFrame;\n" +
  "uint8_t stepCounter;\n" +
  "uint8_t actionMode=0;\n" +
  "\n";
  Blockly.Arduino.userFunctions_['function_action_init'] =
  "void init_pca9685() {\n" +
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(0x0);\n" +
  "  Wire.write(0x80);\n" +
  "  Wire.endTransmission();\n" +
  "\n" + 
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(0x0);\n" +
  "  Wire.write(0x10);\n" +
  "  Wire.endTransmission();\n" +
  "\n" + 
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(0xFE);\n" +
  "  Wire.write(0x65);\n" +
  "  Wire.endTransmission();\n" +
  "\n" + 
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(0x0);\n" +
  "  Wire.write(0x80);\n" +
  "  Wire.endTransmission();\n" +
  "\n" + 
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(0x0);\n" +
  "  Wire.write(0xa0);\n" +
  "  Wire.endTransmission();\n" +
  "}\n" +
  "\n" +
  "void set_angle_first() {\n" +
  "  int angle;\n" +
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(6);\n" +
  "  for(int i=0;i<12;i++){\n" +
  "    "+comment1+"angle = 400 + (tempAngles[i] + "+value_offset_name+"[i] - 90)*2.8;\n" +
  "    "+comment2+"angle = 400 + (tempAngles[i] - 90)*2.8;\n" +
  "    Wire.write(0x0);\n" +
  "    Wire.write(0x0>>8);\n" +
  "    Wire.write(angle);\n" +
  "    Wire.write(angle>>8);\n" +
  "    delay(10);\n" +
  "  }\n" +
  "  Wire.endTransmission();\n" +
  "}\n" +
  "\n" +
  "void set_angle() {\n" +
  "  int angle;\n" +
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(6);\n" +
  "  for(int i=0;i<12;i++){\n" +
  "    "+comment1+"angle = 400 + (tempAngles[i] + "+value_offset_name+"[i] - 90)*2.8;\n" +
  "    "+comment2+"angle = 400 + (tempAngles[i] - 90)*2.8;\n" +
  "    Wire.write(0x0);\n" +
  "    Wire.write(0x0>>8);\n" +
  "    Wire.write(angle);\n" +
  "    Wire.write(angle>>8);\n" +
  "  }\n" +
  "  Wire.endTransmission();\n" +
  "}\n" +
  "\n" +
  "void set_angle(int num) {\n" +
  "  int angle;\n" +
  "  Wire.beginTransmission(0x40);\n" +
  "  Wire.write(6);\n" +
  "    angle = 400 + (tempAngles[num] /*+ [i]*/ - 90)*2.8;\n" +
  "    Wire.write(0x0);\n" +
  "    Wire.write(0x0>>8);\n" +
  "    Wire.write(angle);\n" +
  "    Wire.write(angle>>8);\n" +
  "  Wire.endTransmission();\n" +
  "}\n" +
  "\n" +
  "void IRAM_ATTR onTimer2(){\n" +
  "  xSemaphoreGiveFromISR(timerSemaphore2, NULL);\n" +
  "  if(actionMode != STOP/* && svFlag*/){\n" +
  "    divCounter++;\n" +
  "    if(divCounter >= motionAngles[nextKeyFrame][12]) {\n" +
  "      divCounter = 0;\n" +
  "      keyFrame = nextKeyFrame;\n" +
  "      nextKeyFrame++;\n" +
  "      if(nextKeyFrame > maxRows) {\n" +
  "        nextKeyFrame = 0;\n" +
  "        stepCounter++;\n" +
  "      }\n" +
  "    }\n" +
  "    for(int i=0; i<12; i++) {\n" +
  "      tempAngles[i] = motionAngles[keyFrame][i] +\n" +
  "        int8_t((motionAngles[nextKeyFrame][i] - motionAngles[keyFrame][i])\n" +
  "        * divCounter / motionAngles[nextKeyFrame][12]);\n" +
  "    }\n" +
  "  }\n" +
  "}\n";
  Blockly.Arduino.setups_['setup_action_init'] =
  "// servo\n" +
  "  Wire.begin(21,22);\n" +
  "  Wire.setClock(100000);\n" +
  "  init_pca9685();\n" +
  "  set_angle_first();\n" +
  "  pinMode(19, OUTPUT);\n" +
  "  digitalWrite(19,LOW);\n" +
  "  timerSemaphore2 = xSemaphoreCreateBinary();\n" +
  "  timer2 = timerBegin(1, 80, true);\n" +
  "  timerAttachInterrupt(timer2, &onTimer2, true);\n" +
  "  timerAlarmWrite(timer2, 30000, true);\n" +
  "  timerAlarmEnable(timer2);\n";

  var code = '';
  return code;
};

Blockly.Arduino.mm_action_stop = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = STOP;\n" +
  "for(int i=0; i<12; i++) {\n" +
  "  tempAngles[i] = stopAngles[i];\n" +
  "}\n" +
  "set_angle();\n";
  return code;
};

Blockly.Arduino.mm_action_fwrd = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = FWRD;\n" +
  "memcpy(motionAngles, fwrdAngles, sizeof(fwrdAngles));\n" +
  "maxRows = sizeof(fwrdAngles) / sizeof(*fwrdAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_action_bwrd = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = BWRD;\n" +
  "memcpy(motionAngles, bwrdAngles, sizeof(bwrdAngles));\n" +
  "maxRows = sizeof(bwrdAngles) / sizeof(*bwrdAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_action_ltrn = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = LTRN;\n" +
  "memcpy(motionAngles, ltrnAngles, sizeof(ltrnAngles));\n" +
  "maxRows = sizeof(ltrnAngles) / sizeof(*ltrnAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_action_rtrn = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = RTRN;\n" +
  "memcpy(motionAngles, rtrnAngles, sizeof(rtrnAngles));\n" +
  "maxRows = sizeof(rtrnAngles) / sizeof(*rtrnAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_action_left = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = LEFT;\n" +
  "memcpy(motionAngles, leftAngles, sizeof(leftAngles));\n" +
  "maxRows = sizeof(leftAngles) / sizeof(*leftAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_action_rght = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = RGHT;\n" +
  "memcpy(motionAngles, rghtAngles, sizeof(rghtAngles));\n" +
  "maxRows = sizeof(rghtAngles) / sizeof(*rghtAngles) - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_servo_drive = function(block) {
  var number_con = block.getFieldValue('con');
  var value_angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "tempAngles["+number_con+"] = "+value_angle+";\n" +
  "set_angle("+number_con+");\n";
  return code;
};

Blockly.Arduino.mm_action_free = function(block) {
  var value_array_name = Blockly.Arduino.valueToCode(block, 'array', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
  "actionMode = FREE;\n" +
  "memcpy(motionAngles, "+value_array_name+", sizeof("+value_array_name+"));\n" +
  "maxRows = sizeof("+value_array_name+") / sizeof(*"+value_array_name+") - 1;\n" +
  "divCounter = 0;\n" +
  "keyFrame = maxRows;\n" +
  "nextKeyFrame = 0;\n" +
  "stepCounter=0;\n" +
  "while(stepCounter<1){\n" +
  "  set_angle();\n" +
  "  delay(30);\n" +
  "}\n";
  return code;
};

Blockly.Arduino.mm_array_create_with = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || 'null';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.mm_array_getIndex = function() {
  var at = Blockly.Arduino.valueToCode(this, 'AT', Blockly.Arduino.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_MEMBER) || '[]';

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, decrement it right now.
    at = parseFloat(at) - 1;
  }
  var code = list + '[' + at + ']';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['mm_array_modify'] = function(block) {
  var value_indice = Blockly.Arduino.valueToCode(block, 'indice', Blockly.Arduino.ORDER_ATOMIC);
  var value_name = Blockly.Arduino.valueToCode(block, 'name', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = value_name+'['+value_indice+'] = '+value_value+';\n';
  return code;
};

Blockly.Arduino['mm_array_declare'] = function(block) {
    var argument0 = Blockly.Arduino.valueToCode(block, 'contenu', Blockly.Arduino.ORDER_ASSIGNMENT) ;
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	//var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
	var choice = block.getFieldValue("choix");
	var dimension = block.getFieldValue("dim");
	/*switch (choice) {
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
  }*/
  if (dimension == "d2"){
    var argument = argument0.split('{');
    var nb1 = argument.length - 2 ;
    var arg = argument[2].split(',');
    var nb2 = arg.length - 1 ;
    Blockly.Arduino.variables_[varName] = 'int' + ' ' + varName + '['+ nb1+']'+ '['+ nb2+'] = '+argument0+';';
  } else {
    Blockly.Arduino.variables_[varName] = 'int' + ' ' + varName + '[] = '+argument0+';';
  }
	return '';
};