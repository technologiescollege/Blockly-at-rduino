
//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

'use strict';
 
goog.provide('Blockly.Arduino.grove');

goog.require('Blockly.Arduino');


Blockly.Arduino.grove_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_grove_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.grove_button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_rotary_angle = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_ldr = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_tilt_switch = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_tilt_switch_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_piezo_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_piezo_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.grove_relay = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_relay_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.grove_temporature_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  /*
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  */
  var code = 'round( 1/(log((float)(1023-analogRead('+dropdown_pin.substring(1,2)+'))*10000/analogRead('+dropdown_pin.substring(1,2)+')/10000)/3975+1/298.15)-273.15'+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_moisture_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
#include <SerialLCD.h>
#include <SoftwareSerial.h> //this is a must
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup()
{
  slcd.begin();// set up :
}

void loop()
{
  slcd.backlight();// Turn on the backlight: //noBacklight
  slcd.setCursor(0,0); // set the cursor to (0,0):
  slcd.print("  Seeed Studio"); // Print a message to the LCD.
  slcd.setCursor(0,1); //line 2
  slcd.print("   Starter kit   ");
  delay(5000);
  //slcd.scrollDisplayLeft();//scrollDisplayRight/autoscroll/
  //slcd.clear();
  //Power/noPower
}
*/

var _get_next_pin = function(dropdown_pin) {
  var pos = -1;
    //check if NextPIN in bound
  if(parseInt(dropdown_pin)){
    var NextPIN = parseInt(dropdown_pin)+1;
    pos = profile.defaultBoard.digital.indexOf(String(NextPIN));
  } else {
    var NextPIN = 'A'+(parseInt(dropdown_pin.slice(1,dropdown_pin.length))+1);
    pos = profile.defaultBoard.analog.indexOf(String(NextPIN));
  }
  if(pos < 0){
//    alert("Grove Sensor needs PIN#+1 port, current setting is out of bound.");
    return null;
  } else {
    return NextPIN;
  }
};

Blockly.Arduino.grove_serial_lcd_print = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  /*if(text.length>16||text2.length>16){
      alert("string is too long");
  }*/
  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd_'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_lcd_'+dropdown_pin] = 'slcd_'+dropdown_pin+'.begin();\n';
  var code = 'slcd_'+dropdown_pin+'.backlight();\n';
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,0);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text+');\n';//text.replace(new RegExp('\'',"gm"),'')
  code    += 'slcd_'+dropdown_pin+'.setCursor(0,1);\n';
  code    += 'slcd_'+dropdown_pin+'.print('+text2+');\n';
  code    += 'delay('+delay_time+');\n';
  return code;
};

Blockly.Arduino.grove_serial_lcd_power = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="ON"){
    code += '.Power();\n';
  } else {
    code += '.noPower();\n';
  }
  return code;
};

Blockly.Arduino.grove_serial_lcd_effect = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_seriallcd'] = '#include <SerialLCD.h>\n';
  Blockly.Arduino.includes_['define_softwareserial'] = '#include <SoftwareSerial.h>\n';
  //generate PIN#+1 port
  var NextPIN = _get_next_pin(dropdown_pin);

  Blockly.Arduino.definitions_['var_lcd'+dropdown_pin] = 'SerialLCD slcd_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';
  var code = 'slcd_'+dropdown_pin;
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

Blockly.Arduino.grove_sound_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_pir_motion_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_line_finder = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_ultrasonic_ranger = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.includes_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code;
  if(dropdown_unit==="cm"){
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters()';
  } else {
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInInches()';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_motor_shield = function() {
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

Blockly.Arduino.grove_thumb_joystick =  function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_axis = this.getFieldValue('AXIS');
  var stickPIN = "0";
  if(dropdown_axis==="y"){
    stickPIN = _get_next_pin(dropdown_pin);
  } else {
    stickPIN = dropdown_pin;
  }
  var code = 'analogRead('+stickPIN.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);};
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;};

