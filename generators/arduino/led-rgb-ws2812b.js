'use strict';

goog.provide('Blockly.Arduino.ledRGB_WS2812B');

goog.require('Blockly.Arduino');

Blockly.Arduino.lp2i_ledRGB_WS2812B_init = function() {
  var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB_init', Blockly.Arduino.ORDER_ATOMIC);
  var numpixels = Blockly.Arduino.valueToCode(this, 'Number_of_Pixels', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  Blockly.Arduino.includes_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B' + dropdown_name] = 'Adafruit_NeoPixel pixels_'+dropdown_name+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);';
  //dans le setup
  Blockly.Arduino.setups_['setup_pin_ledrgb'+dropdown_name] = 'pinMode('+pin_ledrgb+', OUTPUT);';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+dropdown_name] = 'pixels_'+dropdown_name+'.begin();';
  return '';
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_setPixelColor = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixels_'+dropdown_name+'.setPixelColor('+pixel_number+', pixels_'+dropdown_name+'.Color('+red+','+green+','+blue+'));\n'
			+ 'pixels_'+dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_setBrightness = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  //dans le setup
  var code = 'pixels_'+dropdown_name+'.setBrightness('+lumin+');\n';
  return code;
};