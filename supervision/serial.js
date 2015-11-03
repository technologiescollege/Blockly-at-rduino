/*************************************************************************
* MiniWeb Serial-to-HTTP gateway API
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/

var httpserial = CreateHttpRequest();

function CreateHttpRequest()
{
	var _xmlhttp;
	if (window.XMLHttpRequest) {
		// code for all new browsers
		_xmlhttp=new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// code for IE6
		_xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	} else {
		alert("Your browser does not support XMLHTTP.");
	}
	return _xmlhttp;
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16).toUpperCase();
    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex;
}

function GET(url)
{
	httpserial.open("GET", url, false);
	httpserial.send();
	return httpserial.responseText;
}

function POST(url, payload)
{
	httpserial.open("POST", url, false);
	httpserial.send(payload);
	return httpserial.responseText;
}

function GetStatusCode()
{
	return httpserial.status;	
}

function SerialOpen(port, baudrate)
{
	var url = "/serial/open?port=" + port;
	if (baudrate) url += "&baudrate=" + baudrate;
	GET(url);
	return GetStatusCode() == 200;
}

function SerialClose()
{
	GET("/serial/close");
}

function SerialSetLine(dtr)
{
	GET("/serial/setline?DTR=" + (dtr ? "1" : "0"));
}

function SerialWrite(data, response, timeout)
{
	var url = "/serial/write?delay=10";
	if (timeout) url += "&timeout=" + timeout;
	if (response) url += "&response=" + response;
	var ret = POST(url, data);
	return GetStatusCode() == 200 ? parseInt(ret) : null;
}

function SerialWriteEcho(data, timeout)
{
	var url = "/serial/write?echo=1";
	if (timeout) url += "&timeout=" + timeout;
	var ret = POST(url, data);
	return GetStatusCode() == 200 ? parseInt(ret) : null;
}

function SerialRead(bytes, timeout)
{
	var url = "/serial/read?";
	if (bytes) url += "&bytes=" + bytes;
	if (timeout) url += "&timeout=" + timeout;
	var data = GET(url);
	return GetStatusCode() == 200 ? data : null
}

function SerialReadEOS(endString, timeout)
{
	var data = GET("/serial/read?timeout=" + timeout + "&eos=" + endString);
	return GetStatusCode() == 200 ? data : null
}

function SerialGetPortsXML()
{
	return loadXML("/serial");	
}