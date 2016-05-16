//Blocks for the MAKEBLOCK interface

/**
 * @license
 * GPL
 *
 * Copyright 2016 Bernard Remond.
 * https://github.com/nbremond77
 *
 */

/**
 * @fileoverview Helper functions for generating makeblock interface board.
 * @author nbremond@laposte.net (Bernard Remond)
 */

goog.provide('Blockly.Blocks.makeblock');

goog.require('Blockly.Blocks');

/*

// get specific messages for the makeblock
    document.write('<script src="blocks/makeblock/msg_makeblock.js"></script>\n');
        
// set the toolbox from url parameters
    var toolboxFile = BlocklyDuino.getStringParamFromUrl('toolbox', '');
    
// redefine pin names for specific toolbox
    if (toolboxFile == 'toolbox_makeblock_mbot') {
        //alert("Load: " + toolboxFile);
        document.write('<script src="blocks/makeblock/msg_makeblock_mbot.js"></script>\n');
    }
 
*/

/** ****************** CAPTEURS ******************************/

Blockly.Blocks['makeblock_button'] = {
  init: function() {
    this.setColour("#8B0000");
    this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_BUTTON_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_potentiometer'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_POT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_POT_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_POT_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_POT_TOOLTIP);
  }
};



Blockly.Blocks['makeblock_ils_switch'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_ILS_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_ILS_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_ILS_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_ILS_TOOLTIP);
  }
};

Blockly.Blocks['makeblock_pir_motion_sensor'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_PIR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_PIR_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_PIR_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_PIR_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_ultrasonic_ranger'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_ULTRASONIC_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_LDR_sensor'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_LDR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LDR_TEXT);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_LDR_TOOLTIP);
  }
};

Blockly.Blocks['makeblock_line_finder'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_LINE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LINE_TEXT);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LINE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_LINE_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_digital_temperature_sensor'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_TEXT2);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INDEX)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_ONEWIRE_INDEX),"INDEX")
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_RJ45),"PIN")
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_ONEWIRE_RESOLUTION),"RESOLUTION");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_TEMP_TOOLTIP);
  }
};
/** ****************** ACTIONNEURS ******************************/

Blockly.Blocks['makeblock_led'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT1);
    this.appendDummyInput()
	.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_output'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT1);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_OUT_IN),"PIN");
    this.setInputsInline(false);
    this.appendValueInput("STAT", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_IR_led'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_LED_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT_IR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_FIELDDROPDOWN), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_LED_TOOLTIP);
  }
};


Blockly.Blocks['makeblock_rgb_led'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_HELPURL);
    this.setColour("#8B0000");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendValueInput("C1", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR1);
    this.appendValueInput("C2", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR2);
    this.appendValueInput("C3", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_COLOR3);
    this.appendValueInput("Pixel_number" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_PIXEL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_NB_OF_PIXEL)
        .appendField(new Blockly.FieldTextInput("2"), "Number_of_Pixels")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};


Blockly.Blocks['makeblock_rgb_led2'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_HELPURL);
    this.setColour("#8B0000");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "C")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("Pixel_number" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_PIXEL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_RGBLED_NB_OF_PIXEL)
        .appendField(new Blockly.FieldTextInput("2"), "Number_of_Pixels")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['makeblock_piezo_buzzer'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_TEXT1);
    this.appendValueInput("Frequency", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_FREQUENCY);
    this.appendValueInput("Duration", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)	
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_DURATION);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_BUZZER_TOOLTIP);
  }
};





Blockly.Blocks['makeblock_motor_builtin'] = { // UPDATE PHOTO
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_CHOICE), "DIRECTION");
    this.appendValueInput("SPEED", 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_SPEED)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_MOTOR_BUILTIN_TOOLTIP);
  }
};


/** ****************** COMMUNICATION ******************************/


Blockly.Blocks['makeblock_bluetooth_slave'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_BT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM1);
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM3)
      .appendField(new Blockly.FieldTextInput('blocklyduino'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.MAKEBLOCK_INOUT_BT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_BT_TOOLTIP);
  }
};

Blockly.Blocks['makeblock_rc'] = {
  init: function() {
    this.setColour("#8B0000");
	this.setHelpUrl(Blockly.Msg.MAKEBLOCK_INOUT_IR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_INOUT_IR_TEXT);
    this.setTooltip(Blockly.Msg.MAKEBLOCK_INOUT_IR_TOOLTIP);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_TYPE_IR_REMOTE_TEXT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_TYPE_IR_REMOTE), "STAT");
    this.setOutput(true, 'Number');        
  }
};



Blockly.Blocks['makeblock_ir_code_detection'] = {
  init: function() {
    this.setColour("#8B0000");
    this.appendValueInput("IRrecv")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_TYPE_IR_EXPECTED_CODE)
        .appendField(new Blockly.FieldTextInput("0"), "IR_Code")
        .appendField(Blockly.Msg.MAKEBLOCK_TYPE_IR_MAX_TIME)
        .appendField(new Blockly.FieldTextInput("2500"), "max_Time");
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



/** ****************** UTILE ******************************/


Blockly.Blocks['makeblock_edge_detection'] = {
  init: function() {
    this.setColour("#8B0000");
    this.appendDummyInput()
        .appendField(Blockly.Msg.MAKEBLOCK_EDGE_TEXT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_EDGE_UP_DOWN), "STAT");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.MAKEBLOCK_EDGE_INPUT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.MAKEBLOCK_IN_OUT),"PIN");
    this.setOutput(true, 'Boolean');        
  }
};


