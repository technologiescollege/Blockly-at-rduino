'use strict';

goog.provide('Blockly.Arduino.technozone51');

goog.require('Blockly.Arduino');

Blockly.Arduino.technozone_lcdinit = function() {
  var dropdown_I2C_adress = this.getFieldValue('I2C_adress');
  var dropdown_nbcol = this.getFieldValue('nbcol');
  var dropdown_nblig = this.getFieldValue('nblig');
  var dropdown_cursor = this.getFieldValue('cursor');
  var dropdown_blink = this.getFieldValue('blink');
  var dropdown_backlight = this.getFieldValue('backlight');
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd('+dropdown_I2C_adress+', 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);';
  var mysetup='lcd.begin('+dropdown_nbcol+','+dropdown_nblig+');\n';
  if (dropdown_backlight=="TRUE")
  {
    mysetup+='  lcd.backlight();\n';
  } else
  {
    mysetup+='  lcd.noBacklight();\n';
  }
  if (dropdown_cursor=="TRUE")
  {
    mysetup+='  lcd.cursor();\n';
  } else
  {
    mysetup+='  lcd.noCursor();\n';
  }
  if (dropdown_blink=="TRUE")
  {
    mysetup+='  lcd.blink();\n';
  } else
  {
    mysetup+='  lcd.noBlink();\n';
  }
  Blockly.Arduino.setups_['setup_lcd'] = mysetup;
  var code="";
  return code;
};

Blockly.Arduino.technozone_lcdspecial = function() {
  var dropdown_special = this.getFieldValue('special');
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
  var dropdown_col = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';
  var dropdown_lig = Blockly.Arduino.valueToCode(this, 'LIG',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '0';    
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_lcdwrite = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';
  var dropdown_col = Blockly.Arduino.valueToCode(this, 'COL',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var dropdown_lig = Blockly.Arduino.valueToCode(this, 'LIG',
      Blockly.Arduino.ORDER_UNARY_POSTFIX);
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <ShiftRegLCD123.h>\n'; 
  Blockly.Arduino.definitions_['var_lcd_robot'] = 'ShiftRegLCD123 lcd(12,13,SRLCD123);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_lcd_robot"] = "lcd.begin(16,2);";
  var code = 'lcd.setCursor('+dropdown_col+','+dropdown_lig+');\n'+
  'lcd.print('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_lcdspecial = function() {
  var dropdown_special = this.getFieldValue('special');
  var code="lcd."+dropdown_special+"();";
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <ShiftRegLCD123.h>\n'; 
  Blockly.Arduino.definitions_['var_lcd_robot'] = 'ShiftRegLCD123 lcd(12,13,SRLCD123);\n';
  //dans le setup    
  Blockly.Arduino.setups_["setup_lcd_robot"] = "lcd.begin(16,2);";    
  return code;
};

Blockly.Arduino.technozone_robot_lcdclear = function() {
  var code = 'lcd.clear();';
  Blockly.Arduino.includes_['define_LiquidCrystal'] = '#include <LiquidCrystal.h>\n'; 
  Blockly.Arduino.definitions_['var_lcd_robot'] = 'LiquidCrystal lcd(12,11,5,13,3,2);\n';  
  //dans le setup    
  Blockly.Arduino.setups_["setup_lcd_robot"] = "lcd.begin(16,2);";    
  return code;
};

Blockly.Arduino.technozone_led1red = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1green = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_led1yellow = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_led1yellow_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_relay1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_relay1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);'; //code à insérer dans le setup Arduino
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'  //code à insérer dans la loop Arduino
  return code;
};

Blockly.Arduino.technozone_buzzer1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  //var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);;
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC); 
  //dans fonctions
   Blockly.Arduino.definitions_['define_playTone'] = "void playTone(int pintone,int freq, int duration) {\n"+
   " int tone=500000/freq;\n"+       
   " for (long i = 0; i < duration * 1000L; i += tone * 2) {\n"+
   " digitalWrite(pintone, HIGH);\n"+
   " delayMicroseconds(tone);\n"+
   " digitalWrite(pintone, LOW);\n"+
   " delayMicroseconds(tone);\n"+
   " }\n"+
   "}\n";    
  //dans setup    
  Blockly.Arduino.setups_['setup_buzzer_pin_'+dropdown_pin] = 'pinMode('+dropdown_pin+',OUTPUT);';
  var code = 'playTone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;    
    
};

