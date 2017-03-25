'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');



//**** AUTODUINO ************************************************************************************

// definition of the categories
Blockly.Msg.CAT_AUTODUINO = "Autoduino";
Blockly.Msg.CAT_AUTODUINO_IN = "capteurs";
Blockly.Msg.CAT_AUTODUINO_OUT = "actionneurs";
Blockly.Msg.CAT_AUTODUINO_LCD = "écran LCD";
Blockly.Msg.CAT_AUTODUINO_COMM = "communication";
Blockly.Msg.CAT_AUTODUINO_UTIL = "utile";

// definition of the different target mockups
Blockly.Msg.AUTODUINO_TARGET_AUTODUINO = "Carte Autoduino";
Blockly.Msg.AUTODUINO_TARGET_AUTOLUMI = "Maquette A4 AutoLumi";
Blockly.Msg.AUTODUINO_TARGET_AUTOALARME = "Maquette A4 AutoAlarme";
Blockly.Msg.AUTODUINO_TARGET_PORTAIL_1 = "Maquette A4 Portail 1 ventail";

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
	AutoduinoIn1 = "LDR lumière extérieure";
	AutoduinoIn3 = "BP cuisine";
	AutoduinoIn4 = "BP sanitaires";
	AutoduinoIn5 = "BP1 salon";
	AutoduinoIn6 = "BP2 salon";
	AutoduinoIn7 = "BP entrée";
	AutoduinoIn8 = "PIR présence";

	AutoduinoOut3 = "Lumière cuisine";
	AutoduinoOut4 = "Lumière sanitaires";
	AutoduinoOut5 = "LED sanitaires";
	AutoduinoOut6 = "Lumière salon 1";
	AutoduinoOut7 = "Lumière salon 2";
	AutoduinoOut8 = "Lumière entrée";
}
else if (toolboxId.indexOf('AUTODUINO_TARGET_AUTOALARME') > -1) { // Load AUTODUINO_TARGET_AUTOALARME
	//alert("Load: AUTODUINO_TARGET_AUTOALARME - " + toolboxId);
	AutoduinoIn1 = "ILS cuisine";
	AutoduinoIn2 = "ILS salon";
	AutoduinoIn3 = "ILS porte";
	AutoduinoIn4 = "PIR présence";
	AutoduinoIn5 = "Télémètre ultrason";
	AutoduinoIn6 = "Recepteur IR";

	AutoduinoOut1 = "Signal lumineux";
	AutoduinoOut2 = "Buzzer";
}
else if (toolboxId.indexOf('AUTODUINO_TARGET_PORTAIL_1') > -1) { // Load AUTODUINO_TARGET_PORTAIL_1
	//alert("Load: AUTODUINO_TARGET_PORTAIL_1 - " + toolboxId);
	AutoduinoIn1 = "BP intérieur";
	AutoduinoIn2 = "BP extérieur";
	AutoduinoIn3 = "Fin de course haut";
	AutoduinoIn4 = "Fin de course bas";
	AutoduinoIn5 = "Récepteur IR extérieur";
	AutoduinoIn6 = "Récepteur IR intérieur";

	AutoduinoOut1 = "Signal lumineux";
	AutoduinoOut2 = "Buzzer";
	AutoduinoOut3 = "Emetteur IR extérieur";
	AutoduinoOut4 = "Emetteur IR intérieur";
	AutoduinoOut5 = "Moteur A";
	AutoduinoOut6 = "Moteur B";
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
Blockly.Msg.AUTODUINO_OUT_IN_LED_RGB = [["Interne", "9"], [AutoduinoOut1, "7"], [AutoduinoOut2, "8"], [AutoduinoIn1, "A0"], [AutoduinoIn2, "A1"], [AutoduinoIn3, "A2"], [AutoduinoIn4, "A3"], [AutoduinoIn5, "3"], [AutoduinoIn6, "4"]];


Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE = [["A4 télécommande bleue", "1"]];
Blockly.Msg.AUTODUINO_ONEWIRE_INDEX = [["Capteur 0", "0"],["Capteur 1", "1"],["Capteur 2", "2"],["Capteur 3", "3"],["Capteur 4", "4"],["Capteur 5", "5"],["Capteur 6", "6"],["Capteur 7", "7"],["Capteur 8", "8"],["Capteur 9", "9"],["Capteur 10", "10"]];
Blockly.Msg.AUTODUINO_ONEWIRE_RESOLUTION = [["9 bits", "9"], ["10 bits", "10"], ["11 bits", "11"], ["12 bits", "12"]];

Blockly.Msg.AUTODUINO_FIELDDROPDOWN = [["1 (état haut)", "1"], ["0 (état bas)", "0"]];


Blockly.Msg.AUTODUINO_INOUT_DHT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_C = "de la température °C";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_F = "de la température °F";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_H = "du % d'humidité";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_PIN = "sur la broche n°";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_SENSOR = "mesurée par le capteur ";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TOOLTIP = "les capteurs de type DHT comportent 2 parties : thermistance et capteur d'humidité.";
Blockly.Msg.AUTODUINO_INOUT_DHT_READ_TYPE = "valeur";
Blockly.Msg.AUTODUINO_INOUT_LED_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT1 = "mettre la DEL";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT2 = "sur la broche Numérique";
Blockly.Msg.AUTODUINO_INOUT_LED_INPUT3 = "à l'état";
Blockly.Msg.AUTODUINO_INOUT_LED_TOOLTIP = "active la sortie Digital sur laquelle la DEL est branchée";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_TEXT = "l'état du bouton poussoir";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_BUTTON_TOOLTIP = "entrée numérique classique en lecture";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TEXT = "position de l'encodeur";
Blockly.Msg.AUTODUINO_INOUT_ROT_PUSH_TEXT = "valeur du bouton poussoir";
Blockly.Msg.AUTODUINO_INOUT_ROT_ANGLE_TOOLTIP = "Lecture de position dont le résultat peut être positif ou négatif selon le sens de rotation";
Blockly.Msg.AUTODUINO_INOUT_TILT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_TILT_TEXT = "l'état de l'interrupteur à bascule";
Blockly.Msg.AUTODUINO_INOUT_TILT_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_TILT_TOOLTIP = "Quand le contacteur n'est pas touché, le circuit est ouvert sinon quand le contacteur touche, le circuit est fermé.";
Blockly.Msg.AUTODUINO_INOUT_ILS_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ILS_TEXT = "l'état de l'interrupteur sans contact";
Blockly.Msg.AUTODUINO_INOUT_ILS_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_ILS_TOOLTIP = "Quand l'aimant est éloigné, le circuit est ouvert sinon quand l'aimant est proché, le circuit est fermé.";
Blockly.Msg.AUTODUINO_INOUT_IR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_IR_TEXT = "l'état de l'entrée Infra Rouge";
Blockly.Msg.AUTODUINO_INOUT_IR_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_TYPE_IR_EXPECTED_CODE = "IR code";
Blockly.Msg.AUTODUINO_TYPE_IR_MAX_TIME = "timeout (ms)";
Blockly.Msg.AUTODUINO_TYPE_IR_REMOTE_TEXT = "type de télécommande";
Blockly.Msg.AUTODUINO_INOUT_IR_TOOLTIP = "Quand le capteur reçoit un signal IR, la sortie est active.";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_TEXT1 = "mettre le buzzer ";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_FREQUENCY = " Fréquence (Hz)";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_DURATION = " durant (ms)";
Blockly.Msg.AUTODUINO_INOUT_BUZZER_TOOLTIP = "Emet un son quand un fréquence est générée.";
Blockly.Msg.AUTODUINO_INOUT_RELAY_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT1 = "mettre le relais";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TEXT2 = "à l'état";
Blockly.Msg.AUTODUINO_INOUT_RELAY_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_RELAY_TOOLTIP = "Le relais sert à commander un circuit de puissance, jusqu'à 250V et 10 ampères.";
Blockly.Msg.AUTODUINO_INOUT_TEMP_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT = "la température";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TEXT2 = "la température";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT = "mesurée sur la CTN connectée sur ma broche";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INDEX = "mesurée sur le capteur (DS18x20) N°";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT2 = "connecté sur la broche";
Blockly.Msg.AUTODUINO_INOUT_TEMP_INPUT3 = "avec une resolution de";
Blockly.Msg.AUTODUINO_INOUT_TEMP_TOOLTIP = "renvoie la température ambiante en °C";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TEXT = "l'humidité";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_INPUT = "mesurée sur la broche";
Blockly.Msg.AUTODUINO_INOUT_MOISTURE_TOOLTIP = "renvoie le niveau d'humidité";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_TEXT = "écran LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT1 = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT2 = "écrire sur la ligne 1";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT3 = "écrire sur la ligne 2";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_INPUT4 = "pendant (ms)";
Blockly.Msg.AUTODUINO_INOUT_LCD_PRINT_TOOLTIP = "écris le texte sur un écran LCD série de 2 lignes sur 16 caractères";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_TEXT = "écran LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_STATE = "mettre sur";
Blockly.Msg.AUTODUINO_INOUT_LCD_POWER_TOOLTIP = "éclairage de l'écran LCD on/off";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_TEXT = "écran LCD";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_EFFECT = "écrit avec l'effet";
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_EFFECT_EFFECT = [["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]];
Blockly.Msg.AUTODUINO_INOUT_LCD_EFFECT_TOOLTIP = "Turn LCD power on/off";
Blockly.Msg.AUTODUINO_INOUT_SOUND_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_SOUND_TEXT = "le volume du son";
Blockly.Msg.AUTODUINO_INOUT_SOUND_INPUT = "mesuré sur la broche";
Blockly.Msg.AUTODUINO_INOUT_SOUND_TOOLTIP = "détecte le volume sonore environnant";
Blockly.Msg.AUTODUINO_INOUT_PIR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_PIR_TEXT = "détection d'un mouvement";
Blockly.Msg.AUTODUINO_INOUT_PIR_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_PIR_TOOLTIP = "le capteur renvoie 1 quand il y a un mouvement dans son champ de détection";
Blockly.Msg.AUTODUINO_INOUT_LINE_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LINE_TEXT = "état du suiveur de ligne";
Blockly.Msg.AUTODUINO_INOUT_LINE_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_LINE_TOOLTIP = "renvoie un état logique en fonction de la couleur, blanc ou noir, détectée";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TEXT = "la distance mesurée";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_INPUT = "par le capteur ultrasons sur la broche";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT = "unité";
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.AUTODUINO_INOUT_ULTRASONIC_TOOLTIP = "mesure par écho ultrason";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_TEXT = "moteur sur la carte externe";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT1 = "moteur 1, broche 1";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT2 = "moteur 1, broche 2";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT3 = "moteur 2, broche 1";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_INPUT4 = "moteur 2, broche 2";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_CHOICE = [["stop !", "stop"], ["avance", "forward"], ["à droite", "right"], ["à gauche", "left"], ["recule", "backward"]];
Blockly.Msg.AUTODUINO_INOUT_MOTOR_TOOLTIP = "pilote 2 moteurs à courant continu";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TEXT = "moteur sur le shield autoduino";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_SPEED = "vitesse (0..255)";
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_CHOICE = [["stop !", "stop"], ["avance", "forward"], ["à droite", "right"], ["à gauche", "left"], ["recule", "backward"]];
Blockly.Msg.AUTODUINO_INOUT_MOTOR_BUILTIN_TOOLTIP = "pilote 2 moteurs à courant continu";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TEXT1 = "angle du joystick";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TEXT2 = "de l'axe";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_INPUT = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_AXES = [["x", "x"],  ["y", "y"]];
Blockly.Msg.AUTODUINO_INOUT_JOYSTICK_TOOLTIP = "le joystick renvoie des valeurs comprises entre 0 et 102 pour chacund es 2 axes";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_TEXT = "mettre la DEL RGB à";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_INPUT = "valeur [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR1 = "rouge [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR2 = "vert [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_COLOR3 = "bleu [0~255]";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_PIXEL = "pour le pixel";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_NB_OF_PIXEL = "Nombre de pixels total";
Blockly.Msg.AUTODUINO_INOUT_RGBLED_TOOLTIP = "utilise une smart LED WS2812B RGB";
Blockly.Msg.AUTODUINO_INOUT_BT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM1 = "liaison Bluetooth";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM2 = "sur la broche";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM3 = "nom du périphérique";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM4 = "code secret";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM5 = "envoyer";
Blockly.Msg.AUTODUINO_INOUT_BT_COMM6 = "recevoir";
Blockly.Msg.AUTODUINO_INOUT_BT_TOOLTIP = "Bluetooth V2.0 + EDR esclave. Supporte un seul esclave par carte";
Blockly.Msg.AUTODUINO_INOUT_POT_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_POT_TEXT = "le potentiometre";
Blockly.Msg.AUTODUINO_INOUT_POT_INPUT = "connecté à la broche";
Blockly.Msg.AUTODUINO_INOUT_POT_TOOLTIP = "renvoie la valeur";
Blockly.Msg.AUTODUINO_INOUT_LDR_HELPURL = "http://www.a4.fr/automatisme-et-robotique/modules-autoprog/modules-actionneurs.html";
Blockly.Msg.AUTODUINO_INOUT_LDR_TEXT = "la luminosité";
Blockly.Msg.AUTODUINO_INOUT_LDR_INPUT = "mesurée sur la broche";
Blockly.Msg.AUTODUINO_INOUT_LDR_TOOLTIP = "renvoie le niveau";
Blockly.Msg.AUTODUINO_TEXT74 = "initialiser l'écran LCD";
Blockly.Msg.AUTODUINO_TEXT75 = "à l'adresse I2C";
Blockly.Msg.AUTODUINO_TEXT76 = "nombre de colonne(s)";
Blockly.Msg.AUTODUINO_TEXT77 = "nombre de ligne(s)";
Blockly.Msg.AUTODUINO_TEXT78 = "activer le rétro-éclairage ?";
Blockly.Msg.AUTODUINO_TEXT79 = "activer le curseur ?";
Blockly.Msg.AUTODUINO_TEXT80 = "faire clignoter le curseur ?";
Blockly.Msg.AUTODUINO_TEXT81 = "Initialise l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT82 = "sur l'écran LCD";
Blockly.Msg.AUTODUINO_TEXT83 = "activer le rétroéclairage";
Blockly.Msg.AUTODUINO_TEXT84 = "désactiver le rétroéclairage";
Blockly.Msg.AUTODUINO_TEXT85 = "activer le curseur";
Blockly.Msg.AUTODUINO_TEXT86 = "désactiver le curseur";
Blockly.Msg.AUTODUINO_TEXT87 = "faire clignoter le curseur";
Blockly.Msg.AUTODUINO_TEXT88 = "arrêter le clignotement du curseur";
Blockly.Msg.AUTODUINO_TEXT89 = "activer l'affichage";
Blockly.Msg.AUTODUINO_TEXT90 = "désactiver l'affichage";
Blockly.Msg.AUTODUINO_TEXT91 = "Fonction spéciales de l'écran LCD (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT92 = "effacer l'écran LCD";
Blockly.Msg.AUTODUINO_TEXT93 = "Effacer l'écran LCD sur le bus I2C (réf : LCD1)";
Blockly.Msg.AUTODUINO_TEXT94 = "écrire sur l'écran LCD";
Blockly.Msg.AUTODUINO_TEXT95 = "à partir de la position";
Blockly.Msg.AUTODUINO_TEXT96 = "colonne [0..MAXCOL-1]";
Blockly.Msg.AUTODUINO_TEXT97 = "ligne [0..MAXLIG-1]";
Blockly.Msg.AUTODUINO_TEXT98 = "le texte";
Blockly.Msg.AUTODUINO_TEXT99 = "Ecrire sur l'écran LCD (réf : LCD1)";
Blockly.Msg.AUTODUINO_EDGE_TEXT = "détection ";
Blockly.Msg.AUTODUINO_EDGE_INPUT = "sur l'entrée";
Blockly.Msg.AUTODUINO_EDGE_UP_DOWN = [["front montant", "UP"], ["front descedant", "DOWN"]];


