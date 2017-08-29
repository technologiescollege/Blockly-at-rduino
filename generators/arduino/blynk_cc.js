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
var auth = Blockly.Arduino.valueToCode(this, 'AUTH', Blockly.Arduino.ORDER_ATOMIC) || ''

//dans include définition  
  Blockly.Arduino.variables_['Blynk_Print'] = '#define BLYNK_PRINT BlynkSerial';
  Blockly.Arduino.includes_['SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.definitions_['var_SoftwareSerial'] = 'SoftwareSerial BlynkSerial(10,11);';
  Blockly.Arduino.includes_['BlynkSimpleStream'] = '#include <BlynkSimpleStream.h>';
  Blockly.Arduino.definitions_['define_var_auth'+ auth] = 'char auth[] = "'+auth+'";';
  
 //dans setup    
  Blockly.Arduino.setups_['setup_BlynkSerial'] = 'BlynkSerial.begin(9600);';   
  Blockly.Arduino.setups_['setup_Serial_begin'] = 'Serial.begin(9600);'; 
  Blockly.Arduino.setups_['setup_Blynk_begin'] = 'Blynk.begin(Serial, auth);'; 
 
  var code = 'Blynk.run();\n';
  return code;
};

Blockly.Arduino.blynk_cc_connect = function () {
  var code = 'Blynk.connect()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.blynk_cc_ethernet_begin = function () {
  var version = this.getFieldValue('VERSION');
  var auth = Blockly.Arduino.valueToCode(this, 'AUTH', Blockly.Arduino.ORDER_ATOMIC) || ''
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");

  Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet.h>';
  Blockly.Arduino.definitions_['define_blynk_simple_ethernet'] = '#define BLYNK_PRINT Serial\n' +
    '#include <BlynkSimpleEthernet.h>\n';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';

  Blockly.Arduino.setups_['setup_serial_' + profile.default.serial] = 'Serial.begin(' + profile.default.serial + ');\n';

  Blockly.Arduino.setups_['setup_blynk_begin'] = 'Blynk.begin(' + auth + ', BLYNK_DEFAULT_DOMAIN,BLYNK_DEFAULT_PORT,mac);\n'

  var code = 'Blynk.run();\n';
  return code;
};

Blockly.Arduino.blynk_cc_write = function () {
  var pin = this.getFieldValue('PIN');
  var statements_action = Blockly.Arduino.statementToCode(this, 'ACTION');

  Blockly.Arduino.definitions_['define_blynk_virtual_' + pin] = 'BLYNK_WRITE(V' + pin + ')\n' +
    '{\n' +
    statements_action +
    '}\n';

  return "";
};

Blockly.Arduino.blynk_cc_virtual_write = function () {
  var pin = this.getFieldValue('PIN');
  var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ATOMIC) || '0'

  var code = 'Blynk.virtualWrite(V' + pin + ', ' + value + ');\n';
  return code;
};

Blockly.Arduino.blynk_cc_email = function () {
  var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || ''
  var title = Blockly.Arduino.valueToCode(this, 'TITLE', Blockly.Arduino.ORDER_ATOMIC) || ''
  var body = Blockly.Arduino.valueToCode(this, 'BODY', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.email(' + address + ', ' + title + ', ' + body + ');\n';
  return code;
};

Blockly.Arduino.blynk_cc_notify = function () {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.notify(' + text + ');\n';
  return code;
};

Blockly.Arduino.blynk_cc_tweet = function () {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'Blynk.tweet(' + text + ');\n';
  return code;
};