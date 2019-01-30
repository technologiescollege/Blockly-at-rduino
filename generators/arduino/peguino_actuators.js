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
 * @fileoverview Helper functions for generating peguino blocks.
 */

'use strict';
 
goog.provide('Blockly.Arduino.peguino_actuators');

goog.require('Blockly.Arduino');


Blockly.Arduino.peguino_actuators_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.peguino_actuators_i2c_scan = function() {	
	Blockly.Arduino.includes_['define_lcd_i2c_lcdscan'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_lcd_i2c_lcdscan'] = "Serial.begin (115200);\n" +
	"  // Leonardo: wait for serial port to connect\n" +
	"  while (!Serial)\n" +
	"    {\n" +
	"    }\n" +
	"  Serial.println();\n" +
	"  Serial.println('I2C scanner. Scanning ...');\n" +
	"  byte count = 0;\n" +
	"\n" + 
	"  Wire.begin();\n" +
	"  for (byte i = 8; i < 120; i++)\n" +
	"    {\n" +
	"	 Wire.beginTransmission (i);\n" +
	"	 if (Wire.endTransmission () == 0)\n" +
	"	   {\n" +
	"	   Serial.print ('Found address: ');\n" +
	"	   Serial.print (i, DEC);\n" +
	"	   Serial.print (' (0x');\n" +
	"	   Serial.print (i, HEX);\n" +
	"	   Serial.println (')');\n" +
	"	   count++;\n" +
	"	   delay (1);\n" +
	"	   } // end of good response\n" +
	"    } // end of for loop\n" +
	"  Serial.println ('Done.');\n" +
	"  Serial.print ('Found ');\n" +
	"  Serial.print (count, DEC);\n" +
	"  Serial.println (' device(s).');\n";
	var code = '';	
	return code;
};

Blockly.Arduino.peguino_actuators_i2c_lcdinit = function() {
  var dropdown_I2C_adress = this.getFieldValue('I2C_adress');
  var dropdown_nbcol = this.getFieldValue('nbcol');
  var dropdown_nblig = this.getFieldValue('nblig');
  var dropdown_cursor = this.getFieldValue('cursor');
  var dropdown_blink = this.getFieldValue('blink');
  var dropdown_backlight = this.getFieldValue('backlight');
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd('+dropdown_I2C_adress+', '+dropdown_nbcol+', '+dropdown_nblig+');';
  var mysetup='lcd.init();\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='  lcd.backlight();\n';
  } else
  {
    mysetup+='  lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='  lcd.cursor();\n';
  } else
  {
    mysetup+='  lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='  lcd.blink();\n';
  } else
  {
    mysetup+='  lcd.noBlink();\n';
  }
  Blockly.Arduino.setups_['setup_lcd'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.peguino_actuators_i2c_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var dropdown_lig = Blockly.Arduino.valueToCode(this, 'LIG',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';    
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.peguino_actuators_i2c_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.peguino_actuators_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_grove_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.peguino_actuators_servo_attach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  if (profile.defaultBoard = profile["kit_peguino_uno_esp32"])
	  Blockly.Arduino.includes_['define_servo'] = '#include <ESP32Servo.h>';
  if (profile.defaultBoard = profile["kit_peguino_uno_nano"])
	  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  
  Blockly.Arduino.definitions_['var_servo' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';
  return '';
};

Blockly.Arduino.peguino_actuators_servo_move = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};


Blockly.Arduino.peguino_actuators_servo_read_degrees = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_actuators_servo_attached = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name+'.attached()';  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_actuators_servo_detach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  
  var code = dropdown_name+'.detach();';
  return code;
};

Blockly.Arduino.peguino_actuators_servo_rot_continue = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.peguino_actuators_servo_rot_continue_param = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var degree = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_etat = this.getFieldValue('ETAT');
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  
  if (dropdown_etat == "FORWARD") var value_degree = 90 + parseInt(degree);
  if (dropdown_etat == "BACKWARD") var value_degree = 90 - parseInt(degree);

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};