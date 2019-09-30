'use strict';

goog.provide('Blockly.Msg.fr');

goog.require('Blockly.Msg');

Blockly.Msg.CAT_LOOPS = "boucles";
Blockly.Msg.CAT_LOGIC = "logique";
Blockly.Msg.CAT_IF = "si...";
Blockly.Msg.CAT_BOOL = "booléen";
Blockly.Msg.CAT_MATH = "maths";
Blockly.Msg.CAT_TEXT = "texte";
Blockly.Msg.CAT_LIST = "listes";
Blockly.Msg.CAT_ARRAY = "listes - tableaux";
Blockly.Msg.CAT_COLOR = "couleurs";
Blockly.Msg.CAT_VARIABLES = "variables";
Blockly.Msg.CAT_FUNCTIONS = "procédures & fonctions";
Blockly.Msg.CAT_ARDUINO = "arduino";
Blockly.Msg.CAT_ARDUINO_IN = " - entrées (capteurs)";
Blockly.Msg.CAT_ARDUINO_OUT = " - sorties (actionneurs)";
Blockly.Msg.CAT_ARDUINO_CONVERSION = " - conversions";
Blockly.Msg.CAT_ARDUINO_TIME = " - temps & durées";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = " - communication USB";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = " - communication logicielle";
Blockly.Msg.CAT_ARDUINO_SERVO = "servo-moteur";

Blockly.Msg.CAT_ANEMOROTATION = "anémomètre à coupelles"; //added september 16th 2017

Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD = "Adafruit Motorshield";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v1 = " - Adafruit Motorshield v1";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v2 = " - Adafruit Motorshield v2";
Blockly.Msg.CAT_ADAFRUIT_JOYSTICK = " - Joystick";

Blockly.Msg.CAT_BLYNK_CC = "BLYNK.CC"; //Added by M. Leroy July 24th 2017
Blockly.Msg.CAT_Blynk_Arduino_Connexion =" - mode de connexion";
Blockly.Msg.CAT_Blynk_Controllers = " - contrôleurs";
Blockly.Msg.CAT_Blynk_Dysplays = " - affichage";
Blockly.Msg.CAT_Blynk_Interface = " - interface";
Blockly.Msg.CAT_Blynk_Notifications = " - notification";
Blockly.Msg.CAT_Blynk_Programmation = " - programmation";
Blockly.Msg.CAT_Blynk_Other = " - autre";
Blockly.Msg.CAT_Blynk_Sensors = " - capteurs du Smartphone";


Blockly.Msg.CAT_DFRobot = "DFRobot";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = " - carte LCD keypad"; //Added february 27th 2016
Blockly.Msg.CAT_DFPLAYER = " - DFPlayer mini MP3";
Blockly.Msg.CAT_DFRobot_ISD1820 = " - enregisteur de sons ISD1820";

Blockly.Msg.CAT_LED_RGB_CHAIN = "DEL RGB en série";
Blockly.Msg.CAT_OLED_U8G = "afficheur OLED I2C";

Blockly.Msg.CAT_ROBUNO = "RobUno";  //added march 17th 2016
Blockly.Msg.CAT_ROBUNO_IN = " - capteurs";
Blockly.Msg.CAT_ROBUNO_OUT = " - actionneurs";
Blockly.Msg.CAT_ROBUNO_MOTORS_CC = " - moteurs CC";

Blockly.Msg.CAT_FISCHERTECHNIK = "fischertechnik";  //added march 26th 2016
Blockly.Msg.CAT_FISCHERTECHNIK_IN = " - capteurs";
Blockly.Msg.CAT_FISCHERTECHNIK_OUT = " - actionneurs";
Blockly.Msg.CAT_FISCHERTECHNIK_MOTORS_CC = " - moteurs CC";

Blockly.Msg.CAT_FLYCAMONE = "FlyCamOne Eco v2"; //added august 20th 2016

Blockly.Msg.CAT_GROVE = "Grove";  //added march 9th 2015
Blockly.Msg.CAT_GROVE_IN = " - capteurs";
Blockly.Msg.CAT_GROVE_OUT = " - actionneurs";
Blockly.Msg.CAT_GROVE_LCD = " - écrans LCD";
Blockly.Msg.CAT_GROVE_LCD2 = " Ecrans LCD";
Blockly.Msg.CAT_GROVE_COMM = " - communication";

