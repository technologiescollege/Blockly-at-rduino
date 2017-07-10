//---------------------------------robot_misc.js-------------------------------------

Blockly.Blocks.IR_serial_decoder.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.IR_get_blink.getBlockType = function() {
	return Blockly.Types.NUMBER;
};
Blockly.Blocks.IR_get.getBlockType = function() {
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