//---------------------------------arduino_base.js-------------------------------------

Blockly.Blocks.base_begin.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_end.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_define.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_define_bloc.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
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
Blockly.Blocks.tempo_no_delay.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.base_toggle.getBlockType = function() {
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
Blockly.Blocks.conversion_toString.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.conversion_map.getBlockType = function() {
	return Blockly.Types.NUMBER;
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
Blockly.Blocks.inout_digital_read_check.getBlockType = function() {
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
Blockly.Blocks.tone_notime.getBlockType = function() {
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
Blockly.Blocks.serial_line.getBlockType = function() {
	return Blockly.Types.TEXT;
};
Blockly.Blocks.serial_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.serial_readStringUntil.getBlockType = function() {
	return Blockly.Types.TEXT;
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
Blockly.Blocks.soft_readStringUntil.getBlockType = function() {
	return Blockly.Types.TEXT;
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

//---------------------------------arduino_BT.js-------------------------------------

Blockly.Blocks.arduino_BT_send.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.arduino_BT_verify_send.getVars = function() {
	return [this.getFieldValue('SWVAR')];
};
Blockly.Blocks.arduino_BT_verify_send.getVarType = function() {
	return this.inputList[1].connection.targetBlock().getBlockType();
};