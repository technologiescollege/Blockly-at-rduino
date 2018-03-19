/**
 * Visual Blocks for RFID
 *
 * Copyright 2017 Guillaume Reich.
 * http://greich.fr
 *
 * This work is licensed under a Creative Commons Attribution 4.0 International.
 * You may obtain a copy of the License at
 *
 *   https://creativecommons.org/licenses/by/4.0/
 *
 */

 'use strict';

goog.provide('Blockly.Arduino.RFID');

goog.require('Blockly.Arduino');

Blockly.Arduino.RFID_module = function() {
  var value_sda = Blockly.Arduino.valueToCode(this, 'SDA', Blockly.Arduino.ORDER_ATOMIC);
  var value_sck = Blockly.Arduino.valueToCode(this, 'SCK', Blockly.Arduino.ORDER_ATOMIC);
  var value_mosi = Blockly.Arduino.valueToCode(this, 'MOSI', Blockly.Arduino.ORDER_ATOMIC);
  var value_miso = Blockly.Arduino.valueToCode(this, 'MISO', Blockly.Arduino.ORDER_ATOMIC);
  var value_rst = Blockly.Arduino.valueToCode(this, 'RST', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_RFID_module'] = 
  '#include <SPI.h>\n' +
  '#include <RFID.h>';
  Blockly.Arduino.definitions_['definition_RFID_module'] =
  'RFID MFRC522_RFID(' + value_sda + ',' + value_rst + ');\n' +
  'int UID[5];\n';

  Blockly.Arduino.setups_['setup_RFID_module'] = 
  'SPI.begin();\n' +
  'MFRC522_RFID.init();\n';

  var code = '';
  return code;
};

Blockly.Arduino.RFID_detection = function() {
  var code = 'MFRC522_RFID.isCard()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_reception_cle = function() {
  var code = 'MFRC522_RFID.readCardSerial()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_lecture_cle = function() {
  var code = 'for(int i=0;i<=4;i++)\n' +
  '{\n' +
  '	UID[i]=MFRC522_RFID.serNum[i];\n' +
  '}\n';
  return code;
};

Blockly.Arduino.RFID_fermeture = function() {
  var code = 'MFRC522_RFID.halt();';
  return code;
};

Blockly.Arduino.RFID_valeur_cle = function() {
  // déclaration d'une nouvelle fonction
  Blockly.Arduino.definitions_['define_valeur_cle'] = 'String valeur_cle() {\n' +
  '  String str;\n' +
  '  for(int i=0;i<=4;i++) {\n' +
  '    str = String(str+UID[i])+\'.\';\n' +
  '  }\n' +
  '  return str;\n' +
  '}';
  var code = 'valeur_cle()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_code_acces = function() {
  var id = this.getFieldValue('TAG_NAME');
  var value_val1 = Blockly.Arduino.valueToCode(this, 'VAL1', Blockly.Arduino.ORDER_ATOMIC);
  var value_val2 = Blockly.Arduino.valueToCode(this, 'VAL2', Blockly.Arduino.ORDER_ATOMIC);
  var value_val3 = Blockly.Arduino.valueToCode(this, 'VAL3', Blockly.Arduino.ORDER_ATOMIC);
  var value_val4 = Blockly.Arduino.valueToCode(this, 'VAL4', Blockly.Arduino.ORDER_ATOMIC);
  var value_val5 = Blockly.Arduino.valueToCode(this, 'VAL5', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['definition_RFID_code_' + id] =
  'int MASTERKEY_' + id + '[5]={' + value_val1 + ',' + value_val2 + ',' + value_val3 + ',' + value_val4 + ',' + value_val5 + '}; // UID du badge ou de la carte acceptée sous forme de tableau (Array).';
  var code = '';
  return code;
};

Blockly.Arduino.RFID_acces_autorise = function() {
  var id = this.getFieldValue('TAG_NAME');
  var code = '(UID[0] == MASTERKEY_' + id + '[0] && UID[1] == MASTERKEY_' + id + '[1] && UID[2] == MASTERKEY_' + id + '[2] && UID[3] == MASTERKEY_' + id + '[3] && UID[4] == MASTERKEY_' + id + '[4])';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};