//Blocks for the AUTODUINO interface

/**
 * @license
 * GPL
 *
 * Copyright 2016 Bernard Remond.
 * https://github.com/nbremond77
 *
 */

/**
 * @fileoverview Helper functions for generating autoduino interface board.
 * @author nbremond@laposte.net (Bernard Remond)
 */

goog.provide('Blockly.Blocks.autoduino');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
    
    
/** ****************** CAPTEURS ******************************/

Blockly.Blocks['autoduino_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_BUTTON_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUTTON_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MBP-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUTTON_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/encoder_push.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_rotary_push'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ROT_PUSH_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/encoder_push.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_potentiometer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_POT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_POT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MPOTAB-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_POT_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_ANALOG_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_POT_TOOLTIP);
  }
};



Blockly.Blocks['autoduino_dht_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_DHT_HELPURL);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MHE-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TYPE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AUTODUINO_INOUT_DHT_READ_H,"h"],[Blockly.Msg.AUTODUINO_INOUT_DHT_READ_C,"C"],[Blockly.Msg.AUTODUINO_INOUT_DHT_READ_F,"F"]]), "TYPE");
    this.appendDummyInput()
      .appendField(Blockly.Msg.AUTODUINO_INOUT_DHT_READ_SENSOR)
      .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]]), "SENSOR");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_DHT_READ_PIN)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INTERNAL_IN_OUT),"PIN");
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_temperature_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_TEMP_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MCTN-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INTERNAL_IN_OUT),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_TEMP_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_moisture_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_MOISTURE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MHUM-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOISTURE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_ANALOG_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_tilt_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_TILT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TILT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MTILT-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TILT_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_TILT_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_ils_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_ILS_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ILS_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MILS-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ILS_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_ILS_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_pir_motion_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_PIR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_PIR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MPIR-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_PIR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_PIR_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_ultrasonic_ranger'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MUS-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INTERNAL_IN_OUT),"PIN");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_LDR_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LDR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LDR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MLDR-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LDR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_ANALOG_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LDR_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_line_finder'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LINE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LINE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MSL-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LINE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LINE_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_ir_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_IR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_IR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MEBIR-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_IR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_IR_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_digital_temperature_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_TEMP_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/k-ap-stemp-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_INDEX)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_ONEWIRE_INDEX),"INDEX")
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INTERNAL_IN_OUT),"PIN")
        .appendField(Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_ONEWIRE_RESOLUTION),"RESOLUTION");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_TEMP_TOOLTIP);
  }
};
/** ****************** ACTIONNEURS ******************************/

Blockly.Blocks['autoduino_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_k-ap-mdel-m.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_led_eclairage'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MECL-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_IR_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MEBIR-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['autoduino_output'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_k-ap-mdel-m.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setInputsInline(false);
    this.appendValueInput("STAT", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_rgb_led'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_RGBLED_HELPURL);
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("C1", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR1);
    this.appendValueInput("C2", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR2);
    this.appendValueInput("C3", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR3);
    this.appendValueInput("Pixel_number" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_PIXEL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_NB_OF_PIXEL)
        .appendField(new Blockly.FieldTextInput("2"), "Number_of_Pixels")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN_LED_RGB),"PIN");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};


Blockly.Blocks['autoduino_rgb_led2'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_RGBLED_HELPURL);
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/ws2812.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "C")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("Pixel_number" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_PIXEL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RGBLED_NB_OF_PIXEL)
        .appendField(new Blockly.FieldTextInput("2"), "Number_of_Pixels")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN_LED_RGB),"PIN");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['autoduino_piezo_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_BUZZER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUZZER_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_k-ap-mbuz-m.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUZZER_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INTERNAL_OUT_IN),"PIN");
    this.appendValueInput("Frequency", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUZZER_FREQUENCY);
    this.appendValueInput("Duration", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.AUTODUINO_INOUT_BUZZER_DURATION);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_BUZZER_TOOLTIP);
  }
};



Blockly.Blocks['autoduino_relay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_RELAY_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/700x560_K-AP-MREL-M.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RELAY_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN")
        .appendField(Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_RELAY_TOOLTIP);
  }
};



Blockly.Blocks['autoduino_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_MOTOR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/k-ap-mmot-new-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INOUT_MOTOR_CHOICE), "DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT1)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN1");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_dual_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_MOTOR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/k-ap-mmot-new-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INOUT_MOTOR_CHOICE), "DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT1)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN1");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN2");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN3");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT4)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN4");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_MOTOR_TOOLTIP);
  }
};



