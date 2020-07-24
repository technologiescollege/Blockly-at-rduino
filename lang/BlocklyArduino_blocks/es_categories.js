

'use strict';

goog.provide('Blockly.Msg.es');

goog.require('Blockly.Msg');

Blockly.Msg.CAT_LOOPS = "bucles";
Blockly.Msg.CAT_LOGIC = "lógica";
Blockly.Msg.CAT_IF = "si...";
Blockly.Msg.CAT_BOOL = "booleano";
Blockly.Msg.CAT_MATH = "matemáticas";
Blockly.Msg.CAT_TEXT = "texto";
Blockly.Msg.CAT_LIST = "listas";
Blockly.Msg.CAT_ARRAY = "matriz";
Blockly.Msg.CAT_COLOR = "colores";
Blockly.Msg.CAT_VARIABLES = "variables";
Blockly.Msg.CAT_FUNCTIONS = "procedimentos & funciones";
Blockly.Msg.CAT_ARDUINO = "arduino";
Blockly.Msg.CAT_ARDUINO_IN = " - entradas (sensores)";
Blockly.Msg.CAT_ARDUINO_OUT = " - salidas (actuadores)";
Blockly.Msg.CAT_ARDUINO_CONVERSION = " - conversiones";
Blockly.Msg.CAT_ARDUINO_TIME = " - tiempos & duraciones";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = " - monitor serie";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = " - softserial lib ";
Blockly.Msg.CAT_ARDUINO_SERVO = "servomotor";

Blockly.Msg.CAT_ANEMOROTATION = "anemómetre de copa"; //added september 16th 2017

Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD = "Escudo motor Adafruit";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v1 = " - Adafruit escudomotor v1";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v2 = " - Adafruit escudomotor v2";
Blockly.Msg.CAT_ADAFRUIT_JOYSTICK = " - Joystick";

Blockly.Msg.CAT_BLYNK_CC = "BLYNK.CC"; //Added by M. Leroy July 24th 2017
Blockly.Msg.CAT_Blynk_Arduino_Connexion =" - modo de connexión";
Blockly.Msg.CAT_Blynk_Controllers = " - controladores";
Blockly.Msg.CAT_Blynk_Dysplays = " - pantalla";
Blockly.Msg.CAT_Blynk_Interface = " - interfaz";
Blockly.Msg.CAT_Blynk_Notifications = " - notificación";
Blockly.Msg.CAT_Blynk_Programmation = " - programación";
Blockly.Msg.CAT_Blynk_Other = " - otros";
Blockly.Msg.CAT_Blynk_Sensors = " - sensores de teléfono inteligente";


Blockly.Msg.CAT_DFRobot = "DFRobot";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = " - tarjeta LCD teclado numérico"; //Added february 27th 2016
Blockly.Msg.CAT_DFPLAYER = " - DFPlayer mini MP3";
Blockly.Msg.CAT_DFRobot_ISD1820 = " - micrófono ISD1820";

Blockly.Msg.CAT_LED_RGB_CHAIN = "LED RGB en serie";
Blockly.Msg.CAT_OLED_U8G = "pantalla OLED I2C";

Blockly.Msg.CAT_ROBUNO = "RobUno";  //added march 17th 2016
Blockly.Msg.CAT_ROBUNO_IN = " - sensores";
Blockly.Msg.CAT_ROBUNO_OUT = " - actuadores";
Blockly.Msg.CAT_ROBUNO_MOTORS_CC = " - motores CC";

Blockly.Msg.CAT_FISCHERTECHNIK = "fischertechnik";  //added march 26th 2016
Blockly.Msg.CAT_FISCHERTECHNIK_IN = " - sensores";
Blockly.Msg.CAT_FISCHERTECHNIK_OUT = " - actuadores";
Blockly.Msg.CAT_FISCHERTECHNIK_MOTORS_CC = " - motores CC";

