compilerflasher = function(lf){

    this.boards_list = [];
	this.boardsListExists = false;
    this.programmers_list = [];
    this.selectedBoard = '';
    this.selectedProgrammer = '';
    this.load_files = lf;
    this.loaded_elements = [];
	this.enableShortCuts = false;

    this.minVersion = "1.6.0.8";

    var that = this;

    this.eventManager = new function(){
        this._listeners = {};

        this.addListener = function(type, listener){
            if (typeof this._listeners[type] == "undefined"){
                this._listeners[type] = [];
            }

            this._listeners[type].push(listener);
        };

        this.fire = function(event, param1, param2){

            if (typeof event == "string"){
                event = { type: event };
            }
            if (!event.target){
                event.target = this;
            }

            if (!event.type){
                throw new Error("Event object missing 'type' property.");
            }

            if (this._listeners[event.type] instanceof Array){
                var listeners = this._listeners[event.type];
                for (var i=0, len=listeners.length; i < len; i++){

                    if(typeof param1 !== 'undefined')
                    {

                        if(typeof param2 !== 'undefined')
                        {
                            listeners[i].call(this, param1, param2);
                        }
                        else
                        {
                            listeners[i].call(this, param1);
                        }
                    }
                    else
                    {
                        listeners[i].call(this);
                    }
                }
            }
        };

        this.removeListener =  function(type, listener){
            if (this._listeners[type] instanceof Array){
                var listeners = this._listeners[type];
                for (var i=0, len=listeners.length; i < len; i++){
                    if (listeners[i] === listener){
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        }
    };

    this.setOperationOutput = function(message) {
	    var $cbCfOperationOutput = $('#cb_cf_operation_output');
	    var $operationOutput = $('#operation_output');
	    $cbCfOperationOutput.html(message);
	    $operationOutput.html(message);

	    if (message.length > 0) {
		    $cbCfOperationOutput.removeClass('new-message').width();
		    $cbCfOperationOutput.addClass('new-message');

		    $operationOutput.removeClass('new-message').width();
		    $operationOutput.addClass('new-message');
	    }
    }

    this.on = function(type, listener){
        this.eventManager.addListener(type, listener);
    }

	var cb = this;
    this.pluginHandler = new function(){
	    this.owner = cb;

        this.serialMonitorPort = null;

        this.max_monitor_length = 5000;

        this.uuid4 = function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x7|0x8)).toString(16);
            });
            return uuid;
        }

        this.tabID = this.uuid4();

        this.currentPorts = [];

        this.doflashBootloader = function(programmer, board)
        {
	        document.getElementById('plugin0').flashBootloader(
                    (this.portslist.selectedIndex == -1 || programmer['communication'] != 'serial')?'':this.portslist.options[this.portslist.selectedIndex].text,
                    programmer['protocol'],
                    programmer['communication'],
                    programmer['speed'],
                    programmer['force'],
                    programmer['delay'],
                    board['bootloader']['high_fuses'],
                    board['bootloader']['low_fuses'],
                    (typeof board['bootloader']['extended_fuses'] === "undefined")?'':board['bootloader']['extended_fuses'],
                    (typeof board['bootloader']['unlock_bits'] === "undefined")?'':board['bootloader']['unlock_bits'],
                    (typeof board['bootloader']['lock_bits'] === "undefined")?'':board['bootloader']['lock_bits'],
                    board['build']['mcu'],
                    bootloader_callback
            );
        }

        this.clickedPort = function()
        {
            var port = $("#cb_cf_ports").val();
            var actionId = 43;
            var metaData = {
                "selectedPort": port,
                "tabID": this.tabID
            };
	        createLogFlasher(actionId, metaData);
        }

        this.oldPort = null;

        this.logPorts = function () {
            var oldPort;
            if (this.oldPort == null)
                oldPort = '';
            else
                oldPort = this.oldPort;

            var newPort;
            if (this.currentPorts.length > 0)
                newPort = $("#cb_cf_ports option:selected").text();
            else
                newPort = '';

            this.oldPort = newPort;

            if (oldPort != newPort) {
                var actionId = 38;
                var metaData = {
                    "oldPort": oldPort,
                    "newPort": newPort,
                    "tabID": this.tabID
                };
	            createLogFlasher(actionId, metaData);
            }
        };

        this.savePort = function() {
            var cb = this;
            if(typeof Lawnchair !== "undefined")
            {
                new Lawnchair(function () {
                    if(cb.currentPorts.length > 0) {
                        var port = $("#cb_cf_ports option:selected").text();
                        this.save({key:'port', name:port});
                    }
                });
            }
            cb.logPorts();
        }

        this.loadPort = function() {
            var cb = this;
            if (this.currentPorts.length > 0) {
                $('#cb_cf_ports').find('option[value=""]').remove();
                if(typeof Lawnchair !== "undefined") {
                    Lawnchair(function () {
                        this.exists('port', function (exists) {
                            if (exists) {
                                this.get('port', function (config) {
                                    var port_exists = $('#cb_cf_ports option[value="'+config.name+'"]').length;
                                    if (port_exists > 0) {
                                        $("#cb_cf_ports").val(config.name);
                                    }
                                    else {
                                        var port = $("#cb_cf_ports option:first").val();
                                        $("#cb_cf_ports").val(port);
                                    }
                                });
                            }
                            else {
                                var port = $("#cb_cf_ports option:first").val();
                                $("#cb_cf_ports").val(port);
                            }
                        });
                    });
                }
                else {
                    var port = $("#cb_cf_ports option:first").val();
                    $("#cb_cf_ports").val(port);
                }
            }
            else {
                $('#cb_cf_ports').append('<option value="">No ports detected</option>');
            }
        }

        this.initializePlugin = function()
        {
            var url = '';
            var location = ''
            if (typeof window.location.origin == 'undefined')
                location = window.location;
            else
                location = window.location.origin;
            if (location.indexOf("codebender.cc") != -1 && !window.osBrowserIsSupported() )
            {
                var actionId = 35;
                var metaData = {
                    "plugin" : false,
                    "message": "Unsupported OS/browser combination."
                };
	            createLogFlasher(actionId, metaData);

	            var supportedOsMessage = '<i class="icon-warning-sign"></i> To program your Arduino from your browser, please use <a href="http://www.google.com/chrome/" target="_blank">Google Chrome</a>/Chromium (version 41 and above on Linux) or <a href="http://www.mozilla.org/en-US/firefox/" target="_blank">Mozilla Firefox</a>.';
	            var unsupportedOsMessage = '<i class="icon-warning-sign"></i> To program your Arduino from your browser, please use <a href="http://www.google.com/chrome/" target="_blank">Google Chrome</a>/Chromium on Windows, Mac, Linux (version 41 and above) or Chrome OS (version 41 and above) or <a href="http://www.mozilla.org/en-US/firefox/" target="_blank">Mozilla Firefox</a> on Windows, Mac or Linux.';

	            if(window.isSupportedOs())
	            {
		            this.owner.setOperationOutput(supportedOsMessage);
		            this.owner.eventManager.fire('plugin_notification', supportedOsMessage)
	            }
	            else
	            {
		            this.owner.setOperationOutput(unsupportedOsMessage);
		            this.owner.eventManager.fire('plugin_notification',unsupportedOsMessage);
	            }
            }
            else
            {
                this.plugin_searched = false;
                this.plugin_found = false;
                this.plugin_initialized = false;
                this.plugin_validated = false;
                this.plugin_running = false;

                this.plugin_version = null;
                window.plugin_version = null;

                this.searchPlugin();
                if (!this.plugin_found)
                {
	                    var alert = this.browserSpecificPluginInstall("To program your Arduino from your browser, install the codebender");
                    this.owner.setOperationOutput(alert);
                    this.owner.eventManager.fire('plugin_notification', alert);

                    var actionId = 35;
                    var metaData = {
                        "plugin" : false,
                        "message": "Not on navigator plugins."
                    };
	                createLogFlasher(actionId, metaData);

                    var pl = this;
                    window.pluginSearchInterval =  setInterval(function () {
                        pl.searchPlugin();
                        if (pl.plugin_found)
                        {
                            clearInterval(window.pluginSearchInterval);
                            pl.runPlugin();
                        }
                    },2000);
                    return;
                }
                else
                {
                    this.runPlugin();
                }
            }

        }

        this.searchPlugin = function(callback)
        {
            for (var i = 0; i < navigator.plugins.length; i++) {
	            if (navigator.plugins[i].name == "Codebender.cc" ||
		            navigator.plugins[i].name == "Codebendercc") {
		            this.plugin_found = true;
	            }
            }

            this.plugin_searched = true;
        }

        this.runPlugin = function()
        {
            var actionId = 35;
            var metaData = {
                "plugin" : true,
                "message": "Found on navigator plugins.",
	            "type": 'plugin'
            };
	        createLogFlasher(actionId, metaData);

            this.owner.setOperationOutput("<i class='icon-spinner icon-spin'></i>  Initializing Plugin... Make sure that you allow plugin execution on your browser. <a href='http://feedback.codebender.cc/knowledgebase/topics/57328-plugin'>More Info</a>");
            this.owner.eventManager.fire("plugin_notification", "<i class='icon-spinner icon-spin'></i>  Initializing Plugin... Make sure that you allow plugin execution on your browser. <a href='http://feedback.codebender.cc/knowledgebase/topics/57328-plugin'>More Info</a>");
	        $("body").append('<object id="plugin0" type="application/x-codebendercc" width="0" height="0" xmlns="http://www.w3.org/1999/html"></object>');
            var pl = this;
            window.plugin_init_interval = setInterval(function(){
	            if(typeof document.getElementById('plugin0').probeUSB !== 'undefined')
                {
                    clearInterval(window.plugin_init_interval);

                    pl.plugin_initialized = true;
                    pl.plugin_version = document.getElementById('plugin0').version;
                    window.plugin_version = pl.plugin_version;

                    var actionId = 35;
                    var metaData = {
                        "plugin" : true,
                        "version": document.getElementById('plugin0').version,
	                    "type": 'plugin'
                    };
	                createLogFlasher(actionId, metaData);

                    pl.validateVersion(that.minVersion);
                    if (typeof document.getElementById('plugin0').setErrorCallback !== 'undefined')
                        document.getElementById('plugin0').setErrorCallback(pl.plugin_error_logger);

                    if (typeof document.getElementById('plugin0').init !== 'undefined')
                    {
                        document.getElementById('plugin0').init();
                        if (document.getElementById('plugin0').instance_id != 'undefined') {
                            pl.tabID = parseInt(document.getElementById('plugin0').instance_id);
                        }
                    }

                    if (typeof document.getElementById('plugin0').closeTab !== 'undefined')
                    {
                        $( window ).unload(function ()
                        {
                            document.getElementById('plugin0').closeTab();
                            document.getElementById('plugin0').deleteMap();
                        });
                    }
                    else
                    {
                        pl.disconnect();
                    }

                }
            }, 100);
        }

        this.showPlugin = function()
        {
            this.owner.setOperationOutput("");
            this.owner.eventManager.fire("plugin_running");
            $.each(this.owner.loaded_elements, function(k,v){
                if(v !== "cb_cf_boards")
                    $("#"+v).removeAttr("disabled");
            });
            this.plugin_running = true;
        }

        this.parseVersionString = function(str) {
            if (typeof(str) != 'string') {
                return false;
            }
            var x = str.split('.');
            // parse from string or default to 0 if can't parse
            var maj = parseInt(x[0]) || 0;
            var min = parseInt(x[1]) || 0;
            var pat = parseInt(x[2]) || 0;
            var bui = parseInt(x[3]) || 0;
            return {
                major:maj,
                minor:min,
                patch:pat,
                build:bui
            }
        }

        this.comparePluginVersions = function(firstVersion, secondVersion)
        {
            var major = firstVersion.major - secondVersion.major;
            var minor = firstVersion.minor - secondVersion.minor;
            var patch = firstVersion.patch - secondVersion.patch;
            var build = firstVersion.build - secondVersion.build;

            if (major != 0) return major;
            if (minor != 0) return minor;
            if (patch != 0) return patch;
            return build;
        }

        this.validateVersion = function(version)
        {
            if (this.comparePluginVersions(this.parseVersionString(document.getElementById('plugin0').version), this.parseVersionString(version)) < 0)
            {
                var alert = this.browserSpecificPluginInstall("You need to update the Codebender Plugin. ");
                this.owner.setOperationOutput(alert);
                this.owner.eventManager.fire('plugin_notification', alert);
                var actionId = 27;
                var metaData = {
                    "success": true,
                    "plugin" : false,
                    "alert" : "You need to update the Codebender Plugin."
                };
	            createLogFlasher(actionId, metaData);
                clearInterval(window.PluginLoggingInterval);
            } else if (document.getElementById('plugin0').version == null){
                var alert = this.browserSpecificPluginInstall("To program your Arduino from your browser, install the Codebender Plugin. ");
                this.owner.setOperationOutput(alert);
                this.owner.eventManager.fire('plugin_notification', alert);
                var actionId = 27;
                var metaData = {
                    "success": true,
                    "plugin" : false,
                    "alert" : "To program your Arduino from your browser, install the Codebender Plugin."
                };
	            createLogFlasher(actionId, metaData);
                clearInterval(window.PluginLoggingInterval);
            } else
            {
                this.enableUSB();
                this.initializePluginPortsLogger();
                this.showPlugin();
            }
            this.plugin_validated = true;
        }

        this.initializePluginPortsLogger = function()
        {
            if (typeof portsAvail === "undefined")
                portsAvail = [""];
            window.oldPortsAvail = portsAvail;

            if (typeof serialPortsAvail === "undefined")
                serialPortsAvail = [""];
            window.oldSerialPortsAvail = serialPortsAvail;

            var pl = this;
            window.PluginLoggingInterval = setInterval(function(){
                try
                {
                    if(typeof(document.getElementById('plugin0').probeUSB) === "undefined")
                    {
                        var actionId = 34;
                        var metaData = {
                            "message" : "Non catchable plugin crash.",
                            "tabID": pl.tabID,
                            "version": (window.plugin_version === 'undefined' || window.plugin_version === null) ? "undefined" : window.plugin_version,
                            "OS": {
                                "name": (typeof Browsers.os.name === 'undefined') ? 'undefined' : Browsers.os.name,
                                "url":  window.location.pathname,
                                "version": (Browsers.os.version == null || typeof Browsers.os.version.original === 'undefined') ? 'undefined' : Browsers.os.version.original
                            },
                            "Browser": {
                                "name": (typeof Browsers.browser.name === 'undefined') ? 'undefined' : Browsers.browser.name,
                                "version": (typeof Browsers.browser.version === 'undefined' || Browsers.browser.version == null) ? 'undefined' : Browsers.browser.version.original
                            }
                        };
	                    createLogFlasher(actionId, metaData);
	                    pl.owner.setOperationOutput('An unexpected error has occurred. Please refresh your browser.');
	                    clearInterval(window.PluginLoggingInterval);
                    }
                    else
                    {
                        if ((typeof document.getElementById('plugin0').availablePorts === 'undefined')
                                &&((oldPortsAvail.length < portsAvail.length || (oldPortsAvail.length == 1 && portsAvail.length == 1 && oldPortsAvail[0] == "" && portsAvail[0] != ""))
                                ||(oldPortsAvail.length > portsAvail.length || (oldPortsAvail.length == 1 && portsAvail.length == 1 && oldPortsAvail[0] != "" && portsAvail[0] == ""))))
                        {
                            var ports = Object();
                            $("#cb_cf_ports  > option").each(function(index) {
                                ports[index] = (this.text);
                            });
                            var actionId = 36;
                            var metaData = {
                                "success": true,
                                "plugin" : true,
                                "version": document.getElementById('plugin0').version,
                                "ports" : ports
                            };
	                        createLogFlasher(actionId, metaData);
                        }

                        oldPortsAvail = portsAvail;

                        if (typeof(document.getElementById('plugin0').getPorts) !== "undefined")
                        {
                            serialPortsAvail = document.getElementById('plugin0').getPorts();
                            if (oldSerialPortsAvail != serialPortsAvail)
                            {
                                var parsedList = $.parseJSON(serialPortsAvail);
                                var ports = "";
                                $.each(parsedList, function (index, elem){
                                    ports += elem['port'] + ',';
                                });

                                var actionId = 36;
                                var metaData = {
                                    "success": true,
                                    "plugin" : true,
                                    "version": document.getElementById('plugin0').version,
                                    "tabID": pl.tabID,
                                    "serialLibPorts" : ports,
                                    "probeUSBports" : document.getElementById('plugin0').probeUSB()
                                };
	                            createLogFlasher(actionId, metaData);

                                var actionId = 74;
                                var metaData = {
                                    "success": true,
                                    "plugin" : true,
                                    "version": document.getElementById('plugin0').version,
                                    "tabID": pl.tabID,
                                    "jsonPorts" : parsedList
                                };
	                            createLogFlasher(actionId, metaData);
                            }

                            oldSerialPortsAvail = serialPortsAvail;
                        }
                    }
                }
                catch(err)
                {
                    var actionId = 27;
                    var metaData = {
                        "success" : false,
                        "error" : err
                    };
	                createLogFlasher(actionId, metaData);
                }
            }, 500);
        }

        this.canBurnBootloader = function(programmer)
        {
            if (this.portslist.options[this.portslist.selectedIndex].value == '' && programmer['communication'] == 'serial') {
                return false;
            }
            else
                return true;

        }

        this.doflash = function(select, board, programmer, binary, flash_callback)
        {
            if (select == true && typeof board["upload"]["protocol"] !== 'undefined')
            {
                if(typeof this.portslist. options[this.portslist.selectedIndex] === 'undefined')
                {
                    this.owner.eventManager.fire('flash_failed', "Could not connect to selected port. Make sure your board is properly connected.");
                    this.owner.setOperationOutput("Could not connect to selected port. Make sure your board is properly connected.");

                }
                else
                {
                    var disable_flushing = ((typeof board["upload"]["disable_flushing"] === 'undefined') ? "" : board["upload"]["disable_flushing"]);
                    document.getElementById('plugin0').flash(this.portslist.options[this.portslist.selectedIndex].text, binary, board["upload"]["maximum_size"], board["upload"]["protocol"], disable_flushing, board["upload"]["speed"], board["build"]["mcu"], flash_callback);
                }
            }else
            {
                if(typeof programmer == "undefined")
                {
                    this.owner.setOperationOutput("The selected device needs a programmer, and none was selected. Operation Aborted.");
                    this.owner.eventManager.fire('flash_failed', "Could not connect to selected port. Make sure your board is properly connected.");

                }
                else
                {
                    var selectedPort = (typeof this.portslist.options[this.portslist.selectedIndex] === 'undefined') ? '' : this.portslist.options[this.portslist.selectedIndex].text;
                    document.getElementById('plugin0').flashWithProgrammer(selectedPort, binary, board["upload"]["maximum_size"], programmer["protocol"], programmer["communication"], programmer["speed"], programmer["force"], programmer["delay"], board["build"]["mcu"],
                            flash_callback);

                }
            }
        }

        this.canflash = function(board, programmer, useProgrammer){
            if (programmer.communication == 'serial' &&
                this.currentPorts.length == 0) {
                return false;
            }

            useProgrammer = useProgrammer || false;
            if (($("#cb_cf_ports").val() != null && $("#cb_cf_ports").val() != "") || (($("#cb_cf_ports").val() == null || $("#cb_cf_ports").val() == "") && typeof board["upload"]["protocol"] === 'undefined') || useProgrammer) {

                if (typeof this.portslist.options[this.portslist.selectedIndex] === 'undefined' && programmer["communication"] == "serial" && (typeof board["upload"]["protocol"] === 'undefined' || useProgrammer))
                {

                    return false;
                }

                return true;
            }
            else {
                return false;
            }
        }

        this.browserSpecificPluginInstall = function(alert)
        {

            var location;
            if (typeof window.location.origin == 'undefined')
                location = window.location;
            else
                location = window.location.origin;

            if(location.indexOf("codebender.cc") == -1)
            {
                alert+= ' plugin <a target="_blank" href = "https\x3A\x2F\x2Fcodebender.cc\x2Fstatic\x2Fplugin" >Learn more.</a>';
            }
            else
            {
                if(Browsers.isBrowser("Chrome") || Browsers.isBrowser("Chromium"))
                {
                    if(Browsers.isOs('Windows','>=','6.2'))
                        alert+= ' plugin <a onclick=\'compilerflasher.pluginHandler.addTo("Windows", "\x2F\x2Fcodebender.cc\x2FCodebendercc.msi")\' id="msi-download-url" href = "javascript:void(0);" >Add to Windows.</a>';
                    else
                        alert += " plugin <a onclick='compilerflasher.pluginHandler.addTo(\"Chrome\")' href='https://chrome.google.com/webstore/detail/codebendercc-extension/fkjidelplakiboijmadcpcbpboihkmee' target='_blank'>Add to Chrome</a>";
                }
                else if(Browsers.isBrowser("Firefox"))
                {
                    alert+= ' plugin <a onclick=\'compilerflasher.pluginHandler.addTo("Firefox", "\x2F\x2Fcodebender.cc\x2Fcodebender.xpi")\' id="xpi-download-url" href = "javascript:void(0);" >Add to Firefox.</a>';
                }
            }

            return alert;
        }

        this.addTo = function(where, pluginUrl)
        {
            var actionId = 45;
            var metaData = {
                "where": where
            };
            if (typeof pluginUrl == 'undefined')
	            createLogFlasher(actionId, metaData);
            else
            {
	            createLogFlasher(actionId, metaData, function() {
                    window.location.replace(pluginUrl);
                });
            }
        }


        this.enableUSB = function()
        {

            this.connected = false;

            this.serialMonitorVal = '';
            this.serialMonitorToAppend = '';

            this.portslist = $("#cb_cf_ports")[0];
            this.oldPorts = null;

            var pl = this;
            setTimeout(function ()
            {
                pl.scan();
            }, 200);


            setTimeout(function ()
            {
                pl.loadPort();
            }, 500);
        }

        this.getFire = function() {
            try {
                var ports = '';
                if(typeof document.getElementById('plugin0').getPorts !== 'undefined')
                {
                    var jsonPorts = $.parseJSON(document.getElementById('plugin0').getPorts());
                    $.each(jsonPorts, function (index, elem){
                        ports += elem['port'];
                        if (index != Object.keys(jsonPorts).length - 1) ports += ',';
                    });
                }
                else
                    ports = document.getElementById('plugin0').probeUSB();

                if (this.oldPorts == null) {
                    this.logPorts();
                    this.oldPorts = '';
                }
                if (ports != this.oldPorts) {
                    $('#cb_cf_ports').find('option').remove();
                    var portsAvail = ports.split(",");
                    this.currentPorts = [];
                    for (var i = 0; i < portsAvail.length; i++) {
                        if (portsAvail[i] != "") {
                            this.portslist.options[i] = new Option(portsAvail[i], portsAvail[i], true, false);
                            this.currentPorts.push(portsAvail[i]);
                        }
                    }

                    this.oldPorts = ports;
                    this.loadPort();
                    this.logPorts();
                }
            }
            catch (err) {
                $('#cb_cf_ports').find('option').remove();
                this.oldPorts = ports;
            }
        }


        this.scan = function() {
            window.hasPerm = document.getElementById('plugin0').setCallback(function (from, output) {
                if (output == "disconnect") {

                    compilerflasher.pluginHandler.disconnect(true);
                } else
                {
                    compilerflasher.eventManager.fire("plugin_notification", output);
                    compilerflasher.setOperationOutput(output);
                }
            });

            if (typeof window.hasPerm != 'undefined' && !window.hasPerm) {
                compilerflasher.setOperationOutput("You need to grant permissions to the Codebender extension.");
                compilerflasher.eventManager.fire('plugin_notification', "You need to grant permissions to the Codebender extension.");
            }


            this.getFire();
            var pl = this;
            this.getFireInterval = setInterval(function () {
                pl.getFire();
            }, 1000);
        }

        this.show_alert = function(message, divname) {
            alertElement = "<div id='";
            alertElement += divname;
            alertElement += "' class='alert'>";
            alertElement += message
            alertElement += "</div>";
            $("#cb_cf_ports_div .alert").hide(100).remove();
            $("#cb_cf_ports_div").prepend(alertElement);
        }

        /*
         Serial Monitor functions
         */
        var _that = this;
        this.connect = function() {
            if (window.operationInProgress)
            {
	            return;
            }
            window.operationInProgress = true;

	        this.owner.setOperationOutput('');
            var speed = $("#cb_cf_baud_rates option:selected").val();
            if (this.connected == false) {
                var actionId = 18;
                var metaData = {
                    "baudrate" : speed,
                    "port": $("#cb_cf_ports").val(),
                    "tabID": this.tabID,
	                "type": 'plugin'
                };
	            createLogFlasher(actionId, metaData);
                if ($("#cb_cf_ports").val() != null && $("#cb_cf_ports").val() != "") {

                    _that.serialMonitorPort = $("#cb_cf_ports").val();
                    $("#serial_monitor_content").show(1000);
                    this.connected = true;
                    var pl = this;
                    $("#cb_cf_serial_monitor_connect").html("Disconnect").off('click').click(function(){pl.disconnect()});
                    $("#serial_hud").html("");

                    var pl = this;
                    var port = this.portslist.options[this.portslist.selectedIndex].text;
                    document.getElementById('plugin0').serialRead(
                            this.portslist.options[this.portslist.selectedIndex].text,
                            speed,
                            function (from, line) {
                                pl.serialHudAppendString(line);
                            },
                            function (from, line){
                                var actionId = 69;
                                var metaData = {
                                    "retVal" : line,
	                                "type": 'plugin',
                                    "version": (window.plugin_version === 'undefined' || window.plugin_version === null) ? "undefined" : window.plugin_version,
                                    "url":  window.location.pathname,
                                    "OS": {
                                        "name": (typeof Browsers.os.name === 'undefined') ? 'undefined' : Browsers.os.name,
                                        "version": (Browsers.os.version == null || typeof Browsers.os.version.original === 'undefined') ? 'undefined' : Browsers.os.version.original
                                    },
                                    "Browser": {
                                        "name": (typeof Browsers.browser.name === 'undefined') ? 'undefined' : Browsers.browser.name,
                                        "version": (typeof Browsers.browser.version === 'undefined' || Browsers.browser.version == null) ? 'undefined' : Browsers.browser.version.original
                                    }
                                };
	                            createLogFlasher(actionId, metaData);
                                var msg = compilerflasher.getFlashFailMessage(line);
                                compilerflasher.setOperationOutput(msg);
                                compilerflasher.eventManager.fire("plugin_notification", msg);
                            }
                    );

                    this.serialMonitorToAppend = '';
                    this.serialMonitorVal = '';
                    $("#serial_hud").html(escapeHtml(this.serialMonitorVal));
                    pl = this;

                    window.serialMonitorUpdater = setInterval(function(){
                        if(pl.serialMonitorToAppend != '')
                        {
                            var total_length =  pl.serialMonitorToAppend.length + pl.serialMonitorVal.length;
                            if(total_length > pl.max_monitor_length)
                            {
                                pl.serialMonitorVal = pl.serialMonitorVal.substring(total_length - pl.max_monitor_length) + pl.serialMonitorToAppend;
                                $("#serial_hud").html(escapeHtml(pl.serialMonitorVal));
                            }
                            else
                            {
                                pl.serialMonitorVal = pl.serialMonitorVal + pl.serialMonitorToAppend;
                                $("#serial_hud").append(escapeHtml(pl.serialMonitorToAppend));
                            }

                            pl.serialMonitorToAppend = '';

                            if($('#autoscroll_check').is(':checked'))
                                $("#serial_hud").scrollTo(99999999);
                        }
                    }, 50);

                    if(typeof document.getElementById('plugin0').availablePorts !== 'undefined')
                    {
                        var ph = this;
                        window.portValidatorInterval = setInterval(function ()
                        {
                            ports = document.getElementById('plugin0').availablePorts();
                            if (ports.indexOf(port) == -1){
                                clearInterval(window.portValidatorInterval);
                                ph.disconnect(false);
                            }
                        },100);
                    }

                    window.operationInProgress = false;
                }
                else {
                    window.operationInProgress = false;
                    this.owner.setOperationOutput("Please select a valid port!!");
                    this.owner.eventManager.fire('plugin_notification', "Please select a valid port!!");
                }
            } else {
                window.operationInProgress = false;
                this.disconnect();
            }
        }

        this.disconnect = function(notified) {
            notified = notified || false;
            if (this.connected == true) {
                window.operationInProgress = true;
                if(notified == false)
                {
                    var actionId = 59;
                    var metaData = {
                        "baudrate": $("#cb_cf_baud_rates option:selected").val(),
                        "port": _that.serialMonitorPort,
                        "tabID": this.tabID
                    };
	                createLogFlasher(actionId, metaData);
                }

                _that.serialMonitorPort = null;

                if(typeof document.getElementById('plugin0').availablePorts !== 'undefined')
                {
	                clearInterval(window.portValidatorInterval);
                }

                var pl = this;
                $("#cb_cf_serial_monitor_connect").html("<i class='icon-list-alt'></i> Connect").off('click').click(function(){pl.connect()});
                this.connected = false;

                $("#cb_cf_serial_monitor_connect").attr('disabled', 'disabled');
                setTimeout(function () {
                    window.operationInProgress = false;
                    if (!that.serial_monitor_disabled) {
                        $("#cb_cf_serial_monitor_connect").removeAttr('disabled');
                    }
                }, 2000);

                $("#serial_monitor_content").hide(1000);


                clearInterval(window.serialMonitorUpdater);
                if(!notified)
                {
                    document.getElementById('plugin0').serialMonitorSetStatus();
                }
            }
        }

        this.serialHudAppendString = function(msg)
        {
	        if (msg.indexOf('\r\n') != -1) {
		        msg = msg.replace(/\r\n/g, '\n');
	        }
	        if (msg.indexOf('\r') != -1) {
		        msg = msg.replace(/\r/g, '');
	        }
            var total_length =  this.serialMonitorToAppend.length + msg.length;
            if(total_length > this.max_monitor_length)
            {
                this.serialMonitorToAppend = this.serialMonitorToAppend.substring(total_length - this.max_monitor_length) + msg;
            }
            else
            {
                this.serialMonitorToAppend = this.serialMonitorToAppend + msg;
            }
        }

        this.serialHudAppend = function(line) {
            if (isNaN(line)) {
                this.serialHudWrite($("#serial_hud").html() + line + "<br>");
            } else {
                if (line == "13")    return;
                if (line == "10")    serialHudWrite($("#serial_hud").html() + "<br>");
                if (line != "10")    serialHudWrite($("#serial_hud").html() + String.fromCharCode(line));
            }
        }

        this.serialHudWrite = function(message) {
            if( $("#serial_hud").find('br').length > 500)
                $("#serial_hud").html(message.substring(message.indexOf('<br>') + 4));
            else if (  $("#serial_hud").html().length > this.max_monitor_length )
                $("#serial_hud").html(message.substring($("#serial_hud").html().length - this.max_monitor_length));
            else
                $("#serial_hud").html(message);
            if($('#autoscroll_check').is(':checked'))
                $("#serial_hud").scrollTo(99999999);
        }

        this.serialSendOnEnter = function(event){
            var e = event || window.event;   // resolve event instance
            if (e.keyCode == '13'){
                this.serialSend();
            }else if (e.keyCode == '10'){
                this.serialSend();
            }
        }

        this.serialSend = function() {
	        var inputText = $('#text2send').val();
	        var lineEndings = $('#serial-line-endings').val();

	        var breakFlag = false;
	        if (lineEndings == 'nl') {
		        inputText += '\n';
		        breakFlag = true;
	        }
	        else if (lineEndings == 'cr') {
		        inputText += '\r';
	        }
	        else if (lineEndings == 'nlcr') {
		        inputText += '\r\n';
		        breakFlag = true;
	        }

	        var comparePluginVersion = this.comparePluginVersions(this.parseVersionString(document.getElementById('plugin0').version), this.parseVersionString('1.6.0.8'));
	        if (comparePluginVersion <= 0) {
	            document.getElementById('plugin0').serialWrite(inputText);
            }
            else {
	            document.getElementById('plugin0').serialWrite(inputText, this.serialMonitorPort);
            }

	        if ($('#echo_check').is(':checked')) {
		        var message = '<span class="serial-monitor-echo">'+escapeHtml(inputText)+'</span>';
		        if (breakFlag) {
			        message += '<br>';
		        }
		        this.serialHudWrite($('#serial_hud').html() + message);
	        }
        }

        var _that = this;
        this.plugin_error_logger = function(from, msg, status){
            if(typeof status == 'undefined' || status == 0)
            {
                var actionId = 34;
                var metaData = {
                    "message" : msg,
                    "version": (window.plugin_version === 'undefined' || window.plugin_version === null) ? "undefined" : window.plugin_version,
                    "url":  window.location.pathname,
                    "tabID": _that.tabID,
                    "OS": {
                        "name": (typeof Browsers.os.name === 'undefined') ? 'undefined' : Browsers.os.name,
                        "version": (Browsers.os.version == null || typeof Browsers.os.version.original === 'undefined') ? 'undefined' : Browsers.os.version.original
                    },
                    "Browser": {
                        "name": (typeof Browsers.browser.name === 'undefined') ? 'undefined' : Browsers.browser.name,
                        "version": (typeof Browsers.browser.version === 'undefined' || Browsers.browser.version == null) ? 'undefined' : Browsers.browser.version.original
                    }
                };
	            createLogFlasher(actionId, metaData);
            }
            else if(status ==1)
            {
                var actionId = 55;
                var metaData = {
                    "message" : msg , "version": (window.plugin_version === 'undefined' || window.plugin_version === null) ? "undefined" : window.plugin_version,
                    "url":  window.location.pathname,
                    "tabID": _that.tabID,
                    "OS": {
                        "name": (typeof Browsers.os.name === 'undefined') ? 'undefined' : Browsers.os.name,
                        "version": (Browsers.os.version == null || typeof Browsers.os.version.original === 'undefined') ? 'undefined' : Browsers.os.version.original
                    },
                    "Browser": {
                        "name": (typeof Browsers.browser.name === 'undefined') ? 'undefined' : Browsers.browser.name,
                        "version": (typeof Browsers.browser.version === 'undefined' || Browsers.browser.version == null) ? 'undefined' : Browsers.browser.version.original
                    }
                };
	            createLogFlasher(actionId, metaData);
            }
        }
    }; // pluginHandler

    if($("#cb_cf_operation_output").length > 0)
    {
        this.loaded_elements.push("cb_cf_operation_output");
    }
    if($("button#cb_cf_verify_btn").length > 0)
    {
        $("#cb_cf_verify_btn").click(function(){cb.verify()});
        this.loaded_elements.push("cb_cf_verify_btn");
    }
    if($("select#cb_cf_boards").length > 0)
    {
        this.boardsListExists = true;
        $("#cb_cf_boards").append($('<option></option>').html("Loading Boards..."))
                .attr('disabled', 'disabled')
                .click(function(){cb.clickedBoard()})
                .change(function(){cb.saveBoard()});
        $.getJSON("https\x3A\x2F\x2Fcodebender.cc\x2Fboard\x2Flistboards", function(data){boardsListCallback(data)});
        this.loaded_elements.push("cb_cf_boards");
    }
    if($("select#cb_cf_ports").length > 0)
    {
        $("#cb_cf_ports").click(function(){cb.pluginHandler.clickedPort()})
                .change(function(){cb.pluginHandler.savePort()})
                .attr("disabled", "disabled");

        if($("#cb_cf_ports").data().pluginVersion)
            this.pluginHandler.minVersion = $("#cb_cf_ports").data().pluginVersion;

        this.loaded_elements.push("cb_cf_ports");
    }
    if($("button#cb_cf_flash_btn").length > 0)
    {
        $("#cb_cf_flash_btn")
                .click(function(){cb.usbflash()})
                .attr("disabled", "disabled");;
        this.loaded_elements.push("cb_cf_flash_btn");
    }
    if($("select#cb_cf_programmers").length > 0)
    {
        $("#cb_cf_programmers").append($('<option></option>').html("Loading Programmers..."))
                .attr('disabled', 'disabled')
                .click(function(){cb.clickedProgrammer()})
                .change(function(){cb.saveProgrammer()});
        $.getJSON("https\x3A\x2F\x2Fcodebender.cc\x2Fboard\x2Fprogrammers", function (data)
        {
            programmersListCallback(data)
        });
        this.loaded_elements.push("cb_cf_programmers");
    }
    if($("button#cb_cf_flash_with_prog_btn").length > 0)
    {
        $("#cb_cf_flash_with_prog_btn").click(function(){cb.usbflashWithProgrammer()})
                .attr('disabled', 'disabled');
        this.loaded_elements.push("cb_cf_flash_with_prog_btn");
    }
    if($("select#cb_cf_baud_rates").length > 0)
    {
        $("#cb_cf_baud_rates").append(
                        "<option>9600</option>" +
                        "<option>19200</option>" +
                        "<option>28800</option>" +
                        "<option>38400</option>" +
                        "<option>57600</option>" +
                        "<option>115200</option>")
                .attr('disabled', 'disabled');

        this.loaded_elements.push("cb_cf_baud_rates");
    }
    if($("button#cb_cf_serial_monitor_connect").length > 0)
    {
        $("#cb_cf_serial_monitor_connect").click(function(){cb.pluginHandler.connect()})
                .attr('disabled', 'disabled');
        this.loaded_elements.push("cb_cf_serial_monitor_connect");
    }
    if($("#cb_cf_serial_monitor").length > 0)
    {
        $("#cb_cf_serial_monitor").html('\x3Cstyle\x3E\x0A\x09\x23serial_monitor_content\x0A\x09\x7B\x0A\x09\x09display\x3A\x20none\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial_hud\x0A\x09\x7B\x0A\x09\x09overflow\x2Dy\x3A\x20scroll\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial_monitor_hud_and_autoscroll\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dchecboxes\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dchecboxes\x20\x3E\x20label\x0A\x09\x7B\x0A\x09\x09margin\x2Dbottom\x3A\x200\x3B\x0A\x09\x7D\x0A\x0A\x09\x23autoscroll_label\x0A\x09\x7B\x0A\x09\x09position\x3A\x20relative\x3B\x0A\x09\x09top\x3A\x208px\x3B\x0A\x09\x7D\x0A\x0A\x09\x23autoscroll_check\x0A\x09\x7B\x0A\x09\x09display\x3A\x20block\x3B\x0A\x09\x7D\x0A\x0A\x09\x23echo_label\x0A\x09\x7B\x0A\x09\x09position\x3A\x20relative\x3B\x0A\x09\x09top\x3A\x203px\x3B\x0A\x09\x7D\x0A\x0A\x09.serial\x2Dmonitor\x2Decho\x0A\x09\x7B\x0A\x09\x09display\x3A\x20inline\x2Dblock\x3B\x0A\x09\x09color\x3A\x20\x23FF0000\x3B\x0A\x09\x7D\x0A\x0A\x09\x23serial\x2Dline\x2Dendings\x0A\x09\x7B\x0A\x09\x09width\x3A\x20130px\x3B\x0A\x09\x09margin\x2Dbottom\x3A\x2010px\x3B\x0A\x09\x7D\x0A\x3C\x2Fstyle\x3E\x0A\x0A\x3Cdiv\x20id\x3D\x22serial_monitor_content\x22\x3E\x0A\x09\x3Cdiv\x20id\x3D\x22serial_monitor_hud_and_autoscroll\x22\x3E\x0A\x09\x09\x3Cpre\x20id\x3D\x22serial_hud\x22\x20class\x3D\x22well\x22\x3E\x3C\x2Fpre\x3E\x0A\x0A\x09\x20\x20\x20\x20\x3Cspan\x20id\x3D\x22serial\x2Dchecboxes\x22\x3E\x0A\x09\x09\x20\x20\x20\x20\x3Clabel\x20id\x3D\x22autoscroll_label\x22\x20class\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20\x3Cinput\x20id\x3D\x27autoscroll_check\x27\x20type\x3D\x22checkbox\x22\x20checked\x3E\x0A\x09\x09\x09\x20\x20\x20\x20Autoscroll\x0A\x09\x09\x20\x20\x20\x20\x3C\x2Flabel\x3E\x0A\x0A\x09\x09\x20\x20\x20\x20\x3Clabel\x20id\x3D\x22echo_label\x22\x20class\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20\x3Cinput\x20id\x3D\x27echo_check\x27\x20type\x3D\x22checkbox\x22\x3E\x0A\x09\x09\x09\x20\x20\x20\x20Echo\x0A\x09\x09\x20\x20\x20\x20\x3C\x2Flabel\x3E\x0A\x09\x20\x20\x20\x20\x3C\x2Fspan\x3E\x0A\x0A\x09\x09\x3Cselect\x20id\x3D\x22serial\x2Dline\x2Dendings\x22\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nle\x22\x3ENo\x20line\x20ending\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nl\x22\x3ENewline\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22cr\x22\x3ECarriage\x20return\x3C\x2Foption\x3E\x0A\x09\x09\x09\x3Coption\x20value\x3D\x22nlcr\x22\x20selected\x3D\x22selected\x22\x3EBoth\x20NL\x20\x26\x20CR\x3C\x2Foption\x3E\x0A\x09\x09\x3C\x2Fselect\x3E\x0A\x09\x3C\x2Fdiv\x3E\x0A\x0A\x09\x3Cdiv\x20class\x3D\x22input\x2Dappend\x22\x3E\x0A\x09\x09\x3Cinput\x20id\x3D\x22text2send\x22\x20type\x3D\x22text\x22\x20placeholder\x3D\x22Type\x20a\x20message\x22\x20onkeydown\x3D\x22compilerflasher.pluginHandler.serialSendOnEnter\x28event\x29\x22\x3E\x0A\x09\x09\x3Cbutton\x20id\x3D\x22serial_send\x22\x20onclick\x3D\x22compilerflasher.pluginHandler.serialSend\x28\x29\x22\x20class\x3D\x22btn\x22\x20title\x3D\x22Send\x20Message\x22\x3ESend\x3C\x2Fbutton\x3E\x0A\x09\x3C\x2Fdiv\x3E\x0A\x3C\x2Fdiv\x3E\x0A');
        this.loaded_elements.push("cb_cf_serial_monitor");
    }
    if($("#cb_cf_burn_bootloader").length > 0)
    {
        $("#cb_cf_burn_bootloader").click(function(){cb.burn_bootloader();})
                .attr('disabled', 'disabled');
        this.loaded_elements.push("cb_cf_burn_bootloader");
    }

    this.init = function () {
	    if(window.location.origin.indexOf("codebender.cc") == -1)
	    {
		    this.pluginHandler.initializePlugin();
	    }
	    else
	    {
		    window.osBrowserDetectionValidInterval = setInterval(function(){
			    if(typeof window.osBrowserIsSupported !== 'undefined')
			    {
				    clearInterval(window.osBrowserDetectionValidInterval);
				    cb.pluginHandler.initializePlugin();
			    }
		    }, 100);
	    }
	    this.enableShortCuts = true;
    };

	if (!this.boardsListExists) {
		this.init();
	}

    this.saveBoard = function() {

        if(typeof Lawnchair !== 'undefined')
        {
            new Lawnchair(function () {
                this.save({key:'board', name:$("#cb_cf_boards option:selected").text()});
            });
        }

        var oldBoard = this.selectedBoard.name;
        this.selectedBoard = this.boards_list[$("#cb_cf_boards").prop("selectedIndex")];
        var newBoard = this.selectedBoard.name;

        var actionId = 37;
        var metaData = {
            "oldBoard": oldBoard,
            "newBoard": newBoard,
            "tabID": this.pluginHandler.tabID
        };
	    createLogFlasher(actionId, metaData);
    };

    this.loadBoard = function() {
        var cb = this;
        if(typeof Lawnchair !== 'undefined')
        {
        Lawnchair(function () {
            this.exists('board', function (exists) {
                if (exists) {
                    this.get('board', function (config) {
                        $("#cb_cf_boards").val(config.name)
                    })
                }

                cb.selectedBoard = cb.boards_list[$("#cb_cf_boards").prop("selectedIndex")];
            });
        });
        }
        else
        {
            cb.selectedBoard = cb.boards_list[$("#cb_cf_boards").prop("selectedIndex")];
        }
    };

    this.getMaxSize = function() {
        return parseInt(this.selectedBoard["upload"]["maximum_size"]);
    }


    this.saveProgrammer = function() {
        if(typeof Lawnchair !== 'undefined')
        {
            new Lawnchair(function () {
                this.save({key:'programmer', name:$("#cb_cf_programmers option:selected").text()});
            });
        }

        var oldProgrammer = this.selectedProgrammer.name;
        this.selectedProgrammer = this.programmers_list[$("#cb_cf_programmers").prop("selectedIndex")];
        var newProgrammer = this.selectedProgrammer.name;

        var actionId = 39;
        var metaData = {
            "oldProgrammer": oldProgrammer,
            "newProgrammer": newProgrammer,
            "tabID": this.pluginHandler.tabID
        };
	    createLogFlasher(actionId, metaData);
    };

    this.loadProgrammer = function() {
        var cb = this;
        window.programmersInitInterv = setInterval(function(){

            if(cb.pluginHandler.plugin_running)
            {
                clearInterval(window.programmersInitInterv);

                if(typeof Lawnchair !== 'undefined')
                {
                    Lawnchair(function () {
                        this.exists('programmer', function (exists) {
                            if (exists) {
                                this.get('programmer', function (config) {
                                    $("#cb_cf_programmers").val(config.name)
                                })
                            }
                            cb.selectedProgrammer = cb.programmers_list[$("#cb_cf_programmers").prop("selectedIndex")];
                        });
                    });
                }
                else
                {
                    cb.selectedProgrammer = cb.programmers_list[$("#cb_cf_programmers").prop("selectedIndex")];
                }
            }
        }, 60);
    };


    this.getDefaultBoard = function (){
        var SearchString = window.location.search.substring(1);
        var VariableArray = SearchString.split('&');
        for(var i = 0; i < VariableArray.length; i++){
            var KeyValuePair = VariableArray[i].split('=');
            if(KeyValuePair[0] == 'board'){
                return decodeURIComponent(KeyValuePair[1]);
            }
        }
    };

    this.setBoardsList = function(data){
        this.boards_list = data;
    }

    this.getBoardsList = function(){
        return this.boards_list ;
    }

    this.clickedBoard = function()
    {
        var board = $("#cb_cf_boards option:selected").text();

        var actionId = 42;
        var metaData = {
            "selectedBoard": board,
            "tabID": this.pluginHandler.tabID
        };
	    createLogFlasher(actionId, metaData);
    }

    this.clickedProgrammer = function()
    {
        var programmer = $("#cb_cf_programmers option:selected").text();

        var actionId = 44;
        var metaData = {
            "selectedProgrammer": programmer,
            "tabID": this.pluginHandler.tabID
        };
	    createLogFlasher(actionId, metaData);
    }

    this.generate_payload =  function(format, logging) {
        logging = (typeof logging === "undefined") ? false : logging;
        var files = this.load_files();

        var count = 0;
        var files_array = Array();
        jQuery.each(files, function (i, val) {
            /* We have to append a newline in every file, in order
             * to follow closely the behavior of the original Arduino IDE and
             * keep the clang auto-completer happy! */
             files_array[count++] = {"filename":i, "content":decodeHtml(val) + '\n'};
        });

        if(logging) {
	        var payload = {
		        "files": files_array,
		        "logging": logging,
		        "format": format,
		        "version": "105",
		        "build": compilerflasher.selectedBoard["build"],
		        "board": this.selectedBoard.name,
		        "upload": this.selectedBoard.upload
	        };
        }
        else {
	        var payload = {
		        "files": files_array,
		        "format": format,
		        "version": "105",
		        "build": compilerflasher.selectedBoard["build"],
		        "board": this.selectedBoard.name,
		        "upload": this.selectedBoard.upload
	        };
        }

        if(format == 'autocomplete' && typeof editor !== 'undefined' && typeof fileManager != 'undefined')
        {

            payload['position'] = editor.getSession().getSelection().selectionLead.getPosition();
            payload['position']['file'] = fileManager.openFname;
            payload['archive'] = true;
        }

        return JSON.stringify(payload)
    }

    this.getFlashFailMessage = function(error){
        var msg = '';
        if (window.flashing_errors[error])
            msg = window.flashing_errors[error] + " <a href='http://feedback.codebender.cc/knowledgebase/articles/183395-usb-flashing-known-errors' target='_blank'>More Info</a>";
        else
            msg = "An error occured while connecting to your device. Please try again.";

        return msg
    }


    this.flash_callback = function(from, progress) {

        if (progress)
        {
            msg = compilerflasher.getFlashFailMessage(progress);
            compilerflasher.setOperationOutput(msg);
            compilerflasher.eventManager.fire('flash_failed', msg, progress);

            if (progress != 0 && (progress > -1 || progress < -23) && progress != -30 && progress != -55 && progress != -56 && progress != -57)
            {
	            var actionId = 51;
                var metaData = {
                    "version": document.getElementById('plugin0').version,
                    "retVal": progress,
                    "flashResult": document.getElementById('plugin0').getFlashResult().substring(0, 1800)
                };
	            createLogFlasher(actionId, metaData);
            }
        }
        else
        {
            compilerflasher.eventManager.fire('flash_succeed');
            compilerflasher.setOperationOutput("Upload successful!");
        }

        var url = "https\x3A\x2F\x2Fcodebender.cc\x2Futilities\x2Fflash\x2FERROR_CODE";
        url = url.replace('ERROR_CODE', progress+'&'+that.pluginHandler.tabID+'&plugin');
        $.get(url);

        window.operationInProgress = false;
    }


    this.getHex = function() {

        this.eventManager.fire('pre_hex');
        var payload = this.generate_payload("hex");
        var cb = this;
        $.post("https\x3A\x2F\x2Fcodebender.cc\x2Futilities\x2Fcompile\x2F", payload, function (data) {
            try{
                var obj = jQuery.parseJSON(data);
                if (obj.success == 0) {
                    cb.setOperationOutput("Verification failed.");
                    cb.eventManager.fire('hex_failed', obj.message);
                }
                else
                {
                    cb.setOperationOutput("Verification Successful!")
                    cb.eventManager.fire('hex_succeed', obj);
                }

            }
            catch(err){
                cb.eventManager.fire('hex_failed', '<i class="icon-remove"></i> Unexpected error occured. Try again later.');
                cb.setOperationOutput('<i class="icon-remove"></i> Unexpected error occured. Try again later.');
            }

        });
    }

    this.usbflash = function()
    {
        if (window.operationInProgress || !this.enableShortCuts)
        {
            return;
        }
        window.operationInProgress = true;

		var actionId = 40;
		var metaData = {
			"port": $("#cb_cf_ports").val(),
			"board": $("#cb_cf_boards option:selected").text(),
			"programmer": $("#cb_cf_programmers option:selected").text(),
			"tabID": this.pluginHandler.tabID
		};
	    createLogFlasher(actionId, metaData);

        if(this.pluginHandler.canflash(this.selectedBoard, this.selectedProgrammer))
        {
            var cb = this;
            this.eventManager.fire('pre_flash');
            this.setOperationOutput("<i class='icon-spinner icon-spin'> </i> Working...");
            this.getbin(function(obj){
                if (obj.success == 0) {
                    cb.setOperationOutput("There was an error compiling.");
                    cb.eventManager.fire('verification_failed', obj.message);
                }
                else
                {
                    cb.eventManager.fire('mid_flash', obj.size);

                    if (parseInt(obj.size) > cb.getMaxSize())
                    {
                        cb.setOperationOutput("There is not enough space!");
                        cb.eventManager.fire('flash_failed', "There is not enough space!");
                    }
                    else
                    {
                        if (cb.pluginHandler.connected == true)
                        {
                            cb.pluginHandler.disconnect(false);
                            setTimeout(function(){
                                cb.pluginHandler.doflash(true, cb.selectedBoard, cb.selectedProgrammer, obj['output'], cb.flash_callback);
                            }, 200);
                        } else {
                            cb.pluginHandler.doflash(true, cb.selectedBoard, cb.selectedProgrammer, obj['output'], cb.flash_callback);
                        }
                    }
                }
            })
        }
        else
        {
            this.setOperationOutput("Please select a valid port!");
            this.eventManager.fire("plugin_notification", "Please select a valid port!!");
            window.operationInProgress = false;
        }

    }


    this.usbflashWithProgrammer = function()
    {
        if (window.operationInProgress || !this.enableShortCuts)
        {
	        return;
        }
        window.operationInProgress = true;

		var actionId = 41;
		var metaData = {
			"port": $("#cb_cf_ports").val(),
			"board": $("#cb_cf_boards option:selected").text(),
			"programmer": $("#cb_cf_programmers option:selected").text(),
			"tabID": this.pluginHandler.tabID
		};
	    createLogFlasher(actionId, metaData);

        if(this.pluginHandler.canflash(this.selectedBoard, this.selectedProgrammer, true))
        {
            var cb = this;
            this.eventManager.fire('pre_flash');
            this.setOperationOutput("<i class='icon-spinner icon-spin'> </i> Working...");
            this.getbin(function(obj){
                if (obj.success == 0) {
                    cb.setOperationOutput("There was an error compiling.")
                    cb.eventManager.fire('verification_failed', obj.message);
                }
                else
                {
                    cb.eventManager.fire('mid_flash', obj.size);

                    if (cb.pluginHandler.connected == true)
                    {
                        cb.pluginHandler.disconnect(false);
                        setTimeout(function(){
                            cb.pluginHandler.doflash(false, cb.selectedBoard, cb.selectedProgrammer, obj['output'], cb.flash_callback);
                        }, 200);
                    } else {
                        cb.pluginHandler.doflash(false, cb.selectedBoard, cb.selectedProgrammer, obj['output'], cb.flash_callback);
                    }
                }
            })
        }
        else
        {
            this.setOperationOutput("Please select a valid port for the programmer!");
            this.eventManager.fire('plugin_notification', "Please select a valid port for the programmer!");
            window.operationInProgress = false;
        }
    }


    this.getbin = function(callback) {
        window.operationInProgress = true;
        var payload = this.generate_payload("binary");
        var cb = this;
        $.post("https\x3A\x2F\x2Fcodebender.cc\x2Futilities\x2Fcompile\x2F", payload, function (data) {
            try{
                var obj = jQuery.parseJSON(data);
                callback(obj);
            }
            catch(err){
                cb.setOperationOutput('<i class="icon-remove"></i> Unexpected error occurred. Try again later.');
                cb.eventManager.fire('verification_failed', '<i class="icon-remove"></i> Unexpected error occurred. Try again later.');
            }
        })
        .fail(function() {
            cb.setOperationOutput("Connection to server failed.");
            cb.eventManager.fire('verification_failed', "Connection to server failed.");
        })
        .always(function () {
            window.operationInProgress = false;
        });
    }

    this.verify =  function() {
        if (window.operationInProgress || !this.enableShortCuts)
        {
	        return;
        }
        window.operationInProgress = true;

        var board = $("#cb_cf_boards option:selected").text();

        var actionId = 47;
        var metaData = {
            "selectedBoard": board,
            "tabID": this.pluginHandler.tabID
        };
	    createLogFlasher(actionId, metaData);

        this.eventManager.fire('pre_verify');
        this.setOperationOutput("<i class='icon-spinner icon-spin'> </i> Working...");
        var cb = this;
        this.getbin(function(obj){
            if (obj.success == 0) {
                cb.setOperationOutput("Verification failed.");
                cb.eventManager.fire('verification_failed', obj.message);
            }
            else
            {
                cb.setOperationOutput("Verification Successful");
                cb.eventManager.fire('verification_succeed', obj.size);
            }
        });

    }

    this.burn_bootloader = function() {
        if(this.pluginHandler.canBurnBootloader(this.selectedProgrammer))
        {
            var actionId = 25;
            var metaData = {
                "programmer": $('#programmer option:selected').val(),
                "board": $('#cb_cf_boards option:selected').val(),
                "port" : $('#cb_cf_ports option:selected').val(),
                "bootloader_file": ((typeof this.selectedBoard['bootloader']['file']) === "undefined") ? "undefined" : this.selectedBoard['bootloader']['file']
            };
	        createLogFlasher(actionId, metaData);

            this.setOperationOutput("<i class='icon-spinner icon-spin'></i> Working...")
            if (typeof this.selectedBoard['bootloader']['file'] === "undefined")
            {
                document.getElementById('plugin0').saveToHex("");
                window.result = this.pluginHandler.doflashBootloader(this.selectedProgrammer, this.selectedBoard);
            }
            else
            {
                var cb = this;
                $.get("\x2Fbootloader\x2F" + this.selectedBoard['bootloader']['file'].replace(".hex", ".txt"))
                        .success(function(data){
                            document.getElementById('plugin0').saveToHex(data);
                            window.result = cb.pluginHandler.doflashBootloader(cb.selectedProgrammer, cb.selectedBoard);
                        })
                        .error(function(){
                            cb.setOperationOutput("The bootloader file was not found.");
                        });
            }
        }
        else
        {
            this.setOperationOutput("Please select a valid port!")
        }

    }

    this.serial_monitor_disabled = false;
    this.disableCompilerFlasherActions = function(){
        $("#cb_cf_boards").attr("disabled", "disabled");
        $("#cb_cf_verify_btn").attr("disabled", "disabled");
        if(compilerflasher.pluginHandler.plugin_running)
        {
            $("#cb_cf_ports").attr("disabled", "disabled");
            $("#cb_cf_flash_btn").attr("disabled", "disabled");
            $("#cb_cf_programmers").attr("disabled", "disabled");
            $("#cb_cf_flash_with_prog_btn").attr("disabled", "disabled");
            $("#cb_cf_baud_rates").attr("disabled", "disabled");
            $("#cb_cf_serial_monitor_connect").attr("disabled", "disabled");
            that.serial_monitor_disabled = true;
        }

    }

    this.enableCompilerFlasherActions = function(){
        $("#cb_cf_boards").removeAttr("disabled");
        $("#cb_cf_verify_btn").removeAttr("disabled");
        if(compilerflasher.pluginHandler.plugin_running)
        {
            $("#cb_cf_ports").removeAttr("disabled");
            $("#cb_cf_flash_btn").removeAttr("disabled");
            $("#cb_cf_programmers").removeAttr("disabled");
            $("#cb_cf_flash_with_prog_btn").removeAttr("disabled");
            $("#cb_cf_baud_rates").removeAttr("disabled");
            $("#cb_cf_serial_monitor_connect").removeAttr("disabled");
            that.serial_monitor_disabled = false;
        }
    }

    this.on("pre_verify", this.disableCompilerFlasherActions);
    this.on("verification_succeed", this.enableCompilerFlasherActions);
    this.on("verification_failed", this.enableCompilerFlasherActions);
    this.on("pre_flash", this.disableCompilerFlasherActions);
    this.on("flash_failed", this.enableCompilerFlasherActions);
    this.on("flash_succeed", this.enableCompilerFlasherActions);
    this.on("pre_hex", this.disableCompilerFlasherActions);
    this.on("hex_succeed", this.enableCompilerFlasherActions);
    this.on("hex_failed", this.enableCompilerFlasherActions);

    window.operationInProgress = false;
};


