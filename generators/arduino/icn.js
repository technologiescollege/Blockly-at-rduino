/**
 * Block pour composants robot icn
 * http://www.ebay.fr/cln/dvarrel/robot-arduino/271320303014
 * @author Damien VARREL (damien@varrel.fr)
 */
'use strict';

goog.provide('Blockly.Arduino.icn');

goog.require('Blockly.Arduino');

Blockly.Arduino['tb6612_setup'] = function() {
  var PWMA_pin = this.getFieldValue('PWMA');
  var PWMB_pin = this.getFieldValue('PWMB');
  var AIN1_pin = this.getFieldValue('AIN1');
  var AIN2_pin = this.getFieldValue('AIN2');
  var BIN1_pin = this.getFieldValue('BIN1');
  var BIN2_pin = this.getFieldValue('BIN2');
  var STDBY_pin = this.getFieldValue('STDBY');
  

  Blockly.Arduino.definitions_['define_tb6612'] =
  '#define STDBY '+ STDBY_pin + ' //standby\n'
  + '//Motor A\n'
  + '#define PWMA '+ PWMA_pin + ' //Speed control\n' 
  + '#define AIN1 '+ AIN1_pin + ' //Direction\n'
  + '#define AIN2 '+ AIN2_pin + ' //Direction\n'
  + '//Motor B\n'
  + '#define PWMB '+ PWMB_pin + ' //Speed control\n'
  + '#define BIN1 '+ BIN1_pin + ' //Direction\n'
  + '#define BIN2 '+ BIN2_pin + ' //Direction\n';
  
  Blockly.Arduino.setups_['setup_tb6612'] =
  'pinMode(PWMA,OUTPUT);\n'
  + '  pinMode(AIN1,OUTPUT);\n'
  + '  pinMode(AIN2,OUTPUT);\n'
  + '  pinMode(PWMB,OUTPUT);\n'
  + '  pinMode(BIN1,OUTPUT);\n'
  + '  pinMode(BIN2,OUTPUT);\n'
  + '  pinMode(STDBY,OUTPUT);\n'
  + '  digitalWrite(STDBY,1);';
  var code = '';
  return code;
};

Blockly.Arduino['tb6612_controller'] = function() {
  var STATE = this.getFieldValue('STATE');
  if (STATE=='ON') STATE='HIGH'; else STATE='LOW';
  var MOTORA = Blockly.Arduino.valueToCode(this, 'MOTORA', Blockly.Arduino.ORDER_ATOMIC);
  var MOTORB = Blockly.Arduino.valueToCode(this, 'MOTORB', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['tb6612_motor_function'] =
  'void tb6612_motors(int speedA,int speedB,boolean state) {\n'
  + '	if (not state) {\n'
  + '		digitalWrite(AIN1,LOW);digitalWrite(AIN2,LOW);\n'
  + '		digitalWrite(BIN1,LOW);digitalWrite(BIN2,LOW);\n'
  + '		return;\n'
  + '	}\n'
  + '	if (speedA>0) {\n'
  + '		digitalWrite(AIN1,HIGH);digitalWrite(AIN2,LOW);\n'
  + '	}else{\n'
  + '		digitalWrite(AIN1,LOW);digitalWrite(AIN2,HIGH);\n'
  + '	}\n'
  + '	analogWrite(PWMA,abs(speedA));\n'
  + '	if (speedB>0) {\n'
  + '		digitalWrite(BIN1,HIGH);digitalWrite(BIN2,LOW);\n'
  + '	}else{\n'
  + '		digitalWrite(BIN1,LOW);digitalWrite(BIN2,HIGH);\n'
  + '	}\n'
  + '	analogWrite(PWMB,abs(speedB));\n'
  + '}';
  var code = 'tb6612_motors('+MOTORA+','+MOTORB+','+STATE+');\n';
  return code;
};

Blockly.Arduino['hcsr04'] = function() {
  var pin = this.getFieldValue('hcsr04_pin');
  Blockly.Arduino.definitions_['define_distance_cm'] =
	'float ultrasonic_dist_cm(byte pin) {\n'
	+ '  pinMode(pin,OUTPUT);\n'
	+ '  digitalWrite(pin,HIGH);\n'
	+ '  delayMicroseconds(1000);\n'
	+ '  digitalWrite(pin,LOW);\n'
	+ '  pinMode(pin,INPUT);\n'
	+ '  unsigned long duration = pulseIn(pin,HIGH,500000);\n'
	+ '  float value = duration/58.8;\n'
	+ '  delay(60);\n'
	+ '  return value;\n'
	+ '}';
  var code = 'ultrasonic_dist_cm('+pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['servomotor_angle'] = function() {
  var servo_pin = this.getFieldValue('servo_pin');
  var servo_angle = Blockly.Arduino.valueToCode(this, 'servo_angle', Blockly.Arduino.ORDER_ATOMIC); 
  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + servo_pin] = 'Servo servo_' + servo_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + servo_pin] = 'servo_' + servo_pin + '.attach(' + servo_pin + ');\n';
  var code = 'servo_' + servo_pin + '.write(' + servo_angle + ');\n';
  return code;
};
Blockly.Arduino['servomotor_detach'] = function() {
  var servo_pin = this.getFieldValue('servo_pin');
  var code = 'servo_' + servo_pin + '.detach();\n';
  return code;
};
Blockly.Arduino['servomotor_attach'] = function() {
  var servo_pin = this.getFieldValue('servo_pin');
  var code = 'servo_' + servo_pin + '.attach(' + servo_pin + ');\n';
  return code;
};
Blockly.Arduino['servomotor_attached'] = function() {
  var servo_pin = this.getFieldValue('servo_pin');
  var code = 'servo_' + servo_pin + '.attached()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ds18b20_search'] = function() {
  var dropdown_name = this.getFieldValue('DS18B20_NAME');
  var ds18b20_pin = Blockly.Arduino.valueToCode(this, 'ds18b20_pin', Blockly.Arduino.ORDER_ATOMIC);
  var ds18b20_array = Blockly.Arduino.valueToCode(this, 'ds18b20_array', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['ds18b20_include'] = '#include <DS18B20.h>';
  Blockly.Arduino.definitions_['ds18b20_def_' + dropdown_name] = 'DS18B20 ' + dropdown_name + '(' + ds18b20_pin + '); // temp sensor on pin ' + ds18b20_pin;
  var code = 'uint8_t addr_' + dropdown_name + '[8];\n' +
  dropdown_name + '.getAddress(addr_' + dropdown_name + ');\n';
  return code;
};

Blockly.Arduino['ds18b20_temp'] = function() {
  var dropdown_name = this.getFieldValue('DS18B20_NAME');
  var code = dropdown_name + '.getTempC()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};