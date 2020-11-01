
/**
 * @author julien.bennica@gmail.com
 */

'use strict';
 
goog.provide('Blockly.Arduino.stendhal');
goog.require('Blockly.Arduino');

Blockly.Arduino.stendhal_button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_tactile = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_tactile_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_magnetsensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_magnetsensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_tiltsensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_tiltsensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_tilt_switch = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_tilt_switch_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_piezo_buzzer = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.stendhal_relay = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_relay_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.stendhal_mosfet = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_mosfet_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};


Blockly.Arduino.stendhal_led = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_stendhal_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.stendhal_LED_PWM_validator = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite(' + dropdown_pin + ', ' + value_num + ');\n';
  return code;
};

Blockly.Arduino.stendhal_rgb_led = function() {
  var dropdown_pin1 = this.getFieldValue('PIN1');
  var dropdown_stat1 = this.getFieldValue('STAT1');
  var dropdown_pin2 = this.getFieldValue('PIN2');
  var dropdown_stat2 = this.getFieldValue('STAT2');
  var dropdown_pin3 = this.getFieldValue('PIN3');
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_stendhal_rgb_led_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_stendhal_rgb_led_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_stendhal_rgb_led_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+');\n';
  return code;
};

Blockly.Arduino.stendhal_rgb_led_PWM = function() {
  var dropdown_pin_C1 = this.getFieldValue('PIN1');
  var dropdown_pin_C2 = this.getFieldValue('PIN2');
  var dropdown_pin_C3 = this.getFieldValue('PIN3');
  var dropdown_stat_C1 = this.getFieldValue('C1');
  var dropdown_stat_C2 = this.getFieldValue('C2');
  var dropdown_stat_C3 = this.getFieldValue('C3');
  Blockly.Arduino.setups_['setup_red_led_'+dropdown_pin_C1] = 'pinMode('+dropdown_pin_C1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin_C2] = 'pinMode('+dropdown_pin_C2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_blue_led_'+dropdown_pin_C3] = 'pinMode('+dropdown_pin_C3+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin_C1+','+dropdown_stat_C1+');\nanalogWrite('+dropdown_pin_C2+','+dropdown_stat_C2+');\nanalogWrite('+dropdown_pin_C3+','+dropdown_stat_C3+');\n';
  return code;
};