Blockly.Msg.CAT_FLYCAMONE = "FlyCamOne Eco v2"; //added august 20th 2016

Blockly.Msg.CAT_GROVE = "Grove";  //added march 9th 2015
Blockly.Msg.CAT_GROVE_IN = " - sensores";
Blockly.Msg.CAT_GROVE_OUT = " - actuadores";
Blockly.Msg.CAT_GROVE_LCD = " - pantallas LCD";
Blockly.Msg.CAT_GROVE_LCD2 = " Pantallas LCD";
Blockly.Msg.CAT_GROVE_COMM = " - communicación";

Blockly.Msg.CAT_TECHNOZONE = "TechnoZone51";  //added march 11th 2015
Blockly.Msg.CAT_TECHNOZONE_IN = " - sensores";
Blockly.Msg.CAT_TECHNOZONE_OUT = " - actuadores";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_PAP = " - motores PAP";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_CC = " - motores CC";
Blockly.Msg.CAT_TECHNOZONE_SERVO = " - servomotores";
Blockly.Msg.CAT_TECHNOZONE_LCD = " - pantalla LCD";
Blockly.Msg.CAT_TECHNOZONE_TELEC = " - mando a distancia";
Blockly.Msg.CAT_TECHNOZONE_IHM = " - consola HMI";
Blockly.Msg.CAT_TECHNOZONE_BT = " - bluetooth";
Blockly.Msg.CAT_TECHNOZONE_SPEECH = " - síntesis vocal";
Blockly.Msg.CAT_TECHNOZONE_ROBOT = "TZ51 robot Barbot";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_MOT = " - motores";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IN = " - sensores";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_OUT = " - actuadores";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_LCD = " - pantalla LCD";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_BT = " - bluetooth";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IHM = " - consola HMI";

Blockly.Msg.CAT_ZUMO = "ZumoBot";	//added april 6th 2015
Blockly.Msg.CAT_ZUMO_MOTORS = " - motores";
Blockly.Msg.CAT_ZUMO_SENSORS = " - diversos";
Blockly.Msg.CAT_ZUMO_FUNCTION = " - funciones";

Blockly.Msg.CAT_ROBOTS = "robots & tarjetas diversas"; //Added April 7 2015 ESK
Blockly.Msg.CAT_ROBOTS_MOTORS = "tarjetes motores";
Blockly.Msg.CAT_ROBOT_MISC = "infrarojo";

Blockly.Msg.CAT_INFRA_2 = "infrarojo"; //added august 22th 2018
Blockly.Msg.CAT_INFRA_3 = "infrarojo";

Blockly.Msg.CAT_RF433 = "RF433"; //added august 22th 2018
Blockly.Msg.CAT_RF433_2 = "RF433";
Blockly.Msg.CAT_RF433_3 = "RF433";

Blockly.Msg.CAT_BQ = "bitbloq";  //added july 14th 2015
Blockly.Msg.CAT_BQ_IN = " - sensores";
Blockly.Msg.CAT_BQ_OUT = " - actuadores";
Blockly.Msg.CAT_BQ_COMM = " - communicación";

Blockly.Msg.CAT_JEULIN = "cruce de semáforos";  //added january 11th 2016
Blockly.Msg.CAT_JEULIN_IN = " - sensores";
Blockly.Msg.CAT_JEULIN_OUT = " - actuadores";

Blockly.Msg.CAT_MULTIFUNCTION = "multifunción";  //added march 9th 2016

Blockly.Msg.CAT_RFID = "RFID";  //added april 13th 2017

Blockly.Msg.CAT_KIT_VELO_1 = "OBC33 kit vélo";
Blockly.Msg.CAT_KIT_VELO_2 = "OBC33 kit vélo";
Blockly.Msg.CAT_KIT_VELO_3 = "OBC33 kit vélo";  //added april 8th 2016

