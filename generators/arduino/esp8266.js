//thanks to JP Fontaine

"use strict";
goog.provide("Blockly.Arduino.esp8266");
goog.require("Blockly.Arduino");

Blockly.Arduino['esp8266_init']=function(block){
	var mode=block.getFieldValue("clientserveur");
	var adressage=block.getFieldValue("staticdynamic");
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("KEY");
	Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>";
	if (adressage=="static"){
		var ipabc=block.getFieldValue("IPa")+","+block.getFieldValue("IPb")+","+block.getFieldValue("IPc");
		var ipd=block.getFieldValue("IPd");
		var passerelle=block.getFieldValue("GATEWAY");
		var masque=block.getFieldValue("MASKa")+","+block.getFieldValue("MASKb")+","+block.getFieldValue("MASKc")+","+block.getFieldValue("MASKd");
		Blockly.Arduino.definitions_["esp8266"] = 'IPAddress ip('+ipabc+','+ipd+');\nIPAddress gateway('+ipabc+','+passerelle+');\nIPAddress subnet('+masque+');\n';
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.config(ip, gateway, subnet);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] = "";
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	}
	if (mode=="serveur"){
		var port=Blockly.Arduino.valueToCode(block, "V0", Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiServer server(' + port + ');\n';
		Blockly.Arduino.setups_["esp8266"] += '  server.begin();\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiClient client;\n';
	}
	return "" ;
};
Blockly.Arduino['esp8266_send']=function(block){
	var data=Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println(' + data + ');\nclient.println("</html>");\n';
	return code
};
Blockly.Arduino['esp8266_send_html']=function(block){
	var htmlhead=Blockly.Arduino.statementToCode(block, 'HEAD');
	var htmlbody=Blockly.Arduino.statementToCode(block, "BODY");
    var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html; charset=UTF-8");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println("<head>");\n' + htmlhead + 'client.println("</head>");\n';
	code += 'client.println("<body>");\n' + htmlbody + 'client.println("</body>");\nclient.println("</html>");\n';
	code += 'delay(1);\nclient.stop();\n' ;
	return code
};
Blockly.Arduino['esp8266_wait_server']=function(block){
	return 'WiFiClient client = server.available();\nif (!client) return;\nwhile (!client.available()) { delay(1); }\nchar request = client.read();\nclient.flush();\n'
};
Blockly.Arduino['esp8266_wait_client']=function(block){
	var host=Blockly.Arduino.valueToCode(block, "host", Blockly.Arduino.ORDER_ATOMIC);
	var port=Blockly.Arduino.valueToCode(block, "port", Blockly.Arduino.ORDER_ATOMIC);
	return 'if (!client.connect(' + host + ',' + port + ')) { delay(1000) ; return }.\nwhile (client.available()){ String reponse = client.read(); };\n'
};
Blockly.Arduino["esp8266_request_indexof"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
	var code='if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n';
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += 'if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n'
    }
	return code
};