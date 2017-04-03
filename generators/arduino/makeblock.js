//Code generator functions for the MAKEBLOCK interface

/**
 * @license
 * GPL
 *
 * Copyright 2016 Bernard Remond.
 * https://github.com/nbremond77
 *
 */

/**
 * @fileoverview Helper functions for generating makeblock interface board.
 * @author nbremond@laposte.net (Bernard Remond)
 */

/**
 * @fileoverview Helper functions for generating seeeduino makeblock blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

//---------------------------------------------------

var makeblock_ir_code_detection_index = 0;

//---------------------------------------------------



myMakeBlockLibrary_ultrasonic = "class Ultrasonic{\n\
  public:\n\
    Ultrasonic(int TP, int EP);\n\
    long Timing();\n\
    long Ranging(int sys);\n\
\n\
    private:\n\
    int Trig_pin;\n\
    int Echo_pin;\n\
    long  duration, distance_cm, distance_inc;\n\
};\n\
\n\
Ultrasonic::Ultrasonic(int TP, int EP){\n\
   pinMode(TP,OUTPUT);\n\
   pinMode(EP,INPUT);\n\
   Trig_pin=TP;\n\
   Echo_pin=EP;\n\
   duration = 0;\n\
}\n\
long Ultrasonic::Timing(){\n\
  pinMode(Trig_pin,OUTPUT);\n\
  digitalWrite(Trig_pin, LOW);\n\
  delayMicroseconds(2);\n\
  digitalWrite(Trig_pin, HIGH);\n\
  delayMicroseconds(10);\n\
  digitalWrite(Trig_pin, LOW);\n\
  pinMode(Echo_pin,INPUT);\n\
  duration = pulseIn(Echo_pin,HIGH);\n\
  return duration;\n\
}\n\
\n\
long Ultrasonic::Ranging(int sys){\n\
  Timing();\n\
  if (sys) {\n\
    distance_cm = duration /29 / 2;\n\
    return distance_cm;\n\
  }\n\
  else {\n\
    distance_inc = duration / 74 / 2;\n\
    return distance_inc;\n\
  }\n\
}";

myMakeBlockLibrary_tone = "void NewTone(uint8_t pin, unsigned long frequency, unsigned long length = 0);\n\
void noNewTone(uint8_t pin = 0);\n\
unsigned long _nt_time;       // Time note should end.\n\
uint8_t _pinMask = 0;         // Pin bitmask.\n\
volatile uint8_t *_pinOutput; // Output port register\n\
\n\
void NewTone(uint8_t pin, unsigned long frequency, unsigned long length) {\n\
  uint8_t prescaler = _BV(CS10);                 // Try using prescaler 1 first.\n\
  unsigned long top = F_CPU / frequency / 4 - 1; // Calculate the top.\n\
  if (top > 65535) {                             // If not in the range for prescaler 1, use prescaler 256 (61 Hz and lower @ 16 MHz).\n\
    prescaler = _BV(CS12);                       // Set the 256 prescaler bit.\n\
    top = top / 256 - 1;                         // Calculate the top using prescaler 256.\n\
  }\n\
\n\
  if (length > 0) _nt_time = millis() + length; else _nt_time = 0xFFFFFFFF; // Set when the note should end, or play forever.\n\
\n\
  if (_pinMask == 0) {\n\
    _pinMask = digitalPinToBitMask(pin);                    // Get the port register bitmask for the pin.\n\
    _pinOutput = portOutputRegister(digitalPinToPort(pin)); // Get the output port register for the pin.\n\
    uint8_t *_pinMode = (uint8_t *) portModeRegister(digitalPinToPort(pin)); // Get the port mode register for the pin.\n\
    *_pinMode |= _pinMask; // Set the pin to Output mode.\n\
  }\n\
\n\
  ICR1    = top;                     // Set the top.\n\
  if (TCNT1 > top) TCNT1 = top;      // Counter over the top, put within range.\n\
  TCCR1B  = _BV(WGM13)  | prescaler; // Set PWM, phase and frequency corrected (ICR1) and prescaler.\n\
  TCCR1A  = _BV(COM1B0);\n\
  TIMSK1 |= _BV(OCIE1A);             // Activate the timer interrupt.\n\
}\n\
\n\
void noNewTone(uint8_t pin) {\n\
  TIMSK1 &= ~_BV(OCIE1A);   // Remove the timer interrupt.\n\
  TCCR1B  = _BV(CS11);      // Default clock prescaler of 8.\n\
  TCCR1A  = _BV(WGM10);     // Set to defaults so PWM can work like normal (PWM, phase corrected, 8bit).\n\
  *_pinOutput &= ~_pinMask; // Set pin to LOW.\n\
  _pinMask = 0; // Flag so we know note is no longer playing.\n\
}\n\
\n\
ISR(TIMER1_COMPA_vect) { // Timer interrupt vector.\n\
  if (millis() >= _nt_time) noNewTone(); // Check to see if it's time for the note to end.\n\
  *_pinOutput ^= _pinMask; // Toggle the pin state.\n\
}  \n\
";

//---------------------------------------------------


var _get_next_pin = function(dropdown_pin) { // TO BE UPDATED
  var pos = -1;
    //check if NextPIN in bound
  if(parseInt(dropdown_pin)){
    var NextPIN = parseInt(dropdown_pin)+1;
    pos = profile.defaultBoard.digital.indexOf(String(NextPIN));
  } else {
    var NextPIN = 'A'+(parseInt(dropdown_pin.slice(1,dropdown_pin.length))+1);
    pos = profile.defaultBoard.analog.indexOf(String(NextPIN));
  }
  if(pos < 0){
//    alert("Makeblock Sensor needs PIN#+1 port, current setting is out of bound.");
    return null;
  } else {
    return NextPIN;
  }
};


function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);};
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;};


goog.provide('Blockly.Arduino.makeblock');

goog.require('Blockly.Arduino');


function setOutput(pin, stat) {
    var code = "";

    Blockly.Arduino.setups_['setup_makeblock_output_'+pin] = 'pinMode('+pin+', OUTPUT);';
    
    //code = code + 'int tmp = '+stat+';\n';
    code = code + 'digitalWrite('+pin+','+stat+');\n';
    return code;
};


function getInput(pin) {
    var code = "";
    
    Blockly.Arduino.setups_['setup_makeblock_input_'+pin] = 'pinMode('+pin+', INPUT);';
    code = 'digitalRead('+pin+')';
    return code;
};



/** ****************** CAPTEURS ******************************/

