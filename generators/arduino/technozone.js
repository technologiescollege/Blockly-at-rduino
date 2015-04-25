Blockly.Arduino.technozone_lcdinit = function() {
  var dropdown_I2C_adress = this.getTitleValue('I2C_adress');
  var dropdown_nbcol = this.getTitleValue('nbcol');
  var dropdown_nblig = this.getTitleValue('nblig');
  var dropdown_cursor = this.getTitleValue('cursor');
  var dropdown_blink = this.getTitleValue('blink');
  var dropdown_backlight = this.getTitleValue('backlight');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>\n';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd('+dropdown_I2C_adress+','+dropdown_nbcol+','+dropdown_nblig+');\n';
  var mysetup='lcd.init();\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='lcd.backlight();\n';
  } else
  {
    mysetup+='lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='lcd.cursor();\n';
  } else
  {
    mysetup+='lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='lcd.blink();\n';
  } else
  {
    mysetup+='lcd.noBlink();\n';
  }
  Blockly.Arduino.setups_['setup_lcd'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.technozone_lcdspecial = function() {
  var dropdown_special = this.getTitleValue('special');
  var code="lcd."+dropdown_special+"();\n";
  return code;
};

Blockly.Arduino.technozone_lcdclear = function() {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.technozone_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = this.getTitleValue('COL');
  var dropdown_lig = this.getTitleValue('LIG');    
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};


Blockly.Arduino.technozone_led1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1yellow = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_led1yellow_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_relay1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_stat = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_relay1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_buzzer1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  //var dropdown_stat = this.getTitleValue('STAT');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.technozone_sonar1 = function() {
  var dropdown_triger_pin = this.getTitleValue('TRIGER');
  var dropdown_dist_pin = this.getTitleValue('DIST');
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

Blockly.Arduino.technozone_servo1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo1'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo1_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_btn1white = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1black = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1black_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1green = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1red = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_btn1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_switch1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ils1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_ils1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_proxi1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_proxi1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bari1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_bari1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_lig1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_cmouv1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  Blockly.Arduino.setups_['setup_cmouv1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_potar1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ctn1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  /*
	  temperature=round(-134*Analog_read/1023+116);
  */
  var code = 'round(116-(134*analogRead('+dropdown_pin+')/1023))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ldr1 = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot2 = function() {
  var dropdown_pindir = this.getTitleValue('PINDIR');
  var dropdown_pinpwm = this.getTitleValue('PINPWM');
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

Blockly.Arduino.technozone_pap1cc = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA(CW);      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA(CCW);      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  } else
  {
    //moteur B
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB(CW);      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB(CCW);      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continuous mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_pap1relatif = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_moteur = this.getTitleValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_pas = Blockly.Arduino.valueToCode(this, 'PAS', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirA(CW);      //set Motor A Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirA(CCW);      //set Motor A Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedA('+value_vitesse+');     //Set Motor A speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepA('+value_pas+');         //Set step number for motor A \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  } else
  {
    //moteur B
    if (value_sens=="(true)") 
    {
       //Sens Horaire
       code+='MyStepper_'+dropdown_i2cadd+'.DirB(CW);      //set Motor B Clockwise\n';
    } else
    { 
      //Sens Antihoraire
      code+='MyStepper_'+dropdown_i2cadd+'.DirB(CCW);      //set Motor B Counter-Clockwise\n';
    }
    code+='MyStepper_'+dropdown_i2cadd+'.SpeedB('+value_vitesse+');     //Set Motor B speed\n';
    code+='MyStepper_'+dropdown_i2cadd+'.StepB('+value_pas+');         //Set step number for motor B \n';
    code+='MyStepper_'+dropdown_i2cadd+'.SetMode(RELATIVE);   //Enter in Relative mode, Motor run as previously set\n';
  }
  return code;
};

Blockly.Arduino.technozone_pap1init = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var dropdown_mode = this.getTitleValue('MODE');
  var dropdown_relax = this.getTitleValue('RELAX');
  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['define_Pap1'] = '#include <Pap1.h>\n';
  Blockly.Arduino.definitions_['define_MyStepper_'+dropdown_i2cadd] = 'Pap1 MyStepper_'+dropdown_i2cadd+'(16);\n';
  Blockly.Arduino.setups_["setup_wire_begin"+dropdown_i2cadd] = "Wire.begin(); // join i2c bus before calling the stepper constructor";
  Blockly.Arduino.setups_["setup_pap1_"+dropdown_i2cadd] = "MyStepper_"+dropdown_i2cadd+".Begin("+dropdown_mode+","+dropdown_relax+");\n"+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(IDLE); //Motor stopped by default\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedA(0);     //Motor A speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SpeedB(0);     //Motor B speed to 0\n'+
  'MyStepper_'+dropdown_i2cadd+'.SetMode(CC);   //Enter in Continious Current Mode\n';
  var code = ""; 
  return code;
};