Blockly.Msg.CAT_TECHNOZONE = "TechnoZone51";  //added march 11th 2015
Blockly.Msg.CAT_TECHNOZONE_IN = " - capteurs";
Blockly.Msg.CAT_TECHNOZONE_OUT = " - actionneurs";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_PAP = " - moteurs PAP";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_CC = " - moteurs CC";
Blockly.Msg.CAT_TECHNOZONE_SERVO = " - servo-moteurs";
Blockly.Msg.CAT_TECHNOZONE_LCD = " - écran LCD";
Blockly.Msg.CAT_TECHNOZONE_TELEC = " - télécommande";
Blockly.Msg.CAT_TECHNOZONE_IHM = " - console IHM";
Blockly.Msg.CAT_TECHNOZONE_BT = " - bluetooth";
Blockly.Msg.CAT_TECHNOZONE_SPEECH = " - synthèse vocale";
Blockly.Msg.CAT_TECHNOZONE_ROBOT = "TZ51 robot Barbot";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_MOT = " - moteurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IN = " - capteurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_OUT = " - actionneurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_LCD = " - écran LCD";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_BT = " - bluetooth";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IHM = " - console IHM";

Blockly.Msg.CAT_ZUMO = "ZumoBot";	//added april 6th 2015
Blockly.Msg.CAT_ZUMO_MOTORS = " - moteurs";
Blockly.Msg.CAT_ZUMO_SENSORS = " - divers";
Blockly.Msg.CAT_ZUMO_FUNCTION = " - fonctions";

Blockly.Msg.CAT_ROBOTS = "robots & cartes diverses"; //Added April 7 2015 ESK
Blockly.Msg.CAT_ROBOTS_MOTORS = "cartes moteurs";
Blockly.Msg.CAT_ROBOT_MISC = "infrarouge";

Blockly.Msg.CAT_INFRA_2 = "infrarouge"; //added august 22th 2018
Blockly.Msg.CAT_INFRA_3 = "infrarouge";

Blockly.Msg.CAT_RF433 = "RF433"; //added august 22th 2018
Blockly.Msg.CAT_RF433_2 = "RF433";
Blockly.Msg.CAT_RF433_3 = "RF433";

Blockly.Msg.CAT_BQ = "bitbloq";  //added july 14th 2015
Blockly.Msg.CAT_BQ_IN = " - capteurs";
Blockly.Msg.CAT_BQ_OUT = " - actionneurs";
Blockly.Msg.CAT_BQ_COMM = " - communication";

Blockly.Msg.CAT_JEULIN = "feux de carrefour";  //added january 11th 2016
Blockly.Msg.CAT_JEULIN_IN = " - capteurs";
Blockly.Msg.CAT_JEULIN_OUT = " - actionneurs";

Blockly.Msg.CAT_MULTIFUNCTION = "multi-fonction";  //added march 9th 2016

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
Blockly.Msg.CAT_STEPPER = "Moteurs pas à pas"; //added august 28th 2016

Blockly.Msg.CAT_MHK = "MyHumanKit"; //added august 23th 2016

Blockly.Msg.CAT_MACE_ROBOTICS = "Macé Robotics"; //added 01/03/2019
Blockly.Msg.CAT_ESUS = " - carte Esus"; //added 8 october 2016
Blockly.Msg.CAT_ESUS_WIFI = " --> WiFi";
Blockly.Msg.CAT_ESUS_MOTORS = " --> moteurs";
Blockly.Msg.CAT_MRDUINO = " - robot MRduino";
Blockly.Msg.CAT_MRDUINO2 = " - robot MRduino2";

Blockly.Msg.CAT_APDS_9960_RGB_Gesture = "couleur + mouvement"; //added 9 october 2016

Blockly.Msg.CAT_BT_ELECTRONICS = "Bluetooth Electronics"; //added 13 november 2016
Blockly.Msg.CAT_BT_ELEC_BUTTON = "lien vers l'application";

Blockly.Msg.CAT_ICN = "ICN";  //added 3 january 2017

Blockly.Msg.CAT_LCD_SCREEN = "écrans LCD";  //added 12 february 2017
Blockly.Msg.CAT_LCD_I2C = " - écran LCD I²C"; //added 18/08/2017
Blockly.Msg.CAT_LCD_DFRobot_SHIELD_LCDKEYPAD = " - DFRobot LCD Keypad";
Blockly.Msg.CAT_LCD_GROVE_LCD = " - écran LCD Grove";
Blockly.Msg.CAT_LCD_TECHNOZONE_LCD = " - écran LCD TZ51";
Blockly.Msg.CAT_LCD_TECHNOZONE_ROBOT_LCD = " - écran LCD Barbot";
Blockly.Msg.CAT_BLUETOOTH_MISC = "bluetooth divers";
Blockly.Msg.CAT_BT_GROVE_COMM = " - Grove";
Blockly.Msg.CAT_BT_TECHNOZONE_BT = " - TechnoZone51";

