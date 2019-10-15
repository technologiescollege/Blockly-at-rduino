/*
Peguino Sensors 2019
more at www.peguino.com

*/

// Peguino Nano Board default wiring:
// Port C1 = Pin 23 = D5; C2 = Pin 20 = D2; C3 = Pin 6 = A2; D1 = Pin 10 = A6; D2 = Pin 7 = A3; D3 = Pin 24 = D6;

'use strict';
 
goog.provide('Blockly.Arduino.peguino_sensors');

goog.require('Blockly.Arduino');

Blockly.Arduino.peguino_sensors_pir_motion_sensor = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_Bodysensor_UNIT);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// --------------- Penguino Button Brick --------------------

// .appendField(new Blockly.FieldDropdown(Blockly.Msg.Peguino_ButtonBrick_UNIT_CHOICE), Blockly.Msg.Peguino_ButtonBrick_UNIT);
Blockly.Arduino.peguino_sensors_button = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_ButtonBrick_UNIT);
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.peguino_sensors_button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

*/


Blockly.Arduino.peguino_sensors_dht_read_UnoESP32 = function() {
  var pin = this.getFieldValue('PIN');
  var type = this.getFieldValue('TYPE');
  Blockly.Arduino.includes_['include_DHTesp_'+ pin] = '#include <DHTesp.h>'
  Blockly.Arduino.definitions_['define_DHTesp_'+ pin] = 'DHTesp DHTesp_' + pin + ';';
  Blockly.Arduino.setups_['setup_DHTesp_' + pin] = 'DHTesp_' + pin + '.setup(' + pin + ', DHTesp::DHT22);'
  
  var code = '';
  switch(type){
      case 'h':
        code += 'DHTesp_' + pin + '.getHumidity()';
      break;
      case 'C':
        code += 'DHTesp_' + pin + '.getTemperature()';
      break;
  }
	  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_dht_read_UnoNano = function() {
  var pin = this.getFieldValue(Blockly.Msg.Peguino_ClimateBrick_PLUG);
  var type = this.getFieldValue('TYPE');
  Blockly.Arduino.includes_['include_SimpleDHT22_'+ pin] = '#include <SimpleDHT.h>'
  Blockly.Arduino.definitions_['define_dSimpleDHT22_'+ pin] = 'SimpleDHT22 DHT22_' + pin + '(' + pin + ', DHT22);'
  Blockly.Arduino.codeFunctions_['function_SimpleDHT22_'+ pin] = 'void DHTmeasure(char CHOICE) {\n' +
  '  float temperature = 0;\n' +
  '  float humidity = 0;\n' +
  '  DHT22_' + pin + '.read2(&temperature, &humidity, data);\n' +
  '  if (CHOICE == h) return humidity;\n' +
  '    else return temperature;\n'+
  '  }';
  var code = 'DHTmeasure(' + type + ')';	  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
Blockly.Arduino.peguino_sensors_EMETTEUR_IR = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output'+value_pin] = 'pinMode('+value_pin+', OUTPUT);';
  var code = 'tone('+value_pin+','+value_num+');\n';
  return code;
};

Blockly.Arduino.peguino_sensors_RECEPTEUR_IR = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

*/


Blockly.Arduino.peguino_sensors_ldr = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_Lightsensor_UNIT);
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_rotary_angle = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_PotiBrick_UNIT);
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_microprox = function() {
  var dropdown_pin = this.getFieldValue(Blockly.Msg.Peguino_Microprox_UNIT);
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  /* var dropdown_pin = this.getFieldValue('PIN'); 
Blockly.Arduino.peguino_sensors_ultrasonic_ranger = function() {
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
}; */

// Uno Nano trigPin = D15; echoPin = D14; 
// Uno ESP32 trigPin = GPIO2; echoPin = GPIO15; 

Blockly.Arduino.peguino_sensors_ultrasonic_ranger = function() {
  Blockly.Arduino.definitions_['define_PB_mesure_distance_cm'] = "int read_ProximityBrick()\n"+
    "{\n"+
    "  digitalWrite(D15, HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(D15, LOW);\n"+
    "  int value = (pulseIn(D14,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}";
  Blockly.Arduino.setups_['setup_sonar_PB_'] = 'pinMode(D15,OUTPUT); // Sonar trigger pulse\n'+
  '  pinMode(D14,INPUT); // Sonar distance echo';
  var code = 'read_ProximityBrick()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};