'use strict';

goog.provide('Blockly.Arduino.lcd_i2c');

goog.require('Blockly.Arduino');

Blockly.Arduino.lcd_i2c_lcdinit = function() {
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

Blockly.Arduino.lcd_i2c_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.lcd_i2c_lcdwrite = function() {
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

Blockly.Arduino.lcd_i2c_lcdscan = function() {	
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