//http://www.makeblock.cc/mbot/

'use strict';

goog.provide('Blockly.Arduino.mBot_2');

goog.require('Blockly.Arduino');

Blockly.Arduino.mbot_mot_left = function() {
	var pindir1 = 7;
	var pinpwm1 = 6;
	//var value_sens1 = false;
	//var value_vitesse1 = 255;
	var value_sens1 = this.getFieldValue('STAT');
	var value_vitesse1 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_left"] = "pinMode("+pindir1+",OUTPUT);\n"+
	"  pinMode("+pinpwm1+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot_left'] = "void cmd_mBot_mot_left(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
		"{\n"+
		"  digitalWrite(dirpin,!sens);\n"+ //NBR sens was reversed on left motor... so I added a not (!)
		"  analogWrite(pwmpin,vitesse);\n"+
		"}\n";
	var code="cmd_mBot_mot_left("+pindir1+","+pinpwm1+","+value_sens1+","+value_vitesse1+");\n";
	return code;
};

Blockly.Arduino.mbot_mot_right = function() {
	var pindir2 = 4;
	var pinpwm2 = 5;
	//var value_sens2 = false;
	//var value_vitesse2 = 255;
	var value_sens2 = this.getFieldValue('STAT');
	var value_vitesse2 = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_["setup_mBot_mot_right"] = "pinMode("+pindir2+",OUTPUT);\n"+
	"  pinMode("+pinpwm2+",OUTPUT);\n";
	Blockly.Arduino.definitions_['define_mBot_cmd_mot_right'] = "void cmd_mBot_mot_right(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
		"{\n"+
		"  digitalWrite(dirpin,sens);\n"+
		"  analogWrite(pwmpin,vitesse);\n"+
		"}\n";
	var code="cmd_mBot_mot_right("+pindir2+","+pinpwm2+","+value_sens2+","+value_vitesse2+");\n";
	return code;
};

//NBR added on 2017-04-05
Blockly.Arduino.mbot_line_finder = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
	  + '#include <Wire.h>\n'
	  + '#include <SoftwareSerial.h>\n'
	  + '#include <MeMCore.h>';

  Blockly.Arduino.definitions_['var_lineFollower_'+dropdown_pin] = 'MeLineFollower lineFinder_'+dropdown_pin+'('+dropdown_pin+');\n';

  var code = 'lineFinder_'+dropdown_pin+'.readSensors()\n';
//  var code = '/*test*/'
			
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//NBR added on 2017-04-05
Blockly.Arduino.mbot_ultrasonic_ranger = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
      + '#include <Wire.h>\n'
	  + '#include <SoftwareSerial.h>\n'
	  + '#include <MeMCore.h>';

  Blockly.Arduino.definitions_['var_ultrasonic_'+dropdown_pin] = 'MeUltrasonicSensor ultraSensor_'+dropdown_pin+'('+dropdown_pin+');\n';

  var code = '((int)ultraSensor_'+dropdown_pin;
//  var code = '/*test*/'
  if(dropdown_unit==="cm"){
    code += '.distanceCm())\n';
  } else {
    code += '.distanceInch())\n';
 }
			
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//NBR added on 2017-04-05
Blockly.Arduino.mbot_IR_receiver = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
	  + '#include <Wire.h>\n'
	  + '#include <SoftwareSerial.h>\n'
	  + '#include <MeMCore.h>';

  Blockly.Arduino.includes_['function_IR_Receiver_'+dropdown_pin] = '\nint infraredReceive_'+dropdown_pin+'(MeInfraredReceiver p) {\n' +
  '    int value = -1;\n' +
  '    if (p.available() ) {\n' +
  '      value = p.read();\n' +
  '    }\n' +
  '    return(value);\n' +
  '}\n\n';
  
  Blockly.Arduino.definitions_['var_IR_Receiver_'+dropdown_pin] = 'MeInfraredReceiver infraredReceiverDecode_'+dropdown_pin+'('+dropdown_pin+');\n';
  Blockly.Arduino.setups_['setup_IR_Receiver_'+dropdown_pin] = 'infraredReceiverDecode_'+dropdown_pin+'.begin();\n';

  var code = 'infraredReceive_'+dropdown_pin+'(infraredReceiverDecode_'+dropdown_pin+')';
//  var code = '/*test*/'
			
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};