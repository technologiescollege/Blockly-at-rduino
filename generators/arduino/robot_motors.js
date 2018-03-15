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
 * @fileoverview Helper functions for generating motor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

goog.provide('Blockly.Arduino.robots_motors');

goog.require('Blockly.Arduino');

Blockly.Arduino.ardu_motor = function() {
    var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(12,OUTPUT);//directionPinA\n"+
  "  pinMode(13,OUTPUT);//directionPinB\n"+
  "  pinMode(3,OUTPUT);//speedPinA\n"+
  "  pinMode(11,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(3,"+speed+");//Motor A speed\n"+
     "  analogWrite(11,"+speed+");//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(3,"+speed+");//Motor A speed\n"+
     "  analogWrite(11,"+speed+");//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B  (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(3,"+speed+");//Motor A speed\n"+
     "  analogWrite(11,"+speed+");//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(3,"+speed+");//Motor A speed\n"+
     "  analogWrite(11,"+speed+");//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B(right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A(left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(3,0);//Motor A speed\n"+
     "  analogWrite(11,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.ardu_motor_s = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(12,OUTPUT);//directionPinA\n"+
  "  pinMode(13,OUTPUT);//directionPinB\n"+
  "  pinMode(3,OUTPUT);//speedPinA\n"+
  "  pinMode(11,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(3,"+speedA+");//Motor A speed\n"+
     "  analogWrite(11,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(3,"+speedA+");//Motor A speed\n"+
     "  analogWrite(11,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(3,"+speedA+");//Motor A speed\n"+
     "  analogWrite(11,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(3,"+speedA+");//Motor A speed\n"+
     "  analogWrite(11,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(3,0);//Motor A speed\n"+
     "  analogWrite(11,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};


Blockly.Arduino.radio_shack_s = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(1,OUTPUT);//directionPinA\n"+
  "  pinMode(2,OUTPUT);//directionPinB\n"+
  "  pinMode(4,OUTPUT);//speedPinA\n"+
  "  pinMode(3,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(4,"+speedA+");//Motor A speed\n"+
     "  analogWrite(3,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(2,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(1,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(4,"+speedA+");//Motor A speed\n"+
     "  analogWrite(3,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(2,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(1,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(4,"+speedA+");//Motor A speed\n"+
     "  analogWrite(3,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(2,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(1,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(4,"+speedA+");//Motor A speed\n"+
     "  analogWrite(3,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(2,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(1,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(3,0);//Motor A speed\n"+
     "  analogWrite(4,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.pololu_drv8835_s = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(7,OUTPUT);//directionPinA\n"+
  "  pinMode(8,OUTPUT);//directionPinB\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(8,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speedA+");//Motor A speed\n"+
     "  analogWrite(10,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(8,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(9,0);//Motor A speed\n"+
     "  analogWrite(10,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.arduino_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(12,OUTPUT);//directionPinA\n"+
  "  pinMode(13,OUTPUT);//directionPinB\n"+
  "  pinMode(3,OUTPUT);//speedPinA\n"+
  "  pinMode(11,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(3,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(3,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(12,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(3,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward(int MotA, int MotB)\n"+
"{\n"+
     "  analogWrite(3,MotA);//Motor A speed\n"+
     "  analogWrite(11,MotB);//Motor B speed\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(12,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward("+speedA+", "+speedB+");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(3,0);//Motor A speed\n"+
     "  analogWrite(11,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.dfrobot_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(4,OUTPUT);//directionPinA\n"+
  "  pinMode(7,OUTPUT);//directionPinB\n"+
  "  pinMode(5,OUTPUT);//speedPinA\n"+
  "  pinMode(6,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A speed\n"+
     "  analogWrite(6,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(4,LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A speed\n"+
     "  analogWrite(6,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite(4,LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A speed\n"+
     "  analogWrite(6,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(4,HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(5,"+speedA+");//Motor A speed\n"+
     "  analogWrite(6,"+speedB+");//Motor B speed\n"+
     "  digitalWrite(7,HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite(4,HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite(5,0);//Motor A speed\n"+
     "  analogWrite(6,0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

