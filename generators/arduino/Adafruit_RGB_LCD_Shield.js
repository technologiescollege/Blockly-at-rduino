/**
 * Blocks pour LCD RGB adafruit
	
 * @author Gwen
 */
'use strict';

goog.provide('Blockly.Arduino.Adafruit_RGB_LCD_Shield');
goog.require('Blockly.Arduino');

Blockly.Arduino.Adafruit_RGB_LCD_Shield_init = function() {
  
  Blockly.Arduino.includes_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['include_Adafruit_lcd_rgb'] = '#include <Adafruit_RGBLCDShield.h>';
  Blockly.Arduino.includes_['include_Adafruit_MCP23017'] = '#include <utility/Adafruit_MCP23017.h>';
  
  Blockly.Arduino.definitions_['obj_lcd'] = 'Adafruit_RGBLCDShield lcd = Adafruit_RGBLCDShield();';
  
  Blockly.Arduino.setups_['setup_lcd'] = 'lcd.begin(16, 2);\n';
  
  var code = '';
  
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_clear = function() {
   
  var code = 'lcd.clear();\n';
  
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_scrolling = function() {
  var dropdown_stat = this.getFieldValue('EFFECT');

  var code = 'lcd';
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_set_cursor = function() {
  
  var ligne = this.getFieldValue('Line');
  var colonne = this.getFieldValue('Row');
  var code = 'lcd.setCursor('+colonne+','+ligne+');\n';
  
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_set_RGB = function() {
  var dropdown_colour = this.getFieldValue('COLOUR');
  var code = 'lcd.setBacklight('+dropdown_colour+');\n';
  
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_print_data = function() {
  var data1 = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
 
  var code = 'lcd.print('+data1+');\n';
  
  return code;
};


Blockly.Arduino.Adafruit_RGB_LCD_Shield_write_data = function() {
  var data1 = this.getFieldValue('DATA');
 
  var dropdown_stat = this.getFieldValue('FORMAT');

  var code = 'lcd';
  if(dropdown_stat==="0x"){
    code += '.write(0x'+data1+');\n';
  } else if(dropdown_stat==="0b"){
    code += '.write(0b'+data1+');\n';
  } else {
    code += '.write('+data1+');\n';
  }
    
  return code;
};

Blockly.Arduino.Adafruit_RGB_LCD_Shield_read_button = function() {
	
	var code = 'lcd.readButtons()';
	
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