Blockly.Arduino.grove_rgb_led = function() {
  var dropdown_pin_C1 = this.getFieldValue('PIN1');
  var dropdown_pin_C2 = this.getFieldValue('PIN2');
  var dropdown_pin_C3 = this.getFieldValue('PIN3');
  var dropdown_stat_C1 = Blockly.Arduino.valueToCode(this, 'C1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat_C2 = Blockly.Arduino.valueToCode(this, 'C2', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat_C3 = Blockly.Arduino.valueToCode(this, 'C3', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_red_led_'+dropdown_pin_C1] = 'pinMode('+dropdown_pin_C1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin_C2] = 'pinMode('+dropdown_pin_C2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_blue_led_'+dropdown_pin_C3] = 'pinMode('+dropdown_pin_C3+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin_C1+','+dropdown_stat_C1+');\nanalogWrite('+dropdown_pin_C2+','+dropdown_stat_C2+');\nanalogWrite('+dropdown_pin_C3+','+dropdown_stat_C3+');\n';
  return code;
};

// Blockly.Arduino.grove_rgb_led = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  // var NextPIN = _get_next_pin(dropdown_pin);

  // Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  // Blockly.Arduino.setups_['setup_input_'+NextPIN] = 'pinMode('+NextPIN+', OUTPUT);';
  // Blockly.Arduino.definitions_['define_uint8'] = "#define uint8 unsigned char";
  // Blockly.Arduino.definitions_['define_uint16'] = "#define uint16 unsigned int";
  // Blockly.Arduino.definitions_['define_uint32'] = "#define uint32 unsigned long int";
  // Blockly.Arduino.definitions_['define_clkproduce_'+dropdown_pin] = "void ClkProduce_"+dropdown_pin+"(void)\n"+
  // "{\n"+
  // "  digitalWrite("+dropdown_pin+", LOW);\n"+
  // "  delayMicroseconds(20);\n"+
  // "  digitalWrite("+dropdown_pin+", HIGH);\n"+
  // "  delayMicroseconds(20);\n"+
  // "}\n";
  // Blockly.Arduino.definitions_['define_send32zero_'+dropdown_pin] = "void Send32Zero_"+dropdown_pin+"(void)\n"+
  // "{\n"+
  // "  uint8 i;\n"+
  // "  for (i=0; i<32; i++)\n"+
  // "  {\n"+
  // "    digitalWrite("+NextPIN+", LOW);\n"+
  // "    ClkProduce_"+dropdown_pin+"();\n"+
  // "  }\n"+
  // "}\n";
  // Blockly.Arduino.definitions_['define_taskanticode'] = "uint8 TakeAntiCode(uint8 dat)\n"+
  // "{\n"+
  // "  uint8 tmp = 0;\n"+
  // "  if ((dat & 0x80) == 0)\n"+
  // "  {\n"+
  // "    tmp |= 0x02;\n"+
  // "  }\n"+
  // "  \n"+
  // "  if ((dat & 0x40) == 0)\n"+
  // "  {\n"+
  // "    tmp |= 0x01;\n"+
  // "  }\n"+
  // "  return tmp;\n"+
  // "}\n";
  // Blockly.Arduino.definitions_['define_datasend_'+dropdown_pin] = "// gray data\n"+
  // "void DatSend_"+dropdown_pin+"(uint32 dx)\n"+
  // "{\n"+
  // "  uint8 i;\n"+
  // "  for (i=0; i<32; i++)\n"+
  // "  {\n"+
  // "    if ((dx & 0x80000000) != 0)\n"+
  // "    {\n"+
  // "      digitalWrite("+NextPIN+", HIGH);\n"+
  // "    }\n"+
  // "    else\n"+
  // "    {\n"+
  // "      digitalWrite("+NextPIN+", LOW);\n"+
  // "    }\n"+
  // "  dx <<= 1;\n"+
  // "  ClkProduce_"+dropdown_pin+"();\n"+
  // "  }\n"+
  // "}\n";
  // Blockly.Arduino.definitions_['define_datadealwithsend_'+dropdown_pin] = "// data processing\n"+
