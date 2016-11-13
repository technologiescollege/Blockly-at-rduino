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

Blockly.Arduino.Zumo_SensorCalibration = function() {
  Blockly.Arduino.includes_["includes_Zumo_SensorCalibration"] = 
  "#include <QTRSensors.h>\n" +
  "#include <ZumoReflectanceSensorArray.h>";
  
  Blockly.Arduino.definitions_["defines_Zumo_SensorCalibration"] =
  "// Define an array for holding sensor values.\n" +
  "#define NUM_SENSORS 6\n" +
  "unsigned int sensorValues[NUM_SENSORS];";

  Blockly.Arduino.definitions_["defines_Zumo_Reflectance"] =
  "ZumoReflectanceSensorArray reflectanceSensors;\n";
  
  Blockly.Arduino.setups_['setup_Zumo_SensorCalibration'] = 
  "reflectanceSensors.init();\n" +
  "  delay(500);\n" +
  "  pinMode(13, OUTPUT);\n" +
  "  digitalWrite(13, HIGH);        // turn on LED to indicate we are in calibration mode\n" +  
  "  unsigned long startTime = millis();\n" +
  "  while(millis() - startTime < 10000)   // make the calibration take 10 seconds\n" +
  "  {\n" +
  "    reflectanceSensors.calibrate();\n" +
  "  }\n" +
  "  digitalWrite(13, LOW);         // turn off LED to indicate we are through with calibration\n" +
  "  // print the calibration minimum values measured when emitters were on\n" +
  "  Serial.begin(9600);\n" +
  "  for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "  {\n" +
  "    Serial.print(reflectanceSensors.calibratedMinimumOn[i]);\n" +
  "    Serial.print(' ');\n" +
  "  }\n" +
  "  Serial.println();\n" +  
  "  // print the calibration maximum values measured when emitters were on\n" +
  "  for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "  {\n" +
  "    Serial.print(reflectanceSensors.calibratedMaximumOn[i]);\n" +
  "    Serial.print(' ');\n" +
  "  }\n" +
  "  Serial.println();\n" +
  "  Serial.println();\n" +
  "  delay(1000);\n";
  
  var code = 
  "unsigned int position = reflectanceSensors.readLine(sensorValues);\n" +
  "// To get raw sensor values instead, call:  \n" +
  "//reflectanceSensors.read(sensorValues);\n" +
  "for (byte i = 0; i < NUM_SENSORS; i++)\n" +
  "{\n" +
  "  Serial.print(sensorValues[i]);\n" +
  "  Serial.print(' ');\n" +
  "}\n" +
  "Serial.print('   ');\n" +
  "Serial.println(position);\n" +  
  "delay(250);";  
  
  return code;
};

Blockly.Arduino.Zumo_line_follower = function() {
  var interval_error = Blockly.Arduino.valueToCode(this, 'ERROR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_["includes_Zumo_SensorCalibration"] = 
  "#include <QTRSensors.h>\n" +
  "#include <ZumoReflectanceSensorArray.h>";
  
  Blockly.Arduino.includes_["includes_Zumo_line_follower"] = 
  "#include <ZumoMotors.h>\n" +
  "#include <ZumoBuzzer.h>\n" +
  "#include <Pushbutton.h>";
  
   Blockly.Arduino.definitions_["defines_Zumo_Reflectance"] =
  "ZumoReflectanceSensorArray reflectanceSensors;";
  
  Blockly.Arduino.definitions_["defines_Zumo_line_follower"] =
  "ZumoBuzzer buzzer;\n" +
  "ZumoMotors motors;\n" +
  "Pushbutton button(ZUMO_BUTTON);\n" +
  "int lastError = 0;\n" +
  "const int MAX_SPEED = 400;";
  
  Blockly.Arduino.setups_['setup_Zumo_line_follower'] = 
  'buzzer.play(">g32>>c32");\n' +
  "  reflectanceSensors.init();\n" +
  "  button.waitForButton();\n" +
  "  pinMode(13, OUTPUT);\n" +
  "  digitalWrite(13, HIGH);\n" +
  "  delay(1000);\n" +
  "  int i;\n" +
  "  for(i = 0; i < 80; i++){\n" +
  "    if ((i > 10 && i <= 30) || (i > 50 && i <= 70))\n" +
  "      motors.setSpeeds(-200, 200);\n" +
  "    else\n" +
  "      motors.setSpeeds(200, -200);\n" +
  "    reflectanceSensors.calibrate();\n" +
  "    delay(20);\n" +
  "    }\n" +
  "  motors.setSpeeds(0,0);\n" +
  "  digitalWrite(13, LOW);\n" +
  '  buzzer.play(">g32>>c32");\n' +
  "  button.waitForButton();\n" +
  '  buzzer.play("L16 cdegreg4");'; 
  
  var code = 
  "unsigned int sensors[6];\n" +
  "int position = reflectanceSensors.readLine(sensors);\n" +
  "//error interval default = 2500\n" +
  "int error = position - " + interval_error + ";\n" +
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