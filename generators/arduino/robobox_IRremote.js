'use strict';

goog.provide('Blockly.robobox.IRremote');

goog.require('Blockly.robobox');

Blockly.Arduino.robobox_IRremote_decode = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote' + pin] = "IRrecv irrecv" + pin + "(" + pin + ");\ndecode_results results" + pin + ";";
    Blockly.Arduino.setups_["setup_IRremote_" + pin] = "irrecv" + pin + '.enableIRIn();';

    var code = "irrecv" + pin + ".decode(&results" + pin + ")"
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_IRremote_signalLen = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote' + pin] = "IRrecv irrecv" + pin + "(" + pin + ");\ndecode_results results" + pin + ";";
    Blockly.Arduino.setups_["setup_IRremote_" + pin] = "irrecv" + pin + '.enableIRIn();';
    var code = "results" + pin + ".rawlen";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_IRremote_signalArray = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote' + pin] = "IRrecv irrecv" + pin + "(" + pin + ");\ndecode_results results" + pin + ";";
    Blockly.Arduino.setups_["setup_IRremote_" + pin] = "irrecv" + pin + '.enableIRIn();';
    var code = "results" + pin + ".rawbuf";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_IRremote_signalCode = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote' + pin] = "IRrecv irrecv" + pin + "(" + pin + ");\ndecode_results results" + pin + ";";
    Blockly.Arduino.setups_["setup_IRremote_" + pin] = "irrecv" + pin + '.enableIRIn();';
    var code = "results" + pin + ".value";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robobox_IRremote_resume = function() {
    var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = "irrecv" + pin + '.resume();\n';
    return code;
};

Blockly.Arduino.robobox_IRremote_send = function() {
    var sig = this.getFieldValue('SIGNAL');
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote_send'] = "IRsend irsend;";
    if (sig == 'signalOn')
    	Blockly.Arduino.definitions_['var_IRremote_signalOn'] = "unsigned int signalOn[10] = {4450,4500,550,1700,500,1750,500,1750,500,600};";
    var code = "irsend.sendRaw(" + sig + ", 10, 38);\n";
    return code;
};

Blockly.Arduino.robobox_IRremote_sendArray = function() {
    Blockly.Arduino.includes_['robobox_IRremote'] = '#include <IRremote.h>';
    Blockly.Arduino.definitions_['var_IRremote_send'] = "IRsend irsend;";
    var array = Blockly.Arduino.valueToCode(this, 'ARRAY', Blockly.Arduino.ORDER_ATOMIC);
    var size = Blockly.Arduino.valueToCode(this, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
    var code = "irsend.sendRaw(" + array + ', ' + size + ', 38);\n';
    return code;
};