Blockly.Arduino.makeblock_button = function() {
  var code = '(boolean)(analogRead(A7)<500)';
  Blockly.Arduino.setups_['setup_makeblock_button_A7'] = 'pinMode(A7, INPUT);';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.makeblock_potentiometer = function() { // TO BE UPDATED
  var Port = eval(this.getFieldValue('PIN'));
  var dropdown_pin = Port[0]; // Port_number[0]
  var code = 'analogRead('+dropdown_pin+')';
  Blockly.Arduino.setups_['setup_makeblock_potentiometer_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.makeblock_ils_switch = function() {
  var Port = eval(this.getFieldValue('PIN'));
  var dropdown_pin = Port[0]; // Port_number[0]
  var code =getInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.makeblock_pir_motion_sensor = function() {
  var Port = eval(this.getFieldValue('PIN'));
  var dropdown_pin = Port[0]; // Port_number[0]
  var code =getInput(dropdown_pin);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.makeblock_ultrasonic_ranger = function() {
  var Port = eval(this.getFieldValue('PIN'));
  var dropdown_pin1 = Port[0]; // Port_number[0]
//  var dropdown_pin2 = Port[1]; // Port_number[1]
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.definitions_['define_makeblock_ultrasonic'] = myMakeBlockLibrary_ultrasonic;
  Blockly.Arduino.definitions_['var_makeblock_ultrasonic'+dropdown_pin1] = 'Ultrasonic ultrasonic_'+dropdown_pin1+'('+dropdown_pin1+', '+dropdown_pin1+');\n';
  var code = "";
  if(dropdown_unit==="cm"){
    code = 'ultrasonic_'+dropdown_pin1+'.Ranging(1)';
  } 
  else {
    code = 'ultrasonic_'+dropdown_pin1+'.Ranging(0)';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.makeblock_LDR_sensor = function() { // TO BE UPDATED
//  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_pin = 'A6';
  var code = 'analogRead('+dropdown_pin+')';
  Blockly.Arduino.setups_['setup_makeblock_LDR_sensor_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//uint8_t MeLineFollower::readSensors(void)
//{
//  uint8_t state	= S1_IN_S2_IN;
//#ifdef ME_PORT_DEFINED
//  bool s1State = MePort::dRead1();
//  bool s2State = MePort::dRead2();
//#else // ME_PORT_DEFINED
//  bool s1State = digitalRead(_Sensor1);
//  bool s2State = digitalRead(_Sensor2);
//#endif // ME_PORT_DEFINED
//  state = ( (1 & s1State) << 1) | s2State;
//  return(state);


Blockly.Arduino.makeblock_line_finder = function() {
 //*   (0x00)-S1_IN_S2_IN:   sensor1 and sensor2 are both inside of black line \n
 //*   (0x01)-S1_IN_S2_OUT:  sensor1 is inside of black line and sensor2 is outside of black line \n
 //*   (0x02)-S1_OUT_S2_IN:  sensor1 is outside of black line and sensor2 is inside of black line \n
 //*   (0x03)-S1_OUT_S2_OUT: sensor1 and sensor2 are both outside of black line
  var Port = eval(this.getFieldValue('PIN'));
  var dropdown_pin1 = Port[0]; // Port_number[0]
  var dropdown_pin2 = Port[1]; // Port_number[1]

  var code = '( ((1 & '+getInput(dropdown_pin1)+') << 1) | '+getInput(dropdown_pin2)+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.makeblock_digital_temperature_sensor = function() {
  var Port = eval(this.getFieldValue('PIN'));
    var dropdown_pin = Port[0]; // Port_number[0]
    
    var dropdown_index = this.getFieldValue('INDEX');
    var dropdown_resolution = this.getFieldValue('RESOLUTION');

    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] = '#include <OneWire.h>\n'; 
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '#include <DallasTemperature.h>\n'; 

    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += 'float getMakeblockDigitalTemperature (DallasTemperature* sensor, int index);\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += 'float getMakeblockDigitalTemperature (DallasTemperature* sensor, int index)\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '  {\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '     sensor->setResolution('+dropdown_resolution+');\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '     sensor->requestTemperatures();\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '     return( sensor->getTempCByIndex(index));\n';
    Blockly.Arduino.definitions_['define_makeblock_DS18x20'] += '  }\n';
  
    Blockly.Arduino.definitions_['define_makeblock_DS18x20_'+dropdown_pin] = 'OneWire  ds_'+dropdown_pin+'('+dropdown_pin+');  // on pin '+dropdown_pin+' (a 4.7K resistor is necessary)\n'; 
    Blockly.Arduino.definitions_['define_makeblock_DS18x20_'+dropdown_pin] += 'DallasTemperature sensor_'+dropdown_pin+'(&ds_'+dropdown_pin+');\n'; 
    
    Blockly.Arduino.setups_['define_makeblock_DS18x20_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);\n';
    Blockly.Arduino.setups_['define_makeblock_DS18x20_'+dropdown_pin] += 'sensor_'+dropdown_pin+'.begin();\n'; 

    var code = 'getMakeblockDigitalTemperature( &sensor_'+dropdown_pin+', '+dropdown_index+')'; // Why "byIndex"? You can have more than one IC on the same bus. 0 refers to the first IC on the wire
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/** ****************** ACTIONNEURS ******************************/

Blockly.Arduino.makeblock_led = function() {
//    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_pin = '13';
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.makeblock_output = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.makeblock_IR_led = function() { // TO BE UPDATED
//    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_pin = '3';
    var dropdown_stat = this.getFieldValue('STAT');
    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Output = " + dropdown_stat + "\n";
    code = code + setOutput(dropdown_pin, dropdown_stat);
    return code;
};


Blockly.Arduino.makeblock_rgb_led = function() {
    var dropdown_stat_C1 = Blockly.Arduino.valueToCode(this, 'C1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat_C2 = Blockly.Arduino.valueToCode(this, 'C2', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat_C3 = Blockly.Arduino.valueToCode(this, 'C3', Blockly.Arduino.ORDER_ATOMIC);
    var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = this.getFieldValue('Number_of_Pixels');
//    var pin_ledrgb = this.getFieldValue('PIN');
    var pin_ledrgb = '13';
    
    Blockly.Arduino.definitions_['define_makeblock_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n'; 
    Blockly.Arduino.definitions_['define_makeblock_WS2812B_'+pin_ledrgb] = 'Adafruit_NeoPixel pixels_'+pin_ledrgb+' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
    Blockly.Arduino.setups_['setup_makeblock_WS2812B_0_'+pin_ledrgb] = 'pinMode('+pin_ledrgb+', OUTPUT);';
    Blockly.Arduino.setups_['setup_makeblock_WS2812B_1_'+pin_ledrgb] = 'pixels_'+pin_ledrgb+'.begin();\n';
  
    var code = 'pixels_'+pin_ledrgb+'.setPixelColor('+(pixel_number-1)+', pixels_'+pin_ledrgb+'.Color('+dropdown_stat_C1+','+dropdown_stat_C2+','+dropdown_stat_C3+'));\n';
    code    += 'pixels_'+pin_ledrgb+'.show();\n';
    return code;
};



Blockly.Arduino.makeblock_rgb_led2 = function() {
    var colour_name = this.getFieldValue('C');
    var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
    var numpixels = this.getFieldValue('Number_of_Pixels');
//    var pin_ledrgb = this.getFieldValue('PIN');
    var pin_ledrgb = '13';
    
    Blockly.Arduino.definitions_['define_makeblock_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n'; 
    Blockly.Arduino.definitions_['define_makeblock_WS2812B_'+pin_ledrgb] = 'Adafruit_NeoPixel pixels_'+pin_ledrgb+' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n'; 
    Blockly.Arduino.setups_['setup_makeblock_WS2812B_0_'+pin_ledrgb] = 'pinMode('+pin_ledrgb+', OUTPUT);';
    Blockly.Arduino.setups_['setup_makeblock_WS2812B_1_'+pin_ledrgb] = 'pixels_'+pin_ledrgb+'.begin();\n';
  
    var code = 'pixels_'+pin_ledrgb+'.setPixelColor('+(pixel_number-1)+', pixels_'+pin_ledrgb+'.Color('+hexToR(colour_name) +','+hexToG(colour_name) +','+hexToB(colour_name) +'));\n';
    code    += 'pixels_'+pin_ledrgb+'.show();\n';
    return code;
};



Blockly.Arduino.makeblock_piezo_buzzer = function() {
//    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_pin = '8';
    var frequency = Blockly.Arduino.valueToCode(this, 'Frequency', Blockly.Arduino.ORDER_ATOMIC);
    var duration = Blockly.Arduino.valueToCode(this, 'Duration', Blockly.Arduino.ORDER_ATOMIC);
    
    Blockly.Arduino.definitions_['define_makeblock_piezo_buzzer'] = myMakeBlockLibrary_tone; 

    var code = "// PROCESSING pin number [" + dropdown_pin + "] as Buzzer output. Frequency = " + frequency + " Duration: "+duration+"\n";
    Blockly.Arduino.setups_['setup_makeblock_buzzer_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
//    code = code + "tone("+dropdown_pin+", "+frequency+", "+duration+");";
    code = code + "NewTone("+dropdown_pin+", "+frequency+", "+duration+");";
return code;
};




Blockly.Arduino.makeblock_motor_builtin = function() {
  //#define Motor1_1  34 // 0x10 // 34
  //#define Motor1_2  35 // 0x20 // 35
  //#define Motor2_1  36 // 0x40 // 36
  //#define Motor2_2  37 // 0x80 // 37
  //#define Motor1_EN  5
  //#define Motor2_EN  6
    
  var dropdown_pin1 = "4";
  var dropdown_pin3 = "7";
  var Motor1_EN = "6";
  var Motor2_EN = "5";
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = "";
  if(dropdown_direction==="forward"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setOutput(dropdown_pin1, "1");
    code = code + setOutput(dropdown_pin3, "0");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="right") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);";
    code = code + setOutput(dropdown_pin1, "0");
    code = code + setOutput(dropdown_pin3, "0");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+0+");\n";
  } else if (dropdown_direction==="left") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setOutput(dropdown_pin1, "1");
    code = code + setOutput(dropdown_pin3, "1");
    code = code + "analogWrite("+Motor1_EN+", "+0+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="right_rotate") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);";
    code = code + setOutput(dropdown_pin1, "0");
    code = code + setOutput(dropdown_pin3, "0");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="left_rotate") {
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setOutput(dropdown_pin1, "1");
    code = code + setOutput(dropdown_pin3, "1");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="backward"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + "delay(50);\n";
    code = code + setOutput(dropdown_pin1, "0");
    code = code + setOutput(dropdown_pin3, "1");
    code = code + "analogWrite("+Motor1_EN+", "+speed+");\n";
    code = code + "analogWrite("+Motor2_EN+", "+speed+");\n";
  } else if (dropdown_direction==="stop"){
    code = code + "analogWrite("+Motor1_EN+", 0);\n";
    code = code + "analogWrite("+Motor2_EN+", 0);\n";
    code = code + setOutput(dropdown_pin1, "0");
    code = code + setOutput(dropdown_pin3, "0");
  }
  return code;
};




/** ****************** COMMUNICATION ******************************/




Blockly.Arduino.makeblock_bluetooth_slave = function() { // TO BE UPDATED
  var dropdown_pin = this.getFieldValue('PIN');
  var NextPIN = _get_next_pin(dropdown_pin);
  var name = this.getFieldValue('NAME');
//  var pincode = this.getFieldValue('PINCODE');
  var statement_receive = Blockly.Arduino.statementToCode(this, "RCV");
  var statement_send = Blockly.Arduino.statementToCode(this, "SNT");
  /* if(pincode.length != 4){
    alert("pincode length should be 4");
  } */
  Blockly.Arduino.definitions_['define_makeblock_softwareserial'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['var_makeblock_bluetooth_'+dropdown_pin] = 'SoftwareSerial blueToothSerial_'+dropdown_pin+'('+dropdown_pin+','+NextPIN+');\n';

  Blockly.Arduino.setups_['setup_makeblock_bluetooth_'+dropdown_pin] = 'Serial.begin(9600);\n';
  Blockly.Arduino.setups_['setup_makeblock_bluetooth_'+dropdown_pin] += '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_makeblock_bluetooth_'+dropdown_pin] += '  pinMode('+NextPIN+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_makeblock_bluetooth_'+dropdown_pin] += '  setupBlueToothConnection_'+dropdown_pin+'();\n';

  Blockly.Arduino.definitions_['define_makeblock_setupBlueToothConnection_'+dropdown_pin] = 'void setupBlueToothConnection_'+dropdown_pin+'()\n'+
  '{\n'+
  '  blueToothSerial_'+dropdown_pin+'.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STNA='+name+'\\r\\n"); //set the bluetooth name as "'+name+'"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n'+
  '  Serial.println("The slave bluetooth is inquirable!");\n'+
  '  delay(2000); // This delay is required.\n'+
  '  blueToothSerial_'+dropdown_pin+'.flush();\n'+
  '}\n';
  var code = 'char recvChar_'+dropdown_pin+';\n'+
  'while(1) {\n'+
  '  if(blueToothSerial_'+dropdown_pin+'.available()) {//check if there is any data sent from the remote bluetooth shield\n'+
  '    recvChar_'+dropdown_pin+' = blueToothSerial_'+dropdown_pin+'.read();\n'+
  '    Serial.print(recvChar_'+dropdown_pin+');\n'+
       statement_receive+
  '  }\n'+
  '  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n'+
  '    recvChar_'+dropdown_pin+' = Serial.read();\n'+
  '    blueToothSerial_'+dropdown_pin+'.print(recvChar_'+dropdown_pin+');\n'+
       statement_send+
  '  }\n'+
  '}\n';
  return code;
};


Blockly.Arduino.makeblock_rc = function() { // TO BE UPDATED
//  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_pin = '2';


  Blockly.Arduino.definitions_['define_makeblock_remote_control'] = '#include <IRremote.h>\n';

  Blockly.Arduino.definitions_['var_makeblock_remote_control_'+dropdown_pin] = 'IRrecv irrecv_'+dropdown_pin+'('+dropdown_pin+');\n';
  Blockly.Arduino.definitions_['var_makeblock_remote_control_result_'+dropdown_pin] = 'decode_results results_'+dropdown_pin+';\n';
  
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] = 'unsigned long IRRequest ()\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += ' {\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '  unsigned long IRResult = 0;\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '  if (irrecv_'+dropdown_pin+'.decode(&results_'+dropdown_pin+'))\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '     {\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '      IRResult = results_'+dropdown_pin+'.value;\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '      irrecv_'+dropdown_pin+'.resume();   // Receive the next value\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '     }\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '   return IRResult;\n';
  Blockly.Arduino.definitions_['setup_makeblock_remote_control_fct_'+dropdown_pin] += '  }\n';
  
  Blockly.Arduino.setups_['setup_makeblock_remote_control_pinmode_'+dropdown_pin] = '  pinMode('+dropdown_pin+', INPUT);\n';
  Blockly.Arduino.setups_['setup_makeblock_remote_control_pinmode_'+dropdown_pin] += '  irrecv_'+dropdown_pin+'.enableIRIn();\n';
  var code = 'IRRequest()'
  
//  var code = "if (irrecv_"+dropdown_pin+".decode(&results))";
//  code += "  {";
//  code += "   Serial.println(results_'+dropdown_pin+'.value, DEC); // Print the Serial 'results.value'";
//  code += "   irrecv_"+dropdown_pin+".resume();   // Receive the next value";
//  code += "  } ";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.makeblock_ir_code_detection = function() {
  var text_ir_code = this.getFieldValue('IR_Code');
  var max_Time = this.getFieldValue('max_Time');
  var value_irrecv = Blockly.Arduino.valueToCode(this, 'IRrecv', Blockly.Arduino.ORDER_ATOMIC);
  
  makeblock_ir_code_detection_index = makeblock_ir_code_detection_index + 1;

    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'+makeblock_ir_code_detection_index] = 'int makeblock_ir_code_detection_OK_'+makeblock_ir_code_detection_index+' = 0;\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_timeout'+makeblock_ir_code_detection_index] = 'unsigned long makeblock_ir_code_timeout_'+makeblock_ir_code_detection_index+' = 0;\n';
    
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] = 'unsigned long makeblock_ir_code_detection_OK(unsigned long ir_code, unsigned long maxtime, unsigned long int irRecv, int* memory, unsigned long* timeout) {\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    if (irRecv == ir_code) {\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '        *timeout = millis() + maxtime; // maxtime ms timeout\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '        *memory = 1;\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    if (millis() > *timeout) {\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '        *memory = 0;\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    if (*memory == 1) {\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '        return irRecv;\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    else {\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '        return 0;\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '    }\n';
    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '}\n';
//    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += 'void_clear_makeblock_ir_code_detection_OK(int* memory) {\n';
//    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '  *memory = 0;\n';
//    Blockly.Arduino.definitions_['var_makeblock_ir_code_detection'] += '}\n';

    
    
    var code = 'makeblock_ir_code_detection_OK('+text_ir_code+', '+max_Time+', '+value_irrecv+', &makeblock_ir_code_detection_OK_'+makeblock_ir_code_detection_index+', &makeblock_ir_code_timeout_'+makeblock_ir_code_detection_index+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};


/** ****************** UTILE ******************************/

myMakeBlockEdgeFunction = "boolean makeblock_edge(boolean* memory, boolean input) {\n\
    if (input & ~(*memory)) {\n\
        *memory = input;\n\
        return true;\n\
    }\n\
    else {\n\
        *memory = input;\n\
        return false;\n\
    }\n\
}\n";
  
Blockly.Arduino.makeblock_edge_detection = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');

    Blockly.Arduino.definitions_['var_makeblock_edge'+dropdown_pin] = 'boolean makeblock_edge_detection_'+dropdown_pin+' = false;\n';
    Blockly.Arduino.definitions_['var_makeblock_edge'] = myMakeBlockEdgeFunction;
//    Blockly.Arduino.setups_['setup_makeblock_edge_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';

    var code = ''
    if(dropdown_stat==="UP"){
        code += 'makeblock_edge(&makeblock_edge_detection_'+dropdown_pin+', (boolean)('+getInput(dropdown_pin)+'))';
    } else {
        code += 'makeblock_edge(&makeblock_edge_detection_'+dropdown_pin+', ~(boolean)('+getInput(dropdown_pin)+'))';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

