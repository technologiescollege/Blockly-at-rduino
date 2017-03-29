//***********************************************************************************
//								GOOGLE Blockly
//***********************************************************************************

//---------------------------------logic--------------------------------------------

	Blockly.Blocks.logic_compare.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_operation.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_negate.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_boolean.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.logic_null.getBlockType = function() {
		return Blockly.Types.NULL;
	};
	Blockly.Blocks.logic_ternary.getBlockType = function() {
		return Blockly.Types.BOOLEAN;
	};
	Blockly.Blocks.controls_switch.getVars = function() {
		return [this.getFieldValue('SWVAR')];
	};
	Blockly.Blocks.controls_switch.getVarType = function() {
		return this.inputList[1].connection.targetBlock().getBlockType();
	};
	
//---------------------------------loops--------------------------------------------

	Blockly.Blocks.controls_for.getVarType = function() {
		return this.inputList[1].connection.targetBlock().getBlockType();
	};
	Blockly.Blocks.controls_forEach.getVars = function() {
		return [this.getFieldValue('VAR')];	
	};
	Blockly.Blocks.controls_forEach.getVarType = function() {
		return this.inputList[1].connection.targetBlock().getBlockType();
	};
	
//---------------------------------array--------------------------------------------

	Blockly.Blocks.array_create_with.getBlockType = function() {
		// define an new blocktype for each array
		var blockType = new Blockly.Type({
			  typeId: 'Array',
			  typeMsgName: 'ARD_TYPE_ARRAY',
			  compatibleTypes: []
			});
		// add 2 properties 
		// the size
		blockType.arraySize = this.itemCount_;
		// type of elements
		blockType.arrayType = Blockly.Types.UNDEF;
		var j = 1;
		while ( j <= this.itemCount_) {
			// the first input with a block determine the type of the elements  
			if (this.inputList[j].connection && this.inputList[j].connection.targetBlock()) {
				blockType.arrayType = this.inputList[j].connection.targetBlock().getBlockType();
				j = this.itemCount_ + 1;
			} else {
				j++;
			}
		}
		return blockType;
	};
	
	Blockly.Blocks.array_getIndex.getBlockType = function() {
		if (this.inputList[1].connection && this.inputList[1].connection.targetBlock()) {
			var blockType = this.inputList[1].connection.targetBlock().getBlockType();
			if (blockType instanceof Blockly.Type) {
				return blockType.arrayType;
			} else {
				// in case the input is a variable, we need to identify it
				// otherwise we just get the type of this variable
				// and not the type of the elements
				// so we set the type to Blockly.Types.ARRAY
				return [Blockly.Types.ARRAY, blockType[1]];
			}
		} else {
			return Blockly.Types.UNDEF;
		}
	};


//---------------------------------maths--------------------------------------------

Blockly.Blocks.math_number.getBlockType = function() {
    var numString = this.getFieldValue('NUM');
    return Blockly.Types.identifyNumber(numString);
};
Blockly.Blocks.inout_angle_maths.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_arithmetic.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_single.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_trig.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_constant.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_number_property.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.math_change.getVarType = function() {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
};
Blockly.Blocks.math_round.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.math_modulo.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_int.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.math_random_float.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

//---------------------------------text--------------------------------------------

Blockly.Blocks.text.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_char.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_join.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_append.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.text_length.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.text_isEmpty.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//***********************************************************************************
//								Arduino base 
//***********************************************************************************

//---------------------------------arduino_base.js-------------------------------------

Blockly.Blocks.millis.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.millis_sec.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.var_random.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.base_delay.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_delay_sec.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_map.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.various_constrain.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------arduino_conversion.js-------------------------------------

Blockly.Blocks.conversion_tochar.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.conversion_tobyte.getBlockType = function() {
	return Blockly.Types.SHORT_NUMBER;
};
Blockly.Blocks.conversion_toint.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.conversion_tofloat.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

//---------------------------------arduino_io.js-------------------------------------

