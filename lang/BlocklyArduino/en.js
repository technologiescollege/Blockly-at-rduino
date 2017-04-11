'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'empty!';
Blockly.Msg.ARRAY_CREATE_WITH = "created with";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "array";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this array block.";
Blockly.Msg.ARRAY_CREATE_WITH_HELPURL = "";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "an array";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "item";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the array.";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "Create a array with any number of items.";
Blockly.Msg.ARRAY_GETINDEX_AT = "get index";
Blockly.Msg.ARRAY_GETINDEX_AT1 = "get index";
Blockly.Msg.ARRAY_GETINDEX_AT2 = "index";
Blockly.Msg.ARRAY_GETINDEX_HELPURL = "";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "in Array";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP = "";

//ESK 6/13/2015 SWITCH CASE
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Add a condition to the case block.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Add a final, catch-all condition to the if block.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Switch (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "default";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "case";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Switch (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "do";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "If a value is true, then do some statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Drag from the left into here to add";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Add additional case break do";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP ="Add optional default action";

Blockly.Msg.VARIABLES_AS = "as";
Blockly.Msg.ARD_TYPE_ARRAY = "Array";
Blockly.Msg.ARD_TYPE_BOOL = "Boolean";
Blockly.Msg.ARD_TYPE_CHAR = "Character";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "ChildBlockMissing";
Blockly.Msg.ARD_TYPE_DECIMAL = "Decimal";
Blockly.Msg.ARD_TYPE_LONG = "Large Number";
Blockly.Msg.ARD_TYPE_NULL = "Null";
Blockly.Msg.ARD_TYPE_NUMBER = "Number";
Blockly.Msg.ARD_TYPE_SHORT = "Short Number";
Blockly.Msg.ARD_TYPE_TEXT = "Text";
Blockly.Msg.ARD_TYPE_UNDEF = "Undefined";
Blockly.Msg.ARD_TYPE_VOLATILE = "Volatile integer";

//**********************************categories***********************************************
//**********************************categories***********************************************
//**********************************categories***********************************************

Blockly.Msg.CAT_LOOPS = "Loops";
Blockly.Msg.CAT_LOGIC = "Logic";
Blockly.Msg.CAT_IF = "If";
Blockly.Msg.CAT_BOOL = "Boolean";
Blockly.Msg.CAT_MATH = "Math";
Blockly.Msg.CAT_TEXT = "Text";
Blockly.Msg.CAT_LIST = "Lists";
Blockly.Msg.CAT_ARRAY = "Array";
Blockly.Msg.CAT_COLOR = "Color";
Blockly.Msg.CAT_VARIABLES = "Variables";
Blockly.Msg.CAT_FUNCTIONS = "Functions";
Blockly.Msg.CAT_ARDUINO = "Arduino";
Blockly.Msg.CAT_ARDUINO_IN = "In";
Blockly.Msg.CAT_ARDUINO_OUT = "Out";
Blockly.Msg.CAT_ARDUINO_CONVERSION = "converting";
Blockly.Msg.CAT_ARDUINO_TIME = "time";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "serial communication";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "softserial lib";
Blockly.Msg.CAT_ARDUINO_SERVO = "Servo-Motor";

Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD = "Adafruit Motorshield";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v1 = "Adafruit Motorshield v1";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v2 = "Adafruit Motorshield v2";
Blockly.Msg.CAT_ADAFRUIT_JOYSTICK = "Joystick";

Blockly.Msg.CAT_DFRobot = "DFRobot";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "Shield LCD Keypad"; //Added february 27th 2016
Blockly.Msg.CAT_DFPLAYER = "DFPlayer mini MP3";

Blockly.Msg.CAT_LED_RGB_CHAIN = "chainable RGB LED";
Blockly.Msg.CAT_OLED_U8G = "OLED screen I2C";

Blockly.Msg.CAT_ROBUNO = "RobUno";  //added march 17th 2016
Blockly.Msg.CAT_ROBUNO_IN = "sensors";
Blockly.Msg.CAT_ROBUNO_OUT = "actuators";
Blockly.Msg.CAT_ROBUNO_MOTORS_CC = "moteurs CC";

Blockly.Msg.CAT_FISCHERTECHNIK = "fischertechnik";  //added march 26th 2016
Blockly.Msg.CAT_FISCHERTECHNIK_IN = "sensors";
Blockly.Msg.CAT_FISCHERTECHNIK_OUT = "actuators";
Blockly.Msg.CAT_FISCHERTECHNIK_MOTORS_CC = "moteurs CC";

Blockly.Msg.CAT_FLYCAMONE = "FlyCamOne Eco v2"; //added august 20th 2016

Blockly.Msg.CAT_GROVE = "Grove";  //added march 9th 2015
Blockly.Msg.CAT_GROVE_IN = "In";
Blockly.Msg.CAT_GROVE_OUT = "Out";
Blockly.Msg.CAT_GROVE_LCD = "LCD screen";
Blockly.Msg.CAT_GROVE_COMM = "Communication";

Blockly.Msg.CAT_ROBOTS = "Robots misc."; //Added April 7 2015 ESK
Blockly.Msg.CAT_ROBOTS_MOTORS = "Shield Motors";
Blockly.Msg.CAT_ROBOT_MISC = "IR";

Blockly.Msg.CAT_TECHNOZONE = "TechnoZone51";  //added march 11th 2015
Blockly.Msg.CAT_TECHNOZONE_IN = "sensors";
Blockly.Msg.CAT_TECHNOZONE_OUT = "actuators";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_PAP = "stepper motor";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_CC = "DC motor";
Blockly.Msg.CAT_TECHNOZONE_SERVO = "servo-motors";
Blockly.Msg.CAT_TECHNOZONE_LCD = "LCD screen";
Blockly.Msg.CAT_TECHNOZONE_TELEC = "remote";
Blockly.Msg.CAT_TECHNOZONE_IHM = "HMI console";
Blockly.Msg.CAT_TECHNOZONE_BT = "bluetooth";
Blockly.Msg.CAT_TECHNOZONE_SPEECH = "speech synthesizer";
Blockly.Msg.CAT_TECHNOZONE_ROBOT = "TZ51 Barbot robot";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_MOT = "motors";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IN = "sensors";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_OUT = "actuators";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_LCD = "LCD screen";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_BT = "bluetooth";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IHM = "HMI console";

Blockly.Msg.CAT_ZUMO = "ZumoBot";	//added april 6th 2015
Blockly.Msg.CAT_ZUMO_MOTORS = "Motors";
Blockly.Msg.CAT_ZUMO_SENSORS = "Sensors";
Blockly.Msg.CAT_ZUMO_FUNCTION = "Functions";

Blockly.Msg.CAT_BQ = "bitbloq";  //added july 14th 2015
Blockly.Msg.CAT_BQ_IN = "In";
Blockly.Msg.CAT_BQ_OUT = "Out";
Blockly.Msg.CAT_BQ_COMM = "Communication";

Blockly.Msg.CAT_JEULIN = "Traffic light";  //added january 11th 2016
Blockly.Msg.CAT_JEULIN_IN = "Sensors";
Blockly.Msg.CAT_JEULIN_OUT = "Actuators";

Blockly.Msg.CAT_MULTIFUNCTION = "multi-fonction";  //added march 9th 2016

Blockly.Msg.CAT_KIT_VELO_1 = "OBC33 kit vélo";
Blockly.Msg.CAT_KIT_VELO_2 = "OBC33 kit vélo";
Blockly.Msg.CAT_KIT_VELO_3 = "OBC33 kit vélo";  //added april 8th 2016

Blockly.Msg.CAT_MBOT_1 = "mBot";
Blockly.Msg.CAT_MBOT_2 = "mBot";
Blockly.Msg.CAT_MBOT_3 = "mBot"; //added april 8th 2016
Blockly.Msg.CAT_MBOT_4 = "mBot"; //added february 13th 2017

Blockly.Msg.CAT_ROMEO_1 = "RoMeo v2";
Blockly.Msg.CAT_ROMEO_2 = "RoMeo v2";
Blockly.Msg.CAT_ROMEO_3 = "RoMeo v2"; //added may 1st 2016

Blockly.Msg.CAT_SPI_COMM = "SPI communication";
Blockly.Msg.CAT_STEPPER = "Stepper motors"; //added august 28th 2016

Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["ON", "ON"], ["OFF", "OFF"]];
Blockly.Msg.INOUT_HIGH_LEVEL = "1 -> HIGH";
Blockly.Msg.INOUT_LOW_LEVEL = "0 -> low";

Blockly.Msg.CAT_MHK = "MyHumanKit"; //added august 23th 2016

Blockly.Msg.CAT_ESUS = "Esus board"; //added 8 october 2016
Blockly.Msg.CAT_ESUS_WIFI = "WiFi";
Blockly.Msg.CAT_ESUS_MOTORS = "Motors control";

Blockly.Msg.CAT_APDS_9960_RGB_Gesture = "color + movement"; //added 9 october 2016

Blockly.Msg.CAT_BT_ELECTRONICS = "Bluetooth Electronics"; //added 13 november 2016

Blockly.Msg.CAT_ICN = "ICN";  //added 3 january 2017

Blockly.Msg.CAT_LCD_SCREEN = "LCD screens";  //added 12 february 2017
Blockly.Msg.CAT_LCD_DFRobot_SHIELD_LCDKEYPAD = "DFRobot LCD Keypad shield";
Blockly.Msg.CAT_LCD_GROVE_LCD = "Grove LCD";
Blockly.Msg.CAT_LCD_TECHNOZONE_LCD = "TZ51 LCD";
Blockly.Msg.CAT_LCD_TECHNOZONE_ROBOT_LCD = "Barbot LCD";
Blockly.Msg.CAT_BLUETOOTH_MISC = "bluetooth misc.";
Blockly.Msg.CAT_BT_GROVE_COMM = "Grove";
Blockly.Msg.CAT_BT_TECHNOZONE_BT = "TechnoZone51";

Blockly.Msg.CAT_jfblocks = "frames"; // added february 28th, 2017

Blockly.Msg.CAT_COLLYC = "Collège-Lycée";

Blockly.Msg.CAT_SHARP = "Sharp IR";

Blockly.Msg.CAT_MATRIX_LED_RGB = "Matrix RGB LED 8x8"; //added 25 march 2017

Blockly.Msg.CAT_STORAGE_EEPROM = "storage"; //added 29 march 2017

//**********************************FieldInstance messages***********************************************
Blockly.Msg.COMPONENT_WARN = 'A %1 configuration block with the same %2 name must be added to use this block!';

Blockly.Msg.SOFTSERIAL_COMPONENT = 'softserial';
Blockly.Msg.STEPPER_COMPONENT = 'stepper';
Blockly.Msg.NEOPIXEL_COMPONENT = 'Neopixel';
Blockly.Msg.SERVO_COMPONENT = 'servomotor';
Blockly.Msg.SERVO_DEFAULT_NAME = "SERVO";
Blockly.Msg.SHARP_IR_COMPONENT = 'Sharp IR';


//**********************************blocks***********************************************
//**********************************blocks***********************************************
//**********************************blocks***********************************************

/// Ardublockly instances
Blockly.Msg.NEW_INSTANCE = 'nouvelle instance';
Blockly.Msg.RENAME_INSTANCE = 'renommer cette instance';
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';

Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "delay (in ms)";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME_SEC = "delay (in s)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "specify the pause time in milliseconds";
Blockly.Msg.ARDUINO_BASE_SETUP = "Setup";
Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL = "https://www.arduino.cc/en/Reference/Setup";
Blockly.Msg.ARDUINO_BASE_LOOP = "Arduino loop forever:";
Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL = "https://www.arduino.cc/en/Reference/Loop";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL = "https://www.arduino.cc/en/Reference/Millis";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED = "time (in ms) since program started";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_SEC = "time (in s) since program started";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "Number of milliseconds since the program started (unsigned long)";
Blockly.Msg.ARDUINO_BETWEEN = "random number between";
Blockly.Msg.ARDUINO_BETWEEN_AND = "and";
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL ="http://arduino.cc/en/Reference/map";
Blockly.Msg.ARDUINO_BASE_MAP_NUM ="to the transposed ";
Blockly.Msg.ARDUINO_BASE_MAP_DMAX = "over a range of [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "transfer a value on a scale from 0 to 1023 to another scale";
Blockly.Msg.ARDUINO_BASE_CODE = "Coding";
Blockly.Msg.ARDUINO_BASE_CONST = "define";
Blockly.Msg.ARDUINO_BASE_DEFINE_HELPURL = "https://www.arduino.cc/en/Reference/Define";
Blockly.Msg.ARDUINO_BASE_DEFINE = "Define";
Blockly.Msg.ARDUINO_BASE_DEFINE_TOOLTIP = "Define constants & librairies";
Blockly.Msg.ARDUINO_BASE_END = 'wait forever (end of program)';
Blockly.Msg.ARDUINO_CONSTRAIN = "constrain";
Blockly.Msg.ARDUINO_CONSTRAIN_X = " number";
Blockly.Msg.ARDUINO_CONSTRAIN_A = "from A = ";
Blockly.Msg.ARDUINO_CONSTRAIN_B = "to B = ";
Blockly.Msg.ARDUINO_CONSTRAIN_HELPURL = 'http://arduino.cc/en/Reference/Constrain';
Blockly.Msg.ARDUINO_CONSTRAIN_TOOLTIP = 'Constrains a number to be within a range.';
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "put the LEDs on the card to logic";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "off or turn on the LED on the Arduino board";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "put the pin Digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "to logic state";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 state numeric on a specific output";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "the logic state of the digital pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "reading the digital state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1 = "write on pin PWM~";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2 = "value";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output \nWARNING verify the No. on the board !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "write about Analog pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "value";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emits sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "on frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "for a time (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emits sound on the selected pin";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "mutes the sound on the selected pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "read value on the analog input";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_STATE = "state";
Blockly.Msg.ARDUINO_PULSEIN="PulseIn (µs) pin#";
Blockly.Msg.ARDUINO_PULSEIN_TIMEOUT="timeout (µs) ";
Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotate the servo-motor";
Blockly.Msg.ARDUINO_SERVO_MOVE_IMAGE = "images/a991.jpg";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2 = "on the pin";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "an angle (0~180°) of";
Blockly.Msg.ARDUINO_SERVO_MOVE_DELAY_TIME = "during a period (ms)";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "rotation possible between 0 ~ 180 degrees";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1 = "the angle of the servo motor";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_IMAGE = "images/a991.jpg";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2 = "connected on the pin";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP = "returns the number of degrees the last rotation";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL = "https://www.arduino.cc/en/Reference/ServoWrite";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "turn continuous servomotor";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT1 = "PIN#";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT2 = "speed [0~180]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT3 = "speed [0~90]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT4 = "direction";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "degrees for power : 0° -> max on left | 90° -> stop | 180° -> max on right";
Blockly.Msg.ARDUINO_SERVO_PIN = "PIN#";
Blockly.Msg.ARDUINO_SERVO_ATTACH1 = "attach servomotor";
Blockly.Msg.ARDUINO_SERVO_ATTACH2 = "id#";
Blockly.Msg.ARDUINO_SERVO_ATTACHED = "servo attached ?";
Blockly.Msg.ARDUINO_SERVO_DETACH = "detach servo on PIN#";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "send the data to the serial port:";
Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT = "print new line data on serial port:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT = "print with tab data on serial port:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT = "print text on serial port :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER = "with this following number :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE = "and go to a new line ?";

Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = "attachInterrupt pin#";
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "detachInterrupt pin#";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = 'Attachs interrupt to a specific Port';
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = 'Detachs interrupt to a specific Port';
Blockly.Msg.LKL_MODE = 'mode';
Blockly.Msg.LKL_DROPDOWN = [['RISING', "RISING"], ['FALLING', "FALLING"], ['CHANGE', "CHANGE"], ['LOW', "LOW"]];

//SERIAL
Blockly.Msg.Serial_Init="Serial communication init speed";
Blockly.Msg.Serial_Print="Serial Print console";
Blockly.Msg.Serial_Write="Serial write";
Blockly.Msg.Serial_write_out="Write";
Blockly.Msg.Serial_Print_Format="Print  Format";
Blockly.Msg.Serial_Print_ForDecimal="decimal";
Blockly.Msg.Serial_Print_ForHexa="hexadecimal";
Blockly.Msg.Serial_Print_ForBin="binary";
Blockly.Msg.Serial_Print_ForOct="octal";
Blockly.Msg.Serial_read="Serial Read";
Blockly.Msg.Serial_avai="Serial Available?";
Blockly.Msg.Serial_flush="Serial flush";

//SOFTWARE SERIAL
Blockly.Msg.SSERIAL_DEFAULT_NAME="SoftSerial";
Blockly.Msg.SSERIAL_Init="INIT";
Blockly.Msg.SSERIAL_SPEED="speed";
Blockly.Msg.SSERIAL_TX="TX#";
Blockly.Msg.SSERIAL_RX="RX#";
Blockly.Msg.SSERIAL_Read="SoftwareSerial Read";
Blockly.Msg.SSERIAL_Print="SoftwareSerial Print";
Blockly.Msg.SSERIAL_Write="SoftwareSerial Write";
Blockly.Msg.SSERIAL_Avai="SoftwareSerial Available?";

//VARIABLES
Blockly.Msg.ARDUINO_VAR_DECLARE="Declare";
Blockly.Msg.ARDUINO_VAR_AS="as";
Blockly.Msg.ARDUINO_VAR_VAL="value";

//Conversions
Blockly.Msg.CONV_tochar="Convert to char ";
Blockly.Msg.CONV_tobyte="Convert to Byte ";
Blockly.Msg.CONV_toint="Convert to Int ";
Blockly.Msg.CONV_tofloat="Convert to Float ";

//added april 6th 2015
Blockly.Msg.GROVE_INOUT_DHT_HELPURL = "https://github.com/adafruit/DHT-sensor-library";
Blockly.Msg.GROVE_INOUT_DHT_READ_C = "Temperature C";
Blockly.Msg.GROVE_INOUT_DHT_READ_F = "Temperature F";
Blockly.Msg.GROVE_INOUT_DHT_READ_H = "Humidity %";
Blockly.Msg.GROVE_INOUT_DHT_READ_PIN = "Pin#";
Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR = "Sensor";
Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP = "The DHT sensors are made of two parts, a capacitive humidity sensor and a thermistor.";
Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE = "Content";
Blockly.Msg.GROVE_INOUT_DHT_WARNING = "Need to install the (adafruit) DHT-sensor-library";
Blockly.Msg.GROVE_INOUT_LED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LED_INPUT1 = "LED";
Blockly.Msg.GROVE_INOUT_LED_INPUT2 = "on Digital";
Blockly.Msg.GROVE_INOUT_LED_INPUT3 = "state";
Blockly.Msg.GROVE_INOUT_LED_TOOLTIP = "Digital output with LED";
Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button";
Blockly.Msg.GROVE_INOUT_BUTTON_TEXT = "Button";
Blockly.Msg.GROVE_INOUT_BUTTON_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP = "Basic digital input";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT = "Rotary Angle";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP = "Analog input between 0 and 255";
Blockly.Msg.GROVE_INOUT_TILT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch";
Blockly.Msg.GROVE_INOUT_TILT_TEXT = "Tilt Switch";
Blockly.Msg.GROVE_INOUT_TILT_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_TILT_TOOLTIP = "When the switch is level it is open, and when tilted, the switch closes.";
Blockly.Msg.GROVE_INOUT_BUZZER_HELPURL = "http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1 = "Piezo Buzzer";
Blockly.Msg.GROVE_INOUT_BUZZER_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2 = "stat";
Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP = "Emit a tone when the output is high";
Blockly.Msg.GROVE_INOUT_RELAY_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Relay";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT1 = "Relay";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT2 = "stat";
Blockly.Msg.GROVE_INOUT_RELAY_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP = "capable of switching a much higher voltages and currents. The maximum voltage and current that can be controlled by this module upto 250V at 10 amps.";
Blockly.Msg.GROVE_INOUT_TEMP_HELPURL = "http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature";
Blockly.Msg.GROVE_INOUT_TEMP_TEXT = "Temporature Sensor";
Blockly.Msg.GROVE_INOUT_TEMP_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_TEMP_TOOLTIP = "return number of ambient temperature in °";
Blockly.Msg.GROVE_INOUT_MOISTURE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor";
Blockly.Msg.GROVE_INOUT_MOISTURE_TEXT = "Moisture Sensor";
Blockly.Msg.GROVE_INOUT_MOISTURE_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_MOISTURE_TOOLTIP = "return number of moisture";
Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TEXT = "Serial LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT1 = "PIN#";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT2 = "print line1";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT3 = "print line2";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT4 = "Delay";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TOOLTIP = "print text on an 16 character by 2 line LCD.";
Blockly.Msg.GROVE_INOUT_LCD_POWER_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TEXT = "Serial LCD";
Blockly.Msg.GROVE_INOUT_LCD_POWER_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE = "Power";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TOOLTIP = "Turn LCD power on/off";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TEXT = "Serial LCD";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_CLEAN = "clean LCD";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT = "Effect";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT = [["Scroll Left", "LEFT"], ["Scroll Right", "RIGHT"], ["Scroll Auto", "AUTO"]];
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP = "Turn LCD power on/off";
Blockly.Msg.GROVE_INOUT_SOUND_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor";
Blockly.Msg.GROVE_INOUT_SOUND_TEXT = "Sound Sensor";
Blockly.Msg.GROVE_INOUT_SOUND_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP = "Detect the sound strength of the environment";
Blockly.Msg.GROVE_INOUT_PIR_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor";
Blockly.Msg.GROVE_INOUT_PIR_TEXT = "PIR Motion Sensor";
Blockly.Msg.GROVE_INOUT_PIR_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_PIR_TOOLTIP = "When anyone moves in it\'s detecting range, the sensor outputs HIGH.";
Blockly.Msg.GROVE_INOUT_LINE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Line_Finder";
Blockly.Msg.GROVE_INOUT_LINE_TEXT = "Line Finder";
Blockly.Msg.GROVE_INOUT_LINE_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP = "Output digital signal so the robot can reliably follow a black line on a white background";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT = "Ultrasonic Ranger";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT = "unit";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP = "Non-contact distance measurement module";
Blockly.Msg.GROVE_INOUT_MOTOR_HELPURL = "http://www.seeedstudio.com/wiki/Motor_Shield";
Blockly.Msg.GROVE_INOUT_MOTOR_TEXT = "Motor";
Blockly.Msg.GROVE_INOUT_MOTOR_CHOICE = [["Stop", "stop"], ["Forward", "forward"], ["Right", "right"], ["Left", "left"], ["Backward", "backward"]];
Blockly.Msg.GROVE_INOUT_MOTOR_TOOLTIP = "Drive two brushed DC motors";
Blockly.Msg.GROVE_INOUT_JOYSTICK_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT1 = "Thumb Joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT2 = "axis";
Blockly.Msg.GROVE_INOUT_JOYSTICK_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.GROVE_INOUT_JOYSTICK_TOOLTIP = "output two analog values(200~800) representing two directions";
Blockly.Msg.GROVE_INOUT_RGBLED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED";
Blockly.Msg.GROVE_INOUT_RGBLED_TEXT = "RGB LED";
Blockly.Msg.GROVE_INOUT_RGBLED_INPUT = "value [0~255]";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR1 = "Red on PIN#";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR2 = "Green on PIN#";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR3 = "Blue on PIN#";
Blockly.Msg.GROVE_INOUT_RGBLED_TOOLTIP = "Each primary color, red/green/blue, has 256 color level.";
Blockly.Msg.GROVE_INOUT_BT_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM1 = "Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM2 = "PIN#";
Blockly.Msg.GROVE_INOUT_BT_COMM3 = "name";
Blockly.Msg.GROVE_INOUT_BT_COMM4 = "pin code";
Blockly.Msg.GROVE_INOUT_BT_COMM5 = "send";
Blockly.Msg.GROVE_INOUT_BT_COMM6 = "receive";
Blockly.Msg.GROVE_INOUT_BT_TOOLTIP = "Bluetooth V2.0+EDR slave. Support single slave per board";

//************************************** ajoute 16/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_INOUT_BT_AT_HELPURL = "http://wiki.seeed.cc/Grove-Serial_Bluetooth_v3.0/";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM1 = "Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM2 = "PIN#";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM3 = "name";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM4 = "pin code";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM5 = "receive";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM6 = "send";
Blockly.Msg.GROVE_INOUT_BT_AT_TOOLTIP = "Bluetooth V3.0 + EDR slave. Support single slave per board";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_EMETTEUR_IR_TEXT = "Led IR";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1 = "Emetter signal IR on PIN";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2 = "Frequency (Hz) 38000 ";
Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Emitter/";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_RECEPTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Receiver/";
Blockly.Msg.GROVE_RECEPTEUR_IR_TEXT = "state receiver IR";
Blockly.Msg.GROVE_RECEPTEUR_IR_INPUT = "on the PIN";
Blockly.Msg.GROVE_RECEPTEUR_IR_TOOLTIP = "input numeric";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_FIN_COURSE_HELPURL = "http://www.technologieservices.fr/fr/a-a1000024681-edc1000003/article/GROV201-Module-Grove-Interrupteur-fin-de-course.html";
Blockly.Msg.GROVE_FIN_COURSE_TEXT = "sensor end of course";
Blockly.Msg.GROVE_FIN_COURSE_INPUT = "on the PIN";
Blockly.Msg.GROVE_FIN_COURSE_TOOLTIP = "input numeric";

//******** Grove commun � tous les drivers moteur Cdo 2017 03 19*/
Blockly.Msg.GROVE_DRIVER_MOTOR1 = "Motor 1";
Blockly.Msg.GROVE_DRIVER_MOTOR2 = "Motor 2";
Blockly.Msg.GROVE_DRIVER_MOTOR3 = "Motor 3";
Blockly.Msg.GROVE_DRIVER_MOTOR4 = "Motor 4";
Blockly.Msg.GROVE_DRIVER_MOTOR_SPEED = "Speed";
//******** collyc Grove driver13 */
Blockly.Msg.GROVE_DRIVER13_HELPURL = "http://wiki.seeed.cc/Grove-I2C_Motor_Driver_V1.3/";
Blockly.Msg.GROVE_DRIVER13_MOTOR_TITLE = "Motor Driver V1.3";
Blockly.Msg.GROVE_DRIVER13_MOTOR_I2C_ADDRESS = "I2C Address";
Blockly.Msg.GROVE_DRIVER13_TOOLTIP = "Motor Driver - " + 
                            "I2C Address in range 0, 15 (0x0F) depending on the card configuration, " + 
                            "Motor speed in range -100, 100; 0 eq stop";
//******** collyc Grove minimoto */
Blockly.Msg.GROVE_MINI_DRIVER_TITLE = "Motor Mini Driver";
Blockly.Msg.GROVE_MINI_DRIVER_HELPURL = "http://wiki.seeed.cc/Grove-Mini_I2C_Motor_Driver_v1.0/";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_MSG = "Speed";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_TOOLTIP = "Motor Mini Driver - " + 
                            "Motor speed in range -100, 100";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_MSG = "Stop";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_TOOLTIP = "Motor Mini Driver - " + 
                            "Stops the selected motor";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_MSG = "Status";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_TOOLTIP = "Grove Motor Mini Driver - " + 
                            "Returns select motor status (0: OK, 3 et 17: overcurrent, 9: under voltage, 5: over heat)";

//added April 3rd 2015 ESK
Blockly.Msg.ROBOTS_MOTORS_FORWARD = "Forward";
Blockly.Msg.ROBOTS_MOTORS_BACKWARD = "Backward";
Blockly.Msg.ROBOTS_MOTORS_STOP = "Stop";
Blockly.Msg.ROBOTS_MOTORS_LEFT= "Left";
Blockly.Msg.ROBOTS_MOTORS_RIGHT = "Right";
Blockly.Msg.ROBOTS_MOTORS_SPEEDR = "Speed R/B";
Blockly.Msg.ROBOTS_MOTORS_SPEEDL = "Speed L/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_S_TITLE = "Generic Motor PWM";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_TITLE = "Generic Motor High/Low";
Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL = "https://www.pololu.com/docs/0J57/5";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TITLE = "Zumo -No flip";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP = "Drive Pololu Zumo (wired correctly)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TITLE = "Zumo -Flip left";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TOOLTIP = "Drive Pololu Zumo (flipped left motor)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TITLE = "Zumo -Flip right";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TOOLTIP = "Drive Pololu Zumo (flipped right motor)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TITLE = "Zumo -Flip both";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TOOLTIP = "Drive Pololu Zumo (flipped both motors)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TITLE = "Zumo Motor";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TOOLTIP = "Drive Pololu Zumo (wired correctly) +Speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TITLE = "Zumo -Flip left & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TOOLTIP = "Drive Pololu Zumo (flipped left motor) +Speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TITLE = "Zumo -Flip right & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TOOLTIP = "Drive Pololu Zumo (flipped right motor) +Speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FUS_TITLE = "Zumo -Flip Motors";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FUS_TOOLTIP = "Drive Pololu Zumo with option to flip motors";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER = "line follower";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_TOOLTIP = "follow a black line";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_HELPURL = "https://www.pololu.com/docs/0J57/7.d";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION = "manual calibration of sensors";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_TOOLTIP = "calibrates the sensor for ten seconds and turns on the pin 13 LED while calibration is going on";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_HELPURL = "https://www.pololu.com/product/1419";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TITLE = "Ardumotor";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP = "ArduMotor Sparkfun Shield A=left B=right";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL = "https://www.sparkfun.com/datasheets/DevTools/Arduino/Ardumoto_v13.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_S_TITLE = "Ardumotor & speed";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TITLE = "Radio Shack";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TOOLTIP = "Radio Shack Make: A&B Motors";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_HELPURL = "http://demandware.edgesuite.net/aasr_prd/on/demandware.static/Sites-radioshack-Site/Sites-radioshack-Library/default/v1427306427938/Support/ProductManuals/2770168_PM_EN.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE = "Arduino & speed";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP = "Arduino Motor Shield A=left B=right (no brake/current)";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL = "http://arduino.cc/en/Main/ArduinoMotorShieldR3";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE = "DFRobot & speed";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP = "DFRobot A&B Motors PWM Mode";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L298N)_(SKU:DRI0009)";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TITLE = "Pololu Drv8835";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TOOLTIP = "Pololu Drv8835";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_A = "Speed-A Left";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_B = "Speed-B Right";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_A = "Direction-L/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_B = "Direction-R/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_A = "PWM/Speed-L/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_B = "PWM/Speed-R/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A1 = "A1 Pin";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B1 = "B1 Pin";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A2 = "A2 Pin";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B2 = "B2 Pin";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TITLE = "1 time wait - Gen";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TOOLTIP = "1 time wait button in setup) - INPUT & wait for HIGH";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TITLE = "1 Time wait - Zumo";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TOOLTIP = "1 time wait button (in setup) - INPUT_PULLUP & wait for LOW)";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TITLE = "IR Serial Monitor";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TOOLTIP = "IR Decoder - users Serial Monitor (and library)";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TITLE = "IR Decode Blink";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TOOLTIP = "IR Decode LED Tester (requires library)";
Blockly.Msg.ROBOTS_MISC_IR_GET_TITLE = "IR # Get";
Blockly.Msg.ROBOTS_MISC_IR_GET_TOOLTIP = "Produces IR code use case statement not IFs (requires library)";
Blockly.Msg.ROBOTS_MISC_LED_PIN = "LED Pin#";
Blockly.Msg.ROBOTS_MISC_IR_CODE = "IR Code";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TITLE = "Four Pin Ranger";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TOOLTIP = "4Pin Sonic - Provides distance in inches";
Blockly.Msg.ROBOTS_MISC_TRIGGER_PIN = "Trigger_Pin#";
Blockly.Msg.ROBOTS_MISC_ECHO_PIN = "Echo_Pin#";
Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN = "IR Pin#";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TITLE = "Zumo Buzzer";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_HELPURL = "https://www.pololu.com/docs/0J18/3";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TOOLTIP = "Volume = 1-15 Duration = 100-4000";
Blockly.Msg.ROBOTS_MISC_BUZZER_DURATION = "Duration";
Blockly.Msg.ROBOTS_MISC_BUZZER_VOLUME = "Volume";
Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE = "Note";

//updated july 24th 2015
Blockly.Msg.TECHNOZONE51_TEXT1 = "The sensor ";
Blockly.Msg.TECHNOZONE51_TEXT2 = "on the pin ";
Blockly.Msg.TECHNOZONE51_TEXT2bis = "on Analog pin A";
Blockly.Msg.TECHNOZONE51_TEXT3 = " is on the line ?";
Blockly.Msg.TECHNOZONE51_TEXT4 = "a line detector (réf : LIG1)";
Blockly.Msg.TECHNOZONE51_TEXT5 = "the button ";
Blockly.Msg.TECHNOZONE51_TEXT6 = " is pressed ?";
Blockly.Msg.TECHNOZONE51_TEXT7 = "a white button (réf : BTN1-WHITE)";
Blockly.Msg.TECHNOZONE51_TEXT8 = "a black button (réf : BTN1-BLACK)";
Blockly.Msg.TECHNOZONE51_TEXT9 = "a green button (réf : BTN1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT10 = "a red button (réf : BTN1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT11 = "the switch ";
Blockly.Msg.TECHNOZONE51_TEXT12 = "a switch (réf : SWITCH1 ou SWITCH2)";
Blockly.Msg.TECHNOZONE51_TEXT13 = " detect a magnetic field ?";
Blockly.Msg.TECHNOZONE51_TEXT14 = "a magnetic field sensor (réf : ILS1)";
Blockly.Msg.TECHNOZONE51_TEXT15 = "the proximity sensor ";
Blockly.Msg.TECHNOZONE51_TEXT16 = " detect an obstacle ?";
Blockly.Msg.TECHNOZONE51_TEXT17 = "an obstacle sensor (réf : PROXI1)";
Blockly.Msg.TECHNOZONE51_TEXT18 = "the infrared barrier ";
Blockly.Msg.TECHNOZONE51_TEXT19 = "an infrared barrier (réf : BARI1)";
Blockly.Msg.TECHNOZONE51_TEXT20 = " detetct a presence ?";
Blockly.Msg.TECHNOZONE51_TEXT21 = "a presence sensor (réf : SERVO1 + CMOUV1)";
Blockly.Msg.TECHNOZONE51_TEXT22 = "the position of the potentiometer ";
Blockly.Msg.TECHNOZONE51_TEXT23 = "a potentometer (réf : POTAR1)";
Blockly.Msg.TECHNOZONE51_TEXT24 = "the temperature in C° ";
Blockly.Msg.TECHNOZONE51_TEXT25 = "a temperature sensor (réf : CTN1)";
Blockly.Msg.TECHNOZONE51_TEXT26 = "the luminosity in Lux ";
Blockly.Msg.TECHNOZONE51_TEXT27 = "a luminosity sensor (réf : LDR1)";
Blockly.Msg.TECHNOZONE51_TEXT28 = "the distance measured in cm ";
Blockly.Msg.TECHNOZONE51_TEXT29 = "TRIG on the pin ";
Blockly.Msg.TECHNOZONE51_TEXT30 = "DIST on the pin ";
Blockly.Msg.TECHNOZONE51_TEXT31 = "an ultrasonic sonar (réf : SONAR1)";
Blockly.Msg.TECHNOZONE51_TEXT32 = " the DEL ";
Blockly.Msg.TECHNOZONE51_TEXT33 = "switch on";
Blockly.Msg.TECHNOZONE51_TEXT34 = "switch off";
Blockly.Msg.TECHNOZONE51_TEXT35 = "a red DEL (réf : LED1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT36 = "a green DEL (réf : LED1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT37 = "a yellow DEL (réf : LED1-YELLOW)";
Blockly.Msg.TECHNOZONE51_TEXT38 = "the relay ";
Blockly.Msg.TECHNOZONE51_TEXT39 = " to the state ";
Blockly.Msg.TECHNOZONE51_TEXT40 = "enable";
Blockly.Msg.TECHNOZONE51_TEXT41 = "disable";
Blockly.Msg.TECHNOZONE51_TEXT42 = "power relay (réf : RELAY1)";
Blockly.Msg.TECHNOZONE51_TEXT43 = "emit a sound";
Blockly.Msg.TECHNOZONE51_TEXT44 = "of frequency (Hz)";
Blockly.Msg.TECHNOZONE51_TEXT45 = "of duration (ms) ";
Blockly.Msg.TECHNOZONE51_TEXT46 = "Buzzer (réf : LED1-BUZZER1)";
Blockly.Msg.TECHNOZONE51_TEXT47 = "set the servo-motor";
Blockly.Msg.TECHNOZONE51_TEXT48 = "on the angle [0~180°]";
Blockly.Msg.TECHNOZONE51_TEXT49 = "Servo-motor (réf : SERVO1 + SERVO-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT50 = "The angle of the servo-motor ";
Blockly.Msg.TECHNOZONE51_TEXT51 = "drive the motor ";
Blockly.Msg.TECHNOZONE51_TEXT52 = "on the EASYCON1 card";
Blockly.Msg.TECHNOZONE51_TEXT53 = "clockwise (TRUE or FALSE ?)";
Blockly.Msg.TECHNOZONE51_TEXT54 = "speed [0~255]";
Blockly.Msg.TECHNOZONE51_TEXT55 = "DC motor driver on the EASYCON1 card (réf : EASYCON1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT56 = "on the EASYBOT1 card";
Blockly.Msg.TECHNOZONE51_TEXT57 = "DC motor driver on the EASYBOT1 card (réf : EASYBOT1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT58 = "on the MOT2 card";
Blockly.Msg.TECHNOZONE51_TEXT59 = " on the pins";
Blockly.Msg.TECHNOZONE51_TEXT60 = "direction pin (DIR)";
Blockly.Msg.TECHNOZONE51_TEXT61 = "speed pin (PWM~)";
Blockly.Msg.TECHNOZONE51_TEXT62 = "DC motor driver for EASYCON1,EASYCON2,EASYBOT1 cards (réf : MOT2)";
Blockly.Msg.TECHNOZONE51_TEXT63 = "initialize the PAP1 card ";
Blockly.Msg.TECHNOZONE51_TEXT64 = "on the I2C bus";
Blockly.Msg.TECHNOZONE51_TEXT65 = "on the address";
Blockly.Msg.TECHNOZONE51_TEXT66 = "the motor driving mode is ";
Blockly.Msg.TECHNOZONE51_TEXT67 = "the motor relax mode is ";
Blockly.Msg.TECHNOZONE51_TEXT68 = "stepping motor driver for EASYCON2,EASYBOT1 cards on the I2C bus (réf : PAP1)";
Blockly.Msg.TECHNOZONE51_TEXT69 = "continious movement of the motor ";
Blockly.Msg.TECHNOZONE51_TEXT70 = "on the PAP1 card";
Blockly.Msg.TECHNOZONE51_TEXT71 = "relative movement of the motor ";
Blockly.Msg.TECHNOZONE51_TEXT72 = "number of steps";
Blockly.Msg.TECHNOZONE51_TEXT73 = "is a stepper motor running ?";
Blockly.Msg.TECHNOZONE51_TEXT74 = "initialize the LCD screen";
Blockly.Msg.TECHNOZONE51_TEXT75 = "on the I2C address";
Blockly.Msg.TECHNOZONE51_TEXT76 = "number of column(s)";
Blockly.Msg.TECHNOZONE51_TEXT77 = "number of line(s)";
Blockly.Msg.TECHNOZONE51_TEXT78 = "enable the rétro-lighting ?";
Blockly.Msg.TECHNOZONE51_TEXT79 = "enable the cursor ?";
Blockly.Msg.TECHNOZONE51_TEXT80 = "cursor blinking ?";
Blockly.Msg.TECHNOZONE51_TEXT81 = "Initialize the LCD screen on the I2C bus (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT82 = "special functions";
Blockly.Msg.TECHNOZONE51_TEXT83 = "enable the retro-lighting";
Blockly.Msg.TECHNOZONE51_TEXT84 = "disable the retro-lighting";
Blockly.Msg.TECHNOZONE51_TEXT85 = "enable the cursor";
Blockly.Msg.TECHNOZONE51_TEXT86 = "disable the cursor";
Blockly.Msg.TECHNOZONE51_TEXT87 = "set cursor blinking on";
Blockly.Msg.TECHNOZONE51_TEXT88 = "set cursor blinking off";
Blockly.Msg.TECHNOZONE51_TEXT89 = "enable the display";
Blockly.Msg.TECHNOZONE51_TEXT90 = "disable the display";
Blockly.Msg.TECHNOZONE51_TEXT91 = "LCD screen special fonction on the I2C bus (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT92 = "clear the LCD screen";
Blockly.Msg.TECHNOZONE51_TEXT93 = "clear the LCD screen on the I2C bus (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT94 = "write on the LCD screen";
Blockly.Msg.TECHNOZONE51_TEXT95 = "at the position";
Blockly.Msg.TECHNOZONE51_TEXT96 = "column [0..MAXCOL-1]";
Blockly.Msg.TECHNOZONE51_TEXT97 = "line [0..MAXLIG-1]";
Blockly.Msg.TECHNOZONE51_TEXT98 = "the text";
Blockly.Msg.TECHNOZONE51_TEXT99 = "writing on the LCD screen on the I2C bus (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT100 = "initialize the remote";
Blockly.Msg.TECHNOZONE51_TEXT101 = "initialize the remote (réf : IRF1 + (TELEC1 ou TELEC2))";
Blockly.Msg.TECHNOZONE51_TEXT102 = "empty the remote buffer";
Blockly.Msg.TECHNOZONE51_TEXT103 = "empty the remote buffer (réf :IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT104 = "a key of the remote was pressed ?";
Blockly.Msg.TECHNOZONE51_TEXT105 = "test if a remote key was pressed (réf : IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT106 = "the key";
Blockly.Msg.TECHNOZONE51_TEXT107 = "of the remote";
Blockly.Msg.TECHNOZONE51_TEXT108 = "was pressed ?";
Blockly.Msg.TECHNOZONE51_TEXT109 = "test if a remote key was pressed (réf : IRF1 + TELEC2)";
Blockly.Msg.TECHNOZONE51_TEXT110 = "test if a remote key was pressed (réf : IRF1 + TELEC1)";
Blockly.Msg.TECHNOZONE51_TEXT111 = "initialize the HMI console";
Blockly.Msg.TECHNOZONE51_TEXT112 = "with the Bluetooth module";
Blockly.Msg.TECHNOZONE51_TEXT113 = "initialize the HMI console ( réf : BTIHM1 ) ";
Blockly.Msg.TECHNOZONE51_TEXT114 = "the HMI console is connected ?";
Blockly.Msg.TECHNOZONE51_TEXT115 = "Test if the HMI console is connected ( réf : BTIHM1 )";
Blockly.Msg.TECHNOZONE51_TEXT116 = "a value hes changed on HMI console ?";
Blockly.Msg.TECHNOZONE51_TEXT117 = "Test if a value has changed on the HMI console (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT118 = "initialize the LED ";
Blockly.Msg.TECHNOZONE51_TEXT119 = "of the HMI console";
Blockly.Msg.TECHNOZONE51_TEXT120 = "the text to display :";
Blockly.Msg.TECHNOZONE51_TEXT121 = "initialization of a HMI LED (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT122 = "set the DEL ";
Blockly.Msg.TECHNOZONE51_TEXT123 = "with the color";
Blockly.Msg.TECHNOZONE51_TEXT124 = "none";
Blockly.Msg.TECHNOZONE51_TEXT125 = "red";
Blockly.Msg.TECHNOZONE51_TEXT126 = "orange";
Blockly.Msg.TECHNOZONE51_TEXT127 = "yellow";
Blockly.Msg.TECHNOZONE51_TEXT128 = "green";
Blockly.Msg.TECHNOZONE51_TEXT129 = "blue";
Blockly.Msg.TECHNOZONE51_TEXT130 = "set the color of a HMI LED (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT131 = "Initialize the button ";
Blockly.Msg.TECHNOZONE51_TEXT132 = "initialization of a HMI button (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT133 = "read the state of a HMI button (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT134 = "Initialize a switch ";
Blockly.Msg.TECHNOZONE51_TEXT135 = "initialization of a HMI switch (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT136 = "enable";
Blockly.Msg.TECHNOZONE51_TEXT137 = "disable";
Blockly.Msg.TECHNOZONE51_TEXT138 = " the switch ";
Blockly.Msg.TECHNOZONE51_TEXT139 = "Switch on or off an HMI switch (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT140 = " is on ?";
Blockly.Msg.TECHNOZONE51_TEXT141 = "the state of an HMI switch (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT142 = "Initialize a potentiometer ";
Blockly.Msg.TECHNOZONE51_TEXT143 = "Divider : ";
Blockly.Msg.TECHNOZONE51_TEXT144 = "mini value : ";
Blockly.Msg.TECHNOZONE51_TEXT145 = "maxi value : ";
Blockly.Msg.TECHNOZONE51_TEXT146 = "Position : ";
Blockly.Msg.TECHNOZONE51_TEXT147 = "Initialization of an HMI potentiometer (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT148 = "The value of the potentiometer ";
Blockly.Msg.TECHNOZONE51_TEXT149 = "Read the value of a IHM potentiometer (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT150 = "Initialize the gauge ";
Blockly.Msg.TECHNOZONE51_TEXT151 = "Graduation 'min max step division' : ";
Blockly.Msg.TECHNOZONE51_TEXT152 = "Title gauge 'title;unit' :";
Blockly.Msg.TECHNOZONE51_TEXT153 = "Initialization of an IHM gauge (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT154 = "Set the gauge ";
Blockly.Msg.TECHNOZONE51_TEXT155 = "on the value : ";
Blockly.Msg.TECHNOZONE51_TEXT156 = "Number of digits : ";
Blockly.Msg.TECHNOZONE51_TEXT157 = "Initialization of the Bluetooth link";
Blockly.Msg.TECHNOZONE51_TEXT158 = "Initialization of the Bluetooth link ( réf : BTIHM1 ) ";
Blockly.Msg.TECHNOZONE51_TEXT159 = "a message is received on the Bluetooth ?";
Blockly.Msg.TECHNOZONE51_TEXT160 = "Test if a message is available on the bluetooth adapter (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT161 = "The bluetooth message received";
Blockly.Msg.TECHNOZONE51_TEXT162 = "Read the bluetooth message received (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT163 = "send a message on the bluetooth ";
Blockly.Msg.TECHNOZONE51_TEXT164 = "send a message on the bluetooth adapter (réf : BTIHM1)";
Blockly.Msg.TECHNOZONE51_TEXT165 = " is connected on the pins";
Blockly.Msg.TECHNOZONE51_TEXT166 = "codes for sentences to pronounce: ";
Blockly.Msg.TECHNOZONE51_TEXT167 = "speech synthesizer";
Blockly.Msg.TECHNOZONE51_TEXT168 = "(information : right clic -> help)";
Blockly.Msg.TECHNOZONE51_TEXT169 = "speed [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT170 = "level [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT171 = "distortion [0..1023] :";

//added july 17th 2015
Blockly.Msg.BQ_PIN = "Pin #";
Blockly.Msg.BQ_PIN_DIGITAL = "Digital Pin#";
Blockly.Msg.BQ_PIN_PWM = "PWM~ Pin#";
Blockly.Msg.BQ_PIN_ANALOG = "Analog Pin#";
Blockly.Msg.BQ_HELPURL = "http://www.bq.com/fr/produits/kit-robotica.html";
Blockly.Msg.BQ_LED1_TOOLTIP = "Sortie led (réf : LED)";
Blockly.Msg.BQ_BUZZER1_TOOLTIP = "Sortie Buzzer (réf : BUZZER)";
Blockly.Msg.BQ_SONAR1_TOOLTIP = "Entrée Ultrason (réf : ULTRASON)";
Blockly.Msg.BQ_SERVO1_TITLEA = "positionne le mini servo-moteur";
Blockly.Msg.BQ_SERVO1_TITLEB = "sur l'angle [0~180°]";
Blockly.Msg.BQ_SERVO1_TOOLTIP = "Sortie Servo-moteur (réf : MINI-SERVO)";
Blockly.Msg.BQ_SERVO2_TITLEA = "faire tourner le servo-moteur à rotation continue";
Blockly.Msg.BQ_SERVO2_TITLEB = "sens horaire (VRAI ou FAUX ?)";
Blockly.Msg.BQ_SERVO2_TITLEC = "à la vitesse [0~255] de";
Blockly.Msg.BQ_SERVO2_TITLED = "pendant un délai (ms) de";
Blockly.Msg.BQ_SERVO2_TOOLTIP = "rotation possible entre 0~180 degrés : 0~90 puissance variable dans un sens ; 90~180 puissance variable dans l'autre sens";
Blockly.Msg.BQ_BP_TOOLTIP = 'Entrée bouton poussoir (réf : BOUTON-POUSSOIR)';
Blockly.Msg.BQ_LUX_TITLE = "la luminosité (en Lux) lue";
Blockly.Msg.BQ_LUX_TOOLTIP = 'Entrée Capteur de Luminosité (réf : LUMINOSITE)';
Blockly.Msg.BQ_POT_TITLE = "la position du potentiomètre";
Blockly.Msg.BQ_POT_TOOLTIP = 'Entrée potentiomètre (réf : POTENTIOMETRE';
Blockly.Msg.BQ_IR_TITLE = "l'état du suiveur de ligne";
Blockly.Msg.BQ_IR_TOOLTIP = 'Entrée Détecteur de ligne (réf : LIG1)';
Blockly.Msg.BQ_BT_TITLE = "Bluetooth en mode esclave";
Blockly.Msg.BQ_BT_TOOLTIP = 'Bluetooth V2.0+EDR esclave. Seulement 1 esclave par carte.';


//added febr 7th 2016
Blockly.Msg.lp2i_mp3_init = "Audio DFPlayer Mini MP3 Init";
Blockly.Msg.lp2i_mp3_init_Pin_Rx = "Pin Rx =";
Blockly.Msg.lp2i_mp3_init_Pin_Tx = "Pin Tx (not used) =";
Blockly.Msg.lp2i_mp3_init_Pin_Busy = "Pin Busy =";
Blockly.Msg.lp2i_mp3_init_Volume = "Volume (30 max) =";

Blockly.Msg.lp2i_mp3 = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_File = "mp3 file number to play =";
Blockly.Msg.lp2i_mp3_Wait = "Waiting not busy to begin ? =";

Blockly.Msg.lp2i_mp3_Volume = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_Volume_Input = "Volume (30 max) =";

Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";

Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";

Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";

Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="

Blockly.Msg.lp2i_ledRGB_WS2812B_init = "Led RGB WS2812B Init";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin = "Pin =";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels = "Number of pixels =";
Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME = "RGB_LED";
Blockly.Msg.lp2i_ledRGB_WS2812B_Brightness = "Brightness =";
Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME = "NeoPixels";


Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor = "Led RGB WS2812B. Send color :";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red = "Red (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green = "Green (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue = "Blue (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number = "for pixel number (0 first) =";

Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_LCD_KeyPad_Shield_(SKU:_DFR0009)";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "écran LCD Keypad Shield";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "écrire sur la ligne 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "écrire sur la ligne 2";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT3 = "pendant (ms)";

//SHIELD ADAFRUIT
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - Motor DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - Motor DC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "Direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = "Speed [0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "Forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "Backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "Stop";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "Connect to";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "Step";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "Speed(RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "Move to Step";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1_MOT1 = "v1 - Joystick + motors";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY_MOT2 = "v2 - Joystick + motors";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1 = "v1 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY2 = "v2 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_X = "Connection(x)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_Y = "Connection(y)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_NEUTRE = "Neutral zone [0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "Motor DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "Motor DC 2";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_VARIABLES = "Variables : x = retX - y = retY";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_VARIABLES2 = "Neutre+ = neut - Neutre- = neutn";

//SHIELD MULTIFUNCTION
Blockly.Msg.multifunction_buildin_led_INPUT = "mettre la DEL intégrée";
Blockly.Msg.multifunction_buildin_led_STAT = "à l'état";
Blockly.Msg.multifunction_buildin_led_TOOLTIP = "allumer ou éteindre 1 des 4 DEL intégrées";
Blockly.Msg.multifunction_digital_read_INPUT = "état logique du bouton poussoir";
Blockly.Msg.multifunction_digital_read_TOOLTIP = "détecte l'état des BP intégrés";
Blockly.Msg.multifunction_pot_read_INPUT = "la valeur analogique du potentiomètre";
Blockly.Msg.multifunction_pot_read_TOOLTIP = "lis la valeur de la résistance ajustable";
Blockly.Msg.multifunction_analog_read_INPUT = "la valeur lue sur le port analogique A5";
Blockly.Msg.multifunction_analog_read_TOOLTIP = "seul A5 est disponible";
Blockly.Msg.multifunction_PWM_write_OUTPUT = "envoyer sur la sortie PWM~";
Blockly.Msg.multifunction_PWM_write_ANGLE = "la valeur";
Blockly.Msg.multifunction_PWM_write_TOOLTIP = "sortie numérique ou 'analogique' PWM";
Blockly.Msg.multifunction_tone_INPUT1 = "émettre un son sur le buzzer";
Blockly.Msg.multifunction_tone_INPUT2 = "d'une fréquence (Hz)";
Blockly.Msg.multifunction_tone_INPUT3 = "pendant une durée (ms) de";
Blockly.Msg.multifunction_tone_TOOLTIP = "buzzer connecté sur la sortie Numérique D";
Blockly.Msg.multifunction_notone_INPUT = "stopper le son sur la broche";
Blockly.Msg.multifunction_notone_TOOLTIP = "mets la buzzer à 0";
Blockly.Msg.multifunction_segment_TEXT = "afficher le nombre";
Blockly.Msg.multifunction_segment_INPUT1 = "1er chiffre";
Blockly.Msg.multifunction_segment_INPUT2 = "2ème chiffre";
Blockly.Msg.multifunction_segment_INPUT3 = "3ème chiffre";
Blockly.Msg.multifunction_segment_INPUT4 = "4ème chiffre";
Blockly.Msg.multifunction_segment_TOOLTIP = "afficher 4 chifres sur les 7 segments";

//Added March 18th 2016
Blockly.Msg.ROBUNO_INOUT_LED_INPUT1 = "mettre la DEL Rouge";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT2 = "sur la broche Numérique";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT3 = "à l'état";
Blockly.Msg.ROBUNO_LED1_TOOLTIP = "Sortie led (réf : LED)";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT4 = "mettre la DEL Blanche";
Blockly.Msg.ROBUNO_TEXT1 = "déclencher l'alarme collision";
Blockly.Msg.ROBUNO_TEXT2 = "d'une fréquence (Hz)";
Blockly.Msg.ROBUNO_TEXT3 = "pendant une durée (ms) ";
Blockly.Msg.ROBUNO_BUZZER1_TOOLTIP = "Sortie Buzzer (réf : BUZZER)";
Blockly.Msg.ROBUNO_SERVO2_TITLEA = "faire tourner le servomoteur de gauche";
Blockly.Msg.ROBUNO_SERVO2_TITLEB = "vers l'Avant (VRAI) ou Arrière (FAUX)";
Blockly.Msg.ROBUNO_SERVO2_TITLEC = "à la vitesse angulaire [0 ~ 180 degrés]";
Blockly.Msg.ROBUNO_SERVO2_TITLED = "faire tourner le servomoteur de droite";
Blockly.Msg.ROBUNO_SERVO2_TOOLTIP = "rotation possible entre 0~180 degrés : 0~90 puissance variable dans un sens ; 90~180 puissance variable dans l'autre sens";
Blockly.Msg.ROBUNO_PIN_PWM = "sur la broche PWM~";
Blockly.Msg.ROBUNO_TEXT4 = "le capteur de collision Gauche";
Blockly.Msg.ROBUNO_TEXT5 = "sur la broche ";
Blockly.Msg.ROBUNO_TEXT6 = " est appuyé ?";
Blockly.Msg.ROBUNO_TEXT7 = "Entrée Capteur de collision (réf : Gauche ou Droite)";
Blockly.Msg.ROBUNO_TEXT8 = "le capteur de collision Droite";
Blockly.Msg.ROBUNO_TEXT9 = "commande le moteur";
Blockly.Msg.ROBUNO_TEXT10 = "du shield Moteurs CC";
Blockly.Msg.ROBUNO_TEXT11 = "sur les broches";
Blockly.Msg.ROBUNO_TEXT12 = "broche de commande de Direction (DIR)";
Blockly.Msg.ROBUNO_TEXT13 = "broche de commande de la Vitesse (PWM~)";
Blockly.Msg.ROBUNO_TEXT14 = "sens horaire (255) ou antihoraire (0)?";
Blockly.Msg.ROBUNO_TEXT15 = "vitesse MAX (VRAI) ou nulle (FAUX)";
Blockly.Msg.ROBUNO_TEXT16 = "Carte de commande de deux moteurs CC";

Blockly.Msg.ROBUNO_LUX_TITLE1 = "la luminosité lue sur la LDR Gauche";
Blockly.Msg.ROBUNO_LUX_TITLE2 = "la luminosité lue sur la LDR Droite";
Blockly.Msg.ROBUNO_LUX_TOOLTIP = "entrée Capteur de Luminosité";
Blockly.Msg.ROBUNO_PIN_ANALOG = "sur la broche Analogique";
Blockly.Msg.ROBUNO_HELPURL = "www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html";

//******** Added March 26th 2016
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT1 = "mettre le feu rouge";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2 = "sur la broche Numérique";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3 = "à l'état";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT4 = "mettre le feu orange";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT5 = "mettre le feu vert";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT6 = "mettre la barriere lumineuse";
Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP = "Sortie led (réf : LED)";
Blockly.Msg.FISCHERTECHNIK_TEXT1 = "allumer le buzzer";
Blockly.Msg.FISCHERTECHNIK_TEXT2 = "à une fréquence (Hz)";
Blockly.Msg.FISCHERTECHNIK_TEXT3 = "pendant une durée (ms) ";
Blockly.Msg.FISCHERTECHNIK_TEXT4 = "le BP ou capteur de position de la barrière";
Blockly.Msg.FISCHERTECHNIK_TEXT5 = "sur la broche ";
Blockly.Msg.FISCHERTECHNIK_TEXT6 = " détecte du metal ?";
Blockly.Msg.FISCHERTECHNIK_TEXT7 = "Entrée capteur magnétique (réf : ILS)";
Blockly.Msg.FISCHERTECHNIK_TEXT8 = "le capteur magnétique";

Blockly.Msg.FISCHERTECHNIK_BUZZER1_TOOLTIP = "Sortie Buzzer (réf : BUZZER)";
Blockly.Msg.FISCHERTECHNIK_PIN = "sur la broche";
Blockly.Msg.FISCHERTECHNIK_LUX_TITLE1 = "la luminosité lue sur le capteur de lumière";
Blockly.Msg.FISCHERTECHNIK_LUX_TOOLTIP = "Entrée capteur de Luminosité";
Blockly.Msg.FISCHERTECHNIK_PIN_ANALOG = "sur la broche Analogique";

Blockly.Msg.FISCHERTECHNIK_TEXT9 = "commande le moteur";
Blockly.Msg.FISCHERTECHNIK_TEXT10 = "du shield Moteurs CC";
Blockly.Msg.FISCHERTECHNIK_TEXT11 = "sur les broches";
Blockly.Msg.FISCHERTECHNIK_TEXT12 = "broche de commande de Direction (DIR)";
Blockly.Msg.FISCHERTECHNIK_TEXT13 = "broche de commande de la Vitesse (PWM~)";
Blockly.Msg.FISCHERTECHNIK_TEXT14 = "sens horaire (255) ou Antihoraire (0)?";
Blockly.Msg.FISCHERTECHNIK_TEXT15 = "vitesse MAX (VRAI) ou nulle (FAUX)";
Blockly.Msg.FISCHERTECHNIK_TEXT16 = "Carte de commande de deux moteurs CC";
Blockly.Msg.FISCHERTECHNIK_TEXT17 = " est appuyée ?";

//******** Added April 19th 2016
Blockly.Msg.MBOT_HELPURL = "http://www.makeblock.cc/mbot/";
Blockly.Msg.MBOT_FORWARD_TOOLTIP = "avance";
Blockly.Msg.MBOT_BACKWARD_TOOLTIP = "recule";
Blockly.Msg.MBOT_TURN_LEFT_TOOLTIP = "tourne à gauche";
Blockly.Msg.MBOT_TURN_RIGHT_TOOLTIP = "tourne à droite";
Blockly.Msg.MBOT_MOTOR_TOOLTIP = "gestion individuelle des moteurs";
Blockly.Msg.MBOT_MOTOR_TITLE = "vers l'avant (1) ou arrière (0)";
Blockly.Msg.MBOT_MOTOR_LEFT_TITLE = "moteur à gauche : puissance";
Blockly.Msg.MBOT_MOTOR_RIGHT_TITLE = "moteur à droite : puissance";
Blockly.Msg.MBOT_MOTOR_SENS = "1 : avancer | 0 : reculer";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS = "moteur gauche : sens";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS_PIN = "moteur gauche : activer sens (broche 7)";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS_CHANGE = "moteur gauche : sens";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM = "moteur gauche : puissance";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM_PIN = "moteur gauche : activer PWM (broche 6)";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM_CHANGE = "moteur gauche : puissance";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS = "moteur droit : sens";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_PIN = "moteur droit : activer sens (broche 4)";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_CHANGE = "moteur droit : sens";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM = "moteur droit : puissance";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_PIN = "moteur droit : activer PWM (broche 5)";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_CHANGE = "moteur droit : puissance";
Blockly.Msg.MBOT_RGB_ONBOARD_INTRO = "colore onboard RGB LEDs ";
Blockly.Msg.MBOT_RGB_ONBOARD_RED = "red (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_BLUE = "blue (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_GREEN = "green (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_FIELDDROPDOWN = [["0 (les deux leds)", "0"], ["1 (led gauche)", 1], ["2 (led droite)", 2]];
Blockly.Msg.MBOT_BUZZER_INTRO = "jouer un son";
Blockly.Msg.MBOT_BUZZER_TONE = "note";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_TONE = [["A", "27.5"], ["B", "30.868"], ["C", "16.352"], ["D", "18.354"], ["E", "20.602"], ["F", "21.827"], ["G", "24.5"]];
Blockly.Msg.MBOT_BUZZER_OCTAVE = "#";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_OCTAVE = [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]];
Blockly.Msg.MBOT_BUZZER_DELAY = "during";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_DELAY = [["un demi", "500"], ["un quart", "250"], ["un huitième", "125"], ["tout", "1000"], ["double", "2000"], ["zéro", "0"]];

//******** Added May 1rst 2016
Blockly.Msg.ROMEO_HELPURL = "http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29";
Blockly.Msg.ROMEO3_MOTOR1_SENS = "motor M1 : direction";
Blockly.Msg.ROMEO3_MOTOR2_SENS = "motor M2 : direction";
Blockly.Msg.ROMEO3_MOTOR_SENS = "1 : forward | 0 : backward";
Blockly.Msg.ROMEO3_MOTOR1_PWM = "motor M1 : PWM (0~255)";
Blockly.Msg.ROMEO3_MOTOR2_PWM = "motor M2 : PWM (0~255)";
Blockly.Msg.ROMEO3_MOTOR_TOOLTIP = "motor control individually";
Blockly.Msg.ROMEO3_SWITCH = "press button";
Blockly.Msg.ROMEO_SWITCH_FIELDDROPDOWN = [["S1", "0"], ["S2", "147"], ["S3", "333"], ["S4", "510"], ["S5", "745"], ["aucun", "1023"]];
Blockly.Msg.ROMEO3_SWITCH_TOOLTIP = "Bware of switch ! Verify analog read on A0 : 0 for S1, 147 for S2, 333 for S3, 510 for S4, 745 for S5, 1023 if none";

//******** Added august 20th 2016
Blockly.Msg.FLYCAM_SWITCH_HELPURL = "http://tic.technologiescollege.fr/wiki/doku.php/fr/arduino/flycam";
Blockly.Msg.FLYCAM_SWITCH_TEXT = "change mode";
Blockly.Msg.FLYCAM_SWITCH_INPUT = "of Flycam on PIN#";
Blockly.Msg.FLYCAM_SWITCH_TOOLTIP = "be patient because it sends a signal during 3s and a wait of 1s";
Blockly.Msg.FLYCAM_RECORD_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_RECORD_TEXT = "start capture";
Blockly.Msg.FLYCAM_RECORD_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_RECORD_TOOLTIP = "send order for 1s, like a servo=180°";
Blockly.Msg.FLYCAM_STOP_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_STOP_TEXT = "stop capture";
Blockly.Msg.FLYCAM_STOP_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_STOP_TOOLTIP = "send order for 1s, like a servo=0°";


//******** Added august 23th 2016
Blockly.Msg.MHK_ULTRASON_HELPURL = "http://www.gotronic.fr/art-module-de-detection-us-hc-sr04-20912.htm";
Blockly.Msg.MHK_ULTRASON1 = "distance measured in cm ";
Blockly.Msg.MHK_ULTRASON2 = "TRIG on the PIN ";
Blockly.Msg.MHK_ULTRASON3 = "ECHO on the PIN ";
Blockly.Msg.MHK_ULTRASON_TOOLTIP = "detect obstacle, measure distance with ultrasonic ranger";
Blockly.Msg.MHK_MOTEUR_VIBREUR_HELPURL = "http://www.gotronic.fr/art-vibreur-miniature-vm1201-20685.htm";
Blockly.Msg.MHK_MOTEUR_VIBREUR1 = "vibrate the motor on the PIN";
Blockly.Msg.MHK_MOTEUR_VIBREUR2 = " with value";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_HELPURL = "http://www.robotshop.com/eu/fr/capteur-electrique-muscle-myoware.html";
Blockly.Msg.MHK_CAPTEUR_MYOWARE1 = "the value read by the sensor myoware ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE2 = "on analog pin ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_TOOLTIP = "vibrator motor output";
Blockly.Msg.MHK_SERVO_MOTEUR1 = "rotate servo";
Blockly.Msg.MHK_SERVO_MOTEUR2 = "on PIN#";
Blockly.Msg.MHK_SERVO_MOTEUR3 = "at angle [0~180°]";
Blockly.Msg.MHK_SERVO_MOTEUR_TOOLTIP = "Servo-motor (réf : MINI-SERVO)";

// added august 28th 2016
// blocks from Ardublockly project

Blockly.Msg.SPI_SETUP = "Setup";
Blockly.Msg.SPI_SETUP_CONF = "configuration:";
Blockly.Msg.SPI_SETUP_DIVIDE = "clock divide";
Blockly.Msg.SPI_SETUP_LSBFIRST = "LSBFIRST";
Blockly.Msg.SPI_SETUP_MODE = "SPI mode (idle - edge)";
Blockly.Msg.SPI_SETUP_MODE0 = "0 (Low - Falling)";
Blockly.Msg.SPI_SETUP_MODE1 = "1 (Low - Rising)";
Blockly.Msg.SPI_SETUP_MODE2 = "2 (High - Falling)";
Blockly.Msg.SPI_SETUP_MODE3 = "3 (High - Rising)";
Blockly.Msg.SPI_SETUP_MSBFIRST = "MSBFIRST";
Blockly.Msg.SPI_SETUP_SHIFT = "data shift";
Blockly.Msg.SPI_SETUP_TIP = "Configures the SPI peripheral.";
Blockly.Msg.SPI_TRANSRETURN_TIP = "Send a SPI message to an specified slave device and get data back.";
Blockly.Msg.SPI_TRANS_NONE = "none";
Blockly.Msg.SPI_TRANS_SLAVE = "to slave pin";
Blockly.Msg.SPI_TRANS_TIP = "Send a SPI message to an specified slave device.";
Blockly.Msg.SPI_TRANS_VAL = "transfer";
Blockly.Msg.SPI_TRANS_WARN1 = "A setup block for %1 must be added to the workspace to use this block!";
Blockly.Msg.SPI_TRANS_WARN2 = "Old pin value %1 is no longer available.";

Blockly.Msg.STEPPER_DEFAULT_NAME = "MyStepperMotor";
Blockly.Msg.STEPPER_MOTOR = "stepper motor:";
Blockly.Msg.STEPPER_PIN1 = "pin1#";
Blockly.Msg.STEPPER_PIN2 = "pin2#";
Blockly.Msg.STEPPER_REVOLVS = "how many steps per revolution";
Blockly.Msg.STEPPER_SETUP = "Setup";
Blockly.Msg.STEPPER_SETUP_TIP = "Configures a stepper motor pinout and other settings.";
Blockly.Msg.STEPPER_SPEED = "set speed (rpm) to";
Blockly.Msg.STEPPER_STEP = "move stepper";
Blockly.Msg.STEPPER_STEPS = "steps";
Blockly.Msg.STEPPER_STEP_TIP = "Turns the stepper motor a specific number of steps.";
Blockly.Msg.STEPPER_STEP_WARN1 = "A STEPPER configuration block must be added to use this block!";
Blockly.Msg.STEPPER_STEP_WARN2 = "A Name input must be added to the Stepper configuration block!";
Blockly.Msg.STEPPER_STEP_WARN3 = "Selected stepper does not exist any more, please select a new one.";

//******** Esus Board (Mace Robotics)
Blockly.Msg.ESUS_EsusBoard_init="Esus board initialisation";
Blockly.Msg.ESUS_MOTOR1_SPEED="Motor 1, speed:";
Blockly.Msg.ESUS_MOTOR1_DIRECTION="Direction:";
Blockly.Msg.ESUS_MOTOR2_SPEED="Motor 2, speed:";
Blockly.Msg.ESUS_MOTOR2_DIRECTION="Direction:";
Blockly.Msg.ESUS_ANALOG="Analog input:";
Blockly.Msg.ESUS_WIFI_SSID="WiFi configuration, infra mode SSID:";
Blockly.Msg.ESUS_WIFI_PASSWORD="password";
Blockly.Msg.ESUS_WIFI_IP="WiFi IP:";
Blockly.Msg.ESUS_WIFI_READ_STREAM="read data WiFi";
Blockly.Msg.ESUS_WIFI_CONTAIN2="contain";
Blockly.Msg.ESUS_WIFI_CONTAIN="data WiFi";
Blockly.Msg.ESUS_WIFI_DATA_AVAILABLE="data WiFi available?";
Blockly.Msg.ESUS_WIFI_AP="configuration WiFi mode AP SSID:";
Blockly.Msg.ESUS_WIFI_AP_IP="IP Address:";
Blockly.Msg.ESUS_WIFI_SEND_STREAM="send data WiFi (text)";
Blockly.Msg.ESUS_WIFI_SEND_FLOAT_STREAM="send data WiFi (float)";


//******** APDS9960 couleurs et mouvements
Blockly.Msg.APDS9960_MISC_HELPURL = "https://www.sparkfun.com/products/12787";
Blockly.Msg.APDS9960_INIT_TITLE = "init of APDS-9960 sensor";
Blockly.Msg.APDS9960_INIT_TOOLTIP = "test sensor and init I2C bus";
Blockly.Msg.APDS9960_TEST_TITLE = "test";
Blockly.Msg.APDS9960_TEST_TOOLTIP = "verify if work well";
Blockly.Msg.APDS9960_AMBIENT_TITLE = "ambient light";
Blockly.Msg.APDS9960_AMBIENT_TOOLTIP = "ambient light on 10 bits digit";
Blockly.Msg.APDS9960_RED_TITLE = "RGB code for RED (0~255)";
Blockly.Msg.APDS9960_GREEN_TITLE = "RGB code for GREEN (0~255)";
Blockly.Msg.APDS9960_BLUE_TITLE = "RGB code for BLUE (0~255)";
Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP = "send value of color on 10 bits digit";

//******** pbra 20160607 L298N
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_TITLE = "L298N Motor Controller";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_INIT_TITLE = "L298N Motor Controller Init";
Blockly.Msg.ROBOTS_MOTORS_L298N_ID = "Identication"
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_SPEED = "Speed";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN1 = "IN1 pin (direction)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN2 = "IN2 pin (direction)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_EN = "EN pin (pwm)";
Blockly.Msg.ROBOTS_MOTORS_L298N_STOP = "stop";
Blockly.Msg.ROBOTS_MOTORS_L298N_FORWARD = "forward";
Blockly.Msg.ROBOTS_MOTORS_L298N_BACKWARD = "backward";
Blockly.Msg.ROBOTS_MOTORS_L298N_BRAKE = "brake";
Blockly.Msg.ROBOTS_MOTORS_L298N_INIT_TOOLTIP = "L298N initialization block (1 for each motor)";
Blockly.Msg.ROBOTS_MOTORS_L298N_TOOLTIP = "L298N block, use the same id as in the initialization block";

//******** pbra 20160607 PinMode
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_HELPURL = "https://www.arduino.cc/en/Reference/PinMode";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT1 = "Set Pin Mode for pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT2 = "to";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_DROPDOWN = [["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"], ["INPUT_PULLUP", "INPUT_PULLUP"]];
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP = "Configures the specified pin to behave either as an input or an output";

//******** Bluetotth Electronics example http://www.keuwl.com/electronics.html
Blockly.Msg.BT_ELEC_Init_HELPURL = "https://play.google.com/store/apps/details?id=com.keuwl.arduinobluetooth&hl=fr";
Blockly.Msg.BT_ELEC_init_text = "QR Code link to Android application:";
Blockly.Msg.BT_ELEC_TOOLTIP = "download Android application";
Blockly.Msg.BT_ELEC_LED_brightness_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/02-pwm-leds/";
Blockly.Msg.BT_ELEC_LED_brightness_text = "control the brightness of 3 LEDs";
Blockly.Msg.BT_ELEC_LED_brightness_TOOLTIP = "see demo in Help";
Blockly.Msg.BT_ELEC_RC_car_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/01-rc-car/";
Blockly.Msg.BT_ELEC_RC_car_text = "4 buttons controlling a RC car";
Blockly.Msg.BT_ELEC_RC_car_TOOLTIP = "see demo in Help";


//********  jfblocks
Blockly.Msg.jfblocks_Init_HELPURL = "http://jfbegot.free.fr";
Blockly.Msg.jfblocks_TOOLTIP = "pour décoder des trames Bluetooth Electronics";
Blockly.Msg.jfblocks_last_value_tooltip = "valeur reçue dans la dernière trame décodée";
Blockly.Msg.jfblocks_last_value_titre = "dernière valeur JFBlock";
Blockly.Msg.jfblocks_decode_tooltip = "décode une trame recue au format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_decode_titre = "quand une trame est reçue";
Blockly.Msg.jfblocks_action_tooltip = "à placer dans 'Quand trame recue'\nLe caractere de fin peut être tout sauf numérique";
Blockly.Msg.jfblocks_action_start_code = "si le caractère de début vaut";
Blockly.Msg.jfblocks_action_do = "alors faire";
Blockly.Msg.jfblocks_tx_tooltip = "envoie une trame au format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_tx_titre = "émettre une trame";
Blockly.Msg.jfblocks_tx_start_code = "Start Code";
Blockly.Msg.jfblocks_tx_data = "donnée";
Blockly.Msg.jfblocks_tx_end_code = "End Code";

//******** collyc
Blockly.Msg.COLLYC_TOUCHE_HELPURL = 'https://www.adafruit.com/products/419';
Blockly.Msg.COLLYC_TOUCHE_TEXT = "Key pressed";
Blockly.Msg.COLLYC_TOUCHE_LIGNES = "Rows";
Blockly.Msg.COLLYC_TOUCHE_TOOLTIP = "Returns keypressed, empty string otherwise";
Blockly.Msg.COLLYC_TOUCHE_LIGNE1 = "Row 1";
Blockly.Msg.COLLYC_TOUCHE_LIGNE2 = "Row 2";
Blockly.Msg.COLLYC_TOUCHE_LIGNE3 = "Row 3";
Blockly.Msg.COLLYC_TOUCHE_LIGNE4 = "Row 4";
Blockly.Msg.COLLYC_TOUCHE_COLONNE1 = "Column 1";
Blockly.Msg.COLLYC_TOUCHE_COLONNE2 = "Column 2";
Blockly.Msg.COLLYC_TOUCHE_COLONNE3 = "Column 3";

//******** Sharp IR https://github.com/guillaume-rico/SharpIR

Blockly.Msg.SHARP_IR_DEFAULT_NAME = 'IR_DIST';
Blockly.Msg.Sharp_IR_HELPURL = 'https://github.com/guillaume-rico/SharpIR';
Blockly.Msg.Sharp_IR_MODEL = "model";
Blockly.Msg.Sharp_IR_ATTACH1 = 'attach IR Sharp';
Blockly.Msg.Sharp_IR_ATTACH2 = 'id #';
Blockly.Msg.Sharp_IR_INPUT1 = 'distance measured';
Blockly.Msg.Sharp_IR_INPUT2 = 'analog pin #';
Blockly.Msg.Sharp_IR_TOOLTIP1 = 'Analog input only';
Blockly.Msg.Sharp_IR_TOOLTIP2 = 'distance in centimeters, add tempo between 2 measurement';


//******** Matrix Neopixel DEL RGB 8 x 8 http://smartduinos.com/arduino-tutorial-8x8-rgb-led-matrix-with-ws8212-driver-with-arduino-uno-from-banggood-com/

Blockly.Msg.MatrixLED_WS2812B_init = "Led RGB WS2812B Init";
Blockly.Msg.MatrixLED_WS2812B_clean = "Led RGB WS2812B shutdown";
Blockly.Msg.MatrixLED_WS2812B_init_Pin = "Pin =";
Blockly.Msg.MatrixLED_WS2812B_init_Number_of_Pixels = "Number of pixels =";
Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME = "MATRIX_RGB";
Blockly.Msg.MatrixLED_WS2812B_setBrightness = "Matrix";
Blockly.Msg.MatrixLED_WS2812B_Brightness = "set brightness to";
Blockly.Msg.MatrixLED_WS2812B_URL = "http://smartduinos.com/arduino-tutorial-8x8-rgb-led-matrix-with-ws8212-driver-with-arduino-uno-from-banggood-com/";

Blockly.Msg.MatrixLED_WS2812B_setPixelColor = "Matrix";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red = "set red (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green = "set green (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue = "set blue (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number = "for pixel number (0 first) =";


//******** Storage : SD card + EEPROM
https://www.arduino.cc/en/Reference/EEPROM

Blockly.Msg.STORAGE_WRITE_SD_FILE = "SD Card, write file";
Blockly.Msg.STORAGE_SD_DATA = "with data";
Blockly.Msg.STORAGE_SD_NEWLINE = "newline?";
Blockly.Msg.STORAGE_EEPROM_WRITE_LONG = "EEPROM write (long) adress";
Blockly.Msg.STORAGE_DATA_LONG = "data";
Blockly.Msg.STORAGE_EEPROM_READ_LONG = "EEPROM - read (long) adress";
Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM - write (byte) adress";
Blockly.Msg.STORAGE_DATA_BYTE = "data";
Blockly.Msg.STORAGE_EEPROM_READ_BYTE = "EEPROM - write (byte) adress";