Blockly.Arduino.technozone_robot_buzzer_tone = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
  //dans fonctions
   Blockly.Arduino.definitions_['define_playTone'] = "void playTone(int freq, int duration) {\n"+
   " int tone=500000/freq;\n"+       
   " for (long i = 0; i < duration * 1000L; i += tone * 2) {\n"+
   " digitalWrite(3, HIGH);\n"+
   " delayMicroseconds(tone);\n"+
   " digitalWrite(3, LOW);\n"+
   " delayMicroseconds(tone);\n"+
   " }\n"+
   "}\n";    
  //dans setup    
  Blockly.Arduino.setups_['setup_buzzer_pin'] = 'pinMode(3, OUTPUT);';
  var code = 'playTone('+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_irsend = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'FREQUENCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ATOMIC);
  //dans fonctions
  Blockly.Arduino.definitions_['define_time_ir'] = "unsigned long time_ir;\n";
  Blockly.Arduino.definitions_['define_IR_left'] = "boolean IR_left;\n";
  Blockly.Arduino.definitions_['define_IR_right'] = "boolean IR_right;\n";
  Blockly.Arduino.definitions_['define_IR_center'] = "boolean IR_center;\n";     
  Blockly.Arduino.definitions_['define_IR38Write'] = "void IR38Write() {\n"+
  " // 38Khz Burst on the tree IR LED\n"+
  " // Launch this all 50ms at the maximum rate\n"+
  " // 20 mesure per second maximum\n"+
  " if ((millis()-time_ir)<50) {\n"+
  "    //Il faut encore attendre avant de refaire une mesure\n"+
  "    return;\n"+ 
  "   }\n"+
  " time_ir=millis(); //On réinitialise le compteur\n"+
  " for(int i = 0; i <=6; i++) {\n"+
  "  digitalWrite(5, LOW);\n"+
  "  delayMicroseconds(13);\n"+
  "  digitalWrite(5, HIGH);\n"+
  "  delayMicroseconds(13);\n"+
  " }\n"+
  " //Sauve le resultat des lectures\n"+
  " IR_left=digitalRead(8);\n"+
  " IR_center=digitalRead(A1);\n"+
  " IR_right=digitalRead(9);\n"+
  "}\n";    
  //dans setup    
  Blockly.Arduino.setups_['setup_time_ir'] ='time_ir=millis();\n';    
  Blockly.Arduino.setups_['setup_IRledPin'] = 'pinMode(5, OUTPUT);\n'+
  '  digitalWrite(5, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_left'] = 'pinMode(8, INPUT);\n'+
  '  digitalWrite(8, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_center'] = 'pinMode(A1, INPUT);\n'+
  '  digitalWrite(A1, HIGH);\n';
  Blockly.Arduino.setups_['setup_IRsensorPin_right'] = 'pinMode(9, INPUT);\n'+
  '  digitalWrite(9, HIGH);\n';    
  var code = 'IR38Write();\n';
  return code;
};