Blockly.Msg.CAT_MBOT_1 = "mBot";
Blockly.Msg.CAT_MBOT_2 = "mBot";
Blockly.Msg.CAT_MBOT_3 = "mBot"; //added april 8th 2016
Blockly.Msg.CAT_MBOT_4 = "mBot"; //added february 13th 2017

Blockly.Msg.CAT_ROMEO_1 = " - RoMeo v2";
Blockly.Msg.CAT_ROMEO_2 = " - RoMeo v2";
Blockly.Msg.CAT_ROMEO_3 = " - RoMeo v2"; //added may 1st 2016
Blockly.Msg.CAT_ROMEO_BLE_3 = "RoMeo BLE"; //added may 1st 2016

Blockly.Msg.CAT_SPI_COMM = "ISP communication";
Blockly.Msg.CAT_STEPPER = "Motores paso a paso"; //added august 28th 2016

Blockly.Msg.CAT_MHK = "MyHumanKit"; //added august 23th 2016

Blockly.Msg.CAT_MACE_ROBOTICS = "Macé Robotics"; //added 01/03/2019
Blockly.Msg.CAT_ESUS = " - tarjeta Esus"; //added 8 october 2016
Blockly.Msg.CAT_ESUS_WIFI = " --> WiFi";
Blockly.Msg.CAT_ESUS_MOTORS = " --> motores";
Blockly.Msg.CAT_MRDUINO = " - robot MRduino";
Blockly.Msg.CAT_MRDUINO2 = " - robot MRduino2";

Blockly.Msg.CAT_APDS_9960_RGB_Gesture = "color + movimiento"; //added 9 october 2016

Blockly.Msg.CAT_BT_ELECTRONICS = "Bluetooth Electronics"; //added 13 november 2016
Blockly.Msg.CAT_BT_ELEC_BUTTON = "enlace a la aplicación";

Blockly.Msg.CAT_ICN = "ICN";  //added 3 january 2017

Blockly.Msg.CAT_LCD_SCREEN = "pantalla LCD";  //added 12 february 2017
Blockly.Msg.CAT_LCD_I2C = " - pantalla LCD I²C"; //added 18/08/2017
Blockly.Msg.CAT_LCD_DFRobot_SHIELD_LCDKEYPAD = " - DFRobot LCD teclado numérico";
Blockly.Msg.CAT_LCD_GROVE_LCD = " - pantalla LCD Grove";
Blockly.Msg.CAT_LCD_TECHNOZONE_LCD = " - pantalla LCD TZ51";
Blockly.Msg.CAT_LCD_TECHNOZONE_ROBOT_LCD = " - pantalla LCD Barbot";
Blockly.Msg.CAT_BLUETOOTH_MISC = "bluetooth diversos";
Blockly.Msg.CAT_BT_GROVE_COMM = " - Grove";
Blockly.Msg.CAT_BT_TECHNOZONE_BT = " - TechnoZone51";

Blockly.Msg.CAT_jfblocks = "tramos"; // added february 28th, 2017

Blockly.Msg.CAT_KEYPAD = "teclado táctil";

Blockly.Msg.CAT_SHARP = "Telémetro Sharp infrarojo";

Blockly.Msg.CAT_MATRIX_LED_RGB = "Matriz 8x8 LED RGB"; //added 25 march 2017

Blockly.Msg.CAT_STORAGE_EEPROM = " - guardado de datos"; //added 29 march 2017

Blockly.Msg.CAT_DRONE = "dron"; //added 26 april 2017

Blockly.Msg.CAT_ADXL362 = "accelerómetro ADXL362"; //added 2 may 2017

Blockly.Msg.CAT_ETHERNET = "ethernet"; //added 25 july 2017
Blockly.Msg.CAT_ETHERNET_INIT = "inicialización";
Blockly.Msg.CAT_ETHERNET_CLIENT = "cliente";
Blockly.Msg.CAT_ETHERNET_SERVER = "servidor";
Blockly.Msg.CAT_WIFI_INIT = "wifi esp8266"; // 30/01/2018

