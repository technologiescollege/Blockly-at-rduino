/**
 * Visual Blocks for RFID
 *
 * Copyright 2017/2019 Guillaume Reich.
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
  '#include <MFRC522.h>';
  Blockly.Arduino.definitions_['definition_RFID_module'] =
  'MFRC522 rfid(' + value_sda + ',' + value_rst + ');\n';

  Blockly.Arduino.setups_['setup_RFID_module'] = 
  'SPI.begin();\n' +
  'rfid.PCD_Init();\n';

  var code = '';
  return code;
};

Blockly.Arduino.RFID_detection = function() {
  var code = 'rfid.PICC_IsNewCardPresent()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_reception_cle = function() {
  var code = 'rfid.PICC_ReadCardSerial()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_lecture_cle = function() {
  var code = 'String myKey=String(rfid.uid.uidByte[0],HEX) + " " + String(rfid.uid.uidByte[1],HEX) + " " + String(rfid.uid.uidByte[2],HEX) + " " + String(rfid.uid.uidByte[3],HEX);\n';
  return code;
};

Blockly.Arduino.RFID_fermeture = function() {
  var code = 'rfid.PICC_HaltA();\n' +
  'rfid.PCD_StopCrypto1();\n';
  return code;
};

Blockly.Arduino.RFID_valeur_cle = function() {
  var code = 'myKey';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.RFID_code_acces = function() {
  var id = this.getFieldValue('TAG_NAME');
  var value_val1 = Blockly.Arduino.valueToCode(this, 'VAL1', Blockly.Arduino.ORDER_ATOMIC);
  var value_val2 = Blockly.Arduino.valueToCode(this, 'VAL2', Blockly.Arduino.ORDER_ATOMIC);
  var value_val3 = Blockly.Arduino.valueToCode(this, 'VAL3', Blockly.Arduino.ORDER_ATOMIC);
  var value_val4 = Blockly.Arduino.valueToCode(this, 'VAL4', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['definition_RFID_code_' + id] =
  'String ' + id + '=String(' + value_val1 + ')+\" \"+String(' + value_val2 + ')+\" \"+String(' + value_val3 + ')+\" \"+String(' + value_val4 + '); // UID du badge ou de la carte acceptée.';
  var code = '';
  return code;
};

Blockly.Arduino.RFID_acces_autorise = function() {
  var id = this.getFieldValue('TAG_NAME');
  var code = id + ' == myKey';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};