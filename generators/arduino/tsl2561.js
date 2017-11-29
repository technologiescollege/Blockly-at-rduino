/**
 * Block pour composant TSL2561
 * http://www.
 * @author Julien bennica (julien.bennica@gmail.com)
 */
'use strict';

goog.provide('Blockly.Arduino.tsl2561');

goog.require('Blockly.Arduino');

Blockly.Arduino['tsl2561_init'] = function() {
  Blockly.Arduino.includes_['tsl_include'] = '#include <Wire.h>\n'
  + '#include <Adafruit_Sensor.h>\n'
  + '#include <Adafruit_TSL2561_U.h>';
  Blockly.Arduino.definitions_['tsl_def'] = 'Adafruit_TSL2561_Unified tsl = Adafruit_TSL2561_Unified(TSL2561_ADDR_FLOAT, 12345);';
  Blockly.Arduino.setups_['setup_tsl'] = 'tsl.enableAutoRange(true);\n'
	+ '  tsl.setIntegrationTime(TSL2561_INTEGRATIONTIME_13MS);';
  var code = 'sensors_event_t event;\n'
    + 'tsl.getEvent(&event);\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['tsl2561_read'] = function() {
  var code = 'event.light';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
