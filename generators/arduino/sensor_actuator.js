'use strict';

goog.provide('Blockly.Arduino.sensor_actuator');

goog.require('Blockly.Arduino');

Blockly.Arduino["SENSOR_ACTUATOR_matrice8x8"] = function(block) {
    var symbole = block.getFieldValue("symbole_matrice");
    var code = "";
    switch (symbole) {
        case "rien":
            Blockly.Arduino.definitions_["variablebyte" + symbole] = "byte " + symbole + "[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};";
            break;
        case "coeur":
            Blockly.Arduino.definitions_["variablebyte" + symbole] = "byte " + symbole + "[] = {0x00,0x6c,0x92,0x82,0x44,0x28,0x10,0x00};";
            break;
        case "LH":
            Blockly.Arduino.definitions_["variablebyte" + symbole] = "byte " + symbole + "[] = {0x40,0x40,0x40,0x54,0x54,0x7e,0x14,0x14};";
            break;
        case "euro":
            Blockly.Arduino.definitions_["variablebyte" + symbole] = "byte " + symbole + "[] = {0x1c,0x22,0x78,0x20,0x78,0x22,0x1c,0x00};";
            break
    }
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_matrice_nombre_0_30"] = function(block) {
    var nb = block.getFieldValue("nombre");
    Blockly.Arduino.definitions_["variablenombre"] = "byte zero [] = {B00000000,B00001110,B00001010,B00001010,B00001010,B00001110,B00000000,B00000000};\nbyte un [] = {B00000000,B00000010,B00000110,B00000010,B00000010,B00000010,B00000000,B00000000};\nbyte deux [] = {B00000000,B00001110,B00000010,B00001110,B00001000,B00001110,B00000000,B00000000};\nbyte trois [] = {B00000000,B00001110,B00000010,B00001110,B00000010,B00001110,B00000000,B00000000};\nbyte quatre [] = {B00000000,B00001000,B00001010,B00001110,B00000010,B00000010,B00000000,B00000000};\nbyte cinq [] = {B00000000,B00001110,B00001000,B00001110,B00000010,B00001110,B00000000,B00000000};\nbyte six [] = {B00000000,B00001000,B00001000,B00001110,B00001010,B00001110,B00000000,B00000000};\nbyte sept [] = {B00000000,B00001110,B00000010,B00000110,B00000010,B00000010,B00000000,B00000000};\nbyte huit [] = {B00000000,B00001110,B00001010,B00001110,B00001010,B00001110,B00000000,B00000000};\nbyte neuf [] = {B00000000,B00001110,B00001010,B00001110,B00000010,B00000010,B00000000,B00000000};\nbyte dix [] = {B00000000,B00101110,B01101010,B00101010,B00101010,B00101110,B00000000,B00000000};\nbyte onze [] = {B00000000,B00100010,B01100110,B00100010,B00100010,B00100010,B00000000,B00000000};\nbyte douze [] = {B00000000,B00101110,B01100010,B00101110,B00101000,B00101110,B00000000,B00000000};\nbyte treize [] = {B00000000,B00101110,B01100010,B00101110,B00100010,B00101110,B00000000,B00000000};\nbyte quatorze [] = {B00000000,B00101000,B01101010,B00101110,B00100010,B00100010,B00000000,B00000000};\nbyte quinze [] = {B00000000,B00101110,B01101000,B00101110,B00100010,B00101110,B00000000,B00000000};\nbyte seize [] = {B00000000,B00101000,B01101000,B00101110,B00101010,B00101110,B00000000,B00000000};\nbyte dixsept [] = {B00000000,B00101110,B01100010,B00100110,B00100010,B00100010,B00000000,B00000000};\nbyte dixhuit [] = {B00000000,B00101110,B01101010,B00101110,B00101010,B00101110,B00000000,B00000000};\nbyte dixneuf [] = {B00000000,B00101110,B01101010,B00101110,B00100010,B00100010,B00000000,B00000000};\nbyte vingt [] = {B00000000,B11101110,B00101010,B11101010,B10001010,B11101110,B00000000,B00000000};\nbyte vingtetun [] = {B00000000,B11100010,B00100110,B11100010,B10000010,B11100010,B00000000,B00000000};\nbyte vingtdeux [] = {B00000000,B11101110,B00100010,B11101110,B10001000,B11101110,B00000000,B00000000};\nbyte vingttrois [] = {B00000000,B11101110,B00100010,B11101110,B10000010,B11101110,B00000000,B00000000};\nbyte vingtquatre [] = {B00000000,B11101000,B00101010,B11101110,B10000010,B11100010,B00000000,B00000000};\nbyte vingtcinq [] = {B00000000,B11101110,B00101000,B11101110,B10000010,B11101110,B00000000,B00000000};\nbyte vingtsix [] = {B00000000,B11101000,B00101000,B11101110,B10001010,B11101110,B00000000,B00000000};\nbyte vingtsept [] = {B00000000,B11101110,B00100010,B11100110,B10000010,B11100010,B00000000,B00000000};\nbyte vingthuit [] = {B00000000,B11101110,B00101010,B11101110,B10001010,B11101110,B00000000,B00000000};\nbyte vingtneuf [] = {B00000000,B11101110,B00101010,B11101110,B10000010,B11100010,B00000000,B00000000};\nbyte trente [] = {B00000000,B11101110,B00101010,B11101010,B00101010,B11101110,B00000000,B00000000};";
    return "afficher(" + nb + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_ultrason_distance"] = function(block) {
    var trig = Blockly.Arduino.valueToCode(block, "a", Blockly.Arduino.ORDER_ASSIGNMENT);
    var echo = Blockly.Arduino.valueToCode(block, "b", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.codeFunctions_["ultrason_distance"] = "char distance () {\n  digitalWrite(" + trig + ",HIGH);\n  delayMicroseconds(10);\n  digitalWrite(" + trig + ",LOW);\n  return pulseIn(" + echo + ",HIGH)/58;\n}";
    Blockly.Arduino.setups_["ultrason_distance"] = "pinMode(" + trig + ",OUTPUT);\n  digitalWrite(" + trig + ",LOW);\n  pinMode(" + echo + ",INPUT);";
    var code = "distance()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_inout_buildin_led"] = function(block) {
    var dropdown_stat = block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_13"] = "pinMode(13, OUTPUT);";
    var code = "digitalWrite(13, " + dropdown_stat + ");\n";
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_moteur_dc"] = function(block) {
    var dropdown_moteur = block.getFieldValue("MOTEUR");
    var dropdown_mot = parseInt(dropdown_moteur) + 5;
    var dropdown_etat = block.getFieldValue("ETAT");
    var value_vitesse = Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur] = "pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot] = "pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_init"] = function(block) {
    var volume = Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.codeFunctions_["fonction_mp3"] = "void exe_cmd(byte CMD, byte Par1, byte Par2) {\n  word check = -(0xFF + 0x06 + CMD + 0x00 + Par1 + Par2);\n  byte Command[10] = {0x7E,0xFF,0x06,CMD,0x00,Par1,Par2,highByte(check),lowByte(check),0xEF};\n  for (int i=0; i<10; i++) {\n    Serial.write( Command[i]);\n  };\n}";
    Blockly.Arduino.setups_["setup_mp3"] = "Serial.begin(9600);\n  delay(1000);\n  exe_cmd(0x3F,0,0);\n  delay(500);\n  exe_cmd(0x06,0," + volume + ");\n  delay(500);\n  exe_cmd(0x11,0,1);\n  delay(500);";
    return ""
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_volume"] = function(block) {
    var volume = Blockly.Arduino.valueToCode(block, "Volume", Blockly.Arduino.ORDER_ATOMIC);
    return "exe_cmd(0x06,0," + volume + ");\ndelay(500);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_next"] = function(block) {
    return "exe_cmd(0x01,0,1);\ndelay(500);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_prev"] = function(block) {
    return "exe_cmd(0x02,0,1);\ndelay(500);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_pause"] = function(block) {
    return "exe_cmd(0x0E,0,0);\ndelay(500);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lp2i_mp3_play"] = function(block) {
    return "exe_cmd(0x0D,0,1);\ndelay(500);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_tone"] = function(block) {
    var value_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
    var value_tps = Blockly.Arduino.valueToCode(block, "TPS", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin] = "pinMode(" + value_pin + ", OUTPUT);";
    return "tone(" + value_pin + "," + value_num + "," + value_tps + ");\ndelay(" + value_tps + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_notone"] = function(block) {
    var value_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + value_pin] = "pinMode(" + value_pin + ", OUTPUT);";
    return "noTone(" + value_pin + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_matrice8x8_symbole"] = function(block) {
    var name = block.getFieldValue("NAME");
    var l1 = block.getFieldValue("L1");
    var l2 = block.getFieldValue("L2");
    var l3 = block.getFieldValue("L3");
    var l4 = block.getFieldValue("L4");
    var l5 = block.getFieldValue("L5");
    var l6 = block.getFieldValue("L6");
    var l7 = block.getFieldValue("L7");
    var l8 = block.getFieldValue("L8");
    Blockly.Arduino.definitions_["variablebyte" + name] = "byte " + name + "[] = {\n B" + l1 + ",\n B" + l2 + ",\n B" + l3 + ",\n B" + l4 + ",\n B" + l5 + ",\n B" + l6 + ",\n B" + l7 + ",\n B" + l8 + "\n" + "};";
    return ""
};
Blockly.Arduino["SENSOR_ACTUATOR_matrice8x8_init"] = function(block) {
    var din = Blockly.Arduino.valueToCode(block, "DIN", Blockly.Arduino.ORDER_ASSIGNMENT);
    var clk = Blockly.Arduino.valueToCode(block, "CLK", Blockly.Arduino.ORDER_ASSIGNMENT);
    var cs = Blockly.Arduino.valueToCode(block, "CS", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["matrice8x8init"] = '#include <LedControl.h>';
    Blockly.Arduino.definitions_["matrice8x8init"] = "LedControl lc=LedControl(" + din + "," + clk + "," + cs + ",1)";
    Blockly.Arduino.codeFunctions_["matrice8x8init"] = "void afficher(byte s[]) {\n  for (int i=0; i<8; i++) {\n    lc.setRow(0,i,s[i]);\n  };\n}\n";
    Blockly.Arduino.setups_["matrice8x8"] = "lc.shutdown(0,false);\n  lc.shutdown(1,false);\n  lc.setIntensity(0,5);\n  lc.setIntensity(1,5);\n  lc.clearDisplay(0);\n  lc.clearDisplay(1);";
    return ""
};
Blockly.Arduino["SENSOR_ACTUATOR_matrice8x8_aff"] = function(block) {
    return "afficher(" + block.getFieldValue("TEXT") + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09"] = function(block) {
    var text1 = Blockly.Arduino.valueToCode(block, "TEXT1", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    var text2 = Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    return "lcd.setCursor(0,0);\nlcd.print(" + text1 + ");\nlcd.setCursor(0,1);\nlcd.print(" + text2 + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09_lc"] = function(block) {
    var value_num_ligne = block.getFieldValue("ligne") - 1;
    var value_num_colonne = block.getFieldValue("colonne") - 1;
    var text4 = Blockly.Arduino.valueToCode(block, "TEXT4", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''";
    return "lcd.setCursor(" + value_num_colonne + "," + value_num_ligne + ");\nlcd.print(" + text4 + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09_RAZ"] = function(block) {
    return "lcd.clear();\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lm35"] = function(block) {
    var pin = block.getFieldValue("broche");
    Blockly.Arduino.setups_["lm35"] = "analogReference(INTERNAL);";
    var code = "analogRead(" + pin + ")/11";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_moteur_action"] = function(block) {
    var dropdown_menu = block.getFieldValue("menu");
    var value_speed = block.getFieldValue("speed");
    Blockly.Arduino.includes_["AFMotor.h"] = "#include <AFMotor.h>";
    Blockly.Arduino.definitions_["AF_DCMotor_1"] = "AF_DCMotor motor_dc_1(1, MOTOR12_2KHZ);";
    Blockly.Arduino.definitions_["AF_DCMotor_2"] = "AF_DCMotor motor_dc_2(2, MOTOR12_2KHZ);";
    switch (dropdown_menu) {
        case "a":
            var code = "motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break;
        case "d":
            var code = "motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(FORWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(BACKWARD);\n";
            break;
        case "g":
            var code = "motor_dc_1.setSpeed(2*" + value_speed + ");\nmotor_dc_1.run(BACKWARD);\nmotor_dc_2.setSpeed(2*" + value_speed + ");\nmotor_dc_2.run(FORWARD);\n";
            break
    }
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_moteur_stop"] = function(block) {
    return "motor_dc_1.run(RELEASE);\nmotor_dc_2.run(RELEASE);\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_bluetooth_b"] = function(block) {
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE) || "false";
    var branch = Blockly.Arduino.statementToCode(block, "DO" + n);
    Blockly.Arduino.setups_["BLUETOOTH"] = "Serial.begin(9600);";
    var code = "if (Serial.available() > 0) {\n  char dataR = Serial.read();\n  if (dataR == " + argument + ") {\n  " + branch + "}\n";
    for (n = 1; n <= block.casebreakCount_; n++) {
        argument = Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE) || "false";
        branch = Blockly.Arduino.statementToCode(block, "DO" + n);
        code += "  if (dataR == " + argument + ") {\n  " + branch + "}\n"
    }
    code += "  delay(200);\n}\n";
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_blink"] = function(block) {
    var dropdown_speed = block.getFieldValue("speed");
    Blockly.Arduino.setups_["setup_output_13"] = "pinMode(13, OUTPUT);";
    return "digitalWrite(13, HIGH);\ndelay(" + dropdown_speed + ");\ndigitalWrite(13, LOW);\ndelay(" + dropdown_speed + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_dagu_rs027"] = function(block) {
    var dropdown_moteur = block.getFieldValue("MOTEUR");
    var dropdown_mot = parseInt(dropdown_moteur) - 2;
    var dropdown_etat = block.getFieldValue("ETAT");
    var value_vitesse = Blockly.Arduino.valueToCode(block, "Vitesse");
    Blockly.Arduino.setups_["setup_output_" + dropdown_moteur] = "pinMode(" + dropdown_moteur + ", OUTPUT);";
    Blockly.Arduino.setups_["setup_output_" + dropdown_mot] = "pinMode(" + dropdown_mot + ", OUTPUT);";
    return "analogWrite(" + dropdown_moteur + "," + value_vitesse + ");\ndigitalWrite(" + dropdown_mot + "," + dropdown_etat + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lcd"] = function(block) {
    var v_rs = Blockly.Arduino.valueToCode(block, "rs", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d4 = Blockly.Arduino.valueToCode(block, "d4", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d5 = Blockly.Arduino.valueToCode(block, "d5", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d6 = Blockly.Arduino.valueToCode(block, "d6", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_d7 = Blockly.Arduino.valueToCode(block, "d7", Blockly.Arduino.ORDER_ASSIGNMENT);
    var v_en = Blockly.Arduino.valueToCode(block, "en", Blockly.Arduino.ORDER_ASSIGNMENT);
    Blockly.Arduino.includes_["define_LiquidCrystal"] = "#include <LiquidCrystal.h>";
    Blockly.Arduino.definitions_["var_LiquidCrystal lcd"] = "LiquidCrystal lcd(" + v_rs + "," + v_en + "," + v_d4 + "," + v_d5 + "," + v_d6 + "," + v_d7 + ");";
    Blockly.Arduino.setups_["setup_lcd"] = "lcd.begin(16,2);";
    return ''
};
Blockly.Arduino["SENSOR_ACTUATOR_inout_bp"] = function(block) {
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code = "digitalRead(" + dropdown_pin + ") == LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_digital_write"] = function(block) {
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat = block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", OUTPUT);";
    var code = "digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_dht11"] = function(block) {
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var choice = block.getFieldValue("choix");
    Blockly.Arduino.includes_["dht.h"] = '#include <DHT.h>';
    Blockly.Arduino.definitions_["dht"] = "DHT dht(" + dropdown_pin + ", DHT11);";
    Blockly.Arduino.setups_["dht"] = "dht.begin();";
    switch (choice) {
        case "h":
            var code = "dht.readHumidity()";
            break;
        case "t":
            var code = "dht.readTemperature()";
            break;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_suiveur_ligne"] = function(block) {
    var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin] = "pinMode(" + dropdown_pin + ", INPUT);";
    var code = "digitalRead(" + dropdown_pin + ") == HIGH";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_light_sensor"] = function(block) {
    var dropdown_pin = block.getFieldValue("broche");
    var code = "analogRead(" + dropdown_pin + ")*255/1023";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_potentiometre"] = function(block) {
    var dropdown_pin = block.getFieldValue("broche");
    var code = "analogRead(" + dropdown_pin + ")*255/1023";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["SENSOR_ACTUATOR_moteur3v"] = function(block) {
    var dropdown_pin = block.getFieldValue("pin");
    var value_num = Blockly.Arduino.valueToCode(block, "speed", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_output" + dropdown_pin] = "pinMode(" + dropdown_pin + ", OUTPUT);";
    var code = "analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["SENSOR_ACTUATOR_bargraphe"] = function(block) {
    var level = Blockly.Arduino.valueToCode(block, 'del', Blockly.Arduino.ORDER_ATOMI) || "0";
    var _clock = Blockly.Arduino.valueToCode(block, 'clk', Blockly.Arduino.ORDER_ATOMIC);
    var _data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_["ledbar"] = "unsigned char _state[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};";
    Blockly.Arduino.codeFunctions_["ledbar"] = "void sendData(unsigned int data) {\n  for (unsigned char i=0; i < 16; i++){\n    unsigned int state = (data&0x8000) ? HIGH : LOW;\n    digitalWrite(" + _data + ", state);\n    state=digitalRead(" + _clock + ") ? LOW : HIGH;\n    digitalWrite(" + _clock + ", state);\n    data <<= 1;\n  }\n}\nvoid setData(unsigned char _state[]) {\n  sendData(0x00);\n  for (unsigned char i=0; i<10; i++) sendData(_state[10-i-1]);\n  sendData(0x00);\n  sendData(0x00);\n  digitalWrite(" + _data + ", LOW);\n  delayMicroseconds(10);\n  for (unsigned char i=0; i<4; i++){\n    digitalWrite(" + _data + ", HIGH);\n    digitalWrite(" + _data + ", LOW);\n  }\n}\nvoid SetLevel(float level) {\n  level=max(0, min(10, level));\n  level *= 8;\n  for (byte i=0; i<10; i++) {\n    _state[i] = (level>8) ? ~0 : (level>0) ? ~(~0 << byte(level)) : 0;\n    level -= 8;\n  };\n  setData(_state);\n}";
    Blockly.Arduino.setups_["ledbar"] = "pinMode(" + _clock + ", OUTPUT);\n  pinMode(" + _data + ", OUTPUT);";
    return "SetLevel(" + level + ");\n"
};
Blockly.Arduino["SENSOR_ACTUATOR_lcd_i2c"] = function(block) {
    var fond_couleur = block.getFieldValue("fond");
    Blockly.Arduino.includes_["rgb_lcd"] = '#include <Wire.h>\n#include <rgb_lcd.h>';
    Blockly.Arduino.definitions_["rgb_lcd"] = "rgb_lcd lcd;";
    Blockly.Arduino.setups_["rgb_lcd"] = "lcd.begin(16,2);";
    switch (fond_couleur) {
        case "bleu":
            var code = "lcd.setRGB(0,0,255);\n";
            break;
        case "jaune":
            var code = "lcd.setRGB(255,255,0);\n";
            break;
        case "rouge":
            var code = "lcd.setRGB(255,0,0);\n";
            break;
        case "vert":
            var code = "lcd.setRGB(0,255,0);\n";
            break
    };
    return code;
};