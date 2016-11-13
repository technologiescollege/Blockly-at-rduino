'use strict';

goog.provide('Blockly.Arduino.dfplayer');

goog.require('Blockly.Arduino');

Blockly.Arduino.lp2i_mp3_init = function() {
  var pin_rx = Blockly.Arduino.valueToCode(this, 'Pin_Rx', Blockly.Arduino.ORDER_ATOMIC);
  var pin_tx = Blockly.Arduino.valueToCode(this, 'Pin_Tx', Blockly.Arduino.ORDER_ATOMIC);
  var pin_busy = Blockly.Arduino.valueToCode(this, 'Pin_Busy', Blockly.Arduino.ORDER_ATOMIC);  
  var volume = Blockly.Arduino.valueToCode(this, 'Volume', Blockly.Arduino.ORDER_ATOMIC);    
  Blockly.Arduino.includes_['serial_mp3'] = '#include <SoftwareSerial.h>;\n SoftwareSerial mySerial('+pin_tx+', '+pin_rx+');\n'; 
  Blockly.Arduino.definitions_['busy_mp3'] = 'int Pin_Busy_mp3;\n';
  Blockly.Arduino.includes_['define_mp3'] = '#include <DFPlayer_Mini_Mp3.h>\n'; 
  //dans le setup
  Blockly.Arduino.setups_['setup_busy'] = 'Pin_Busy_mp3 = '+pin_busy+';\n pinMode('+pin_busy+', INPUT);\n'
  Blockly.Arduino.setups_['setup_mp3'] = 'void mp3_reset();\n Serial.begin(9600);\n mySerial.begin(9600);\n mp3_set_serial(mySerial);\n mp3_set_volume('+volume+');\n';
    return '';
};

Blockly.Arduino.lp2i_mp3_play = function() {
  var file = Blockly.Arduino.valueToCode(this, 'File', Blockly.Arduino.ORDER_ATOMIC);
  //var pin_busy = Blockly.Arduino.valueToCode(Blockly.Arduino.lp2i_mp3_init, 'Pin_Busy', Blockly.Arduino.ORDER_ATOMIC);
  var wait = Blockly.Arduino.valueToCode(this, 'Wait', Blockly.Arduino.ORDER_ATOMIC);
  if (wait =="true")
	{
		var code = 'while(digitalRead(Pin_Busy_mp3) == 0)\n'
			code += '{delay(10);} \n'
			code += 'mp3_play('+file+');\n';		
	}
  else
	{
		var code = 'mp3_play('+file+');\n';
	}
	code += 'delay(10); \n'
  return code;
};

Blockly.Arduino.lp2i_mp3_volume = function() {
  var volume = Blockly.Arduino.valueToCode(this, 'Volume', Blockly.Arduino.ORDER_ATOMIC);       
  var code = 'mp3_set_volume('+volume+');\n delay(10);\n'; 
  return code;
};