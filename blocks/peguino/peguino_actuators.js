
'use strict';

goog.provide('Blockly.Blocks.peguino_actuators');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks
 
 Blockly.Blocks['peguino_actuators_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_BuzzerBrick_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_BuzzerBrick_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Buzzer_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_PLUG)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_UNIT_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_UNIT);
		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_UNIT);
		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_UNIT);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Peguino_BuzzerBrick_TOOLTIP);
  }
};

 Blockly.Blocks['peguino_actuators_buzzer2'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_BuzzerBrick_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_BuzzerBrick_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Buzzer_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_PLUG)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_UNIT_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_UNIT);
	    this.appendValueInput("Frequ")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_VALUE);		
		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_UNIT);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Peguino_BuzzerBrick_TOOLTIP);
  }
};

		/*		this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_CHOICE), Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_UNIT); */	

Blockly.Blocks['peguino_actuators_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_LED_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Peguino_LED_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_IR_LED_Receiver_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.Peguino_LED_PLUG)     
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_LED_UNIT_CHOICE), Blockly.Msg.Peguino_LED_UNIT);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), Blockly.Msg.Peguino_LED_STATUS);
	this.appendDummyInput()	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Peguino_LED_TOOLTIP);
  }
};

// Peguino Nano RGB LED
Blockly.Blocks['peguino_actuators_rgbled'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.Peguino_RGBLED_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Peguino_RGBLED_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_LED_Brick_blockly_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), Blockly.Msg.Peguino_RGBLED_STATUS);		
	var field = new Blockly.FieldColour('#ffffff');	
		field.setColours(
			['#ffffff', '#ffff00', '#ffaa00','#ff0000',
			 '#aa00ff', '#0000ff' , '#00aaff', '#00ff00',
			 '#91ffcd', '#ffffaa', '#ff00aa', '#ffaaff'],
			['f1', 'f2', 'f3', 'f4',
			'f5', 'f6', 'f7', 'f8',
			'f9', 'f10', 'f11', 'f12']);
		field.setColumns(4);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.Peguino_RGBLED_RGBCOLOR)
        .appendField(field, Blockly.Msg.Peguino_RGBLED_RGBCOLORVALUE);		
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Peguino_RGBLED_TOOLTIP);
  }
};


Blockly.Blocks['peguino_actuators_i2c_scan'] = {
	init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.Peguino_I2CScan_TEXT); 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setTooltip(Blockly.Msg.Peguino_I2CScan_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.Peguino_I2CScan_HELPURL);
  }
};


Blockly.Blocks['peguino_actuators_i2c_lcdinit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT74)
        .appendField(new Blockly.FieldImage("blocks/peguino/Peguino_LCD_Display_Brick_blockly_01.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT75)
        .appendField(new Blockly.FieldTextInput('0x27',Blockly.Blocks.math_number.validator), 'I2C_adress');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT76)
        .appendField(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT77)
        .appendField(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT78)     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT79)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT80)     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT81);
  }
};

Blockly.Blocks['peguino_actuators_i2c_lcdwrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT94)
        .appendField(new Blockly.FieldImage("blocks/peguino/Peguino_LCD_Display_Brick_blockly_01.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("TEXT")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT98);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.TECHNOZONE51_TEXT95);
    this.appendValueInput("COL")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT96)
    this.appendValueInput("LIG")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT97)   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT99);
    this.setInputsInline(false);
  }
};

//scroll left/right/no scroll/blink/noblink
Blockly.Blocks['peguino_actuators_i2c_lcdclear'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl('http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT92)
        .appendField(new Blockly.FieldImage("blocks/peguino/Peguino_LCD_Display_Brick_blockly_01.png", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT93);
  }
};

Blockly.Blocks['peguino_actuators_servo_attach'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.Peguino_AttachServo_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
//	this.appendValueInput("PIN")
	this.appendValueInput()
//        .setCheck('Number')
		.appendField(Blockly.Msg.Peguino_AttachServo_PLUG)
//		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_AttachServo_UNIT_CHOICE), Blockly.Msg.Peguino_AttachServo_UNIT);
        .setAlign(Blockly.ALIGN_RIGHT)
//        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2);
//		.appendField(Blockly.Msg.Peguino_AttachServo_PLUG)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_AttachServo_UNIT_CHOICE), Blockly.Msg.Peguino_AttachServo_UNIT);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Peguino_AttachServo_TOOLTIP);
  }
};

Blockly.Blocks['peguino_actuators_servo_move'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.appendValueInput("DEGREE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['peguino_actuators_servo_read_degrees'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['peguino_actuators_servo_attached'] = {
  init: function() {
	this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl('http://www.arduino.cc/playground/ComponentLib/servo');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_ATTACHED)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setOutput(true, 'Boolean');
    this.setTooltip('true if the servo is attached to pin; false otherwise. ');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['peguino_actuators_servo_detach'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
	this.setHelpUrl('http://www.arduino.cc/playground/ComponentLib/servo');
	this.setInputsInline(false);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ARDUINO_SERVO_DETACH)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Release a pin from servo driving.');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['peguino_actuators_servo_rot_continue'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_360_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setInputsInline(true);
	this.appendValueInput("SPEED")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT2);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['peguino_actuators_servo_rot_continue_param'] = {
  init: function() {
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setHelpUrl(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_Microservo_Brick_360_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setInputsInline(true);
	this.appendValueInput("SPEED")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT3);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT4)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"]]), 'ETAT');    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};


Blockly.Blocks['peguino_actuators_u8g_draw_string'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_string)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_OLED_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Text")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Text);	  
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_string_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};

Blockly.Blocks['peguino_actuators_u8g_draw_4strings'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_OLED_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display);		
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1);		
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2);			
    this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3);			
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4);			
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};
Blockly.Blocks['peguino_actuators_u8g_print'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_print)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_OLED_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
	this.appendValueInput("N")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_N);		
    this.appendValueInput("X")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_X);		
    this.appendValueInput("Y")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_print_Y);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};

Blockly.Blocks['peguino_actuators_u8g_4draw_print'] = {
 init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/peguino/Peguino_OLED_Brick_01.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));		
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_to_display);			
    this.appendValueInput("Text_line1")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line1);		
	this.appendValueInput("N1")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N1);			
    this.appendValueInput("Text_line2")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line2);			
	this.appendValueInput("N2")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N2);		
	this.appendValueInput("Text_line3")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line3);			
	this.appendValueInput("N3")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N3);		
    this.appendValueInput("Text_line4")
		.setCheck('String')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_u8g_4draw_print_Text_line4);			
	this.appendValueInput("N4")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_u8g_4draw_print_N4);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.peguino_actuators.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-dun-afficheur-oled-128x64-i2c-avec-blockly-arduino/');
  }
};