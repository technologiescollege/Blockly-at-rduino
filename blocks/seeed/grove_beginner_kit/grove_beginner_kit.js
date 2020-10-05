
//https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/

/**
 * @license
 * Visual Blocks Editor
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

goog.provide('Blockly.Blocks.grove_beginner_kit');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//1.Grove - LED: Simple LED module
Blockly.Blocks['grove_gbk_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_BK_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_LED_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//2.Grove - Buzzer: Piezo Buzzer
Blockly.Blocks['grove_gbk_piezo_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Buzzer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT2)
        .appendField(new Blockly.FieldDropdown([["C", "262"], ["C#", "277"], ["D", "294"], ["D#", "311"],
                                                ["E", "330"], ["F", "349"], ["F#", "370"], ["G", "392"],
                                                ["G#", "415"], ["A", "440"], ["A#", "466"], ["B", "494"]]), "tone")
        .appendField(Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT3)
        .appendField(new Blockly.FieldDropdown([["C4", "1"], ["C5", "2"], ["C6", "3"], ["C7", "4"]]), "scale")
        .appendField(Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT4)
        .appendField(new Blockly.FieldDropdown([["1/16", "62.5"], ["1/8", "125"], ["1/4", "250"], ["1/2", "500"],["1/1", "1000"]]), "dur");    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_BUZZER_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};


//3.Grove - OLED Display 0.96": 128×64 dot resolution High brightness,self-emission and high contrast ratio Big screen on a compact design Low power consumption.

Blockly.Blocks['grove_gbk_oled'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_OLED_TEXT1)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/OLED_Display_0.96_SSD1315.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("input")
        //.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.GROVE_BK_OLED_TEXT2);	  
    this.appendValueInput("col")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.GROVE_BK_OLED_TEXT3);		
    this.appendValueInput("line")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.GROVE_BK_OLED_TEXT4);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_BK_OLED_TEXT5)     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'ref'); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setTooltip(Blockly.Msg.GROVE_BK_OLED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

// Blockly.Blocks['grove_gbk_oled_draw_string'] = {
 // init: function() {
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.lp2i_u8g_draw_string)
		// .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/OLED_Display_0.96_SSD1315.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    // this.appendValueInput("Text")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_TEXT);	  
    // this.appendValueInput("X")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_STRING_X);		
    // this.appendValueInput("Y")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_STRING_Y);
    // this.setInputsInline(false);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setColour(Blockly.Blocks.grove.HUE);
    // this.setTooltip(Blockly.Msg.GROVE_BK_OLED_TOOLTIP);
    // this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  // }
// };
// Blockly.Blocks['grove_gbk_oled_draw_4strings'] = {
 // init: function() {
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.lp2i_u8g_draw_4strings)
		// .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/OLED_Display_0.96_SSD1315.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT);		
    // this.appendValueInput("Text_line1")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE1);		
    // this.appendValueInput("Text_line2")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE2);			
    // this.appendValueInput("Text_line3")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE3);			
    // this.appendValueInput("Text_line4")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE4);			
    // this.setInputsInline(false);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setColour(Blockly.Blocks.grove.HUE);
    // this.setTooltip(Blockly.Msg.GROVE_BK_OLED_TOOLTIP);
    // this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  // }
// };
// Blockly.Blocks['grove_gbk_oled_print'] = {
 // init: function() {
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.lp2i_u8g_print)
		// .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/OLED_Display_0.96_SSD1315.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
	// this.appendValueInput("N")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_PRINT_N);		
    // this.appendValueInput("X")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_PRINT_X);		
    // this.appendValueInput("Y")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_PRINT_Y);		
    // this.setInputsInline(false);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setColour(Blockly.Blocks.grove.HUE);
    // this.setTooltip(Blockly.Msg.GROVE_BK_OLED_TOOLTIP);
    // this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  // }
// };

// Blockly.Blocks['grove_gbkoled_4draw_print'] = {
 // init: function() {
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.lp2i_u8g_4draw_print)
		// .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/OLED_Display_0.96_SSD1315.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
    // this.appendDummyInput()
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT);			
    // this.appendValueInput("Text_line1")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE1);		
	// this.appendValueInput("N1")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N1);			
    // this.appendValueInput("Text_line2")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE2);			
	// this.appendValueInput("N2")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N2);		
	// this.appendValueInput("Text_line3")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE3);			
	// this.appendValueInput("N3")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N3);		
    // this.appendValueInput("Text_line4")
		// .setCheck('String')
        // .setAlign(Blockly.ALIGN_RIGHT)
		// .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE4);			
	// this.appendValueInput("N4")
		// .setCheck('Number')
        // .setAlign(Blockly.ALIGN_RIGHT)
        // .appendField(Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N4);		
    // this.setInputsInline(false);
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    // this.setColour(Blockly.Blocks.grove.HUE);
    // this.setTooltip(Blockly.Msg.GROVE_BK_OLED_TOOLTIP);
    // this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  // }
// };

//4.Grove - Button: Momentary Push Button
Blockly.Blocks['grove_gbk_button'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Button1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_BUTTON_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//5.Grove - Rotary Potentiometer: Adjustable Potentiometer
Blockly.Blocks['grove_gbk_rotary_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_INOUT_ROT_ANGLE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Potentiometer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_ROT_ANGLE_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//6.Grove - Light: Detects surrounding light intensity
Blockly.Blocks['grove_gbk_ldr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_INOUT_LDR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Light_Sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_LDR_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//7.Grove - Sound: Detects surrounding sound intensity
Blockly.Blocks['grove_gbk_sound_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_BK_INOUT_SOUND_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Twig-Sound-sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_SOUND_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//8.Grove - Temperature & Humidity Sensor: Detects surrounding temperature and humidity values
Blockly.Blocks['grove_gbk_dht_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_BK_INOUT_DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_BK_INOUT_DHT_READ_H,"T"],[Blockly.Msg.GROVE_BK_INOUT_DHT_READ_C,"H"]]), "TYPE");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/dht11.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_BK_INOUT_DHT_READ_SENSOR);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_DHT_READ_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//9.Grove - Air Pressure Sensor: Detects surrounding atmospheric pressure
Blockly.Blocks['grove_gbk_pressure_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/Barometer_Sensor_BMP280.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_T,"T"],[Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_P,"P"],[Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_A,"A"]]), "TYPE");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};

//10.Grove - 3-Axis Accelerator: Detects object acceleration
Blockly.Blocks['grove_gbk_gyro_read'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_BK_INOUT_GYRO_TEXT1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove_beginner_kit/3_Axis_Digital_Accelerometer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_BK_INOUT_GYRO_TEXT2)
      .appendField(new Blockly.FieldDropdown([["x","x"],["y","y"],["z","z"]]), "AXIS");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_BK_INOUT_GYRO_TOOLTIP);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_BK_HELPURL);
  }
};