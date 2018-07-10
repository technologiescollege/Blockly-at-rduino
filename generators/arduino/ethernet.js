/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.ethernet');

goog.require('Blockly.Arduino');

Blockly.Arduino.ethernet_begin_dhcp_client = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");

  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac);';
  var code = '';
  return code;
};

Blockly.Arduino.ethernet_begin_dhcp_server = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var port = this.getFieldValue('PORT'); 

  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_server'] = 'EthernetServer server('+port+');';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};\n';
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac);';
  Blockly.Arduino.setups_['serveur_start'] = 'server.begin();';
  
  var code = '';    // pas terrible mais je ne sais pas faire autrement
  return code;
};

Blockly.Arduino.ethernet_client_for_server = function() {

  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;'; // en cas d'utilisation de procedure
  
  var code = 'EthernetClient client = server.available()';   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_mac_address = function () {
  var mac1 = this.getFieldValue('MAC_ADDRESS_1');
  var mac2 = this.getFieldValue('MAC_ADDRESS_2');
  var mac3 = this.getFieldValue('MAC_ADDRESS_3');
  var mac4 = this.getFieldValue('MAC_ADDRESS_4');
  var mac5 = this.getFieldValue('MAC_ADDRESS_5');
  var mac6 = this.getFieldValue('MAC_ADDRESS_6');

  var code = '0x' + mac1 + ', 0x' + mac2 + ', 0x' + mac3 + ', 0x' + mac4 + ', 0x' + mac5 + ', 0x' + mac6;

  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

// Blockly.Arduino.ethernet_client_begin = function() {
  // var version = this.getFieldValue('VERSION');
  // var mac_address = this.getFieldValue('MAC_ADDRESS');
  // var ip_address = this.getFieldValue('IP_ADDRESS');
  // ip_address = ip_address.replace(/\./g, ",");

  // Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
  // Blockly.Arduino.definitions_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  // Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  // Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';
  // Blockly.Arduino.definitions_['define_ip_address'] = 'IPAddress ip(' + ip_address + ');';

  // var code = 'Ethernet.begin(mac,ip);\n';
  // return code;
// };

Blockly.Arduino.ethernet_localip = function() {
  var code = 'Ethernet.localIP()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_available = function() {
  var code = 'client.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_connected = function() {
  var code = 'client.connected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_connect = function() {
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var port = this.getFieldValue('PORT');

  var code = 'client.connect(' + server + ',' + port +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_print = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'client.print(' + text + ');\n';
  return code;
};

Blockly.Arduino.ethernet_println = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || ''

  var code = 'client.println(' + text +');\n';
  return code;
};

Blockly.Arduino.ethernet_stop = function() {
  var code = 'client.stop();\n';
  return code;
};

Blockly.Arduino.ethernet_read = function() {
  var code = '(char)client.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_get_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");

  var code = 'client.println("GET ' + url + ' HTTP/1.1");\n';
  code += 'client.println(F("Host: ' + server + '"));\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println();\n';

  return code;
};

Blockly.Arduino.ethernet_post_request = function() {
  var url = Blockly.Arduino.valueToCode(this, 'URL', Blockly.Arduino.ORDER_ATOMIC) || ''
  var server = Blockly.Arduino.valueToCode(this, 'SERVER', Blockly.Arduino.ORDER_ATOMIC) || ''
  var post_data = Blockly.Arduino.valueToCode(this, 'POST_DATA', Blockly.Arduino.ORDER_ATOMIC) || ''
  url = url.replace(/\"/g, "");
  server = server.replace(/\"/g, "");

  var code = 'client.println("POST ' + url + ' HTTP/1.1");\n';
  code += 'client.print(F("Host: ' + server + ');\n';
  code += 'client.println(F("Connection: close"));\n';
  code += 'client.println(F("Content-Type: application/x-www-form-urlencoded"));\n';
  code += 'client.println(F("Content-Length: ' + post_data.length-2 + '"));\n';
  code += 'client.print(' + post_data +');\n';

  return code;
};

Blockly.Arduino.ethernet_HTML_send = function() {
  var page_html = Blockly.Arduino.valueToCode(this, 'html', Blockly.Arduino.ORDER_ATOMIC);
  
  page_html = page_html.replace(/\"/g, "\\\"");
  
  var code ='client.println("'+page_html+'");\n';
  code +='delay(1);\n';
  return code;
};

Blockly.Arduino.ethernet_HEADER_send = function() {
  var error = this.getFieldValue('error');	
  var datatype = this.getFieldValue('datatype');	
  if (error == "200")
    {
	  var code = 'client.println("HTTP/1.1 200 OK");\n';
	}
  if (error == "204")
    {
	  var code = 'client.println("HTTP/1.1 204 No Content");\n';
	}
  if (error == "404")
    {
	  var code = 'client.println("HTTP/1.1 404 Not Found");\n';
	}  
  if (datatype =="text")
	{		
		code +='client.println("Content-Type: text/html");\n';
		code +='client.println("");\n';  
	}
  if (datatype =="png")
	{
		code +='client.println("Content-Type: image/png");\n';
		code +='client.println("");\n';  
	}
  return code;
};

Blockly.Arduino.ethernet_HTML_send_page = function() {
	
  var numpage = this.getFieldValue('partie');	
  
  var code ='Sitehtml'+numpage+'(client);  // attention include \n';		
  code +='delay(1);\n';
  return code;
};


//**** STATIC ****

Blockly.Arduino.ethernet_begin_staticIP_server = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var port = this.getFieldValue('PORT'); 
  var ip = this.getFieldValue('IP'); 
  var dns = this.getFieldValue('DNS'); 
  var gateway = this.getFieldValue('GATEWAY'); 
  var subnet = this.getFieldValue('SUBNET'); 
  
  
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_server'] = 'EthernetServer server('+port+');';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};';
  Blockly.Arduino.definitions_['define_arduino_ip'] = 'IPAddress ip(' + ip + ');';
  Blockly.Arduino.definitions_['define_arduino_dns'] = 'IPAddress DNS(' + dns + ');';
  Blockly.Arduino.definitions_['define_arduino_gateway'] = 'IPAddress gateway(' + gateway + ');';
  Blockly.Arduino.definitions_['define_arduino_subnet'] = 'IPAddress subnet(' + subnet + ');';  
  
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac,ip,DNS,gateway,subnet);';
  Blockly.Arduino.setups_['serveur_start'] = 'server.begin();';
  
  var code = '';  
  return code;
};

Blockly.Arduino.ethernet_begin_staticIP_client = function() {
  var version = this.getFieldValue('VERSION');
  var mac = Blockly.Arduino.valueToCode(this, 'MAC_ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED'
  mac = mac.replace(/"/g, "");
  var ip = this.getFieldValue('IP'); 
  var dns = this.getFieldValue('DNS'); 
  var gateway = this.getFieldValue('GATEWAY'); 
  var subnet = this.getFieldValue('SUBNET'); 
  
  
  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  if (version == "PROTEUS")
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <UIPEthernet.h>';}
  else
  {Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';}  
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_arduino_mac'] = 'byte mac[] = {' + mac + '};';
  Blockly.Arduino.definitions_['define_arduino_ip'] = 'IPAddress ip(' + ip + ');';
  Blockly.Arduino.definitions_['define_arduino_dns'] = 'IPAddress DNS(' + dns + ');';
  Blockly.Arduino.definitions_['define_arduino_gateway'] = 'IPAddress gateway(' + gateway + ');';
  Blockly.Arduino.definitions_['define_arduino_subnet'] = 'IPAddress subnet(' + subnet + ');';  
  
  Blockly.Arduino.setups_['begin'] = 'Ethernet.begin(mac,ip,DNS,gateway,subnet);';
  
  var code = '';  
  return code;
};


/* Blockly.Arduino.ethernet_client_begin = function() {
  var version = this.getFieldValue('VERSION');
  var mac_address = this.getFieldValue('MAC_ADDRESS');
  var ip_address = this.getFieldValue('IP_ADDRESS');
  ip_address = ip_address.replace(/\./g, ",");

  Blockly.Arduino.includes_['define_spi'] = '#include <SPI.h>';
  Blockly.Arduino.includes_['define_ethernet'] = '#include <Ethernet' + version + '.h>';
  Blockly.Arduino.definitions_['define_ethernet_client'] = 'EthernetClient client;';
  Blockly.Arduino.definitions_['define_mac_address'] = 'byte mac[] = {' + mac_address + '};';
  Blockly.Arduino.definitions_['define_ip_address'] = 'IPAddress ip(' + ip_address + ');';

  var code = 'Ethernet.begin(mac,ip);\n';
  return code;
}; */

// **** PARSER ****
Blockly.Arduino.ethernet_PARSER_init = function() {
	
  Blockly.Arduino.includes_['define_request'] = '#include <HttpRequest.h> \n';    
  Blockly.Arduino.definitions_['create_request_object'] = 'HttpRequest httpReq; \n';
  Blockly.Arduino.definitions_['variables_globales'] = 'char name[HTTP_REQ_PARAM_NAME_LENGTH], value[HTTP_REQ_PARAM_VALUE_LENGTH]; \n';
  
  var code ='char name[HTTP_REQ_PARAM_NAME_LENGTH], value[HTTP_REQ_PARAM_VALUE_LENGTH]; \n';
  return code;
};

Blockly.Arduino.ethernet_PARSER_parse = function() {
	
  var cara = Blockly.Arduino.valueToCode(this, 'input', Blockly.Arduino.ORDER_ATOMIC) || ''
  
  var code ='httpReq.parseRequest('+cara+'); \n';
  return code;
};

Blockly.Arduino.ethernet_PARSER_end = function() {
	
  var code ='httpReq.endOfRequest()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_count = function() {
	
  var code ='httpReq.paramCount';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_getmyparam = function() {
	
  
  var myparam = Blockly.Arduino.valueToCode(this, 'myparam', Blockly.Arduino.ORDER_ATOMIC);	
  Blockly.Arduino.definitions_['myfonction1'] = 'char* myparam (String parametre) {parametre.toCharArray(name, 16);int pos = httpReq.getParam(name, value);if (pos > 0) {return (value);}else {return "variable non trouvé";}}';
  
  var code ='myparam('+myparam+')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSER_purge = function() {
  
  var code ='httpReq.resetRequest(); \n';
  return code;
};

// **** PARSERV2 ****
Blockly.Arduino.ethernet_ATTENTE_CLIENT = function() {
  var code ='EthernetClient client = server.available();\n';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_CREATION = function() {
	
  Blockly.Arduino.includes_['define_request'] = '#include <Parser.h>\n';    
  Blockly.Arduino.definitions_['create_request_object'] = 'Parser mon_parser;\n';
  Blockly.Arduino.definitions_['create_myreadstring']= 'char myreadstring[255];\n';
  
  var code ='';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_LECTURE = function() {
  var client = Blockly.Arduino.valueToCode(this, 'client', Blockly.Arduino.ORDER_ATOMIC);
  var code ='mon_parser.readStream(client,monparse.myreadstring);\n';
  return code;
};

Blockly.Arduino.ethernet_PARSERV2_PARSING = function() {
  var code = 'mon_parser.parsing(monparse.myreadstring)' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_GETNAME = function() {
  var nbNom = Blockly.Arduino.valueToCode(this, 'nbNom', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mon_parser.getName('+nbNom+')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_GETVALUE = function() {
  var nbVal = Blockly.Arduino.valueToCode(this, 'nbVal', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mon_parser.getValue('+nbVal+')' ;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_PARSERV2_FREE = function() {
  var code = 'free(mon_parser.myreadstring);\n' ;
  return code;
};
////// WIFI ////////////

Blockly.Arduino.ethernet_wifi_begin_server = function() {

  var port = this.getFieldValue('PORT'); 
  var ssid = this.getFieldValue('SSID'); 
  var pass = this.getFieldValue('PASS');   
  
  Blockly.Arduino.includes_['define_librarie'] = '#include "WiFiEsp.h"';
  Blockly.Arduino.definitions_['define_wifi_ssid'] = 'char ssid[] = "' + ssid + '";';
  Blockly.Arduino.definitions_['define_wifi_pass'] = 'char pass[] = "' + pass + '";';
  Blockly.Arduino.definitions_['define_status'] = 'int status = WL_IDLE_STATUS;';
  Blockly.Arduino.definitions_['define_ethernet_wifi_server'] = 'WiFiEspServer server('+port+');';
  
  Blockly.Arduino.setups_['init'] = 'WiFi.init(&esp8266);';
  Blockly.Arduino.setups_['connection'] = 'while(status!= WL_CONNECTED) {status = WiFi.begin(ssid,pass);}';
  Blockly.Arduino.setups_['server_start'] = 'server.begin();';  
  
  var code = '';  
  return code;
};

Blockly.Arduino.ethernet_client_for_wifi_server = function() {

  Blockly.Arduino.includes_['define_ethernet_client'] = 'WiFiEspClient client;'; // en cas d'utilisation de procédures
  
  var code = 'WiFiEspClient client = server.available()';   
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ethernet_wifi_localip = function() {
  var code = 'WiFi.localIP()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
