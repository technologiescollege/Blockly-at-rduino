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
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_UNIT);
  var in_frequency = this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_UNIT);
  var in_playtime = this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_UNIT);
  var code = 'tone('+dropdown_pin+','+in_frequency+','+in_playtime+')';
  return code;
};

Blockly.Arduino.peguino_actuators_buzzer2 = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_UNIT);
  var in_frequency = this.getFieldValue('Number'); //this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_VALUE);
  var in_playtime = this.getFieldValue(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_UNIT);
  var code = 'tone('+dropdown_pin+','+in_frequency+','+in_playtime+')';
  return code;
};


Blockly.Arduino.peguino_actuators_led = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_LED_UNIT); 
  var led_status = this.getFieldValue(Blockly.Msg.Peguino_LED_STATUS);
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+led_status+');\n';
  return code;
};

// Peguino Nano RGB LED Red = Pin D12, Green = Pin D11, Blue = Pin D13 
Blockly.Arduino.peguino_actuators_rgbled = function() {
	var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_RGBLED_STATUS);
	var red_value = '255';	// The Peguino RGB LED Brick contains a common anode. To switch if off, all values have to be set to 255. 0 = maximum light
	var green_value = '255';
	var blue_value = '255';
	var color_value = this.getFieldValue(Blockly.Msg.Peguino_RGBLED_RGBCOLORVALUE);
    var hex = color_value.replace('#','');
    var redinput = parseInt(hex.substring(0,2), 16);
    var greeninput = parseInt(hex.substring(2,4), 16);
    var blueinput = parseInt(hex.substring(4,6), 16);
	var redvalue = redinput - 255; 
	var red_value = Math.abs(redvalue);
	var greenvalue = greeninput - 255; 
	var green_value = Math.abs(greenvalue);
	var bluevalue = blueinput - 255; 
	var blue_value = Math.abs(bluevalue);
	var returncode = ' analogWrite(12,'+red_value+');\n analogWrite(11,'+green_value+');\n analogWrite(13,'+blue_value+');\n ';
	Blockly.Arduino.setups_['setup_RGBLED'] = "pinMode(12, OUTPUT);\n pinMode(11, OUTPUT);\n pinMode(13, OUTPUT);\n "
	return returncode;
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

Blockly.Arduino.peguino_actuators_u8g_draw_string = function() {
  var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);    
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr('+x+', '+y+', '+value_text+');\n'	
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};
Blockly.Arduino.peguino_actuators_u8g_draw_4strings = function() {
  var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr(0, 12, '+value_text_line1+');\n'
	code    += 'u8g.drawStr(0, 28, '+value_text_line2+');\n'
	code    += 'u8g.drawStr(0, 44, '+value_text_line3+');\n'
	code    += 'u8g.drawStr(0, 60, '+value_text_line4+');\n'	
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};

Blockly.Arduino.peguino_actuators_u8g_print = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);    
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code =
	'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.setPrintPos('+x+', '+y+');\n'	
	code    += 'u8g.print('+value_n+');\n'		
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};
Blockly.Arduino.peguino_actuators_u8g_4draw_print = function() {
  var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var value_n1 = Blockly.Arduino.valueToCode(this, 'N1', Blockly.Arduino.ORDER_ATOMIC);
  var value_n2 = Blockly.Arduino.valueToCode(this, 'N2', Blockly.Arduino.ORDER_ATOMIC);
  var value_n3 = Blockly.Arduino.valueToCode(this, 'N3', Blockly.Arduino.ORDER_ATOMIC);
  var value_n4 = Blockly.Arduino.valueToCode(this, 'N4', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_["define_u8g"] = '#include <U8glib.h>;\n U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_u8g"] =
	 'u8g.firstPage();\n'
	+ 'do {'
	+ 'u8g.setFont(u8g_font_unifont);\n'
	+ 'u8g.drawStr( 0, 22, "Bonjour !");\n'
	+ '} while( u8g.nextPage());\n'
	+ 'delay(1000);\n';
  var code = 'u8g.firstPage();\n'
	code    += 'do {\n'
	code    += 'u8g.drawStr(0, 12, '+value_text_line1+');\n'
	code    += 'u8g.setPrintPos(100, 12 );\n'	
	code    += 'u8g.print('+value_n1+');\n'		
	code    += 'u8g.drawStr(0, 28, '+value_text_line2+');\n'
	code    += 'u8g.setPrintPos(100, 28 );\n'
	code    += 'u8g.print('+value_n2+');\n'			
	code    += 'u8g.drawStr(0, 44, '+value_text_line3+');\n'
	code    += 'u8g.setPrintPos(100, 44 );\n'
	code    += 'u8g.print('+value_n3+');\n'	
	code    += 'u8g.drawStr(0, 60, '+value_text_line4+');\n'
	code    += 'u8g.setPrintPos(100, 60 );\n'
	code    += 'u8g.print('+value_n4+');\n'		
	code    += '}\n while( u8g.nextPage() );\n';
  return code;
};