Blockly.Arduino.stendhal_stepper_config = function() {
  var dropdown_pin1 = this.getFieldValue('pin1');
  var dropdown_pin2 = this.getFieldValue('pin2');
  var dropdown_pin3 = this.getFieldValue('pin3');
  var dropdown_pin4 = this.getFieldValue('pin4');
  var dropdown_speed = this.getFieldValue('speed');
  var dropdown_steps = this.getFieldValue('steps');
  var dropdown_name = this.getFieldValue('STENDHAL_STEPPER_NAME');
  Blockly.Arduino.includes_['define_Stepper'] = '#include <Stepper.h>';
  Blockly.Arduino.definitions_['var_Stepper'] = 'Stepper stepper_'+dropdown_name+'('+dropdown_steps+','+dropdown_pin1+','+dropdown_pin2+','+dropdown_pin3+','+dropdown_pin4+');';
  var mysetup= dropdown_name+'.setSpeed('+dropdown_speed+');\n';
  Blockly.Arduino.setups_['setup_Stepper'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.stendhal_stepper_step = function() {
  var dropdown_step = this.getFieldValue('step');
  var dropdown_name = this.getFieldValue('STENDHAL_STEPPER_NAME');
  var code = dropdown_name+'.step('+dropdown_step+');\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_rotary_angle = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_temperature_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_light_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_moisture_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_sound_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['stendhal_ds18b20_search'] = function() {
  var ds18b20_pin = this.getFieldValue('ds18b20_pin');
  var addr = this.getFieldValue('address');
  Blockly.Arduino.includes_['ds18b20_include'] = '#include <OneWire.h>';
  Blockly.Arduino.definitions_['ds18b20_def'] = 'OneWire ds18b20('+ds18b20_pin+'); // on pin'+ds18b20_pin+' (a 4.7K resistor is necessary)\n'
  Blockly.Arduino.definitions_['ds18b20_def_'+addr] = 'byte addr_ds18b20_' + addr + '['+addr+'];\n';
  var code = 'ds18b20.search(addr_ds18b20_' + addr + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['stendhal_ds18b20_temp'] = function() {
  var addr = this.getFieldValue('address');
  Blockly.Arduino.definitions_['ds_temp'] =
	'float dstemp(byte addr[]) {\n'
	+ '  byte data[12],i;\n'
	+ '   ds18b20.reset();\n'
    + '   ds18b20.select(addr);\n'
    + '   ds18b20.write(0x44,0);//start conversion\n'
    + '   delay(1000);     // maybe 750ms is enough, maybe not  \n'
    + '   ds18b20.reset();\n'
    + '   ds18b20.select(addr);    \n'
    + '   ds18b20.write(0xBE);         // Read Scratchpad\n'
    + '   for ( i = 0; i < 9; i++) {           // we need 9 bytes\n'
    + '    data[i] = ds18b20.read();\n'
    + '   }\n'
    + '   int16_t raw = (data[1] << 8) | data[0];\n'
    + '   byte cfg = (data[4] & 0x60);\n'
    + '   if (cfg == 0x00) raw = raw & ~7;  // 9 bit resolution, 93.75 ms\n'
    + '   else if (cfg == 0x20) raw = raw & ~3; // 10 bit res, 187.5 ms\n'
    + '   else if (cfg == 0x40) raw = raw & ~1; // 11 bit res, 375 ms\n'
    + '   return (float)raw / 16.0;\n'
	+ '}';
  var code = 'dstemp('+addr+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_pir_motion_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_logic_water_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = "";
	'boolean eau_detectee';
	'void setup() {';
		'}';
	'void loop() {';
		'if (analogRead('+dropdown_pin+') > 400) {';
			'eau_detectee = true;';
		'} else {';
			'eau_detectee = false;';
		'}';
	'}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_ultrasonic_ranger = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.includes_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_motor_shield = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = 127;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  Blockly.Arduino.setups_["setup_motor"] = "pinMode(8,OUTPUT);//I1\n"+
  "  pinMode(11,OUTPUT);//I2\n"+
  "  pinMode(9,OUTPUT);//speedPinA\n"+
  "  pinMode(12,OUTPUT);//I3\n"+
  "  pinMode(13,OUTPUT);//I4\n"+
  "  pinMode(10,OUTPUT);//speedPinB\n";
  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_forward'] = "void forward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n";
    code="forward();\n";
  } else if (dropdown_direction==="right") {
    Blockly.Arduino.definitions_['define_right'] = "void right()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n"+
     "  digitalWrite(8,HIGH);\n"+
"}\n\n";
    code="right();\n";
  } else if (dropdown_direction==="left") {
    Blockly.Arduino.definitions_['define_left'] = "void left()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n"+
     "  digitalWrite(12,LOW);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="left();\n";
  } else if (dropdown_direction==="backward"){
    Blockly.Arduino.definitions_['define_backward'] = "void backward()\n"+
"{\n"+
     "  analogWrite(9,"+speed+");//input a simulation value to set the speed\n"+
     "  analogWrite(10,"+speed+");\n"+
     "  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n"+
     "  digitalWrite(12,HIGH);\n"+
     "  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n"+
     "  digitalWrite(8,LOW);\n"+
"}\n\n";
    code="backward();\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
"{\n"+
     "digitalWrite(9,LOW);// disable the pin, to stop the motor. this should be done to avid damaging the motor.\n"+
     "digitalWrite(10,LOW);\n"+
     "delay(1000);\n"+
"}\n\n";
    code="stop();\n";
  }
  return code;
};


Blockly.Arduino.stendhal_bluetooth_slave = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var NextPIN = _get_next_pin(dropdown_pin);
  var name = this.getFieldValue('NAME');
//  var pincode = this.getFieldValue('PINCODE');
  var statement_receive = Blockly.Arduino.statementToCode(this, "RCV");
  var statement_send = Blockly.Arduino.statementToCode(this, "SNT");
  /* if(pincode.length != 4){
    alert("pincode length should be 4");
  } */
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['var_bluetooth_'+dropdown_pin] = 'SoftwareSerial blueToothSerial_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+NextPIN+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  setupBlueToothConnection_'+dropdown_pin+'();\n';

  Blockly.Arduino.definitions_['define_setupBlueToothConnection_'+dropdown_pin] = 'void setupBlueToothConnection_'+dropdown_pin+'()\n'+
  '{\n'+
  '  blueToothSerial_'+dropdown_pin+'.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STNA='+name+'\\r\\n"); //set the bluetooth name as "'+name+'"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.flush();\n'+
  '}\n';
  var code = 'char recvChar_'+dropdown_pin+';\n'+
  'while(1) {\n'+
  '  if(blueToothSerial_'+dropdown_pin+'.available()) {//check if there is any data sent from the remote bluetooth shield\n'+
  '    recvChar_'+dropdown_pin+' = blueToothSerial_'+dropdown_pin+'.read();\n'+
  '    Serial.print(recvChar_'+dropdown_pin+');\n'+
       statement_receive+
  '  }\n'+
  '  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n'+
  '    recvChar_'+dropdown_pin+' = Serial.read();\n'+
  '    blueToothSerial_'+dropdown_pin+'.print(recvChar_'+dropdown_pin+');\n'+
       statement_send+
  '  }\n'+
  '}\n';
  return code;
};

Blockly.Arduino.stendhal_bluetooth_slave_AT = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var NextPIN = _get_next_pin(dropdown_pin);
  var name = this.getFieldValue('NAME');
  var pincode = this.getFieldValue('PINCODE');
  var statement_receive = Blockly.Arduino.statementToCode(this, "RCV");
  var statement_send = Blockly.Arduino.statementToCode(this, "SNT");
  /* if(pincode.length != 4){
    alert("pincode length should be 4");
  } */
  Blockly.Arduino.definitions_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['var_bluetooth_'+dropdown_pin] = 'SoftwareSerial blueToothSerial_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  pinMode('+NextPIN+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_bluetooth_'+dropdown_pin] += '  setupBlueToothConnection_'+dropdown_pin+'();\n';

  Blockly.Arduino.definitions_['define_setupBlueToothConnection_'+dropdown_pin] = 'void setupBlueToothConnection_'+dropdown_pin+'()\n'+
  '{\n'+
  '  blueToothSerial_'+dropdown_pin+'.begin(9600); 		//Set BluetoothBee BaudRate to default baud rate 9600;\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("AT"); 		//set the bluetooth work in slave mode ;\n'+
  '  delay(1000); 		// This delay is required.;\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("AT+NAME'+name+'"); 	//set the bluetooth name as "'+name+'";\n'+
  '  delay(1000); // This delay is required.;\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("AT+PIN'+pincode+'");		//Set SLAVE pincode"'+pincode+'";\n'+
  '  delay(1000); // This delay is required.;\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("AT+AUTH1"); // Permit Paired device to connect me;\n'+
  '  delay(1000); // This delay is required.;\n'+
  '  blueToothSerial_'+dropdown_pin+'.flush();\n'+
  '}\n';
  var code = 'char recvChar_'+dropdown_pin+';\n'+
  'while(1) {\n'+
  '  if(blueToothSerial_'+dropdown_pin+'.available()) {//check if there is any data sent from the remote bluetooth shield\n'+
  '    recvChar_'+dropdown_pin+' = blueToothSerial_'+dropdown_pin+'.read();\n'+
  '    Serial.print(recvChar_'+dropdown_pin+');\n'+
       statement_receive+
  '  }\n'+
  '  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n'+
  '    recvChar_'+dropdown_pin+' = Serial.read();\n'+
  '    blueToothSerial_'+dropdown_pin+'.print(recvChar_'+dropdown_pin+');\n'+
       statement_send+
  '  }\n'+
  '}\n';
  return code;
};

