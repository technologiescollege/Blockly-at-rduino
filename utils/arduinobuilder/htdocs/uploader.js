var con = document.getElementById("con");
var uploading = 0;
var errcount = 0;
var fileext = "";
var xslPorts = loadXML("ports.xsl");
var serialPort;
var arduinoISP = false;

var TAB_INFO = 0;
var TAB_CODE = 1;
var TAB_CONSOLE = 2;
var TAB_REPORT = 3;
var TOOL_PORTS = 0;
var TOOL_LINKS = 1;

var TASK_IDLE = 0;
var TASK_COMPILING = 1;
var TASK_UPLOADING = 2;

if (filepath) {
	fileext = filepath.substr(filepath.lastIndexOf(".") + 1);
	hideCtrl("clock_opt");
	hideCtrl("btn_load");
	if (fileext == "elf" || fileext == "hex" || fileext == "HEX") {
		hideCtrl("buildonly");
		hideCtrl("btn_code");
	}
}
if (boardIndex >= 0) {
	document.getElementById("board").value = boardIndex;
	document.getElementById("board").disabled = true;
}

ListSerialPorts();

if (mcuMem) {
	ShowReport(mcuMem);
	enableCtrl("btn_report");
}

function onLoad()
{
}

function ListSerialPorts()
{
	transformXML(loadXML("/serial"), xslPorts, "ports");
}

function ShowFileName()
{
	var i = filepath.lastIndexOf("/");
	if (i < 0) i = filepath.lastIndexOf("\\")
	document.getElementById("btn_load").value = filepath.substr(i + 1);
}

function ChooseFile()
{
	var path = httpGet('/choosefile');
	if (path) {
		filepath = path;
		LoadCode(filepath);
		return path;
	}
	return null;
}

function NewFile()
{
	SwitchTab(TAB_CODE);	
}

var conbuf;

function UpdateConsole()
{
	xmlhttp.open("GET", "/console", false);
	xmlhttp.send();
	if (xmlhttp.status != 200) {
		document.getElementById("state").innerHTML = strUnexpectError;
		uploading = 0;
	}

	var xml = xmlhttp.responseXML;
	var state = getNodeValue(xml, "state");
	var retval = getNodeValue(xml, "retcode");
	if (state != "0" || retval == null) {
		// working
		var progress = getNodeValue(xml, "progress");
		var console = getNodeValue(xml, "console");
		if (console) {
			con.value += console;
			con.scrollTop = con.scrollHeight;
		}
		if (state == "1")
			document.getElementById("state").innerHTML = strBuildInProgress + " (" + progress + "%)";
		else {
			if (progress && progress != "0")
				document.getElementById("state").innerHTML = strUploadInProgress + " (" + progress + "%)";
			else
				document.getElementById("state").innerHTML = strUploadPrepare;
		}
	} else {
		if (uploading == TASK_UPLOADING) {
			if (retval == "0") {
				// success
				setContent("state", strUploadSuccess + " (" + strElapsed + ": " + getNodeValue(xml, "elapsed") + "s)");
			} else {
				// error
				setContent("state", strUploadFail + " (" + strErrCode + ": " + retval + ")");
			}
		} else {
			if (retval == "0") {
				// success
				setContent("state", strBuildSuccess + " (" + strElapsed + ": " + getNodeValue(xml, "elapsed") + "s)");
			} else {
				// error
				setContent("state", strBuildFail + " (" + strErrCode + ": " + retval + ")");
			}
		}
		uploading = 0;
		if (retval == "0") {
			if (!mcuMem) {
				ShowReport(getNodeValue(xml, "size"));
				enableCtrl("btn_report");
			}
		}
		return;
	}
	self.setTimeout(UpdateConsole, 50);
}

function Start(port)
{
	var ret;

	if (serialOpen) {
		ToggleSerial();	
	}
	if (port && document.getElementById("baudrate").value != "") {
		serialPort = port;
		ToggleSerial();
		return;	
	}


	if (!filepath) {
		if (!ChooseFile()) {
			return;
		}
	}

	conbuf = "";
	con.value = "";
	enableCtrl("btn_log");

	var url = "/proceed?board=" + document.getElementById("board").value + "&freq=" + document.getElementById("freq").value;
	if (port) {
		url += "&serial=" + port;
		if (arduinoISP) url += "&isp=19200";
		serialPort = port;
	}
	if (document.getElementById("favor").checked) {
		url += "&favor=1";
	}

	SwitchTab(TAB_CONSOLE);
	errcount = 0;
	ret = httpGet(url);
	if (ret.substr(0, 5) == "ERROR") {
		document.getElementById("state").innerHTML = ret;
	} else {
		uploading = port ? TASK_UPLOADING : TASK_COMPILING;
		document.getElementById("state").innerHTML = strStarting + "...";
		self.setTimeout(UpdateConsole, 200);
	}
}

function SwitchToolbar(index)
{
	switch (index) {
	case 0:
		showCtrl("port_div");
		hideCtrl("tab_div");
		break;
	case 1:
		showCtrl("tab_div");
		hideCtrl("port_div");
		break;
	}	
}

function SwitchTab(index)
{
	hideCtrl("tab0");
	hideCtrl("tab1");
	hideCtrl("tab2");
	hideCtrl("tab3");
	showCtrl("tab" + index);
}

function ShowReport(data)
{
	document.getElementById("report").src = "report_" + lang + ".html?board=" + boardIndex + "&data=" + data;
	SwitchTab(TAB_REPORT);
}

function LoadCode(path)
{
	var code = httpGet("/loadfile");
	if (code) {
		SwitchTab(TAB_CODE);
		editor.setValue(code);
		ShowFileName();
		enableCtrl("btn_code");
	} else {
		SwitchTab(TAB_INFO);
		disableCtrl("btn_code");
	}
}