function boardsListCallback(data) {
	var plainList = getPlainBoardList(data);
    compilerflasher.setBoardsList(plainList);

    $('#cb_cf_boards').find('option').remove().end();
    var found = false;
    if ($("#cb_cf_boards").data().board){
        for (var i = 0; i < compilerflasher.boards_list.length; i++) {
            if (compilerflasher.boards_list[i]["name"] == $("#cb_cf_boards").data().board)
            {
                compilerflasher.selectedBoard = compilerflasher.boards_list[i];
                $('#cb_cf_boards').hide();
                found = true;
            }

        }
    }
    if(!found)
    {
	    $.each(data, function(vendorName, vendorBoards) {
		    if (Object.keys(vendorBoards).length != 0) {
			    var optgroup = $('<optgroup>');
			    optgroup.attr('label', vendorName);

			    $.each(vendorBoards, function (index, board) {
				    var option = $('<option></option>');
				    option.val(board['name']).html(board['name']);
				    optgroup.append(option);
			    });
			    $("#cb_cf_boards").append(optgroup);
		    }
	    });

        compilerflasher.loadBoard();


        var board = compilerflasher.getDefaultBoard();
        if(board !== 'undefined' && $("#cb_cf_boards option[value='"+board+"']").length == 1)
        {
            $("#cb_cf_boards").val(board);
            compilerflasher.saveBoard();
        }

        $('#cb_cf_boards').removeAttr('disabled');
	    $('#cb_cf_verify_btn').removeAttr('disabled');
    }

	compilerflasher.init();
}

