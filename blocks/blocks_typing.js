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
Blockly.Blocks.math_change.getBlockType = function() {
	return Blockly.Types.NUMBER;
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
Blockly.Blocks.var_random.getBlockType = function() {
	return Blockly.Types.LARGE_NUMBER;
};
Blockly.Blocks.base_delay.getBlockType = function() {
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
	return Blockly.Types.CHARACTER;
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

Blockly.Blocks.romeo_forward.getBlockType = function() {
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
//								servo
//***********************************************************************************

//---------------------------------servo.js-------------------------------------

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