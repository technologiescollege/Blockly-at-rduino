'use strict';

goog.provide('Blockly.Arduino.virtuino');

goog.require('Blockly.Arduino');

Blockly.Arduino['virtuino_init']=function(block){
    var valuerx = Blockly.Arduino.valueToCode(block, 'RX', Blockly.Arduino.ORDER_ATOMIC);
    var valuetx = Blockly.Arduino.valueToCode(block, 'TX', Blockly.Arduino.ORDER_ATOMIC);
    var valuespeed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_['virtuino'] = '#include <VirtuinoCM.h>\n'
		+ '#include <VirtuinoBluetooth.h>\n'
		+ '#include <SoftwareSerial.h> ';
    Blockly.Arduino.variables_['virtuino'] = 'SoftwareSerial VirtualSerial(' + valuetx + ', ' + valuerx + ');\n'
		+ 'VirtuinoBluetooth virtuino(VirtualSerial, ' + valuespeed + ');';
    Blockly.Arduino.setups_['virtuino']='VirtualSerial.begin(9600);';
    var code = 'virtuino.run();\n';
    return code
};

Blockly.Arduino['virtuino_read_state_dv']=function(block){
    var valuedv = Blockly.Arduino.valueToCode(block, 'DV', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'virtuino.vDigitalMemoryRead(' + valuedv + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