Blockly.Msg.CAT_AUTODUINO = "Autoduino";
Blockly.Msg.CAT_AUTODUINO_IN = " - sensores";
Blockly.Msg.CAT_AUTODUINO_OUT = " - actuadors";
Blockly.Msg.CAT_AUTODUINO_LCD = " - pantalla LCD";
Blockly.Msg.CAT_AUTODUINO_COMM = " - communicación";
Blockly.Msg.CAT_AUTODUINO_UTIL = " - útil";

Blockly.Msg.CAT_PEGUINO = "Peguino"; //added 21 november 2018
Blockly.Msg.CAT_PEGUINO_IN = " - sensores";
Blockly.Msg.CAT_PEGUINO_OUT = " - actuadores";

Blockly.Msg.CAT_I2C = "I2C"; //added 26/05/2017
Blockly.Msg.CAT_SPI = "SPI"; //added 26/05/2017
Blockly.Msg.CAT_NULL = "libre"; //added 8/10/2017

Blockly.Msg.CAT_HX711 = "sensores de peso"; //added 23/10/2017

Blockly.Msg.CAT_MESURE = "Aparatos de medida"; //added 22/11/2017
Blockly.Msg.CAT_DS18B20 = "Termómetro DS18B20"; //added 15/09/2017
Blockly.Msg.CAT_TSL2561 = "Luxómetro"; //added november 21th 2017

Blockly.Msg.CAT_ACTIONNEURS = "actuadores"; //added 03/11/2017
Blockly.Msg.CAT_CAPTEURS = "sensores";
Blockly.Msg.CAT_ACTIONNEURS_del = " - LED";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_matrice8x8 = " - matriz";
Blockly.Msg.CAT_ACTIONNEURS_DFRobot_SHIELD_LCDKEYPAD = " - pantalla LCD";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_moteur = " - motor";
Blockly.Msg.CAT_ACTIONNEURS_DFPLAYER = " - audio";

Blockly.Msg.CAT_POLOLU = "Pololu"; //added 24/01/2018 
Blockly.Msg.CAT_POLOLU_QTR_1RC = " - QTR-1RC";

Blockly.Msg.CAT_WII = "Nintendo Wiimote"; //added 3/04/2018

Blockly.Msg.CAT_PETITBOT = "PetitBot"; //added 24/04/2018
Blockly.Msg.CAT_PETITBOT_IN = "sensores";
Blockly.Msg.CAT_PETITBOT_MOTORS = "motores";
Blockly.Msg.CAT_PETITBOT_SERVO = "servomotores";
Blockly.Msg.CAT_PETITBOT_LED = "diodos";

Blockly.Msg.CAT_NRF24L01 = "nRF24L01"; //added 31/05/2018

Blockly.Msg.CAT_SEEED = "Seeed studio"; //added 01/03/2018
Blockly.Msg.CAT_MUSIC_SHIELD = "Seeed Music Shield v2.2"; //added 01/03/2018
 
// Nouvelle arborescence 
Blockly.Msg.CAT_FONCTION_AFFICHAGE = "Visualización";
Blockly.Msg.CAT_FONCTION_CAPTEURS = "sensores";
Blockly.Msg.CAT_FONCTION_MOTEURS = "Orden motores";
Blockly.Msg.CAT_FONCTION_ENTREES = "Entradas";
Blockly.Msg.CAT_FONCTION_SORTIES = "Salidas";
Blockly.Msg.CAT_FONCTION_BUS = "Bus de communicación / Enlaces";
Blockly.Msg.CAT_FONCTION_WIRELESS = "Communicación sin hilos";
Blockly.Msg.CAT_FONCTION_STOCKAGE = "Almacenamiento memoria";

Blockly.Msg.CAT_FONCTION_AFFICHAGE_LED = "LED";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_7SEG = "7 Segmentos";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD = "LCD";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_SERIE = "LCD Serie";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_I2C = "LCD I2C";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_4BITS = "LCD 4 Bits";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_SERIE = "Monitor serie Arduino";

