
//https://www.elecrow.com/crowtail-starter-kit-for-arduino.html

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
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.provide('Blockly.Blocks.crowtail_arduino_starter_kit');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['crowtail_arduino_starter_kit_led'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_LED_INPUT1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_LED_INPUT2);
    this.setInputsInline(true);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_LED_INPUT3)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_button'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUTTON_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Button1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUTTON_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_switch'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_SWITCH_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Switch1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUTTON_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_touchsensor'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_TOUCHSENSOR_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Touch1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUTTON_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_vibration'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Vibration1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT2);
    this.setInputsInline(true);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT3)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_tilt_switch'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_TILT_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Tilt1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_TILT_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_TILT_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_flame'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_FLAME_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Flame1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_FLAME_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_FLAME_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_buzzer'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUZZER_TEXT1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Buzzer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("PIN")
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUZZER_INPUT);
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.CROWTAIL_INOUT_BUZZER_TEXT2)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_BUZZER_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_potentiometer'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Potentiometer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_moisture_sensor'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_MOISTURE_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/350px-Moisture_sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_MOISTURE_INPUT)
      .appendField(new Blockly.FieldTextInput('0', Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_MOISTURE_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_sound_sensor'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_SOUND_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Sound-sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_SOUND_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_SOUND_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_ldr'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_LDR_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Light_Sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_LDR_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_LDR_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_thermistor'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_TEMP_TEXT)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Temperature1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_TEMP_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_TEMP_TOOLTIP);
  }
};

Blockly.Blocks['crowtail_arduino_starter_kit_relay'] = {
  init: function () {
    this.setColour(Blockly.Blocks.crowtail_arduino_starter_kit.HUE);
    this.setHelpUrl(Blockly.Msg.CROWTAIL_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CROWTAIL_INOUT_RELAY_TEXT1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/elecrow/crowtail_arduino_starter_kit/400px-Relay1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.CROWTAIL_INOUT_RELAY_INPUT)
      .appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN')
      .appendField(Blockly.Msg.CROWTAIL_INOUT_RELAY_TEXT2)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CROWTAIL_INOUT_RELAY_TOOLTIP);
  }
};