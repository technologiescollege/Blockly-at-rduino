//http://www.fischertechnik.de/en/Home.aspx

'use strict';

goog.provide('Blockly.Arduino.fischertechnik');

goog.require('Blockly.Arduino');

Blockly.Arduino.fischertechnik_feu_rouge = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.fischertechnik_feu_vert = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.fischertechnik_feu_orange = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.fischertechnik_barriere_lumineuse = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.fischertechnik_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  //var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.fischertechnik_BP_capteur_de_presence = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.fischertechnik_capteur_magnetique = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.fischertechnik_capteur_de_lumiere = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  
Blockly.Arduino.fischertechnik_moteurs_CC = function() {
  var dropdown_pindir = Blockly.Arduino.valueToCode(this, 'PINDIR', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pinpwm = Blockly.Arduino.valueToCode(this, 'PINPWM', Blockly.Arduino.ORDER_ATOMIC);
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot2_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = ""; 
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  return code;
};
