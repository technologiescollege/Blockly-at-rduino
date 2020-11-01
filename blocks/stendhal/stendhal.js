/**
 * @author julien.bennica@gmail.com
 */
'use strict';

goog.provide('Blockly.Blocks.stendhal');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');


Blockly.Blocks['stendhal_relay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_RELAY_HELPURL);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF3), "STAT")
		.appendField(Blockly.Msg.STENDHAL_INOUT_RELAY_TEXT1)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Twig-Relay1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_RELAY_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_RELAY_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_mosfet'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_MOSFET_HELPURL);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF3), "STAT")
		.appendField(Blockly.Msg.STENDHAL_INOUT_MOSFET_TEXT1)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Twig-Mosfet.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_MOSFET_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_MOSFET_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_piezo_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_BUZZER_HELPURL);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF2), "STAT")
		.appendField(Blockly.Msg.STENDHAL_INOUT_BUZZER_TEXT1)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Buzzer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_BUZZER_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_BUZZER_TOOLTIP);
  }
};

//motor stepper config
Blockly.Blocks['stendhal_stepper_config'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_STEPPER_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.STENDHAL_STEPPER_TITLE)
        .appendField(new Blockly.FieldImage("blocks/stendhal/Moteur_pas_a_pas.PNG", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_MOTOR)
        .appendField(
            new Blockly.FieldInstance('Stendhal_stepper',
                                      Blockly.Msg.STENDHAL_STEPPER_DEFAULT_NAME,
                                      true, true, false),
            'STENDHAL_STEPPER_NAME');
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.STENDHAL_STEPPER_PIN1)
        .appendField(new Blockly.FieldTextInput('9',Blockly.Blocks.math_number.validator), 'pin1');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_PIN2)
        .appendField(new Blockly.FieldTextInput('11',Blockly.Blocks.math_number.validator), 'pin2');
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_PIN3)
        .appendField(new Blockly.FieldTextInput('10',Blockly.Blocks.math_number.validator), 'pin3');   
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_PIN4)
        .appendField(new Blockly.FieldTextInput('8',Blockly.Blocks.math_number.validator), 'pin4');
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_SPEED)
        .appendField(new Blockly.FieldTextInput('9',Blockly.Blocks.math_number.validator), 'speed');
	this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_STEPPER_STEPS)
        .appendField(new Blockly.FieldTextInput('3072',Blockly.Blocks.math_number.validator), 'steps');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_STEPPER_TOOLTIP);
  }
};


//motor stepper step
Blockly.Blocks['stendhal_stepper_step'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_STEPPER_HELPURL);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.STENDHAL_STEPPER_STEP1)
		.appendField(new Blockly.FieldInstance('Stendhal_stepper',
                                      Blockly.Msg.STENDHAL_STEPPER_DEFAULT_NAME,
                                      false, true, false),
            'STENDHAL_STEPPER_NAME');
	this.appendDummyInput("")	
		.appendField(Blockly.Msg.STENDHAL_STEPPER_STEP2)
		.appendField(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'step')
		.appendField(Blockly.Msg.STENDHAL_STEPPER_STEP3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_STEPPER_TOOLTIP);
  },
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('STENDHAL_STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Stendhal_stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      /*this.setWarningText(
        Blockly.Msg.STENDHAL_STEPPER_HELPURL.replace(
            '%1', Blockly.Msg.STEPPER_COMPONENT).replace(
                '%2', instanceName));*/
    }
  }
};

Blockly.Blocks['stendhal_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_LED_HELPURL);
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF2), "STAT");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_LED_INPUT1)
		.appendField(Blockly.Msg.STENDHAL_INOUT_LED_INPUT2)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_rgb_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_RGBLED_HELPURL);
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(Blockly.Msg.STENDHAL_LED_RGB_INPUT1)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/RGB.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF2), "STAT1");
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_LED_RGB_INPUT2)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN1');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF2), "STAT2");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_LED_RGB_INPUT3)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN2');
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF2), "STAT3");
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_LED_RGB_INPUT4)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_LED_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_LED_PWM_validator'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_LED_PWM_HELPURL);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-LED1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
		.appendField(Blockly.Msg.STENDHAL_LED_PWM_INPUT1)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.STENDHAL_LED_PWM_INPUT2)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Blocks.math_number.validator), 'NUM');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_LED_PWM_TOOLTIP);
  }
};