Blockly.Msg.CAT_jfblocks = "trames"; // added february 28th, 2017

Blockly.Msg.CAT_KEYPAD = "clavier tactile";

Blockly.Msg.CAT_SHARP = "Sharp infrarouge";

Blockly.Msg.CAT_MATRIX_LED_RGB = "Matrice 8x8 DEL RVB"; //added 25 march 2017

Blockly.Msg.CAT_STORAGE_EEPROM = " - stockage de données"; //added 29 march 2017

Blockly.Msg.CAT_DRONE = "drone"; //added 26 april 2017

Blockly.Msg.CAT_ADXL362 = "accéléromètre ADXL362"; //added 2 may 2017

Blockly.Msg.CAT_ETHERNET = "ethernet"; //added 25 july 2017
Blockly.Msg.CAT_ETHERNET_INIT = "initialisation";
Blockly.Msg.CAT_ETHERNET_CLIENT = "client";
Blockly.Msg.CAT_ETHERNET_SERVER = "serveur";
Blockly.Msg.CAT_WIFI_INIT = "wifi esp8266"; // 30/01/2018

Blockly.Msg.CAT_AUTODUINO = "Autoduino";
Blockly.Msg.CAT_AUTODUINO_IN = " - capteurs";
Blockly.Msg.CAT_AUTODUINO_OUT = " - actionneurs";
Blockly.Msg.CAT_AUTODUINO_LCD = " - écran LCD";
Blockly.Msg.CAT_AUTODUINO_COMM = " - communication";
Blockly.Msg.CAT_AUTODUINO_UTIL = " - utile";

Blockly.Msg.CAT_PEGUINO = "Peguino"; //added 21 november 2018
Blockly.Msg.CAT_PEGUINO_IN = " - capteurs";
Blockly.Msg.CAT_PEGUINO_OUT = " - actionneurs";

Blockly.Msg.CAT_I2C = "I2C"; //added 26/05/2017
Blockly.Msg.CAT_SPI = "SPI"; //added 26/05/2017
Blockly.Msg.CAT_NULL = "libre"; //added 8/10/2017

Blockly.Msg.CAT_HX711 = "capteur de poids"; //added 23/10/2017

Blockly.Msg.CAT_MESURE = "Appareils de mesure"; //added 22/11/2017
Blockly.Msg.CAT_DS18B20 = "Thermomètre DS18B20"; //added 15/09/2017
Blockly.Msg.CAT_TSL2561 = "Luxmètre"; //added november 21th 2017

Blockly.Msg.CAT_ACTIONNEURS = "actionneurs"; //added 03/11/2017
Blockly.Msg.CAT_CAPTEURS = "capteurs";
Blockly.Msg.CAT_ACTIONNEURS_del = " - DEL";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_matrice8x8 = " - matrice";
Blockly.Msg.CAT_ACTIONNEURS_DFRobot_SHIELD_LCDKEYPAD = " - écran LCD";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_moteur = " - moteur";
Blockly.Msg.CAT_ACTIONNEURS_DFPLAYER = " - audio";

Blockly.Msg.CAT_POLOLU = "Pololu"; //added 24/01/2018 
Blockly.Msg.CAT_POLOLU_QTR_1RC = " - QTR-1RC";

Blockly.Msg.CAT_WII = "Nintendo Wiimote"; //added 3/04/2018

Blockly.Msg.CAT_PETITBOT = "PetitBot"; //added 24/04/2018
Blockly.Msg.CAT_PETITBOT_IN = "capteurs";
Blockly.Msg.CAT_PETITBOT_MOTORS = "moteurs";
Blockly.Msg.CAT_PETITBOT_SERVO = "servomoteurs";
Blockly.Msg.CAT_PETITBOT_LED = "diodes";

Blockly.Msg.CAT_NRF24L01 = "nRF24L01"; //added 31/05/2018

Blockly.Msg.CAT_SEEED = "Seeed studio"; //added 01/03/2018
Blockly.Msg.CAT_MUSIC_SHIELD = "Seeed Music Shield v2.2"; //added 01/03/2018
 
