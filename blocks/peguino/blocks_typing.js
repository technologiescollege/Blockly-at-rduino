//buzzer brick
Blockly.Blocks.peguino_actuators_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//buzzer2 brick
Blockly.Blocks.peguino_actuators_buzzer2.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//LED
Blockly.Blocks.peguino_actuators_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

Blockly.Blocks.peguino_actuators_rgbled.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//lcd

Blockly.Blocks.peguino_actuators_i2c_scan.getBlockType = function () {
	return Blockly.Types.NULL;
};
Blockly.Blocks.peguino_actuators_i2c_lcdinit.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_i2c_lcdwrite.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.peguino_actuators_i2c_lcdclear.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//servo
Blockly.Blocks.peguino_actuators_servo_attach.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_servo_move.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_servo_read_degrees.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_servo_attached.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.peguino_actuators_servo_detach.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.peguino_actuators_servo_rot_continue.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_servo_rot_continue_param.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//oled
Blockly.Blocks.peguino_actuators_u8g_draw_string.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_u8g_draw_4strings.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_u8g_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_u8g_4draw_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//gear motor
// Blockly.Blocks.peguino_actuators_motor_sens.getBlockType = function() {
	// return Blockly.Types.NUMBER;
// };
// Blockly.Blocks.peguino_actuators_motor_PWM.getBlockType = function() {
	// return Blockly.Types.NUMBER;
// };

//PIR sensor
Blockly.Blocks.peguino_sensors_pir_motion_sensor.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//button
Blockly.Blocks.peguino_sensors_button.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//climate brick
Blockly.Blocks.peguino_sensors_dht_read_UnoNano.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

Blockly.Blocks.peguino_sensors_dht_read_UnoESP32.getBlockType = function() {
	return Blockly.Types.DECIMAL;
};

//ldr
Blockly.Blocks.peguino_sensors_ldr.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//potentiometer
Blockly.Blocks.peguino_sensors_rotary_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//proximity brick
Blockly.Blocks.peguino_sensors_microprox.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_sensors_ultrasonic_ranger.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//IR LED
// Blockly.Blocks.peguino_sensors_EMETTEUR_IR.getBlockType = function() {
   // return Blockly.Types.NUMBER;
// };
// Blockly.Blocks.peguino_sensors_RECEPTEUR_IR.getBlockType = function() {
   // return Blockly.Types.BOOLEAN;
// };