/*
	Extracts the board list in the old format (that is, an array of board objects)
	from the response of the boardlist action. Note that the response of the
	boardslist action is a JSON encoded array of board vendors and each vendor
	element contains the boards manufactured by the vendor.
 */
function getPlainBoardList(data) {
	var boards = [];
	$.each(data, function(vendorName, vendorBoards) {
			$.each(vendorBoards, function(index, board) {
				boards.push(board);
				}
			);
		}
	);
	return boards;
}

function programmersListCallback(data){
    compilerflasher.programmers_list = data;
    $('#cb_cf_programmers').find('option').remove().end();
    for (var i = 0; i < compilerflasher.programmers_list.length; i++) {
	    $("#cb_cf_programmers").append($('<option></option>').val(compilerflasher.programmers_list[i]["name"]).html(compilerflasher.programmers_list[i]["name"]));
    }
    compilerflasher.loadProgrammer();
}

function createLogFlasher(actionId, metaData, callback)
{
	if (typeof createLog === 'function')
	{
		createLog(actionId, metaData, callback);
	}
}

// Decodes an HTML string
function decodeHtml(html)
{
	var text = html.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
	return text;
}

// Escape an HTML string
function escapeHtml (html) {
	return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function logging()
{
    var payload = generate_payload('binary', true);

    $.post("\x2Futilities\x2Fcompile\x2F", payload, function (data) {
        var obj = jQuery.parseJSON(data);
    });
}
window.flashing_errors =
{
	"-1": "Couldn’t find an Arduino on the selected port. If you are using Leonardo check that you have the correct port selected. If it is correct, try pressing the board’s reset button after initiating the upload.",
	"-2": "There was a problem programming your Arduino. If you are using a non-English Windows version, or username please contact us.",
	"-22": "The selected port seems to be in use. Please check your board connection, and make sure that you are not using it from some other application or you don't have an open serial monitor.",
	"-23": "Another flashing process is still active. Please wait until it is done and try again.",
	"-55": "The specified port might not be available. Please check if it is used by another application. If the problem persists, unplug your device and plug it again.",
	"-56": "The specified port is in use or you do not have enough permissions to use the device. Please check if it is used by another application or correct its permissions.",
	"-57": "The specified port might not be available. Please check if it is used by another application. If the problem persists, unplug your device and plug it again.",
	"-200": "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	"-204": "Could not program your device, the process timed out. Make sure that you have connected it properly, that you have selected the correct settings (device type and port) and try again.",
	1: "Could not connect to your device. Make sure that you have connected it properly, that you have selected the correct settings (device type and port) and try again.",
	100: "Could not connect to your device. Make sure that you have connected it properly, that you have selected the correct settings (device type and port) and try again.",
	126: "Something seems to be wrong with the plugin installation. You need to install the plugin again.",
	127: "Something seems to be wrong with the plugin installation. You need to install the plugin again.",
	256: "Could not connect to your device. Make sure that you have connected it properly, that you have selected the correct settings (device type and port) and try again.",
	1001: "Your device is unresponsive. Please make sure you have selected the correct device and it is connected properly.",
	1002: "Your device is unresponsive. Please make sure you have selected the correct device and it is connected properly.",
	2001: "The selected port seems to be in use. Please make sure that you are not using it from some other program.",
	3005: "This baudrate is not supported by the operating system.",
	20000: "Your device is unresponsive. Please make sure you have selected the correct device and it is connected properly.",
	20001: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20002: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20003: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20004: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20005: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20006: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20007: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20008: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20009: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	20010: "Your device sends data faster than your computer can proccess.",
	20500: "There was a problem during the flashing process. Please make sure you have selected the correct device, close other tabs that may use it, reload the page and try again. If the problem persists, please contact us.",
	32001: "The selected port seems to be in use. Please make sure that you are not using it from some other program.",
	33005: "This baudrate is not supported by the operating system.",
	36000: "Could not connect to your device. Make sure that you have connected it properly, that you have selected the correct settings (device type and port) and try again."
};

    //Scrolling function
    (function ($) {
        var h = $.scrollTo = function (a, b, c) {
            $(window).scrollTo(a, b, c);
        };
        h.defaults = {
	        axis: 'xy',
	        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
	        limit: true
        };
        h.window = function () {
            return $(window)._scrollable();
        };
        $.fn._scrollable = function () {
            return this.map(function () {
                var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
                if (!isWin)return a;
                var b = (a.contentWindow || a).document || a.ownerDocument || a;
                return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCo    mpat' ? b.body : b.documentElement;
            })
        };
        $.fn.scrollTo = function (e, f, g) {
            if (typeof f == 'object') {
                g = f;
                f = 0;
            }
            if (typeof g == 'function') {
	            g = {
		            onAfter: g
	            };
            }
            if (e == 'max') {
	            e = 9e9;
            }
            g = $.extend({}, h.defaults, g);
            f = f || g.duration;
            g.queue = g.queue && g.axis.length > 1;
            if (g.queue) {
	            f /= 2;
            }
            g.offset = both(g.offset);
            g.over = both(g.over);
            return this._scrollable().each(function () {
                if (e === null) {
	                return;
                }
                var d = this, $elem = $(d), targ = e, toff, attr = {}, win = $elem.is('html,body');
                switch (typeof targ) {
                    case'number':
                    case'string':
                        if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                            targ = both(targ);
                            break;
                        }
                        targ = $(targ, this);
                        if (!targ.length) {
	                        return;
                        }
                    case'object':
                        if (targ.is || targ.style) {
	                        toff = (targ = $(targ)).offset();
                        }
	                    break;
                }
                $.each(g.axis.split(''), function (i, a) {
                    var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = h.max(d, a);
                    if (toff) {
                        attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                        if (g.margin) {
                            attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                            attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0;
                        }
                        attr[key] += g.offset[pos] || 0;
                        if (g.over[pos]) {
	                        attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos];
                        }
                    } else {
                        var c = targ[pos];
                        attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c;
                    }
                    if (g.limit && /^\d+$/.test(attr[key])) {
	                    attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                    }
                    if (!i && g.queue) {
                        if (old != attr[key]) {
	                        animate(g.onAfterFirst);
                        }
                        delete attr[key];
                    }
                });
                animate(g.onAfter);
                function animate(a) {
                    $elem.animate(attr, f, g.easing, a && function () {
                        a.call(this, e, g);
                    })
                }
            }).end()
        };
        h.max = function (a, b) {
            var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c;
            if (!$(a).is('html,body')) {
	            return a[scroll] - $(a)[c.toLowerCase()]();
            }
            var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body;
            return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
        };
        function both(a) {
            return typeof a == 'object' ? a : {top: a, left: a};
        }
    })(jQuery);