Blockly.Arduino.stendhal_EMETTEUR_IR = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'tone('+value_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.stendhal_BARRIERE_IR = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_barriere_ir_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.stendhal_OBSTACLE_IR = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_obstacle_ir_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.stendhal_dht_read = function() {
  var sensor = this.getFieldValue('SENSOR');
  var pin = this.getFieldValue('PIN');
  var type = this.getFieldValue('TYPE');

  var code = '';
  switch(type){
      case 'h':
//      code += 'floatToStr(dht_' + pin + '_' + sensor + '.readHumidity()) + "%"';
        code += '(int)(dht_' + pin + '_' + sensor + '.readHumidity())';
      break;
      case 'C':
//        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature()) + "C"';
          code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature())';
      break;
      case 'F':
//        code += 'floatToStr(dht_' + pin + '_' + sensor + '.readTemperature(true)) + "F"';
          code += '(int)(dht_' + pin + '_' + sensor + '.readTemperature(true))';
      break;
  }


  Blockly.Arduino.includes_['define_dht_'+ pin + '_' + sensor] = '#include <DHT.h>\n'
  Blockly.Arduino.definitions_['define_dht_'+ pin + '_' + sensor] = 'DHT dht_' + pin + '_' + sensor + '(' + pin + ',' + sensor + ');\n';

  Blockly.Arduino.setups_['setup_dht_' + pin + '_' + sensor] = 'dht_' + pin + '_' + sensor + '.begin();\n'
/*
  Blockly.Arduino.definitions_['define_dht_floatToStr'] = 'String floatToStr(float val){\n'
    + '  int buf = (int)val;\n'
    + '  String str = String(buf);\n'
    + '  str += ".";\n'
    + '  str += String((int)(val*10)-buf*10);\n'
    + '  return str;\n'
    + '}\n';
*/
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



/// Moteur DC - VERSION 1
Blockly.Arduino.stendhal_dcmotor_v1 = function() {

//Définition variables
  var dropdown_moteur = this.getFieldValue('MOTEUR');
  var dropdown_etat = this.getFieldValue('ETAT');
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'Vitesse');

//librairie
Blockly.Arduino.includes_['AFMotor.h'] = '#include <AFMotor.h>';

//Définition des moteurs
Blockly.Arduino.definitions_[' AF_DCMotor motor_dc_'+dropdown_moteur] = 'AF_DCMotor motor_dc_'+dropdown_moteur+'('+dropdown_moteur+', MOTOR12_2KHZ);\n';

//Code moteur : direction et vitesse
  var code = 'motor_dc_'+dropdown_moteur+'.setSpeed('+value_vitesse+');\n';
     code += 'motor_dc_'+dropdown_moteur+'.run('+dropdown_etat+');\n';
 
  return code;
};
