'use strict';

goog.provide('Blockly.Msg.fr');

goog.require('Blockly.Msg');

head.load(
"lang/BlocklyArduino/user/user_en.js",
"lang/BlocklyArduino/user/user_fr.js",
function() {
    // Call a function when done
    console.log("Done loading USER language file");
});


Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'vide !';
Blockly.Msg.ARRAY_CREATE_WITH = "constituée de";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "liste ou tableau";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "ajoute, enlève, ou réordonne les éléments dans le bloc Tableau.";
Blockly.Msg.ARRAY_CREATE_WITH_HELPURL = "";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "une liste";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "élément";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP = "ajoute un élément à la liste.";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "créé une liste, ou tableau, avec un nombre à définir d'éléments.";
Blockly.Msg.ARRAY_GETINDEX_AT = "l'élément au rang";
Blockly.Msg.ARRAY_GETINDEX_AT1 = "l'élément au rang";
Blockly.Msg.ARRAY_GETINDEX_AT2 = "rang";
Blockly.Msg.ARRAY_GETINDEX_HELPURL = "";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "dans la liste";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP = "";

//ESK 6/13/2015 SWITCH CASE
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Ajoute une condition au bloc 'suivant que'.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Ajoute une condition finale, par défaut.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Ajoute, retire, ou classe les sections de ce bloc.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "suivant que la variable ";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = "prend";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "par défaut faire";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "la valeur";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Suivant la valeur (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "faire";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Si une valeur est vraie alors exécuter les commandes suivantes.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.  Si aucune condition n'est vérifiée, alors faire le bloc de commandes par défaut.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Déplacer le bloc de gauche pour l'ajouter.";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Ajoute un bloc de commandes sous condition";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP ="Ajoute un bloc d'actions par défaut";

Blockly.Msg.VARIABLES_AS = "de type";
Blockly.Msg.ARD_TYPE_CHAR = "caractère";
Blockly.Msg.ARD_TYPE_TEXT = "texte";
Blockly.Msg.ARD_TYPE_BOOL = "booléen ToR";
Blockly.Msg.ARD_TYPE_SHORT = "chiffre entier";
Blockly.Msg.ARD_TYPE_NUMBER = "nombre entier";
Blockly.Msg.ARD_TYPE_LONG = "nombre entier long";
Blockly.Msg.ARD_TYPE_DECIMAL = "nombre à virgule";
Blockly.Msg.ARD_TYPE_ARRAY = "tableau";
Blockly.Msg.ARD_TYPE_NULL = "vide";
Blockly.Msg.ARD_TYPE_UNDEF = "non défini";
Blockly.Msg.ARD_TYPE_VOLATILE = "entier volatile";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "typage manquant sur un bloc";

//**********************************catégories***********************************************
//**********************************catégories***********************************************
//**********************************catégories***********************************************

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
Blockly.Msg.CAT_ARDUINO_IN = "entrées";
Blockly.Msg.CAT_ARDUINO_OUT = "sorties";
Blockly.Msg.CAT_ARDUINO_CONVERSION = "conversions";
Blockly.Msg.CAT_ARDUINO_TIME = "temps & durées";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "communication série";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "communication logicielle";
Blockly.Msg.CAT_ARDUINO_SERVO = "servo-moteur";

Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD = "Adafruit Motorshield";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v1 = "Adafruit Motorshield v1";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v2 = "Adafruit Motorshield v2";
Blockly.Msg.CAT_ADAFRUIT_JOYSTICK = "Joystick";

Blockly.Msg.CAT_DFRobot = "DFRobot";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "carte LCD keypad"; //Added february 27th 2016
Blockly.Msg.CAT_DFPLAYER = "DFPlayer mini MP3";

Blockly.Msg.CAT_LED_RGB_CHAIN = "DEL RGB en série";
Blockly.Msg.CAT_OLED_U8G = "afficheur OLED I2C";

Blockly.Msg.CAT_ROBUNO = "RobUno";  //added march 17th 2016
Blockly.Msg.CAT_ROBUNO_IN = "capteurs";
Blockly.Msg.CAT_ROBUNO_OUT = "actionneurs";
Blockly.Msg.CAT_ROBUNO_MOTORS_CC = "moteurs CC";

Blockly.Msg.CAT_FISCHERTECHNIK = "fischertechnik";  //added march 26th 2016
Blockly.Msg.CAT_FISCHERTECHNIK_IN = "capteurs";
Blockly.Msg.CAT_FISCHERTECHNIK_OUT = "actionneurs";
Blockly.Msg.CAT_FISCHERTECHNIK_MOTORS_CC = "moteurs CC";

Blockly.Msg.CAT_FLYCAMONE = "FlyCamOne Eco v2"; //added august 20th 2016

Blockly.Msg.CAT_GROVE = "Grove";  //added march 9th 2015
Blockly.Msg.CAT_GROVE_IN = "capteurs";
Blockly.Msg.CAT_GROVE_OUT = "actionneurs";
Blockly.Msg.CAT_GROVE_LCD = "écran LCD";
Blockly.Msg.CAT_GROVE_COMM = "communication";

Blockly.Msg.CAT_TECHNOZONE = "TechnoZone51";  //added march 11th 2015
Blockly.Msg.CAT_TECHNOZONE_IN = "capteurs";
Blockly.Msg.CAT_TECHNOZONE_OUT = "actionneurs";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_PAP = "moteurs PAP";
Blockly.Msg.CAT_TECHNOZONE_MOTORS_CC = "moteurs CC";
Blockly.Msg.CAT_TECHNOZONE_SERVO = "servo-moteurs";
Blockly.Msg.CAT_TECHNOZONE_LCD = "écran LCD";
Blockly.Msg.CAT_TECHNOZONE_TELEC = "télécommande";
Blockly.Msg.CAT_TECHNOZONE_IHM = "console IHM";
Blockly.Msg.CAT_TECHNOZONE_BT = "bluetooth";
Blockly.Msg.CAT_TECHNOZONE_SPEECH = "synthèse vocale";
Blockly.Msg.CAT_TECHNOZONE_ROBOT = "TZ51 robot Barbot";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_MOT = "moteurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IN = "capteurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_OUT = "actionneurs";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_LCD = "écran LCD";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_BT = "bluetooth";
Blockly.Msg.CAT_TECHNOZONE_ROBOT_IHM = "console IHM";

Blockly.Msg.CAT_ZUMO = "ZumoBot";	//added april 6th 2015
Blockly.Msg.CAT_ZUMO_MOTORS = "moteurs";
Blockly.Msg.CAT_ZUMO_SENSORS = "divers";
Blockly.Msg.CAT_ZUMO_FUNCTION = "fonctions";

Blockly.Msg.CAT_ROBOTS = "robots & cartes diverses"; //Added April 7 2015 ESK
Blockly.Msg.CAT_ROBOTS_MOTORS = "cartes moteurs";
Blockly.Msg.CAT_ROBOT_MISC = "infrarouge";

Blockly.Msg.CAT_BQ = "bitbloq";  //added july 14th 2015
Blockly.Msg.CAT_BQ_IN = "capteurs";
Blockly.Msg.CAT_BQ_OUT = "actionneurs";
Blockly.Msg.CAT_BQ_COMM = "communication";

Blockly.Msg.CAT_JEULIN = "feux de carrefour";  //added january 11th 2016
Blockly.Msg.CAT_JEULIN_IN = "capteurs";
Blockly.Msg.CAT_JEULIN_OUT = "actionneurs";

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

Blockly.Msg.CAT_SPI_COMM = "ISP communication";
Blockly.Msg.CAT_STEPPER = "Moteurs pas à pas"; //added august 28th 2016

Blockly.Msg.CAT_MHK = "MyHumanKit"; //added august 23th 2016

Blockly.Msg.CAT_ESUS = "carte Esus"; //added 8 october 2016
Blockly.Msg.CAT_ESUS_WIFI = "WiFi";
Blockly.Msg.CAT_ESUS_MOTORS = "commandes moteurs";

Blockly.Msg.CAT_APDS_9960_RGB_Gesture = "couleur + mouvement"; //added 9 october 2016

Blockly.Msg.CAT_BT_ELECTRONICS = "Bluetooth Electronics"; //added 13 november 2016

Blockly.Msg.CAT_ICN = "ICN";  //added 3 january 2017

Blockly.Msg.CAT_LCD_SCREEN = "écrans LCD";  //added 12 february 2017
Blockly.Msg.CAT_LCD_DFRobot_SHIELD_LCDKEYPAD = "DFRobot LCD Keypad shield";
Blockly.Msg.CAT_LCD_GROVE_LCD = "écran LCD Grove";
Blockly.Msg.CAT_LCD_TECHNOZONE_LCD = "écran LCD TZ51";
Blockly.Msg.CAT_LCD_TECHNOZONE_ROBOT_LCD = "écran LCD Barbot";
Blockly.Msg.CAT_BLUETOOTH_MISC = "bluetooth divers";
Blockly.Msg.CAT_BT_GROVE_COMM = "Grove";
Blockly.Msg.CAT_BT_TECHNOZONE_BT = "TechnoZone51";

Blockly.Msg.CAT_jfblocks = "trames"; // added february 28th, 2017

Blockly.Msg.CAT_COLLYC = "Collège-Lycée";

Blockly.Msg.CAT_SHARP = "Sharp infrarouge";

Blockly.Msg.CAT_MATRIX_LED_RGB = "Matrice 8x8 DEL RVB"; //added 25 march 2017

Blockly.Msg.CAT_STORAGE_EEPROM = "stockage de données"; //added 29 march 2017

Blockly.Msg.FIELDDROPDOWN = [["1 (état haut)", "HIGH"], ["0 (état bas)", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["marche", "ON"], ["arrêt", "OFF"]]
Blockly.Msg.INOUT_HIGH_LEVEL = "1 (état haut)";
Blockly.Msg.INOUT_LOW_LEVEL = "0 (état bas)";

//**********************************FieldInstance messages***********************************************
Blockly.Msg.COMPONENT_WARN = 'A %1 configuration block with the same %2 name must be added to use this block!';

Blockly.Msg.SOFTSERIAL_COMPONENT = 'softserial';
Blockly.Msg.STEPPER_COMPONENT = 'stepper';
Blockly.Msg.NEOPIXEL_COMPONENT = 'Neopixel';
Blockly.Msg.SERVO_COMPONENT = 'servomoteur';
Blockly.Msg.SERVO_DEFAULT_NAME = "SERVO";
Blockly.Msg.SHARP_IR_COMPONENT = 'télémètre';

//**********************************blocks***********************************************
//**********************************blocks***********************************************
//**********************************blocks***********************************************

/// Ardublockly instances
Blockly.Msg.NEW_INSTANCE = 'nouvelle instance';
Blockly.Msg.RENAME_INSTANCE = 'renommer cette instance';
Blockly.Msg.NEW_INSTANCE_TITLE = "nouveau nom d'instance:";
Blockly.Msg.RENAME_INSTANCE_TITLE = 'renommer toutes les "%1" instances en :';

Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "faire une temporisation (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME_SEC = "faire une temporisation (en s) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "spécifier le temps d'attente en millisecondes";
Blockly.Msg.ARDUINO_BASE_SETUP = "initialisation (setup)";
Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL = "https://www.arduino.cc/en/Reference/Setup";
Blockly.Msg.ARDUINO_BASE_LOOP = "répéter indéfiniment (loop)";
Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL = "https://www.arduino.cc/en/Reference/Loop";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED = "temps écoulé (ms) depuis le début du programme";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_SEC = "temps écoulé (s) depuis le début du programme";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "durée depuis que le programme a commencé (unsigned long)";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL = "https://www.arduino.cc/en/Reference/Millis";
Blockly.Msg.ARDUINO_BETWEEN = "nombre aléatoire entre";
Blockly.Msg.ARDUINO_BETWEEN_AND = "et";
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "http://arduino.cc/en/Reference/map";
Blockly.Msg.ARDUINO_BASE_MAP_NUM ="faire la transposée de";
Blockly.Msg.ARDUINO_BASE_MAP_DMAX = "sur un intervalle de [0~";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "transfère une valeur sur une échelle de 0 à 1023 vers une autre échelle";
Blockly.Msg.ARDUINO_BASE_CODE = "ligne de code";
Blockly.Msg.ARDUINO_BASE_CONST = "définitions préalables";
Blockly.Msg.ARDUINO_BASE_DEFINE_HELPURL = "https://www.arduino.cc/en/Reference/Define";
Blockly.Msg.ARDUINO_BASE_DEFINE = "Définitions";
Blockly.Msg.ARDUINO_BASE_DEFINE_TOOLTIP = "Définition de constantes & bibliothèques";
Blockly.Msg.ARDUINO_BASE_END = 'attente infinie (fin de programme)';
Blockly.Msg.ARDUINO_CONSTRAIN = "limiter";
Blockly.Msg.ARDUINO_CONSTRAIN_X = " le nombre";
Blockly.Msg.ARDUINO_CONSTRAIN_A = "entre A = ";
Blockly.Msg.ARDUINO_CONSTRAIN_B = "et B = ";
Blockly.Msg.ARDUINO_CONSTRAIN_HELPURL = 'http://arduino.cc/en/Reference/Constrain';
Blockly.Msg.ARDUINO_CONSTRAIN_TOOLTIP = 'Constrains a number to be within a range.';
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "mettre la DEL sur la carte à l'état logique";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "éteint ou allume la DEL sur la carte Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "mettre la broche Numérique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "à l'état logique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "écrire un état logique 0 ou 1 sur une sortie spécifique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "l'état logique de la broche Numérique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "lecture de l'état logique 0 ou 1 de la broche numérique";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1 = "mettre la broche PWM~";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2 = "à la valeur";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP = "envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique\nATTENTION à vérifier le n° sur la carte !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "écrire sur la broche Analogique";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "la valeur";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "envoyer une valeur comprise entre 0 et 255 sur une sortie spécifique";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'une fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "pendant une durée (ms) de";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "émettre un son sur la broche selectionnée";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "arrêter le son sur la broche selectionnée";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "la valeur numérisée de l'entrée Analogique";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "renvoie une valeur comprise entre 0 et 1023";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_STAT="de l'état";
Blockly.Msg.ARDUINO_PULSEIN="durée (en µs) sur la broche";
Blockly.Msg.ARDUINO_PULSEIN_TIMEOUT="dans un délai (en µs) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "orienter le servo-moteur";
Blockly.Msg.ARDUINO_SERVO_MOVE_IMAGE = "blocks/arduino_base/servomoteur.jpg";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2 = "sur la broche";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "d'un angle (0~180°) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_DELAY_TIME = "continuer après un délai (ms) de";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "rotation possible entre 0~180 degrés";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1 = "l'angle du servo-moteur";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_IMAGE = "blocks/arduino_base/servomoteur.jpg";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2 = "connecté sur la broche";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP = "renvoie le nombre de degrés de la dernière rotation";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL = "https://www.arduino.cc/en/Reference/ServoWrite";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "faire tourner le servomoteur à rotation continue";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT1 = "de la broche";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT2 = "à la vitesse [0~180]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT3 = "à la vitesse [0~90]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT4 = "dans le sens";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "utilise les degrés pour comme un indice de puissance : 0° -> à fond à gauche | 90° -> repos/équilibre | 180° -> à fond à droite";
Blockly.Msg.ARDUINO_SERVO_PIN = "sur la broche";
Blockly.Msg.ARDUINO_SERVO_ATTACH1 = "attacher un servomoteur";
Blockly.Msg.ARDUINO_SERVO_ATTACH2 = "avec pour identifiant";
Blockly.Msg.ARDUINO_SERVO_ATTACHED = "présence d'un servomoteur";
Blockly.Msg.ARDUINO_SERVO_DETACH = "détacher le servomoteur de la broche";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "afficher sur le port série le texte";
Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT = "afficher, puis saut, sur le port série le texte";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT = "afficher, avec une tabulation, sur le port série le texte";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "envoie des données sur le port série pour surveillance par le moniteur en ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT = "afficher sur le port série le texte :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER = "suivi du nombre :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE = "puis d'un saut de ligne ?";

Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'quand une interruption externe sur la broche';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "désactiver l'interruption externe de la broche";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "surveille une interruption sur une broche spécifique, voir l'aide !";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = 'Detachs interrupt to a specific Port';
Blockly.Msg.LKL_MODE = 'correspond à un';
Blockly.Msg.LKL_DROPDOWN = [['front montant', "RISING"], ['front descendant', "FALLING"], ["changement d'état", "CHANGE"], ["état bas", "LOW"]];

//SERIAL
Blockly.Msg.Serial_Init="fixer la vitesse (bauds) du port série à";
Blockly.Msg.Serial_Print="afficher sur la console série";
Blockly.Msg.Serial_Write="envoyer sur le port série";
Blockly.Msg.Serial_write_out="envoyer sur le port série";
Blockly.Msg.Serial_Print_Format="envoyer au format";
Blockly.Msg.Serial_Print_ForDecimal="décimal";
Blockly.Msg.Serial_Print_ForHexa="hexadécimal";
Blockly.Msg.Serial_Print_ForBin="binaire";
Blockly.Msg.Serial_Print_ForOct="octal";
Blockly.Msg.Serial_read="donnée lue sur le port série";
Blockly.Msg.Serial_avai="une donnée est disponible sur le port série ?";
Blockly.Msg.Serial_flush="attente de fin de transmission par le port série";

//SOFTWARE SERIAL
Blockly.Msg.SSERIAL_DEFAULT_NAME="COMserie";
Blockly.Msg.SSERIAL_Init="initialisation :";
Blockly.Msg.SSERIAL_SPEED="vitesse";
Blockly.Msg.SSERIAL_TX="TX ";
Blockly.Msg.SSERIAL_RX="broche RX ";
Blockly.Msg.SSERIAL_Read="donnée lue sur le port de communication";
Blockly.Msg.SSERIAL_Print="afficher sur le port de communication le texte";
Blockly.Msg.SSERIAL_Write="envoyer sur le port de communication";
Blockly.Msg.SSERIAL_Avai="une donnée est disponible ?";

//VARIABLES
Blockly.Msg.ARDUINO_VAR_DECLARE="déclare";
Blockly.Msg.ARDUINO_VAR_AS="en tant que";
Blockly.Msg.ARDUINO_VAR_VAL="de valeur";

//Conversions
Blockly.Msg.CONV_tochar="convertir en char ";
Blockly.Msg.CONV_tobyte="convertir en Byte ";
Blockly.Msg.CONV_toint="convertir en Int ";
Blockly.Msg.CONV_tofloat="convertir en Float ";

//added april 6th 2015
Blockly.Msg.GROVE_INOUT_DHT_HELPURL = "https://github.com/adafruit/DHT-sensor-library";
Blockly.Msg.GROVE_INOUT_DHT_READ_C = "de la température °C";
Blockly.Msg.GROVE_INOUT_DHT_READ_F = "de la température °F";
Blockly.Msg.GROVE_INOUT_DHT_READ_H = "du % d'humidité";
Blockly.Msg.GROVE_INOUT_DHT_READ_PIN = "sur la broche n°";
Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR = "mesurée par le capteur ";
Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP = "les capteurs de type DHT comportent 2 parties : thermistance et capteur d'humidité.";
Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE = "valeur";
Blockly.Msg.GROVE_INOUT_LED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LED_INPUT1 = "mettre la DEL";
Blockly.Msg.GROVE_INOUT_LED_INPUT2 = "sur la broche Numérique";
Blockly.Msg.GROVE_INOUT_LED_INPUT3 = "à l'état";
Blockly.Msg.GROVE_INOUT_LED_TOOLTIP = "active la sortie Digital sur laquelle la DEL est branchée";
Blockly.Msg.GROVE_INOUT_BUTTON_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button";
Blockly.Msg.GROVE_INOUT_BUTTON_TEXT = "l'état du bouton poussoir";
Blockly.Msg.GROVE_INOUT_BUTTON_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP = "entrée numérique classique en lecture";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT = "valeur du potentiomètre";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP = "Lecture analogique dont le résultat varie entre 0 et 1023";
Blockly.Msg.GROVE_INOUT_TILT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch";
Blockly.Msg.GROVE_INOUT_TILT_TEXT = "l'état de l'interrupteur à bascule";
Blockly.Msg.GROVE_INOUT_TILT_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_TILT_TOOLTIP = "Quand le contacteur n'est pas touché, le circuit est ouvert sinon quand le contacteur touche, le circuit est fermé.";
Blockly.Msg.GROVE_INOUT_BUZZER_HELPURL = "http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1 = "mettre le buzzer piezo-électrique";
Blockly.Msg.GROVE_INOUT_BUZZER_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2 = "à l'état";
Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP = "Emet un son quand le buzzer est mis à 1";
Blockly.Msg.GROVE_INOUT_RELAY_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Relay";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT1 = "mettre le relais";
Blockly.Msg.GROVE_INOUT_RELAY_TEXT2 = "à l'état";
Blockly.Msg.GROVE_INOUT_RELAY_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP = "Le relais sert à commander un circuit de puissance, jusqu'à 250V et 10 ampères.";
Blockly.Msg.GROVE_INOUT_TEMP_HELPURL = "http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature";
Blockly.Msg.GROVE_INOUT_TEMP_TEXT = "la température";
Blockly.Msg.GROVE_INOUT_TEMP_INPUT = "mesurée sur la broche";
Blockly.Msg.GROVE_INOUT_TEMP_TOOLTIP = "renvoie la température ambiante en °C";
Blockly.Msg.GROVE_INOUT_MOISTURE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Moisture_Sensor";
Blockly.Msg.GROVE_INOUT_MOISTURE_TEXT = "l'humidité";
Blockly.Msg.GROVE_INOUT_MOISTURE_INPUT = "mesurée sur la broche";
Blockly.Msg.GROVE_INOUT_MOISTURE_TOOLTIP = "renvoie le niveau d'humidité";
Blockly.Msg.GROVE_INOUT_LCD_RGB_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TEXT = "écran LCD";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT1 = "sur la broche";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT2 = "écrire sur la ligne 1";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT3 = "écrire sur la ligne 2";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_INPUT4 = "pendant (ms)";
Blockly.Msg.GROVE_INOUT_LCD_PRINT_TOOLTIP = "écris le texte sur un écran LCD série de 2 lignes sur 16 caractères";
Blockly.Msg.GROVE_INOUT_LCD_POWER_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TEXT = "écran LCD";
Blockly.Msg.GROVE_INOUT_LCD_POWER_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_LCD_POWER_STATE = "mettre sur";
Blockly.Msg.GROVE_INOUT_LCD_POWER_TOOLTIP = "éclairage de l'écran LCD on/off";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TEXT = "écran LCD";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_CLEAN = "effacer l'écran";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT = "écrit avec l'effet";
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT = [["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]];
Blockly.Msg.GROVE_INOUT_LCD_EFFECT_TOOLTIP = "Turn LCD power on/off";
Blockly.Msg.GROVE_INOUT_SOUND_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor";
Blockly.Msg.GROVE_INOUT_SOUND_TEXT = "le volume du son";
Blockly.Msg.GROVE_INOUT_SOUND_INPUT = "mesuré sur la broche";
Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP = "détecte le volume sonore environnant";
Blockly.Msg.GROVE_INOUT_PIR_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor";
Blockly.Msg.GROVE_INOUT_PIR_TEXT = "détection d'un mouvement";
Blockly.Msg.GROVE_INOUT_PIR_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_PIR_TOOLTIP = "le capteur renvoie 1 quand il y a un mouvement dans son champ de détection";
Blockly.Msg.GROVE_INOUT_LINE_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Line_Finder";
Blockly.Msg.GROVE_INOUT_LINE_TEXT = "état du suiveur de ligne";
Blockly.Msg.GROVE_INOUT_LINE_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_LINE_TOOLTIP = "renvoie un état logique en fonction de la couleur, blanc ou noir, détectée";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT = "la distance mesurée";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT = "par le capteur ultrasons sur la broche";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT = "unité";
Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP = "mesure par écho ultrason";
Blockly.Msg.GROVE_INOUT_MOTOR_HELPURL = "http://www.seeedstudio.com/wiki/Motor_Shield";
Blockly.Msg.GROVE_INOUT_MOTOR_TEXT = "moteur sur le shield";
Blockly.Msg.GROVE_INOUT_MOTOR_CHOICE = [["stop !", "stop"], ["avance", "forward"], ["à droite", "right"], ["à gauche", "left"], ["recule", "backward"]];
Blockly.Msg.GROVE_INOUT_MOTOR_TOOLTIP = "pilote 2 moteurs à courant continu";
Blockly.Msg.GROVE_INOUT_JOYSTICK_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT1 = "angle du joystick";
Blockly.Msg.GROVE_INOUT_JOYSTICK_TEXT2 = "de l'axe";
Blockly.Msg.GROVE_INOUT_JOYSTICK_INPUT = "sur la broche";
Blockly.Msg.GROVE_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.GROVE_INOUT_JOYSTICK_TOOLTIP = "le joystick renvoie des valeurs comprises entre 0 et 102 pour chacund es 2 axes";
Blockly.Msg.GROVE_INOUT_RGBLED_HELPURL = "http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED";
Blockly.Msg.GROVE_INOUT_RGBLED_TEXT = "DEL RGB";
Blockly.Msg.GROVE_INOUT_RGBLED_INPUT = "valeur [0~255]";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR1 = "rouge sur la broche";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR2 = "vert sur la broche";
Blockly.Msg.GROVE_INOUT_RGBLED_COLOR3 = "bleu sur la broche";
Blockly.Msg.GROVE_INOUT_RGBLED_TOOLTIP = "utilise les sorties PWM pour moduler sur 256 valeurs chaque couleur primaire";
Blockly.Msg.GROVE_INOUT_BT_HELPURL = "http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM1 = "liaison Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_COMM2 = "sur la broche";
Blockly.Msg.GROVE_INOUT_BT_COMM3 = "nom du périphérique";
Blockly.Msg.GROVE_INOUT_BT_COMM4 = "code secret";
Blockly.Msg.GROVE_INOUT_BT_COMM5 = "envoyer";
Blockly.Msg.GROVE_INOUT_BT_COMM6 = "recevoir";
Blockly.Msg.GROVE_INOUT_BT_TOOLTIP = "Bluetooth V2.0 + EDR esclave. Supporte un seul esclave par carte";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_EMETTEUR_IR_TEXT = "Led Infra rouge IR";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1 = "émettre un signal Infra Rouge sur la broche";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2 = "d'une fréquence (Hz) 38000 ";
Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Emitter/";
Blockly.Msg.GROVE_EMETTEUR_IR_TOOLTIP = "Emission d'un signal infra rouge";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_RECEPTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Receiver/";
Blockly.Msg.GROVE_RECEPTEUR_IR_TEXT = "l'état du récepteur IR";
Blockly.Msg.GROVE_RECEPTEUR_IR_INPUT = "sur la broche";
Blockly.Msg.GROVE_RECEPTEUR_IR_TOOLTIP = "entrée numérique classique en lecture";

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_FIN_COURSE_HELPURL = "http://www.technologieservices.fr/fr/a-a1000024681-edc1000003/article/GROV201-Module-Grove-Interrupteur-fin-de-course.html";
Blockly.Msg.GROVE_FIN_COURSE_TEXT = "l'état du capteur fin de course";
Blockly.Msg.GROVE_FIN_COURSE_INPUT = "sur la broche";
Blockly.Msg.GROVE_FIN_COURSE_TOOLTIP = "entrée numérique classique en lecture";

//************************************** ajoute 16/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_INOUT_BT_AT_HELPURL = "http://wiki.seeed.cc/Grove-Serial_Bluetooth_v3.0/";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM1 = "liaison Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM2 = "sur la broche";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM3 = "nom du périphérique";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM4 = "code secret";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM5 = "recevoir";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM6 = "envoyer";
Blockly.Msg.GROVE_INOUT_BT_AT_TOOLTIP = "Bluetooth V3.0 + EDR esclave. Supporte un seul esclave par carte";

//******** Grove commun à tous les drivers moteur Cdo 2017 03 19*/
Blockly.Msg.GROVE_DRIVER_MOTOR1 = "Moteur 1";
Blockly.Msg.GROVE_DRIVER_MOTOR2 = "Moteur 2";
Blockly.Msg.GROVE_DRIVER_MOTOR3 = "Moteur 3";
Blockly.Msg.GROVE_DRIVER_MOTOR4 = "Moteur 4";
Blockly.Msg.GROVE_DRIVER_MOTOR_SPEED = "Vitesse";
//******** Grove driver13 */
Blockly.Msg.GROVE_DRIVER13_HELPURL = "http://wiki.seeed.cc/Grove-I2C_Motor_Driver_V1.3/";
Blockly.Msg.GROVE_DRIVER13_MOTOR_TITLE = "Contrôleur Moteur V1.3";
Blockly.Msg.GROVE_DRIVER13_MOTOR_I2C_ADDRESS = "Adresse I2C";
Blockly.Msg.GROVE_DRIVER13_TOOLTIP = "Contrôleur Moteur - " + 
                            "l'adresse I2C est entre 0 et 15 (0x0F) selon la configuation mise sur la carte, " + 
                            "la vitesse du moteur choisi est entre -100 et +100, 0 = arrêt";
//******** Grove minimoto */
Blockly.Msg.GROVE_MINI_DRIVER_TITLE = "Contrôleur Mini Moteur";
Blockly.Msg.GROVE_MINI_DRIVER_HELPURL = "http://wiki.seeed.cc/Grove-Mini_I2C_Motor_Driver_v1.0/";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_MSG = "Vitesse";
Blockly.Msg.GROVE_MINI_DRIVER_MOTOR_TOOLTIP = "Contrôleur Mini Moteur - " + 
                            "la vitesse du moteur choisi est entre -100 et +100";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_MSG = "Arrêt";
Blockly.Msg.GROVE_MINI_DRIVER_STOP_TOOLTIP = "Contrôleur Mini Moteur - " + 
                            "Arrête le moteur choisi";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_MSG = "Etat";
Blockly.Msg.GROVE_MINI_DRIVER_ERROR_TOOLTIP = "Contrôleur Mini Moteur - " + 
                            "Retour l'état du moteur choisi (0: OK, 3 et 17: sur-intensité, 9: sous-tension, 5: sur-chauffe)";

//added April 3rd 2015 ESK
Blockly.Msg.ROBOTS_MOTORS_FORWARD = "avance";
Blockly.Msg.ROBOTS_MOTORS_BACKWARD = "recule";
Blockly.Msg.ROBOTS_MOTORS_STOP = "stop";
Blockly.Msg.ROBOTS_MOTORS_LEFT= "tourne à gauche";
Blockly.Msg.ROBOTS_MOTORS_RIGHT = "tourne à droite";
Blockly.Msg.ROBOTS_MOTORS_SPEEDR = "vitesse à droite (B)";
Blockly.Msg.ROBOTS_MOTORS_SPEEDL = "vitesse à gauche (A)";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_S_TITLE = "Carte moteur générique PWM";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_TITLE = "Cartes moteur génériques";
Blockly.Msg.ROBOTS_MISC_ZUMO_HELPURL = "https://www.pololu.com/docs/0J57/5";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TITLE = "Zumo - No flip";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FN_TOOLTIP = "Drive Pololu Zumo (wired correctly)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TITLE = "Zumo - Flip left";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FL_TOOLTIP = "Drive Pololu Zumo (flipped left motor)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TITLE = "Zumo - Flip right";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FR_TOOLTIP = "Drive Pololu Zumo (flipped right motor)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TITLE = "Zumo - Flip both";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FB_TOOLTIP = "Drive Pololu Zumo (flipped both motors)";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TITLE = "Zumo - No flip & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FNS_TOOLTIP = "Drive Pololu Zumo (wired correctly) + vitesse";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TITLE = "Zumo - Flip left & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FLS_TOOLTIP = "Drive Pololu Zumo (flipped left motor) + vitesse";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TITLE = "Zumo - Flip right & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FRS_TOOLTIP = "Drive Pololu Zumo (flipped right motor) + vitesse";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TITLE = "Zumo - Flip both & speed";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FBS_TOOLTIP = "Pololu Zumo (2 moteurs) + vitesse";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER = "suiveur de ligne";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_TOOLTIP = "se calibre en cherchant une ligne noire, puis se cale dessus";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_HELPURL = "https://www.pololu.com/docs/0J57/7.d";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION = "calibrage manuel du suiveur";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_TOOLTIP = "calibre pendant 10s en exposant les couleurs blanc/noir, puis allume la diode 13";
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_SENSORCALIBRATION_HELPURL = "https://www.pololu.com/product/1419";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TITLE = "Ardumotor";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_TOOLTIP = "ArduMotor Sparkfun Shield A=left B=right";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_HELPURL = "https://www.sparkfun.com/datasheets/DevTools/Arduino/Ardumoto_v13.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUMOTOR_S_TITLE = "Ardumotor & vitesse";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TITLE = "Radio Shack & vitesse";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_TOOLTIP = "Radio Shack Make: A&B moteurs & vitesse";
Blockly.Msg.ROBOTS_MOTORS_RADIOSHACK_S_HELPURL = "http://demandware.edgesuite.net/aasr_prd/on/demandware.static/Sites-radioshack-Site/Sites-radioshack-Library/default/v1427306427938/Support/ProductManuals/2770168_PM_EN.pdf";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TITLE = "shield Arduino";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_TOOLTIP = "Arduino Shield moteurs A=gauche B=droite";
Blockly.Msg.ROBOTS_MOTORS_ARDUNIO_S_HELPURL = "http://arduino.cc/en/Main/ArduinoMotorShieldR3";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TITLE = "DFRobot & vitesse";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_TOOLTIP = "DFRobot A&B Motors PWM Mode & Speed";
Blockly.Msg.ROBOTS_MOTORS_DFROBOT_S_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_Motor_Shield_(L298N)_(SKU:DRI0009)";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TITLE = "Pololu Drv8835 & vitesse";
Blockly.Msg.ROBOTS_MOTORS_POLOLU8835_S_TOOLTIP = "Pololu Drv8835 & vitesse";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_A = "vitesse moteur A-gauche";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_SPEED_B = "vitesse moteur B-droite";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_A = "Direction-L/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_DIR_PIN_B = "Direction-R/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_A = "PWM/Vitesse-L/A";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PWM_PIN_B = "PWM/Vitesse-R/B";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A1 = "broche A1";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B1 = "broche B1";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_A2 = "broche A2";
Blockly.Msg.ROBOTS_MOTORS_GENERIC_MOTOR_PIN_B2 = "broche B2";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TITLE = "1 time wait - Gen";
Blockly.Msg.ROBOTS_MISC_SETUP_GEN_TOOLTIP = "1 time wait button in setup) - INPUT & wait for HIGH";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TITLE = "1 Time wait - Zumo";
Blockly.Msg.ROBOTS_MISC_SETUP_ZUMO_TOOLTIP = "1 time wait button (in setup) - INPUT_PULLUP & wait for LOW)";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TITLE = "IR moniteur série";
Blockly.Msg.ROBOTS_MISC_IR_DECODE_TOOLTIP = "IR Decoder - users Serial Monitor (and library)";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TITLE = "IR Decode Blink";
Blockly.Msg.ROBOTS_MISC_IR_GET_BLINK_TOOLTIP = "IR Decode LED Tester (requires library)";
Blockly.Msg.ROBOTS_MISC_IR_GET_TITLE = "IR # Get";
Blockly.Msg.ROBOTS_MISC_IR_GET_TOOLTIP = "Produces IR code use case statement not IFs (requires library)";
Blockly.Msg.ROBOTS_MISC_LED_PIN = "LED sur la broche";
Blockly.Msg.ROBOTS_MISC_IR_CODE = "IR Code";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TITLE = "Capteurs distance à ultrasons";
Blockly.Msg.ROBOTS_MISC_FOUR_PIN_RANGER_TOOLTIP = "renvoie la distance mesurée";
Blockly.Msg.ROBOTS_MISC_TRIGGER_PIN = "Trigger est sur la broche";
Blockly.Msg.ROBOTS_MISC_ECHO_PIN = "Echo est sur la broche";
Blockly.Msg.ROBOTS_MISC_IR_SENSOR_PIN = "IR sur la broche";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TITLE = "Zumo Buzzer";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_HELPURL = "https://www.pololu.com/docs/0J18/3";
Blockly.Msg.ROBOTS_MISC_ZUMO_BUZZER_TOOLTIP = "volume = 1-15 durée = 100-4000";
Blockly.Msg.ROBOTS_MISC_BUZZER_DURATION = "durée";
Blockly.Msg.ROBOTS_MISC_BUZZER_VOLUME = "volume";
Blockly.Msg.ROBOTS_MISC_BUZZER_NOTE = "note";

//TECHNOZONE updated July 24th 2015
Blockly.Msg.TECHNOZONE51_TEXT1 = "Le capteur ";
Blockly.Msg.TECHNOZONE51_TEXT2 = "sur la broche ";
Blockly.Msg.TECHNOZONE51_TEXT2bis = "sur la broche Analogique A";
Blockly.Msg.TECHNOZONE51_TEXT3 = " détecte une ligne ?";
Blockly.Msg.TECHNOZONE51_TEXT4 = "Entrée Détecteur de ligne (réf : LIG1)";
Blockly.Msg.TECHNOZONE51_TEXT5 = "le bouton ";
Blockly.Msg.TECHNOZONE51_TEXT6 = " est appuyé ?";
Blockly.Msg.TECHNOZONE51_TEXT7 = "Entrée bouton blanc (réf : BTN1-WHITE)";
Blockly.Msg.TECHNOZONE51_TEXT8 = "Entrée bouton noir (réf : BTN1-BLACK)";
Blockly.Msg.TECHNOZONE51_TEXT9 = "Entrée bouton vert (réf : BTN1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT10 = "Entrée bouton rouge (réf : BTN1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT11 = "le fin de course ";
Blockly.Msg.TECHNOZONE51_TEXT12 = "Entrée Fin de course (réf : SWITCH1 ou SWITCH2)";
Blockly.Msg.TECHNOZONE51_TEXT13 = " détecte un champ magnétique ?";
Blockly.Msg.TECHNOZONE51_TEXT14 = "Entrée Capteur Magnétique (réf : ILS1)";
Blockly.Msg.TECHNOZONE51_TEXT15 = "le capteur de proximité ";
Blockly.Msg.TECHNOZONE51_TEXT16 = " détecte un obstacle ?";
Blockly.Msg.TECHNOZONE51_TEXT17 = "Entrée Détecteur de Proximité (réf : PROXI1)";
Blockly.Msg.TECHNOZONE51_TEXT18 = "la barrière infrarouge ";
Blockly.Msg.TECHNOZONE51_TEXT19 = "Entrée Barrière Infrarouge (réf : BARI1)";
Blockly.Msg.TECHNOZONE51_TEXT20 = " détecte une présence ?";
Blockly.Msg.TECHNOZONE51_TEXT21 = "Entrée Détecteur de Présence (réf : SERVO1 + CMOUV1)";
Blockly.Msg.TECHNOZONE51_TEXT22 = "la position du potentiomètre ";
Blockly.Msg.TECHNOZONE51_TEXT23 = "Entrée potentiomètre (réf : POTAR1)";
Blockly.Msg.TECHNOZONE51_TEXT24 = "la température en C° ";
Blockly.Msg.TECHNOZONE51_TEXT25 = "Entrée Capteur de Température (réf : CTN1)";
Blockly.Msg.TECHNOZONE51_TEXT26 = "la luminosité en Lux ";
Blockly.Msg.TECHNOZONE51_TEXT27 = "Entrée Capteur de Luminosité (réf : LDR1)";
Blockly.Msg.TECHNOZONE51_TEXT28 = "la distance mesurée en cm ";
Blockly.Msg.TECHNOZONE51_TEXT29 = "TRIG sur la broche ";
Blockly.Msg.TECHNOZONE51_TEXT30 = "DIST sur la broche ";
Blockly.Msg.TECHNOZONE51_TEXT31 = "Entrée Sonar Ultrason (réf : SONAR1)";
Blockly.Msg.TECHNOZONE51_TEXT32 = " la LED ";
Blockly.Msg.TECHNOZONE51_TEXT33 = "allume";
Blockly.Msg.TECHNOZONE51_TEXT34 = "éteint";
Blockly.Msg.TECHNOZONE51_TEXT35 = "Sortie led rouge (réf : LED1-RED)";
Blockly.Msg.TECHNOZONE51_TEXT36 = "Sortie led verte (réf : LED1-GREEN)";
Blockly.Msg.TECHNOZONE51_TEXT37 = "Sortie led jaune (réf : LED1-YELLOW)";
Blockly.Msg.TECHNOZONE51_TEXT38 = "le relais ";
Blockly.Msg.TECHNOZONE51_TEXT39 = " à l'état ";
Blockly.Msg.TECHNOZONE51_TEXT40 = "activer";
Blockly.Msg.TECHNOZONE51_TEXT41 = "désactiver";
Blockly.Msg.TECHNOZONE51_TEXT42 = "Sortie Relais de puissance (réf : RELAY1)";
Blockly.Msg.TECHNOZONE51_TEXT43 = "émettre un son";
Blockly.Msg.TECHNOZONE51_TEXT44 = "d'une fréquence (Hz)";
Blockly.Msg.TECHNOZONE51_TEXT45 = "pendant une durée (ms) ";
Blockly.Msg.TECHNOZONE51_TEXT46 = "Sortie Buzzer (réf : LED1-BUZZER1)";
Blockly.Msg.TECHNOZONE51_TEXT47 = "positionne le servo-moteur";
Blockly.Msg.TECHNOZONE51_TEXT48 = "sur l'angle [0~180°]";
Blockly.Msg.TECHNOZONE51_TEXT49 = "Sortie Servo-moteur (réf : SERVO1 + SERVO-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT50 = "l'angle du servo-moteur ";
Blockly.Msg.TECHNOZONE51_TEXT51 = "commande le moteur ";
Blockly.Msg.TECHNOZONE51_TEXT52 = "sur la carte EASYCON1";
Blockly.Msg.TECHNOZONE51_TEXT53 = "sens horaire (VRAI ou FAUX ?)";
Blockly.Msg.TECHNOZONE51_TEXT54 = "vitesse [0~255]";
Blockly.Msg.TECHNOZONE51_TEXT55 = "Commande de deux moteurs CC sur EASYCON1 (réf : EASYCON1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT56 = "sur la carte EASYBOT1";
Blockly.Msg.TECHNOZONE51_TEXT57 = "Commande de deux moteurs CC sur EASYBOT1 (réf : EASYBOT1 + KIT-MOT1)";
Blockly.Msg.TECHNOZONE51_TEXT58 = "de la carte MOT2";
Blockly.Msg.TECHNOZONE51_TEXT59 = " sur les broches";
Blockly.Msg.TECHNOZONE51_TEXT60 = "broche de commande de Direction (DIR)";
Blockly.Msg.TECHNOZONE51_TEXT61 = "broche de commande de la Vitesse (PWM~)";
Blockly.Msg.TECHNOZONE51_TEXT62 = "Carte de commande de deux moteurs CC pour EASYCON1,EASYCON2,EASYBOT1 (réf : MOT2)";
Blockly.Msg.TECHNOZONE51_TEXT63 = "initialiser la carte PAP1 ";
Blockly.Msg.TECHNOZONE51_TEXT64 = "sur le bus I2C";
Blockly.Msg.TECHNOZONE51_TEXT65 = "à l'adresse";
Blockly.Msg.TECHNOZONE51_TEXT66 = "le mode de commande des moteurs est ";
Blockly.Msg.TECHNOZONE51_TEXT67 = "le mode de libération des moteurs est ";
Blockly.Msg.TECHNOZONE51_TEXT68 = "Carte de commande de deux moteurs Pas à Pas pour EASYCON2,EASYBOT1 (réf : PAP1)";
Blockly.Msg.TECHNOZONE51_TEXT69 = "mettre en mouvement continu le moteur ";
Blockly.Msg.TECHNOZONE51_TEXT70 = "de la carte PAP1";
Blockly.Msg.TECHNOZONE51_TEXT71 = "mettre en mouvement relatif le moteur ";
Blockly.Msg.TECHNOZONE51_TEXT72 = "nombre de pas";
Blockly.Msg.TECHNOZONE51_TEXT73 = "moteurs en mouvement ?";
Blockly.Msg.TECHNOZONE51_TEXT74 = "initialiser l'écran LCD";
Blockly.Msg.TECHNOZONE51_TEXT75 = "à l'adresse I2C";
Blockly.Msg.TECHNOZONE51_TEXT76 = "nombre de colonne(s)";
Blockly.Msg.TECHNOZONE51_TEXT77 = "nombre de ligne(s)";
Blockly.Msg.TECHNOZONE51_TEXT78 = "activer le rétro-éclairage ?";
Blockly.Msg.TECHNOZONE51_TEXT79 = "activer le curseur ?";
Blockly.Msg.TECHNOZONE51_TEXT80 = "faire clignoter le curseur ?";
Blockly.Msg.TECHNOZONE51_TEXT81 = "Initialise l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT82 = "sur l'écran LCD";
Blockly.Msg.TECHNOZONE51_TEXT83 = "activer le rétroéclairage";
Blockly.Msg.TECHNOZONE51_TEXT84 = "désactiver le rétroéclairage";
Blockly.Msg.TECHNOZONE51_TEXT85 = "activer le curseur";
Blockly.Msg.TECHNOZONE51_TEXT86 = "désactiver le curseur";
Blockly.Msg.TECHNOZONE51_TEXT87 = "faire clignoter le curseur";
Blockly.Msg.TECHNOZONE51_TEXT88 = "arrêter le clignotement du curseur";
Blockly.Msg.TECHNOZONE51_TEXT89 = "activer l'affichage";
Blockly.Msg.TECHNOZONE51_TEXT90 = "désactiver l'affichage";
Blockly.Msg.TECHNOZONE51_TEXT91 = "Fonction spéciales de l'écran LCD (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT92 = "effacer l'écran LCD";
Blockly.Msg.TECHNOZONE51_TEXT93 = "Effacer l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT94 = "écrire sur l'écran LCD";
Blockly.Msg.TECHNOZONE51_TEXT95 = "à partir de la position";
Blockly.Msg.TECHNOZONE51_TEXT96 = "colonne [0..MAXCOL-1]";
Blockly.Msg.TECHNOZONE51_TEXT97 = "ligne [0..MAXLIG-1]";
Blockly.Msg.TECHNOZONE51_TEXT98 = "le texte";
Blockly.Msg.TECHNOZONE51_TEXT99 = "Ecrire sur l'écran LCD (réf : LCD1)";
Blockly.Msg.TECHNOZONE51_TEXT100 = "initialise la télécommande";
Blockly.Msg.TECHNOZONE51_TEXT101 = "Initialise la télécommande (réf : IRF1 + (TELEC1 ou TELEC2))";
Blockly.Msg.TECHNOZONE51_TEXT102 = "vide le tampon de réception de la télécommande";
Blockly.Msg.TECHNOZONE51_TEXT103 = "Vide le tampon de réception de la télécommande (réf :IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT104 = "une touche de la télécommande a été appuyée ?";
Blockly.Msg.TECHNOZONE51_TEXT105 = "Teste si une touche de la télécommande a été appuyée (réf : IRF1)";
Blockly.Msg.TECHNOZONE51_TEXT106 = "la touche";
Blockly.Msg.TECHNOZONE51_TEXT107 = "de la télécommande";
Blockly.Msg.TECHNOZONE51_TEXT108 = "a été pressé ?";
Blockly.Msg.TECHNOZONE51_TEXT109 = "Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC2)";
Blockly.Msg.TECHNOZONE51_TEXT110 = "Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC1)";
Blockly.Msg.TECHNOZONE51_TEXT111 = "initialiser la console IHM";
Blockly.Msg.TECHNOZONE51_TEXT112 = "par le module Bluetooth";
Blockly.Msg.TECHNOZONE51_TEXT113 = "initialise la console IHM ( réf : BT1 ) ";
Blockly.Msg.TECHNOZONE51_TEXT114 = "la console IHM est connectée ?";
Blockly.Msg.TECHNOZONE51_TEXT115 = "Teste si l'Interface IHM est connectée ( réf : BT1 )";
Blockly.Msg.TECHNOZONE51_TEXT116 = "une valeur a changée sur la console IHM ?";
Blockly.Msg.TECHNOZONE51_TEXT117 = "teste s'il y a un changement sur la console IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT118 = "initialiser la DEL ";
Blockly.Msg.TECHNOZONE51_TEXT119 = "de la console IHM";
Blockly.Msg.TECHNOZONE51_TEXT120 = "et afficher le texte";
Blockly.Msg.TECHNOZONE51_TEXT121 = "Définition d'une LED IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT122 = "activer la DEL ";
Blockly.Msg.TECHNOZONE51_TEXT123 = "avec la couleur";
Blockly.Msg.TECHNOZONE51_TEXT124 = "aucune";
Blockly.Msg.TECHNOZONE51_TEXT125 = "rouge";
Blockly.Msg.TECHNOZONE51_TEXT126 = "orange";
Blockly.Msg.TECHNOZONE51_TEXT127 = "jaune";
Blockly.Msg.TECHNOZONE51_TEXT128 = "vert";
Blockly.Msg.TECHNOZONE51_TEXT129 = "bleu";
Blockly.Msg.TECHNOZONE51_TEXT130 = "Activer une led IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT131 = "initialiser le bouton ";
Blockly.Msg.TECHNOZONE51_TEXT132 = "Définition d'un bouton IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT133 = "Lecture de l'état d'un bouton IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT134 = "initialiser l'interrupteur ";
Blockly.Msg.TECHNOZONE51_TEXT135 = "Définition d'un interrupteur IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT136 = "activer";
Blockly.Msg.TECHNOZONE51_TEXT137 = "désactiver";
Blockly.Msg.TECHNOZONE51_TEXT138 = " l'interrupteur ";
Blockly.Msg.TECHNOZONE51_TEXT139 = "Active un interrupteur de la console IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT140 = " est actif ?";
Blockly.Msg.TECHNOZONE51_TEXT141 = "Teste l'état d'un interrupteur IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT142 = "initialiser le potentiomètre ";
Blockly.Msg.TECHNOZONE51_TEXT143 = "avec un diviseur de";
Blockly.Msg.TECHNOZONE51_TEXT144 = "valeur mini";
Blockly.Msg.TECHNOZONE51_TEXT145 = "valeur maxi";
Blockly.Msg.TECHNOZONE51_TEXT146 = "position";
Blockly.Msg.TECHNOZONE51_TEXT147 = "Définition d'un potentiomètre IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT148 = "la valeur du potentiomètre ";
Blockly.Msg.TECHNOZONE51_TEXT149 = "Lecture de la position d'un potentiomètre IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT150 = "initialise la jauge ";
Blockly.Msg.TECHNOZONE51_TEXT151 = "graduations 'min max pas division'";
Blockly.Msg.TECHNOZONE51_TEXT152 = "titre de la jauge 'titre;unité'";
Blockly.Msg.TECHNOZONE51_TEXT153 = "Défifition d'une jauge IHM (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT154 = "positionner la jauge ";
Blockly.Msg.TECHNOZONE51_TEXT155 = "sur la valeur";
Blockly.Msg.TECHNOZONE51_TEXT156 = "nombre de décimales";
Blockly.Msg.TECHNOZONE51_TEXT157 = "initialiser le module Bluetooth";
Blockly.Msg.TECHNOZONE51_TEXT158 = "Initialise la liaison Bluetooth ( réf : BT1 ) ";
Blockly.Msg.TECHNOZONE51_TEXT159 = "un message Bluetooth est disponible ?";
Blockly.Msg.TECHNOZONE51_TEXT160 = "Teste si un message bluetooth est disponible (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT161 = "le message Bluetooth reçu";
Blockly.Msg.TECHNOZONE51_TEXT162 = "Lire le message bluetooth reçu (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT163 = "envoyer sur le bluetooth le message ";
Blockly.Msg.TECHNOZONE51_TEXT164 = "Envoyer un message sur la liaison Bluetooth (réf : BT1)";
Blockly.Msg.TECHNOZONE51_TEXT165 = "connecté aux broches";
Blockly.Msg.TECHNOZONE51_TEXT166 = "codes de la phrase à prononcer : ";
Blockly.Msg.TECHNOZONE51_TEXT167 = "Synthétiseur vocal";
Blockly.Msg.TECHNOZONE51_TEXT168 = "(restrictions d'usage : clic droit -> aide)";
Blockly.Msg.TECHNOZONE51_TEXT169 = "vitesse [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT170 = "hauteur [0..1023] :";
Blockly.Msg.TECHNOZONE51_TEXT171 = "distortion [0..1023] :";

//added july 17th 2015
Blockly.Msg.BQ_PIN = "sur la broche";
Blockly.Msg.BQ_PIN_DIGITAL = "sur la broche Numérique";
Blockly.Msg.BQ_PIN_PWM = "sur la broche PWM~";
Blockly.Msg.BQ_PIN_ANALOG = "sur la broche Analogique";
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
Blockly.Msg.lp2i_mp3_init_Pin_Rx = "Broche Rx =";
Blockly.Msg.lp2i_mp3_init_Pin_Tx = "Broche Tx (non utilisée) =";
Blockly.Msg.lp2i_mp3_init_Pin_Busy = "Broche Busy =";
Blockly.Msg.lp2i_mp3_init_Volume = "Volume (30 max) =";

Blockly.Msg.lp2i_mp3 = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_File = "Numéro du fichier mp3 à lire =";
Blockly.Msg.lp2i_mp3_Wait = "Attendre fin lecture en cours ? =";

Blockly.Msg.lp2i_mp3_Volume = "Audio DFPlayer Mini MP3";
Blockly.Msg.lp2i_mp3_Volume_Input = "Volume (30 max) =";

Blockly.Msg.lp2i_u8g_draw_string = "Afficheur OLED I2C";
Blockly.Msg.lp2i_u8g_draw_string_Text = "texte à afficher =";
Blockly.Msg.lp2i_u8g_draw_string_X = "colonne x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "ligne y (63 max) =";

Blockly.Msg.lp2i_u8g_draw_4strings = "Afficheur OLED I2C";;
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "textes à afficher :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "ligne 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "ligne 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "ligne 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "ligne 4 =";

Blockly.Msg.lp2i_u8g_print = "Afficheur OLED I2C";
Blockly.Msg.lp2i_u8g_print_N = "Nombre à afficher =";
Blockly.Msg.lp2i_u8g_print_X = "colonne x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "ligne y (63 max) =";

Blockly.Msg.lp2i_u8g_4draw_print = "Afficheur OLED I2C";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "à afficher :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "ligne 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Nombre 1 (en fin de ligne) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "ligne 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Nombre 2 (en fin de ligne) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "ligne 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Nombre 3 (en fin de ligne) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "ligne 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Nombre 4 (en fin de ligne) ="

Blockly.Msg.lp2i_ledRGB_WS2812B_init = "Led RGB WS2812B Init";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin = "Broche =";
Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels = "Nombre de pixels =";
Blockly.Msg.lp2i_ledRGB_WS2812B_DEFAULT_NAME = "DEL_RVB";
Blockly.Msg.lp2i_ledRGB_WS2812B_Brightness = "Luminosité =";


Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor = "Led RGB WS2812B. Envoyer couleur :";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red = "Rouge (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green = "Vert (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue = "Bleu (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number = "pour le pixel numéro (à partir de 0) =";

Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_LCD_KeyPad_Shield_(SKU:_DFR0009)";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "écran LCD Keypad Shield";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "écrire sur la ligne 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "écrire sur la ligne 2";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT3 = "pendant (ms)";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "écris le texte sur un écran LCD série de 2 lignes sur 16 caractères";

//SHIELD ADAFRUIT
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - Moteur CC";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = "vitesse [0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "avant";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "arrière";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - moteur Pas-à-pas";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "broche";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "pas par tour";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "vitesse (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "nombre de pas";

Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1_MOT1 = "v1 - Joystick + moteurs";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY_MOT2 = "v2 - Joystick + moteurs";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY1 = "v1 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_JOY2 = "v2 - Joystick";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_X = "entrée (x)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ENTREE_Y = "entrée (y)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_NEUTRE = "zone neutre";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "moteur DC 1";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "moteur DC 2";

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
Blockly.Msg.multifunction_notone_INPUT = "stopper le son du buzzer intégré";
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
Blockly.Msg.ROBUNO_HELPURL = "http://www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html";

//Added March 26th 2016
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

//Added April 19th 2016
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
Blockly.Msg.MBOT_RGB_ONBOARD_INTRO = "colorier les DEL RGB";
Blockly.Msg.MBOT_RGB_ONBOARD_RED = "rouge (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_BLUE = "bleu (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_GREEN = "vert (255 max) =";
Blockly.Msg.MBOT_RGB_ONBOARD_PIXEL_NUMBER = "choix ";
Blockly.Msg.MBOT_RGB_ONBOARD_FIELDDROPDOWN = [["0 (les deux leds)", "0"], ["1 (led gauche)", 1], ["2 (led droite)", 2]];
Blockly.Msg.MBOT_BUZZER_INTRO = "jouer un son";
Blockly.Msg.MBOT_BUZZER_TONE = "note";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_TONE = [["A", "27.5"], ["B", "30.868"], ["C", "16.352"], ["D", "18.354"], ["E", "20.602"], ["F", "21.827"], ["G", "24.5"]];
Blockly.Msg.MBOT_BUZZER_OCTAVE = "#";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_OCTAVE = [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]];
Blockly.Msg.MBOT_BUZZER_DELAY = "durée";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_DELAY = [["un demi", "500"], ["un quart", "250"], ["un huitième", "125"], ["tout", "1000"], ["double", "2000"], ["zéro", "0"]];

//Added May 1rst 2016
Blockly.Msg.ROMEO_HELPURL = "http://www.dfrobot.com/wiki/index.php/Romeo_V2-All_in_one_Controller_%28R3%29_%28SKU:DFR0225%29";
Blockly.Msg.ROMEO3_MOTOR1_SENS = "moteur M1 : sens";
Blockly.Msg.ROMEO3_MOTOR2_SENS = "moteur M2 : sens";
Blockly.Msg.ROMEO3_MOTOR_SENS = "1 : avancer | 0 : reculer";
Blockly.Msg.ROMEO3_MOTOR1_PWM = "moteur M1 : puissance (0~255)";
Blockly.Msg.ROMEO3_MOTOR2_PWM = "moteur M2 : puissance (0~255)";
Blockly.Msg.ROMEO3_MOTOR_TOOLTIP = "gestion individuelle des moteurs";
Blockly.Msg.ROMEO3_SWITCH = "appui sur le bouton";
Blockly.Msg.ROMEO_SWITCH_FIELDDROPDOWN = [["S1", "0"], ["S2", "147"], ["S3", "333"], ["S4", "510"], ["S5", "745"], ["aucun", "1023"]];
Blockly.Msg.ROMEO3_SWITCH_TOOLTIP = "Vérifier le switch S1-S5 !!! Lire la valeur sur l'entrée Analogique A0 : 0 pour S1, 147 pour S2, 333 pour S3, 510 pour S4, 745 pour S5, 1023 si aucun";


//Added august 20th 2016
Blockly.Msg.FLYCAM_SWITCH_HELPURL = "http://tic.technologiescollege.fr/wiki/doku.php/fr/arduino/flycam";
Blockly.Msg.FLYCAM_SWITCH_TEXT = "changer le mode";
Blockly.Msg.FLYCAM_SWITCH_INPUT = "de la Flycam sur la broche n°";
Blockly.Msg.FLYCAM_SWITCH_TOOLTIP = "patienter car la commande doit se fixer pendant 3s puis une pause de 1s avant la suite";
Blockly.Msg.FLYCAM_RECORD_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_RECORD_TEXT = "lancer la capture";
Blockly.Msg.FLYCAM_RECORD_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_RECORD_TOOLTIP = "envoi d'une impulsion d'1s de type servo=180°";
Blockly.Msg.FLYCAM_STOP_HELPURL = Blockly.Msg.FLYCAM_SWITCH_HELPURL;
Blockly.Msg.FLYCAM_STOP_TEXT = "arrêter la capture";
Blockly.Msg.FLYCAM_STOP_INPUT = Blockly.Msg.FLYCAM_SWITCH_INPUT;
Blockly.Msg.FLYCAM_STOP_TOOLTIP = "envoi d'une impulsion d'1s de type servo=0°";


//Added august 23th 2016
Blockly.Msg.MHK_ULTRASON_HELPURL = "http://www.gotronic.fr/art-module-de-detection-us-hc-sr04-20912.htm";
Blockly.Msg.MHK_ULTRASON1 = "la distance mesurée en cm ";
Blockly.Msg.MHK_ULTRASON2 = "TRIG sur la broche ";
Blockly.Msg.MHK_ULTRASON3 = "ECHO sur la broche ";
Blockly.Msg.MHK_ULTRASON_TOOLTIP = "Détection d'obstacle par ultrason";
Blockly.Msg.MHK_MOTEUR_VIBREUR_HELPURL = "http://www.gotronic.fr/art-vibreur-miniature-vm1201-20685.htm";
Blockly.Msg.MHK_MOTEUR_VIBREUR1 = " faire vibrer le moteur sur la broche";
Blockly.Msg.MHK_MOTEUR_VIBREUR2 = "à la valeur";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_HELPURL = "http://www.robotshop.com/eu/fr/capteur-electrique-muscle-myoware.html";
Blockly.Msg.MHK_CAPTEUR_MYOWARE1 = "la valeur lue par le capteur myoware ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE2 = "sur la broche analogique ";
Blockly.Msg.MHK_CAPTEUR_MYOWARE_TOOLTIP = "myoware capteur musculaire";
Blockly.Msg.MHK_SERVO_MOTEUR1 = "positionne le servo-moteur";
Blockly.Msg.MHK_SERVO_MOTEUR2 = "de la broche";
Blockly.Msg.MHK_SERVO_MOTEUR3 = "à un angle de [0~180°]";
Blockly.Msg.MHK_SERVO_MOTEUR_TOOLTIP = "Sortie Servo-moteur (réf : MINI-SERVO)";

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

Blockly.Msg.STEPPER_DEFAULT_NAME = "moteur_PaP";
Blockly.Msg.STEPPER_MOTOR = "moteur pas à pas";
Blockly.Msg.STEPPER_PIN1 = "broche 1 :";
Blockly.Msg.STEPPER_PIN2 = "broche 2 :";
Blockly.Msg.STEPPER_REVOLVS = "nombre de pas par tour";
Blockly.Msg.STEPPER_SETUP = "définis le";
Blockly.Msg.STEPPER_SETUP_TIP = "Configures a stepper motor pinout and other settings.";
Blockly.Msg.STEPPER_SPEED = "vitesse (tr/min) :";
Blockly.Msg.STEPPER_STEP = "avancer le moteur PàP";
Blockly.Msg.STEPPER_STEPS = "pas";
Blockly.Msg.STEPPER_STEP_TIP = "Turns the stepper motor a specific number of steps.";
Blockly.Msg.STEPPER_STEP_WARN1 = "A STEPPER configuration block must be added to use this block!";
Blockly.Msg.STEPPER_STEP_WARN2 = "A Name input must be added to the Stepper configuration block!";
Blockly.Msg.STEPPER_STEP_WARN3 = "Selected stepper does not exist any more, please select a new one.";

//******** Esus Board (Mace Robotics)
Blockly.Msg.ESUS_EsusBoard_init = "initialisation carte Esus";
Blockly.Msg.ESUS_MOTOR1_SPEED = "moteur 1, vitesse :";
Blockly.Msg.ESUS_MOTOR1_DIRECTION = "sens rotation :";
Blockly.Msg.ESUS_MOTOR2_SPEED = "moteur 2, vitesse :";
Blockly.Msg.ESUS_MOTOR2_DIRECTION = "sens rotation :";
Blockly.Msg.ESUS_ANALOG = "entrée analogique :";
Blockly.Msg.ESUS_WIFI_SSID = "configuration WiFi mode infra  SSID :";
Blockly.Msg.ESUS_WIFI_PASSWORD = "mot de passe";
Blockly.Msg.ESUS_WIFI_IP = "configuration adresse WiFi :";
Blockly.Msg.ESUS_WIFI_READ_STREAM = "lecture donnée WiFi";
Blockly.Msg.ESUS_WIFI_CONTAIN2 = "contient";
Blockly.Msg.ESUS_WIFI_CONTAIN = "donnée WiFi";
Blockly.Msg.ESUS_WIFI_DATA_AVAILABLE = "donnée WiFi disponible ?";
Blockly.Msg.ESUS_WIFI_AP = "configuration WiFi mode AP SSID:";
Blockly.Msg.ESUS_WIFI_AP_IP = "adresse IP :";
Blockly.Msg.ESUS_WIFI_SEND_STREAM = "envoyer donnée WiFi (texte)";
Blockly.Msg.ESUS_WIFI_SEND_FLOAT_STREAM = "envoyer donnée WiFi (nombre)";


//******** APDS9960 couleurs et mouvements
Blockly.Msg.APDS9960_MISC_HELPURL = "https://www.sparkfun.com/products/12787";
Blockly.Msg.APDS9960_INIT_TITLE = "initialisation du capteur APDS-9960";
Blockly.Msg.APDS9960_INIT_TOOLTIP = "test pour se calibrer sur la luminosité ambiante";
Blockly.Msg.APDS9960_TEST_TITLE = "test du capteur";
Blockly.Msg.APDS9960_TEST_TOOLTIP = "renvoie FAUX en cas d'erreur matérielle";
Blockly.Msg.APDS9960_AMBIENT_TITLE = "luminosité ambiante";
Blockly.Msg.APDS9960_AMBIENT_TOOLTIP = "renvoie une valeur pour la quantité de lumière mesurée";
Blockly.Msg.APDS9960_RED_TITLE = "code RVB de Rouge (0~255)";
Blockly.Msg.APDS9960_GREEN_TITLE = "code RVB de Vert (0~255)";
Blockly.Msg.APDS9960_BLUE_TITLE = "code RVB de Bleu (0~255)";
Blockly.Msg.APDS9960_COLORSENSOR_TOOLTIP = "renvoie une valeur codée sur 10 bits pour le mélange RVB classique";

//******** pbra 20160613 L298N
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_TITLE = "L298N Contrôleur Moteur";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_INIT_TITLE = "L298N Contrôleur Moteur Init";
Blockly.Msg.ROBOTS_MOTORS_L298N_ID = "Identifiant"
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_SPEED = "Vitesse";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN1 = "Broche IN1 (direction)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_IN2 = "Broche IN2 (direction)";
Blockly.Msg.ROBOTS_MOTORS_L298N_MOTOR_PIN_EN = "Broche EN (pwm)";
Blockly.Msg.ROBOTS_MOTORS_L298N_STOP = "arrêt";
Blockly.Msg.ROBOTS_MOTORS_L298N_FORWARD = "avance";
Blockly.Msg.ROBOTS_MOTORS_L298N_BACKWARD = "recul";
Blockly.Msg.ROBOTS_MOTORS_L298N_BRAKE = "frein";
Blockly.Msg.ROBOTS_MOTORS_L298N_INIT_TOOLTIP = "L298N, bloc d'initialisation (1 par moteur)";
Blockly.Msg.ROBOTS_MOTORS_L298N_TOOLTIP = "Bloc L298N, utiliser le même id que dans le bloc d'initialisation";

//******** pbra 20160607 PinMode
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_HELPURL = "https://www.arduino.cc/en/Reference/PinMode";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT1 = "Changer le mode de fonctionnement de la broche";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT2 = "à";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_DROPDOWN = [["ENTREE", "INPUT"], ["SORTIE", "OUTPUT"], ["ENTREE_PULLUP", "INPUT_PULLUP"]];
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP = "Configurer la broche spécifée pour fonctionner comme une entrée ou une sortie";

//******** Bluetooth Electronics example http://www.keuwl.com/electronics.html
Blockly.Msg.BT_ELEC_Init_HELPURL = "https://play.google.com/store/apps/details?id=com.keuwl.arduinobluetooth&hl=fr";
Blockly.Msg.BT_ELEC_init_text = "photographier le QR code pour télécharger l'app Android :";
Blockly.Msg.BT_ELEC_TOOLTIP = "téléchargement de l'application pour Android";
Blockly.Msg.BT_ELEC_LED_brightness_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/02-pwm-leds/";
Blockly.Msg.BT_ELEC_LED_brightness_text = "contrôle de la luminosité de 3 DEL";
Blockly.Msg.BT_ELEC_LED_brightness_TOOLTIP = "voir la démo dans l'aide";
Blockly.Msg.BT_ELEC_RC_car_HELPURL = "http://www.keuwl.com/electronics/rduino/bluet/01-rc-car/";
Blockly.Msg.BT_ELEC_RC_car_text = "télécommande d'un véhicule par le téléphone";
Blockly.Msg.BT_ELEC_RC_car_TOOLTIP = "voir la démo dans l'aide";

//******** jfblocks
Blockly.Msg.jfblocks_Init_HELPURL = "http://jfbegot.free.fr";
Blockly.Msg.jfblocks_TOOLTIP = "pour décoder des trames Bluetooth Electronics";
Blockly.Msg.jfblocks_last_value_tooltip = "valeur reçue dans la dernière trame décodée";
Blockly.Msg.jfblocks_last_value_titre = "dernière valeur";
Blockly.Msg.jfblocks_decode_tooltip = "décode une trame recue au format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_decode_titre = "quand une trame est reçue";
Blockly.Msg.jfblocks_action_tooltip = "à placer dans 'quand une trame est reçue'\nle caractère de fin peut être tout sauf numérique";
Blockly.Msg.jfblocks_action_start_code = "si le caractère de début vaut";
Blockly.Msg.jfblocks_action_do = "alors faire";
Blockly.Msg.jfblocks_tx_tooltip = "envoie une trame au format:\n<start char><nombre en ASCII><end char>\nex: D145F";
Blockly.Msg.jfblocks_tx_titre = "émettre une trame";
Blockly.Msg.jfblocks_tx_start_code = "Start Code";
Blockly.Msg.jfblocks_tx_data = "donnée";
Blockly.Msg.jfblocks_tx_end_code = "End Code";

//******** collyc
Blockly.Msg.COLLYC_TOUCHE_HELPURL = 'https://www.adafruit.com/products/419';
Blockly.Msg.COLLYC_TOUCHE_TEXT = "Touche appuyée";
Blockly.Msg.COLLYC_TOUCHE_LIGNES = "Lignes";
Blockly.Msg.COLLYC_TOUCHE_TOOLTIP = "Retourne la touche appuyée ou une chaine vide si aucune";
Blockly.Msg.COLLYC_TOUCHE_LIGNE1 = "Ligne 1";
Blockly.Msg.COLLYC_TOUCHE_LIGNE2 = "Ligne 2";
Blockly.Msg.COLLYC_TOUCHE_LIGNE3 = "Ligne 3";
Blockly.Msg.COLLYC_TOUCHE_LIGNE4 = "Ligne 4";
Blockly.Msg.COLLYC_TOUCHE_COLONNE1 = "Colonne 1";
Blockly.Msg.COLLYC_TOUCHE_COLONNE2 = "Colonne 2";
Blockly.Msg.COLLYC_TOUCHE_COLONNE3 = "Colonne 3";


//******** Sharp IR https://github.com/guillaume-rico/SharpIR

Blockly.Msg.SHARP_IR_DEFAULT_NAME = 'TELEM';
Blockly.Msg.Sharp_IR_HELPURL = 'https://github.com/guillaume-rico/SharpIR';
Blockly.Msg.Sharp_IR_MODEL = "modèle";
Blockly.Msg.Sharp_IR_ATTACH1 = 'attacher un télémètre';
Blockly.Msg.Sharp_IR_ATTACH2 = 'avec pour identifiant';
Blockly.Msg.Sharp_IR_INPUT1 = 'la distance mesurée par le télémètre';
Blockly.Msg.Sharp_IR_INPUT2 = 'sur la broche Analogique';
Blockly.Msg.Sharp_IR_TOOLTIP1 = 'uniquement sur une entrée Analogique';
Blockly.Msg.Sharp_IR_TOOLTIP2 = 'distance mesurée en cm, penser à temporiser entre 2 mesures';


//******** Matrix Neopixel DEL RGB 8 x 8 http://smartduinos.com/arduino-tutorial-8x8-rgb-led-matrix-with-ws8212-driver-with-arduino-uno-from-banggood-com/

Blockly.Msg.MatrixLED_WS2812B_init = "Matrice DEL RGB : initialisation";
Blockly.Msg.MatrixLED_WS2812B_clean = "Eteindre la matrice";
Blockly.Msg.MatrixLED_WS2812B_init_Pin = "sur la broche =";
Blockly.Msg.MatrixLED_WS2812B_init_Number_of_Pixels = "Nombre de pixels =";
Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME = "MATRICE_RVB";
Blockly.Msg.MatrixLED_WS2812B_setBrightness = "Sur la matrice DEL RGB";
Blockly.Msg.MatrixLED_WS2812B_Brightness = "régler la luminosité à";
Blockly.Msg.MatrixLED_WS2812B_URL = "http://smartduinos.com/arduino-tutorial-8x8-rgb-led-matrix-with-ws8212-driver-with-arduino-uno-from-banggood-com/";

Blockly.Msg.MatrixLED_WS2812B_setPixelColor = "Sur la matrice DEL RGB";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red = "régler le rouge (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green = "régler le vert (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue = "régler le bleu (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number = "du pixel numéro (à partir de 0) =";


//******** Storage : SD card + EEPROM
https://www.arduino.cc/en/Reference/EEPROM

Blockly.Msg.STORAGE_WRITE_SD_FILE = "Carte SD, enregistrer sous ";
Blockly.Msg.STORAGE_SD_DATA = "la donnée";
Blockly.Msg.STORAGE_SD_NEWLINE = "avec un saut de ligne ?";
Blockly.Msg.STORAGE_EEPROM_WRITE_LONG = "EEPROM écrire à l'adresse";
Blockly.Msg.STORAGE_DATA_LONG = "la donnée (long int)";
Blockly.Msg.STORAGE_EEPROM_READ_LONG = "EEPROM - donnée (long) lue à l'adresse";
Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM écrire à l'adresse";
Blockly.Msg.STORAGE_DATA_BYTE = "la donnée (byte)";
Blockly.Msg.STORAGE_EEPROM_READ_BYTE = "EEPROM - donnée (byte) lue à l'adresse";