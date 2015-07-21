
//www.bq.com/fr

'use strict';

Blockly.Arduino.bq_led = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.bq_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  //var dropdown_stat = this.getFieldValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.bq_ultrason = function() {
  var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('TRIGER');
  var dropdown_dist_pin = Blockly.Arduino.valueToCode(this, 'DIST', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('DIST');
  Blockly.Arduino.setups_["setup_sonar1"] = "pinMode("+dropdown_triger_pin+",OUTPUT);//Sonar triger pin\n"+
  "  pinMode("+dropdown_dist_pin+",INPUT);//Sonar distance pulse pin\n";
  var code = "";
  
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int mesure_distance_cm(byte trig_pin,byte dist_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}\n";
  code="mesure_distance_cm("+dropdown_triger_pin+","+dropdown_dist_pin+")";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = '0';
  //delay_time = delay_time.replace('(','').replace(')','');

  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';

  var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.bq_bouton_poussoir = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_capteur_de_ligne = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_potentiometre = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_luminosite = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bq_servo_rotation_continue = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  if (value_sens =="(true)")
		{
		//value_degree = 'map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+dropdown_pin+'.write(90 + map('+value_degree+', 0, 255, 0 , 90));\n'+'delay(' + delay_time + ');\n';
		}
		else
		{
		//value_degree = '90 - map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+dropdown_pin+'.write(90 - map('+value_degree+', 0, 255, 0 , 90));\n'+'delay(' + delay_time + ');\n';
		}
  // var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};
