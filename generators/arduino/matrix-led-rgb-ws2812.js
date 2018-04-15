'use strict';

goog.provide('Blockly.Arduino.MatrixLED_WS2812B');

goog.require('Blockly.Arduino');

Blockly.Arduino.MatrixLED_WS2812B_init = function() {
  var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_Matrix_init', Blockly.Arduino.ORDER_ATOMIC);
  var numpixels = 64;
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('MATRIX_NEOPIXEL_NAME');
  Blockly.Arduino.includes_['includes_Matrix_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
  Blockly.Arduino.definitions_['define_Matrix_ledRGB_WS2812B' + dropdown_name] = 'Adafruit_NeoPixel ' + dropdown_name + ' = Adafruit_NeoPixel(' + numpixels + ', '+ pin_ledrgb +', NEO_GRB + NEO_KHZ800);';
  
  Blockly.Arduino.setups_['setup_Matrix_ledRGB_WS2812B' + dropdown_name] = 'pinMode('+pin_ledrgb+', OUTPUT);\n'
  + '  ' + dropdown_name + '.begin();';
  return '';
};

Blockly.Arduino.MatrixLED_WS2812B_setPixelColor = function() {
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var dropdown_name = this.getFieldValue('MATRIX_NEOPIXEL_NAME');
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);

  var code = dropdown_name+'.setPixelColor('+pixel_number+', ' + dropdown_name + '.Color('+red+','+green+','+blue+','+lumin+'));\n'
			+ dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.MatrixLED_WS2812B_setBrightness = function() {
  //var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('MATRIX_NEOPIXEL_NAME');
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = dropdown_name+'.setBrightness('+lumin+');\n';
  return code;
};

Blockly.Arduino.MatrixLED_WS2812B_draw = function() {
  //var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('MATRIX_NEOPIXEL_NAME');
  
  var code = '';
  for (var i=0; i<64; i++) {
	if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
		var rgbHexa = this.getFieldValue('Pixel' + i).replace('#', '');
		code += dropdown_name+'.setPixelColor('+ i +', 0x' + rgbHexa + ');\n'
	}
  };
  code += dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.MatrixLED_WS2812B_CLEAN = function() {
  //var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('MATRIX_NEOPIXEL_NAME');
  
  var code = dropdown_name+".setBrightness(0);\n";
  return code;
};