Blockly.Msg.CAT_FONCTION_CAPTEURS_TEMPERATURE = "Temperatura";
Blockly.Msg.CAT_FONCTION_CAPTEURS_TEMPHUM = "Temperatura / humidad";
Blockly.Msg.CAT_FONCTION_CAPTEURS_LUX = "Luz / Iluminación";
Blockly.Msg.CAT_FONCTION_CAPTEURS_VOCAL = "Ordenes vocales";
Blockly.Msg.CAT_FONCTION_CAPTEURS_BATTERY = "Monitorización de la bateria";
Blockly.Msg.CAT_FONCTION_CAPTEURS_COLOR = "Sensor de color";

Blockly.Msg.CAT_FONCTION_MOTEURS_MOTORCC = "Motores CC";
Blockly.Msg.CAT_FONCTION_MOTEURS_PAP = "Motores PAP";
Blockly.Msg.CAT_FONCTION_MOTEURS_SERVO = "Servo Motores";

Blockly.Msg.CAT_FONCTION_SORTIES_PWM = "Salida PWM";
Blockly.Msg.CAT_FONCTION_SORTIES_BUZZER = "Salida zumbador";

Blockly.Msg.CAT_FONCTION_ENTREES_CAN = "Entrada CAN";
Blockly.Msg.CAT_FONCTION_ENTREES_KEYBOARD = "teclado";
Blockly.Msg.CAT_FONCTION_ENTREES_BUTTON = "Pulsador";

Blockly.Msg.CAT_FONCTION_BUS_RS232 = "Bluetooth";
Blockly.Msg.CAT_FONCTION_BUS_I2C = "I2C";
Blockly.Msg.CAT_FONCTION_BUS_I2C_SOFT = "Software I2C";
Blockly.Msg.CAT_FONCTION_BUS_I2C_HARD = "Hardware I2C";
Blockly.Msg.CAT_FONCTION_BUS_SPI = "SPI";
Blockly.Msg.CAT_FONCTION_BUS_1WIRE = "One Wire";
Blockly.Msg.CAT_FONCTION_BUS_Ethernet = "Ethernet";

Blockly.Msg.CAT_FONCTION_WIRELESS_BLUTOOTH = "Bluetooth";
Blockly.Msg.CAT_FONCTION_WIRELESS_WIFI ="WIFI";
Blockly.Msg.CAT_FONCTION_WIRELESS_RFID ="RFID";
Blockly.Msg.CAT_FONCTION_WIRELESS_NFC = "NFC";
Blockly.Msg.CAT_FONCTION_WIRELESS_GPS = "GPS";
Blockly.Msg.CAT_FONCTION_WIRELESS_GSM = "GSM";
Blockly.Msg.CAT_FONCTION_WIRELESS_IR = "Infrarojo";
Blockly.Msg.CAT_FONCTION_WIRELESS_RC5 = "RC5";
Blockly.Msg.CAT_FONCTION_WIRELESS_RF24 = "Radio frecuencia 2.4GHz";
Blockly.Msg.CAT_FONCTION_WIRELESS_ZIGBEE = "Zigbee";

Blockly.Msg.CAT_FONCTION_STOCKAGE_EEPROM = "EEPROM";
Blockly.Msg.CAT_FONCTION_STOCKAGE_SDCARD = "Tarjeta SD";

Blockly.Msg.CAT_CAPACITIVESENSOR = "detección capacitativa";
 
Blockly.Msg.CAT_ESP8266="ESP8266 IdO";
Blockly.Msg.CAT_esp8266_wifi=" - WiFi";
Blockly.Msg.CAT_html=" - HTML";

Blockly.Msg.CAT_OTTO = "Otto robot"; //added 06/09/
Blockly.Msg.CAT_OTTOH = "humanoide"; //added 06/10/2019
