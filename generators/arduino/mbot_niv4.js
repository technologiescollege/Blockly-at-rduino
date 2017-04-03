//http://www.makeblock.cc/mbot/

'use strict';

goog.provide('Blockly.Arduino.mBot_3');

goog.require('Blockly.Arduino');

Blockly.Arduino.mbot_onoff_pin_left_sens = function() {
	Blockly.Arduino.setups_["setup_mBot_mot_left_sens_setup"] = "pinMode(7,OUTPUT);";
	var code="";
	return code;
};

Blockly.Arduino.mbot_change_pin_left_sens = function() {
	var value_sens1 = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
	var code="digitalWrite(7,!" + value_sens1 + ");\n"; //NBR sens was reversed on left motor... so I added a not (!)
	return code;
};

Blockly.Arduino.mbot_onoff_pin_left_PWM = function() {
	Blockly.Arduino.setups_["setup_mBot_mot_left_pwm_setup"] = "pinMode(6,OUTPUT);";
	var code="";
	return code;
};

Blockly.Arduino.mbot_change_pin_left_PWM = function() {
	var value_vitesse1 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code="analogWrite(6," + value_vitesse1 + ");\n";
	return code;
};

Blockly.Arduino.mbot_onoff_pin_right_sens = function() {
	Blockly.Arduino.setups_["setup_mBot_mot_right_sens_setup"] = "pinMode(4,OUTPUT);";
	var code="";
	return code;
};

Blockly.Arduino.mbot_change_pin_right_sens = function() {
	var value_sens2 = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
	var code="digitalWrite(4," + value_sens2 + ");\n";
	return code;
};

Blockly.Arduino.mbot_onoff_pin_right_PWM = function() {
	Blockly.Arduino.setups_["setup_mBot_mot_right_pwm_setup"] = "pinMode(5,OUTPUT);";
	var code="";
	return code;
};

Blockly.Arduino.mbot_change_pin_right_PWM = function() {
	var value_vitesse2 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	var code="analogWrite(5," + value_vitesse2 + ");\n";
	return code;
};

Blockly.Arduino.mbot_rgb_onboard = function() {
  Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
	  + '#include <Wire.h>\n'
	  + '#include <SoftwareSerial.h>\n'
	  + '#include <MeMCore.h>';
  Blockly.Arduino.definitions_['define_mbot_rgb'] = 'MeRGBLed rgbled_7(7, 7==7?2:4);';
  var pixel_number = this.getFieldValue('Pixel_number') || '\'\'';
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'rgbled_7.setColor(' + pixel_number + ', ' + red + ','+green+', '+blue+');\n'
			+ 'rgbled_7.show();';
  return code;
};

Blockly.Arduino.mbot_buzzer = function() {
  var tone_number = this.getFieldValue('tone') || '\'\'';
  var octave_number = this.getFieldValue('octave') || '\'\'';
  var delay_number = this.getFieldValue('delay') || '\'\'';
  
  Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
	  + '#include <Wire.h>\n'
	  + '#include <SoftwareSerial.h>\n'
	  + '#include <MeMCore.h>';
  Blockly.Arduino.definitions_['define_mbot_buzzer'] = 'MeBuzzer buzzer;';
  
//  var code = 'buzzer.tone(' + tone_number + '*2^' + octave_number + ', ' + delay_number + ');\n'
//			+ 'delay(20);';
  var code = 'buzzer.tone(' + tone_number + '*pow(2,' + octave_number + '), ' + delay_number + ');\n' // arduino IDE compiler needs pow(x,y) instead of x^y
			+ 'delay(20);';
  return code;
};
