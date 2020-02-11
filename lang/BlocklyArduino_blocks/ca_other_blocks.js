'use strict';

goog.provide('Blockly.Msg.ca');

goog.require('Blockly.Msg');

// Ardublockly instances
Blockly.Msg.NEW_INSTANCE = 'instancia nova';
Blockly.Msg.RENAME_INSTANCE = 'renombra aquesta instancia';
Blockly.Msg.NEW_INSTANCE_TITLE = "nom nou d'instancia:";
Blockly.Msg.RENAME_INSTANCE_TITLE = 'renombra totes les "%1" instancies en :';

Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "fes una temporització (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME_SEC = "fes una temporització (en s) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "especifica el temps d'espera, atura l'execució del programa durant la duració indicada";
Blockly.Msg.ARDUINO_BASE_SETUP = "inicialització (setup)";
Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL = "https://www.arduino.cc/en/Reference/Setup";
Blockly.Msg.ARDUINO_BASE_LOOP = "repeteix indefinidament (loop)";
Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL = "https://www.arduino.cc/en/Reference/Loop";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED = "el temps passat (en ms) des del començament del programa";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_SEC = "el temps passat (en s) des del començament del programa";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "la duració des que el programa ha començat (unsigned long)";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL = "https://www.arduino.cc/en/Reference/Millis";
Blockly.Msg.ARDUINO_BETWEEN = "nombre aletòri entre";
Blockly.Msg.ARDUINO_BETWEEN_AND = "i";
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "http://arduino.cc/en/Reference/map";
Blockly.Msg.ARDUINO_BASE_MAP_NUM ="fes el mapejat de";
Blockly.Msg.ARDUINO_BASE_MAP_DMAX = "en un interval de [0~";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "converteix per proporcionalitat un valor comprés en un interval de 0 a 1023 cap un altre interval";
Blockly.Msg.ARDUINO_BASE_CODE = "línia de codi";
Blockly.Msg.ARDUINO_BASE_COMMENT_HELPURL = "https://www.arduino.cc/reference/en/language/structure/further-syntax/blockcomment/";
Blockly.Msg.ARDUINO_BASE_COMMENT_TEXT = "commentari";
Blockly.Msg.ARDUINO_BASE_CONST = "definicions preliminars";
Blockly.Msg.ARDUINO_BASE_DEFINE_HELPURL = "https://www.arduino.cc/en/Reference/Define";
Blockly.Msg.ARDUINO_BASE_DEFINE = "definicions";
Blockly.Msg.ARDUINO_BASE_DEFINE_TOOLTIP = "Definició de constants & llibreries";
Blockly.Msg.ARDUINO_BASE_END = 'espera infinita (FI de programa)';
Blockly.Msg.ARDUINO_BASE_BEGIN_TOOLTIP = "aquest bloc permet definir l'ordre en el qual el programa s'executa";
Blockly.Msg.ARDUINO_BASE_BEGIN = "INICI de programa";
Blockly.Msg.ARDUINO_BASE_TEMPO1 = "quant";
Blockly.Msg.ARDUINO_BASE_TEMPO2 = "ha passat";
Blockly.Msg.ARDUINO_BASE_TEMPO_TIME = [["microsegons", "us"],["mil·lisegons", "ms"],["segons", "s"]];
Blockly.Msg.ARDUINO_BASE_TEMPO_TOOLTIP = "Aquest bloc verifica si el temps indicat ha arribat, si és el cas llavors s'executen els blocs posats a l'interior. Contrariament al bloc 'espera' aquest no és de bloqueig.";
Blockly.Msg.ARDUINO_BASE_TEMPO_HELPURL = "http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ExempleBlinkWithoutDelay";
Blockly.Msg.ARDUINO_BASE_TOGGLE = "commuta l'estat del pin";
Blockly.Msg.ARDUINO_BASE_TOGGLE_TOOLTIP = "Commuta :\nescriu un estat lògic 0 si abans hi havia un estat 1 (i viceversa) a la sortida especificada";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TEXT = "Inclou un fixer";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_NAME = "Nom del fitxer";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TOOLTIP = "Permet incloure un fitxer inclòs al directori de treball";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_HELPURL = "https://www.arduino.cc/reference/en/language/structure/further-syntax/include/";
Blockly.Msg.ARDUINO_CONSTRAIN = "limita";
Blockly.Msg.ARDUINO_CONSTRAIN_X = " el nombre";
Blockly.Msg.ARDUINO_CONSTRAIN_A = "entre A = ";
Blockly.Msg.ARDUINO_CONSTRAIN_B = "i B = ";
Blockly.Msg.ARDUINO_CONSTRAIN_HELPURL = 'http://arduino.cc/en/Reference/Constrain';
Blockly.Msg.ARDUINO_CONSTRAIN_TOOLTIP = 'Restringeix un número per estar en un interval de valor';
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "posa el LED a la targeta a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "atura o engega el LED a la targeta Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "posa el pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escriu un valor (0 o 1) al pin escollit per a la sortida de les informacions lògiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "l'estat lògic al pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "llegeix el valor (0 o 1) al pin escollit per a l'entrada de les informacions lògiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP = "lectura pull-up";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP_TOOLTIP = "retorna l'estat lògic (0 o 1) del pin indicat\nretorna 1(estat alt) per defecte si el pull-up està activat";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1 = "posa el pin PWM~";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2 = "al valor";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP = "escriu un valor (comprés entre 0 i 255) al pin escollit per la sortida d'informacions analògiques.\nATENCIÓ comproveu que el pin escollit porta la senyal PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "escriu al pin de la sortida analògica";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "el valor";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "escriu un valor (comprés entre 0 i 255) al pin escollit per la sortida d'informacions analògiques.\nATENCIÓ comproveu que el pin escollit porta la senyal PWM~ !";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emet un só al pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'una freqüència (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "durant una duració (ms) de";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emet un só al pin seleccionat";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "atura el só al pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "atura el só al pin seleccionat";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "el valor llegit al pin d'entrada analògica";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "llegeix un valor (comprés entre 0 i 1023) al pin escollit per l'entrada d'informacions analògiques\n ATENCIÓ comproveu que el pin escollit sigui del tipus A# (exemple : A0,A1,...) ";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_STAT="de l'estat";
Blockly.Msg.ARDUINO_PULSEIN="duració (en µs) al pin";
Blockly.Msg.ARDUINO_PULSEIN_TIMEOUT="amb un retard (en µs) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "orienta el servomotor";
Blockly.Msg.ARDUINO_SERVO_MOVE_IMAGE = "blocks/arduino_base/servomoteur.jpg";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2 = "al pin";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "un angle (0~180°) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_DELAY_TIME = "continua després d'un retard (ms) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "rotació possible entre 0~180 graus";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1 = "l'angle del servomotor";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_IMAGE = "blocks/arduino_base/servomoteur.jpg";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2 = "connectat al pin";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP = "retorna el nombre de graus de la darrera rotació";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL = "https://www.arduino.cc/en/Reference/ServoWrite";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "fes girar el servomotor en rotació continua";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT1 = " al pin";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT2 = "a la velocitat [0~180]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT3 = "a la velocitat [0~90]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT4 = "amb el sentit";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "utilitza els graus com un valor de la potència : 0° -> ràpid a esquerra | 90° -> repòs/equilibri | 180° -> ràpid a dreta";
Blockly.Msg.ARDUINO_SERVO_PIN = "al pin";
Blockly.Msg.ARDUINO_SERVO_ATTACH1 = "afegeix un servomotor";
Blockly.Msg.ARDUINO_SERVO_ATTACH2 = "amb nom";
Blockly.Msg.ARDUINO_SERVO_ATTACHED = "afegit el servomotor";
Blockly.Msg.ARDUINO_SERVO_DETACH = "treu el servomotr del pin";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "afegeix al port sèrie el text";
Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT = "afegeix, amb una línea nova, el text al sèrie";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT = "afegeix, amb una tabulació, el text al sèrie";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "envia dades al port sèrie per vigilar amb el monitor amb ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT = "afegeix el text al sèrie :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER = "seguit del número :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE = " línia nova ?";
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NUMBER = "Afegeix al sèrie :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NEWLINE = "Línia nova ?";
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_FIELDDROPDOWN = [["si", "true"], ["no", "false"]];

Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'quan hi hagi una interrupció externa al pin';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "desactiva la interrupció externa del pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "vigila una connexió interrompuda a un pin específic, mira l'ajuda !";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = 'Desenganxa la interrupció al port específic';
Blockly.Msg.LKL_MODE = 'correspon a un';
Blockly.Msg.LKL_DROPDOWN = [['increment', "RISING"], ['decrement', "FALLING"], ["canvi d'estat", "CHANGE"], ["aturada", "LOW"]];

//SERIAL
Blockly.Msg.Serial_Init="ixa la velocitat del sèrie (en bauds) a";
Blockly.Msg.Serial_Print="imprimeix consola sèrie";
Blockly.Msg.Serial_Write="escriu al sèrie";
Blockly.Msg.Serial_write_out="escriu";
Blockly.Msg.Serial_Print_Format="imprimeix en format";
Blockly.Msg.Serial_Print_ForDecimal="decimal";
Blockly.Msg.Serial_Print_ForHexa="hexadecimal";
Blockly.Msg.Serial_Print_ForBin="binari";
Blockly.Msg.Serial_Print_ForOct="byte";
Blockly.Msg.Serial_read="llegeix el sèrie";
Blockly.Msg.Serial_avai="està disponible una dada al sèrie ?";
Blockly.Msg.Serial_flush="espera fi de transmisió al sèrie";
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_CONTENT = "cadena llegida fins al caràcter";
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_TOOLTIP = "llegeix els caràcters un per un al cercat, i retorna tota la cadena de caràcters";

//SOFTWARE SERIAL
Blockly.Msg.SSERIAL_DEFAULT_NAME="SoftSerial";
Blockly.Msg.SSERIAL_Init="inicialització :";
Blockly.Msg.SSERIAL_SPEED="velocitat";
Blockly.Msg.SSERIAL_TX="pin TX ";
Blockly.Msg.SSERIAL_RX="pin RX";
Blockly.Msg.SSERIAL_Read="llegeix SoftwareSerial";
Blockly.Msg.SSERIAL_Print="imprimeix per SoftwareSerial";
Blockly.Msg.SSERIAL_Write="escriu per SoftwareSerial";
Blockly.Msg.SSERIAL_Avai="està disponible SoftwareSerial ?";

//VARIABLES
Blockly.Msg.ARDUINO_VAR_DECLARE="Declara";
Blockly.Msg.ARDUINO_VAR_AS="com";
Blockly.Msg.ARDUINO_VAR_VAL="valor";

//Conversions
Blockly.Msg.CONV_tochar="converteix en char ";
Blockly.Msg.CONV_tobyte="converteix en Byte ";
Blockly.Msg.CONV_toint="converteix en Int ";
Blockly.Msg.CONV_tofloat="converteix en decimal ";
Blockly.Msg.CONV_toString="converteix en text ";
Blockly.Msg.CONVERSION_MAP_HELPURL = "http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.Map";
Blockly.Msg.CONVERSION_MAP_NUM = "valor remapejat de :";
Blockly.Msg.CONVERSION_MAP_IN_MIN = "entre le mínim :";
Blockly.Msg.CONVERSION_MAP_IN_MAX = "i el màxim :";
Blockly.Msg.CONVERSION_MAP_OUT_MIN = "fins a un mínim de :";
Blockly.Msg.CONVERSION_MAP_OUT_MAX = "i un màxim de :";
Blockly.Msg.CONVERSION_MAP_TOOLTIP = "remapeja un número d'un interval de valors fins a un altre interval";

//added april 6th 2015
Blockly.Msg.GROVE_INOUT_DHT_HELPURL = "https://github.com/adafruit/DHT-sensor-library";
Blockly.Msg.GROVE_INOUT_DHT_READ_C = "températura °C";
Blockly.Msg.GROVE_INOUT_DHT_READ_F = "températura °F";
Blockly.Msg.GROVE_INOUT_DHT_READ_H = "humitat %";
Blockly.Msg.GROVE_INOUT_DHT_READ_PIN = "Pin#";
Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR = "mesurat pel sensor ";
Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP = "els sensors del tipus DHT tenen dos parts: termistor i sensor de humitat.";
Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE = "valor";
Blockly.Msg.GROVE_INOUT_LED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LED_INPUT1 = "posa el LED";
Blockly.Msg.GROVE_INOUT_LED_INPUT2 = "al pin ";
Blockly.Msg.GROVE_INOUT_LED_INPUT3 = "a l'estat";
Blockly.Msg.GROVE_INOUT_LED_TOOLTIP = "activa la sortida digital a la qual el LED està connectat";
Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button";
Blockly.Msg.GROVE_INOUT_BUTTON_TEXT = "l'estat del pulsador";
Blockly.Msg.GROVE_INOUT_BUTTON_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP = "entrada digital";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT = "valor del potenciòmetre";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP = "Lectura analògica el resultat de la qual varia entre 0 i 1023";
Blockly.Msg.GROVE_INOUT_LDR_HELPURL = "https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html";
Blockly.Msg.GROVE_INOUT_LDR_TEXT = "valor del LDR";
Blockly.Msg.GROVE_INOUT_LDR_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP = "Lectura analògica el resultat de la qual varia entre 0 i 1023";
Blockly.Msg.GROVE_INOUT_TILT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch";
Blockly.Msg.GROVE_INOUT_TILT_TEXT = "estat del sensor d'inclinació";
Blockly.Msg.GROVE_INOUT_TILT_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_TILT_TOOLTIP = "Quan el commutador està nivellat, el circuit està obert, i quan el commutadors'inclina el circuit està tancat.";
Blockly.Msg.GROVE_INOUT_BUZZER_HELPURL = "http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1 = "brunzidor";
Blockly.Msg.GROVE_INOUT_BUZZER_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2 = "a l'estat";
Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP = "Emet un so quan el brunzidor està en 1";
Blockly.Msg.GROVE_INOUT_RELAY_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Relay";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT1 = "relé";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT2 = "a l'estat";
Blockly.Msg.GROVE_INOUT_RELAY_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP = "El relé serveix per controlar un circuit de potència fins a 250V i 10A.";
Blockly.Msg.GROVE_INOUT_TEMP_HELPURL = "http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature";
Blockly.Msg.GROVE_INOUT_TEMP_TEXT = "temperatura";
Blockly.Msg.GROVE_INOUT_TEMP_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_TEMP_TOOLTIP = "retorna la temperatura ambient en °C";
Blockly.Msg.GROVE_INOUT_MOISTURE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor";
Blockly.Msg.GROVE_INOUT_MOISTURE_TEXT = "humitat";
Blockly.Msg.GROVE_INOUT_MOISTURE_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_MOISTURE_TOOLTIP = "retorna el nivell de humitat";
Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TEXT = "pantalla LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT1 = "al pin";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT2 = "escriu a la línia 1";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT3 = "escriu a la línia 2";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT4 = "retard (ms)";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TOOLTIP = "escriu el text sobre una pantalla LCD de 2 línies i 16 caràcters";
Blockly.Msg.GROVE_INOUT_LCD_POWER_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TEXT = "pantalla LCD";
Blockly.Msg.GROVE_INOUT_LCD_POWER_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE = "potencia";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TOOLTIP = "posa el LCD engegat/aturat";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TEXT = "pantalla LCD";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_CLEAN = "esborra la pantalla";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT = "efecte";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT = [["desplaça a l'esquerra", "LEFT"], ["desplaça a la dreta", "RIGHT"], ["desplaçament automàtic", "AUTO"]];
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP = "posa el LCD engegat/aturat";
Blockly.Msg.GROVE_INOUT_SOUND_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor";
Blockly.Msg.GROVE_INOUT_SOUND_TEXT = "sensor de so";
Blockly.Msg.GROVE_INOUT_SOUND_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP = "detecta el volum sonor ambient";
Blockly.Msg.GROVE_INOUT_PIR_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor";
Blockly.Msg.GROVE_INOUT_PIR_TEXT = "sensor de moviment PIR";
Blockly.Msg.GROVE_INOUT_PIR_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_PIR_TOOLTIP = "el sensor retorna 1 quan hi ha moviment al seu abast de detecció";
Blockly.Msg.GROVE_INOUT_LINE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Line_Finder";
Blockly.Msg.GROVE_INOUT_LINE_TEXT = "seguidor de línia";
Blockly.Msg.GROVE_INOUT_LINE_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP = "retorna un estat lògic en funció del color, blanc o negra, detectat.";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT = "sensor ultrasònic";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT = "unitat";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP = "mesurada per eco ultrasònic";
Blockly.Msg.GROVE_INOUT_MOTOR_HELPURL = "http://www.seeedstudio.com/wiki/Motor_Shield";
Blockly.Msg.GROVE_INOUT_MOTOR_TEXT = "motor amb escut";
Blockly.Msg.GROVE_INOUT_MOTOR_CHOICE = [["atura !", "stop"], ["endavant", "forward"], ["a dreta", "right"], ["a esquerra", "left"], ["endarrere", "backward"]];
Blockly.Msg.GROVE_INOUT_MOTOR_TOOLTIP = "controla 2 motors de corrent continua";
Blockly.Msg.GROVE_INOUT_JOYSTICK_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT1 = "angle del Joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT2 = "eix";
Blockly.Msg.GROVE_INOUT_JOYSTICK_INPUT = "al pin";
Blockly.Msg.GROVE_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.GROVE_INOUT_JOYSTICK_TOOLTIP = "el joystick retorna valors compresos entre (200~800) per a cada eix";
Blockly.Msg.GROVE_INOUT_RGBLED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED";
Blockly.Msg.GROVE_INOUT_RGBLED_TEXT = "LED RGB";
Blockly.Msg.GROVE_INOUT_RGBLED_INPUT = "valor [0~255]";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR1 = "roig al pin";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR2 = "verd al pin";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR3 = "blau al pin";
Blockly.Msg.GROVE_INOUT_RGBLED_TOOLTIP = "utilitza les sortides PWM per asignar entre 256 valors cada color primari";
Blockly.Msg.GROVE_INOUT_BT_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM1 = "Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM2 = "al pin";
Blockly.Msg.GROVE_INOUT_BT_COMM3 = "nom del perifèric";
Blockly.Msg.GROVE_INOUT_BT_COMM4 = "codi secret";
Blockly.Msg.GROVE_INOUT_BT_COMM5 = "envia";
Blockly.Msg.GROVE_INOUT_BT_COMM6 = "rep";
Blockly.Msg.GROVE_INOUT_BT_TOOLTIP = "Bluetooth V2.0 + EDR esclau. Soporta un sol esclau per targeta";

//************************************** ajouté 15/06/2018 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_LCD_RGB_INIT_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_INIT_TEXT = "INIT Grove LCD RGB";
Blockly.Msg.GROVE_LCD_RGB_INIT_TOOLTIP = "Inicialització del LCD";

Blockly.Msg.GROVE_LCD_RGB_CLEAR_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_CLEAR_TEXT = "CLEAR Grove LCD RGB";
Blockly.Msg.GROVE_LCD_RGB_CLEAR_TOOLTIP = "Esborrat de la pantalla LCD";

Blockly.Msg.GROVE_LCD_RGB_SCROLL_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_TEXT = "TEXT SCROLLING";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT = "Escrit amb un ";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT_FIELDDROPDOWN = [["desplaçament a l'esquerra", "LEFT"], ["desplaçament a la dreta", "RIGHT"], ["despalaçament automàtic", "AUTO"]];
Blockly.Msg.GROVE_LCD_RGB_SCROLL_TOOLTIP = "Tria el sentit del desplaçament del texte";

Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TEXT = "SET CURSOR";
Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TOOLTIP = "Posiciona el cursor a les coordenades especificades";
Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";

Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TEXT = "SET RGB Backlight";
Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TOOLTIP = "Defineix el color de fons";
Blockly.Msg.GROVE_LCD_RGB_SET_RGB_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";

Blockly.Msg.GROVE_LCD_RGB_PRINT_DATA = "PRINT";
Blockly.Msg.GROVE_LCD_RGB_PRINT_TOOLTIP = "Escriu el valor numèric o la cadena de caràcters especificada.";
Blockly.Msg.GROVE_LCD_RGB_PRINT_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_PRINT_INPUTDATA = "DATA"

Blockly.Msg.GROVE_LCD_RGB_WRITE_DATA = "WRITE";
Blockly.Msg.GROVE_LCD_RGB_WRITE_TOOLTIP = "Escriu el caràcter corresponent al codi ASCII especificat";
Blockly.Msg.GROVE_LCD_RGB_WRITE_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_WRITE_INPUTDATA = "DATA"
Blockly.Msg.GROVE_LCD_RGB_WRITE_FORMAT_FIELDDROPDOWN = [["0x", "0x"], ["0b", "0b"], ["decimal", "1"],["variable", "2"]];

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_EMETTEUR_IR_TEXT = "Led Infraroig IR";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1 = "emet senyal IR al pin";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2 = "d'una freqüència 38000 (Hz)";
Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Emitter/";
Blockly.Msg.GROVE_EMETTEUR_IR_TOOLTIP = "Emisió d'un senyal IR";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_RECEPTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Receiver/";
Blockly.Msg.GROVE_RECEPTEUR_IR_TEXT = "estat del receptor IR";
Blockly.Msg.GROVE_RECEPTEUR_IR_INPUT = "al pin";
Blockly.Msg.GROVE_RECEPTEUR_IR_TOOLTIP = "entrada numèrica";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_FIN_COURSE_HELPURL = "http://www.technologieservices.fr/fr/a-a1000024681-edc1000003/article/GROV201-Module-Grove-Interrupteur-fin-de-course.html";
Blockly.Msg.GROVE_FIN_COURSE_TEXT = "sensor final de carrera";
Blockly.Msg.GROVE_FIN_COURSE_INPUT = "al pin";
Blockly.Msg.GROVE_FIN_COURSE_TOOLTIP = "entrada numèrica";

//************************************** ajoute 16/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_INOUT_BT_AT_HELPURL = "http://wiki.seeed.cc/Grove-Serial_Bluetooth_v3.0/";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM1 = "Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM2 = "al pin";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM3 = "nom del perifèric";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM4 = "codi pin";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM5 = "rep";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM6 = "envia";
Blockly.Msg.GROVE_INOUT_BT_AT_TOOLTIP = "Bluetooth V3.0 + EDR esclau. Suporta un sols esclau per targeta";

//******** Grove commun à tous les drivers moteur Cdo 2017 03 19*/
Blockly.Msg.GROVE_DRIVER_MOTOR1 = "Motor 1";
Blockly.Msg.GROVE_DRIVER_MOTOR2 = "Motor 2";
Blockly.Msg.GROVE_DRIVER_MOTOR3 = "Motor 3";
Blockly.Msg.GROVE_DRIVER_MOTOR4 = "Motor 4";
Blockly.Msg.GROVE_DRIVER_MOTOR_SPEED = "Velocitat";
//******** Grove driver13 */
Blockly.Msg.GROVE_DRIVER13_HELPURL = "http://wiki.seeed.cc/Grove-I2C_Motor_Driver_V1.3/";
Blockly.Msg.GROVE_DRIVER13_MOTOR_TITLE = "Controlador motor V1.3";
Blockly.Msg.GROVE_DRIVER13_MOTOR_I2C_ADDRESS = "Adreça I2C";
Blockly.Msg.GROVE_DRIVER13_TOOLTIP = "Controlador motor - " + 
                            "l'adreça I2C està entre 0 i 15 (0x0F) depenent de la contiguració de la targeta,  " + 
                            "la velocitat del motor està entre -100 i +100, 0 = aturada";
//******** Grove minimoto */
Blockly.Msg.GROVE_MINI_DRIVER_TITLE = "Controlador Mini Motor";
Blockly.Msg.GROVE_MINI_DRIVER_HELPURL = "http://wiki.seeed.cc/Grove-Mini_I2C_Motor_Driver_v1.0/";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_MSG = "Velocitat";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_TOOLTIP = "Controlador Mini Motor - " + 
                            "la velocitat del motor està entre -100 et +100";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_MSG = "Aturada";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_TOOLTIP = "Controlador Mini Motor - " + 
                            "Atura el motor triat";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_MSG = "Estat";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_TOOLTIP = "Controlador Mini Motor - " + 
                            "Retorna l'estat del motor triat (0: OK, 3 i 17: sobreintensitat, 9: infravoltatge, 5: sobreescalfat)";

//added April 3rd 2015 ESK
Blockly.Msg.ROBOTS_MOTORS_FORWARD = "endavant";
Blockly.Msg.ROBOTS_MOTORS_BACKWARD = "endarrere";
Blockly.Msg.ROBOTS_MOTORS_STOP = "atura";
Blockly.Msg.ROBOTS_MOTORS_LEFT= "gira a esquerra";
Blockly.Msg.ROBOTS_MOTORS_RIGHT = "gira a dreta";
Blockly.Msg.ROBOTS_MOTORS_SPEEDR = "velocitat a la dreta (B)";
Blockly.Msg.ROBOTS_MOTORS_SPEEDL = "velocitat a l'esquerra (A)";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_S_TITLE = "motor genèric PWM";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_TITLE = "motors genèrics engega/atura";
Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL = "https://www.pololu.com/docs/0J57/5";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TITLE = "Zumo - Sense inversió";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP = "Drive Pololu Zumo (cablejat correctament)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TITLE = "Zumo - Inversió esquerre";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TOOLTIP = "Drive Pololu Zumo (motor esquerre invertit)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TITLE = "Zumo - Inversió dret";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TOOLTIP = "Drive Pololu Zumo (motor dret invertit)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TITLE = "Zumo - Ambdos invertits";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TOOLTIP = "Drive Pololu Zumo (ambdos motors invertits)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TITLE = "Zumo - Sense inversió & Velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TOOLTIP = "Drive Pololu Zumo (cablejat correcte) + velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TITLE = "Zumo - Inversió esquerre & velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TOOLTIP = "Drive Pololu Zumo (motor esquerre invertit) + velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TITLE = "Zumo - Inversió dret & Velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TOOLTIP = "Drive Pololu Zumo (Inversió motor dret) + velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TITLE = "Zumo - Inversió ambdos & velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TOOLTIP = "Pololu Zumo (2 motors) + velocitat";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER = "seguidor de línia";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_TOOLTIP = "es calibra cercant una línia negra:\n prémer 1 vegada el botó per calibrar\nprémer una 2 vegada per llançar els motor";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_HELPURL = "https://www.pololu.com/docs/0J57/7.d";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION = "calibratge manual del seguidor";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_TOOLTIP = "calibreu durant 10s exposant-lo als colors blanc/negra, després engegueu el díode 13";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_HELPURL = "https://www.pololu.com/product/1419";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TITLE = "Ardumotor";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP = "Escut ArduMotor Sparkfun  A=esquerre B=dret";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL = "https://www.sparkfun.com/datasheets/DevTools/Arduino/Ardumoto_v13.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_S_TITLE = "Ardumotor & velocitat";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TITLE = "Radio Shack & velocitat";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TOOLTIP = "Radio Shack Make: A&B motors & velocitat";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_HELPURL = "http://demandware.edgesuite.net/aasr_prd/on/demandware.static/Sites-radioshack-Site/Sites-radioshack-Library/default/v1427306427938/Support/ProductManuals/2770168_PM_EN.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE = "escut Arduino";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP = "Escut Arduino motors A=esquerre B=dret";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL = "http://arduino.cc/en/Main/ArduinoMotorShieldR3";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE = "DFRobot & velocitat";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP = "DFRobot A&B Mode Motors PWM & Velocitat";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L298N)_(SKU:DRI0009)";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TITLE = "Pololu Drv8835 & velocitat";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TOOLTIP = "Pololu Drv8835 & velocitat";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_A = "velocitat motor A-esquerre";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_B = "velocitat motor B-dreta";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_A = "Direcció-L(E)/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_B = "Direcció-R(D)/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_A = "PWM/Velocitat-L(E)/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_B = "PWM/Velocitat-R(D)/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A1 = "pin A1";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B1 = "pin B1";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A2 = "pin A2";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B2 = "pin B2";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TITLE = "1 time wait - Gen";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TOOLTIP = "1 time wait botó en config) - INPUT & wait for HIGH";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TITLE = "1 Time wait - Zumo";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TOOLTIP = "1 time wait button (in setup) - INPUT_PULLUP & wait for LOW)";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TITLE = "moniteur sèrie IR";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TOOLTIP = "Afegeix al monitor Arduino el codi infraroig rebut";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TITLE = "IR Decode Blink";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TOOLTIP = "Engega el LED si s'ha rebut el codi bé";
Blockly.Msg.ROBOTS_MISC_IR_GET_TITLE = "IR # Get";
Blockly.Msg.ROBOTS_MISC_IR_GET_TOOLTIP = "Permet desar el codi infraroig rebut en una variable";
Blockly.Msg.ROBOTS_MISC_LED_PIN = "LED al pin";
Blockly.Msg.ROBOTS_MISC_IR_CODE = "Codi IR";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TITLE = "Sensors de distancia ultrasònics";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TOOLTIP = "retorna la distancia mesurada";
Blockly.Msg.ROBOTS_MISC_TRIGGER_PIN = "Trigger és al pin";
Blockly.Msg.ROBOTS_MISC_ECHO_PIN = "Echo és al pin";
Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN = "IR al pin";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TITLE = "Zumo Brunzidor";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_HELPURL = "https://www.pololu.com/docs/0J18/3";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TOOLTIP = "volum = 1-15 duració = 100-4000";
Blockly.Msg.ROBOTS_MISC_BUZZER_DURATION = "duració";
Blockly.Msg.ROBOTS_MISC_BUZZER_VOLUME = "volum";
Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE = "nota";

//infrarouge updated August 22th 2018
Blockly.Msg.IR_init_TEXT = "Inicialitza el detector";
Blockly.Msg.IR_init_TOOLTIP = "Inicialització del detector IR";
Blockly.Msg.IR_test_LED_TEXT = "Prova amb LED";
Blockly.Msg.IR_test_LED_TOOLTIP = "Prova la recepció d'un codi IR amb l'ajuda d'un LED";
Blockly.Msg.IR_test_monitor_TEXT = "Prova amb monitor";
Blockly.Msg.IR_test_monitor_TOOLTIP = "Prova la recepció d'un codi IR amb l'ajuda d'un monitor Arduino";
Blockly.Msg.IR_next_value_TEXT = "Passeu al codi següent";
Blockly.Msg.IR_next_value_TOOLTIP = "Després de cada recepció de codi, es diu al receptor que pot rebre un codi nou";
Blockly.Msg.IR_detection_TEXT = "Senyal detectada";
Blockly.Msg.IR_detection_TOOLTIP = "Permet saber si una senyal ha estat detectada pel receptor IR";
Blockly.Msg.IR_reception_code_TEXT = "Codi rebut";
Blockly.Msg.IR_reception_code_TOOLTIP = "Valor del codi rebut pel receptor IR";

//TECHNOZONE updated July 24th 2015
Blockly.Msg.TECHNOZONE51_TEXT1 = "El sensor ";
Blockly.Msg.TECHNOZONE51_TEXT2 = "al pin ";
Blockly.Msg.TECHNOZONE51_TEXT2bis = "al pin analògic A";
Blockly.Msg.TECHNOZONE51_TEXT3 = " detecta una línia ?";
Blockly.Msg.TECHNOZONE51_TEXT4 = "Entrada detector de línia (réf : LIG1)";
Blockly.Msg.TECHNOZONE51_TEXT5 = "El botó ";
Blockly.Msg.TECHNOZONE51_TEXT6 = "està premut ?";
Blockly.Msg.TECHNOZONE51_TEXT7 = "Entrada botó blanc (réf : BTN1-WHITE)";
Blockly.Msg.TECHNOZONE51_TEXT8 = "Entrada botó negre (réf : BTN1-BLACK)";
Blockly.Msg.TECHNOZONE51_TEXT9 = "Entrada botó verd (réf : BTN1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT10 = "Entrada botó roig (réf : BTN1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT11 = "final de carrera ";
Blockly.Msg.TECHNOZONE51_TEXT12 = "Entrada del final de carrera (réf : SWITCH1 o SWITCH2)";
Blockly.Msg.TECHNOZONE51_TEXT13 = " detecta un camp magnètic ?";
Blockly.Msg.TECHNOZONE51_TEXT14 = "Entrada sensor magnètic (réf : ILS1)";
Blockly.Msg.TECHNOZONE51_TEXT15 = "sensor de proximitat ";
Blockly.Msg.TECHNOZONE51_TEXT16 = " detecta un obstacle ?";
Blockly.Msg.TECHNOZONE51_TEXT17 = "Entrada detector de proximitat (réf : PROXI1)";
Blockly.Msg.TECHNOZONE51_TEXT18 = "la barrera infraroig ";
Blockly.Msg.TECHNOZONE51_TEXT19 = "Entrada barrera infraroja (réf : BARI1)";
Blockly.Msg.TECHNOZONE51_TEXT20 = " detecta una presencia ?";
Blockly.Msg.TECHNOZONE51_TEXT21 = "Entrada detector de presencia (réf : SERVO1 + CMOUV1)";
Blockly.Msg.TECHNOZONE51_TEXT22 = "la posició del potenciòmetre  ";
Blockly.Msg.TECHNOZONE51_TEXT23 = "Entrada potenciòmetre (réf : POTAR1)";
Blockly.Msg.TECHNOZONE51_TEXT24 = "la temperatura en C° ";
Blockly.Msg.TECHNOZONE51_TEXT25 = "Entrada sensor de temperatuta (réf : CTN1)";
Blockly.Msg.TECHNOZONE51_TEXT26 = "la lluminositat en Lux ";
Blockly.Msg.TECHNOZONE51_TEXT27 = "Entrada sensor de lluminositat (réf : LDR1)";
Blockly.Msg.TECHNOZONE51_TEXT28 = "la distancia mesurada en cm";
Blockly.Msg.TECHNOZONE51_TEXT29 = "TRIG al pin ";
Blockly.Msg.TECHNOZONE51_TEXT30 = "DIST al pin ";
Blockly.Msg.TECHNOZONE51_TEXT31 = "Entrada sonar ultrasò (réf : SONAR1)";
Blockly.Msg.TECHNOZONE51_TEXT32 = "  LED ";
Blockly.Msg.TECHNOZONE51_TEXT33 = "engega";
Blockly.Msg.TECHNOZONE51_TEXT34 = "atura";
Blockly.Msg.TECHNOZONE51_TEXT35 = "Sortida del led roig (réf : LED1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT36 = "Sortida led verd (réf : LED1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT37 = "Sortida led groc (réf : LED1-YELLOW)";
Blockly.Msg.TECHNOZONE51_TEXT38 = "relé ";
Blockly.Msg.TECHNOZONE51_TEXT39 = " a l'estat ";
Blockly.Msg.TECHNOZONE51_TEXT40 = "activa";
Blockly.Msg.TECHNOZONE51_TEXT41 = "desactiva";
Blockly.Msg.TECHNOZONE51_TEXT42 = "Sortida relé de potencia (réf : RELAY1)";
Blockly.Msg.TECHNOZONE51_TEXT43 = "emet un só";
Blockly.Msg.TECHNOZONE51_TEXT44 = "d'una freqüència (Hz)";
Blockly.Msg.TECHNOZONE51_TEXT45 = "durant una duració (ms) ";
Blockly.Msg.TECHNOZONE51_TEXT46 = "Sortida brunzidor (réf : LED1-BUZZER1)";
Blockly.Msg.TECHNOZONE51_TEXT47 = "posiciona el servomotor";
Blockly.Msg.TECHNOZONE51_TEXT48 = "a l'angle [0~180°]";
Blockly.Msg.TECHNOZONE51_TEXT49 = "Sortida servomotor (réf : SERVO1 + SERVO-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT50 = "l'angle del servomotor ";
Blockly.Msg.TECHNOZONE51_TEXT51 = "controla el motor ";
Blockly.Msg.TECHNOZONE51_TEXT52 = "amb la targeta EASYCON1";
Blockly.Msg.TECHNOZONE51_TEXT53 = "sentit horari (CERT o FALS ?)";
Blockly.Msg.TECHNOZONE51_TEXT54 = "velocitat [0~255]";
Blockly.Msg.TECHNOZONE51_TEXT55 = "Controla motors CC amb EASYCON1 (réf : EASYCON1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT56 = "amb la targeta EASYBOT1";
Blockly.Msg.TECHNOZONE51_TEXT57 = "Controla motors CC amb EASYBOT1 (réf : EASYBOT1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT58 = "de la targeta MOT2";
Blockly.Msg.TECHNOZONE51_TEXT59 = "als pins";
Blockly.Msg.TECHNOZONE51_TEXT60 = "pin de control de direcció (DIR)";
Blockly.Msg.TECHNOZONE51_TEXT61 = "pin de control de velocitat (PWM~)";
Blockly.Msg.TECHNOZONE51_TEXT62 = "Targeta de control de motors CC per a EASYCON1,EASYCON2,EASYBOT1 (réf : MOT2)";
Blockly.Msg.TECHNOZONE51_TEXT63 = "inicialitza la targeta PAP1 ";
Blockly.Msg.TECHNOZONE51_TEXT64 = "al bus I2C";
Blockly.Msg.TECHNOZONE51_TEXT65 = "a l'adreça";
Blockly.Msg.TECHNOZONE51_TEXT66 = "el mode de control dels motors és ";
Blockly.Msg.TECHNOZONE51_TEXT67 = "el mode de lliberament dels motors és ";
Blockly.Msg.TECHNOZONE51_TEXT68 = "Targeta de control de motors pas a pas per a EASYCON2,EASYBOT1 (réf : PAP1)";
Blockly.Msg.TECHNOZONE51_TEXT69 = "posa en moviment continu el motor ";
Blockly.Msg.TECHNOZONE51_TEXT70 = "de la targeta PAP1";
Blockly.Msg.TECHNOZONE51_TEXT71 = "posa en moviment relatiu el motor ";
Blockly.Msg.TECHNOZONE51_TEXT72 = "nombre de passos";
Blockly.Msg.TECHNOZONE51_TEXT73 = "motor en moviment ?";
Blockly.Msg.TECHNOZONE51_TEXT74 = "inicialitza la pantalla LCD";
Blockly.Msg.TECHNOZONE51_TEXT75 = "a l'adreça I2C";
Blockly.Msg.TECHNOZONE51_TEXT76 = "nombre de columna(es)";
Blockly.Msg.TECHNOZONE51_TEXT77 = "nombre de línia(es)";
Blockly.Msg.TECHNOZONE51_TEXT78 = "activada la llum de fons ?";
Blockly.Msg.TECHNOZONE51_TEXT79 = "activat el cursor ?";
Blockly.Msg.TECHNOZONE51_TEXT80 = "fa el cursor pampallugues ?";
Blockly.Msg.TECHNOZONE51_TEXT81 = "Inicialitza la pantalla LCD al I2C (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT82 = "a la pantalla LCD";
Blockly.Msg.TECHNOZONE51_TEXT83 = "activa la llum de fons";
Blockly.Msg.TECHNOZONE51_TEXT84 = "desactiva la llum de fons";
Blockly.Msg.TECHNOZONE51_TEXT85 = "activa el cursor";
Blockly.Msg.TECHNOZONE51_TEXT86 = "desactiva el cursor";
Blockly.Msg.TECHNOZONE51_TEXT87 = "fes que el cursor faci pampallugues";
Blockly.Msg.TECHNOZONE51_TEXT88 = "atura les pampallugues del cursor";
Blockly.Msg.TECHNOZONE51_TEXT89 = "activa la pantalla";
Blockly.Msg.TECHNOZONE51_TEXT90 = "desactiva la pantalla";
Blockly.Msg.TECHNOZONE51_TEXT91 = "Funcions especials de la pantalla (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT92 = "esborra la pantall LCD";
Blockly.Msg.TECHNOZONE51_TEXT93 = "Esborra la pantalla LCD al bus I2C (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT94 = "escriu a la pantalla LCD";
Blockly.Msg.TECHNOZONE51_TEXT95 = "a partir de la posició";
Blockly.Msg.TECHNOZONE51_TEXT96 = "columna [0..MAXCOL-1]";
Blockly.Msg.TECHNOZONE51_TEXT97 = "línia [0..MAXLIG-1]";
Blockly.Msg.TECHNOZONE51_TEXT98 = "el text";
Blockly.Msg.TECHNOZONE51_TEXT99 = "Escriu a la pantalla LCD (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT100 = "inicialitza el remot";
Blockly.Msg.TECHNOZONE51_TEXT101 = "Inicialitza el remot (réf : IRF1 + (TELEC1 ou TELEC2))";
Blockly.Msg.TECHNOZONE51_TEXT102 = "buida la memòria intermèdia del remot";
Blockly.Msg.TECHNOZONE51_TEXT103 = "Buida la memòria intermèdia del remot (réf :IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT104 = "s'ha premut una tecla del remot ?";
Blockly.Msg.TECHNOZONE51_TEXT105 = "Prova si una tecla del remot s'ha premut (réf : IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT106 = "la tecla";
Blockly.Msg.TECHNOZONE51_TEXT107 = "del remot";
Blockly.Msg.TECHNOZONE51_TEXT108 = "ha estat premuda ?";
Blockly.Msg.TECHNOZONE51_TEXT109 = "Prova si una tecla del remot ha estat premuda (réf : IRF1 + TELEC2)";
Blockly.Msg.TECHNOZONE51_TEXT110 = "Prova si una tecla del remot ha estat premuda (réf : IRF1 + TELEC1)";
Blockly.Msg.TECHNOZONE51_TEXT111 = "inicialitza la consola HMI";
Blockly.Msg.TECHNOZONE51_TEXT112 = "per al mòdul Bluetooth";
Blockly.Msg.TECHNOZONE51_TEXT113 = "inicialitza la consola HMI ( réf : BT1 )  ";
Blockly.Msg.TECHNOZONE51_TEXT114 = "la consola HMI està connectada ?";
Blockly.Msg.TECHNOZONE51_TEXT115 = "Prova si la interfície HMI està connectada ( réf : BT1 )";
Blockly.Msg.TECHNOZONE51_TEXT116 = "ha canviat un valor a a consola HMI ?";
Blockly.Msg.TECHNOZONE51_TEXT117 = "prova si ha hagut un canvi a la consola HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT118 = "inicialitza el LED ";
Blockly.Msg.TECHNOZONE51_TEXT119 = "de la consola HMI";
Blockly.Msg.TECHNOZONE51_TEXT120 = "i afegeix el text";
Blockly.Msg.TECHNOZONE51_TEXT121 = "Definició d'un LED HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT122 = "activa el LED ";
Blockly.Msg.TECHNOZONE51_TEXT123 = "amb el color";
Blockly.Msg.TECHNOZONE51_TEXT124 = "ningun";
Blockly.Msg.TECHNOZONE51_TEXT125 = "roig";
Blockly.Msg.TECHNOZONE51_TEXT126 = "taronja";
Blockly.Msg.TECHNOZONE51_TEXT127 = "groc";
Blockly.Msg.TECHNOZONE51_TEXT128 = "verd";
Blockly.Msg.TECHNOZONE51_TEXT129 = "blau";
Blockly.Msg.TECHNOZONE51_TEXT130 = "Activa un LED HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT131 = "inicialitza el botó ";
Blockly.Msg.TECHNOZONE51_TEXT132 = "Definició d'un botó HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT133 = "Lectura de l'estat del botó HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT134 = "inicialitza el commutador ";
Blockly.Msg.TECHNOZONE51_TEXT135 = "Definició d'un commutador HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT136 = "activa";
Blockly.Msg.TECHNOZONE51_TEXT137 = "desactiva";
Blockly.Msg.TECHNOZONE51_TEXT138 = " el commutador ";
Blockly.Msg.TECHNOZONE51_TEXT139 = "Activa un commutador de la consola HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT140 = " és actiu ?";
Blockly.Msg.TECHNOZONE51_TEXT141 = "Prova l'estat d'un commutador HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT142 = "inicialitza el potenciòmetre ";
Blockly.Msg.TECHNOZONE51_TEXT143 = "amb un divisor de";
Blockly.Msg.TECHNOZONE51_TEXT144 = "valor mini";
Blockly.Msg.TECHNOZONE51_TEXT145 = "valor maxi";
Blockly.Msg.TECHNOZONE51_TEXT146 = "posició";
Blockly.Msg.TECHNOZONE51_TEXT147 = "Definició d'un potentiomètre HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT148 = "el valor del potentiòmetre ";
Blockly.Msg.TECHNOZONE51_TEXT149 = "Lectura de la posició d'un potentiòmetre HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT150 = "inicialitza el manòmetre";
Blockly.Msg.TECHNOZONE51_TEXT151 = "graduacions 'min max sense divisió'";
Blockly.Msg.TECHNOZONE51_TEXT152 = "títol del manòmetre'títol;unitat'";
Blockly.Msg.TECHNOZONE51_TEXT153 = "Definició d'un manòmetre HMI (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT154 = "posiciona el manòmetre ";
Blockly.Msg.TECHNOZONE51_TEXT155 = "amb el valor";
Blockly.Msg.TECHNOZONE51_TEXT156 = "nombre de decimals";
Blockly.Msg.TECHNOZONE51_TEXT157 = "inicialitza el mòdul Bluetooth";
Blockly.Msg.TECHNOZONE51_TEXT158 = "Inicialitza el Bluetooth ( réf : BT1 ) ";
Blockly.Msg.TECHNOZONE51_TEXT159 = "està disponible un missatge Bluetooth ?";
Blockly.Msg.TECHNOZONE51_TEXT160 = "Prova si un missatge bluetooth està disponible (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT161 = "el missatge Bluetooth rebut";
Blockly.Msg.TECHNOZONE51_TEXT162 = "Llegeix el missatge bluetooth rebut (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT163 = "envia amb el bluetooth el missatge ";
Blockly.Msg.TECHNOZONE51_TEXT164 = "Envia un missatge amb el Bluetooth (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT165 = "connectat als pins";
Blockly.Msg.TECHNOZONE51_TEXT166 = "codis de la frase a pronunciar : ";
Blockly.Msg.TECHNOZONE51_TEXT167 = "sintetitzador vocal";
Blockly.Msg.TECHNOZONE51_TEXT168 = "(restriccions d'ús : clic dret -> ajuda)";
Blockly.Msg.TECHNOZONE51_TEXT169 = "velocitat [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT170 = "nivell [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT171 = "distorsió [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT172 = "alarma vianant";
Blockly.Msg.TECHNOZONE51_TEXT173 = "semàfor roig vianant";
Blockly.Msg.TECHNOZONE51_TEXT174 = "semàfor verd vianant";
Blockly.Msg.TECHNOZONE51_TEXT175 = "a la via 1";
Blockly.Msg.TECHNOZONE51_TEXT176 = "a la via 2";
Blockly.Msg.TECHNOZONE51_TEXT177 = "botó crida vianant via 1";
Blockly.Msg.TECHNOZONE51_TEXT178 = "botó crida vianant via 2";
Blockly.Msg.TECHNOZONE51_TEXT179 = "sensor ILS";
Blockly.Msg.TECHNOZONE51_TEXT180 = "sensor LDR";
Blockly.Msg.TECHNOZONE51_TEXT181 = "sensor IR";

//added july 17th 2015
Blockly.Msg.BQ_PIN = "al pin";
Blockly.Msg.BQ_PIN_DIGITAL = "al pin digital";
Blockly.Msg.BQ_PIN_PWM = "al pin PWM~";
Blockly.Msg.BQ_PIN_ANALOG = "al pin analògic";
Blockly.Msg.BQ_HELPURL = "http://www.bq.com/fr/produits/kit-robotica.html";
Blockly.Msg.BQ_LED1_TOOLTIP = "Sortida led (réf : LED)";
Blockly.Msg.BQ_BUZZER1_TOOLTIP = "Sortida brunzidorr (réf : BUZZER)";
Blockly.Msg.BQ_SONAR1_TOOLTIP = "Entrada ultrasònica (réf : ULTRASON)";
Blockly.Msg.BQ_SERVO1_TITLEA = "posiciona el mini servomotor";
Blockly.Msg.BQ_SERVO1_TITLEB = "amb l'angle [0~180°]";
Blockly.Msg.BQ_SERVO1_TOOLTIP = "Sortida servomotor (réf : MINI-SERVO)";
Blockly.Msg.BQ_SERVO2_TITLEA = "fes girar el servomotor amb rotació continua";
Blockly.Msg.BQ_SERVO2_TITLEB = "sentit horari (CERT o FALS ?)";
Blockly.Msg.BQ_SERVO2_TITLEC = "a la velocitat [0~255] de";
Blockly.Msg.BQ_SERVO2_TITLED = "durant un retard de (ms)";
Blockly.Msg.BQ_SERVO2_TOOLTIP = "rotació possible entre 0~180 graus : 0~90 potència variable en un sentit ; 90~180 potència variable en l'altre sentit";
Blockly.Msg.BQ_BP_TOOLTIP = 'Entrada polsador (réf : BOUTON-POUSSOIR)';
Blockly.Msg.BQ_LUX_TITLE = "la lluminositat (en Lux) llegida";
Blockly.Msg.BQ_LUX_TOOLTIP = 'Entrada sensor de lluminositat (réf : LUMINOSITE)';
Blockly.Msg.BQ_POT_TITLE = "la posició del potenciòmetre ";
Blockly.Msg.BQ_POT_TOOLTIP = 'Entrada potentiòmetre (réf : POTENTIOMETRE';
Blockly.Msg.BQ_IR_TITLE = "l'estat del seguidor de línia";
Blockly.Msg.BQ_IR_TOOLTIP = 'Entrada detector de línia (réf : LIG1)';
Blockly.Msg.BQ_BT_TITLE = "Bluetooth en mode esclau";
Blockly.Msg.BQ_BT_TOOLTIP = 'Bluetooth V2.0+EDR esclau. Sols 1 esclau per targeta.';

//added febr 7th 2016
Blockly.Msg.lp2i_mp3_init = "Audio DFPlayer Mini MP3 Init";
Blockly.Msg.lp2i_mp3_init_Pin_Rx = "pin Rx =";
Blockly.Msg.lp2i_mp3_init_Pin_Tx = "pin Tx (no usat) =";
Blockly.Msg.lp2i_mp3_init_Pin_Busy = "pin ocupat =";
Blockly.Msg.lp2i_mp3_init_Volume = "Volum (30 max) =";

Blockly.Msg.lp2i_mp3 = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_File = "Numéro du fitxer mp3 a llegir ";
Blockly.Msg.lp2i_mp3_Wait = "Espera final de lectura en curs ? =";

Blockly.Msg.lp2i_mp3_Volume = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_Volume_Input = "Volum (30 max) =";

Blockly.Msg.lp2i_u8g_draw_string = "Pantalla OLED I2C";
Blockly.Msg.lp2i_u8g_draw_string_Text = "texte a posar =";
Blockly.Msg.lp2i_u8g_draw_string_X = "columna x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "línia y (63 max) =";

Blockly.Msg.lp2i_u8g_draw_4strings = "Pantalla OLED I2C";;
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts a posar :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "línia 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "línia 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "línia 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "línia 4 =";

Blockly.Msg.lp2i_u8g_print = "Pantalla OLED I2C";
Blockly.Msg.lp2i_u8g_print_N = "Nombre a posar =";
Blockly.Msg.lp2i_u8g_print_X = "columna x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "línia y (63 max) =";

Blockly.Msg.lp2i_u8g_4draw_print = "Pantalla OLED I2C";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "a posar :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "línia 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Número 1 (a final de línia) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "línia 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Número 2 (a final de línia) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "línia 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Número 3 (a final de línia) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "línia 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Número 4 (a final de línia) ="

Blockly.Msg.lp2i_ledRGB_WS2812B_init = "Led RGB WS2812B Init";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin = "pin =";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels = "Nombre de píxels =";
Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME = "LED_RVB";
Blockly.Msg.lp2i_ledRGB_WS2812B_Brightness = "Lluminositat =";

Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor = "Led RGB WS2812B. Envia color :";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red = "Roig (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green = "Verd (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue = "Blau (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number = "per al píxel número (a partir de 0) =";

Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_LCD_KeyPad_Shield_(SKU:_DFR0009)";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "pantalla teclat tàctil escut LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "escriu a la línia 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "escriu a la línia 2";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT3 = "durant (ms)";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT4 = "prem el botó";
Blockly.Msg.LCD_SHIELD_BTN_CHOICE = [["alt (up)", "UP"], ["baix (down)", "DOWN"], ["esquerra (left)", "LEFT"], ["dreta (right)", "RIGHT"], ["selecció (select)", "SELECT"]];
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "escriu el text sobre la pantalla LCD sèrie de 2 línie i 16 caràcters";

//SHIELD ADAFRUIT
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - Motor CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - Motor CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direcció";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = "velocitat [0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "endavant";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "endarrere";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "atura";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - motor pas a pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - motor pas a pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "passos per revolució";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "velocitat (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "nombre de passos";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1_MOT1 = "v1 - Joystick + motors";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY_MOT2 = "v2 - Joystick + motors";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1 = "v1 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY2 = "v2 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_X = "entrada (x)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_Y = "entrada (y)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_NEUTRE = "zona neutra";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "motor DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "motor DC 2";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_VARIABLES = "Variables : x = retX - y = retY";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_VARIABLES2 = "Neutre+ = neut - Neutre- = neutn";

//SHIELD MULTIFUNCTION
Blockly.Msg.multifunction_buildin_led_INPUT = "posa el LED integrat";
Blockly.Msg.multifunction_buildin_led_STAT = "a l'estat";
Blockly.Msg.multifunction_buildin_led_TOOLTIP = "engega o apaga 1 dels 4 LEDS integrats";
Blockly.Msg.multifunction_digital_read_INPUT = "estat lògic del polsador";
Blockly.Msg.multifunction_digital_read_TOOLTIP = "detecta l'estat dels BP integrats";
Blockly.Msg.multifunction_pot_read_INPUT = "el valor analògic del potenciòmetre";
Blockly.Msg.multifunction_pot_read_TOOLTIP = "llegeix el valor de la resistència ajustable";
Blockly.Msg.multifunction_analog_read_INPUT = "el valor llegit al port analògic A5";
Blockly.Msg.multifunction_analog_read_TOOLTIP = "sol A5 està disponible";
Blockly.Msg.multifunction_PWM_write_OUTPUT = "envia amb la sortida PWM~";
Blockly.Msg.multifunction_PWM_write_ANGLE = "el valor";
Blockly.Msg.multifunction_PWM_write_TOOLTIP = "sortida digital o analògica PWM";
Blockly.Msg.multifunction_tone_INPUT1 = "emet un só al brunzidor";
Blockly.Msg.multifunction_tone_INPUT2 = "d'una freqüència (Hz)";
Blockly.Msg.multifunction_tone_INPUT3 = "durant una durada (ms) de";
Blockly.Msg.multifunction_tone_TOOLTIP = "brunzidor connectat a la sortida digital D";
Blockly.Msg.multifunction_notone_INPUT = "atura el só del brunzidor integrat";
Blockly.Msg.multifunction_notone_TOOLTIP = "posa el brunzidor a 0";
Blockly.Msg.multifunction_segment_TEXT = "posa el nombre";
Blockly.Msg.multifunction_segment_INPUT1 = "1a xifra";
Blockly.Msg.multifunction_segment_INPUT2 = "2a xifra";
Blockly.Msg.multifunction_segment_INPUT3 = "3a xifra";
Blockly.Msg.multifunction_segment_INPUT4 = "4a xifra";
Blockly.Msg.multifunction_segment_TOOLTIP = "posa 4 xifres als 7 segments";

// Module RF433 (Added August 23th 2018)
Blockly.Msg.RF433_rxready_TEXT = "Missatge preparat";
Blockly.Msg.RF433_rxready_INPUT = "Pin entrada";
Blockly.Msg.RF433_rxready_TOOLTIP = "Permet saber si un missatge ha estat rebut o no pel receptor de ràdio";
Blockly.Msg.RF433_rx_TEXT = "Rep caràcter";
Blockly.Msg.RF433_rx_INPUT = "Pin entrada";
Blockly.Msg.RF433_rx_TOOLTIP = "Permet obtenir el contingut del missatge rebut pel receptor de ràdio";
Blockly.Msg.RF433_tx_TEXT = "Envia missatge";
Blockly.Msg.RF433_tx_INPUT1 = "Pin sortida";
Blockly.Msg.RF433_tx_INPUT2 = "Missatge";
Blockly.Msg.RF433_tx_TOOLTIP = "Permet enviar un missatge amb l'ajuda d'un emissor de ràdio";
Blockly.Msg.RF433_init_receiver_TEXT = "inicialitza el receptor de ràdio";
Blockly.Msg.RF433_init_receiver_INPUT = "PIN";
Blockly.Msg.RF433_init_receiver_TOOLTIP = "Permet incialitzar el receptor de ràdio RF433";
Blockly.Msg.RF433_init_transmitter_TEXT = "inicialitza l'emissor de ràdio";
Blockly.Msg.RF433_init_transmitter_INPUT = "PIN";
Blockly.Msg.RF433_init_transmitter_TOOLTIP = "Permet incialitzar l'emissor de ràdio RF433";
Blockly.Msg.RF433_define_message_TEXT = "Defineix el missatge a enviar";
Blockly.Msg.RF433_define_message_INPUT = "Missatge";
Blockly.Msg.RF433_define_message_TOOLTIP = "Permet definir el missatge que es desitgi enviar amb l'ajuda de l'emissor de ràdio";
Blockly.Msg.RF433_send_message_full_TEXT = "Envia un missatge";
Blockly.Msg.RF433_send_message_full_INPUT = "Missatge";
Blockly.Msg.RF433_send_message_full_TOOLTIP = "Permet enviar un missatge amb l'ajuda de l'emissor de ràdio";
Blockly.Msg.RF433_show_message_TEXT = "Posa el missatge rebut";
Blockly.Msg.RF433_show_message_TOOLTIP = "Permet posar el missatge rebut amb l'ajuda del receptor de ràdio al monitor Arduino";
Blockly.Msg.RF433_send_message_TEXT = "Envia el missatge";
Blockly.Msg.RF433_send_message_TOOLTIP = "Permet enviar el missatge definit previament amb l'ajuda de l'emisor de ràdio";
Blockly.Msg.RF433_wait_rx_TEXT = "Attendre réception message";
Blockly.Msg.RF433_wait_rx_TOOLTIP = "Posa el receptor de ràdio en posició d'esperar un missatge";
Blockly.Msg.RF433_wait_tx_TEXT = "Espera fi d'enviament del missatge";
Blockly.Msg.RF433_wait_tx_TOOLTIP = "Permet esperar el temps necessari a l'emissor per enviar el missatge complet";
Blockly.Msg.RF433_reception_message_TEXT = "Recepció missatge";
Blockly.Msg.RF433_reception_message_TOOLTIP = "Permet saber si un missatge ha estat rebut o no pel receptor de ràdio";
Blockly.Msg.RF433_receive_message_TEXT = "Missatge rebut";
Blockly.Msg.RF433_receive_message_TOOLTIP = "Permet obtenir el contingut del missatge rebut per l'emissor de ràdio";

// Module RFID (Added April 13th 2017)
Blockly.Msg.RFID_module_TEXT = "inicialitza el mòdul RFID";
Blockly.Msg.RFID_module_INPUT1 = "SDA";
Blockly.Msg.RFID_module_INPUT2 = "SCK";
Blockly.Msg.RFID_module_INPUT3 = "MOSI";
Blockly.Msg.RFID_module_INPUT4 = "MISO";
Blockly.Msg.RFID_module_INPUT5 = "RST";
Blockly.Msg.RFID_module_TOOLTIP = "Permet inicialitzar la connexió entre el mòdul RFID i la targeta arduino";
Blockly.Msg.RFID_detection_TEXT = "detecció d'una targeta";
Blockly.Msg.RFID_detection_TOOLTIP = "Permet saber si una targeta s'ha presentat al mòdul RFID. Si ha passat s'ha obert una connexió entre els 2.";
Blockly.Msg.RFID_reception_cle_TEXT = "informació enviada per la targeta";
Blockly.Msg.RFID_reception_cle_TOOLTIP = "Permet saber si s'ha enviat una informació al mòdul RFID";
Blockly.Msg.RFID_lecture_cle_TEXT = "llectura de l'informació enviada per la RFID";
Blockly.Msg.RFID_lecture_cle_TOOLTIP = "Permet llegir la informació enviada al mòdul RFID";
Blockly.Msg.RFID_fermeture_TEXT = "tancament de la connexió RFID oberta";
Blockly.Msg.RFID_fermeture_TOOLTIP = "Permet tancar la connexió oberta entre el mòdul RFID i la targeta";
Blockly.Msg.RFID_valeur_cle_TEXT = "valor de l'informació enviada per la RFID";
Blockly.Msg.RFID_valeur_cle_TOOLTIP = "Permet conèixer el valor de la informació enviada al mòdul RFID";
Blockly.Msg.RFID_code_acces_TEXT = "inicialitza el codi d'accés";
Blockly.Msg.RFID_code_acces_INPUT1 = "valor 1";
Blockly.Msg.RFID_code_acces_INPUT2 = "valor 2";
Blockly.Msg.RFID_code_acces_INPUT3 = "valor 3";
Blockly.Msg.RFID_code_acces_INPUT4 = "valor 4";
Blockly.Msg.RFID_code_acces_TOOLTIP = "Permet definir el codi d'accès autoritzat";
Blockly.Msg.RFID_acces_autorise_TEXT = "codi d'accès autoritzat";
Blockly.Msg.RFID_acces_autorise_TOOLTIP = "Permet saber si l'accés rebut pel mòdul RFID correspon al que se li ha definit.";

//Added March 18th 2016
Blockly.Msg.ROBUNO_INOUT_LED_INPUT1 = "posa el LED roig";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT2 = "al pin digital";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT3 = "a l'estat";
Blockly.Msg.ROBUNO_LED1_TOOLTIP = "Sortida led (réf : LED)";
Blockly.Msg.ROBUNO_INOUT_LED_INPUT4 = "posa el LED blanc";
Blockly.Msg.ROBUNO_TEXT1 = "activa l'alarma col·lisió";
Blockly.Msg.ROBUNO_TEXT2 = "d'una freqüència (Hz)";
Blockly.Msg.ROBUNO_TEXT3 = "durant una duració (ms) ";
Blockly.Msg.ROBUNO_BUZZER1_TOOLTIP = "Sortida brunzidor (réf : BUZZER)";
Blockly.Msg.ROBUNO_SERVO2_TITLEA = "fes girar el servomotor a esquerra";
Blockly.Msg.ROBUNO_SERVO2_TITLEB = "cap Endavant (CERT) o Endarrere (FALS)";
Blockly.Msg.ROBUNO_SERVO2_TITLEC = "a la velocitat angular [0 ~ 180 graus]";
Blockly.Msg.ROBUNO_SERVO2_TITLED = "fes girar el servomotor a dreta";
Blockly.Msg.ROBUNO_SERVO2_TOOLTIP = "rotació possible entre 0~180 graus : 0~90 potencia variable en un sentit ; 90~180 potencia variable en l'altre sentit";
Blockly.Msg.ROBUNO_PIN_PWM = "al PWM~";
Blockly.Msg.ROBUNO_TEXT4 = "sensor de col·lisió esquerre";
Blockly.Msg.ROBUNO_TEXT5 = "al pin ";
Blockly.Msg.ROBUNO_TEXT6 = "  està premut ?";
Blockly.Msg.ROBUNO_TEXT7 = "Entrada sensor de col·lisió (réf : Esquerre o Dreta)";
Blockly.Msg.ROBUNO_TEXT8 = "sensor de col·lisió dret";
Blockly.Msg.ROBUNO_TEXT9 = "controla el motor";
Blockly.Msg.ROBUNO_TEXT10 = "de l'escut de motors CC";
Blockly.Msg.ROBUNO_TEXT11 = "al pins";
Blockly.Msg.ROBUNO_TEXT12 = "pin de control de direcció (DIR)";
Blockly.Msg.ROBUNO_TEXT13 = "pin de control de la velocitat (PWM~)";
Blockly.Msg.ROBUNO_TEXT14 = "sentit horari (255) o antihorari (0)?";
Blockly.Msg.ROBUNO_TEXT15 = "velocitat MAX (CERT) o nul·la (FALS)";
Blockly.Msg.ROBUNO_TEXT16 = "Targeta de control dels dos motors CC";

Blockly.Msg.ROBUNO_LUX_TITLE1 = "la lluminositat llegida al LDR esquerre";
Blockly.Msg.ROBUNO_LUX_TITLE2 = "la lluminositat llegida al LDR dret";
Blockly.Msg.ROBUNO_LUX_TOOLTIP = "entrada sensor de lluninositat";
Blockly.Msg.ROBUNO_PIN_ANALOG = "al pin analògic";
Blockly.Msg.ROBUNO_HELPURL = "http://www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html";

//Added March 26th 2016
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT1 = "posa el semàfor roig";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT2 = "al pin digital";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT3 = "a l'estat";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT4 = "posa el semàfor taronja";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT5 = "posa el semàfor verd";
Blockly.Msg.FISCHERTECHNIK_INOUT_LED_INPUT6 = "posa el barrera lluminosa";
Blockly.Msg.FISCHERTECHNIK_LED1_TOOLTIP = "Sortida led (réf : LED)";
Blockly.Msg.FISCHERTECHNIK_TEXT1 = "activa brunzidor";
Blockly.Msg.FISCHERTECHNIK_TEXT2 = "a una freqüència (Hz)";
Blockly.Msg.FISCHERTECHNIK_TEXT3 = "durant una duració (ms) ";
Blockly.Msg.FISCHERTECHNIK_TEXT4 = "el BP o sensor de posició de la barrera";
Blockly.Msg.FISCHERTECHNIK_TEXT5 = "al pin ";
Blockly.Msg.FISCHERTECHNIK_TEXT6 = " detecta metall ?";
Blockly.Msg.FISCHERTECHNIK_TEXT7 = "Entrada sensor magnètic (réf : ILS)";
Blockly.Msg.FISCHERTECHNIK_TEXT8 = "el sensor magnètic";

Blockly.Msg.FISCHERTECHNIK_BUZZER1_TOOLTIP = "Sortida brunzidor (réf : BUZZER)";
Blockly.Msg.FISCHERTECHNIK_PIN = "al pin";
Blockly.Msg.FISCHERTECHNIK_LUX_TITLE1 = "la luminosité lue sur le capteur de lumière";
Blockly.Msg.FISCHERTECHNIK_LUX_TOOLTIP = "Entrée capteur de Luminosité";
Blockly.Msg.FISCHERTECHNIK_PIN_ANALOG = "sur la broche Analogique";

Blockly.Msg.FISCHERTECHNIK_TEXT9 = "controla el motor";
Blockly.Msg.FISCHERTECHNIK_TEXT10 = "de l'escut motor CC";
Blockly.Msg.FISCHERTECHNIK_TEXT11 = "al pins";
Blockly.Msg.FISCHERTECHNIK_TEXT12 = "pin de control de direcció (DIR)";
Blockly.Msg.FISCHERTECHNIK_TEXT13 = "pin de control de la velocitat (PWM~)";
Blockly.Msg.FISCHERTECHNIK_TEXT14 = "sentit horari (255) o antihorari (0)??";
Blockly.Msg.FISCHERTECHNIK_TEXT15 = "velocitat MAX (CERT) o nul (FALS)";
Blockly.Msg.FISCHERTECHNIK_TEXT16 = "Targeta de control de dos motors CC";
Blockly.Msg.FISCHERTECHNIK_TEXT17 = "  està premuda ?";

//Added April 19th 2016
Blockly.Msg.MBOT_HELPURL = "http://www.makeblock.cc/mbot/";
Blockly.Msg.MBOT_FORWARD_TOOLTIP = "endavant";
Blockly.Msg.MBOT_BACKWARD_TOOLTIP = "endarrere";
Blockly.Msg.MBOT_TURN_LEFT_TOOLTIP = "gira a esquerra";
Blockly.Msg.MBOT_TURN_RIGHT_TOOLTIP = "gira a dreta";
Blockly.Msg.MBOT_MOTOR_TOOLTIP = "gestió individual dels motors";
Blockly.Msg.MBOT_MOTOR_TITLE = "cap endavant (1) o endarrere (0)";
Blockly.Msg.MBOT_MOTOR_LEFT_TITLE = "motor a esquerre : potencia";
Blockly.Msg.MBOT_MOTOR_RIGHT_TITLE = "motor a dreta : potencia";
Blockly.Msg.MBOT_MOTOR_SENS = "1 : endavant | 0 : endarrere";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS = "motor esquerre : sentit";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS_PIN = "motor esquerre : activa sensit (pin 7)";
Blockly.Msg.MBOT_MOTOR_LEFT_SENS_CHANGE = "motor esquerre : sentit";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM = "motor esquerre : potencia";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM_PIN = "motor esquerre : activa PWM (pin 6)";
Blockly.Msg.MBOT_MOTOR_LEFT_PWM_CHANGE = "motor esquerre : potencia";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS = "motor dret : sentit";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_PIN = "motor dret : activa sentit (pin 4)";
Blockly.Msg.MBOT_MOTOR_RIGHT_SENS_CHANGE = "motor dret : sentit";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM = "motor dret : potencia";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_PIN = "motor dret : activa PWM (pin 5)";
Blockly.Msg.MBOT_MOTOR_RIGHT_PWM_CHANGE = "motor dret : potencia";
Blockly.Msg.MBOT_RGB_ONBOARD_INTRO = "coloreja els LED RGB";
Blockly.Msg.MBOT_RGB_ONBOARD_RED = "roig (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_BLUE = "blau (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_GREEN = "verd (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_PIXEL_NUMBER = "tria ";
Blockly.Msg.MBOT_RGB_ONBOARD_FIELDDROPDOWN = [["0 (els dos leds)", "0"], ["1 (led esquerre)", 1], ["2 (led dret)", 2]];
Blockly.Msg.MBOT_BUZZER_INTRO = "reprodueix un só";
Blockly.Msg.MBOT_BUZZER_TONE = "nota";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_TONE = [["A", "27.5"], ["B", "30.868"], ["C", "16.352"], ["D", "18.354"], ["E", "20.602"], ["F", "21.827"], ["G", "24.5"]];
Blockly.Msg.MBOT_BUZZER_OCTAVE = "#";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_OCTAVE = [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]];
Blockly.Msg.MBOT_BUZZER_DELAY = "durée";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_DELAY = [["un semi", "500"], ["un quart", "250"], ["un huité", "125"], ["tot", "1000"], ["doble", "2000"], ["zero", "0"]];

//NBR added on 2017-04-05
Blockly.Msg.MBOT_PORT_CHOICE = [["Port 1", "PORT_1"],  ["Port 2", "PORT_2"],  ["Port 3", "PORT_3"],  ["Port 4", "PORT_4"],  ["Port 5", "PORT_5"],  ["Port 6", "PORT_6"],  ["Port 7", "PORT_7"],  ["Port 8", "PORT_8"]];

Blockly.Msg.MBOT_INOUT_LINE_HELPURL = "http://learn.makeblock.com/en/me-line-follower/";
Blockly.Msg.MBOT_INOUT_LINE_TEXT = "Sensor seguidor de línia";
Blockly.Msg.MBOT_INOUT_LINE_INPUT = "sobre";
Blockly.Msg.MBOT_INOUT_LINE_TOOLTIP = "Valor permetent al robot de seguir una línia traçada al sol";

Blockly.Msg.MBOT_INOUT_ULTRASONIC_HELPURL = "http://learn.makeblock.com/en/me-ultrasonic-sensor/";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_TEXT = "Sensor ultrasònic de distància";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_INPUT = "sobre";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT = "unitat";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.MBOT_INOUT_ULTRASONIC_TOOLTIP = "Mesura de distància sense contacte";

Blockly.Msg.MBOT_IR_PORT_CHOICE = [["Interne", "0"],  ["Port 1", "PORT_1"],  ["Port 2", "PORT_2"],  ["Port 3", "PORT_3"],  ["Port 4", "PORT_4"],  ["Port 5", "PORT_5"],  ["Port 6", "PORT_6"],  ["Port 7", "PORT_7"],  ["Port 8", "PORT_8"]];
Blockly.Msg.MBOT_RECEPTEUR_IR_HELPURL = "http://learn.makeblock.com/en/me-infrared-reciver-decode/";
Blockly.Msg.MBOT_RECEPTEUR_IR_TEXT = "Receptor IR";
Blockly.Msg.MBOT_RECEPTEUR_IR_INPUT = "sobre";
Blockly.Msg.MBOT_RECEPTEUR_IR_TOOLTIP = "Retorna el valor del codi IR rebut";

//Added May 1rst 2016
Blockly.Msg.ROMEO_HELPURL = "http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29";
Blockly.Msg.ROMEO3_MOTOR1_SENS = "motor M1 : sentit";
Blockly.Msg.ROMEO3_MOTOR2_SENS = "motor M2 : sentit";
Blockly.Msg.ROMEO3_MOTOR_SENS = "1 : endavant | 0 : endarrere";
Blockly.Msg.ROMEO3_MOTOR1_PWM = "motor M1 : potència (0~255)";
Blockly.Msg.ROMEO3_MOTOR2_PWM = "motor M2 : potència (0~255)";
Blockly.Msg.ROMEO3_MOTOR_TOOLTIP = "gestió individual dels motors";
Blockly.Msg.ROMEO3_SWITCH = "prem el botó";
Blockly.Msg.ROMEO_SWITCH_FIELDDROPDOWN = [["S1", "0"], ["S2", "147"], ["S3", "333"], ["S4", "510"], ["S5", "745"], ["ningun", "1023"]];
Blockly.Msg.ROMEO3_SWITCH_TOOLTIP = "Verifica el commutador S1-S5 !!! Llegeix el valor de l'entrada analògica A0 : 0 per S1, 147 per S2, 333 per S3, 510 per S4, 745 per S5, 1023 per ningun";

//Added March 13th 2019
Blockly.Msg.ROMEO_HELPURL = "http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29";
Blockly.Msg.ROMEO_BLE_3_MOTOR1_SENS = "motor M1 : sentit";
Blockly.Msg.ROMEO_BLE_3_MOTOR2_SENS = "motor M2 : sentit";
Blockly.Msg.ROMEO_BLE_3_MOTOR_SENS = "1 : endavant | 0 : endarrere";
Blockly.Msg.ROMEO_BLE_3_MOTOR1_PWM = "motor M1 : potencia (0~255)";
Blockly.Msg.ROMEO_BLE_3_MOTOR2_PWM = "motor M2 : potencia (0~255)";
Blockly.Msg.ROMEO_BLE_3_MOTOR_TOOLTIP = "gestió individual dels motors";
Blockly.Msg.ROMEO_BLE_3_SWITCH = "prem sobre el botó";
Blockly.Msg.ROMEO_BLE_SWITCH_FIELDDROPDOWN = [["S1", "0"], ["S2", "142"], ["S3", "331"], ["S4", "506"], ["S5", "742"], ["ningú", "1023"]];
Blockly.Msg.ROMEO_BLE_3_SWITCH_TOOLTIP = "Verifica el coomutador S1-S5 !!! Llegeix el valor a l'entrada analògica A7 : 0 per S1, 142 per S2, 331 per S3, 506 per S4, 742 per S5, 1023 per ningun";

//Added september 16th 2017
Blockly.Msg.VITESSE_ROTATION_HELPURL = "En curs";
Blockly.Msg.VITESSE_ROTATION_TEXT = "velocitat de gir (en revolucions/minut)";
Blockly.Msg.VITESSE_ROTATION_INPUT = "en la copa al pin n°";
Blockly.Msg.VITESSE_ROTATION_TOOLTIP = "Mesura de la velocitat de rotació (amb un interruptor reed) amb revolucions per minut (rev/min) cada 5 segons";

Blockly.Msg.VITESSE_VENTMS_HELPURL = "En curs";
Blockly.Msg.VITESSE_VENTMS_TEXT = "velocitat del vent (en m/s)";
Blockly.Msg.VITESSE_VENTMS_INPUT = "del sensor connectat al pin n°";
Blockly.Msg.VITESSE_VENTMS_RAYON = "Radi del braç de de l'anemòmètre (en cm)";
Blockly.Msg.VITESSE_VENTMS_COEFF = "Coeficient de calibració";
Blockly.Msg.VITESSE_VENTMS_TOOLTIP = "Mesura de la velocitat del vent (amb un interruptor reed) en metres per segon (m/s) cada 5 segons";

Blockly.Msg.VITESSE_VENTKMH_HELPURL = "En curs";
Blockly.Msg.VITESSE_VENTKMH_TEXT = "vitesse du vent (en km/h)";
Blockly.Msg.VITESSE_VENTKMH_INPUT = "del sensor connectat al pin n°";
Blockly.Msg.VITESSE_VENTKMH_RAYON = "Radi del braç de de l'anemòmètre (en cm)";
Blockly.Msg.VITESSE_VENTKMH_COEFF = "Coeficient de calibració ";
Blockly.Msg.VITESSE_VENTKMH_TOOLTIP = "Mesure de la vitesse du vent (avec un interrupteur reed) en kilomètre par heure (km/h) toutes les 5 secondes";

Blockly.Msg.VITESSE_VENTNOEUD_HELPURL = "En curs";
Blockly.Msg.VITESSE_VENTNOEUD_TEXT = "velocitat del vent (en nusos)";
Blockly.Msg.VITESSE_VENTNOEUD_INPUT = "del sensor connectat al pin n°";
Blockly.Msg.VITESSE_VENTNOEUD_RAYON = "Radi del braç de de l'anemòmètre (en cm)";
Blockly.Msg.VITESSE_VENTNOEUD_COEFF = "Coeficient de calibració ";
Blockly.Msg.VITESSE_VENTNOEUD_TOOLTIP = "Mesura de la velocitat del vent (aamb un interruptor reed) en nusos cada 5 segons";

Blockly.Msg.FORCE_BEAUFORT_HELPURL = "En curs";
Blockly.Msg.FORCE_BEAUFORT_TEXT1 = "força del vent en graus Beaufort";
Blockly.Msg.FORCE_BEAUFORT_TEXT2 = "(la mesura envia un nombre enter de 0 a 12)";
Blockly.Msg.FORCE_BEAUFORT_INPUT = "Sensor connectat al pin n°";
Blockly.Msg.FORCE_BEAUFORT_RAYON = "Radi del braç de de l'anemòmètre (en cm)";
Blockly.Msg.FORCE_BEAUFORT_COEFF = "Coeficient de calibració ";
Blockly.Msg.FORCE_BEAUFORT_TOOLTIP = "Mesura de la força del vent (amb un interruptor reed) en graus de Beaufort cada 5 segons";

//Added august 20th 2016
Blockly.Msg.FLYCAM_SWITCH_HELPURL = "http://tic.technologiescollege.fr/wiki/doku.php/fr/arduino/flycam";
Blockly.Msg.FLYCAM_SWITCH_TEXT = "canvia el mode";
Blockly.Msg.FLYCAM_SWITCH_INPUT = "de la Flycam al pin n°";
Blockly.Msg.FLYCAM_SWITCH_TOOLTIP = "esperar que la ordre es fixi durant 3s després una pausa de 1s";
Blockly.Msg.FLYCAM_RECORD_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_RECORD_TEXT = "fes la captura";
Blockly.Msg.FLYCAM_RECORD_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_RECORD_TOOLTIP = "envia un impuls de 1s del tipus servo=180°";
Blockly.Msg.FLYCAM_STOP_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_STOP_TEXT = "atura la captura";
Blockly.Msg.FLYCAM_STOP_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_STOP_TOOLTIP = "envia una impuls de 1s del tipus servo=0°";

//Added august 23th 2016
Blockly.Msg.MHK_ULTRASON_HELPURL = "http://www.gotronic.fr/art-module-de-detection-us-hc-sr04-20912.htm";
Blockly.Msg.MHK_ULTRASON1 = "la distancia mesurada en cm ";
Blockly.Msg.MHK_ULTRASON2 = "TRIG al pin ";
Blockly.Msg.MHK_ULTRASON3 = "ECHO al pin ";
Blockly.Msg.MHK_ULTRASON_TOOLTIP = "Detecció d'obstacle per ultrasò";
Blockly.Msg.MHK_MOTEUR_VIBREUR_HELPURL = "http://www.gotronic.fr/art-vibreur-miniature-vm1201-20685.htm";
Blockly.Msg.MHK_MOTEUR_VIBREUR1 = " fes vibrar el motor al pin";
Blockly.Msg.MHK_MOTEUR_VIBREUR2 = "al valor";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_HELPURL = "http://www.robotshop.com/eu/fr/capteur-electrique-muscle-myoware.html";
Blockly.Msg.MHK_CAPTEUR_MYOWARE1 = "valor llegit al sensor myoware  ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE2 = "al pin analògic ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_TOOLTIP = "sensor muscular myoware";
Blockly.Msg.MHK_SERVO_MOTEUR1 = "posiciona el servomotor";
Blockly.Msg.MHK_SERVO_MOTEUR2 = "al pin";
Blockly.Msg.MHK_SERVO_MOTEUR3 = "amb un angle de [0~180°]";
Blockly.Msg.MHK_SERVO_MOTEUR_TOOLTIP = "Sortida servomotor (réf : MINI-SERVO)";

// added august 28th 2016
// blocks from Ardublockly project

Blockly.Msg.SPI_SETUP = "Ajust";
Blockly.Msg.SPI_SETUP_CONF = "configuració:";
Blockly.Msg.SPI_SETUP_DIVIDE = "divisió del rellotge";
Blockly.Msg.SPI_SETUP_LSBFIRST = "LSBFIRST";
Blockly.Msg.SPI_SETUP_MODE = "SPI mode (idle - edge)";
Blockly.Msg.SPI_SETUP_MODE0 = "0 (Low - Falling)";
Blockly.Msg.SPI_SETUP_MODE1 = "1 (Low - Rising)";
Blockly.Msg.SPI_SETUP_MODE2 = "2 (High - Falling)";
Blockly.Msg.SPI_SETUP_MODE3 = "3 (High - Rising)";
Blockly.Msg.SPI_SETUP_MSBFIRST = "MSBFIRST";
Blockly.Msg.SPI_SETUP_SHIFT = "desplaça dades";
Blockly.Msg.SPI_SETUP_TIP = "Configura el perifèric SPI";
Blockly.Msg.SPI_TRANSRETURN_TIP = "Envia un missatge SPI a un dispositiu esclau especificat i recupera les dades.";
Blockly.Msg.SPI_TRANS_NONE = "cap";
Blockly.Msg.SPI_TRANS_SLAVE = "al pin esclau";
Blockly.Msg.SPI_TRANS_TIP = "Envia un missatge SPI a un dispositiu esclau especificat.";
Blockly.Msg.SPI_TRANS_VAL = "transferència";
Blockly.Msg.SPI_TRANS_WARN1 = "Un block configurat per a %1 cal que sigui afegit al espai de treball per usar aquest block!";
Blockly.Msg.SPI_TRANS_WARN2 = "No està disponible el valor del pin vell %1.";

Blockly.Msg.STEPPER_DEFAULT_NAME = "motor PaP";
Blockly.Msg.STEPPER_MOTOR = "motor pas a pas";
Blockly.Msg.STEPPER_PIN1 = "pin 1 :";
Blockly.Msg.STEPPER_PIN2 = "pin 2 :";
Blockly.Msg.STEPPER_REVOLVS = "nombre de passos per revolució";
Blockly.Msg.STEPPER_SETUP = "defineix la";
Blockly.Msg.STEPPER_SETUP_TIP = "Configura les connexions del motor pas a pas i altres ajustos.";
Blockly.Msg.STEPPER_SPEED = "velocitat (rev/min) :";
Blockly.Msg.STEPPER_STEP = "endavant al motor PaP";
Blockly.Msg.STEPPER_STEPS = "pas";
Blockly.Msg.STEPPER_STEP_TIP = "Gira el motor pas a pas amb un nombre específics de passos.";
Blockly.Msg.STEPPER_STEP_WARN1 = "Cal afegir un bloc de configuració del PaP  per usar aquest bloc!";
Blockly.Msg.STEPPER_STEP_WARN2 = "Cal afegir un nom d'entrada del bloc de configuració del PaP!";
Blockly.Msg.STEPPER_STEP_WARN3 = "El PaP seleccionat no existeix més, seleccioneu-ne un altre.";

//******** Esus Board (Mace Robotics)
Blockly.Msg.ESUS_EsusBoard_init = "inicialització targeta Esus";
Blockly.Msg.ESUS_MOTOR1_SPEED = "motor 1, velocitat :";
Blockly.Msg.ESUS_MOTOR1_DIRECTION = "sentit de rotació :";
Blockly.Msg.ESUS_MOTOR2_SPEED = "motor 2, velocitat :";
Blockly.Msg.ESUS_MOTOR2_DIRECTION = "sentit de rotació :";
Blockly.Msg.ESUS_ANALOG = "entrada analògica :";
Blockly.Msg.ESUS_WIFI_SSID = "configuració WiFi mode infra  SSID :";
Blockly.Msg.ESUS_WIFI_PASSWORD = "contrasenya";
Blockly.Msg.ESUS_WIFI_IP = "configuració adreça WiFi :";
Blockly.Msg.ESUS_WIFI_READ_STREAM = "lectura dades WiFi";
Blockly.Msg.ESUS_WIFI_CONTAIN2 = "conté";
Blockly.Msg.ESUS_WIFI_CONTAIN = "dades WiFi";
Blockly.Msg.ESUS_WIFI_DATA_AVAILABLE = "dades WiFi disponibles ?";
Blockly.Msg.ESUS_WIFI_AP = "configuració WiFi mode AP SSID:";
Blockly.Msg.ESUS_WIFI_AP_IP = "adreça IP :";
Blockly.Msg.ESUS_WIFI_SEND_STREAM = "envia dades WiFi (text)";
Blockly.Msg.ESUS_WIFI_SEND_FLOAT_STREAM = "envia dades WiFi (nombre)";

//******** Robot MRduino (Mace Robotics)
Blockly.Msg.MRduino_init="Inicialització robot MRduino";
Blockly.Msg.MRduino_forward="Endavant";
Blockly.Msg.MRduino_forward_mm="Endavant, distancia";
Blockly.Msg.MRduino_controlEnable="Activa control";
Blockly.Msg.MRduino_controlDisable="Desactiva control";
Blockly.Msg.MRduino_stop="Atura";
Blockly.Msg.MRduino_back="Endarrere";
Blockly.Msg.MRduino_back_mm="Endarrere, distancia";
Blockly.Msg.MRduino_turnLeft="Gira a esquerra";
Blockly.Msg.MRduino_turnLeft_degree="Gira a esquerra, graus";
Blockly.Msg.MRduino_turnRight="Gira a dreta";
Blockly.Msg.MRduino_turnRight_degree="Gira a dreta, graus";
Blockly.Msg.MRduino_proxSensor1="Sensor proximitat 1";
Blockly.Msg.MRduino_proxSensor2="Sensor proximitat 2";
Blockly.Msg.MRduino_proxSensor3="Sensor proximitat 3";
Blockly.Msg.MRduino_proxSensor4="Sensor proximitat 4";
Blockly.Msg.MRduino_proxSensor5="Sensor proximitat 5";
Blockly.Msg.MRduino_proxSensor6="Sensor proximitat 6";
Blockly.Msg.MRduino_ambiantLight1="Sensor de llum 1";
Blockly.Msg.MRduino_ambiantLight2="Sensor de llum 2";
Blockly.Msg.MRduino_ambiantLight3="Sensor de llum 3";
Blockly.Msg.MRduino_ambiantLight4="Sensor de llum 4";
Blockly.Msg.MRduino_ambiantLight5="Sensor de llum 5";
Blockly.Msg.MRduino_ambiantLight6="Sensor de llum 6";
Blockly.Msg.MRduino_groundSensor1="Sensor de sòl 1";
Blockly.Msg.MRduino_groundSensor2="Sensor de sòl 2";
Blockly.Msg.MRduino_groundSensor3="Sensor de sòl 3";
Blockly.Msg.MRduino_led1On="led n°1 engega";
Blockly.Msg.MRduino_led2On="led n°2 engega";
Blockly.Msg.MRduino_led3On="led n°3 engega";
Blockly.Msg.MRduino_led1Off="led n°1 atura";
Blockly.Msg.MRduino_led2Off="led n°2 atura";
Blockly.Msg.MRduino_led3Off="led n°3 atura";
Blockly.Msg.MRduino_led1Toggle="led n°1 commuta";
Blockly.Msg.MRduino_led2Toggle="led n°2 commuta";
Blockly.Msg.MRduino_led3Toggle="led n°3 commuta";
Blockly.Msg.MRduino_battery="tensió de la bateria";
Blockly.Msg.MRduino_temperature="temperatura";

//******** APDS9960 couleurs et mouvements
Blockly.Msg.APDS9960_MISC_HELPURL = "https://www.sparkfun.com/products/12787";
Blockly.Msg.APDS9960_INIT_TITLE = "inicialització del sensor APDS-9960";
Blockly.Msg.APDS9960_INIT_TOOLTIP = "prova per calibrar la lluminositat ambient";
Blockly.Msg.APDS9960_TEST_TITLE = "prova del sensor";
Blockly.Msg.APDS9960_TEST_TOOLTIP = "retorna FALS en cas d'error material";
Blockly.Msg.APDS9960_AMBIENT_TITLE = "lluminositat ambient";
Blockly.Msg.APDS9960_AMBIENT_TOOLTIP = "retorna un valor per la quantitat de llum mesurada";
Blockly.Msg.APDS9960_RED_TITLE = "codi RGB del Roig (0~255)";
Blockly.Msg.APDS9960_GREEN_TITLE = "codi RGB del Verd (0~255)";
Blockly.Msg.APDS9960_BLUE_TITLE = "codi RGB del Blau (0~255)";
Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP = "retorna un valor codificat amb 10 bits per la barreja RGB clàssicae";

//******** pbra 20160613 L298N
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_TITLE = " Escut motor L298N";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_INIT_TITLE = "Inicialització del control motor L298N";
Blockly.Msg.ROBOTS_MOTORS_L298N_ID = "Nom"
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_SPEED = "Velocitat";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN1 = "pin IN1 (direcció)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN2 = "pin IN2 (direcció)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_EN = "pin EN (pwm)";
Blockly.Msg.ROBOTS_MOTORS_L298N_STOP = "atura";
Blockly.Msg.ROBOTS_MOTORS_L298N_FORWARD = "endavant";
Blockly.Msg.ROBOTS_MOTORS_L298N_BACKWARD = "endarrere";
Blockly.Msg.ROBOTS_MOTORS_L298N_BRAKE = "fré";
Blockly.Msg.ROBOTS_MOTORS_L298N_INIT_TOOLTIP = "L298N, bloc d'inicialització (1 per motor)";
Blockly.Msg.ROBOTS_MOTORS_L298N_TOOLTIP = "Bloc L298N, empra el mateix nom que al bloc d'inicialització";

//******** pbra 20160607 PinMode
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_HELPURL = "https://www.arduino.cc/en/Reference/PinMode";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT1 = "fixa el mode de funcionament del pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT2 = "en";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_DROPDOWN = [["ENTRADA", "INPUT"], ["SORTIDA", "OUTPUT"], ["ENTRADA_PULLUP", "INPUT_PULLUP"]];
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP = "Configura el pin especificat per funcionar com una entrada o sortida";

//******** Bluetooth Electronics example http://www.keuwl.com/electronics.html
Blockly.Msg.BT_ELEC_Init_HELPURL = "https://play.google.com/store/apps/details?id=com.keuwl.arduinobluetooth&hl=fr";
Blockly.Msg.BT_ELEC_init_text = "fotografia el codi QR per descarregar l'app d'Android :";
Blockly.Msg.BT_ELEC_TOOLTIP = "descarrega l'aplicació per Android";
Blockly.Msg.BT_ELEC_LED_brightness_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/02-pwm-leds/";
Blockly.Msg.BT_ELEC_LED_brightness_text = "controla la lluminositat dels 3 LEDS";
Blockly.Msg.BT_ELEC_LED_brightness_TOOLTIP = "mira la demo en l'ajuda";
Blockly.Msg.BT_ELEC_RC_car_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/01-rc-car/";
Blockly.Msg.BT_ELEC_RC_car_text = "Control d'un vehicle per telefon";
Blockly.Msg.BT_ELEC_RC_car_TOOLTIP = "mira la démo a l'ajuda";

//******** jfblocks
Blockly.Msg.jfblocks_Init_HELPURL = "http://jfbegot.free.fr";
Blockly.Msg.jfblocks_TOOLTIP = "per decodificar trames Bluetooth Electronics";
Blockly.Msg.jfblocks_last_value_tooltip = "valor rebut en la darrera trama decodificada";
Blockly.Msg.jfblocks_last_value_titre = "darrer valor";
Blockly.Msg.jfblocks_decode_tooltip = "decodifica una trama rebuda en format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_decode_titre = "quan una trama és rebuda";
Blockly.Msg.jfblocks_action_tooltip = "a posar en 'quan una trama és rebuda'\nel caràcter de fi pot ser tot menys numèric";
Blockly.Msg.jfblocks_action_start_code = "si el caracter de l'inici val";
Blockly.Msg.jfblocks_action_do = "llavors fes";
Blockly.Msg.jfblocks_tx_tooltip = "envia una trama en format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_tx_titre = "emet una trama";
Blockly.Msg.jfblocks_tx_start_code = "Inici del codi";
Blockly.Msg.jfblocks_tx_data = "dada";
Blockly.Msg.jfblocks_tx_end_code = "Fi del codi";

//******** KEYPAD
Blockly.Msg.KEYPAD_TOUCHE_HELPURL = 'https://www.adafruit.com/products/419';
Blockly.Msg.KEYPAD_TOUCHE_TEXT = "Tecla premuda";
Blockly.Msg.KEYPAD_TOUCHE_LIGNES = "Línies";
Blockly.Msg.KEYPAD_TOUCHE_TOOLTIP = "Retorna la tecla premuda o una cadena buida si no s'hi ha res";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE1 = "Línia 1";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE2 = "Línia 2";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE3 = "Línia 3";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE4 = "Línia 4";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE1 = "Columna 1";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE2 = "Columna 2";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE3 = "Columna 3";

//******** Sharp IR https://github.com/guillaume-rico/SharpIR
Blockly.Msg.SHARP_IR_DEFAULT_NAME = 'TELEM';
Blockly.Msg.Sharp_IR_HELPURL = 'https://github.com/guillaume-rico/SharpIR';
Blockly.Msg.Sharp_IR_MODEL = "model";
Blockly.Msg.Sharp_IR_ATTACH1 = 'afegeix un telèmetre';
Blockly.Msg.Sharp_IR_ATTACH2 = 'amb nom';
Blockly.Msg.Sharp_IR_INPUT1 = 'la distancia mesurada pel telèmetre';
Blockly.Msg.Sharp_IR_INPUT2 = 'al pin analògic';
Blockly.Msg.Sharp_IR_TOOLTIP1 = 'unicament a una entrada analògica';
Blockly.Msg.Sharp_IR_TOOLTIP2 = 'distancia mesurada en cm, penseu a temporitzar entre 2 mesures';

//******** Matrix Neopixel DEL RGB 8 x 8 https://www.dfrobot.com/wiki/index.php/8x8_RGB_LED_Matrix_SKU:_DFR0459
Blockly.Msg.MatrixLED_WS2812B_init = "Matriu LED RGB : inicialització";
Blockly.Msg.MatrixLED_WS2812B_clean = "Atura la matriu";
Blockly.Msg.MatrixLED_WS2812B_init_Pin = "al pin =";
Blockly.Msg.MatrixLED_WS2812B_init_Number_of_Pixels = "Nombre de pixels =";
Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME = "MATRIU_RGB";
Blockly.Msg.MatrixLED_WS2812B_setBrightness = "a la matriu LED RGB";
Blockly.Msg.MatrixLED_WS2812B_Brightness = "regula la lluminositat a";
Blockly.Msg.MatrixLED_WS2812B_URL = "https://www.dfrobot.com/wiki/index.php/8x8_RGB_LED_Matrix_SKU:_DFR0459";

Blockly.Msg.MatrixLED_WS2812B_setPixelColor = "a la matriu LED RGB";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red = "regula el roig (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green = "regula el verd (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue = "regula el blau (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number = "del píxel número (a partir de 0) =";

//******** Storage : SD card + EEPROM https://www.arduino.cc/en/Reference/EEPROM
Blockly.Msg.STORAGE_WRITE_SD_FILE = "Targeta SD, anomena i desa  ";
Blockly.Msg.STORAGE_SD_DATA = "la dada";
Blockly.Msg.STORAGE_SD_NEWLINE = "amb un salt de línia ?";
Blockly.Msg.STORAGE_EEPROM_WRITE_LONG = "EEPROM escriu a l'adreça";
Blockly.Msg.STORAGE_DATA_LONG = "dada (long int)";
Blockly.Msg.STORAGE_EEPROM_READ_LONG = "EEPROM - dada (long) llegida a l'adreça";
Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM escrita a l'adreça";
Blockly.Msg.STORAGE_DATA_BYTE = "dada (byte)";
Blockly.Msg.STORAGE_EEPROM_READ_BYTE = "EEPROM - dada (byte) llegida a l'adreça";

//******** ESC controller for brushless motor
Blockly.Msg.DRONE_INTRO = "Control del motor";
Blockly.Msg.DRONE_PIN = "al pin";
Blockly.Msg.DRONE_PWM = "a la potencia [0~255]";
Blockly.Msg.DRONE_HELPURL = "http://www.instructables.com/id/ESC-Programming-on-Arduino-Hobbyking-ESC/";
Blockly.Msg.DRONE_TOOLTIP = "el controlador ha de tindre un mode correcte";

//******** gyroscope + temperature ADXL362
Blockly.Msg.ADXL362_MISC_HELPURL = "http://annem.github.io/ADXL362/";
Blockly.Msg.ADXL362_INIT_TITLE = "connecta el giroscopi (/!\\ 3,3 V /!\\)";
Blockly.Msg.ADXL362_INIT_TOOLTIP = "bus SPI de la targeta Arduino, la Pro Mini és un exemple";
Blockly.Msg.ADXL362_XVALUE_TITLE = "valor de l'orientació a X";
Blockly.Msg.ADXL362_XVALUE_TOOLTIP = "mira la fita X/Y a la targeta ADXL362";
Blockly.Msg.ADXL362_YVALUE_TITLE = "valor de l'orientació a Y";
Blockly.Msg.ADXL362_YVALUE_TOOLTIP = "mira la fita X/Y a la targeta";
Blockly.Msg.ADXL362_ZVALUE_TITLE = "valor de l'orientació a Z";
Blockly.Msg.ADXL362_ZVALUE_TOOLTIP = "mira la fita X/Y a la targeta";
Blockly.Msg.ADXL362_TEMPVALUE_TITLE = "valor de la temperature";
Blockly.Msg.ADXL362_TEMPVALUE_TOOLTIP = "valors a provar, àbac obligatori";

//******** FRESNEL : Implementation I2CSoftwareLibrary   http://playground.arduino.cc/Main/SoftwareI2CLibrary
//******** FRESNEL : SPI 
Blockly.Msg.I2C_INIT_TEXT = "SOFT I2C_INIT";
Blockly.Msg.I2C_INIT_PIN_SCL = "PIN_SCL";
Blockly.Msg.I2C_INIT_PORT_SCL = "PORT_SCL";
Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SCL = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
Blockly.Msg.I2C_INIT_PIN_SDA = "PIN_SDA";
Blockly.Msg.I2C_INIT_PORT_SDA = "PORT_SDA";
Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SDA = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
Blockly.Msg.I2C_INIT_TOOLTIP = "configura els pins SDA i SCL";
Blockly.Msg.I2C_INIT_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";     

Blockly.Msg.I2C_START_TEXT = "SOFT_I2C_START";
Blockly.Msg.I2C_START_ADRESS = "adreça";
Blockly.Msg.I2C_START_RW = "R/W";
Blockly.Msg.I2C_START_TOOLTIP = "envia un Start + adreça de l'esclau + R/W";
Blockly.Msg.I2C_START_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";
Blockly.Msg.I2C_START_FIELDDROPDOWN = [["W (escriptura)", "I2C_WRITE"], ["R (lectura)", "I2C_READ"]];

Blockly.Msg.I2C_RESTART_TEXT = "SOFT_I2C_RESTART";
Blockly.Msg.I2C_RESTART_ADRESS = "adreça";
Blockly.Msg.I2C_RESTART_RW = "R/W";
Blockly.Msg.I2C_RESTART_FIELDDROPDOWN =[["W (escriptura)", "I2C_WRITE"], ["R (lectura)", "I2C_READ"]];
Blockly.Msg.I2C_RESTART_TOOLTIP = "envia un REStart + adreça de l'esclau + R/W";
Blockly.Msg.I2C_RESTART_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_STOP_TEXT = "SOFT_I2C_STOP";
Blockly.Msg.I2C_STOP_TOOLTIP = "envia un Stop i llavors allibera el bus";
Blockly.Msg.I2C_STOP_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_WRITE_TEXT = "SOFT_I2C_WRITE";
Blockly.Msg.I2C_WRITE_DATA = "data";
Blockly.Msg.I2C_WRITE_TOOLTIP = "escriu un byte de dades";
Blockly.Msg.I2C_WRITE_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_READ_TEXT = "SOFT_I2C_READ";
Blockly.Msg.I2C_READ_LAST = "Last? : ";
Blockly.Msg.I2C_READ_FIELDDROPDOWN = [["no","false"], ["sí","true"]];
Blockly.Msg.I2C_READ_TOOLTIP = "Rep un byte de dades amb l'enviament d'un paràmetre last=sí per al darrer";
Blockly.Msg.I2C_READ_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";
Blockly.Msg.I2C_SCAN_TEXT = "llista el perifèrics I²C a la consola sèrie";
Blockly.Msg.I2C_SCAN_TOOLTIP = "Escaneja els perifèrics i retorna les adreces a la consola a regular en 115200 bauds";
Blockly.Msg.I2C_SCAN_HELPURL = "http://info.technologiescollege.fr/wiki/doku.php/fr/arduino/lcd-i2c";

///////////////////////////

Blockly.Msg.I2C_INIT_HW_TITRE = "I2C_INIT";
Blockly.Msg.I2C_INIT_HW_TOOLTIP = "Inicialització del bus I2C per al mestre";
Blockly.Msg.I2C_INIT_HW_HELPURL = "";

Blockly.Msg.I2C_STOP_HW_TITRE = "I2C_STOP";
Blockly.Msg.I2C_STOP_HW_TOOLTIP = "El mestre allibera el bus";
Blockly.Msg.I2C_STOP_HW_HELPURL = "";

Blockly.Msg.I2C_RESTART_HW_TITRE = "I2C_RESTART";
Blockly.Msg.I2C_RESTART_HW_TOOLTIP = "El mestre controla el bus";
Blockly.Msg.I2C_RESTART_HW_HELPURL = "";

Blockly.Msg.I2C_WRITE_HW_TEXT = "I2C_WRITE";
Blockly.Msg.I2C_WRITE_HW_DATA = "Data";
Blockly.Msg.I2C_WRITE_HW_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Decimal",""]];
Blockly.Msg.I2C_WRITE_HW_TOOLTIP = "El mestre escriu un byte de dades";
Blockly.Msg.I2C_WRITE_HW_HELPURL = "";

Blockly.Msg.I2C_START_HW_TEXT = "I2C_START";
Blockly.Msg.I2C_START_HW_DATA = "Adreça esclau";
Blockly.Msg.I2C_START_HW_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Décimal",""]];
Blockly.Msg.I2C_START_HW_TOOLTIP = "El mestre inicia una transmissió amb l'esclau identificat amb l'adreça";
Blockly.Msg.I2C_START_HW_HELPURL = "";

Blockly.Msg.I2C_REQUEST_HW_TEXT = "I2C_REQUEST";
Blockly.Msg.I2C_REQUEST_HW_DATA = "Adreça esclau";
Blockly.Msg.I2C_REQUEST_HW_FIELDDROPDOWN = [["0x","0x"], ["0b",,"0b"],["Décimal",""]];
Blockly.Msg.I2C_REQUEST_HW_NB_BYTES = "Nombre de bytes a llegir";
Blockly.Msg.I2C_REQUEST_HW_TOOLTIP = "El mestre registra en una memòria temporal (buffer) el nombre de bytes demanats a l'esclau identificat per l'adreça";
Blockly.Msg.I2C_REQUEST_HW_HELPURL = "";

Blockly.Msg.I2C_AVAILABLE_HW_TITRE = "I2C_DATA_AVAILABLE";
Blockly.Msg.I2C_AVAILABLE_HW_TOOLTIP = "Retorna el nombre de dades que resten per llegir dins la memòria temporal";
Blockly.Msg.I2C_AVAILABLE_HW_HELPURL = "";

Blockly.Msg.I2C_DATA_HW_TITRE = "I2C_DATA";
Blockly.Msg.I2C_DATA_HW_TOOLTIP = "Llegeix una dada a la memòria temporal";
Blockly.Msg.I2C_DATA_HW_HELPURL = "";

//////////////////////////

Blockly.Msg.icn_HelpUrl = "http://www.ebay.fr/cln/dvarrel/robot-arduino/271320303014";
Blockly.Msg.icn_ds18b20_HelpUrl = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino";


Blockly.Msg.SPI_INIT_TEXT = "SPI_INIT";
Blockly.Msg.SPI_INIT_SPEED = "freqüència (MHz)"
Blockly.Msg.SPI_INIT_MODE = "mode";  
Blockly.Msg.SPI_INIT_MODE_FIELDDROPDOWN = [["mode 0 (0,0)", "SPI_MODE0"], ["mode 1 (0,1)", "SPI_MODE1"], ["mode 2 (1,0)", "SPI_MODE2"], ["mode 3 (1,1)", "SPI_MODE3"]];
Blockly.Msg.SPI_INIT_BITORDER = "ordre des bits";
Blockly.Msg.SPI_INIT_BITORDER_FIELDDROPDOWN = [["MSB -> LSB", "MSBFIRST"], ["LSB -> MSB", "LSBFIRST"]];
Blockly.Msg.SPI_INIT_TOOLTIP = " configuració de l'enllaç SPI" ; 
Blockly.Msg.SPI_INIT_HELPURL = " " ;

Blockly.Msg.SPI_SEND_TEXT = "SPI_SEND";
Blockly.Msg.SPI_SEND_DATA = "dada";
Blockly.Msg.SPI_SEND_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Decimal",""]];
Blockly.Msg.SPI_SEND_TOOLTIP = " envia la dada amb el bus SPI";
Blockly.Msg.SPI_SEND_HELPURL = "";

Blockly.Msg.SPI_RECEIVE_TEXT = "SPI_RECEIVE";
Blockly.Msg.SPI_RECEIVE_TOOLTIP = "recupera una dada";
Blockly.Msg.SPI_RECEIVE_HELPURL = "" ;

//******** light sensor TSL2561
Blockly.Msg.TSL2561_MISC_HELPURL = "https://learn.adafruit.com/tsl2561/wiring-the-tsl2561-sensor";
Blockly.Msg.TSL2561_READ_TITLE = "il·luminació en lux";
Blockly.Msg.TSL2561_READ_TOOLTIP = "Retorna el valor de la il·luminació en lux (max 17 000 lux)";
Blockly.Msg.TSL2561_INIT_TITLE = "Inicialització del sensor TSL2561";
Blockly.Msg.TSL2561_INIT_TOOLTIP = "per defecte guany nul i temps d'integració 13 ms";

//**** AUTODUINO ************************************************************************************
// definition of the different target mockups
Blockly.Msg.AUTODUINO_TARGET_AUTODUINO = "Targeta Autoduino";
Blockly.Msg.AUTODUINO_TARGET_AUTOLUMI = "Maqueta A4 AutoLumi";
Blockly.Msg.AUTODUINO_TARGET_AUTOALARME = "Maqueta A4 AutoAlarme";
Blockly.Msg.AUTODUINO_TARGET_PORTAIL_1 = "Maqueta A4 Portail 1 ventail";

// definition of the pin names for the different target mockups

// get the toolbox and toolboxId from url parameters
//var toolboxName = BlocklyDuino.getStringParamFromUrl('toolbox', '');
var toolboxId = BlocklyDuino.getStringParamFromUrl('toolboxids', '');

var AutoduinoIn1 = "In1";
var AutoduinoIn2 = "In2";
var AutoduinoIn3 = "In3";
var AutoduinoIn4 = "In4";
var AutoduinoIn5 = "In5";
var AutoduinoIn6 = "In6";
var AutoduinoIn7 = "In7";
var AutoduinoIn8 = "In8";

var AutoduinoOut1 = "Out1";
var AutoduinoOut2 = "Out2";
var AutoduinoOut3 = "Out3";
var AutoduinoOut4 = "Out4";
var AutoduinoOut5 = "Out5";
var AutoduinoOut6 = "Out6";
var AutoduinoOut7 = "Out7";
var AutoduinoOut8 = "Out8";

// redefine pin names for specific toolbox
if (toolboxId.indexOf('AUTODUINO_TARGET_AUTOLUMI') > -1) { // Load AUTODUINO_TARGET_AUTOLUMI
	//alert("Load: AUTODUINO_TARGET_AUTOLUMI - " + toolboxId);
	AutoduinoIn1 = "LDR llum exterior";
	AutoduinoIn3 = "BP cuina";
	AutoduinoIn4 = "BP sanitaris";
	AutoduinoIn5 = "BP1 saló";
	AutoduinoIn6 = "BP2 saló";
	AutoduinoIn7 = "BP entrada";
	AutoduinoIn8 = "PIR presència";

	AutoduinoOut3 = "Llum cuina";
	AutoduinoOut4 = "Llum lavabo";
	AutoduinoOut5 = "LED lavabos";
	AutoduinoOut6 = "Llum saló 1";
	AutoduinoOut7 = "Llum saló 2";
	AutoduinoOut8 = "Llum entrada";
}
else if (toolboxId.indexOf('AUTODUINO_TARGET_AUTOALARME') > -1) { // Load AUTODUINO_TARGET_AUTOALARME
	//alert("Load: AUTODUINO_TARGET_AUTOALARME - " + toolboxId);
	AutoduinoIn1 = "ILS cuina";
	AutoduinoIn2 = "ILS saló";
	AutoduinoIn3 = "ILS porta";
	AutoduinoIn4 = "PIR presència";
	AutoduinoIn5 = "Telèmetre ultrasò";
	AutoduinoIn6 = "Receptor IR";

	AutoduinoOut1 = "Senyal lluminòs";
	AutoduinoOut2 = "Brunzidor";
}
else if (toolboxId.indexOf('AUTODUINO_TARGET_PORTAIL_1') > -1) { // Load AUTODUINO_TARGET_PORTAIL_1
	//alert("Load: AUTODUINO_TARGET_PORTAIL_1 - " + toolboxId);
	AutoduinoIn1 = "BP interior";
	AutoduinoIn2 = "BP exterieur";
	AutoduinoIn3 = "Fi de cursa activat";
	AutoduinoIn4 = "Fi de cursa desactivat";
	AutoduinoIn5 = "Receptor IR exterior";
	AutoduinoIn6 = "Receptor IR interior";

	AutoduinoOut1 = "Senyal lluminós";
	AutoduinoOut2 = "Brunzidor";
	AutoduinoOut3 = "Emissor IR exterior";
	AutoduinoOut4 = "Emissor IR interior";
	AutoduinoOut5 = "Motor A";
	AutoduinoOut6 = "Motor B";
}
else { // Load defaults
	//alert("Load: " + toolbox);
}

Blockly.Msg.AUTODUINO_OUT = [[AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoOut3, "40"], [AutoduinoOut4, "41"], [AutoduinoOut5, "42"], [AutoduinoOut6, "43"], [AutoduinoOut7, "44"], [AutoduinoOut8, "45"]];
Blockly.Msg.AUTODUINO_IN = [[AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"], [AutoduinoIn7, "33"], [AutoduinoIn8, "34"]];
Blockly.Msg.AUTODUINO_ANALOG_IN = [[AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"]];
Blockly.Msg.AUTODUINO_IN_OUT = [[AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"], [AutoduinoIn7, "33"], [AutoduinoIn8, "34"], [AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoOut3, "40"], [AutoduinoOut4, "41"], [AutoduinoOut5, "42"], [AutoduinoOut6, "43"], [AutoduinoOut7, "44"], [AutoduinoOut8, "45"]];
Blockly.Msg.AUTODUINO_OUT_IN = [[AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoOut3, "40"], [AutoduinoOut4, "41"], [AutoduinoOut5, "42"], [AutoduinoOut6, "43"], [AutoduinoOut7, "44"], [AutoduinoOut8, "45"], [AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"], [AutoduinoIn7, "33"], [AutoduinoIn8, "34"]];
Blockly.Msg.AUTODUINO_INTERNAL_OUT_IN = [[AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"]];
Blockly.Msg.AUTODUINO_INTERNAL_IN_OUT = [[AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"], [AutoduinoOut1, "7"], [AutoduinoOut2, "8"]];
Blockly.Msg.AUTODUINO_OUT_IN_LED_RGB = [["Intern", "9"], [AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"]];


Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE = [["A4 telecomanda blava", "1"]];
Blockly.Msg.AUTODUINO_ONEWIRE_INDEX = [["Sensor 0", "0"],["Sensor 1", "1"],["Sensor 2", "2"],["Sensor 3", "3"],["Sensor 4", "4"],["Sensor 5", "5"],["Sensor 6", "6"],["Sensor 7", "7"],["Sensor 8", "8"],["Sensor 9", "9"],["Sensor 10", "10"]];
Blockly.Msg.AUTODUINO_ONEWIRE_RESOLUTION = [["9 bits", "9"], ["10 bits", "10"], ["11 bits", "11"], ["12 bits", "12"]];

Blockly.Msg.AUTODUINO_FIELDDROPDOWN =  [["1 (activat)", "1"], ["0 (desactivat)", "0"]];


Blockly.Msg.AUTODUINO_INOUT_DHT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_C = "de la temperatura °C";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_F = "de la temperatura °F";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_H = "de % d'humitat";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_PIN = "al pin n°";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_SENSOR = "mesurat pel sensor ";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TOOLTIP = "els sensors del tipus DHT tenen 2 parts : termòmetre i sensor d'humitat.";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TYPE = "valor";
Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1 = "posa el LED";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2 = "al pin digital";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3 = "a l'estat";
Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP = "activa la sortida digital a la qual hem connetat el LED";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_TEXT = "l'estat del polsador";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_TOOLTIP = "entrada digital per llegir";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TEXT = "posició del codificador";
Blockly.Msg.AUTODUINO_INOUT_ROT_PUSH_TEXT = "valor del polsador";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TOOLTIP = "Lectura de posició en la qual el resultat pot ser positiu o negatiu segons el sentit de la rotació";
Blockly.Msg.AUTODUINO_INOUT_TILT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_TILT_TEXT = "l'estat de l'interruptor d'inclinació";
Blockly.Msg.AUTODUINO_INOUT_TILT_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_TILT_TOOLTIP = "Quan el contacte no es toca el circuit està obert, sinó quan el contacte toca, el circuit està tancat.";
Blockly.Msg.AUTODUINO_INOUT_ILS_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ILS_TEXT = "l'estat de l'interruptor sense contacte";
Blockly.Msg.AUTODUINO_INOUT_ILS_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_ILS_TOOLTIP = "Quan l'imant està allunyat, el circuit està obert en cas contrari quan el imant està proxim, el circuit està tancat.";
Blockly.Msg.AUTODUINO_INOUT_IR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_IR_TEXT = "l'estat de l'entrada del IR";
Blockly.Msg.AUTODUINO_INOUT_IR_INPUT = "al pin";
Blockly.Msg.AUTODUINO_TYPE_IR_EXPECTED_CODE = "codi IR";
Blockly.Msg.AUTODUINO_TYPE_IR_MAX_TIME = "temps d'espera (ms)";
Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE_TEXT = "tipus de comandament a distancia";
Blockly.Msg.AUTODUINO_INOUT_IR_TOOLTIP = "Quan el sensor rep una senyal IR, la sortida està activada.";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_TEXT1 = "posa el brunzidor ";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_FREQUENCY = " Freqüència (Hz)";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_DURATION = "  durant (ms)";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_TOOLTIP = "Emet un só quan es genera una freqüència.";
Blockly.Msg.AUTODUINO_INOUT_RELAY_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT1 = "posa el relé";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT2 = "a l'estat";
Blockly.Msg.AUTODUINO_INOUT_RELAY_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TOOLTIP = "El relé serveix per controlar un circuit de potencia, fins a 250V i 10A.";
Blockly.Msg.AUTODUINO_INOUT_TEMP_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT = "la temperatura";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT2 = "la temperatura";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT = "mesurada a la NTC connectada al pin";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INDEX = "mesurada al sensor (DS18x20) N°";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT2 = "connectada al pin";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT3 = "amb una resolució de";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TOOLTIP = "retorna la temperatura ambient en °C";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TEXT = "la humitat";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_INPUT = "mesurada al pin";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TOOLTIP = "retorna el nivell de humitat";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_TEXT = "pantalla LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT1 = "al pin";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT2 = "escriu a la línia 1";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT3 = "escriu a la línia 2";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT4 = "durant (ms)";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_TOOLTIP = "escriu el text sobre una pantalla LCD sèrie de 2 línies i 16 caràcters";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_TEXT = "pantalla LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_STATE = "posa";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_TOOLTIP = "la il·luminació de la pantalla LCD engegada/aturada";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_TEXT = "pantalla LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_EFFECT = "escrit amb l'efecte";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_EFFECT_EFFECT =[["desplaçament a esquerre", "LEFT"], ["desplaçament a dreta", "RIGHT"], ["desplaçament automàtic", "AUTO"]];
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_TOOLTIP = "Posa potencia LCD engegada/aturada";
Blockly.Msg.AUTODUINO_INOUT_SOUND_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_SOUND_TEXT = "el volum del só";
Blockly.Msg.AUTODUINO_INOUT_SOUND_INPUT = "mesurat al pin";
Blockly.Msg.AUTODUINO_INOUT_SOUND_TOOLTIP = "detecta el volum sonor ambiental";
Blockly.Msg.AUTODUINO_INOUT_PIR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_PIR_TEXT = "detecta moviment";
Blockly.Msg.AUTODUINO_INOUT_PIR_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_PIR_TOOLTIP = "el sensor retorna 1 quan hi ha moviment al camp de detecció";
Blockly.Msg.AUTODUINO_INOUT_LINE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LINE_TEXT = "estat del seguidor de línia";
Blockly.Msg.AUTODUINO_INOUT_LINE_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_LINE_TOOLTIP = "retorna un estat lògic en funció del color, blanc o negre, detectat";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TEXT = "la distancia mesurada";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_INPUT = "pel sensor d'ultrasò al pin";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT = "unitat";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TOOLTIP = "mesura per ecolocalització";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_TEXT = "motor a la targeta externa";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT1 = "motor 1, pin 1";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT2 = "motor 1, pin 2";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT3 = "motor 2, pin 1";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT4 = "motor 2, pin 2";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_CHOICE =  [["atura !", "stop"], ["endavant", "forward"], ["a dreta", "right"], ["a esquerra", "left"], ["endarrere", "backward"]];
Blockly.Msg.AUTODUINO_INOUT_MOTOR_TOOLTIP = "controla 2 motors de corrent continu";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TEXT = "motor a l'escut autoduino";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_SPEED = "velocitat (0..255)";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_CHOICE = [["atura !", "stop"], ["endavant", "forward"], ["a dreta", "right"], ["a esquerra", "left"], ["endarrere", "backward"]];
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TOOLTIP = "controla 2 motors de corrent continu";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TEXT1 = "angle del joystick";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TEXT2 = "de l'eix";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TOOLTIP = "el joystick retorna valors compresos entre 0 i 102 per a cadascun dels 2 eixos";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_TEXT = "posa el LED RGB amb";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_INPUT = "valor [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR1 = "roig [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR2 = "verd [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR3 = "blau [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_PIXEL = "per al píxel";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_NB_OF_PIXEL = "Nombre de píxels totals";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_TOOLTIP = "utilitza una smart LED WS2812B RGB";
Blockly.Msg.AUTODUINO_INOUT_BT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM1 = "enllaç Bluetooth";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM2 = "al pin";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM3 = "nom del perifèric";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM4 = "codi secret";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM5 = "envia";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM6 = "rep";
Blockly.Msg.AUTODUINO_INOUT_BT_TOOLTIP = "Bluetooth V2.0 + EDR esclau. Suporta un sol esclau per targeta";
Blockly.Msg.AUTODUINO_INOUT_POT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_POT_TEXT = "el potenciòmetre";
Blockly.Msg.AUTODUINO_INOUT_POT_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_POT_TOOLTIP = "retorna el valor";
Blockly.Msg.AUTODUINO_INOUT_LDR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LDR_TEXT = "la lluminositat";
Blockly.Msg.AUTODUINO_INOUT_LDR_INPUT = "al pin";
Blockly.Msg.AUTODUINO_INOUT_LDR_TOOLTIP = "retorna el nivell";
Blockly.Msg.AUTODUINO_TEXT74 = "inicialitza la pantalla LCD";
Blockly.Msg.AUTODUINO_TEXT75 = "a l'adreça I2C";
Blockly.Msg.AUTODUINO_TEXT76 = "nombre de columna(es)";
Blockly.Msg.AUTODUINO_TEXT77 = "nombre de línia(es)";
Blockly.Msg.AUTODUINO_TEXT78 = "activada la llum de fons ?";
Blockly.Msg.AUTODUINO_TEXT79 = "activat el cursor ?";
Blockly.Msg.AUTODUINO_TEXT80 = "fa pampallugues el cursor ?";
Blockly.Msg.AUTODUINO_TEXT81 = "Inicialitza la pantalla LCD al bus I2C (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT82 = "a la pantalla LCD";
Blockly.Msg.AUTODUINO_TEXT83 = "activa la llum de fons";
Blockly.Msg.AUTODUINO_TEXT84 = "desactiva la llum de fons";
Blockly.Msg.AUTODUINO_TEXT85 = "activa el cursor";
Blockly.Msg.AUTODUINO_TEXT86 = "desactiva el cursor";
Blockly.Msg.AUTODUINO_TEXT87 = "fes fer pampallugues el cursor";
Blockly.Msg.AUTODUINO_TEXT88 = "atura les pampallugues del cursor";
Blockly.Msg.AUTODUINO_TEXT89 = "activa la pantalla";
Blockly.Msg.AUTODUINO_TEXT90 = "desactiva la pantalla";
Blockly.Msg.AUTODUINO_TEXT91 = "Funcions especials de la pantalla LCD (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT92 = "esborra la pantalla LCD";
Blockly.Msg.AUTODUINO_TEXT93 = "Esborra la pantalla LCD al bus I2C (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT94 = "escriu a la pantalla LCD";
Blockly.Msg.AUTODUINO_TEXT95 = "a partir de la posició";
Blockly.Msg.AUTODUINO_TEXT96 = "columna [0..MAXCOL-1]";
Blockly.Msg.AUTODUINO_TEXT97 = "línia [0..MAXLIG-1]";
Blockly.Msg.AUTODUINO_TEXT98 = "el text";
Blockly.Msg.AUTODUINO_TEXT99 = "Escriu a la pantalla LCD (réf : LCD1)";
Blockly.Msg.AUTODUINO_EDGE_TEXT = "detecció ";
Blockly.Msg.AUTODUINO_EDGE_INPUT = "a l'entrada";
Blockly.Msg.AUTODUINO_EDGE_UP_DOWN = [["escaló ascendent", "UP"], ["escaló descendent", "DOWN"]];

//**** BLYNK**www.Blync.cc***Added**by**Mr**leroy**July**24th**************************************************************
Blockly.Msg.BLYNK_HELPURL = 'http://docs.blynk.cc/';
Blockly.Msg.BLYNK_usb_TEXT ='únicament per a un Arduino Uno connectat en USB';
Blockly.Msg.BLYNK_usb_INPUT ='envieu la vostra ordre de connexió';
Blockly.Msg.BlYNK_usb_TOOLTIP = "targeta Arduino i USB";
Blockly.Msg.BLYNK_AUTH = "Auth";
Blockly.Msg.BLYNK_CONNECT_TITLE = "connecta el servidor Blynk";
Blockly.Msg.BLYNK_CONNECT_TOOLTIP = "verifica la connexió";
Blockly.Msg.BLYNK_EMAIL_TITLE = "envia un correu";
Blockly.Msg.BLYNK_EMAIL_TOOLTIP = "";
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE = "targeta";
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP = "";
Blockly.Msg.BLYNK_MERGE_PARAM_TITLE = "Get Merge Parameter";
Blockly.Msg.BLYNK_MERGE_PARAM_TOOLTIP = "";
Blockly.Msg.BLYNK_NOTIFY_TITLE = "Widget de notification";
Blockly.Msg.BLYNK_NOTIFY_TOOLTIP = "";
Blockly.Msg.BLYNK_PARAM_TITLE = "Get Parameter";
Blockly.Msg.BLYNK_PARAM_TOOLTIP = "";
Blockly.Msg.BLYNK_TWEET_TITLE = "Tweeter";
Blockly.Msg.BLYNK_TWEET_TOOPTIP = "";
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE = "envia al pin virtual ";
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP = "";
Blockly.Msg.BLYNK_WRITE_TITLE = "llegeix el pin virtual";
Blockly.Msg.BLYNK_WRITE_TOOLTIP = "";
Blockly.Msg.BLYNK_ETHERNET_VERSION_1 = "ethernet";
Blockly.Msg.BLYNK_ETHERNET_VERSION_2 = "ethernet2";
Blockly.Msg.BLYNK_MAC_ADDRESS = "adresse Mac";
Blockly.Msg.BLYNK_VALUE = "valor";
Blockly.Msg.BLYNK_EMAIL_ADDRESS = "adreça";
Blockly.Msg.BLYNK_EMAIL_BODY = "cos";
Blockly.Msg.BLYNK_EMAIL_TITLE_2  = "assumpte";
Blockly.Msg.BLYNK_TEXT = "text";

//**** ETHERNET *****************************************************************************//
Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN = [["Lib_EthernetV1",""],["Lib_EthernetV2","2"],["Lib_Proteus","PROTEUS"]];

Blockly.Msg.ETHERNET_AVAILABLE_HELPURL = "https://www.arduino.cc/en/Reference/ClientAvailable";
Blockly.Msg.ETHERNET_AVAILABLE_TITLE = "Petició client en curs";
Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP = "Retorna el nombre de bytes disponibles per llegir (això és, la quantitat de dades que han estat escrites al client pel servidor on estat connectats).";
Blockly.Msg.ETHERNET_BEGIN_DHCP_CLIENT_TITLE = "Begin (DHCP) Client";
Blockly.Msg.ETHERNET_BEGIN_DHCP_SERVER_TITLE = "Begin (DHCP) Server";
Blockly.Msg.ETHERNET_BEGIN_STATICIP_SERVER_TITLE = "Begin (StaticIP) Server";
Blockly.Msg.ETHERNET_BEGIN_STATICIP_CLIENT_TITLE = "Begin (StaticIP) Client";
////
Blockly.Msg.ETHERNET_STATICIP_IP = "IP fixa de la targeta";
Blockly.Msg.ETHERNET_STATICIP_DNS = "DNS local";
Blockly.Msg.ETHERNET_STATICIP_GATEWAY = "Passarel·la";
Blockly.Msg.ETHERNET_STATICIP_SUBNET = "Mascara subxarxa";
////
Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP = "Usant Ethernet.begin(mac) amb la configuració de xarxa pròxima, l'escut Ethernet obté de forma automàtica una adreça IP.";
Blockly.Msg.ETHERNET_BEGIN_HELPURL = "https://www.arduino.cc/en/Reference/EthernetBegin";
Blockly.Msg.ETHERNET_BEGIN_TITLE = "Begin (DHCP) Client";
Blockly.Msg.ETHERNET_BEGIN_TOOLTIP = "Inicialitza la biblioteca ethernet i el paràmetres de xarxa.";
Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TITLE = "Petició Client"; 
Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TOOLTIP = "Un client envia una petició"; 
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL = "https://www.arduino.cc/en/Reference/ClientPrintln";
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE = "Client.Println";
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP = "Imprimeix dades, seguit d'un retorn de carro i línia nova al servidor on el client està connectat. Imprimeix números com una seqüència de digits, cadascun en caràcter ASCII (ex: el número 123 s'envia com tres caràcters '1', '2', '3').";
Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL = "https://www.arduino.cc/en/Reference/ClientPrint";
Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE = "Client.Print";
Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP = "Imprimeix dades al servidor on el client està connectat. Imprimeix números com una seqüència de digits, cadascun en caràcter ASCII (ex: el número 123 s'envia com tres caràcters '1', '2', '3').";
Blockly.Msg.ETHERNET_CONNECTED_HELPURL = "https://www.arduino.cc/en/Reference/ClientConnected";
Blockly.Msg.ETHERNET_CONNECTED_TITLE = "Enquesta Client";
Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP = "Retorna cert si el client està connectat, fals si no ho està.";
Blockly.Msg.ETHERNET_CONNECT_HELPURL = "https://www.arduino.cc/en/Reference/ClientConnect";
Blockly.Msg.ETHERNET_CONNECT_TITLE = "Client.Connect";
Blockly.Msg.ETHERNET_CONNECT_TOOLTIP = "Connecta a una adreça específica IP i port. El valor retornat indica exit o fracàs. També suporta cerques de DNS quan s'utilitza un nom de domini.";
Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL = "";
Blockly.Msg.ETHERNET_GET_REQUEST_TITLE = "GET Request";
Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP = "Create GET Request.";
Blockly.Msg.ETHERNET_GET_REQUEST_URL = "URL";
Blockly.Msg.ETHERNET_GET_REQUEST_SERVER = "Servidor amfitrió";
////
Blockly.Msg.ETHERNET_HTML_SEND_TITLE = "SEND HTML PAGE";
Blockly.Msg.ETHERNET_HTML_SEND_HTMLJS = "page html/JS";
Blockly.Msg.ETHERNET_HEADER_SEND_TITLE = "SEND HEADER HTTP/1.1";
Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN = [["text/html", "text"], ["image/png", "png"]];
Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TITLE = "Envia pàgina HTML Part :";
Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TOOLTIP = "Envia una pàgina html inclosa en un fitxer HTML.h";
////
Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN2 = [["OK", "200"], ["Sense contingut", "204"], ["Error", "404"]];
////
Blockly.Msg.ETHERNET_PARSER_INIT_TITLE = "Inicialització analitzador de peticions";
Blockly.Msg.ETHERNET_PARSER_PARSE_TITLE = "";
Blockly.Msg.ETHERNET_PARSER_PARSE_INPUT = "Anàlisi de la petició";//"Requête reçue";
Blockly.Msg.ETHERNET_PARSER_END_TITLE = "Final de petició ?";
Blockly.Msg.ETHERNET_PARSER_COUNT_TITLE = "nombre de paràmetres detectats ?";
Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_TITLE = "recupera el contingut del paràmetre : ";
Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_PARAM = "nom del paràmetre: ";
Blockly.Msg.ETHERNET_PARSER_PURGE_TITLE = "Final de l'anàlisi";
////
Blockly.Msg.ETHERNET_ATTENTE_CLIENT_TITLE = "Espera petició client";
Blockly.Msg.ETHERNET_PARSERV2_CREATION_TITLE = "Inicialització analisador de peticions";
Blockly.Msg.ETHERNET_PARSERV2_CREATION_TOOLTIP = "Crea un objecte analisador";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TITLE = "Lectura de la petició";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_FLUX = "flux a analitzar";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TOOLTIP = "Lectura i desat del flux útil d'un POST o d'un GET";
Blockly.Msg.ETHERNET_PARSERV2_PARSING_TITLE = "Nombre de paràmetres detectats";
Blockly.Msg.ETHERNET_PARSERV2_PARSING_TOOLTIP = "Retorna el nombre de paràmetres detectats";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TITLE = "Nom del paràmetre";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TOOLTIP = "Retorna el nom d'un paràmetre o 'desconnegut' ";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_PARAM = "N° :";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TITLE = "Valor del paràmetre";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TOOLTIP = "Retorna el valor d'un paràmetre";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_PARAM = "Nom : ";
Blockly.Msg.ETHERNET_PARSERV2_FREE_TITLE = "Final de l'anàlisi de la petició (obligatòria)";
Blockly.Msg.ETHERNET_PARSERV2_FREE_TOOLTIP = "RaZ del analitzador";
////
Blockly.Msg.ETHERNET_LOCALIP_HELPURL = "https://www.arduino.cc/en/Reference/EthernetLocalIP";
Blockly.Msg.ETHERNET_LOCALIP_TITLE = "adreça IP local";
Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP = "Retorna l'adreça IP de l'escut Ethernet";
Blockly.Msg.ETHERNET_MAC_ADDRESS = "Adreça MAC";
Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP = "Edita adreça Mac";
Blockly.Msg.ETHERNET_PORT = "Port";
Blockly.Msg.ETHERNET_POST_DATA = "Data";
Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL = "";
Blockly.Msg.ETHERNET_POST_REQUEST_TITLE = "POST Request";
Blockly.Msg.ETHERNET_POST_REQUEST_URL = "URL";
Blockly.Msg.ETHERNET_POST_REQUEST_SERVER = "servidor amfitrió";
Blockly.Msg.ETHERNET_POST_REQUEST_DATA ="Dades";
Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP = "Create POST Request.";
Blockly.Msg.ETHERNET_READ_HELPURL = "https://www.arduino.cc/en/Reference/ClientRead";
Blockly.Msg.ETHERNET_READ_TITLE = "Text de la petició en curs";
Blockly.Msg.ETHERNET_READ_TOOLTIP = "Read the next byte received from the server the client is connected to (after the last call to read()).";
Blockly.Msg.ETHERNET_STOP_HELPURL = "https://www.arduino.cc/en/Reference/ClientStop";
Blockly.Msg.ETHERNET_STOP_TITLE = "Tancament IPSocket";
Blockly.Msg.ETHERNET_STOP_TOOLTIP = "Desconnexió del client";
Blockly.Msg.ETHERNET_VERSION_1 = "Ethernet";
Blockly.Msg.ETHERNET_VERSION_2 = "Ethernet2";
Blockly.Msg.ETHERNET_VERSION_V2 = "Ethernet_v2";
////// ETHERNET WIFI ESP8266 /////
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_HELPURL = "https://www.arduino.cc/en/Reference/WiFi";
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TITLE = "Begin (DHCP) WIFI Server"; 
Blockly.Msg.ETHERNET_WIFI_SSID = "SSID";
Blockly.Msg.ETHERNET_WIFI_PASS = "PASS";
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TOOLTIP = "inicialització de l'enllaç WIFI";
Blockly.Msg.ETHERNET_CLIENT_FOR_WIFI_SERVER_TITLE = "Petició client al servidor WIFI";
Blockly.Msg.ETHERNET_WIFI_LOCALIP_TITLE = "adreça IP local (WIFI)";
Blockly.Msg.ETHERNET_WIFI_LOCALIP_TOOLTIP = "Retorna l'IP local";

//********************null*************//
Blockly.Msg.NULL_TOOLTIP = "text lliure per descriure els algoritmes";

//********************HX711 Load cell*************//
Blockly.Msg.HX711_HELPURL = "https://learn.sparkfun.com/tutorials/load-cell-amplifier-hx711-breakout-hookup-guide?_ga=2.253088841.1374984898.1508777134-607511387.1508777134";
Blockly.Msg.HX711_INIT_TITLE = "calibratge del sensor";
Blockly.Msg.HX711_INIT_TOOLTIP = "punt de referència per les mesures, amb o sense carrega real, llegiu el valor del calibratge en la consola a obrir";
Blockly.Msg.HX711_READ_TITLE = "pes llegit (kg)";
Blockly.Msg.HX711_READ_TEXT = "amb una correcció de";
Blockly.Msg.HX711_READ_TOOLTIP = "el factor de correcció és aquell retornat a la consola sèrie pel bloc de calibratge";

//********************SENSORS ACTUATORS*************//
Blockly.Msg.lm35_1 = "temperatura mesurada";
Blockly.Msg.lm35_2 = "retorna la temperatura mesurada per un LM35 en graus celsius (de 0 à 80°)";
Blockly.Msg.matrice8x8 = "símbol de la matriu";
Blockly.Msg.matrice8x8_symbole_TOOLTIP = "definició d'un símbol per la matriu:\n 0 atura un LED\n 1 engega un LED";
Blockly.Msg.ultrason_distance1 = "distancia mesurada";
Blockly.Msg.ultrason_distance2 = "retorna la distàcia mesurada (de 0 a 100 cm)";
Blockly.Msg.lp2i_mp3_prev = "llegeix el fitxer mp3 precedent";

//********************Pololu QTR-1RC*************//
Blockly.Msg.QTR_1RC_HELPURL = "https://ay128.lesusinesnouvelles.com/#!/projects/utilisation-de-capteur-qtr-1rc-avec-blockly";
Blockly.Msg.QTR_1RC_SENSORCALIBRATION = "calibratge del sensor QTR-1RC";
Blockly.Msg.QTR_1RC_SENSORCALIBRATION_TOOLTIP = "Al començament del programa, passa els sensors sota la línia. Permet millorar la mesura.";
Blockly.Msg.QTR_1RC_ATTACH1 = "afegeix un sensor QTR-1RC";
Blockly.Msg.QTR_1RC_ATTACH2 = "identificat per";
Blockly.Msg.QTR_1RC_DEFAULT_NAME = "QTR-1RC";
Blockly.Msg.QTR_1RC_INPUT = "al pin";
Blockly.Msg.QTR_1RC_ATTACH_TOOLTIP = "Crea un objecte QTR-1RC,a posar al pin digital";
Blockly.Msg.QTR_1RC_READ_INPUT1 = "valor del sensor QTR-1RC";
Blockly.Msg.QTR_1RC_READ_INPUT2 = "per al nom";
Blockly.Msg.QTR_1RC_READ_TOOLTIP = "Lectura del valor del sensor QTR-1RC.";
Blockly.Msg.QTR_1RC_COMPONENT = "QTR-1RC";

//********************Nintendo Wiimote nunchuck*************//
Blockly.Msg.WII_JOYSTICK = "el valor del joystick";
Blockly.Msg.WII_JOYSTICK_AXE = "a l'adreça";
Blockly.Msg.WII_JOYSTICK_TOOLTIP = "els valors estan compresos entre 0 i 255";
Blockly.Msg.WII_JOYSTICK_HELPURL = "http://www.pobot.org/Wii-Nunchuck-Arduino-controle-servomoteurs.html";
Blockly.Msg.WII_ACCEL1 = "l'acceleració";
Blockly.Msg.WII_ACCEL2 = "al voltant de l'eix"";
Blockly.Msg.WII_ACCEL_TOOLTIP = "valor de les acceleracions en les 3 dimensions";
Blockly.Msg.WII_BUTTON1 = "el botó";
Blockly.Msg.WII_BUTTON2 = "és";
Blockly.Msg.WII_BUTTON_TOOLTIP = "test booléen inclus";
Blockly.Msg.WII_UPDATE = "actualitza els valors de la nunchuck";
Blockly.Msg.WII_UPDATE_TOOLTIP = "I2C : born D amb Dada (SDA) i C amb Clock (SDC),\nexemple A4 & A5 per a Uno";

//********************PetitBot*************//
Blockly.Msg.PETITBOT_HELPURL = "https://github.com/julienrat/petitbot";
Blockly.Msg.PETITBOT_HCSR04 = "distancia mesurada pel telèmetre";
Blockly.Msg.PETITBOT_HCSR04_TOOLTIP = "distance en cm mesurée par le capteur HC-SR04";
Blockly.Msg.PETITBOT_ANALOG = "el valor mesurat a l'entrada analògica A0";
Blockly.Msg.PETITBOT_ANALOG_READ_TOOLTIP = "llegeix el valor (comprés entre 0 i 1023) al pin A0";
Blockly.Msg.PETITBOT_SERVO1_TITLEA = "fes girar el servomotor esquerre";
Blockly.Msg.PETITBOT_SERVO1_TITLEB = "sentit & potencia (0~180)";
Blockly.Msg.PETITBOT_SERVO1_TOOLTIP = "retorna un valor entre 0 i 1023, al pin A0";
Blockly.Msg.PETITBOT_SERVO2_TITLEA = "fes girar el servomotor dret";
Blockly.Msg.PETITBOT_SERVO2_TITLEB = "sentit & potencia (0~180)";
Blockly.Msg.PETITBOT_SERVO2_TOOLTIP = "rotació possible entre 0~90° per a una sentit, després 90~180°";
Blockly.Msg.PETITBOT_SERVO31_TITLEA = "orienta el servomotor 1";
Blockly.Msg.PETITBOT_SERVO31_TITLEB = "d'un angle (0~180°) de";
Blockly.Msg.PETITBOT_SERVO31_TOOLTIP = "angle del servo1 connectat al pin D8";
Blockly.Msg.PETITBOT_SERVO32_TITLEA = "orienta el servomotor 2";
Blockly.Msg.PETITBOT_SERVO32_TITLEB = "d'un angle (0~180°) de";
Blockly.Msg.PETITBOT_SERVO32_TOOLTIP = "angle del servo2 connectat al pin D7";
Blockly.Msg.PETITBOT_SERVO33_TITLEA = "orienta el servomotor 3";
Blockly.Msg.PETITBOT_SERVO33_TITLEB = "d'un angle (0~180°) de";
Blockly.Msg.PETITBOT_SERVO33_TOOLTIP = "angle del servo3 connectat al pin D6";
Blockly.Msg.PETITBOT_LED_INPUT1 = "posa el LED 1 a l'estat lògic";
Blockly.Msg.PETITBOT_LED_TOOLTIP1 = "engega/atura el díode al pin D3";
Blockly.Msg.PETITBOT_LED_INPUT2 = "posa el LED 2 a l'estat lògic";
Blockly.Msg.PETITBOT_LED_TOOLTIP2 = "engega/atura el díode al pin D4";

////////////////////////////Adafruit_RGB_LCD_Shield///////////////////////////////////////////////////////////////////////////
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TEXT = "INIT Adafruit LCD RGB";
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TOOLTIP = "Inicialització del LCD";

Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TEXT = "CLEAR Adafruit LCD RGB";
Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TOOLTIP = "Esborrat de la pantalla LCD";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TEXT = "TEXT SCROLLING";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT = "Escrit amb un";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT_FIELDDROPDOWN = [["desplaçament a esquerra", "LEFT"], ["desplaçament a dreta", "RIGHT"], ["desplaçament automàtic", "AUTO"]];
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TOOLTIP = "Tria del sentit de desplaçament del text";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TEXT = "SET CURSOR";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TOOLTIP = "Posiciona el cursor a les coordenades específiques";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TEXT = "SET RGB Backlight";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR = "COLOUR"
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR_FIELDDROPDOWN = [["Blanc", "0x07"],["Roig", "0x01"], ["Verd", "0x02"],["Groc", "0x03"],["Xarxet", "0x06"], ["Blau", "0x04"],["Violeta", "0x05"]];

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TOOLTIP = "Defineix el color del fons";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_DATA = "PRINT";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_TOOLTIP = "Escriu el valor numèric, el valor de la variable o la cadena de caràcters especificada";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_INPUTDATA = "DATA"

Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_DATA = "WRITE";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_TOOLTIP = "Escriu el caràcters corresponent amb codi ASCII";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_INPUTDATA = "DATA"
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_FORMAT_FIELDDROPDOWN = [["0x", "0x"], ["0b", "0b"], ["decimal", "1"],["variable", "2"]];

Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TEXT = "READ BUTTON";
Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TOOLTIP = "UP = 0x08 - DOWN = 0x04 - LEFT = 0x10 - RIGHT = 0x02 - SELECT = 0x01";
Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

////////////////////////////DFROBOT Voice Recorder-ISD1820/////////////////////
Blockly.Msg.dfrobot_ISD1820_HELPURL = "https://www.dfrobot.com/wiki/index.php/Voice_Recorder-ISD1820_SKU:_SEN0197";
Blockly.Msg.dfrobot_ISD1820_TOOLTIP = "enregistra 10s max. de só prement el botó, lectura per botó 0 codi";
Blockly.Msg.dfrobot_ISD1820_record = "prem al botó per enregistrar 10s màxim";
Blockly.Msg.dfrobot_ISD1820_play = "reprodueix el só";
Blockly.Msg.dfrobot_ISD1820_play_Input = "connectat al pin";

////////////////////////////Capacitive Sensor Librarie/////////////////////
Blockly.Msg.CAPACITIV_HELPURL = "https://github.com/PaulStoffregen/CapacitiveSensor";
Blockly.Msg.CAPACITIV_TEXT = "valor capacitatiu";
Blockly.Msg.CAPACITIV_INPUT1 = "envia pin";
Blockly.Msg.CAPACITIV_INPUT2 = "sensor pin";
Blockly.Msg.CAPACITIV_CALIBRATION = "calibració automàtica";
Blockly.Msg.CAPACITIV_TOOLTIP = "10M resistencia entre els pins 4 & 2, pin 2 és un pin sensor, afegeix un fil conductor o una lamina metàl·lica si ho desitgeu";

////////////////////////////ESP8266 WiFi/////////////////////
Blockly.Msg.esp8266_init_tooltip="inicialització del mòdul wifi i connexió amb els paràmetres indicats";
Blockly.Msg.esp8266_1="Esp 8266";
Blockly.Msg.esp8266_2="ssid";
Blockly.Msg.esp8266_3="clé";
Blockly.Msg.esp8266_4="IP";
Blockly.Msg.esp8266_5="passarel·la";
Blockly.Msg.esp8266_6="mascara";
Blockly.Msg.esp8266_7=[["client", "client"],["serveur", "serveur"]];
Blockly.Msg.esp8266_8="port";
Blockly.Msg.esp8266_9=[["dynamique", "dynamic"],["statique", "static"]];
Blockly.Msg.esp8266_10="adressage";
Blockly.Msg.esp8266_recept_tooltip="reception";
Blockly.Msg.esp8266_url="http://julien.coron.free.fr/?p=928";
Blockly.Msg.esp8266_send_html_tooltip="...";
Blockly.Msg.esp8266_send_html="";
Blockly.Msg.esp8266_send_tooltip="...";
Blockly.Msg.esp8266_send="";
Blockly.Msg.esp8266_wait_tooltip="...";

////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "inici";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "";
Blockly.Msg.OTTO9_HOME_URL = "https://www.ottodiy.com/";
Blockly.Msg.OTTO9_MOVE_TEXT = "desplaçament";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["endavant", "FORWARD"], ["endarrere", "BACKWARD"], ["gira a esquerra", "LEFT"], ["gira a dreta", "RIGHT"], ["inclina't a l'esquerra", "BENDLEFT"], ["inclina't a la dreta", "BENDRIGHT"], ["sacseja la cama esquerra", "SHAKELEFT"], ["sacseja la cama dreta", "SHAKERIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "velocitat";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["lent", "600"], ["normal", "800"], ["ràpid", "1000"], ["molt ràpid", "1200"], ["lumínica", "1400"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dansa";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk", "moonwalker"], ["crusaito", "crusaito"], ["battement", "flapping"], ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_DANCE_SPEED_TEXT = "velocitat";
Blockly.Msg.OTTO9_DANCE_SPEED_CHOICE = [["lent", "600"], ["normal", "800"], ["ràpid", "1000"], ["molt ràpid", "1200"], ["llum", "1400"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "mida";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "15"], ["petita", "5"], ["grand", "30"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gest";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["feliç", "OttoHappy"], ["molt feliç", "OttoSuperHappy"], ["trist", "OttoSad"], ["dort", "OttoSleeping"], ["élan", "OttoFart"], ["confus", "OttoConfused"], ["agité", "OttoFretful"], ["amoureux", "OttoLove"], ["en colère", "OttoAngry"], ["magique", "OttoMagic"], ["vagues", "OttoWave"], ["victoire", "OttoVictory"], ["chute", "OttoFail"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "son";
Blockly.Msg.OTTO9_SOUND_CHOICE = [["câlin", "S_cuddly"], ["OhOoh", "S_OhOoh"], ["OhOoh2", "S_OhOoh2"], ["sorpresa", "S_surprise"], ["botó premut", "S_buttonPushed"], ["mode 1", "S_mode1"], ["mode 2", "S_mode2"], ["mode 3", "S_mode3"], ["dormit", "S_sleeping"], ["impuls 1", "S_fart1"], ["impuls 2", "S_fart2"], ["impuls 3", "S_fart3"], ["feliç", "S_happy"], ["feliç simple", "S_happy_short"], ["molt feliç", "S_superHappy"], ["trist", "S_sad"], ["confús", "S_confused"], ["connexió", "S_connection"], ["desconnexió", "S_disconnection"]];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distancia";
Blockly.Msg.OTTO9_GETNOISE_TEXT = "só";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "tocat";
Blockly.Msg.OTTO9_MOUTH_TEXT = "boca";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["alegria", "happyOpen"], ["somriure", "smile"], ["cor", "heart"], ["petita sorpresa", "smallSurprise"], ["gran sorpresa", "bigSurprise"], ["confús", "confused"], ["zero", "zero"], ["un", "one"], ["dos", "two"], ["tres", "three"], ["quatre", "four"], ["x", "xMouth"], ["ok", "okMouth"], ["tro", "thunder"], ["línia", "lineMouth"], ["petit Uuh", "littleUuh, i"], ["bouche 0", "dreamMouth, 0"], ["bouche 1", "dreamMouth, 1"], ["bouche 2", "dreamMouth, 2"]];
Blockly.Msg.OTTO9_MATRIX_TEXT = "matriu";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "matriu de text";
Blockly.Msg.OTTO9_ARMS_TEXT = "braç";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["en l'aire", "HANDSUP"], ["salutació esquerra", "HANDWAVE1"], ["salutació dreta", "HANDWAVE2"]];
