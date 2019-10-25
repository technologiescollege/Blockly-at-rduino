/**
 * Block pour capteur de température DS18B20
 * @author Damien VARREL (damien@varrel.fr) et Julien Bennica (julien.bennica@ac-nantes.fr)
 */
'use strict';

goog.provide('Blockly.Arduino.ds18b20');

goog.require('Blockly.Arduino');

Blockly.Arduino['ds18b20_search1'] = function() {
  var ds18b20_pin = this.getFieldValue('ds18b20_pin');
  var addr = this.getFieldValue('address');
  Blockly.Arduino.includes_['ds_include'] = '#include <OneWire.h>\n';
  Blockly.Arduino.definitions_['ds_def'] = 'OneWire  ds('+ds18b20_pin+');  // on pin '+ds18b20_pin+' (a 4.7K resistor is necessary)\n'
  Blockly.Arduino.definitions_['ds_def'+addr+''] = 'byte addr'+addr+'[8];\n';
  var code = 'ds.search(addr'+addr+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ds18b20_temp1'] = function() {
  var addr = this.getFieldValue('address');
  Blockly.Arduino.definitions_['ds_temp'] =
	'float dstemp(byte addr[8]) {\n'
	+ '  byte data[12],i;\n'
	+ '   ds.reset();\n'
    + '   ds.select(addr);\n'
    + '   ds.write(0x44,0);//start conversion\n'
    + '   delay(1000);     // maybe 750ms is enough, maybe not  \n'
    + '   ds.reset();\n'
    + '   ds.select(addr);    \n'
    + '   ds.write(0xBE);         // Read Scratchpad\n'
    + '   for ( i = 0; i < 9; i++) {           // we need 9 bytes\n'
    + '    data[i] = ds.read();\n'
    + '   }\n'
    + '   int16_t raw = (data[1] << 8) | data[0];\n'
    + '   byte cfg = (data[4] & 0x60);\n'
    + '   if (cfg == 0x00) raw = raw & ~7;  // 9 bit resolution, 93.75 ms\n'
    + '   else if (cfg == 0x20) raw = raw & ~3; // 10 bit res, 187.5 ms\n'
    + '   else if (cfg == 0x40) raw = raw & ~1; // 11 bit res, 375 ms\n'
    + '   return (float)raw / 16.0;\n'
	+ '}';
  var code = 'dstemp(addr'+addr+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