Blockly.Arduino.technozone_sonar1 = function() {
  var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_dist_pin = Blockly.Arduino.valueToCode(this, 'DIST', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_sonar1"] = "pinMode("+dropdown_triger_pin+",OUTPUT);//Sonar triger pin\n"+
  "  pinMode("+dropdown_dist_pin+",INPUT);//Sonar distance pulse pin\n";
  var code = "";
  
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int mesure_distance_cm(byte trig_pin, byte dist_pin)\n"+
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
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '1000'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.includes_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');\n';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.technozone_read_servo1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['define_servo1'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach('+dropdown_pin+');\n';
  
  var code = 'servo_' + dropdown_pin + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1white = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_btn = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_btn'] = 'pinMode(7, INPUT);';
  var code = 'digitalRead(7)==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_available = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  Blockly.Arduino.definitions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  Blockly.Arduino.definitions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1; \n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';  
    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var code = 'bt_read()>0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bt_init = function() {
  var dropdown_RX_pin = Blockly.Arduino.valueToCode(this, 'RX', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_TX_pin = Blockly.Arduino.valueToCode(this, 'TX', Blockly.Arduino.ORDER_ATOMIC);   
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n"; 
  Blockly.Arduino.includes_['define_TimerOne'] = "#include <TimerOne.h>\n";
  Blockly.Arduino.definitions_['define_var_bt'] = "SoftwareSerial bt("+dropdown_RX_pin+","+dropdown_TX_pin+"); // RX, TX\n"; 
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';
  Blockly.Arduino.definitions_['define_var_btnPress'] = 'volatile boolean btnPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_interPress'] = 'volatile boolean interPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_potarVal'] = 'volatile unsigned int potarVal[]={0,0,0,0,0,0,0,0,0,0};\n'; 
  Blockly.Arduino.definitions_['define_var_intflag'] = 'volatile boolean intflag =false;\n';
  Blockly.Arduino.definitions_['define_var_ihmflag'] = 'volatile boolean ihmflag = false;\n';
  //dans fonctions
  Blockly.Arduino.definitions_['define_floatToString'] = 'String floatToString(float valeur,int precision){\n'+
  '  char charVal[10];\n'+
  '  String stringVal = "";\n'+
  '  float valc=valeur*pow(0.1,precision);\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     charVal[i]=\' \';\n'+
  '    }\n'+
  '  dtostrf(valc, 0, precision, charVal);\n'+
  '  //convert chararray to string\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     if (charVal[i]!=\' \') {stringVal+=charVal[i];}\n'+
  '    }\n'+
  '  //supprime le dernier caractère de strinVal\n'+
  '  stringVal=stringVal.substring(0,stringVal.length()-1);\n'+
  '  return stringVal;\n'+
  '}\n'; 
  Blockly.Arduino.definitions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  Blockly.Arduino.definitions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1;\n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';   
  Blockly.Arduino.definitions_['define_ihm_available'] = 'int ihm_available() {\n'+
    ' stringOne = "";\n'+
    ' bt.println("|P");\n'+
    ' delay(300);\n'+
    ' if (bt_read()>0) {\n'+
    '  if (stringOne=="OK") {\n'+
    '     Timer1.start();\n'+
    '     return 1;  \n'+
    '  } else {\n'+
    '     return 0;\n'+
    '  }\n'+
    ' } else {\n'+
    ' return 0;\n'+
    ' }\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_hex2int'] = 'unsigned long hex2int(String a, unsigned int len) {\n'+
    ' int i;\n'+
    ' unsigned long val = 0;\n'+
    ' for(i=0;i<len;i++)\n'+
    '   if(a[i] <= 57)\n'+
    '    val += (a[i]-48)*(1<<(4*(len-1-i)));\n'+
    '   else\n'+
    '    val += (a[i]-55)*(1<<(4*(len-1-i)));\n'+
    ' return val;\n'+
    '}\n';
    Blockly.Arduino.definitions_['define_isValidNumber'] = 'boolean isValidNumber(String str){\n'+
    ' boolean temp=true;\n'+
    ' for(byte i=0;i<str.length();i++) {\n'+
    '    if(!isDigit(str.charAt(i))) { temp=false; }\n'+
    ' }\n'+
    ' return temp;\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_BTinterrupt'] = 'void BTinterrupt() {\n'+
  ' if (!intflag) {\n'+
  '    intflag=true;\n'+
  '    if (bt.available()>0) {\n'+
  '       if (bt_read()>0) {\n'+
  '          if (stringOne[0] == \'B\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1),1)-1;\n'+
  '             btnPress[decValue]=true;\n'+
  '             ihmflag=true;\n'+
  '          } else if (stringOne[0] == \'I\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '             if (stringOne[2]==\'1\') {\n'+
  '                interPress[decValue]=true;\n'+
  '                ihmflag=true;\n'+
  '             } else {\n'+
  '                interPress[decValue]=false;\n'+
  '                ihmflag=true;\n'+
  '             }\n'+
  '         } else if (stringOne[0] == \'P\') {\n'+
  '           int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '           if (isValidNumber(stringOne.substring(2))) {\n'+
  '               potarVal[decValue]=stringOne.substring(2).toInt();\n'+
  '               ihmflag=true;\n'+               
  '           }\n'+
  '         }else {\n'+
  '            stringOne=""; //On vide la chaine de réception\n'+
  '         }\n'+
  '      } else {\n'+
  '         stringOne=""; //On vide la chaine de réception\n'+
  '      }\n'+
  '    }\n'+
  '    intflag=false;\n'+
  ' }\n'+
  '}\n';
    Blockly.Arduino.definitions_['define_ihm_change'] = 'boolean ihm_change() {\n'+
    ' if (ihmflag) {\n'+
    '  ihmflag=false;\n'+
    '  return 1;\n'+
    ' } else {\n'+
    '  return 0;\n'+
    ' }\n'+
    '}\n';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(BTinterrupt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return code;
};


Blockly.Arduino.technozone_speech_init = function() {
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var pitch = Blockly.Arduino.valueToCode(this, 'PITCH', Blockly.Arduino.ORDER_ATOMIC);    
  var bending = Blockly.Arduino.valueToCode(this, 'BENDING', Blockly.Arduino.ORDER_ATOMIC);    
  //dans include définition    
  Blockly.Arduino.includes_['define_Talkietz'] = '#include "talkietz.h" //Inspired by Talkie library Copyright 2011 Peter Knight\n';      
  Blockly.Arduino.definitions_['define_const_PSxx'] = 'const unsigned char PS_16 = (1 << ADPS2);\n'+
      'const unsigned char PS_32 = (1 << ADPS2);\n'+
      'const unsigned char PS_64 = (1 << ADPS2);\n'+
      'const unsigned char PS_128 = (1 << ADPS2);\n';
  Blockly.Arduino.definitions_['define_var_voice'] = 'Talkie voice;\n'; 
  //dans setup    
  Blockly.Arduino.setups_['setup_talkietz'] = 'ADCSRA &= ~PS_128;  // remove bits set by Arduino library\n'+
	'  // you can choose a prescaler from above.\n'+
	'  // PS_16, PS_32, PS_64 or PS_128\n'+
	'  ADCSRA |= PS_32;    //  ## was 16 but give problem with getmode unstable 32 seems ok\n'+
    '  //Réglage des paramêtres de restitution vocale\n'+
    '  voice.SetSpeed(800); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch(700); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n'+
    '  //voice.SetBending(120);//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  //voice.BendingOn();\n'+
    '  voice.BendingOff(); //Pas de distortion du son;\n';    
  var code = '  voice.SetSpeed('+speed+'); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch('+pitch+'); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n';
 if (bending==0) {
   code+='  voice.BendingOff(); //Pas de distortion du son;\n';     
 } else {
   code+='  voice.SetBending('+bending+');//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  voice.BendingOn();\n';
 } 
  return code;
};

Blockly.Arduino.technozone_ihm_init = function() {
  var dropdown_RX_pin = Blockly.Arduino.valueToCode(this, 'RX', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_TX_pin = Blockly.Arduino.valueToCode(this, 'TX', Blockly.Arduino.ORDER_ATOMIC);   
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n"; 
  Blockly.Arduino.includes_['define_TimerOne'] = "#include <TimerOne.h>\n";
  Blockly.Arduino.definitions_['define_var_bt'] = "SoftwareSerial bt("+dropdown_RX_pin+","+dropdown_TX_pin+"); // RX, TX\n"; 
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';
  Blockly.Arduino.definitions_['define_var_btnPress'] = 'volatile boolean btnPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_interPress'] = 'volatile boolean interPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_potarVal'] = 'volatile unsigned int potarVal[]={0,0,0,0,0,0,0,0,0,0};\n'; 
  Blockly.Arduino.definitions_['define_var_intflag'] = 'volatile boolean intflag =false;\n';
  Blockly.Arduino.definitions_['define_var_ihmflag'] = 'volatile boolean ihmflag = false;\n';
  //dans fonctions
  Blockly.Arduino.definitions_['define_floatToString'] = 'String floatToString(float valeur,int precision){\n'+
  '  char charVal[10];\n'+
  '  String stringVal = "";\n'+
  '  float valc=valeur*pow(0.1,precision);\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     charVal[i]=\' \';\n'+
  '    }\n'+
  '  dtostrf(valc, 0, precision, charVal);\n'+
  '  //convert chararray to string\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     if (charVal[i]!=\' \') {stringVal+=charVal[i];}\n'+
  '    }\n'+
  '  //supprime le dernier caractère de strinVal\n'+
  '  stringVal=stringVal.substring(0,stringVal.length()-1);\n'+
  '  return stringVal;\n'+
  '}\n'; 
  Blockly.Arduino.definitions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  Blockly.Arduino.definitions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1;\n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';   
  Blockly.Arduino.definitions_['define_ihm_available'] = 'int ihm_available() {\n'+
    ' stringOne = "";\n'+
    ' bt.println("|P");\n'+
    ' delay(300);\n'+
    ' if (bt_read()>0) {\n'+
    '  if (stringOne=="OK") {\n'+
    '     Timer1.start();\n'+
    '     return 1;  \n'+
    '  } else {\n'+
    '     return 0;\n'+
    '  }\n'+
    ' } else {\n'+
    ' return 0;\n'+
    ' }\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_hex2int'] = 'unsigned long hex2int(String a, unsigned int len) {\n'+
    ' int i;\n'+
    ' unsigned long val = 0;\n'+
    ' for(i=0;i<len;i++)\n'+
    '   if(a[i] <= 57)\n'+
    '    val += (a[i]-48)*(1<<(4*(len-1-i)));\n'+
    '   else\n'+
    '    val += (a[i]-55)*(1<<(4*(len-1-i)));\n'+
    ' return val;\n'+
    '}\n';
    Blockly.Arduino.definitions_['define_isValidNumber'] = 'boolean isValidNumber(String str){\n'+
    ' boolean temp=true;\n'+
    ' for(byte i=0;i<str.length();i++) {\n'+
    '    if(!isDigit(str.charAt(i))) { temp=false; }\n'+
    ' }\n'+
    ' return temp;\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_BTinterrupt'] = 'void BTinterrupt() {\n'+
  ' if (!intflag) {\n'+
  '    intflag=true;\n'+
  '    if (bt.available()>0) {\n'+
  '       if (bt_read()>0) {\n'+
  '          if (stringOne[0] == \'B\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1),1)-1;\n'+
  '             btnPress[decValue]=true;\n'+
  '             ihmflag=true;\n'+
  '          } else if (stringOne[0] == \'I\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '             if (stringOne[2]==\'1\') {\n'+
  '                interPress[decValue]=true;\n'+
  '                ihmflag=true;\n'+
  '             } else {\n'+
  '                interPress[decValue]=false;\n'+
  '                ihmflag=true;\n'+
  '             }\n'+
  '         } else if (stringOne[0] == \'P\') {\n'+
  '           int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '           if (isValidNumber(stringOne.substring(2))) {\n'+
  '               potarVal[decValue]=stringOne.substring(2).toInt();\n'+
  '               ihmflag=true;\n'+               
  '           }\n'+
  '         }else {\n'+
  '            stringOne=""; //On vide la chaine de réception\n'+
  '         }\n'+
  '      } else {\n'+
  '         stringOne=""; //On vide la chaine de réception\n'+
  '      }\n'+
  '    }\n'+
  '    intflag=false;\n'+
  ' }\n'+
  '}\n';
    Blockly.Arduino.definitions_['define_ihm_change'] = 'boolean ihm_change() {\n'+
    ' if (ihmflag) {\n'+
    '  ihmflag=false;\n'+
    '  return 1;\n'+
    ' } else {\n'+
    '  return 0;\n'+
    ' }\n'+
    '}\n';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(BTinterrupt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_init = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n"; 
  Blockly.Arduino.includes_['define_TimerOne'] = "#include <TimerOne.h>\n";
  Blockly.Arduino.definitions_['define_var_bt'] = "SoftwareSerial bt(4, 2); // RX, TX\n"; 
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';
  Blockly.Arduino.definitions_['define_var_btnPress'] = 'volatile boolean btnPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_interPress'] = 'volatile boolean interPress[] = {false,false,false,false,false,false,false,false,false,false};\n';
  Blockly.Arduino.definitions_['define_var_potarVal'] = 'volatile unsigned int potarVal[]={0,0,0,0,0,0,0,0,0,0};\n'; 
  Blockly.Arduino.definitions_['define_var_intflag'] = 'volatile boolean intflag =false;\n';
  Blockly.Arduino.definitions_['define_var_ihmflag'] = 'volatile boolean ihmflag = false;\n';
  //dans fonctions
  Blockly.Arduino.definitions_['define_floatToString'] = 'String floatToString(float valeur,int precision){\n'+
  '  char charVal[10];\n'+
  '  String stringVal = "";\n'+
  '  float valc=valeur*pow(0.1,precision);\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     charVal[i]=\' \';\n'+
  '    }\n'+
  '  dtostrf(valc, 0, precision, charVal);\n'+
  '  //convert chararray to string\n'+
  '  for(int i=0;i<sizeof(charVal);i++)\n'+
  '    {\n'+
  '     if (charVal[i]!=\' \') {stringVal+=charVal[i];}\n'+
  '    }\n'+
  '  //supprime le dernier caractère de strinVal\n'+
  '  stringVal=stringVal.substring(0,stringVal.length()-1);\n'+
  '  return stringVal;\n'+
  '}\n'; 
  Blockly.Arduino.definitions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  Blockly.Arduino.definitions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1;\n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';   
  Blockly.Arduino.definitions_['define_ihm_available'] = 'int ihm_available() {\n'+
    ' stringOne = "";\n'+
    ' bt.println("|P");\n'+
    ' delay(300);\n'+
    ' if (bt_read()>0) {\n'+
    '  if (stringOne=="OK") {\n'+
    '     Timer1.start();\n'+
    '     return 1;  \n'+
    '  } else {\n'+
    '     return 0;\n'+
    '  }\n'+
    ' } else {\n'+
    ' return 0;\n'+
    ' }\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_hex2int'] = 'unsigned long hex2int(String a, unsigned int len) {\n'+
    ' int i;\n'+
    ' unsigned long val = 0;\n'+
    ' for(i=0;i<len;i++)\n'+
    '   if(a[i] <= 57)\n'+
    '    val += (a[i]-48)*(1<<(4*(len-1-i)));\n'+
    '   else\n'+
    '    val += (a[i]-55)*(1<<(4*(len-1-i)));\n'+
    ' return val;\n'+
    '}\n';
    Blockly.Arduino.definitions_['define_isValidNumber'] = 'boolean isValidNumber(String str){\n'+
    ' boolean temp=true;\n'+
    ' for(byte i=0;i<str.length();i++) {\n'+
    '    if(!isDigit(str.charAt(i))) { temp=false; }\n'+
    ' }\n'+
    ' return temp;\n'+
    '}\n';
  Blockly.Arduino.definitions_['define_BTinterrupt'] = 'void BTinterrupt() {\n'+
  ' if (!intflag) {\n'+
  '    intflag=true;\n'+
  '    if (bt.available()>0) {\n'+
  '       if (bt_read()>0) {\n'+
  '          if (stringOne[0] == \'B\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1),1)-1;\n'+
  '             btnPress[decValue]=true;\n'+
  '             ihmflag=true;\n'+
  '          } else if (stringOne[0] == \'I\') {\n'+
  '             int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '             if (stringOne[2]==\'1\') {\n'+
  '                interPress[decValue]=true;\n'+
  '                ihmflag=true;\n'+
  '             } else {\n'+
  '                interPress[decValue]=false;\n'+
  '                ihmflag=true;\n'+
  '             }\n'+
  '         } else if (stringOne[0] == \'P\') {\n'+
  '           int decValue = hex2int(stringOne.substring(1,2),1)-1;\n'+
  '           if (isValidNumber(stringOne.substring(2))) {\n'+
  '               potarVal[decValue]=stringOne.substring(2).toInt();\n'+
  '               ihmflag=true;\n'+               
  '           }\n'+
  '         }else {\n'+
  '            stringOne=""; //On vide la chaine de réception\n'+
  '         }\n'+
  '      } else {\n'+
  '         stringOne=""; //On vide la chaine de réception\n'+
  '      }\n'+
  '    }\n'+
  '    intflag=false;\n'+
  ' }\n'+
  '}\n';
    Blockly.Arduino.definitions_['define_ihm_change'] = 'boolean ihm_change() {\n'+
    ' if (ihmflag) {\n'+
    '  ihmflag=false;\n'+
    '  return 1;\n'+
    ' } else {\n'+
    '  return 0;\n'+
    ' }\n'+
    '}\n';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  Blockly.Arduino.setups_['setup_Timer1_initialize'] = 'Timer1.initialize(100000);'; 
  Blockly.Arduino.setups_['setup_Timer1_attachInterrupt'] = 'Timer1.attachInterrupt(BTinterrupt);'; 
  Blockly.Arduino.setups_['setup_Timer1_stop'] = 'Timer1.stop();';    
  var code = '';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_available = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";       
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  Blockly.Arduino.definitions_['define_lire_octet'] = "int lire_octet() {\n"+
   " time_out=false;\n"+
   " byte counter=0;\n"+
   " while(bt.available()==0 && !time_out) {\n"+
   "  counter+=1;\n"+
   "  delayMicroseconds(1000); // wait 1 ms\n"+      
   "  if (counter>100) {time_out=true;} //time_out + watchdog !\n"+
   " }\n"+
   " if (!time_out) { return bt.read(); } else { return -1; }\n"+
   "}\n";
  Blockly.Arduino.definitions_['define_bt_read'] = 'int bt_read() {\n'+
    ' stringOne = "";\n'+
    ' if (bt.available()>0) {\n'+  
    '   int carac;\n'+
    '   time_out=false;\n'+
    '   do {\n'+
    '      carac=lire_octet();\n'+
    '      if ((carac!=10)&(carac!=13)){stringOne+=char(carac);}\n'+
    '     }\n'+
    '   while ((carac!=10)&(!time_out));\n'+
    '   if (time_out) {\n'+ 
    '      stringOne="";\n'+
    '      return 0;\n'+
    '   }\n'+
    '   return 1; \n'+
    '  }\n'+
    ' return 0;\n'+  
    '}\n';   
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var code = 'ihm_available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_change = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";       
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var code = 'ihm_change()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_inter_read = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var led = this.getFieldValue('LED');    
  var code = 'testInter('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_btn_read = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var led = this.getFieldValue('LED');    
  var code = 'testBtn('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ihm_potar_read = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";       
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans fonctions
  Blockly.Arduino.definitions_['define_readPotar'] = 'unsigned int readPotar(int num) {\n'+
  ' return potarVal[num-1];\n'+
  '}\n';
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var led = this.getFieldValue('LED');    
  var code = 'readPotar('+led+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_read = function() {
  //var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\''; 
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';
  
  //dans setup     
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  //var code = '(stringOne = ' +text+ ')';
  var code = 'stringOne';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_bt_write = function() {
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';    
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';
  
  //dans setup     
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';   
  var code = 'bt.println('+text+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_irleft = function() {
  var code = 'IR_left==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ircenter = function() {
  var code = 'IR_center==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_irright = function() {
  var code = 'IR_right==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ligleft = function() {
  Blockly.Arduino.setups_['setup_ligleft'] = 'pinMode(A2, INPUT);';    
  var code = 'digitalRead(A2)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_robot_ligright = function() {
  Blockly.Arduino.setups_['setup_ligright'] = 'pinMode(A0, INPUT);';     
  var code = 'digitalRead(A0)==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1black = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_btn1black_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1green = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_btn1green_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_btn1red = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_btn1red_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_switch1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ils1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_ils1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_proxi1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_proxi1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==0';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_bari1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_bari1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_lig1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_lig1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_cmouv1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_cmouv1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_potar1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  //  Blockly.Arduino.setups_['setup_potar1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ctn1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  /*
	  temperature=round(-134*Analog_read/1023+116);
  */
  //Blockly.Arduino.setups_['setup_ctn1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(- 0.525641025*(analogRead('+dropdown_pin+')/4)+ 116.0897436)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_ldr1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_mot2 = function() {
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

Blockly.Arduino.technozone_pap1cc = function() {
  var dropdown_i2cadd = this.getFieldValue('I2CADD');
  var dropdown_moteur = this.getFieldValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="true") 
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
    if (value_sens=="true") 
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

Blockly.Arduino.technozone_robot_ihm_led_def = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';    
  var code = 'bt.println("|l'+led+text.substring(1,text.length-1)+'");\n'+
             'delay(300);\n';
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_btn_def = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n'; 
  //dans fonctions
  Blockly.Arduino.definitions_['define_testBtn'] = 'boolean testBtn(int num) {\n'+
  ' Timer1.stop();\n'+
  ' if (btnPress[num-1]) {\n'+
  '  btnPress[num-1]=false;\n'+
  '  Timer1.resume();\n'+
  '  return 1;\n'+
  ' } else {\n'+
  '  Timer1.resume();\n'+ 
  '  return 0;\n'+ 
  ' }\n'+ 
  '}\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');  
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';    
  var code = 'bt.println("|b'+led+text.substring(1,text.length-1)+'");\n';
  return code;
};

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (erreur) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (erreur) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (erreur) {}
  throw new Error("La création de l’objet pour les requêtes HTTP n’a pas pu avoir lieu.");
}

Blockly.Arduino.technozone_speech_say = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_Talkietz'] = '#include "talkietz.h" //Inspired by Talkie library Copyright 2011 Peter Knight\n';      
  Blockly.Arduino.definitions_['define_const_PSxx'] = 'const unsigned char PS_16 = (1 << ADPS2);\n'+
      'const unsigned char PS_32 = (1 << ADPS2);\n'+
      'const unsigned char PS_64 = (1 << ADPS2);\n'+
      'const unsigned char PS_128 = (1 << ADPS2);\n';
  Blockly.Arduino.definitions_['define_var_voice'] = 'Talkie voice;\n'; 
  //récupère les codes des chaines LPC    
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);          
  //définition des chaines LPC
  var nbmot=Math.floor((text.length+1)/8);
  for (i=0;i<nbmot;i++) {
   var lemot=text.substr(i*8+1,7);    
   var requete = makeHttpObject();
   try { 
       //alert('requete'+flag_affiche_code);
       if (flag_affiche_code==1) {
       //alert('Requete au serveur');
       requete.open("GET", "http://www.technozone51.fr/BlocklyDuinotest/translate.php?code="+lemot, false);
       requete.send(null);
       var ligne=requete.responseText.split(/\n/g)[0];
       if (ligne.indexOf("Invalid")!=-1) {
        alert("Invalid result");
        } else {
            var data="";  
            data+="const uint8_t sp";
            data +=lemot;
            data+=" [] PROGMEM={";
            data +=ligne.substr(4);
            data +="};\n";
            Blockly.Arduino.definitions_['define_sp_'+lemot] = data;   
            // alert(ligne.substr(4));
        }
       }
   } catch (erreur){
       //alert("impossible de récupérer la chaine LPC n° "+lemot);
       var data="";  
            data+="const uint8_t sp";
            data +=lemot;
            data+=" [] PROGMEM={";
            //data +=ligne.substr(4);
            data +="};\n";
            Blockly.Arduino.definitions_['define_sp_'+lemot] = data;  
       }     
  }  
  //dans setup    
  Blockly.Arduino.setups_['setup_talkietz'] = 'ADCSRA &= ~PS_128;  // remove bits set by Arduino library\n'+
	'  // you can choose a prescaler from above.\n'+
	'  // PS_16, PS_32, PS_64 or PS_128\n'+
	'  ADCSRA |= PS_32;    //  ## was 16 but give problem with getmode unstable 32 seems ok\n'+
    '  //Réglage des paramêtres de restitution vocale\n'+
    '  voice.SetSpeed(800); //entre 0 et 1023 . augmenter la valeur pour augmenter la vitesse. Valeur normal=800\n'+
    '  voice.SetPitch(700); //entre 0 et 1023 : Pitch normal=700. Augmenter pour rendre la voix plus aigue\n'+
    '  //voice.SetBending(120);//entre 0 et 1023 : 0=pas de distortion ;   512=ion maximale ;  1023=pas de distortion\n'+
    '  //voice.BendingOn();\n'+
    '  voice.BendingOff(); //Pas de distortion du son;\n';    
                         
  //génération du code
  var code="";    
     
  for (i=0;i<nbmot;i++) {
   var lemot=text.substr(i*8+1,7);    
   code+='voice.say(sp'+lemot+');\n';
  }
  //var code = 'bt.println("|b'+led+text.substring(1,text.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_inter_def = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  Blockly.Arduino.definitions_['define_testInter'] = 'boolean testInter(int num) {\n'+
  ' Timer1.stop();\n'+
  ' if (interPress[num-1]) {\n'+
  '   Timer1.resume();\n'+
  '   return 1;\n'+
  ' } else {\n'+
  '   Timer1.resume();\n'+
  '   return 0;\n'+
  ' }\n'+
  '}\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  //var text = this.getFieldValue('TEXT');    
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);                             
  //      Blockly.Arduino.ORDER_UNARY_POSTFIX) || '\'\'';    
  var code = 'bt.println("|i'+led+text.substring(1,text.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_led_on = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var couleur = this.getFieldValue('COLOR');    
  //var text = this.getFieldValue('TEXT');       
  var code = 'bt.println("|L'+led+couleur+'");\n';
      //       'delay(30);\n';
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_inter_on = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var couleur = this.getFieldValue('COLOR');    
  //var text = this.getFieldValue('TEXT');       
  var code = 'bt.println("|I'+led+'W'+couleur+'");\n';
      //       'delay(300);\n';
  
  return code;
};

