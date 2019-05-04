'use strict';

goog.provide('Blockly.Arduino.arduino_serial');

goog.require('Blockly.Arduino');

Blockly.Arduino['serial_init'] = function() {
  var dropdown_speed = this.getFieldValue('SPEED');
  Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(' + dropdown_speed + ');' ;
  return "";
};

Blockly.Arduino['serial_printfor'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
  //Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_read'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_readStringUntil'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  content = content.replace('"', '\'');
  content = content.replace('"', '\'');
  var code = 'Serial.readStringUntil(' + content + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_available'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_print'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.print(' + content + ');\n';
  return code;
};

Blockly.Arduino['serial_print_tab'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.print(' + content + ');\nSerial.print("\\t");\n';
  return code;
};

Blockly.Arduino.serial_println = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  var code = 'Serial.println(' + content + ');\n';
  return code;
};

// Ajouté par LP2I le 07/02/16
Blockly.Arduino.serial_print_var = function() {
  var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var new_line = Blockly.Arduino.valueToCode(this, 'NEW_LINE', Blockly.Arduino.ORDER_ATOMIC);
  if (new_line =="true")
	{
		var code =  'Serial.print('+value_text+');\n Serial.println('+value_n+');\n';
	}
	else
	{
		var code =  'Serial.print(' + value_text + ');\n Serial.print('+value_n+');\n';
	}
  return code;
};

Blockly.Arduino['serial_write'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');  
  var code = 'Serial.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_write_out'] = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'valeur', Blockly.Arduino.ORDER_NONE);	
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'Serial.write('+value_num+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_flush'] = function() {
  var code = 'Serial.flush();\n';
  return code;
};

Blockly.Arduino.serial_line = function(block) {
    var code = '"\\n"';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino.serial_print_multi = function() {
  var value_n = Blockly.Arduino.valueToCode(this, 'N', Blockly.Arduino.ORDER_ATOMIC);
  var new_line = this.getFieldValue('newline');
  if (new_line =="true")
	{
		var code =  'Serial.println('+value_n+');\n';
	}
	else
	{
		var code =  'Serial.print('+value_n+');\n';
	}
  return code;
};
