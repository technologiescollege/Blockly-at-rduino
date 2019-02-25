'use strict';

goog.provide('Blockly.Arduino.MRduino2');

goog.require('Blockly.Arduino');


Blockly.Arduino['MRduino2_init'] = function() {
  Blockly.Arduino.includes_['define_ss'] = '#include <mrduino2.h>\n';
  Blockly.Arduino.setups_['serial_begin'] = 'initRobot();';
  return "";
};

Blockly.Arduino['MRduino2_forward'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='forward('+value_speed+');\n';
	return code;
};

Blockly.Arduino['MRduino2_forward_mm'] = function() {
	var value_distance = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='forward_mm(10,'+value_distance+'*10);\n';
	return code;
};

Blockly.Arduino['MRduino2_motorRight'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var value_dir = Blockly.Arduino.valueToCode(this, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
	var code='motorRight('+value_speed+', '+value_dir+');\n';
	return code;
};

Blockly.Arduino['MRduino2_motorLeft'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var value_dir = Blockly.Arduino.valueToCode(this, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
	var code='motorLeft('+value_speed+', '+value_dir+');\n';
	return code;
};

Blockly.Arduino['MRduino2_stop'] = function() {
	var code='stop();\n';
	return code;
};

Blockly.Arduino['MRduino2_back'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='back('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino2_back_mm'] = function() {
    var value_distance = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='back_mm(10,'+value_distance+'*10);\n';
    return code;
};

Blockly.Arduino['MRduino2_turnLeft'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnLeft('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino2_turnLeft_degree'] = function() {
    var value_angle = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnLeft_degree(10,'+value_angle+');\n';
    return code;
};

Blockly.Arduino['MRduino2_turnRight_degree'] = function() {
    var value_angle = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnRight_degree(10,'+value_angle+');\n';
    return code;
};

Blockly.Arduino['MRduino2_turnRight'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnRight('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino2_proxSensor'] = function() {
  var code = 'proxSensor()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino2_ledRight'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='ledRight('+value_speed+');\n';
	return code;
};

Blockly.Arduino['MRduino2_ledLeft'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='ledLeft('+value_speed+');\n';
	return code;
};

Blockly.Arduino['MRduino2_battery'] = function() {
  var code = 'battery()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