Blockly.Blocks['stendhal_rgb_led_PWM'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_RGBLED_HELPURL);
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/RGB.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()	
		.appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_TEXT2);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_COLOR1)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Blocks.math_number.validator), 'C1');
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_COLOR2)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Blocks.math_number.validator), 'C2');
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_COLOR3)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Blocks.math_number.validator), 'C3');		
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_TEXT1);
    
    this.appendDummyInput()
	    .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_PIN1)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN1')
	this.appendDummyInput()
	    .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_PIN2)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN2')
	this.appendDummyInput()
	    .appendField(Blockly.Msg.STENDHAL_INOUT_RGBLED_PIN3)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PIN3')
	
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_RGBLED_TOOLTIP);
  }
};



Blockly.Blocks['stendhal_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_BUTTON_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_BUTTON_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Button1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_BUTTON_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_BUTTON_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_tactile'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_TACTILE_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_TACTILE_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Tactile.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_TACTILE_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_TACTILE_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_magnetsensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_MAGNETSENSOR_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_MAGNETSENSOR_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
	    .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Magnetsensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_MAGNETSENSOR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_MAGNETSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_tiltsensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_TITLSENSOR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_TITLSENSOR_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Tiltsensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_TITLSENSOR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_TITLSENSOR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_rotary_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_ROT_ANGLE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_ROT_ANGLE_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Potentiometer1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendDummyInput()    
		.appendField(Blockly.Msg.STENDHAL_INOUT_ROT_ANGLE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_ROT_ANGLE_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_tilt_switch'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_TILT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_TILT_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Tilt1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(Blockly.Msg.STENDHAL_INOUT_TILT_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_TILT_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_temperature_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_TEMP_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_TEMP_TEXT);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Temperature1.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_TEMP_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_TEMP_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_light_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_LIGHT_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_LIGHT_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Photoresistor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_LIGHT_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_LIGHT_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_moisture_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_MOISTURE_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_MOISTURE_TEXT)
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_MOISTURE_TEXT2)
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/350px-Moisture_sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_MOISTURE_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_MOISTURE_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_sound_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_SOUND_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_SOUND_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Twig-Sound-sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_SOUND_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_SOUND_TOOLTIP);
  }
};


Blockly.Blocks['stendhal_ds18b20_search'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
		.appendField(Blockly.Msg.STENDHAL_INOUT_DS18B20_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	    .appendField(Blockly.Msg.STENDHAL_INOUT_DS18B20_INPUT1)
		.appendField(new Blockly.FieldTextInput('11',  Blockly.Arduino.pinDualValidator), 'ds18b20_pin')
	    .appendField(Blockly.Msg.STENDHAL_INOUT_DS18B20_INPUT2)
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'address');
	this.setOutput(true, 'Boolean');
	this.setTooltip(Blockly.Msg.STENDHAL_INOUT_DS18B20_TOOLTIP1);
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_DS18B20_HELPURL);
  }
};

Blockly.Blocks['stendhal_ds18b20_temp'] = {
  init: function() {
    this.appendDummyInput()
    	.setAlign(Blockly.ALIGN_LEFT)
		.appendField(Blockly.Msg.STENDHAL_INOUT_DS18B20_TEXT2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/ds18b20.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.STENDHAL_INOUT_DS18B20_INPUT2)
		.appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinDualValidator), 'address');
	this.setOutput(true, 'Number');
	this.setTooltip(Blockly.Msg.STENDHAL_INOUT_DS18B20_TOOLTIP2);
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_DS18B20_HELPURL);
  }
};

