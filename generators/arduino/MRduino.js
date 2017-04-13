'use strict';

goog.provide('Blockly.Arduino.MRduino');

goog.require('Blockly.Arduino');


Blockly.Arduino['MRduino_init'] = function() {
  Blockly.Arduino.includes_['define_ss'] = '#include <mrduino.h>\n';
  Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(115200);';
  return "";
};

Blockly.Arduino['MRduino_forward'] = function() {
	var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='forward('+value_speed+');\n';
	return code;
};

Blockly.Arduino['MRduino_forward_mm'] = function() {
	var value_distance = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='forward_mm(10,'+value_distance+'*10);\n';
	return code;
};

Blockly.Arduino['MRduino_stop'] = function() {
	var code='stop();\n';
	return code;
};

Blockly.Arduino['MRduino_controlEnable'] = function() {
	var code='controlEnable();\n';
	return code;
};

Blockly.Arduino['MRduino_controlDisable'] = function() {
	var code='controlDisable();\n';
	return code;
};

Blockly.Arduino['MRduino_back'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='back('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino_back_mm'] = function() {
    var value_distance = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='back_mm(10,'+value_distance+'*10);\n';
    return code;
};

Blockly.Arduino['MRduino_turnLeft'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnLeft('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino_turnLeft_degree'] = function() {
    var value_angle = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnLeft_degree(10,'+value_angle+');\n';
    return code;
};

Blockly.Arduino['MRduino_turnRight_degree'] = function() {
    var value_angle = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnRight_degree(10,'+value_angle+');\n';
    return code;
};

Blockly.Arduino['MRduino_turnRight'] = function() {
    var value_speed = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code='turnRight('+value_speed+');\n';
    return code;
};

Blockly.Arduino['MRduino_proxSensor1'] = function() {
  var code = 'proxSensor(1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_proxSensor2'] = function() {
  var code = 'proxSensor(2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_proxSensor3'] = function() {
  var code = 'proxSensor(3)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_proxSensor4'] = function() {
  var code = 'proxSensor(4)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_proxSensor5'] = function() {
  var code = 'proxSensor(5)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_proxSensor6'] = function() {
  var code = 'proxSensor(6)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight1'] = function() {
  var code = 'ambiantLight(1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight2'] = function() {
  var code = 'ambiantLight(2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight3'] = function() {
  var code = 'ambiantLight(3)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight4'] = function() {
  var code = 'ambiantLight(4)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight5'] = function() {
  var code = 'ambiantLight(5)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_ambiantLight6'] = function() {
  var code = 'ambiantLight(6)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_groundSensor1'] = function() {
  var code = 'groundSensor(1)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_groundSensor2'] = function() {
  var code = 'groundSensor(2)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_groundSensor3'] = function() {
  var code = 'groundSensor(3)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_led1On'] = function() {
	var code='led(1,1);\n';
	return code;
};

Blockly.Arduino['MRduino_led2On'] = function() {
	var code='led(2,1);\n';
	return code;
};

Blockly.Arduino['MRduino_led3On'] = function() {
	var code='led(3,1);\n';
	return code;
};

Blockly.Arduino['MRduino_led1Off'] = function() {
	var code='led(1,0);\n';
	return code;
};

Blockly.Arduino['MRduino_led2Off'] = function() {
	var code='led(2,0);\n';
	return code;
};

Blockly.Arduino['MRduino_led3Off'] = function() {
	var code='led(3,0);\n';
	return code;
};

Blockly.Arduino['MRduino_led1Toggle'] = function() {
	var code='ledToggle(1);\n';
	return code;
};

Blockly.Arduino['MRduino_led2Toggle'] = function() {
	var code='ledToggle(2);\n';
	return code;
};

Blockly.Arduino['MRduino_led3Toggle'] = function() {
	var code='ledToggle(3);\n';
	return code;
};

Blockly.Arduino['MRduino_battery'] = function() {
  var code = 'battery()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['MRduino_temperature'] = function() {
  var code = 'temperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};