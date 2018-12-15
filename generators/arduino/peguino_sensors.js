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

Blockly.Arduino.peguino_sensors_dht_read = function() {
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