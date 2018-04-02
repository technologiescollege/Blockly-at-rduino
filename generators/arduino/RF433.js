'use strict';

goog.provide('Blockly.Arduino.RF433');

goog.require('Blockly.Arduino');

Blockly.Blocks.rf433rxready = function() {
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  
  inSetupCode  ('  vw_set_rx_pin (' + pin + ');');
  inSetupCode  ('  vw_setup(2000);' ); 
  inSetupCode  ('  vw_rx_start(); // Start the receiver PLL running\n' );
  includeClass ('#include <VirtualWire.h>' );  
      
  return ['vw_have_message()', Blockly.Python.ORDER_NONE];
};

Blockly.Blocks.rf433rx = function() {
  
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  
  inSetupCode  ('  vw_set_rx_pin (' + pin + ');');
  inSetupCode  ('  vw_setup(2000);' ); 
  inSetupCode  ('  vw_rx_start(); // Start the receiver PLL running\n' );
  includeClass ('#include <VirtualWire.h>' );  
  
  setupTheCode (  
    'uint8_t buf[100];\n' + 
    'uint8_t buflen = 100;\n' + 
    'char *msgReceived () {\n' +
    '  buf[0] = 0;\n' +      
    '  if (vw_get_message(buf, &buflen)) { // Non-blocking \n' + 
    '     buf[buflen] = 0;\n' + 
    '  }\n' + 
    '  return &buf[0];\n' +     
    '}\n' );
      
  return ['msgReceived()', Blockly.Python.ORDER_NONE];
};

Blockly.Blocks.rf433tx = function() {
  
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var msg = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);  
  includeClass ('#include <VirtualWire.h>' );  
  inSetupCode  ('  vw_set_tx_pin (' + pin + ');');
  inSetupCode  ('  vw_setup(2000);' ); 
  msg = insideChars (msg, "\"", "\"");
  // alert ( 'msg.length: ' + msg.length + '[' + msg + '] [' + msg.charCodeAt(0) + ',' + msg.charCodeAt(1) + ',' + msg.charCodeAt(2) + ']' );
  var code = "vw_send((uint8_t *)\"" + msg + "\"," + msg.length + ");\n";
  return code + '\n';
};