Blockly.Arduino.technozone_robot_ihm_potar_def = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var divise = this.getFieldValue('DIVISOR');
  var minimum = Blockly.Arduino.valueToCode(this, 'POTARI',
            Blockly.Arduino.ORDER_UNARY_POSTFIX); 
  var maximum = Blockly.Arduino.valueToCode(this, 'POTARA',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);   
  var position = Blockly.Arduino.valueToCode(this, 'POTARP',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);       
  var text = Blockly.Arduino.valueToCode(this, 'TEXT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);         
  var code = 'bt.println("|r'+led+text.substring(1,text.length-1)+'");\n'+
        //     'delay(300);\n'+
             'bt.println("|R'+led+'WD'+divise+'");\n'+
        //     'delay(10);\n'+
             'bt.println("|R'+led+'WI'+minimum+'");\n'+
        //     'delay(10);\n'+
             'bt.println("|R'+led+'WA'+maximum+'");\n'+
        //     'delay(10);\n'+
             'bt.println("|R'+led+'WV'+position+'");\n';
        //     'delay(10);\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_gauge_def = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";       
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var graduation = Blockly.Arduino.valueToCode(this, 'GRADUATION',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var titre = Blockly.Arduino.valueToCode(this, 'TITRE',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);    
  var text = Blockly.Arduino.valueToCode(this, 'CONTENT',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);         
  var code = 'bt.println("|g'+led+text.substring(1,text.length-1)+'");\n'+
             'delay(100);\n'+
             'bt.println("|G'+led+'T'+graduation.substring(1,graduation.length-1)+'");\n'+
             'bt.println("|G'+led+'L'+titre.substring(1,titre.length-1)+'");\n';
  return code;
};

Blockly.Arduino.technozone_robot_ihm_gauge_write = function() {
  //dans include définition    
  Blockly.Arduino.includes_['define_SoftwareSerial'] = "#include <SoftwareSerial.h>\n";      
  Blockly.Arduino.definitions_['define_var_time_out'] = "boolean time_out;\n";
  Blockly.Arduino.definitions_['define_var_stringOne'] = 'String stringOne = "";\n';    
  //dans setup    
  Blockly.Arduino.setups_['setup_bt'] = 'bt.begin(9600);';    
  var led = this.getFieldValue('LED');
  var nbdecimal = this.getFieldValue('DECIMAL');   
  var valeur = Blockly.Arduino.valueToCode(this, 'VALEUR',
            Blockly.Arduino.ORDER_UNARY_POSTFIX);       
  var code = 'bt.println("|G'+led+'W"+floatToString('+valeur+','+nbdecimal+'));\n';
  return code;
};

Blockly.Arduino.technozone_pap1relatif = function() {
  var dropdown_i2cadd = this.getFieldValue('I2CADD');
  var dropdown_moteur = this.getFieldValue('MOT');
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_pas = Blockly.Arduino.valueToCode(this, 'PAS', Blockly.Arduino.ORDER_ATOMIC);
  var code = "";
  if (dropdown_moteur=='HIGH') 
  {
    //moteur A
    if (value_sens=="true") 
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
    if (value_sens=="true") 
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

Blockly.Arduino.technozone_robot_move = function() {
  var value_direction = this.getFieldValue('DIR');
  var value_distance = Blockly.Arduino.valueToCode(this, 'DISTANCE', Blockly.Arduino.ORDER_ATOMIC);
  var value_unit = this.getFieldValue('UNIT');
  var value_preemptif = this.getFieldValue('PREEMPTIF');
  //dans définitions    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_Pap1'] = '#include <Pap1.h>';
  Blockly.Arduino.definitions_['define_Stepper'] = 'Pap1 Stepper(23);\n'; 
  Blockly.Arduino.includes_['define_step_per_dm'] = '#define step_per_dm 958.5    //Nombre de pas par dm\n';
  Blockly.Arduino.includes_['define_vmax'] = '#define vmax 253            //vitesse maximale des moteurs\n';
  //dans fonctions    
  Blockly.Arduino.definitions_['define_calcule_step'] = "unsigned int calcule_step(unsigned int dist,unsigned int unite)\n"+
      "{\n"+
      " //convert a distance into steps\n"+
      " unsigned int temp=dist*step_per_dm;\n"+
      " switch (unite) {\n"+
      "  case 0 : temp=temp/100;\n"+
      "           break;\n"+
      "  case 1 : temp=temp/10;\n"+
      "           break;\n"+
      " } // end switch\n"+ 
      " return temp;\n"+
      "}\n";     
  Blockly.Arduino.definitions_['define_move'] = "void move(unsigned int dir,unsigned int distance,unsigned int unite,unsigned int pre)\n"+
      "{\n"+
      " //Move forward or backward a given distance in mm or cm\n"+
      " Stepper.SetMode(IDLE);\n"+
      " unsigned int n=calcule_step(distance,unite);\n"+
      " Stepper.StepA(n);\n"+
      " Stepper.StepB(n);\n"+
      " switch (dir) {\n"+
      "  case 0 : Stepper.DirA(CCW);\n"+
      "           Stepper.DirB(CW);\n"+
      "           break;\n"+
      "  case 1 : Stepper.DirA(CW);\n"+
      "           Stepper.DirB(CCW);\n"+
      "           break;\n"+
      " } //end switch\n"+
      " Stepper.SpeedA(vmax);\n"+
      " Stepper.SpeedB(vmax);\n"+
      " Stepper.SetMode(RELATIVE);\n"+
      " delay(5);\n"+
      " if (pre) {\n"+
      "   while (Stepper.Busy()) {}\n"+
      "    }\n"+
      "}\n";     
  //dans le setup   
  Blockly.Arduino.setups_["setup_Wire"] = "Wire.begin(); // join i2c bus";
  Blockly.Arduino.setups_["setup_Stepper"] = 'Stepper.Begin(SINGLE_STEPPING,AUTO_RELAX);\n'+
      '  Stepper.SetMode(IDLE);';
  //dans loop    
  var code = 'move('+value_direction+','+value_distance+','+value_unit+','+value_preemptif+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_turn = function() {
  var value_direction = this.getFieldValue('ROT');
  var value_angle = Blockly.Arduino.valueToCode(this, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);
  var value_preemptif = this.getFieldValue('PREEMPTIF');    
  //dans définitions    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_Pap1'] = '#include <Pap1.h>';
  Blockly.Arduino.definitions_['define_Stepper'] = 'Pap1 Stepper(23);\n'; 
  Blockly.Arduino.includes_['define_step_per_degre'] = '#define step_per_degre 10.5846   //Nombre de pas pour tourner de 1°\n';    
  Blockly.Arduino.includes_['define_vmax'] = '#define vmax 253            //vitesse maximale des moteurs\n';    
  //dans le setup    
  Blockly.Arduino.setups_["setup_Wire"] = "Wire.begin(); // join i2c bus";
  Blockly.Arduino.setups_["setup_Stepper"] = 'Stepper.Begin(SINGLE_STEPPING,AUTO_RELAX);\n'+
      '  Stepper.SetMode(IDLE);';
  //dans fonction
  Blockly.Arduino.definitions_['define_calcule_angle'] = "unsigned int calcule_angle(unsigned int angle)\n"+
      "{\n"+
      " //convert an angle in degree into steps\n"+
      " unsigned int temp=angle*step_per_degre;\n"+
      " return temp;\n"+
      "}\n";        
  Blockly.Arduino.definitions_['define_turn'] = "void turn(unsigned int dir,unsigned int angle,unsigned int pre)\n"+
      "{\n"+
      " //Turn right or left a given angle in degree\n"+
      " Stepper.SetMode(IDLE);\n"+
      " unsigned int n=calcule_angle(angle);\n"+
      " Stepper.StepA(n);\n"+
      " Stepper.StepB(n);\n"+
      " switch (dir) {\n"+
      "  case 0 : Stepper.DirA(CCW);\n"+
      "           Stepper.DirB(CCW);\n"+
      "           break;\n"+
      "  case 1 : Stepper.DirA(CW);\n"+
      "           Stepper.DirB(CW);\n"+
      "           break;\n"+
      " } //end switch\n"+
      " Stepper.SpeedA(vmax);\n"+
      " Stepper.SpeedB(vmax);\n"+
      " Stepper.SetMode(RELATIVE);\n"+
      " delay(5);\n"+
      " if (pre) {\n"+
      "   while (Stepper.Busy()) {}\n"+
      "    }\n"+
      "}\n";         
  //dans loop    
  var code = 'turn('+value_direction+','+value_angle+','+value_preemptif+');\n';
  return code;
};

Blockly.Arduino.technozone_robot_stop = function() {
  //dans définitions    
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.includes_['define_Pap1'] = '#include <Pap1.h>';
  Blockly.Arduino.definitions_['define_Stepper'] = 'Pap1 Stepper(23);\n'; 
  //dans fonctions    
  Blockly.Arduino.definitions_['define_stop'] = "void stop()\n"+
      "{\n"+
      " //Stop the bot\n"+
      " Stepper.SetMode(IDLE);\n"+
      " Stepper.StepA(0);\n"+
      " Stepper.StepB(0);\n"+
      " Stepper.SpeedA(0);\n"+
      " Stepper.SpeedB(0);\n"+
      "}\n";     
  //dans le setup   
  Blockly.Arduino.setups_["setup_Wire"] = "Wire.begin(); // join i2c bus";
  Blockly.Arduino.setups_["setup_Stepper"] = 'Stepper.Begin(SINGLE_STEPPING,AUTO_RELAX);\n'+
      '  Stepper.SetMode(IDLE);';
  //dans loop    
  var code = 'stop();\n';
  return code;
};

Blockly.Arduino.technozone_pap1init = function() {
  var dropdown_i2cadd = this.getFieldValue('I2CADD');
  var dropdown_mode = this.getFieldValue('MODE');
  var dropdown_relax = this.getFieldValue('RELAX');
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.includes_['define_Pap1'] = '#include <Pap1.h>\n';
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
  var dropdown_i2cadd = this.getFieldValue('I2CADD');
  var code = ""; 
  code='MyStepper_'+dropdown_i2cadd+'.Busy()';
  return code;
};

Blockly.Arduino.technozone_mot1easybot1 = function() {
  var dropdown_mot = this.getFieldValue('MOT');
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
  //return code;
  return code;
};


Blockly.Arduino.technozone_mot1easycon1 = function() {
  var dropdown_mot = this.getFieldValue('MOT');
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
  //return code;
  return code;
};

Blockly.Arduino.technozone_telec2 = function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  var dropdown_touche = this.getFieldValue('TOUCHE');
  var code = ""; 
  code='IRkey("'+dropdown_touche+'")';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.technozone_telecsetup = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  var code = ""; 
    Blockly.Arduino.setups_["setup_telec2_"+dropdown_pin] = "pinMode("+dropdown_pin+",INPUT);//IR télécommande pin\n"+
  '  IRrecv irrecv('+dropdown_pin+');\n'+
  '  irrecv.enableIRIn();\n'+
  '  irrecv.resume();\n';
  Blockly.Arduino.definitions_['define_IRkeypressed'] ='boolean IRkeypressed()\n'+
  '{\n'+
  '  if (irrecv.decode(&results)) {return true;} else {return false;}\n'+
  '}'; 
  Blockly.Arduino.includes_['define_telec'] = '#include <IRremote.h>\n'+
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
  return code;
};

Blockly.Arduino.technozone_telec1= function() {
  //var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  var dropdown_touche = this.getFieldValue('TOUCHE');
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