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
 * @fileoverview Helper functions for generating sensor blocks - sumo robots
 * Written to facilitate programming of sumo and mini-sumo robots
 * Thanks to Fred Lin for building BlockyDuino!
 * @author erickennedy@outlook.com  Eric Kennedy
 */

goog.provide('Blockly.Arduino.Zumo_auto');

goog.require('Blockly.Arduino');


Blockly.Arduino.Zumo_line_follower = function() {
  Blockly.Arduino.includes_["includes_Zumo_line_follower"] = 
  "#include <QTRSensors.h>\n" +
  "#include <ZumoReflectanceSensorArray.h>\n" +
  "#include <ZumoMotors.h>\n" +
  "#include <ZumoBuzzer.h>\n" +
  "#include <Pushbutton.h>\n" +
  "\n" +
  "ZumoBuzzer buzzer;\n" +
  "ZumoReflectanceSensorArray reflectanceSensors;\n" +
  "ZumoMotors motors;\n" +
  "Pushbutton button(ZUMO_BUTTON);\n" +
  "int lastError = 0;\n" +
  "const int MAX_SPEED = 400;";
  
  Blockly.Arduino.setups_['setup_Zumo_line_follower'] = 
  'buzzer.play(">g32>>c32");\n' +
  "reflectanceSensors.init();\n" +
  "button.waitForButton();\n" +
  "pinMode(13, OUTPUT);\n" +
  "digitalWrite(13, HIGH);\n" +
  "delay(1000);\n" +
  "int i;\n" +
  "for(i = 0; i < 80; i++){\n" +
  "  if ((i > 10 && i <= 30) || (i > 50 && i <= 70))\n" +
  "    motors.setSpeeds(-200, 200);\n" +
  "  else\n" +
  "    motors.setSpeeds(200, -200);\n" +
  "  reflectanceSensors.calibrate();\n" +
  "  delay(20);\n" +
  "  }\n" +
  "motors.setSpeeds(0,0);\n" +
  "digitalWrite(13, LOW);\n" +
  'buzzer.play(">g32>>c32");\n' +
  "button.waitForButton();\n" +
  'buzzer.play("L16 cdegreg4");\n' +
  "while(buzzer.isPlaying());\n"; 
  
  var code = 
  "unsigned int sensors[6];\n" +
  "int position = reflectanceSensors.readLine(sensors);\n" +
  "int error = position - 2500;\n" +
  "int speedDifference = error / 4 + 6 * (error - lastError);\n" +
  "lastError = error;\n" +
  "int m1Speed = MAX_SPEED + speedDifference;\n" +
  "int m2Speed = MAX_SPEED - speedDifference;\n" +
  "if (m1Speed < 0)    m1Speed = 0;\n" +
  "if (m2Speed < 0)    m2Speed = 0;\n" +
  "if (m1Speed > MAX_SPEED)    m1Speed = MAX_SPEED;\n" +
  "if (m2Speed > MAX_SPEED)    m2Speed = MAX_SPEED;\n" +
  "motors.setSpeeds(m1Speed, m2Speed);";
  return code;
};

Blockly.Arduino.Zumo_BorderDetect = function() {
  var wait_pin = this.getFieldValue('PIN');  
  Blockly.Arduino.definitions_["define_button_wait"] = 
  "const int buttonPin = 12;\n"+
  "int buttonState = 0;\n"+
  "void WaitForButton (){\n"+
  "	buttonState = digitalRead(buttonPin);\n"+
  "	while(buttonState == HIGH) {\n" +
  "		buttonState = digitalRead(buttonPin);\n" +
  "		}\n" +
  "	}\n";
 Blockly.Arduino.setups_['setup_button_wait'] = " pinMode(buttonPin, INPUT_PULLUP);\n"+
 "WaitForButton();\n";
  var code = '';
  return code;
};