//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

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
 */
'use strict';

goog.provide('Blockly.Blocks.grove');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['grove_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);		
    this.setInputsInline(true);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['grove_piezo_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BUZZER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Buzzer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.GROVE_INOUT_BUZZER_INPUT);
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP);
  }
};

Blockly.Blocks['grove_rgb_led'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_RGBLED_HELPURL);
    this.setColour(Blockly.Blocks.grove.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/chanbalelednb1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("C1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_COLOR1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN1')
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_INPUT);
    this.appendValueInput("C2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_COLOR2)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN2')
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_INPUT);
    this.appendValueInput("C3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_COLOR3)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN3')
        .appendField(Blockly.Msg.GROVE_INOUT_RGBLED_INPUT);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['grove_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Button1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_INOUT_BUTTON_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['grove_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Potentiometer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['grove_ldr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LDR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LDR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Light_Sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_LDR_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP);
  }
};

Blockly.Blocks['grove_tilt_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_TILT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_TILT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Tilt1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_TILT_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_TILT_TOOLTIP);
  }
};

Blockly.Blocks['grove_relay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_RELAY_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_RELAY_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Twig-Relay1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_RELAY_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField(Blockly.Msg.GROVE_INOUT_RELAY_TEXT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP);
  }
};

Blockly.Blocks['grove_temporature_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_TEMP_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_TEMP_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Temperature1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_TEMP_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_TEMP_TOOLTIP);
  }
};

Blockly.Blocks['grove_moisture_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_MOISTURE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_MOISTURE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/350px-Moisture_sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_MOISTURE_INPUT)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_MOISTURE_TOOLTIP);
  }
};

Blockly.Blocks['grove_serial_lcd_print'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT1)
        .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendValueInput("TEXT")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT2);
    this.appendValueInput("TEXT2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT3);
    this.appendValueInput("DELAY_TIME")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT4);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_PRINT_TOOLTIP);
  }
};

//grove lcd power on/off
Blockly.Blocks['grove_serial_lcd_power'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_POWER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_INPUT)
        .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_POWER_TOOLTIP);
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['grove_serial_lcd_effect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_INPUT)
        .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP);
  }
};

Blockly.Blocks['grove_sound_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_SOUND_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_SOUND_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Twig-Sound-sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_SOUND_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP);
  }
};

Blockly.Blocks['grove_pir_motion_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_PIR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_PIR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Twig-PIR_Motion_Sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_PIR_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_PIR_TOOLTIP);
  }
};

Blockly.Blocks['grove_line_finder'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LINE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LINE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Grovelinefinder1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField(Blockly.Msg.GROVE_INOUT_LINE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP);
  }
};

Blockly.Blocks['grove_ultrasonic_ranger'] = {
	init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/200px-Twig_-_Ultrasonic_Ranger2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);
  }
};

Blockly.Blocks['grove_motor_shield'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_MOTOR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_MOTOR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Smotoshield2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_MOTOR_CHOICE), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['grove_thumb_joystick'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_JOYSTICK_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/200px-Twig_-_Thumb_Joystick_v0.9b.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_INOUT_JOYSTICK_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinGroveAnalogValidator), 'PIN')
        .appendField(Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_JOYSTICK_AXES), "AXIS");
    this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.GROVE_INOUT_JOYSTICK_TOOLTIP);
  }
};

Blockly.Blocks['grove_bluetooth_slave'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/Twigbt00.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM2)
      .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM3)
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BT_TOOLTIP);
  }
};

Blockly.Blocks['grove_bluetooth_slave_AT'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_BT_AT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/grove_v3.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM2)
      .appendField(new Blockly.FieldTextInput('2',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM3)
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.GROVE_INOUT_BT_AT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_BT_AT_TOOLTIP);
  }
};

Blockly.Blocks['grove_EMETTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL);
	this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_EMETTEUR_IR)
	  .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LED_IR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_EMETTEUR_IR_TOOLTIP);
  }
};


Blockly.Blocks['grove_RECEPTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_RECEPTEUR_IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_RECEPTEUR_IR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-Infrared_Receiver.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_RECEPTEUR_IR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_RECEPTEUR_IR_TOOLTIP);
  }
};

Blockly.Blocks['grove_FIN_COURSE'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_FIN_COURSE_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_FIN_COURSE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-fincourse.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.GROVE_FIN_COURSE_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GROVE_FIN_COURSE_TOOLTIP);
  }
};

Blockly.Blocks['grove_dht_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_INOUT_DHT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROVE_INOUT_DHT_READ_H,"h"],[Blockly.Msg.GROVE_INOUT_DHT_READ_C,"C"],[Blockly.Msg.GROVE_INOUT_DHT_READ_F,"F"]]), "TYPE");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/dht11.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR)
      .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]]), "SENSOR");
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_DHT_READ_PIN)
      .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_print'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD_RGB_backlight.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TEXT")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT2);
    this.appendValueInput("TEXT2")
        .setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_PRINT_TOOLTIP);
  }
};

