
//https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/

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
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 * @author scanet@libreduc.cc (Sébastien Canet)
 */

'use strict';
 
goog.provide('Blockly.Arduino.grove_beginner_kit');

goog.require('Blockly.Arduino');

//1.Grove - LED: Simple LED module
Blockly.Arduino.grove_gbk_led = function() {
  var dropdown_pin = '4';
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_grove_gbk_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+', '+dropdown_stat+');\n';
  return code;
};

//2.Grove - Buzzer: Piezo Buzzer
Blockly.Arduino.grove_gbk_piezo_buzzer = function() {
  var pitch = this.getFieldValue('tone');
  var oct = this.getFieldValue('scale');
  var del = this.getFieldValue('dur');
  
  var code = 'tone(5, ' + pitch*oct + ', ' + del+ ');\n'
    + 'delay(' + del*2 + ');\n';
  return code; 
};

//3.Grove - OLED Display 0.96": 128×64 dot resolution High brightness,self-emission and high contrast ratio Big screen on a compact design Low power consumption.
Blockly.Arduino.grove_gbk_oled = function() {  
  Blockly.Arduino.includes_["include_u8g"] = '#include <U8x8lib.h>';
  Blockly.Arduino.definitions_["define_u8g"] = 'U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(SCL,SDA, U8X8_PIN_NONE);';
  Blockly.Arduino.setups_["setup_u8g"] = 'u8x8.begin();\n'
	+ '  u8x8.setFlipMode(1);\n'
    + '  u8x8.setFont(u8x8_font_chroma48medium8_r);\n';
  var refresh = this.getFieldValue('ref');                                 
  var text = Blockly.Arduino.valueToCode(this, 'input', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var col = Blockly.Arduino.valueToCode(this, 'col', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var line = Blockly.Arduino.valueToCode(this, 'line', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0'; 
  
  var base = 'u8x8.setCursor(' + line + ', ' + col + ');\n'
    + 'u8x8.print(' + text + ');\n';
  if (refresh =="FALSE")
    {
      var code = base;
    } else
       code = 'u8x8.setCursor(' + line + ', ' + col + ');\n'
          + 'u8x8.print(' + text + ');\n'
          + 'u8x8.print("                ");\n';
  return code;
};

// Blockly.Arduino.grove_gbk_oled_draw_string = function() {
  // var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  // var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);    
  // Blockly.Arduino.includes_["include_u8g"] = '#include <U8x8lib.h>';
  // Blockly.Arduino.definitions_["define_u8g"] = 'U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);';
  // Blockly.Arduino.setups_["setup_u8g"] = 'u8x8.begin();\n'
	// + '  u8x8.setFlipMode(1);\n'
    // + '  u8x8.setFont(u8x8_font_chroma48medium8_r);\n';
  // var code = 'u8x8.setCursor(' + x + ', ' + y + ');\n'
	// + 'u8x8.print(' + value_text + ');\n';
  // return code;
// };

// Blockly.Arduino.grove_gbk_oled_draw_4strings = function() {
  // var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';    
  // Blockly.Arduino.includes_["include_u8g"] = '#include <U8x8lib.h>';
  // Blockly.Arduino.definitions_["define_u8g"] = 'U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);';
  // Blockly.Arduino.setups_["setup_u8g"] = 'u8x8.begin();\n'
	// + '  u8x8.setFlipMode(1);\n'
    // + '  u8x8.setFont(u8x8_font_chroma48medium8_r);\n';
  // var code = 'u8x8.setCursor(0, 12);\n'
	// + 'u8x8.print(' + value_text_line1 + ');\n'
	// + 'u8x8.setCursor(0, 28);\n'
	// + 'u8x8.print(' + value_text_line2 + ');\n'
	// + 'u8x8.setCursor(0, 44);\n'
	// + 'u8x8.print(' + value_text_line3 + ');\n'
	// + 'u8x8.setCursor(0, 60);\n'
	// + 'u8x8.print(' + value_text_line4 + ');\n';
  // return code;
// };

// Blockly.Arduino.grove_gbk_oled_print = function() {
  // var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  // var x = Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
  // var y = Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);   
  // Blockly.Arduino.includes_["include_u8g"] = '#include <U8x8lib.h>';
  // Blockly.Arduino.definitions_["define_u8g"] = 'U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);';
  // Blockly.Arduino.setups_["setup_u8g"] = 'u8x8.begin();\n'
	// + '  u8x8.setFlipMode(1);\n'
    // + '  u8x8.setFont(u8x8_font_chroma48medium8_r);\n';
  // var code = 'u8x8.setCursor(' + x + ', ' + y + ');\n'
	// + 'u8x8.print(' + value_n + ');\n';
  // return code;
// };

// Blockly.Arduino.grove_gbkoled_4draw_print = function() {
  // var value_text_line1 = Blockly.Arduino.valueToCode(this, 'Text_line1', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line2 = Blockly.Arduino.valueToCode(this, 'Text_line2', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line3 = Blockly.Arduino.valueToCode(this, 'Text_line3', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_text_line4 = Blockly.Arduino.valueToCode(this, 'Text_line4', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  // var value_n1 = Blockly.Arduino.valueToCode(this, 'N1', Blockly.Arduino.ORDER_ATOMIC);
  // var value_n2 = Blockly.Arduino.valueToCode(this, 'N2', Blockly.Arduino.ORDER_ATOMIC);
  // var value_n3 = Blockly.Arduino.valueToCode(this, 'N3', Blockly.Arduino.ORDER_ATOMIC);
  // var value_n4 = Blockly.Arduino.valueToCode(this, 'N4', Blockly.Arduino.ORDER_ATOMIC);   
  // Blockly.Arduino.includes_["include_u8g"] = '#include <U8x8lib.h>';
  // Blockly.Arduino.definitions_["define_u8g"] = 'U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);';
  // Blockly.Arduino.setups_["setup_u8g"] = 'u8x8.begin();\n'
	// + '  u8x8.setFlipMode(1);\n'
    // + '  u8x8.setFont(u8x8_font_chroma48medium8_r);\n';
  // var code = 'u8x8.setCursor(0, 12);\n'
	// + 'u8x8.print(' + value_text_line1 + ');\n'
	// + 'u8x8.setCursor(100, 12);\n'
	// + 'u8x8.print(' + value_n1 + ');\n'
	// + 'u8x8.setCursor(0, 28);\n'
	// + 'u8x8.print(' + value_text_line2 + ');\n'
	// + 'u8x8.setCursor(100, 28);\n'
	// + 'u8x8.print(' + value_n2 + ');\n'
	// + 'u8x8.setCursor(0, 44);\n'
	// + 'u8x8.print(' + value_text_line3 + ');\n'
	// + 'u8x8.setCursor(100, 44);\n'
	// + 'u8x8.print(' + value_n3 + ');\n'
	// + 'u8x8.setCursor(0, 60);\n'
	// + 'u8x8.print(' + value_text_line4 + ');\n'
	// + 'u8x8.setCursor(100, 60);\n'
	// + 'u8x8.print(' + value_n4 + ');\n';
  // return code;
// };

//4.Grove - Button: Momentary Push Button
Blockly.Arduino.grove_gbk_button = function() {
  var dropdown_pin = '6';
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//5.Grove - Rotary Potentiometer: Adjustable Potentiometer
Blockly.Arduino.grove_gbk_rotary_angle = function() {
  var dropdown_pin = 'A0';
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//6.Grove - Light: Detects surrounding light intensity
Blockly.Arduino.grove_gbk_ldr = function() {
  var dropdown_pin = 'A6';
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//7.Grove - Sound: Detects surrounding sound intensity
Blockly.Arduino.grove_gbk_sound_sensor = function() {
  var dropdown_pin = 'A2';
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//8.Grove - Temperature & Humidity Sensor: Detects surrounding temperature and humidity values
Blockly.Arduino.grove_gbk_dht_read = function() {
  var pin = '3';
  var type = this.getFieldValue('TYPE');

  Blockly.Arduino.includes_['include_dht_'+ pin] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['define_dht_'+ pin] = 'DHT dht_' + pin  + '(' + pin + ', DHT11);';
  Blockly.Arduino.setups_['setup_dht_' + pin] = 'dht_' + pin + '.begin();';

  var code = '';
  switch(type){
      case 'T':
        code += 'dht_' + pin + '.readHumidity()';
      break;
      case 'H':
          code += 'dht_' + pin + '.readTemperature()';
      break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//7.Grove - Sound: Detects surrounding sound intensity
Blockly.Arduino.grove_gbk_pressure_read = function() {
  var type = this.getFieldValue('TYPE');

  Blockly.Arduino.includes_['include_wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['include_BMP280'] = '#include <Seeed_BMP280.h>';
  Blockly.Arduino.definitions_['define_BMP280'] = 'BMP280 bmp280;';
  Blockly.Arduino.setups_['setup_BMP280'] = 'bmp280.init();';

 var code = '';
  switch(type){
      case 'T':
        code += 'bmp280.getTemperature()';
      break;
      case 'P':
          code += 'bmp280.getPressure()';
      break;
      case 'A':
          code += 'bmp280.calcAltitude(bmp280.getPressure())';
      break;
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//10.Grove - 3-Axis Accelerator: Detects object acceleration
Blockly.Arduino.grove_gbk_gyro_read = function() {
  var axis = this.getFieldValue('AXIS');
  Blockly.Arduino.includes_['include_LIS3DHTR'] = '#include <LIS3DHTR.h>\n'
	+ '#ifdef SOFTWAREWIRE\n'
    + '  #include <SoftwareWire.h>\n'
    + '  SoftwareWire myWire(3, 2);\n'
    + '  LIS3DHTR<SoftwareWire> LIS(I2C_MODE);//IIC\n'
    + '  #define WIRE myWire\n'
	+ '#else\n'
    + '  #include <Wire.h>\n'
    + '  LIS3DHTR<TwoWire> LIS(I2C_MODE);//IIC\n'
    + '  #define WIRE Wire\n'
	+ '#endif\n';
  Blockly.Arduino.setups_['setup_LIS3DHTR'] = 'LIS.begin(WIRE); //IIC init\n'
    + '  delay(100);\n'
    + '  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);\n';
  
  var code = '';
  switch(axis){
      case 'x':
		code = 'LIS.getAccelerationX()';
      break;
      case 'y':
        code = 'LIS.getAccelerationY()';
      break;
      case 'z':
        code = 'LIS.getAccelerationZ()';
      break;
  }

  // Blockly.Arduino.includes_['include_wire'] = '#include <Wire.h>';
  // Blockly.Arduino.includes_['include_MMA7660FC'] = '#include <MMA7660.h>';
  // Blockly.Arduino.definitions_['define_MMA7660FC'] = 'MMA7660 accelemeter;';

  // Blockly.Arduino.userFunctions_['functions_MMA7660FC'] = 'float accel(char Axis){\n'
    // + '  float ax,ay,az;\n'
    // + '  accelemeter.getAcceleration(&ax,&ay,&az);\n'    
    // + '  if(Axis == \'x\') return (ax);\n'  
    // + '  if(Axis == \'y\') return (ay);\n'  
    // + '  if(Axis == \'z\') return (az);\n'
    // + '};\n'
  
  // Blockly.Arduino.setups_['setup_MMA7660FC'] = 'accelemeter.init();';

  // var code = '';
  // switch(axis){
      // case 'x':
        // code = 'accel(x)';
      // break;
      // case 'y':
          // code = 'accel(y)';
      // break;
      // case 'z':
          // code = 'accel(z)';
      // break;
  // }
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};