// "void DataDealWithAndSend_"+dropdown_pin+"(uint8 r, uint8 g, uint8 b)\n"+
// "{\n"+
  // "  uint32 dx = 0;\n"+
  // "  dx |= (uint32)0x03 << 30;             // highest two bits 1，flag bits\n"+
  // "  dx |= (uint32)TakeAntiCode(b) << 28;\n"+
  // "  dx |= (uint32)TakeAntiCode(g) << 26;\n"+
  // "  dx |= (uint32)TakeAntiCode(r) << 24;\n"+
 // "\n"+
  // "  dx |= (uint32)b << 16;\n"+
  // "  dx |= (uint32)g << 8;\n"+
  // "  dx |= r;\n"+
 // "\n"+
  // "  DatSend_"+dropdown_pin+"(dx);\n"+
// "}\n";
  // var code = "Send32Zero_"+dropdown_pin+"(); // begin\n";
  // console.log(this.itemCount_);
  // if (this.itemCount_ == 0) {
    // return '';
  // } else {
    // for (var n = 0; n < this.itemCount_; n++) {
      // var colour_rgb = this.getFieldValue('RGB'+n);
      // console.log(colour_rgb);
      // code += "DataDealWithAndSend_"+dropdown_pin+"("+hexToR(colour_rgb)+", "+hexToG(colour_rgb)+", "+hexToB(colour_rgb)+"); // first node data\n";
    // }
  // }
  // code += "Send32Zero_"+dropdown_pin+"();  // send to update data\n";
  // return code;
// };