Blockly.Blocks.inout_buildin_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_pulsein.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.inout_pulsein_timeout.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.inout_digital_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_digital_read_validator.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_PWM_write_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_PWM_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_write_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.tone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.notone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_analog_read_validator.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_onoff.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.inout_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.inout_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------arduino_serial.js-------------------------------------

Blockly.Blocks.serial_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.serial_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_write_out.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------arduino_softserial.js-------------------------------------

Blockly.Blocks.soft_read.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.soft_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.soft_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.soft_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//---------------------------------storage.js-------------------------------------

Blockly.Blocks.storage_sd_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.storage_eeprom_write_long.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.storage_eeprom_read_long.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.storage_eeprom_write_byte.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.storage_eeprom_read_byte.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------robot_misc.js-------------------------------------

Blockly.Blocks.IR_get.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};

//***********************************************************************************
//								adafruit_motorshield
//***********************************************************************************

//---------------------------------adafruit_motorshield.js-------------------------------------

Blockly.Blocks.dcmotor_v1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//***********************************************************************************
//								arduino_shield
//***********************************************************************************

//---------------------------------arduino_shield.js-------------------------------------

Blockly.Blocks.LCD_Keypad_Shield_DFR_09.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//***********************************************************************************
//								Bitbloq
//***********************************************************************************

//---------------------------------bitbloq.js-------------------------------------

Blockly.Blocks.bq_led.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.bq_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.bq_ultrason.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.bq_servo.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.bq_bouton_poussoir.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.bq_capteur_de_ligne.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.bq_potentiometre.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.bq_luminosite.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.bq_servo_rotation_continue.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.bq_bluetooth_slave.getBlockType = function() {
	return Blockly.Types.TEXT;
};

//***********************************************************************************
//								dfplayer-mini-mp3-dfrobot
//***********************************************************************************

//---------------------------------dfplayer-mini-mp3-dfrobot.js-------------------------------------

Blockly.Blocks.lp2i_mp3_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								dfrobot_romeo_v2
//***********************************************************************************

//---------------------------------dfrobot_romeo_v2.js-------------------------------------

Blockly.Blocks.romeo_switch.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.romeo_forward.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_backward.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_turn_left.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_turn_right.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_mot_M1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_mot_M2.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_M1_sens.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_M1_PWM.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_M2_sens.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.romeo_M2_PWM.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								display-oled-128x64-i2c
//***********************************************************************************

//---------------------------------display-oled-128x64-i2c.js-------------------------------------

Blockly.Blocks.lp2i_u8g_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								fischertechnik
//***********************************************************************************

//---------------------------------fischertechnik.js-------------------------------------

Blockly.Blocks.fischertechnik_feu_rouge.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_feu_orange.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_feu_vert.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_barriere_lumineuse.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.fischertechnik_BP_capteur_de_presence.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_capteur_magnetique.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.fischertechnik_capteur_de_lumiere.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.fischertechnik_moteurs_CC.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								FlyCamEco v2
//***********************************************************************************

//---------------------------------flycamone-eco-v2.js-------------------------------------

Blockly.Blocks.flycam_switch.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.flycam_record.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.flycam_stop.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								GROVE
//***********************************************************************************

//---------------------------------grove.js-------------------------------------

Blockly.Blocks.grove_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_button.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_rotary_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_tilt_switch.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_piezo_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_relay.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_temporature_sensor.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.grove_serial_lcd_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_serial_lcd_power.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_serial_lcd_effect.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_sound_sensor.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_pir_motion_sensor.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_line_finder.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_ultrasonic_ranger.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_motor_shield.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_thumb_joystick.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_rgb_led.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_bluetooth_slave.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_dht_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_mini_driver_error.getBlockType = function () {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_bluetooth_slave_AT.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_FIN_COURSE.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.grove_EMETTEUR_IR.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.grove_RECEPTEUR_IR.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};

