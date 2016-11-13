'use strict';

goog.provide('Blockly.Arduino.u8g');

goog.require('Blockly.Arduino');

Blockly.Arduino.lp2i_u8g_draw_string = function() {
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
Blockly.Arduino.lp2i_u8g_draw_4strings = function() {
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

Blockly.Arduino.lp2i_u8g_print = function() {
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
Blockly.Arduino.lp2i_u8g_4draw_print = function() {
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