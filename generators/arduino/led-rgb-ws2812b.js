Blockly.Arduino.lp2i_ledRGB_WS2812B_init = function() {
  var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB', Blockly.Arduino.ORDER_ATOMIC);
  var numpixels = Blockly.Arduino.valueToCode(this, 'Number_of_Pixels', Blockly.Arduino.ORDER_ATOMIC);  
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n Adafruit_NeoPixel pixels = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
  //dans le setup
  Blockly.Arduino.setups_['setup_pin_ledrgb'] = 'pinMode('+pin_ledrgb+', OUTPUT);\n'
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B'] = 'pixels.begin();\n';
    return '';
};

Blockly.Arduino.lp2i_ledRGB_WS2812B_setPixelColor = function() {
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);   

  var code = 'pixels.setPixelColor('+pixel_number+', pixels.Color('+red+','+green+','+blue+'));\n'
	code    += 'pixels.show();\n'
  return code;
};