// Nouvelle arborescence 
Blockly.Msg.CAT_FONCTION_AFFICHAGE = "Affichage";
Blockly.Msg.CAT_FONCTION_CAPTEURS = "Capteurs";
Blockly.Msg.CAT_FONCTION_MOTEURS = "Commande Moteurs";
Blockly.Msg.CAT_FONCTION_ENTREES = "Entrées";
Blockly.Msg.CAT_FONCTION_SORTIES = "Sorties";
Blockly.Msg.CAT_FONCTION_BUS = "Bus de Communication / Liaisons";
Blockly.Msg.CAT_FONCTION_WIRELESS = "Communication sans fils";
Blockly.Msg.CAT_FONCTION_STOCKAGE = "Stockage Mémoire";

Blockly.Msg.CAT_FONCTION_AFFICHAGE_LED = "LED";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_7SEG = "7 Segments";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD = "LCD";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_SERIE = "LCD Série";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_I2C = "LCD I2C";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_LCD_4BITS = "LCD 4 Bits";
Blockly.Msg.CAT_FONCTION_AFFICHAGE_SERIE = "Moniteur Série Arduino";

Blockly.Msg.CAT_FONCTION_CAPTEURS_TEMPERATURE = "Température";
Blockly.Msg.CAT_FONCTION_CAPTEURS_TEMPHUM = "Température / humidité";
Blockly.Msg.CAT_FONCTION_CAPTEURS_LUX = "Lumière / Éclairement";
Blockly.Msg.CAT_FONCTION_CAPTEURS_VOCAL = "Commande vocale";
Blockly.Msg.CAT_FONCTION_CAPTEURS_BATTERY = "Monitoring batterie";
Blockly.Msg.CAT_FONCTION_CAPTEURS_COLOR = "Capteur de couleur";

Blockly.Msg.CAT_FONCTION_MOTEURS_MOTORCC = "Moteurs CC";
Blockly.Msg.CAT_FONCTION_MOTEURS_PAP = "Moteurs PAP";
Blockly.Msg.CAT_FONCTION_MOTEURS_SERVO = "Servo Moteurs";

Blockly.Msg.CAT_FONCTION_SORTIES_PWM = "Sortie PWM";
Blockly.Msg.CAT_FONCTION_SORTIES_BUZZER = "Sortie Buzzer";

Blockly.Msg.CAT_FONCTION_ENTREES_CAN = "Entrée CAN";
Blockly.Msg.CAT_FONCTION_ENTREES_KEYBOARD = "clavier";
Blockly.Msg.CAT_FONCTION_ENTREES_BUTTON = "Bouton Poussoir";

Blockly.Msg.CAT_FONCTION_BUS_RS232 = "Bluetooth";
Blockly.Msg.CAT_FONCTION_BUS_I2C = "I2C";
Blockly.Msg.CAT_FONCTION_BUS_I2C_SOFT = "I2C logiciel";
Blockly.Msg.CAT_FONCTION_BUS_I2C_HARD = "I2C Hardware";
Blockly.Msg.CAT_FONCTION_BUS_SPI = "SPI";
Blockly.Msg.CAT_FONCTION_BUS_1WIRE = "One Wire";
Blockly.Msg.CAT_FONCTION_BUS_Ethernet = "Ethernet";

Blockly.Msg.CAT_FONCTION_WIRELESS_BLUTOOTH = "Bluetooth";
Blockly.Msg.CAT_FONCTION_WIRELESS_WIFI ="WIFI";
Blockly.Msg.CAT_FONCTION_WIRELESS_RFID ="RFID";
Blockly.Msg.CAT_FONCTION_WIRELESS_NFC = "NFC";
Blockly.Msg.CAT_FONCTION_WIRELESS_GPS = "GPS";
Blockly.Msg.CAT_FONCTION_WIRELESS_GSM = "GSM";
Blockly.Msg.CAT_FONCTION_WIRELESS_IR = "Infra Rouge";
Blockly.Msg.CAT_FONCTION_WIRELESS_RC5 = "RC5";
Blockly.Msg.CAT_FONCTION_WIRELESS_RF24 = "Radio Fréquence 2.4GHz";
Blockly.Msg.CAT_FONCTION_WIRELESS_ZIGBEE = "Zigbee";

Blockly.Msg.CAT_FONCTION_STOCKAGE_EEPROM = "EEPROM";
Blockly.Msg.CAT_FONCTION_STOCKAGE_SDCARD = "Carte SD";

Blockly.Msg.CAT_CAPACITIVESENSOR = "détection capacitive";
 
Blockly.Msg.CAT_ESP8266="ESP8266 IdO";
Blockly.Msg.CAT_esp8266_wifi=" - WiFi";
Blockly.Msg.CAT_html=" - HTML";

Blockly.Msg.CAT_OTTO = "Otto robot"; //added 06/09/