Blockly.Arduino.generic_motor_s = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var speedA = Blockly.Arduino.valueToCode(this, 'SPEEDA', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var speedB = Blockly.Arduino.valueToCode(this, 'SPEEDB', Blockly.Arduino.ORDER_ATOMIC) || '127'
  var DirPinA = this.getFieldValue("PIN-AD");
  var DirPinB = this.getFieldValue("PIN-BD");
  var PWMPinA = this.getFieldValue("PIN-AS");
  var PWMPinB = this.getFieldValue("PIN-BS");
  Blockly.Arduino.setups_["setup_motor_s"] = "pinMode("+DirPinA+",OUTPUT);//directionPinA\n"+
  "  pinMode("+DirPinB+",OUTPUT);//directionPinB\n"+
  "  pinMode("+PWMPinA+",OUTPUT);//speedPinA\n"+
  "  pinMode("+PWMPinB+",OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite("+PWMPinA+","+speedA+");//Motor A speed\n"+
     "  analogWrite("+PWMPinB+","+speedB+");//Motor B speed\n"+
     "  digitalWrite("+DirPinB+",LOW);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite("+DirPinA+",LOW);//turn DC Motor A (left) move clockwise\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite("+PWMPinA+","+speedA+");//Motor A speed\n"+
     "  analogWrite("+PWMPinB+","+speedB+");//Motor B speed\n"+
     "  digitalWrite("+DirPinB+",HIGH);//turn DC Motor B (right) move clockwise\n"+
     "  digitalWrite("+DirPinA+",LOW);//turn DC Motor A (left) move anti-clockwise\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite("+PWMPinA+","+speedA+");//Motor A speed\n"+
     "  analogWrite("+PWMPinB+","+speedB+");//Motor B speed\n"+
     "  digitalWrite("+DirPinB+",LOW);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite("+DirPinA+",HIGH);//turn DC Motor A (left) move clockwise\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite("+PWMPinA+","+speedA+");//Motor A speed\n"+
     "  analogWrite("+PWMPinB+","+speedB+");//Motor B speed\n"+
     "  digitalWrite("+DirPinB+",HIGH);//turn DC Motor B (right) move anticlockwise\n"+
     "  digitalWrite("+DirPinA+",HIGH);//turn DC Motor A (left) move anticlockwise\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  analogWrite("+PWMPinA+",0);//Motor A speed\n"+
     "  analogWrite("+PWMPinB+",0);//Motor B speed\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};

// @pbra 20160613
Blockly.Arduino.l298n_motor_init = function() {
  var id = this.getFieldValue('L298_NAME');
  var PinEN = this.getFieldValue("PIN-EN");
  var PinIN1 = this.getFieldValue("PIN-IN1");
  var PinIN2 = this.getFieldValue("PIN-IN2");
  var mysetup = "";

  mysetup += "// pin assignation for L298N : " + id + "\n";
  mysetup += " pinMode("+PinIN1+",OUTPUT);//IN1_" + id +" Pin\n" ;
  mysetup += " pinMode("+PinIN2+",OUTPUT);//IN2_" + id +" Pin\n";
  mysetup += " pinMode("+PinEN+",OUTPUT);//PWM_" + id +" Pin\n" ;
  Blockly.Arduino.setups_["setup_l298n_motor" + id] = mysetup;
  Blockly.Arduino.definitions_["setup_l298n_motor" + id] = "// pin assignation for L298N : " + id + "\n"+
	"int l298n_" + id + "[3] = {"+PinEN+", "+PinIN1+", "+PinIN2+"};\n";
  var code = "";
  return code;
};

// @pbra 20160612
Blockly.Arduino.l298n_motor = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var id = this.getFieldValue('L298_NAME');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';

  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_l298n_forward'] = "void l298n_forward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],HIGH);//turn DC Motor move clockwise\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor move clockwise\n"+
"}\n";
    code="l298n_forward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="backward") {
    Blockly.Arduino.definitions_['define_l298n_backward'] = "void l298n_backward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor move anti-clockwise\n"+
     "  digitalWrite(Pins[2],HIGH);//turn DC Motor move anti-clockwise\n"+
"}\n\n";
    code="l298n_backward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_l298n_stop'] = "void l298n_stop(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],0);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_stop(l298n_" + id + ");\n";
  } else if (dropdown_direction==="brake"){
    Blockly.Arduino.definitions_['define_l298n_brake'] = "void l298n_brake(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],255);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="l298n_brake(l298n_" + id + ");\n";
  }
  return code;
};

Blockly.Arduino.generic_motor = function() {
   var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var PinA1 = this.getFieldValue("PIN-A1");
  var PinB1 = this.getFieldValue("PIN-B1");
  var PinA2 = this.getFieldValue("PIN-A2");
  var PinB2 = this.getFieldValue("PIN-B2");
  Blockly.Arduino.setups_["setup_motor"] = "pinMode("+PinA1+",OUTPUT);//PinA1\n"+
  "  pinMode("+PinB1+",OUTPUT);//PinB1\n"+
  "  pinMode("+PinA2+",OUTPUT);//PinA2\n"+
  "  pinMode("+PinB2+",OUTPUT);//PinB2\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  digitalWrite("+PinA1+",HIGH);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB1+",HIGH);//turn DC Motor B (Right) \n"+
     "  digitalWrite("+PinA2+",LOW);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB2+",LOW);//turn DC Motor B (Right) \n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  digitalWrite("+PinA1+",HIGH);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB1+",LOW);//turn DC Motor B (Right) \n"+
     "  digitalWrite("+PinA2+",LOW);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB2+",HIGH);//turn DC Motor B (Right) \n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  digitalWrite("+PinA1+",LOW);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB1+",HIGH);//turn DC Motor B (Right) \n"+
     "  digitalWrite("+PinA2+",HIGH);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB2+",LOW);//turn DC Motor B (Right) \n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  digitalWrite("+PinA1+",LOW);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB1+",LOW);//turn DC Motor B (Right) \n"+
     "  digitalWrite("+PinA2+",HIGH);//turn DC Motor A (Left) \n"+
     "  digitalWrite("+PinB2+",HIGH);//turn DC Motor B (Right) \n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "  digitalWrite("+PinA1+",LOW);//turn DC Motor A (Left)  off\n"+
     "  digitalWrite("+PinB1+",LOW);//turn DC Motor B (Right) off\n"+
     "  digitalWrite("+PinA2+",LOW);//turn DC Motor A (Left) off\n"+
     "  digitalWrite("+PinB2+",LOW);//turn DC Motor B (Right) off\n"+
"}\n\n"
    code="stop();\n";
  }
  return code;
};