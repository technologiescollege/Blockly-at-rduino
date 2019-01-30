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
 * @fileoverview Helper functions for generating peguino blocks.
 */

'use strict';
 
goog.provide('Blockly.Arduino.peguino_sensors');

goog.require('Blockly.Arduino');

Blockly.Arduino.peguino_sensors_pir_motion_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_button = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_button_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

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
  var pin = this.getFieldValue('PIN');
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

Blockly.Arduino.peguino_sensors_ldr = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_rotary_angle = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin.substring(1,2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.peguino_sensors_ultrasonic_ranger = function() {
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