Blockly.Blocks['autoduino_motor_builtin'] = { // UPDATE PHOTO
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/k-ap-mmot-new-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_CHOICE), "DIRECTION");
    this.appendValueInput("SPEED", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_SPEED)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TOOLTIP);
  }
};


/** ****************** LCD ******************************/


//lcdinit OK
Blockly.Blocks['autoduino_lcdinit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl('');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT74)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "blocks/autoduino/media/I2C_LCD.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.AUTODUINO_TEXT75)
        .appendField(new Blockly.FieldDropdown([["63", "63"], ["39", "39"]]),"I2C_adress");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT76)
        .appendField(new Blockly.FieldTextInput('20',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT77)
        .appendField(new Blockly.FieldTextInput('4',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT78)     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT79)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT80)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_TEXT81);
  }
};

//lcdspecial OK
Blockly.Blocks['autoduino_lcdspecial'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl('');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT82);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "blocks/autoduino/media/I2C_LCD.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AUTODUINO_TEXT83, "backlight"], [Blockly.Msg.AUTODUINO_TEXT84, "noBacklight"],[Blockly.Msg.AUTODUINO_TEXT85, "cursor"],[Blockly.Msg.AUTODUINO_TEXT86, "noCursor"],[Blockly.Msg.AUTODUINO_TEXT87, "blink"],[Blockly.Msg.AUTODUINO_TEXT88, "noBlink"],[Blockly.Msg.AUTODUINO_TEXT89, "display"],[Blockly.Msg.AUTODUINO_TEXT90, "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_TEXT91);
  }
};

//lcdclear OK
Blockly.Blocks['autoduino_lcdclear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl('');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT92)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "blocks/autoduino/media/I2C_LCD.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_TEXT93);
  }
};

//lcdwrite OK
Blockly.Blocks['autoduino_lcdwrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl('');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT94)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "blocks/autoduino/media/I2C_LCD.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput('TEXT', 'String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT98);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT95);
    this.appendValueInput('COL', 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT96);
    this.appendValueInput('LIG', 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT97);   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_TEXT99);
  }
};


//lcdwrite OK
Blockly.Blocks['autoduino_lcdprint'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.setHelpUrl('');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT94)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "blocks/autoduino/media/I2C_LCD.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TEXT")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT98);
    this.setInputsInline(false);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.AUTODUINO_TEXT95);
    this.appendValueInput('COL', 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT96);
    this.appendValueInput('LIG', 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TEXT97);   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_TEXT99);
  }
};
/** ****************** COMMUNICATION ******************************/


Blockly.Blocks['autoduino_bluetooth_slave'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_BT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AUTODUINO_INOUT_BT_COMM1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/bluetooth-HC05-01.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AUTODUINO_INOUT_BT_COMM3)
      .appendField(new Blockly.FieldTextInput('blocklyduino'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AUTODUINO_INOUT_BT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AUTODUINO_INOUT_BT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.AUTODUINO_INOUT_BT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_BT_TOOLTIP);
  }
};

Blockly.Blocks['autoduino_rc'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
	this.setHelpUrl(Blockly.Msg.AUTODUINO_INOUT_IR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_INOUT_IR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/autoduino/media/k-ap-tlir-pac-m_1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_INOUT_IR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_OUT_IN),"PIN");
    this.setTooltip(Blockly.Msg.AUTODUINO_INOUT_IR_TOOLTIP);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE), "STAT");
    this.setOutput(true, 'Number');        
  }
};



Blockly.Blocks['autoduino_ir_code_detection'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.appendValueInput("IRrecv")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_TYPE_IR_EXPECTED_CODE)
        .appendField(new Blockly.FieldTextInput("0"), "IR_Code")
        .appendField(Blockly.Msg.AUTODUINO_TYPE_IR_MAX_TIME)
        .appendField(new Blockly.FieldTextInput("2500"), "max_Time");
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



/** ****************** UTILE ******************************/


Blockly.Blocks['autoduino_edge_detection'] = {
  init: function() {
    this.setColour(Blockly.Blocks.autoduino.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.AUTODUINO_EDGE_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_EDGE_UP_DOWN), "STAT");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.AUTODUINO_EDGE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.AUTODUINO_IN_OUT),"PIN");
    this.setOutput(true, 'Boolean');        
  }
};


