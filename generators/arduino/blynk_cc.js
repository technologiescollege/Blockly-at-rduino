/**
 * Block for Blynk.cc Library https://www.blynk.cc/
 *
 * Shield Arduino Uno et Arduino UNO WIFI (firmaware 1.0.0 mini de chez Arduino.org)
 *
 * Emmanuel Leroy (tech.rostand@gmail.com) - 2017
 */
'use strict';

goog.provide('Blockly.Arduino.blynk_cc');

goog.require('Blockly.Arduino');

Blockly.Arduino.blynk_cc_uno_cnx_usb = function() {
  var TOKEN = this.getFieldValue('TOKEN');
  
//dans include définition  
  Blockly.Arduino.variables_['Blynk_Print'] = '#define BLYNK_PRINT BlynkSerial';
  Blockly.Arduino.includes_['SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['var_SoftwareSerial'] = 'SoftwareSerial BlynkSerial(10,11);';
  Blockly.Arduino.includes_['BlynkSimpleStream'] = '#include <BlynkSimpleStream.h>';
  Blockly.Arduino.definitions_['define_var_auth'+ TOKEN] = 'char auth[] = "'+TOKEN+'";';
  
 //dans setup    
  Blockly.Arduino.setups_['setup_BlynkSerial'] = 'BlynkSerial.begin(9600);';   
  Blockly.Arduino.setups_['setup_Serial_begin'] = 'Serial.begin(9600);'; 
  Blockly.Arduino.setups_['setup_Blynk_begin'] = 'Blynk.begin(Serial, auth);'; 
 
  var code = 'Blynk.run();\n';
  return code;
};