//***********************************************************************************
//								ICN
//***********************************************************************************

//---------------------------------icn.js-------------------------------------

Blockly.Blocks.hcsr04.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.ds18b20_search.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.ds18b20_temp.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.servomotor_attached.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
	
	
//***********************************************************************************
//								JEULIN maquette de feux
//***********************************************************************************

//---------------------------------jeulin_maquette_feux.js-------------------------------------

Blockly.Blocks.jeulin_appel_pieton_voie1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.jeulin_appel_pieton_voie2.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.jeulin_detection_magnetique_ils1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.jeulin_detection_infrarouge_bari1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.jeulin_detection_luminosite_ldr1.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.jeulin_feux_voie1_led1red.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feux_voie1_led1yellow.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feux_voie1_led1green.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feux_voie2_led1red.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feux_voie2_led1yellow.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feux_voie2_led1green.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feu_pieton_led1red.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_feu_pieton_led1green.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jeulin_alarme_pieton_buzzer1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								Kit vélo Ptits Deb
//***********************************************************************************

//---------------------------------kit_velo_niv1.js-------------------------------------

//---------------------------------kit_velo_niv2.js-------------------------------------


//***********************************************************************************
//								Adafruit DEL RGB NeoPixel
//***********************************************************************************

//---------------------------------led-rgb-ws2812b.js-------------------------------------

Blockly.Blocks.lp2i_ledRGB_WS2812B_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.lp2i_ledRGB_WS2812B_setPixelColor.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.lp2i_ledRGB_WS2812B_setBrightness.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------matrix-led-rgb-ws2812b.js-------------------------------------

Blockly.Blocks.MatrixLED_WS2812B_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.MatrixLED_WS2812B_setPixelColor.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.MatrixLED_WS2812B_setBrightness.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.MatrixLED_WS2812B_CLEAN.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.MatrixLED_WS2812B_draw.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								Makeblock mBot
//***********************************************************************************

//---------------------------------mbot1.js-------------------------------------

Blockly.Blocks.mbot_forward.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_backward.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_turn_left.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_turn_right.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------mbot2.js-------------------------------------

Blockly.Blocks.mbot_mot_left.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_mot_right.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------mbot3.js-------------------------------------

Blockly.Blocks.mbot_left_sens.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_left_PWM.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_right_sens.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_right_PWM.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_rgb_onboard.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mbot_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								My Human Kit
//***********************************************************************************

//---------------------------------mhk.js-------------------------------------

Blockly.Blocks.mhk_ultrason.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mhk_capteur_myoware.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.mhk_moteur_vibreur.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								MultiFunction shield
//***********************************************************************************

//---------------------------------multi-function.js-------------------------------------

Blockly.Blocks.multifunction_buildin_led.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_digital_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.multifunction_pot_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_analog_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_tone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_notone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_segment.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_segment_number.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.multifunction_PWM_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								Robots misc.
//***********************************************************************************

//---------------------------------robot_misc.js-------------------------------------

Blockly.Blocks.IR_serial_decoder.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.IR_get_blink.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.IR_get_blink.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};

//---------------------------------robot_motors.js-------------------------------------

Blockly.Blocks.ardu_motor.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.ardu_motor_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.arduino_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.pololu_drv8835_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.radio_shack_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.dfrobot_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.generic_motor_s.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.generic_motor.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
//***********************************************************************************
//								RobUno
//***********************************************************************************

//---------------------------------robuno.js-------------------------------------

Blockly.Blocks.robuno_led_rouge.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.robuno_led_blanche.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.robuno_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.robuno_servomoteur_gauche.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.robuno_servomoteur_droite.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.robuno_capteur_collision_gauche.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.robuno_capteur_collision_droite.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.robuno_ldr_gauche.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.robuno_ldr_droite.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.robuno_moteurs_CC.getBlockType = function() {
	return Blockly.Types.NUMBER;
};


//***********************************************************************************
//								servo
//***********************************************************************************

