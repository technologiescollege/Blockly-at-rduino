/*************************************************************************
* Common HTML and AJAX operations
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/

var isIE = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
var isMoz = document.implementation && document.implementation.createDocument;
var xmlhttp = newHttpRequest();

function newHttpRequest()
{
	var _xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for all new browsers
	  _xmlhttp=new XMLHttpRequest();
	  }
	else if (window.ActiveXObject)
	  {// code for IE5 and IE6
	  _xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	 else
	  {
	  alert("Your browser does not support XMLHTTP.");
	  }
	  return _xmlhttp;
}

function element(id)
{
	return document.getElementById(id);
}

function getValue(elementName)
{
	return document.getElementById(elementName).value;
}

function setValue(elementName, value)
{
	document.getElementById(elementName).value = value;
}

function getIntValue(elementName, radix)
{
	return 	parseInt(document.getElementById(elementName).value, radix);
}

function loadXML(xmlFile)
{
	var _xmlhttp = newHttpRequest();
	_xmlhttp.open('GET', xmlFile, false);
	//xmlhttp.overrideMimeType('text/xml');
	_xmlhttp.send(null);
	var xml = _xmlhttp.responseXML;
	if (!xml) {
		alert("Unable to load "+xmlFile);
		return null;
	}
	return xml;
}

function transformXML(xmlDoc, xslDoc, element)
{
	if (isIE) {
		var e = document.getElementById(element);
		if (e) {
			var content = xmlDoc.transformNode(xslDoc);
			e.innerHTML = content;
		}
	} else {
		var XSLT = new XSLTProcessor;
		XSLT.importStylesheet(xslDoc);
		var e = document.getElementById(element);
		if (e) {
			e.innerHTML = "";
			e.appendChild(XSLT.transformToFragment(xmlDoc, document));
		}
	}
}

function getTransformedXML(xmlDoc, xslDoc)
{
	if (isIE) {
		return xmlDoc.transformNode(xslDoc);
	} else {
		var XSLT = new XSLTProcessor;
		XSLT.importStylesheet(xslDoc);
		return XSLT.transformToFragment(xmlDoc, document);
	}
}

function GetUrlArg(name)
{
	var idx=document.location.href.indexOf(name+'=');
	if (idx<=0) return null;
	var argstr=document.location.href.substring(idx+name.length+1);
	idx = argstr.indexOf('&');
	return idx>=0?argstr.substring(0, idx):argstr;
}
