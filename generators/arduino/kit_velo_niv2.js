Blockly.Arduino.kit_velo_niv1_chenillard = function() {
  var pin_ledrgb = '5';
  var numpixels = '30';
  var red = '0';
  var green = '0';
  var blue = '0';   
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n Adafruit_NeoPixel pixels = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
  Blockly.Arduino.setups_['setup_pin_ledrgb'] = 'pinMode('+pin_ledrgb+', OUTPUT);\n'
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B'] = 'pixels.begin();\n';
  var code = 'for(i=0;i<30;i++)\n'+
			'{\n'+
			'	pixels.setPixelColor((i), pixels.Color(255,0,0));\n'+
			'	if(i==0)\n'+
			'	{\n'+
			'		pixels.setPixelColor((29), pixels.Color(0,255,0));\n'+
			'		pixels.setPixelColor((28), pixels.Color(0,0,255));\n'+
			'		pixels.setPixelColor((27), pixels.Color(0,0,0));\n'+
			'	}\n'+
			'	else if(i==1)\n'+
			'	{\n'+
			'		pixels.setPixelColor((i-1), pixels.Color(0,255,0));\n'+
			'		pixels.setPixelColor((29), pixels.Color(0,0,255));\n'+
			'		pixels.setPixelColor((28), pixels.Color(0,0,0));\n'+
			'	}\n'+
			'	else\n'+
			'	{\n'+
			'		pixels.setPixelColor((i - 1), pixels.Color(0,255,0));\n'+
			'		pixels.setPixelColor((i - 2), pixels.Color(0,0,255));\n'+
			'		pixels.setPixelColor((i - 3), pixels.Color(0,0,0));\n'+
			'	}\n'+
			'	pixels.show();\n'+
			'	delay(200);\n'+
			'}';
  return code;
};

Blockly.Arduino.kit_velo_niv1_tone = function() {
};

Blockly.Arduino.kit_velo_niv1_notone = function() {
};

Blockly.Arduino.kit_velo_niv1_test_BP = function() {
};

Blockly.Arduino.kit_velo_niv1_pot = function() {
};



    