//---------------------------------servo.js-------------------------------------

Blockly.Blocks.servo_attach.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.servo_move.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.servo_read_degrees.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.servo_attached.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.servo_detach.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.servo_detach.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.servo_rot_continue.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.servo_rot_continue.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								TechnZone51
//***********************************************************************************

//---------------------------------technozone51.js-------------------------------------

Blockly.Blocks.technozone_lcdinit.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_lcdspecial.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_lcdclear.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_lcdwrite.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_lcdspecial.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_lcdclear.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_led1red.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_led1green.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_led1yellow.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_relay1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_buzzer1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_buzzer_tone.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_irsend.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_sonar1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_servo1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_read_servo1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_btn1white.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_btn.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_bt_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_bt_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_speech_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_ihm_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_available.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ihm_change.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ihm_inter_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ihm_btn_read.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ihm_potar_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_bt_read.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.technozone_robot_bt_write.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.technozone_robot_irleft.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ircenter.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_irright.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ligleft.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_robot_ligright.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_btn1black.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_btn1green.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_btn1red.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_switch1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_ils1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_proxi1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_bari1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_lig1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_cmouv1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_potar1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_ctn1.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};
Blockly.Blocks.technozone_ldr1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_mot2.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_pap1cc.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_led_def.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_btn_def.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_speech_say.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_inter_def.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_led_on.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_inter_on.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_potar_def.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_gauge_def.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_ihm_gauge_write.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_pap1relatif.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_move.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_turn.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_robot_stop.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_pap1init.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_pap1busy.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_mot1easybot1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_mot1easycon1.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_telec2.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_telecsetup.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_telec1.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.technozone_telecinit.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.technozone_telecflush.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//***********************************************************************************
//								Zumobot
//***********************************************************************************

//---------------------------------zumo_motors.js-------------------------------------

Blockly.Blocks.zumo_motors_FN.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FNs.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FR.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FRs.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FL.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FLs.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FBs.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FB.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.zumo_motors_FUs.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
//---------------------------------zumo_sensors.js-------------------------------------

Blockly.Blocks.Zumo_setup_button_wait_il.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.Zumo_setup_button_wait_iph.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.Zumo_wait_button_push.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.Zumo_play_notes_z.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.Zumo_line_follower.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.Zumo_SensorCalibration.getBlockType = function() {
	return Blockly.Types.NULL;
};

//---------------------------------EsusBoard.js-------------------------------------

Blockly.Blocks.EsusBoard_init.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_motor1.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_motor2.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_analog.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.EsusBoard_WifiConfig.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_WifiConfigIP.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_WifiConfigAP.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_ReadStream.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.EsusBoard_dataWifiAvailable.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.EsusBoard_WifiContain.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.EsusBoard_SendStream.getBlockType = function() {
	return Blockly.Types.NULL;
};
Blockly.Blocks.EsusBoard_SendFloatStream.getBlockType = function() {
	return Blockly.Types.NULL;
};

//---------------------------------APDS-9960_RGB_Gesture.js-------------------------------------

Blockly.Blocks.APDS9960_ColorSensor_init.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.APDS9960_ColorSensor_test.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.APDS9960_ColorSensor_ambient.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.APDS9960_ColorSensor_red.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.APDS9960_ColorSensor_green.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.APDS9960_ColorSensor_blue.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------JFBlocks.js-------------------------------------

Blockly.Blocks.jfblocks_decode.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jfblocks_action.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jfblocks_tx.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.jfblocks_last_value.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//---------------------------------collyc.js-------------------------------------

Blockly.Blocks.collyc_clavier12_touche_appuyee.getBlockType = function () {
	return Blockly.Types.TEXT;
};


//---------------------------------Sharp_IR.js-------------------------------------

Blockly.Blocks.Sharp_IR_attach.getBlockType = function () {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.Sharp_IR_read.getBlockType = function () {
	return Blockly.Types.NUMBER;
};