Blockly.Arduino.grove_bluetooth_slave = function() {
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

Blockly.Arduino.grove_bluetooth_slave_AT = function() {
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

Blockly.Arduino.grove_EMETTEUR_IR = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'tone('+value_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.grove_RECEPTEUR_IR = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_FIN_COURSE = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.grove_dht_read = function() {
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

Blockly.Arduino.grove_lcd_rgb_print = function() {
  var text1 = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var text2 = Blockly.Arduino.valueToCode(this, 'TEXT2',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
	  
  if(text1.length>16||text2.length>16){
      alert("16 char maxi !");
  }

  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>\n';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = 'LCD_RGB.setCursor(0,0);\n';
  code    += 'LCD_RGB.print('+text1+');\n';
  code    += 'LCD_RGB.setCursor(0,1);\n';
  code    += 'LCD_RGB.print('+text2+');\n';
  return code;
};

Blockly.Arduino.grove_lcd_rgb_power = function() {
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = 'LCD_RGB';
  if(dropdown_stat==="ON"){
    code += '.display();\n';
  } else {
    code += '.noDisplay();\n';
  }
  return code;
};

Blockly.Arduino.grove_lcd_rgb_clean = function() {
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = 'LCD_RGB.clear();\n';
  
  return code;
};

Blockly.Arduino.grove_lcd_rgb_effect = function() {
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>\n';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = 'LCD_RGB';
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Arduino.grove_lcd_rgb_init = function() {
  Blockly.Arduino.includes_['define_lcd_rgb'] = '#include <rgb_lcd.h>';
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';

  Blockly.Arduino.definitions_['var_lcd_rgb'] = 'rgb_lcd LCD_RGB;';
  
  Blockly.Arduino.setups_['setup_lcd_rgb'] = 'LCD_RGB.begin(16, 2);\n';
  
  var code = '';
  
  return code;
};

Blockly.Arduino.grove_lcd_rgb_clear = function() {
   
  var code = 'LCD_RGB.clear();\n';
  
  return code;
};

Blockly.Arduino.grove_lcd_rgb_scrolling = function() {
  var dropdown_stat = this.getFieldValue('EFFECT');

  var code = 'LCD_RGB';
  if(dropdown_stat==="LEFT"){
    code += '.scrollDisplayLeft();\n';
  } else if(dropdown_stat==="RIGHT"){
    code += '.scrollDisplayRight();\n';
  } else {
    code += '.autoscroll();\n';
  }
  return code;
};

Blockly.Arduino.grove_lcd_rgb_set_cursor = function() {
  
  var ligne = this.getFieldValue('Line');
  var colonne = this.getFieldValue('Row');
  var code = 'LCD_RGB.setCursor('+colonne+','+ligne+');\n';
  
  return code;
};

Blockly.Arduino.grove_lcd_rgb_set_RGB = function() {
  
  var rouge = this.getFieldValue('Red');
  var vert = this.getFieldValue('Green');
  var bleu = this.getFieldValue('Blue');
  var code = 'LCD_RGB.setRGB('+rouge+','+vert+','+bleu+');\n';
  
  return code;
};

Blockly.Arduino.grove_lcd_rgb_print_data = function() {
  var data1 = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
 
  var code = 'LCD_RGB.print('+data1+');\n';
  
  return code;
};


Blockly.Arduino.grove_lcd_rgb_write_data = function() {
  var data1 = this.getFieldValue('DATA');
 
  var dropdown_stat = this.getFieldValue('FORMAT');

  var code = 'LCD_RGB';
  if(dropdown_stat==="0x"){
    code += '.write(0x'+data1+');\n';
  } else if(dropdown_stat==="0b"){
    code += '.write(0b'+data1+');\n';
  } else {
    code += '.write('+data1+');\n';
  }
    
  return code;
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//*****   Driver moteur Grove V1.3 Cdo 2017 03 19 */
function grove_driver13_genere_inc_def(value_i2c_address) {
  Blockly.Arduino.includes_['define_grove_driver13'] = '#include <Grove_I2C_Motor_Driver.h>\n';
  Blockly.Arduino.definitions_['grove_driver13_motor' + value_i2c_address] = 
                      "// Create a variable even there is a global variable named Motor. \n" +
                      "I2CMotorDriver Motor_" + value_i2c_address + ";"
  Blockly.Arduino.setups_['grove_setup_DRIVER13_' + value_i2c_address] = 'Motor_' + value_i2c_address + '.begin(' + value_i2c_address + ');\n';
}

Blockly.Arduino.grove_driver13_motor = function() {
  var value_i2c_address = Blockly.Arduino.valueToCode(this, 'I2CADDRESS', Blockly.Arduino.ORDER_ATOMIC);
  var value_MotorNum = this.getFieldValue('NUMMOTOR');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

  grove_driver13_genere_inc_def (value_i2c_address);
  return "Motor_" + value_i2c_address + ".speed(" + value_MotorNum + ", "+ value_speed + ");\n";
};

//*****   grove mini Driver moteur Grove  */
function grove_mini_driver_genere_inc_def(value_i2c_address) {
  Blockly.Arduino.includes_['define_grove_mini_driver'] = '#include <SparkFunMiniMoto.h>\n';
  Blockly.Arduino.definitions_['grove_mini_driver_motor' + value_i2c_address] = 
                      "MiniMoto Motor_" + value_i2c_address + " (" + value_i2c_address + ");"
}
Blockly.Arduino.grove_mini_driver_motor = function() {
  var value_i2c_address = this.getFieldValue('I2CADDRESS');
  var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

  grove_mini_driver_genere_inc_def (value_i2c_address);
  return "Motor_" + value_i2c_address + ".drive(" + value_speed + ");\n";
};
Blockly.Arduino.grove_mini_driver_stop = function() {
  var value_i2c_address = this.getFieldValue('I2CADDRESS');

  grove_mini_driver_genere_inc_def (value_i2c_address);
  return "Motor_" + value_i2c_address + ".stop();\n";
};
Blockly.Arduino.grove_mini_driver_error = function() {
  var value_i2c_address = this.getFieldValue('I2CADDRESS');

  grove_mini_driver_genere_inc_def (value_i2c_address);
var code = '(Motor_' + value_i2c_address + '.getFault())';
  return [code, Blockly.Arduino.ORDER_ATOMIC];};