Blockly.Arduino.technozone_pap1busy = function() {
  var dropdown_i2cadd = this.getTitleValue('I2CADD');
  var code = ""; 
  code='MyStepper_'+dropdown_i2cadd+'.Busy()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot1easybot1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=12;
   dropdown_pinpwm=5;
  } else {
   //moteur B
   dropdown_pindir=13;
   dropdown_pinpwm=6;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};


Blockly.Arduino.technozone_mot1easycon1 = function() {
  var dropdown_mot = this.getTitleValue('MOT');
  var dropdown_pindir; 
  var dropdown_pinpwm;
  if (dropdown_mot==="HIGH") {
   //moteur A
   dropdown_pindir=52;
   dropdown_pinpwm=13;
  } else {
   //moteur B
   dropdown_pindir=53;
   dropdown_pinpwm=12;
  }
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_mot1_"+dropdown_pindir] = "pinMode("+dropdown_pindir+",OUTPUT);//MOT2 DIR pin\n"+
  "  pinMode("+dropdown_pinpwm+",OUTPUT);//MOT2 PWM pin\n";
  var code = "";
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  code="cmd_mot("+dropdown_pindir+","+dropdown_pinpwm+","+value_sens+","+value_vitesse+");\n";
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino.technozone_telec2 = function() {
  //var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHE');
  var code = ""; 
  code='IRkey("'+dropdown_touche+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecsetup = function() {
  var dropdown_pin = this.getTitleValue('PIN');
  var code = ""; 
    Blockly.Arduino.setups_["setup_telec2_"+dropdown_pin] = "pinMode("+dropdown_pin+",INPUT);//IR télécommande pin\n"+
  '  IRrecv irrecv('+dropdown_pin+');\n'+
  '  irrecv.enableIRIn();\n'+
  '  irrecv.resume();\n';
  Blockly.Arduino.definitions_['define_IRkeypressed'] ='boolean IRkeypressed()\n'+
  '{\n'+
  '  if (irrecv.decode(&results)) {return true;} else {return false;}\n'+
  '}'; 
  Blockly.Arduino.definitions_['define_telec'] = '#include <IRremote.h>\n'+
  '//Déclaration de la broche utilisée pour le récepteur infrarouge\n'+
  'int RECV_PIN = '+dropdown_pin+'; //Broche du récepteur Infrarouge\n'+
  'IRrecv irrecv(RECV_PIN);\n'+
  'decode_results results;\n'; 
  Blockly.Arduino.definitions_['define_IRkey'] ='boolean IRkey(String thekey)\n'+
  '{\n'+
  'if (irrecv.decode(&results))\n'+
  '  {\n'+
  '    //Une touche dans le tampon\n'+
  '    String s=String(long(results.value), HEX);\n'+
  '    s.toUpperCase();\n'+
  '    if (s.equals(thekey))\n'+ 
  '    {\n'+
  '      irrecv.resume(); //vide le tampon de la télécommande\n'+
  '      return true;\n'+
  '    } else {return false;}\n'+
  '  } else {return false;}\n'+
  ' }\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telec1= function() {
  //var dropdown_pin = this.getTitleValue('PIN');
  var dropdown_touche = this.getTitleValue('TOUCHE');
  var code = ""; 
  code='IRkey("'+dropdown_touche+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecinit = function() {
  var code = ""; 
  code='IRkeypressed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecflush = function() {
  var code='irrecv.resume(); //vide le tampon de la télécommande\n';
  return code;
};