//grove lcd power on/off
Blockly.Blocks['grove_lcd_rgb_power'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD_RGB_backlight.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_POWER_TOOLTIP);
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['grove_lcd_rgb_effect'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD_RGB_backlight.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_clean'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_CLEAN)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/seeed/grove/400px-LCD_RGB_backlight.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['grove_lcd_rgb_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_INIT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_INIT_TEXT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_INIT_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_clear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_CLEAR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_CLEAR_TEXT)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_CLEAR_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_scrolling'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SCROLL_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SCROLL_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT_FIELDDROPDOWN), "EFFECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SCROLL_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_set_cursor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne")
        .appendField(new Blockly.FieldTextInput("0"), "Line");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne")
        .appendField(new Blockly.FieldTextInput("0"), "Row");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.grove.HUE);
 this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_HELPURL);
  }
};


Blockly.Blocks['grove_lcd_rgb_set_RGB'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Red")
        .appendField(new Blockly.FieldTextInput("255"), "Red");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Green")
        .appendField(new Blockly.FieldTextInput("255"), "Green");
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blue")
        .appendField(new Blockly.FieldTextInput("255"), "Blue");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.grove.HUE);
 this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_SET_RGB_HELPURL);
  }
};


Blockly.Blocks['grove_lcd_rgb_print_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_PRINT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_PRINT_DATA);
    this.appendValueInput("DATA")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_PRINT_INPUTDATA);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_PRINT_TOOLTIP);
  }
};

Blockly.Blocks['grove_lcd_rgb_write_data'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
	this.setHelpUrl(Blockly.Msg.GROVE_LCD_RGB_WRITE_HELPURL);
	
	this.appendDummyInput()
        .appendField(Blockly.Msg.GROVE_LCD_RGB_WRITE_DATA);
			
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_LCD_RGB_WRITE_INPUTDATA)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_LCD_RGB_WRITE_FORMAT_FIELDDROPDOWN), "FORMAT")
		.appendField(new Blockly.FieldTextInput(""), "DATA");
	
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.GROVE_LCD_RGB_WRITE_TOOLTIP);
  }
};

//@CD 20170318
Blockly.Blocks['grove_driver13_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_DRIVER13_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.GROVE_DRIVER13_MOTOR_TITLE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage("blocks/seeed/grove/I2CMotorDriver_V13.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    /*this.appendDummyInput()
        .appendField(new Blockly.FieldNumber('15', 0, 15, 1), "I2CADDRESS")*/
	this.appendValueInput("I2CADDRESS")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_DRIVER13_MOTOR_I2C_ADDRESS);
    this.appendValueInput("SPEED", 'Number')
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.GROVE_DRIVER_MOTOR1, "MOTOR1" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR2, "MOTOR2" ]]),
				"NUMMOTOR")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_DRIVER_SPEED);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.GROVE_DRIVER13_TOOLTIP);
  }/*,
  onchange: function(changeEvent) {
    if (this.getInput('I2CADDRESS').connection.targetBlock()) {
        var adresse = this.getFieldValue('I2CADDRESS');
        console.log (adresse);
        if ((adresse < 0) ||(adresse > 15)) {
            this.setWarningText("L'adresse doit être entre 0 et 15 (0x0F)");
        } else {
            this.setWarningText(null);
        }
    } else {
      this.setWarningText('Must have an input block.');
    }
  }*/
};

//@CD 20170318
Blockly.Blocks.grove_mini_driver_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_MINI_DRIVER_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_TITLE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_MSG);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage("blocks/seeed/grove/Mini_I2C_motor_2.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("SPEED", 'Number')
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.GROVE_DRIVER_MOTOR1, "0xC0" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR2, "0xC4" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR3, "0xCC" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR4, "0xD0" ]]),
				"I2CADDRESS")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_DRIVER_SPEED);
	this.setInputsInline(false);
	//	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks.grove_mini_driver_stop = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_MINI_DRIVER_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_TITLE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_STOP_MSG);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage("blocks/seeed/grove/Mini_I2C_motor_2.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.GROVE_DRIVER_MOTOR1, "0xC0" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR2, "0xC4" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR3, "0xCC" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR4, "0xD0" ]]),
				"I2CADDRESS")
        .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
	//	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.GROVE_MINI_DRIVER_STOP_TOOLTIP);
  }
};

Blockly.Blocks.grove_mini_driver_error = {
  init: function() {
    this.setColour(Blockly.Blocks.grove.HUE);
    this.setHelpUrl(Blockly.Msg.GROVE_MINI_DRIVER_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_TITLE);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(Blockly.Msg.GROVE_MINI_DRIVER_ERROR_MSG);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage("blocks/seeed/grove/Mini_I2C_motor_2.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
        .appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.GROVE_DRIVER_MOTOR1, "0xC0" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR2, "0xC4" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR3, "0xCC" ],
						[ Blockly.Msg.GROVE_DRIVER_MOTOR4, "0xD0" ]]),
				"I2CADDRESS")
        .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
	//	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  	this.setOutput(true, Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
	this.setTooltip(Blockly.Msg.GROVE_MINI_DRIVER_ERROR_TOOLTIP);
  }
};