Blockly.Blocks['stendhal_pir_motion_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_PIR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_PIR_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Twig-PIR_Motion_Sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_PIR_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_PIR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_logic_water_sensor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_WATER_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_WATER_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-logic_water_sensor.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_WATER_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_WATER_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_ultrasonic_ranger'] = {
	init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.STENDHAL_INOUT_ULTRASONIC_TEXT);
	this.appendDummyInput()
	    .appendField(Blockly.Msg.STENDHAL_INOUT_ULTRASONIC_TEXT1);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/200px-Twig_-_Ultrasonic_Ranger2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_ULTRASONIC_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_motor_shield'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_MOTOR_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_INOUT_MOTOR_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Smotoshield2.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.STENDHAL_INOUT_MOTOR_CHOICE), "DIRECTION");
    /*this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Speed");*/
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_MOTOR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_bluetooth_slave'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_BT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/Twigbt00.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM2)
      .appendField(new Blockly.FieldTextInput('1',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM3)
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_BT_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_bluetooth_slave_AT'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_BT_AT_HELPURL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM1)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/stendhal_v3.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM2)
      .appendField(new Blockly.FieldTextInput('2',  Blockly.Arduino.pinGroveDigitalValidator), 'PIN');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM3)
      .appendField(new Blockly.FieldTextInput('bluetooth'), 'NAME');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM4)
      .appendField(new Blockly.FieldTextInput('0000'), 'PINCODE');
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM5);
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.STENDHAL_INOUT_BT_AT_COMM6);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_BT_AT_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_EMETTEUR_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_EMETTEUR_IR_HELPURL);
	this.appendDummyInput()
      .appendField(Blockly.Msg.STENDHAL_EMETTEUR_IR_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.STENDHAL_EMETTEUR_IR)
	  .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-LED_IR.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_EMETTEUR_IR_INPUT1);
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_EMETTEUR_IR_INPUT2)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STENDHAL_EMETTEUR_IR_TOOLTIP);
  }
};


Blockly.Blocks['stendhal_BARRIERE_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_BARRIERE_IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_BARRIERE_IR_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Infrared_Barriere.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_BARRIERE_IR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_BARRIERE_IR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_OBSTACLE_IR'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_OBSTACLE_IR_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_OBSTACLE_IR_TEXT)
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-Infrared_Obstacle.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
	this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_OBSTACLE_IR_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_OBSTACLE_IR_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_FIN_COURSE'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_FIN_COURSE_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_FIN_COURSE_TEXT)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/400px-fincourse.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(Blockly.Msg.STENDHAL_FIN_COURSE_INPUT)
		.appendField(new Blockly.FieldTextInput('', Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.STENDHAL_FIN_COURSE_TOOLTIP);
  }
};

Blockly.Blocks['stendhal_dht_read'] = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
    this.setHelpUrl(Blockly.Msg.STENDHAL_INOUT_DHT_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_DHT_READ_TYPE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.STENDHAL_INOUT_DHT_READ_H,"h"],[Blockly.Msg.STENDHAL_INOUT_DHT_READ_C,"C"],[Blockly.Msg.STENDHAL_INOUT_DHT_READ_F,"F"]]), "TYPE");
    this.appendDummyInput()
		.setAlign(Blockly.ALIGN_LEFT)
		.appendField(Blockly.Msg.STENDHAL_INOUT_DHT_READ_SENSOR)
		
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/stendhal/dht11.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(new Blockly.FieldDropdown([["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]]), "SENSOR");
    this.appendDummyInput()
		.appendField(Blockly.Msg.STENDHAL_INOUT_DHT_READ_PIN)
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.STENDHAL_INOUT_DHT_READ_TOOLTIP);
  }
};


//Moteur CC - V1
Blockly.Blocks.stendhal_dcmotor_v1 = {
  init: function() {
    this.setColour(Blockly.Blocks.stendhal.HUE);
	this.appendDummyInput()
        .appendField(Blockly.Msg.STENDHAL_MOTORSHIELD_MOTOR1);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
		.appendField(new Blockly.FieldImage("blocks/stendhal/shield-CC-motor.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));	
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_MOTORSHIELD_CONNECT)
        .appendField(new Blockly.FieldDropdown([["M1", "1"], ["M2", "2"], ["M3", "3"], ["M4", "4"]]), 'MOTEUR');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STENDHAL_MOTORSHIELD_AVANT, "FORWARD"], [Blockly.Msg.STENDHAL_MOTORSHIELD_ARRIERE, "BACKWARD"], [Blockly.Msg.STENDHAL_MOTORSHIELD_STOP, "RELEASE"]]), 'ETAT');    
    this.appendValueInput('Vitesse')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.STENDHAL_MOTORSHIELD_MOTOR_VITESSE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};


