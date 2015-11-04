var isIE = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
var isMoz = document.implementation && document.implementation.createDocument;
var xmlhttp = newHttpRequest();
var baseurl = "/arduinobuilder/";

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

function loadXML(xmlFile)
{
	xmlhttp.open('GET', xmlFile, false);
	xmlhttp.send(null);
	return xmlhttp.responseXML;
}

function httpGet(url)
{
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	if (xmlhttp.status == 200)
		return xmlhttp.responseText;
	else
		return null;
}

function getNodeValue(xml, tagname)
{
	var tags = xml.getElementsByTagName(tagname);
	if (tags.length > 0)
		return tags[0].firstChild ? tags[0].firstChild.nodeValue : null;
	else
		return null;
}

function showCtrl(id)
{
	document.getElementById(id).style.display = "block";
}

function hideCtrl(id)
{
	document.getElementById(id).style.display = "none";
}

function enableCtrl(id)
{
	document.getElementById(id).disabled = false;
}

function disableCtrl(id)
{
	document.getElementById(id).disabled = true;
}

function setValue(id, value)
{
	document.getElementById(id).value = value;
}

function setContent(id, content)
{
	document.getElementById(id).innerHTML = content;
}