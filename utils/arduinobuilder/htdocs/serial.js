var serialOpen = false;

function ToggleSerial()
{
	var btn = document.getElementById("btn_terminal");
	var baudrate = document.getElementById("baudrate").value;
	if (baudrate == "") {
		alert("No baudrate specified");
		return;
	}
	
	if (!serialPort || serialPort == "USBASP") {
		alert("Click on a serial port to open terminal.");
		return;	
	}
	SwitchTab(TAB_CONSOLE);
	if (serialOpen) {
		CloseSerial();
		document.getElementById("baudrate").value = "";
		con.value += "Serial port closed";
		enableCtrl("baudrate");
		btn.value = "Open";
	} else {
		OpenSerial(serialPort, baudrate);
		disableCtrl("baudrate");
		btn.value = "Close";
	}
}

function OpenSerial(port, baudrate)
{
	xmlhttp.open("GET", "/serial/open?port=" + port + "&baudrate=" + baudrate, false);
	xmlhttp.send();
	if (xmlhttp.status != 200) {
		alert(xmlhttp.responseText);
		return false;
	} else {
		self.setTimeout(UpdateSerial, 100);
		con.value = "Serial port " + port + " opened at baudrate of " + baudrate + "bps\r\n";
		serialOpen = true;
		return true;
	}
}

function CloseSerial()
{
	serialOpen = false;
	xmlhttp.open("GET", "/serial/close", false);
	xmlhttp.send();
}

function UpdateSerial()
{
	if (!serialOpen) return;
	xmlhttp.open("GET", "/serial/read?timeout=100", false);
	xmlhttp.send();
	if (xmlhttp.status == 200) {
		if (xmlhttp.responseText.length > 0) {
			con.value += xmlhttp.responseText;
			con.scrollTop = con.scrollHeight;
		}
		self.setTimeout(UpdateSerial, 100);
	} else if (xmlhttp.status == 503) {
		// timeout
		self.setTimeout(UpdateSerial, 100);
	}
}