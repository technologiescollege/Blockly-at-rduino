'use strict';

goog.provide('Blockly.Arduino.EsusBoard');

goog.require('Blockly.Arduino');

Blockly.Arduino['EsusBoard_init'] = function() {
  Blockly.Arduino.includes_['define_esus'] = '#include <esusBoard.h>';
  Blockly.Arduino.setups_['esus_init'] = 'initEsusBoard();';
  return "";
};

Blockly.Arduino['EsusBoard_motor1'] = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'NEW_LINE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motors1_set(' + dropdown_speed + ', ' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino['EsusBoard_motor2'] = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'NEW_LINE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motors2_set(' + dropdown_speed + ', ' + dropdown_stat + ');\n';
  return code;
};

Blockly.Arduino['EsusBoard_analog'] = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'MCP3008_read(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['EsusBoard_WifiConfig'] = function() {
  Blockly.Arduino.includes_['define_espwifi'] = '#include <ESP8266WiFi.h>';
  var value_ssid = Blockly.Arduino.valueToCode(this, 'Text_ssid', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value_password = Blockly.Arduino.valueToCode(this, 'Text_password', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'WiFi.begin(' + value_ssid + ', ' + value_password + ');\n';
  Blockly.Arduino.setups_['wifi'] = code;
  Blockly.Arduino.setups_['server_begin'] = "initServerWifi();";
  return '\n';
};

Blockly.Arduino['EsusBoard_WifiConfigIP'] = function() {
  var adr1 = Blockly.Arduino.valueToCode(this, 'Text_ip1', Blockly.Arduino.ORDER_ATOMIC);
  var adr2 = Blockly.Arduino.valueToCode(this, 'Text_ip2', Blockly.Arduino.ORDER_ATOMIC);
  var adr3 = Blockly.Arduino.valueToCode(this, 'Text_ip3', Blockly.Arduino.ORDER_ATOMIC);
  var adr4 = Blockly.Arduino.valueToCode(this, 'Text_ip4', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['esus_WifiConfigIP'] = 'WiFi.config(ip, gateway, subnet);\n';
  Blockly.Arduino.definitions_['define_ip'] = 'IPAddress ip('+ adr1 +', '+ adr2 +', '+ adr3 +', '+ adr4 +');';
  Blockly.Arduino.definitions_['define_gateway'] = 'IPAddress gateway('+ adr1 +','+ adr2 +','+ adr3 +',1);';
  Blockly.Arduino.definitions_['define_subnet'] = 'IPAddress subnet(255,255,255,0);';
  return "";
};


Blockly.Arduino['EsusBoard_ReadStream'] = function() {
  var code = "readStringClientWifi()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['EsusBoard_dataWifiAvailable'] = function() {
  var code = "dataWifiAvailable()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['EsusBoard_WifiContain'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = '';
  if (varName == '') {
    code = '""';
  } else {
    code = 'Extract_StringWifi(' + varName + ')';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['EsusBoard_WifiConfigAP'] = function() {
  var adr1 = Blockly.Arduino.valueToCode(this, 'Text_ip1AP', Blockly.Arduino.ORDER_ATOMIC);
  var adr2 = Blockly.Arduino.valueToCode(this, 'Text_ip2AP', Blockly.Arduino.ORDER_ATOMIC);
  var adr3 = Blockly.Arduino.valueToCode(this, 'Text_ip3AP', Blockly.Arduino.ORDER_ATOMIC);
  var adr4 = Blockly.Arduino.valueToCode(this, 'Text_ip4AP', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_ip'] = 'IPAddress ip('+ adr1 +', '+ adr2 +', '+ adr3 +', '+ adr4 +');';
  Blockly.Arduino.definitions_['define_gateway'] = 'IPAddress gateway('+ adr1 +','+ adr2 +','+ adr3 +',1);';
  Blockly.Arduino.definitions_['define_subnet'] = 'IPAddress subnet(255,255,255,0);';
  Blockly.Arduino.includes_['define_wifiAP'] = '#include <ESP8266WiFi.h>';
  var value_ssid = Blockly.Arduino.valueToCode(this, 'Text_ssid', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value_password = Blockly.Arduino.valueToCode(this, 'Text_password', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'WiFi.softAP(' + value_ssid + ', ' + value_password + ');\n';
  Blockly.Arduino.setups_['wifi_MODE_AP'] = "WiFi.mode(WIFI_AP);";
  Blockly.Arduino.setups_['wifiAP_CONFIG'] = 'WiFi.softAPConfig(ip, gateway, subnet);\n';
  Blockly.Arduino.setups_['wifiAP'] = code;
  Blockly.Arduino.setups_['server_begin'] = "initServerWifi();";
  return '\n';
};

Blockly.Arduino['EsusBoard_SendStream'] = function() {
  var data = Blockly.Arduino.valueToCode(this, 'Text_send', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sendStringClientWifi('+ data + ');\n';
  return code;
};

Blockly.Arduino['EsusBoard_SendFloatStream'] = function() {
  var data = Blockly.Arduino.valueToCode(this, 'sendFloat', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sendFloatClientWifi('+ data + ');\n';
  return code;
};