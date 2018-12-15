//lcd

Blockly.Blocks.peguino_actuators_serial_lcd_print.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_actuators_serial_lcd_power.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};
Blockly.Blocks.peguino_actuators_serial_lcd_effect.getBlockType = function() {
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

//gear motor
// Blockly.Blocks.peguino_actuators_motor_sens.getBlockType = function() {
	// return Blockly.Types.NUMBER;
// };
// Blockly.Blocks.peguino_actuators_motor_PWM.getBlockType = function() {
	// return Blockly.Types.NUMBER;
// };

//switch
Blockly.Blocks.peguino_sensors_button.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//button
Blockly.Blocks.peguino_sensors_button.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//potentiometer
Blockly.Blocks.peguino_sensors_rotary_angle.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//ldr
Blockly.Blocks.peguino_sensors_ldr.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//IR LED
Blockly.Blocks.peguino_sensors_EMETTEUR_IR.getBlockType = function() {
   return Blockly.Types.NUMBER;
};
Blockly.Blocks.peguino_sensors_RECEPTEUR_IR.getBlockType = function() {
   return Blockly.Types.BOOLEAN;
};

//LED
Blockly.Blocks.peguino_actuators_led.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//PIR sensor
Blockly.Blocks.peguino_sensors_pir_motion_sensor.getBlockType = function() {
	return Blockly.Types.BOOLEAN;
};

//climate brick
Blockly.Blocks.peguino_sensors_dht_read.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//proximity brick
Blockly.Blocks.peguino_sensors_ultrasonic_ranger.getBlockType = function() {
	return Blockly.Types.NUMBER;
};

//buzzer brick
Blockly.Blocks.peguino_actuators_buzzer.getBlockType = function() {
	return Blockly.Types.NUMBER;
};