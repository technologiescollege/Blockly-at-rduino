'use strict';

goog.provide('Blockly.Msg.jp');

goog.require('Blockly.Msg');

Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'empty!';
Blockly.Msg.ARRAY_CREATE_WITH = "要素で作成";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "配列";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "配列ブロック再定義のために追加、削除、並べ替え";
Blockly.Msg.ARRAY_CREATE_WITH_HELPURL = "";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "配列";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "要素";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP = "配列に要素を追加";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "要素で配列を作成";//"Create a array with any number of items."
Blockly.Msg.ARRAY_GETINDEX_AT = "要素を取得";
Blockly.Msg.ARRAY_GETINDEX_AT1 = "要素を取得";
Blockly.Msg.ARRAY_GETINDEX_AT2 = "番地";
Blockly.Msg.ARRAY_GETINDEX_HELPURL = "";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "配列";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP = "";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1="リストまたは配列に保存されている値を返します";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2="選択したタイプのリストまたは配列を作成しました";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3="指定された値でリストまたは配列の要素を修正します";
Blockly.Msg.ARRAY_CREATE = "宣言 ";
Blockly.Msg.ARRAY_TAILLE = "要素数";
Blockly.Msg.ARRAY_CONTIENT = "要素";
Blockly.Msg.ARRAY_LIST = "リスト";
Blockly.Msg.ARRAY_ARRAY = "配列";
Blockly.Msg.ARRAY_fixe = "指定した場所の要素を変更";
Blockly.Msg.ARRAY_DECLARE_NAME = "配列を作成";
Blockly.Msg.ARRAY_DECLARE_TYPE = "タイプ";
Blockly.Msg.ARRAY_DECLARE_SIZE = "要素数";
Blockly.Msg.ARRAY_DECLARE_TOOLTIP = "指定したタイプと要素数で配列を作成";
Blockly.Msg.ARRAY_MODIFY_INDICE = "セット　要素番号";
Blockly.Msg.ARRAY_MODIFY_NAME = "配列";
Blockly.Msg.ARRAY_MODIFY_VALUE = "値";
Blockly.Msg.ARRAY_MODIFY_TOOLTIP = "配列の要素に値を設定";

//ESK 6/13/2015 SWITCH CASE
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "ケースブロックに条件を追加";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "「もし」ブロックに終端条件を追加";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "「もし」ブロック再定義のために追加、削除、並べ替え";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "分岐 (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "デフォルト";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "ケース";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "分岐 (変数)";//"Switch (var)"
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "もし値が真なら、構文を実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "もし値が真なら、最初のブロックを実行、そうでなければ2番目のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行 もし両方とも真でなければ、最後のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "追加するために左からここにドラッグ";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "ケース　ブレイク　実行を追加";//"Add additional case break do"
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP ="デフォルトのアクションを追加";//"Add optional default action"

Blockly.Msg.TEXT_CHAR_TOOLTIP = "１バイトの文字";//"character value that takes up 1 byte of memory"
Blockly.Msg.TEXT_CHAR_HELPURL = "https://www.arduino.cc/reference/en/language/variables/data-types/string/";
Blockly.Msg.TEXT_COMPARE_STRING_HELPURL = "";
Blockly.Msg.TEXT_COMPARE_STRING_TEXT = "文字列の比較: ";//"Comparison of the two chains: "
Blockly.Msg.TEXT_COMPARE_STRING_TEXT2 = " = ";
Blockly.Msg.TEXT_COMPARE_STRING_TOOLTIP = "２つの文字列が一致するかどうか";//"Lets you know if two strings are identical or not."


//july 9th function from JP Fontaine workspace
Blockly.Msg.PROCEDURES_DEFRETURN_FUNCTION = "関数";
Blockly.Msg.PROCEDURES_DEFRETURN_TYPE = "型";

Blockly.Msg.VARIABLES_AS = "型";
Blockly.Msg.VARIABLES_SET_CONST = " を定数に ";
Blockly.Msg.VARIABLES_SET_CONST_AT = " ";
Blockly.Msg.VARIABLES_SET_CONST_TOOLTIP = "set a variable to non modifiable value";
Blockly.Msg.VARIABLES_SET_CONST_HELPURL = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
Blockly.Msg.ARD_TYPE_ARRAY = "配列";
Blockly.Msg.ARD_TYPE_BOOL = "Boolean(真偽値)";
Blockly.Msg.ARD_TYPE_CHAR = "Char(文字)";
Blockly.Msg.ARD_TYPE_ARRAY_CHAR = "Char array(配列 文字)";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "子ブロックがありません";//"ChildBlockMissing"
Blockly.Msg.ARD_TYPE_DECIMAL = "Decimal(小数)";//"Decimal"
Blockly.Msg.ARD_TYPE_LONG = "Large Number(整数32bit長)";//"Large Number"
Blockly.Msg.ARD_TYPE_NULL = "Null";//"Null"
Blockly.Msg.ARD_TYPE_NUMBER = "Number(整数16bit長)";//"Number"
Blockly.Msg.ARD_TYPE_SHORT = "Short Number(整数8bit長)";//"Short Number (byte)"
Blockly.Msg.ARD_TYPE_TEXT = "Text(文字列)";//"Text"
Blockly.Msg.ARD_TYPE_UNDEF = "未定義";//"Undefined"
Blockly.Msg.ARD_TYPE_UNS_NUMBER = "Unsigned number(符号なし整数16bit長)";//"Unsigned number"
Blockly.Msg.ARD_TYPE_UNS_LONG = "Unsigned Long Number(符号なし整数32bit長)";//"Unsigned Long Number"
Blockly.Msg.ARD_TYPE_VOLATILE = "Volatile integer(volatile整数)";//"Volatile integer"

//**********************************categories***********************************************
//**********************************categories***********************************************
//**********************************categories***********************************************

Blockly.Msg.CAT_LOOPS = "繰り返し";
Blockly.Msg.CAT_LOGIC = "論理";
Blockly.Msg.CAT_IF = "もし";
Blockly.Msg.CAT_BOOL = "真偽";
Blockly.Msg.CAT_MATH = "数値";
Blockly.Msg.CAT_TEXT = "文字";
Blockly.Msg.CAT_LIST = "リスト";
Blockly.Msg.CAT_ARRAY = "配列";
Blockly.Msg.CAT_COLOR = "色";
Blockly.Msg.CAT_VARIABLES = "変数";
Blockly.Msg.CAT_FUNCTIONS = "関数";
Blockly.Msg.CAT_ARDUINO = "Arduino";
Blockly.Msg.CAT_ARDUINO_IN = "入力";
Blockly.Msg.CAT_ARDUINO_OUT = "出力";
Blockly.Msg.CAT_ARDUINO_CONVERSION = "変換";
Blockly.Msg.CAT_ARDUINO_TIME = "時間";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "シリアル通信";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "ソフトシリアル";
Blockly.Msg.CAT_ARDUINO_SERVO = "サーボ";

Blockly.Msg.CAT_ANEMOROTATION = "Anemometer with cups"; //added september 16th 2017

Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD = "Adafruit Motorshield";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v1 = "Adafruit Motorshield v1";
Blockly.Msg.CAT_ADAFRUIT_MOTORSHIELD_v2 = "Adafruit Motorshield v2";
Blockly.Msg.CAT_ADAFRUIT_JOYSTICK = "Joystick";

Blockly.Msg.CAT_BLYNK_CC = "BLYNK.CC"; //Added by M. Leroy July 24th 2017
Blockly.Msg.CAT_Blynk_Arduino_Connexion =" - Connection type";
Blockly.Msg.CAT_Blynk_Controllers = " - Controllers";
Blockly.Msg.CAT_Blynk_Dysplays = " - Dysplays";
Blockly.Msg.CAT_Blynk_Interface = " - Interface";
Blockly.Msg.CAT_Blynk_Notifications = " - Notification";
Blockly.Msg.CAT_Blynk_Programmation = " - Programming";
Blockly.Msg.CAT_Blynk_Other = " - Other";
Blockly.Msg.CAT_Blynk_Sensors = " - Smartphone Sensors";

Blockly.Msg.CAT_DFRobot = "DFRobot";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "Shield LCD Keypad"; //Added february 27th 2016
Blockly.Msg.CAT_DFPLAYER = "DFPlayer mini MP3";
Blockly.Msg.CAT_DFRobot_ISD1820 = "Voice Recorder-ISD1820";
Blockly.Msg.CAT_IIC_to_GPIO_Shield_V2 = "I2C extension shield";

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
Blockly.Msg.CAT_GROVE_IN = "入力";
Blockly.Msg.CAT_GROVE_OUT = "出力";
Blockly.Msg.CAT_GROVE_LCD = "液晶スクリーン";
Blockly.Msg.CAT_GROVE_COMM = "通信";
Blockly.Msg.CAT_GROVE_BEGINNER_KIT = "Grove Beginner Kit";  //added september 10th 2020
Blockly.Msg.CAT_GROVE_BEGINNER_KIT_IN = Blockly.Msg.CAT_GROVE_IN;  //added september 10th 2020
Blockly.Msg.CAT_GROVE_BEGINNER_KIT_OUT = Blockly.Msg.CAT_GROVE_OUT;  //added september 10th 2020
Blockly.Msg.CAT_GROVE_MINI_LiDAR = "> mini LIDAR";  //added february 11th 2021
Blockly.Msg.CAT_GROVE_VL53L0X = "> distance 'Time of Flight' VL53L0X";  //added february 13th 2021

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

Blockly.Msg.CAT_ROBOTS = "Robots misc."; //Added April 7 2015 ESK
Blockly.Msg.CAT_ROBOTS_MOTORS = "Shield Motors";
Blockly.Msg.CAT_ROBOT_MISC = "IR";

Blockly.Msg.CAT_INFRA_2 = "infrarouge"; //added august 22th 2018
Blockly.Msg.CAT_INFRA_3 = "infrarouge";

Blockly.Msg.CAT_RF433 = "RF433"; //added august 22th 2018
Blockly.Msg.CAT_RF433_2 = "RF433";
Blockly.Msg.CAT_RF433_3 = "RF433";

Blockly.Msg.CAT_BQ = "bitbloq";  //added july 14th 2015
Blockly.Msg.CAT_BQ_IN = "In";
Blockly.Msg.CAT_BQ_OUT = "Out";
Blockly.Msg.CAT_BQ_COMM = "Communication";

Blockly.Msg.CAT_JEULIN = "Traffic light";  //added january 11th 2016
Blockly.Msg.CAT_JEULIN_IN = "Sensors";
Blockly.Msg.CAT_JEULIN_OUT = "Actuators";

Blockly.Msg.CAT_MULTIFUNCTION = "multi-fonction";  //added march 9th 2016

Blockly.Msg.CAT_RFID = "RFID";  //added april 13th 2017

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
Blockly.Msg.CAT_ROMEO_BLE_3 = "RoMeo BLE"; //added may 1st 2016

Blockly.Msg.CAT_SPI_COMM = "SPI communication";
Blockly.Msg.CAT_STEPPER = "Stepper motors"; //added august 28th 2016

Blockly.Msg.CAT_MHK = "MyHumanKit"; //added august 23th 2016


Blockly.Msg.CAT_MACE_ROBOTICS = "Macé Robotics"; //added 01/03/2019
Blockly.Msg.CAT_ESUS = " - Esus board"; //added 8 october 2016
Blockly.Msg.CAT_ESUS_WIFI = " --> WiFi";
Blockly.Msg.CAT_ESUS_MOTORS = " --> Motors control";
Blockly.Msg.CAT_MRDUINO = " - MRduino robot";
Blockly.Msg.CAT_MRDUINO2 = " - MRduino2 robot";

Blockly.Msg.CAT_APDS_9960_RGB_Gesture = "color + movement"; //added 9 october 2016

Blockly.Msg.CAT_BT_ELECTRONICS = "Bluetooth Electronics"; //added 13 november 2016
Blockly.Msg.CAT_BT_ELEC_BUTTON = "link to application";

Blockly.Msg.CAT_ICN = "ICN";  //added 3 january 2017

Blockly.Msg.CAT_LCD_SCREEN = "LCD screens";  //added 12 february 2017
Blockly.Msg.CAT_LCD_I2C = "LCD I²C"; //added 18/08/2017
Blockly.Msg.CAT_LCD_DFRobot_SHIELD_LCDKEYPAD = "DFRobot LCD Keypad shield";
Blockly.Msg.CAT_LCD_GROVE_LCD = "Grove LCD";
Blockly.Msg.CAT_LCD_TECHNOZONE_LCD = "TZ51 LCD";
Blockly.Msg.CAT_LCD_TECHNOZONE_ROBOT_LCD = "Barbot LCD";
Blockly.Msg.CAT_BLUETOOTH_MISC = "bluetooth misc.";
Blockly.Msg.CAT_BT_GROVE_COMM = "Grove";
Blockly.Msg.CAT_BT_TECHNOZONE_BT = "TechnoZone51";

Blockly.Msg.CAT_jfblocks = "frames"; // added february 28th, 2017

Blockly.Msg.CAT_KEYPAD = "Keypad";

Blockly.Msg.CAT_SHARP = "Sharp IR";

Blockly.Msg.CAT_MATRIX_LED_RGB = "Matrix RGB LED 8x8"; //added 25 march 2017

Blockly.Msg.CAT_STORAGE_EEPROM = "ストレージ"; //added 29 march 2017

Blockly.Msg.CAT_DRONE = "drone"; //added 26 april 2017

Blockly.Msg.CAT_ADXL362 = "accelerometer ADXL362"; //added 2 may 2017

Blockly.Msg.CAT_ETHERNET = "ethernet"; //added 25 july 2017
Blockly.Msg.CAT_ETHERNET_INIT = "initialisation";
Blockly.Msg.CAT_ETHERNET_CLIENT = "client";
Blockly.Msg.CAT_ETHERNET_SERVER = "server"; //----------here
Blockly.Msg.CAT_WIFI_INIT = "wifi esp8266"; // 30/01/2018

Blockly.Msg.CAT_AUTODUINO = "Autoduino";
Blockly.Msg.CAT_AUTODUINO_IN = " - sensors";
Blockly.Msg.CAT_AUTODUINO_OUT = " - actuators";
Blockly.Msg.CAT_AUTODUINO_LCD = " - LCD screen";
Blockly.Msg.CAT_AUTODUINO_COMM = " - communication";
Blockly.Msg.CAT_AUTODUINO_UTIL = " - useful";

Blockly.Msg.CAT_PEGUINO = "Peguino"; //added 21 november 2018
Blockly.Msg.CAT_PEGUINO_IN = " - sensors";
Blockly.Msg.CAT_PEGUINO_OUT = " - actuators";

Blockly.Msg.CAT_I2C = "I2C"; //added 26/05/2017
Blockly.Msg.CAT_SPI = "SPI"; //added 26/05/2017
Blockly.Msg.CAT_NULL = "free"; //added 8/10/2017
Blockly.Msg.CAT_I2C_to_GPIO_Module = "I2C extension module"; //added 21/02/2021

Blockly.Msg.CAT_HX711 = "load cell"; //added 23/10/2017

Blockly.Msg.CAT_MESURE = "Measuring devices"; //added 22/11/2017
Blockly.Msg.CAT_DS18B20 = "Thermometer DS18B20"; //added 15/09/2017
Blockly.Msg.CAT_TSL2561 = "Light Meter"; //added november 21th 2017

Blockly.Msg.CAT_ACTIONNEURS = "actuators"; //added 03/11/2017
Blockly.Msg.CAT_CAPTEURS = "sensors";
Blockly.Msg.CAT_ACTIONNEURS_del = " - LEL";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_matrice8x8 = " - matrix";
Blockly.Msg.CAT_ACTIONNEURS_DFRobot_SHIELD_LCDKEYPAD = " - LCD screen";
Blockly.Msg.CAT_ACTIONNEURS_ARDUINO_moteur = " - motor";
Blockly.Msg.CAT_ACTIONNEURS_DFPLAYER = " - audio";

Blockly.Msg.CAT_POLOLU = "Pololu"; //added 24/01/2018 
Blockly.Msg.CAT_POLOLU_QTR_1RC = " - QTR-1RC";

Blockly.Msg.CAT_WII = "Nintendo Wiimote"; //added 3/04/2018

Blockly.Msg.CAT_PETITBOT = "PetitBot"; //added 24/04/2018
Blockly.Msg.CAT_PETITBOT_IN = "sensors";
Blockly.Msg.CAT_PETITBOT_MOTORS = "motors";
Blockly.Msg.CAT_PETITBOT_SERVO = "servomotors";
Blockly.Msg.CAT_PETITBOT_LED = "LED";

Blockly.Msg.CAT_NRF24L01 = "nRF24L01"; //added 31/05/2018

Blockly.Msg.CAT_SEEED = "Seeed studio"; //added 01/03/2018
Blockly.Msg.CAT_MUSIC_SHIELD = "Seeed Music Shield v2.2"; //added 01/03/2018

Blockly.Msg.CAT_CROWTAIL_KIT = "Crowtail Starter Kit";  //added 2023/11/11
Blockly.Msg.CAT_CROWTAIL_KIT_IN = Blockly.Msg.CAT_GROVE_IN;  //added 2023/11/11
Blockly.Msg.CAT_CROWTAIL_KIT_OUT = Blockly.Msg.CAT_GROVE_OUT;  //added s2023/11/11

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
Blockly.Msg.CAT_FONCTION_STOCKAGE_SDCARD = "SD card";

Blockly.Msg.CAT_CAPACITIVESENSOR = "Capacitive Sensor";
Blockly.Msg.CAT_PULSESENSOR = "Pulse Sensor"; //added 14/02/2021

Blockly.Msg.CAT_ESP8266="ESP8266 IOT";
Blockly.Msg.CAT_esp8266_wifi=" - WiFi";
Blockly.Msg.CAT_html=" - HTML";

Blockly.Msg.CAT_OTTO = "Otto robot"; //added 06/09/2019
Blockly.Msg.CAT_OTTOH = "humanoid"; //added 06/10/2019

Blockly.Msg.CAT_VIRTUINO = "Virtuino"; //added 08/05/2020

Blockly.Msg.CAT_STENDHAL = "Collège Stendhal";  //added 10/09/2020
Blockly.Msg.CAT_STENDHAL_IN = " - CAPTER";
Blockly.Msg.CAT_STENDHAL_DIGITAL2 = "  * * Logique";
Blockly.Msg.CAT_STENDHAL_ANALOG2 = "  * * Analogique";
Blockly.Msg.CAT_STENDHAL_DIGITAL3 = "  . . . Logique";
Blockly.Msg.CAT_STENDHAL_ANALOG3 = "  . . . Analogique";
Blockly.Msg.CAT_STENDHAL_DEAL = "  * * Télérupteurs";
Blockly.Msg.CAT_STENDHAL_OUT = " - ACTIONNER";
Blockly.Msg.CAT_STENDHAL_OUT_MOTOR = "  * * Mouvement";
Blockly.Msg.CAT_STENDHAL_OUT_MOTOR_SERVO = "  . . . Servomoteurs";
Blockly.Msg.CAT_STENDHAL_OUT_MOTOR_CLASSIC = "  . . . Moteurs à courant continu";
Blockly.Msg.CAT_STENDHAL_OUT_MOTOR_PAP = "  . . . Moteurs pas à pas";
Blockly.Msg.CAT_STENDHAL_OUT_LIGHT = "  * * Lumière";
Blockly.Msg.CAT_STENDHAL_OUT_SOUND = "  * * Son";
Blockly.Msg.CAT_STENDHAL_COMM = " - COMMUNIQUER";
Blockly.Msg.CAT_STENDHAL_COMM_LCD = "  * * Ecran LCD";
Blockly.Msg.CAT_STENDHAL_COMM_LED = "  * * LED";
Blockly.Msg.CAT_STENDHAL_COMM_BLUETOOTH = "  * * Bluetooth";
Blockly.Msg.CAT_STENDHAL_COMM_USB = "  * * USB";
Blockly.Msg.CAT_STENDHAL_BOARD = " - GERER CARTE MERE";
Blockly.Msg.CAT_STENDHAL_TIME = "  * *  Horloge";
Blockly.Msg.CAT_STENDHAL_MEMORY = "  * *  Mémoire";


//**********************************Dropdown menus messages***********************************************

Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["ON", "ON"], ["OFF", "OFF"]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["HAUT", "HIGH"], ["BAS", "LOW"]];
Blockly.Msg.ligne = [["1", "1"], ["2", "2"]];
Blockly.Msg.colonne = [["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["14", "14"],["14", "14"],["15", "15"],["16", "16"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [["avant", "HIGH"], ["arrière", "LOW"]];
Blockly.Msg.INOUT_HIGH_LEVEL = "1 -> HIGH";
Blockly.Msg.INOUT_LOW_LEVEL = "0 -> low";
Blockly.Msg.WII_JOY_DROPDOWN = [["horizontal", "H"], ["vertical", "V"]];
Blockly.Msg.WII_ACCEL_DROPDOWN = [["X", "X"], ["Y", "Y"], ["Z", "Z"]];
Blockly.Msg.WII_ACCEL_BUTTON = [["C", "C"], ["Z", "Z"]];
Blockly.Msg.WII_ACCEL_BUTTON_STATE = [["pressed", "PRESSED"], ["released", "RELEASED"]];

//**********************************FieldInstance messages***********************************************
Blockly.Msg.COMPONENT_WARN = "A %1 configuration block with the same '%2' name must be added to use this block!";

Blockly.Msg.SOFTSERIAL_COMPONENT = 'softserial';
Blockly.Msg.STEPPER_COMPONENT = 'stepper';
Blockly.Msg.NEOPIXEL_COMPONENT = 'Neopixel';
Blockly.Msg.SERVO_COMPONENT = 'servomotor';
Blockly.Msg.SERVO_DEFAULT_NAME = "SERVO";
Blockly.Msg.LIDAR_DEFAULT_NAME = 'LiDAR';
Blockly.Msg.SHARP_IR_COMPONENT = 'Sharp IR';
Blockly.Msg.I2C_DEFAULT_NAME = 'I2C';


//**********************************blocks***********************************************
//**********************************blocks***********************************************
//**********************************blocks***********************************************

// Ardublockly instances
Blockly.Msg.NEW_INSTANCE = '新しい名前';
Blockly.Msg.RENAME_INSTANCE = '名前を変更';
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';

Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "待つ (ミリ秒)";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME_SEC = "待つ (秒)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "ポーズ時間をミリ秒で指定";//"specify the pause time in milliseconds"
Blockly.Msg.ARDUINO_BASE_SETUP = "初期設定";
Blockly.Msg.ARDUINO_BASE_SETUP_HELPURL = "https://www.arduino.cc/en/Reference/Setup";
Blockly.Msg.ARDUINO_BASE_LOOP = "永久ループ:";
Blockly.Msg.ARDUINO_BASE_SETUP_LOOP_HELPURL = "https://www.arduino.cc/en/Reference/Loop";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_HELPURL = "https://www.arduino.cc/en/Reference/Millis";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED = "時間計測（ミリ秒）";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_SEC = "時間計測（秒）";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "プログラム開始からの経過ミリ秒(unsigned long)";//"Number of milliseconds since the program started (unsigned long)"
Blockly.Msg.ARDUINO_BETWEEN = "乱数　範囲：";//"random number between"
Blockly.Msg.ARDUINO_BETWEEN_AND = "から";//"and"
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL ="http://arduino.cc/en/Reference/map";
Blockly.Msg.ARDUINO_BASE_MAP_NUM ="スケール変更";//"to the transposed "
Blockly.Msg.ARDUINO_BASE_MAP_DMAX = "範囲";//"over a range of [0-"
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "0から1023の数値を所定の範囲に変換";//"transfer a value on a scale from 0 to 1023 to another scale"
Blockly.Msg.ARDUINO_BASE_CODE = "コード";
Blockly.Msg.ARDUINO_BASE_COMMENT_HELPURL = "https://www.arduino.cc/reference/en/language/structure/further-syntax/blockcomment/";
Blockly.Msg.ARDUINO_BASE_COMMENT_TEXT = "コメント";
Blockly.Msg.ARDUINO_BASE_CONST = "定数";
Blockly.Msg.ARDUINO_BASE_DEFINE_HELPURL = "https://www.arduino.cc/en/Reference/Define";
Blockly.Msg.ARDUINO_BASE_DEFINE = "定義";
Blockly.Msg.ARDUINO_BASE_DEFINE_TOOLTIP = "定数とライブラリを定義";//"Define constants & librairies"
Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_HELPURL = "https://www.arduino.cc/en/Reference/Define";
Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_INPUT1 = "変数を定義";//"define variable"
Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_INPUT2 = "値";//"as"
Blockly.Msg.ARDUINO_BASE_DEFINE_CONST_TOOLTIP = "allows the programmer to give a name to a constant value before the program is compiled";
Blockly.Msg.ARDUINO_BASE_END = 'ずっと待つ (プログラム終了)';
Blockly.Msg.ARDUINO_BASE_BEGIN_TOOLTIP = "プログラムの開始と終了の目印";//"help to show start and end of a program"
Blockly.Msg.ARDUINO_BASE_BEGIN = "スタート";
Blockly.Msg.ARDUINO_BASE_TEMPO1 = "";//"when"
Blockly.Msg.ARDUINO_BASE_TEMPO2 = "経過後";//"elapsed"
Blockly.Msg.ARDUINO_BASE_TEMPO_TIME = [["マイクロ秒", "us"],["ミリ秒", "ms"],["秒", "s"]];
Blockly.Msg.ARDUINO_BASE_TEMPO_TOOLTIP = "Verify if interval of time is elapsed, if so do instructions.";
Blockly.Msg.ARDUINO_BASE_TEMPO_HELPURL = "http://www.mon-club-elec.fr/pmwiki_reference_arduino/pmwiki.php?n=Main.ExempleBlinkWithoutDelay";
Blockly.Msg.ARDUINO_BASE_TOGGLE = "ピン状態を反転";
Blockly.Msg.ARDUINO_BASE_TOGGLE_TOOLTIP = "反転：特定のピンのロジック状態を0から1、1から0に反転する";//"Toggle :\nwrite logic state 0 if was 1, or 1 if was 1, on PIN#"
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TEXT = "ファイルを読み込む";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_NAME = "ファイル名";
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_TOOLTIP = "作業ディレクトリにあるファイルをインクルード";//"Permet d'inclure un fichier contenu dans le repertoire de travail"
Blockly.Msg.ARDUINO_BASE_INCLUDE_FILE_HELPURL = "https://www.arduino.cc/reference/en/language/structure/further-syntax/include/";
Blockly.Msg.ARDUINO_BASE_INCLUDE_LIB_TEXT = "ライブラリをインクルード";//"include librarie"
Blockly.Msg.ARDUINO_BASE_INCLUDE_LIB_TOOLTIP = " include outside libraries in your sketch";
Blockly.Msg.ARDUINO_CONSTRAIN = "範囲に収める";
Blockly.Msg.ARDUINO_CONSTRAIN_X = " 数値";
Blockly.Msg.ARDUINO_CONSTRAIN_A = "をAから ";
Blockly.Msg.ARDUINO_CONSTRAIN_B = "Bまでに ";
Blockly.Msg.ARDUINO_CONSTRAIN_HELPURL = 'http://arduino.cc/en/Reference/Constrain';
Blockly.Msg.ARDUINO_CONSTRAIN_TOOLTIP = '数値を所定の範囲に制限する';//'Constrains a number to be within a range.'
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "LEDを設定";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "ArduinoボードのLEDをオンオフ";//"off or turn on the LED on the Arduino board"
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "デジタルピン";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "を設定";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "出力ピンに0か1の状態を書き込む";//"write a 0 or 1 state numeric on a specific output"
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "デジタルピンの値を読む";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "デジタルピンの状態を０と１で読む";//"reading the digital state 0 or 1 of the digital pin"
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP = "プルアップ";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_PULL_UP_TOOLTIP = "デジタルピンの状態を０と１で読む　プルアップオプションあり";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT1 = "PWMピンに書き込む";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_INPUT2 = "値";
Blockly.Msg.ARDUINO_INOUT_PWM_WRITE_TOOLTIP = "0から255のPWM値をピンに送る \n使用できるピンを確認 !";//"send a value between 0 and 255 on a specific output \nWARNING verify the No. on the board !"
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "アナログピンに書き込む";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "値";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "出力ピンに0から255のアナログ値を書き込み";//"send a value between 0 and 255 on a specific output"
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "サウンド出力　ピン：";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "周波数 (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "～秒間 (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "出力ピンにサウンドを出力";//"emits sound on the selected pin"
Blockly.Msg.ARDUINO_INIT_WAV = "WAV再生初期化 サウンド1";
Blockly.Msg.ARDUINO_INIT_WAV_SOUND2 = "サウンド2";
Blockly.Msg.ARDUINO_INIT_WAV_SOUND3 = "サウンド3";
Blockly.Msg.ARDUINO_INIT_WAV_AUDPIN = "出力ピン";
Blockly.Msg.ARDUINO_INIT_WAV_ENBLPIN = "ENピン";
Blockly.Msg.ARDUINO_PLAY_WAV = "WAV再生 サウンド：";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "サウンド出力終了　ピン：";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "サウンド出力をミュート";//"mutes the sound on the selected pin"
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "アナログ入力読み込み";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "0 から 1023 の値を返す";//"returns a value between 0 and 1023"
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_STATE = "state";
Blockly.Msg.ARDUINO_INOUT_ANGLE = "角度";
Blockly.Msg.ARDUINO_INOUT_ANGLE_TOOLTIP = "0 から 360°で角度を入力";//"angle entre 0 et 360°"
Blockly.Msg.ARDUINO_INOUT_ANGLE_HELPURL = "https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/angle";
Blockly.Msg.ARDUINO_PULSEIN="パルス検出 (µs) ピン#";//"PulseIn (µs) pin#"
Blockly.Msg.ARDUINO_PULSEIN_TIMEOUT="タイムアウト (µs) ";//"timeout (µs) "
Blockly.Msg.ARDUINO_SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "サーボ駆動";
Blockly.Msg.ARDUINO_SERVO_MOVE_IMAGE = "images/a991.jpg";
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT2 = "ピン";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "設定角度 (0~180°)";
Blockly.Msg.ARDUINO_SERVO_MOVE_DELAY_TIME = "～の期間 (ms)";//"during a period (ms)"
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "0 ~ 180°　回転可能";//"rotation possible between 0 ~ 180 degrees"
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT1 = "サーボモータの角度";//"the angle of the servo motor"
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_IMAGE = "images/a991.jpg";
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_INPUT2 = "接続ピン";//"connected on the pin"
Blockly.Msg.ARDUINO_SERVO_READ_DEGREES_TOOLTIP = "前回の回転角度を返す";//"returns the number of degrees the last rotation"
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_HELPURL = "https://www.arduino.cc/en/Reference/ServoWrite";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "永続回転サーボ";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT1 = "PIN#";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT2 = "スピード [0~180]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT3 = "スピード [0~90]";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_INPUT4 = "回転方向";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "設定角度 : 0° -> 左回転max | 90° -> 停止 | 180° -> 右回転max";//"degrees for power : 0° -> max on left | 90° -> stop | 180° -> max on right"
Blockly.Msg.ARDUINO_SERVO_PIN = "PIN#";
Blockly.Msg.ARDUINO_SERVO_ATTACH1 = "サーボセット";
Blockly.Msg.ARDUINO_SERVO_ATTACH2 = "id#";
Blockly.Msg.ARDUINO_SERVO_ATTACHED = "サーボ有効か ?";
Blockly.Msg.ARDUINO_SERVO_DETACH = "サーボ無効化 PIN#";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "シリアルでデータを送る　ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINTLN_CONTENT = "シリアルで１行送る ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TAB_CONTENT = "シリアルでタブを送る ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "シリアルモニタにASCII形式で送信";//"sends data over the serial port for sruvaillance by the monitor in ASCII"
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_TEXT = "シリアルで文字を送る ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NUMBER = "数値を追加 :";
Blockly.Msg.ARDUINO_SERIAL_PRINT_VAR_NEW_LINE = "改行する ?";
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NUMBER = "プリント:";//"Afficher sur le port Série :"
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_NEWLINE = "改行?";//"Nouvelle ligne?"
Blockly.Msg.ARDUINO_SERIAL_PRINT_MULTI_FIELDDROPDOWN = [["はい", "true"], ["いいえ", "false"]];

Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = "割り込み ピン#";
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "割り込み中止 ピン#";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = 'ピンに割り込みを設定';//'Attachs interrupt to a specific Port'
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = 'ピンへの割り込みを解除';//'Detachs interrupt to a specific Port'
Blockly.Msg.LKL_MODE = 'モード';
Blockly.Msg.LKL_DROPDOWN = [['RISING', "RISING"], ['FALLING', "FALLING"], ['CHANGE', "CHANGE"], ['LOW', "LOW"]];

//SERIAL
Blockly.Msg.Serial_Init="シリアル通信　速度設定";
Blockly.Msg.Serial_Print="シリアル　コンソールに出力";
Blockly.Msg.Serial_Write="シリアル　バイナリ送信";
Blockly.Msg.Serial_write_out="データ送信";//"Write"
Blockly.Msg.Serial_Print_Format="形式を決めて送信";
Blockly.Msg.Serial_Print_ForDecimal="10進数";
Blockly.Msg.Serial_Print_ForHexa="16進数";
Blockly.Msg.Serial_Print_ForBin="2進数";
Blockly.Msg.Serial_Print_ForOct="8進数";
Blockly.Msg.Serial_read="シリアル読み込み";
Blockly.Msg.Serial_avai="シリアル有効　?";
Blockly.Msg.Serial_flush="送信終了を待つ";
Blockly.Msg.Serial_line="line break";
Blockly.Msg.Serial_line_tooltip="insert a line break in serial monitor";
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_CONTENT = "文字列受信　終端：";//"String read until"
Blockly.Msg.ARDUINO_SERIAL_READSTRINGUNTIL_TOOLTIP = "シリアルバッファから文字列読み込み";//"reads characters from the serial buffer into a string"

//SOFTWARE SERIAL
Blockly.Msg.SSERIAL_DEFAULT_NAME="SoftSerial";
Blockly.Msg.SSERIAL_Init="初期化";//"INIT"
Blockly.Msg.SSERIAL_SPEED="速度";//"speed"
Blockly.Msg.SSERIAL_TX="TX#";
Blockly.Msg.SSERIAL_RX="RX#";
Blockly.Msg.SSERIAL_Read="ソフトウェアシリアル　受信";//"SoftwareSerial Read"
Blockly.Msg.SSERIAL_Print="ソフトウェアシリアル　プリント";//"SoftwareSerial Print"
Blockly.Msg.SSERIAL_Write="ソフトウェアシリアル　送信";//"SoftwareSerial Write"
Blockly.Msg.SSERIAL_Avai="ソフトウェアシリアル　到着?";//"SoftwareSerial Available?"

//VARIABLES
Blockly.Msg.ARDUINO_VAR_DECLARE="Declare";
Blockly.Msg.ARDUINO_VAR_AS="as";
Blockly.Msg.ARDUINO_VAR_VAL="value";

//Conversions
Blockly.Msg.CONV_tochar="charに変換 ";
Blockly.Msg.CONV_tobyte="Byteに変換 ";
Blockly.Msg.CONV_toint="Intに変換 ";
Blockly.Msg.CONV_tofloat="Floatに変換 ";
Blockly.Msg.CONV_toString="Stringに変換 ";
Blockly.Msg.CONVERSION_MAP_HELPURL = "https://www.arduino.cc/en/Reference/Map";
Blockly.Msg.CONVERSION_MAP_NUM = "範囲変換";
Blockly.Msg.CONVERSION_MAP_IN_MIN = "前　下限";
Blockly.Msg.CONVERSION_MAP_IN_MAX = "前　上限";
Blockly.Msg.CONVERSION_MAP_OUT_MIN = "後　下限";
Blockly.Msg.CONVERSION_MAP_OUT_MAX = "後　上限";
Blockly.Msg.CONVERSION_MAP_TOOLTIP = "数値の範囲を変換";//"re-maps a number from one range to another"

//added april 6th 2015
Blockly.Msg.GROVE_INOUT_DHT_HELPURL = "https://github.com/adafruit/DHT-sensor-library";
Blockly.Msg.GROVE_INOUT_DHT_READ_C = "Temperature C";
Blockly.Msg.GROVE_INOUT_DHT_READ_F = "Temperature F";
Blockly.Msg.GROVE_INOUT_DHT_READ_H = "Humidity %";
Blockly.Msg.GROVE_INOUT_DHT_READ_PIN = "Pin#";
Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR = "Sensor";
Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP = "The DHT sensors are made of two parts, a capacitive humidity sensor and a thermistor.";
Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE = "Content";
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
Blockly.Msg.GROVE_INOUT_LDR_HELPURL = "https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html";
Blockly.Msg.GROVE_INOUT_LDR_TEXT = "LDR Value";
Blockly.Msg.GROVE_INOUT_LDR_INPUT = "PIN#";
Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP = "Analog input between 0 and 255";
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

//************************************** ajouté 15/06/2018 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_LCD_RGB_INIT_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_INIT_TEXT = "INIT Grove LCD RGB";
Blockly.Msg.GROVE_LCD_RGB_INIT_TOOLTIP = "Initialisation du LCD";

Blockly.Msg.GROVE_LCD_RGB_CLEAR_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_CLEAR_TEXT = "CLEAR Grove LCD RGB";
Blockly.Msg.GROVE_LCD_RGB_CLEAR_TOOLTIP = "Effaçage de l'écran LCD";

Blockly.Msg.GROVE_LCD_RGB_SCROLL_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_TEXT = "TEXT SCROLLING";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT = "Ecrit avec un ";
Blockly.Msg.GROVE_LCD_RGB_SCROLL_EFFECT_FIELDDROPDOWN = [["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]];
Blockly.Msg.GROVE_LCD_RGB_SCROLL_TOOLTIP = "Choix du sens de défilement du texte";

Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TEXT = "SET CURSOR";
Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_TOOLTIP = "Positionne le curseur aux coordonnées spécifiées";
Blockly.Msg.GROVE_LCD_RGB_SET_CURSOR_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";

Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TEXT = "SET RGB Backlight";
Blockly.Msg.GROVE_LCD_RGB_SET_RGB_TOOLTIP = "Définit la couleur du rétro-éclairage";
Blockly.Msg.GROVE_LCD_RGB_SET_RGB_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";

Blockly.Msg.GROVE_LCD_RGB_PRINT_DATA = "PRINT";
Blockly.Msg.GROVE_LCD_RGB_PRINT_TOOLTIP = "Ecrit la valeur numérique, la valeur de la variable ou la chaine de caractères spécifiée";
Blockly.Msg.GROVE_LCD_RGB_PRINT_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_PRINT_INPUTDATA = "DATA"

Blockly.Msg.GROVE_LCD_RGB_WRITE_DATA = "WRITE";
Blockly.Msg.GROVE_LCD_RGB_WRITE_TOOLTIP = "Ecrit le caractère correspondant au code ASCII spécifié";
Blockly.Msg.GROVE_LCD_RGB_WRITE_HELPURL = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg.GROVE_LCD_RGB_WRITE_INPUTDATA = "DATA"
Blockly.Msg.GROVE_LCD_RGB_WRITE_FORMAT_FIELDDROPDOWN = [["0x", "0x"], ["0b", "0b"], ["décimal", "1"],["variable", "2"]];

//************************************** ajouté 20/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_EMETTEUR_IR_TEXT = "Led IR";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT1 = "Emetter signal IR on PIN";
Blockly.Msg.GROVE_EMETTEUR_IR_INPUT2 = "Frequency (Hz) 38000 ";
Blockly.Msg.GROVE_EMETTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Emitter/";
Blockly.Msg.GROVE_EMETTEUR_IR_TOOLTIP = "Emission d'un signal infra rouge";

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

//************************************** ajouté 05/05/2021 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_Capacitive_Touch_Keypad_HELPURL = "https://wiki.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-/#applications";
Blockly.Msg.GROVE_Capacitive_Touch_Keypad_TEXT = "key pressed on keypad";
Blockly.Msg.GROVE_Capacitive_Touch_Keypad_INPUT1 = "connected on pin (Rx)";
Blockly.Msg.GROVE_Capacitive_Touch_Keypad_INPUT2 = "and pin (Tx)";
Blockly.Msg.GROVE_Capacitive_Touch_Keypad_TOOLTIP = "send back, via softserial, valule of key pressed on keypad";

//************************************** ajouté 30/06/2021 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_SGP30_HELPURL = "https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/";
Blockly.Msg.GROVE_SGP30_TEXT = "concentration of ";
Blockly.Msg.GROVE_SGP30_INPUT1 = "carbon dioxide (CO2) in ppm";
Blockly.Msg.GROVE_SGP30_INPUT2 = "volatile organic compounds (TVOC) in ppb";
Blockly.Msg.GROVE_SGP30_TOOLTIP = "The SGP30 gas sensor returns the concentration of CO2 (in ppm) or TVOC (in ppb) in the air and is connected to the I2C bus.";

//************************************** ajoute 16/03/2017 \lang\BlocklyArduino **********************************************************
Blockly.Msg.GROVE_INOUT_BT_AT_HELPURL = "http://wiki.seeed.cc/Grove-Serial_Bluetooth_v3.0/";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM1 = "Bluetooth";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM2 = "PIN#";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM3 = "name";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM4 = "pin code";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM5 = "receive";
Blockly.Msg.GROVE_INOUT_BT_AT_COMM6 = "send";
Blockly.Msg.GROVE_INOUT_BT_AT_TOOLTIP = "Bluetooth V3.0 + EDR slave. Support single slave per board";

//******** Grove commun � tous les drivers moteur Cdo 2017 03 19*/
Blockly.Msg.GROVE_DRIVER_MOTOR1 = "Motor 1";
Blockly.Msg.GROVE_DRIVER_MOTOR2 = "Motor 2";
Blockly.Msg.GROVE_DRIVER_MOTOR3 = "Motor 3";
Blockly.Msg.GROVE_DRIVER_MOTOR4 = "Motor 4";
Blockly.Msg.GROVE_DRIVER_MOTOR_SPEED = "Speed";
//******** KEYPAD Grove driver13 */
Blockly.Msg.GROVE_DRIVER13_HELPURL = "http://wiki.seeed.cc/Grove-I2C_Motor_Driver_V1.3/";
Blockly.Msg.GROVE_DRIVER13_MOTOR_TITLE = "Motor Driver V1.3";
Blockly.Msg.GROVE_DRIVER13_MOTOR_I2C_ADDRESS = "I2C Address";
Blockly.Msg.GROVE_DRIVER13_TOOLTIP = "Motor Driver - " + 
                            "I2C Address in range 0, 15 (0x0F) depending on the card configuration, " + 
                            "Motor speed in range -100, 100; 0 eq stop";
//******** KEYPAD Grove minimoto */
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
Blockly.Msg.ROBOTS_MOTORS_ZUMO_FCT_FOLLOWER_TOOLTIP = "follow a black line\n press 1rst time to calibrate\npress 2nd time to go";
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

//infrarouge updated August 22th 2018
Blockly.Msg.IR_init_TEXT = "赤外リモコン初期化";
Blockly.Msg.IR_init_TOOLTIP = "Initialisition du détecteur infrarouge";
Blockly.Msg.IR_test_LED_TEXT = "Test avec LED";
Blockly.Msg.IR_test_LED_TOOLTIP = "Tester la réception d'un code infrarouge à l'aide d'une LED";
Blockly.Msg.IR_test_monitor_TEXT = "Test avec moniteur";
Blockly.Msg.IR_test_monitor_TOOLTIP = "Tester la réception d'une code infrarouge à l'aide du moniteur Arduino";
Blockly.Msg.IR_next_value_TEXT = "Passer au prochain code";
Blockly.Msg.IR_next_value_TOOLTIP = "Après chaque réception d'un code, on signale au récepteur qu'il peut recevoir un nouveau code";
Blockly.Msg.IR_detection_TEXT = "Signal détecté";
Blockly.Msg.IR_detection_TOOLTIP = "Permet de savoir un signal a été détecté par le récepteur infrarouge";
Blockly.Msg.IR_reception_code_TEXT = "受信データ";
Blockly.Msg.IR_reception_code_TOOLTIP = "Valeur du code reçu par le récepteur infrarouge";
//added April 5th 2019
Blockly.Msg.IR_check_TEXT = "赤外リモコン受信チェック";
Blockly.Msg.IR_flag_TEXT = "受信フラグ";
Blockly.Msg.IR_reset_TEXT = "フラグリセット";

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
Blockly.Msg.TECHNOZONE51_TEXT172 = "pedestrian alarm";
Blockly.Msg.TECHNOZONE51_TEXT173 = "pedestrian red traffic light";
Blockly.Msg.TECHNOZONE51_TEXT174 = "pedestrian green traffic light";
Blockly.Msg.TECHNOZONE51_TEXT175 = "on the way 1";
Blockly.Msg.TECHNOZONE51_TEXT176 = "on the way 2";
Blockly.Msg.TECHNOZONE51_TEXT177 = "button call pedestrian way 1";
Blockly.Msg.TECHNOZONE51_TEXT178 = "button call pedestrian way 2";
Blockly.Msg.TECHNOZONE51_TEXT179 = "ILS sensor";
Blockly.Msg.TECHNOZONE51_TEXT180 = "LDR sensor";
Blockly.Msg.TECHNOZONE51_TEXT181 = "IR sensor";

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

Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor = "Led RGB WS2812B. Send color :";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red = "Red (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green = "Green (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue = "Blue (255 max) =";
Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number = "for pixel number (0 first) =";

Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "http://www.dfrobot.com/wiki/index.php?title=Arduino_LCD_KeyPad_Shield_(SKU:_DFR0009)";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "LCD Keypad Shield screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "text on line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "text on line 2";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT3 = "for (ms)";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT4 = "appui sur le bouton";
Blockly.Msg.LCD_SHIELD_BTN_CHOICE = [["UP", "UP"], ["DOWN", "DOWN"], ["LEFT", "LEFT"], ["RIGHT", "RIGHT"], ["SELECT", "SELECT"]];
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "print text on LCD screen, 2 lines x 16 caracters";

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

// Module RF433 (Added August 23th 2018)
Blockly.Msg.RF433_rxready_TEXT = "Message Ready";
Blockly.Msg.RF433_rxready_INPUT = "Input Pin";
Blockly.Msg.RF433_rxready_TOOLTIP = "Lets you know whether or not a message is received by the radio receiver";
Blockly.Msg.RF433_rx_TEXT = "Receive Char";
Blockly.Msg.RF433_rx_INPUT = "Input Pin";
Blockly.Msg.RF433_rx_TOOLTIP = "Permet d'obtenir le contenu du message reçu par le récepteur radio";
Blockly.Msg.RF433_tx_TEXT = "Send Message";
Blockly.Msg.RF433_tx_INPUT1 = "Output Pin";
Blockly.Msg.RF433_tx_INPUT2 = "Message";
Blockly.Msg.RF433_tx_TOOLTIP = "Send a message using the radio transmitter";
Blockly.Msg.RF433_init_receiver_TEXT = "Initialize the radio receiver";
Blockly.Msg.RF433_init_receiver_INPUT = "PIN";
Blockly.Msg.RF433_init_receiver_TOOLTIP = "Initializes the RF433 radio receiver";
Blockly.Msg.RF433_init_transmitter_TEXT = "Initialize the radio transmitter";
Blockly.Msg.RF433_init_transmitter_INPUT = "PIN";
Blockly.Msg.RF433_init_transmitter_TOOLTIP = "Initializes the RF433 radio transmitter";
Blockly.Msg.RF433_define_message_TEXT = "Define the message to send";
Blockly.Msg.RF433_define_message_INPUT = "Message";
Blockly.Msg.RF433_define_message_TOOLTIP = "Allows you to define the message you wish to send using the radio transmitter";
Blockly.Msg.RF433_send_message_full_TEXT = "Send a message";
Blockly.Msg.RF433_send_message_full_INPUT = "Message";
Blockly.Msg.RF433_send_message_full_TOOLTIP = "Send a message using the radio transmitter";
Blockly.Msg.RF433_show_message_TEXT = "Display the received message";
Blockly.Msg.RF433_show_message_TOOLTIP = "Displays the received message using the radio receiver in the Arduino monitor";
Blockly.Msg.RF433_send_message_TEXT = "Send the message";
Blockly.Msg.RF433_send_message_TOOLTIP = "Send the previously defined message using the radio transmitter";
Blockly.Msg.RF433_wait_rx_TEXT = "Wait for the message";
Blockly.Msg.RF433_wait_rx_TOOLTIP = "Put the radio receiver in the waiting position of a message";
Blockly.Msg.RF433_wait_tx_TEXT = "Waiting for the message to finish";
Blockly.Msg.RF433_wait_tx_TOOLTIP = "Lets wait the necessary time to the radio transmitter to send the complete message";
Blockly.Msg.RF433_reception_message_TEXT = "Receiving message";
Blockly.Msg.RF433_reception_message_TOOLTIP = "Lets you know whether or not a message is received by the radio receiver";
Blockly.Msg.RF433_receive_message_TEXT = "message received";
Blockly.Msg.RF433_receive_message_TOOLTIP = "Obtain the contents of the message received by the radio receiver";

// Module RFID (Added April 13th 2017)
Blockly.Msg.RFID_module_TEXT = "Initialize RFID module";
Blockly.Msg.RFID_module_INPUT1 = "SDA";
Blockly.Msg.RFID_module_INPUT2 = "SCK";
Blockly.Msg.RFID_module_INPUT3 = "MOSI";
Blockly.Msg.RFID_module_INPUT4 = "MISO";
Blockly.Msg.RFID_module_INPUT5 = "RST";
Blockly.Msg.RFID_module_TOOLTIP = "Used to initialize the connection between the RFID module and the arduino board";
Blockly.Msg.RFID_detection_TEXT = "Detecting a card or badge";
Blockly.Msg.RFID_detection_TOOLTIP = "Whether or not a card (or badge) is presented in front of our RFID module. If so, a connection is opened between the 2.";
Blockly.Msg.RFID_reception_cle_TEXT = "Information sent by card or badge";
Blockly.Msg.RFID_reception_cle_TOOLTIP = "Tell if information is sent to RFID, or not";
Blockly.Msg.RFID_lecture_cle_TEXT = "information send by RFID tag";
Blockly.Msg.RFID_lecture_cle_TOOLTIP = "Whether or not information is sent to our RFID module";
Blockly.Msg.RFID_fermeture_TEXT = "Closing the Open RFID Connection";
Blockly.Msg.RFID_fermeture_TOOLTIP = "Allows you to close the open connection between the RFID module and the card (or badge).";
Blockly.Msg.RFID_valeur_cle_TEXT = "Value of the information sent by the RFID tag";
Blockly.Msg.RFID_valeur_cle_TOOLTIP = "Enables us to know the value of the information sent to our RFID module";
Blockly.Msg.RFID_code_acces_TEXT = "Initialize the access code";
Blockly.Msg.RFID_code_acces_INPUT1 = "Value 1";
Blockly.Msg.RFID_code_acces_INPUT2 = "Value 2";
Blockly.Msg.RFID_code_acces_INPUT3 = "Value 3";
Blockly.Msg.RFID_code_acces_INPUT4 = "Value 4";
Blockly.Msg.RFID_code_acces_TOOLTIP = "Allows you to set the authorized access code";
Blockly.Msg.RFID_acces_autorise_TEXT = "Authorized access code";
Blockly.Msg.RFID_acces_autorise_TOOLTIP = "Whether or not the access code received by the RFID module matches the one that has been defined.";

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
Blockly.Msg.MBOT_RGB_ONBOARD_PIXEL_NUMBER = "choice ";
Blockly.Msg.MBOT_RGB_ONBOARD_FIELDDROPDOWN = [["0 (les deux leds)", "0"], ["1 (led gauche)", 1], ["2 (led droite)", 2]];
Blockly.Msg.MBOT_BUZZER_INTRO = "jouer un son";
Blockly.Msg.MBOT_BUZZER_TONE = "note";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_TONE = [["A", "27.5"], ["B", "30.868"], ["C", "16.352"], ["D", "18.354"], ["E", "20.602"], ["F", "21.827"], ["G", "24.5"]];
Blockly.Msg.MBOT_BUZZER_OCTAVE = "#";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_OCTAVE = [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]];
Blockly.Msg.MBOT_BUZZER_DELAY = "during";
Blockly.Msg.MBOT_BUZZER_FIELDDROPDOWN_DELAY = [["un demi", "500"], ["un quart", "250"], ["un huitième", "125"], ["tout", "1000"], ["double", "2000"], ["zéro", "0"]];

//NBR added on 2017-04-05
Blockly.Msg.MBOT_PORT_CHOICE = [["Port 1", "PORT_1"],  ["Port 2", "PORT_2"],  ["Port 3", "PORT_3"],  ["Port 4", "PORT_4"],  ["Port 5", "PORT_5"],  ["Port 6", "PORT_6"],  ["Port 7", "PORT_7"],  ["Port 8", "PORT_8"]];

Blockly.Msg.MBOT_INOUT_LINE_HELPURL = "http://learn.makeblock.com/en/me-line-follower/";
Blockly.Msg.MBOT_INOUT_LINE_TEXT = "Line Finder";
Blockly.Msg.MBOT_INOUT_LINE_INPUT = "on";
Blockly.Msg.MBOT_INOUT_LINE_TOOLTIP = "Output digital signals so the robot can reliably follow a black line on a white background";

Blockly.Msg.MBOT_INOUT_ULTRASONIC_HELPURL = "http://learn.makeblock.com/en/me-ultrasonic-sensor/";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_TEXT = "Ultrasonic Ranger";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_INPUT = "on";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT = "unit";
Blockly.Msg.MBOT_INOUT_ULTRASONIC_UNIT_CHOICE = [["cm", "cm"],  ["inch", "inch"]];
Blockly.Msg.MBOT_INOUT_ULTRASONIC_TOOLTIP = "Non-contact distance measurement module";

Blockly.Msg.MBOT_IR_PORT_CHOICE = [["Internal", "0"],  ["Port 1", "PORT_1"],  ["Port 2", "PORT_2"],  ["Port 3", "PORT_3"],  ["Port 4", "PORT_4"],  ["Port 5", "PORT_5"],  ["Port 6", "PORT_6"],  ["Port 7", "PORT_7"],  ["Port 8", "PORT_8"]];
Blockly.Msg.MBOT_RECEPTEUR_IR_HELPURL = "http://wiki.seeed.cc/Grove-Infrared_Receiver/";
Blockly.Msg.MBOT_RECEPTEUR_IR_TEXT = "IR Receiver";
Blockly.Msg.MBOT_RECEPTEUR_IR_INPUT = "on";
Blockly.Msg.MBOT_RECEPTEUR_IR_TOOLTIP = "input numeric";

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

//Added september 16th 2017
Blockly.Msg.VITESSE_ROTATION_HELPURL = "on going redaction";
Blockly.Msg.VITESSE_ROTATION_TEXT = "the rotational speed ";
Blockly.Msg.VITESSE_ROTATION_INPUT = "of the cups (revolutions/minute) on the spindle n°";
Blockly.Msg.VITESSE_ROTATION_TOOLTIP = "Measurement of the rotation speed of the cups (with a reed switch) in revolutions per minute (rpm) every 5 seconds";

Blockly.Msg.VITESSE_VENTMS_HELPURL = "on going redaction";
Blockly.Msg.VITESSE_VENTMS_TEXT = "Measuring wind speed (in m/s)";
Blockly.Msg.VITESSE_VENTMS_INPUT = "Sensor connected to the spindle n°";
Blockly.Msg.VITESSE_VENTMS_RAYON = "Radius of the anemometer arms (in cm)";
Blockly.Msg.VITESSE_VENTMS_COEFF = "Calibration coefficient ";
Blockly.Msg.VITESSE_VENTMS_TOOLTIP = "Measurement of wind speed (with a reed switch) in meter per second (m/s) every 5 seconds";

Blockly.Msg.VITESSE_VENTKMH_HELPURL = "on going redaction";
Blockly.Msg.VITESSE_VENTKMH_TEXT = "Measuring wind speed (in km/h)";
Blockly.Msg.VITESSE_VENTKMH_INPUT = "Sensor connected to the spindle n°";
Blockly.Msg.VITESSE_VENTKMH_RAYON = "Radius of the anemometer arms (in cm)";
Blockly.Msg.VITESSE_VENTKMH_COEFF = "Calibration coefficient ";
Blockly.Msg.VITESSE_VENTKMH_TOOLTIP = "Measurement of wind speed (with a reed switch) in kilometers per hour (km/h) every 5 seconds";

Blockly.Msg.VITESSE_VENTNOEUD_HELPURL = "on going redaction";
Blockly.Msg.VITESSE_VENTNOEUD_TEXT = "Measuring wind speed (in knot)";
Blockly.Msg.VITESSE_VENTNOEUD_INPUT = "Sensor connected to the spindle n°";
Blockly.Msg.VITESSE_VENTNOEUD_RAYON = "Radius of the anemometer arms (in cm)";
Blockly.Msg.VITESSE_VENTNOEUD_COEFF = "Calibration coefficient ";
Blockly.Msg.VITESSE_VENTNOEUD_TOOLTIP = "Measurement of wind speed (with a reed switch) in knot every 5 seconds";

Blockly.Msg.FORCE_BEAUFORT_HELPURL = "on going redaction";
Blockly.Msg.FORCE_BEAUFORT_TEXT1 = "Wind force measurement in Beaufort";
Blockly.Msg.FORCE_BEAUFORT_TEXT2= "the measurement sends an integer from 0 to 12";
Blockly.Msg.FORCE_BEAUFORT_INPUT = "Sensor connected to the spindle n°";
Blockly.Msg.FORCE_BEAUFORT_RAYON = "Radius of the anemometer arms (in cm)";
Blockly.Msg.FORCE_BEAUFORT_COEFF = "Calibration coefficient ";
Blockly.Msg.FORCE_BEAUFORT_TOOLTIP = "Wind force measurement (with a reed switch) in Beaufort Degree every 5 seconds";

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

//******** MRduino Robot (Mace Robotics)
Blockly.Msg.MRduino_init="MRduino Robot Initialisation ";
Blockly.Msg.MRduino_forward="Forward";
Blockly.Msg.MRduino_forward_mm="Forward distance";
Blockly.Msg.MRduino_controlEnable="Enable controle";
Blockly.Msg.MRduino_controlDisable="Disable controle";
Blockly.Msg.MRduino_stop="Stop";
Blockly.Msg.MRduino_back="Back";
Blockly.Msg.MRduino_back_mm="Back distance";
Blockly.Msg.MRduino_turnLeft="Turn left";
Blockly.Msg.MRduino_turnLeft_degree="Turn left degre";
Blockly.Msg.MRduino_turnRight="Turn right";
Blockly.Msg.MRduino_turnRight_degree="Turn right degré";
Blockly.Msg.MRduino_proxSensor1="proximity sensor 1";
Blockly.Msg.MRduino_proxSensor2="proximity sensor 2";
Blockly.Msg.MRduino_proxSensor3="proximity sensor 3";
Blockly.Msg.MRduino_proxSensor4="proximity sensor 4";
Blockly.Msg.MRduino_proxSensor5="proximity sensor 5";
Blockly.Msg.MRduino_proxSensor6="proximity sensor 6";
Blockly.Msg.MRduino_ambiantLight1="Light sensor 1";
Blockly.Msg.MRduino_ambiantLight2="Light sensor 2";
Blockly.Msg.MRduino_ambiantLight3="Light sensor 3";
Blockly.Msg.MRduino_ambiantLight4="Light sensor 4";
Blockly.Msg.MRduino_ambiantLight5="Light sensor 5";
Blockly.Msg.MRduino_ambiantLight6="Light sensor 6";
Blockly.Msg.MRduino_groundSensor1="Ground sensot 1";
Blockly.Msg.MRduino_groundSensor2="Ground sensot 2";
Blockly.Msg.MRduino_groundSensor3="Ground sensot 3";
Blockly.Msg.MRduino_led1On="led 1 on";
Blockly.Msg.MRduino_led2On="led 2 on";
Blockly.Msg.MRduino_led3On="led 3 on";
Blockly.Msg.MRduino_led1Off="led 1 off";
Blockly.Msg.MRduino_led2Off="led 2 off";
Blockly.Msg.MRduino_led3Off="led 3 off";
Blockly.Msg.MRduino_led1Toggle="led 1 toggle";
Blockly.Msg.MRduino_led2Toggle="led 2 toggle";
Blockly.Msg.MRduino_led3Toggle="led 3 toggle";
Blockly.Msg.MRduino_battery="battery tension";
Blockly.Msg.MRduino_temperature="temperature";

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
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT1 = "ピンのモードを設定　ピン";//"Set Pin Mode for pin"
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_INPUT2 = "モード";//"to"
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_DROPDOWN = [["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"], ["INPUT_PULLUP", "INPUT_PULLUP"]];
Blockly.Msg.ARDUINO_INOUT_DIGITAL_MODE_TOOLTIP = "ピンの入出力モードを設定する";//"Configures the specified pin to behave either as an input or an output"

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
Blockly.Msg.jfblocks_last_value_titre = "dernière valeur";
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

//******** KEYPAD
Blockly.Msg.KEYPAD_TOUCHE_HELPURL = 'https://www.adafruit.com/products/419';
Blockly.Msg.KEYPAD_TOUCHE_TEXT = "Key pressed";
Blockly.Msg.KEYPAD_TOUCHE_LIGNES = "Rows";
Blockly.Msg.KEYPAD_TOUCHE_TOOLTIP = "Returns keypressed, empty string otherwise";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE1 = "Row 1";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE2 = "Row 2";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE3 = "Row 3";
Blockly.Msg.KEYPAD_TOUCHE_LIGNE4 = "Row 4";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE1 = "Column 1";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE2 = "Column 2";
Blockly.Msg.KEYPAD_TOUCHE_COLONNE3 = "Column 3";

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

//******** Matrix Neopixel DEL RGB 8 x 8 https://www.dfrobot.com/wiki/index.php/8x8_RGB_LED_Matrix_SKU:_DFR0459
Blockly.Msg.MatrixLED_WS2812B_init = "Led RGB WS2812B Init";
Blockly.Msg.MatrixLED_WS2812B_clean = "Led RGB WS2812B shutdown";
Blockly.Msg.MatrixLED_WS2812B_init_Pin = "Pin =";
Blockly.Msg.MatrixLED_WS2812B_init_Number_of_Pixels = "Number of pixels =";
Blockly.Msg.MatrixLED_WS2812B_DEFAULT_NAME = "MATRIX_RGB";
Blockly.Msg.MatrixLED_WS2812B_setBrightness = "Matrix";
Blockly.Msg.MatrixLED_WS2812B_Brightness = "set brightness to";
Blockly.Msg.MatrixLED_WS2812B_URL = "https://www.dfrobot.com/wiki/index.php/8x8_RGB_LED_Matrix_SKU:_DFR0459";

Blockly.Msg.MatrixLED_WS2812B_setPixelColor = "Matrix";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Red = "set red (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Green = "set green (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Blue = "set blue (255 max) =";
Blockly.Msg.MatrixLED_WS2812B_setPixelColor_Pixel_Number = "for pixel number (0 first) =";

//******** Storage : SD card + EEPROM https://www.arduino.cc/en/Reference/EEPROM
Blockly.Msg.STORAGE_WRITE_SD_FILE = "SDカード, 書き込みファイル";//"SD Card, write file"
Blockly.Msg.STORAGE_SD_DATA = "データ";//"with data"
Blockly.Msg.STORAGE_SD_NEWLINE = "改行?";//"newline?"
Blockly.Msg.STORAGE_EEPROM_WRITE_LONG = "EEPROM 書き込み (long) アドレス";//"EEPROM write (long) adress"
Blockly.Msg.STORAGE_DATA_LONG = "データ";//"data"
Blockly.Msg.STORAGE_EEPROM_READ_LONG = "EEPROM - read (long) アドレス";//"EEPROM - read (long) adress"
Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE = "EEPROM - 書き込み (byte) アドレス";//"EEPROM - write (byte) adress"
Blockly.Msg.STORAGE_DATA_BYTE = "データ";//"data"
Blockly.Msg.STORAGE_EEPROM_READ_BYTE = "EEPROM - 書き込み (byte) アドレス";//"EEPROM - write (byte) adress"

//******** ESC controller for brushless motor
Blockly.Msg.DRONE_INTRO = "Motor control";
Blockly.Msg.DRONE_PIN = "pin  #";
Blockly.Msg.DRONE_PWM = "pwm [0~255]";
Blockly.Msg.DRONE_HELPURL = "http://www.instructables.com/id/ESC-Programming-on-Arduino-Hobbyking-ESC/";
Blockly.Msg.DRONE_TOOLTIP = "controller must be in good mode";

//******** gyroscope + temperature ADXL362
Blockly.Msg.ADXL362_MISC_HELPURL = "http://annem.github.io/ADXL362/";
Blockly.Msg.ADXL362_INIT_TITLE = "connect gyroscop (/!\\ 3,3 V /!\\)";
Blockly.Msg.ADXL362_INIT_TOOLTIP = "bus SPI Arduino card, this Pro Mini is just an exAmple";
Blockly.Msg.ADXL362_XVALUE_TITLE = "X orientation";
Blockly.Msg.ADXL362_XVALUE_TOOLTIP = "look at X/Y on ADXL362 card";
Blockly.Msg.ADXL362_YVALUE_TITLE = "Y orientation";
Blockly.Msg.ADXL362_YVALUE_TOOLTIP = "look at X/Y on ADXL362 card";
Blockly.Msg.ADXL362_ZVALUE_TITLE = "Z orientation";
Blockly.Msg.ADXL362_ZVALUE_TOOLTIP = "look at X/Y on ADXL362 card";
Blockly.Msg.ADXL362_TEMPVALUE_TITLE = "temperature";
Blockly.Msg.ADXL362_TEMPVALUE_TOOLTIP = "test";

//******** FRESNEL : Implementation I2CSoftwareLibrary   http://playground.arduino.cc/Main/SoftwareI2CLibrary
//******** FRESNEL : SPI 
Blockly.Msg.I2C_INIT_TEXT = "I2C_INIT";
Blockly.Msg.I2C_INIT_PIN_SCL = "PIN_SCL";
Blockly.Msg.I2C_INIT_PORT_SCL = "PORT_SCL";
Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SCL = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
Blockly.Msg.I2C_INIT_PIN_SDA = "PIN_SDA";
Blockly.Msg.I2C_INIT_PORT_SDA = "PORT_SDA";
Blockly.Msg.I2C_INIT_FIELDDROPDOWN_SDA = [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]];
Blockly.Msg.I2C_INIT_TOOLTIP = "configure les broches SDA et SCL";
Blockly.Msg.I2C_INIT_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";     

Blockly.Msg.I2C_START_TEXT = "I2C_START";
Blockly.Msg.I2C_START_ADRESS = "adresse";
Blockly.Msg.I2C_START_RW = "R/W";
Blockly.Msg.I2C_START_TOOLTIP = "envoi un Start + adresse de l'esclave + R/W";
Blockly.Msg.I2C_START_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";
Blockly.Msg.I2C_START_FIELDDROPDOWN = [["W (écriture)", "I2C_WRITE"], ["R (lecture)", "I2C_READ"]];

Blockly.Msg.I2C_RESTART_TEXT = "I2C_RESTART";
Blockly.Msg.I2C_RESTART_ADRESS = "adresse";
Blockly.Msg.I2C_RESTART_RW = "R/W";
Blockly.Msg.I2C_RESTART_FIELDDROPDOWN = [["W (écriture)", "I2C_WRITE"], ["R (lecture)", "I2C_READ"]];
Blockly.Msg.I2C_RESTART_TOOLTIP = "envoi un REStart + adresse de l'esclave + R/W";
Blockly.Msg.I2C_RESTART_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_STOP_TEXT = "I2C_STOP";
Blockly.Msg.I2C_STOP_TOOLTIP = "envoi un Stop et donc libère le bus";
Blockly.Msg.I2C_STOP_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_WRITE_TEXT = "I2C_WRITE";
Blockly.Msg.I2C_WRITE_DATA = "data";
Blockly.Msg.I2C_WRITE_TOOLTIP = "écrit un octet de donnée";
Blockly.Msg.I2C_WRITE_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";

Blockly.Msg.I2C_READ_TEXT = "I2C_READ";
Blockly.Msg.I2C_READ_LAST = "Last? : ";
Blockly.Msg.I2C_READ_FIELDDROPDOWN = [["non","false"], ["oui","true"]];
Blockly.Msg.I2C_READ_TOOLTIP = "Reçoit un octet de donnée avec l'envoi d'un paramètre last = oui pour le dernier";
Blockly.Msg.I2C_READ_HELPURL = "http://playground.arduino.cc/Main/SoftwareI2CLibrary";
Blockly.Msg.I2C_SCAN_TEXT = "lister les périphériques I²C dans la console série";
Blockly.Msg.I2C_SCAN_TOOLTIP = "Scanne les périphériques et retourne les adresses dans la console à régler sur 115200 bauds";
Blockly.Msg.I2C_SCAN_HELPURL = "http://info.technologiescollege.fr/wiki/doku.php/fr/arduino/lcd-i2c";

///////////////////////////

Blockly.Msg.I2C_INIT_HW_TITRE = "I2C_INIT";
Blockly.Msg.I2C_INIT_HW_TOOLTIP = "Initialisation du bus I2C par le maitre";
Blockly.Msg.I2C_INIT_HW_HELPURL = "";

Blockly.Msg.I2C_STOP_HW_TITRE = "I2C_STOP";
Blockly.Msg.I2C_STOP_HW_TOOLTIP = "Le maitre libère le bus";
Blockly.Msg.I2C_STOP_HW_HELPURL = "";

Blockly.Msg.I2C_RESTART_HW_TITRE = "I2C_RESTART";
Blockly.Msg.I2C_RESTART_HW_TOOLTIP = "Le maitre garde la main sur le bus";
Blockly.Msg.I2C_RESTART_HW_HELPURL = "";

Blockly.Msg.I2C_WRITE_HW_TEXT = "I2C_WRITE";
Blockly.Msg.I2C_WRITE_HW_DATA = "Data";
Blockly.Msg.I2C_WRITE_HW_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Décimal",""]];
Blockly.Msg.I2C_WRITE_HW_TOOLTIP = "Le maitre écrit un octet de donnée";
Blockly.Msg.I2C_WRITE_HW_HELPURL = "";

Blockly.Msg.I2C_START_HW_TEXT = "I2C_START";
Blockly.Msg.I2C_START_HW_DATA = "Slave Address";
Blockly.Msg.I2C_START_HW_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Décimal",""]];
Blockly.Msg.I2C_START_HW_TOOLTIP = "Le maitre initie une transmission avec l'esclave identifié par l'adresse";
Blockly.Msg.I2C_START_HW_HELPURL = "";

Blockly.Msg.I2C_REQUEST_HW_TEXT = "I2C_REQUEST";
Blockly.Msg.I2C_REQUEST_HW_DATA = "Slave Address";
Blockly.Msg.I2C_REQUEST_HW_FIELDDROPDOWN = [["0x","0x"], ["0b",,"0b"],["Décimal",""]];
Blockly.Msg.I2C_REQUEST_HW_NB_BYTES = "Number of Bytes to read";
Blockly.Msg.I2C_REQUEST_HW_TOOLTIP = "Le maitre enregistre dans une mémoire temporaire (buffer) le nombre d'octets demandé à l'esclave identifié par l'adresse";
Blockly.Msg.I2C_REQUEST_HW_HELPURL = "";

Blockly.Msg.I2C_AVAILABLE_HW_TITRE = "I2C_DATA_AVAILABLE";
Blockly.Msg.I2C_AVAILABLE_HW_TOOLTIP = "Renvoie le nombre de données qui reste à lire dans le buffer";
Blockly.Msg.I2C_AVAILABLE_HW_HELPURL = "";

Blockly.Msg.I2C_DATA_HW_TITRE = "I2C_DATA";
Blockly.Msg.I2C_DATA_HW_TOOLTIP = "Lit une donnée du buffer";
Blockly.Msg.I2C_DATA_HW_HELPURL = "";

//////////////////////////

Blockly.Msg.icn_HelpUrl = "http://www.ebay.fr/cln/dvarrel/robot-arduino/271320303014";
Blockly.Msg.icn_ds18b20_HelpUrl = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino";


Blockly.Msg.SPI_INIT_TEXT = "SPI_INIT";
Blockly.Msg.SPI_INIT_SPEED = "fréquence (MHz)"
Blockly.Msg.SPI_INIT_MODE = "mode";  
Blockly.Msg.SPI_INIT_MODE_FIELDDROPDOWN = [["mode 0 (0,0)", "SPI_MODE0"], ["mode 1 (0,1)", "SPI_MODE1"], ["mode 2 (1,0)", "SPI_MODE2"], ["mode 3 (1,1)", "SPI_MODE3"]];
Blockly.Msg.SPI_INIT_BITORDER = "ordre des bits";
Blockly.Msg.SPI_INIT_BITORDER_FIELDDROPDOWN = [["MSB -> LSB", "MSBFIRST"], ["LSB -> MSB", "LSBFIRST"]];
Blockly.Msg.SPI_INIT_TOOLTIP = " configuration de la liaison SPI" ; 
Blockly.Msg.SPI_INIT_HELPURL = " " ;

Blockly.Msg.SPI_SEND_TEXT = "SPI_SEND";
Blockly.Msg.SPI_SEND_DATA = "donnée";
Blockly.Msg.SPI_SEND_TOOLTIP = " envoi de la donnée par bus SPI";
Blockly.Msg.SPI_SEND_FIELDDROPDOWN = [["0x","0x"], ["0b","0b"],["Décimal",""]];
Blockly.Msg.SPI_SEND_HELPURL = "";

Blockly.Msg.SPI_RECEIVE_TEXT = "SPI_RECEIVE";
Blockly.Msg.SPI_RECEIVE_TOOLTIP = "récupère une donnée";
Blockly.Msg.SPI_RECEIVE_HELPURL = "" ;

//******** light sensor TSL2561
Blockly.Msg.TSL2561_MISC_HELPURL = "https://learn.adafruit.com/tsl2561/wiring-the-tsl2561-sensor";
Blockly.Msg.TSL2561_READ_TITLE = "light by lux";
Blockly.Msg.TSL2561_READ_TOOLTIP = "returns light value in standard SI lux units, (max 17 000 lux)";
Blockly.Msg.TSL2561_INIT_TITLE = "configuration of TSL2561 sensor";
Blockly.Msg.TSL2561_INIT_TOOLTIP = "autogain is on and integration time is 13 ms";

//**** AUTODUINO ************************************************************************************
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

//**** BLYNK**www.Blync.cc***Added**by**Mr**leroy**July**24th**************************************************************
Blockly.Msg.BLYNK_HELPURL = 'http://docs.blynk.cc/';
Blockly.Msg.BLYNK_usb_TEXT ='Arduino Uno linked in USB';
Blockly.Msg.BLYNK_usb_INPUT ='Input your ';
Blockly.Msg.BlYNK_usb_TOOLTIP = "Arduino Uno and USB";
Blockly.Msg.BLYNK_AUTH = "Auth";
Blockly.Msg.BLYNK_CONNECT_TITLE = "Connect to Blynk Server";
Blockly.Msg.BLYNK_CONNECT_TOOLTIP = "Check connection";
Blockly.Msg.BLYNK_EMAIL_TITLE = "Send a Email";
Blockly.Msg.BLYNK_EMAIL_TOOLTIP = "";
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE = "Arduino Uno linked in ";
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP = "";
Blockly.Msg.BLYNK_MERGE_PARAM_TITLE = "Get Merge Parameter";
Blockly.Msg.BLYNK_MERGE_PARAM_TOOLTIP = "";
Blockly.Msg.BLYNK_NOTIFY_TITLE = "Push Notify";
Blockly.Msg.BLYNK_NOTIFY_TOOLTIP = "";
Blockly.Msg.BLYNK_PARAM_TITLE = "Get Parameter";
Blockly.Msg.BLYNK_PARAM_TOOLTIP = "";
Blockly.Msg.BLYNK_TWEET_TITLE = "Tweet";
Blockly.Msg.BLYNK_TWEET_TOOPTIP = "";
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE = "Send to Virtual PIN";
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP = "";
Blockly.Msg.BLYNK_WRITE_TITLE = "Get from Virtual PIN";
Blockly.Msg.BLYNK_WRITE_TOOLTIP = "";
Blockly.Msg.BLYNK_ETHERNET_VERSION_1 = "Ethernet";
Blockly.Msg.BLYNK_ETHERNET_VERSION_2 = "Ethernet2";
Blockly.Msg.BLYNK_MAC_ADDRESS = "Mac Address";
Blockly.Msg.BLYNK_VALUE = "Value";
Blockly.Msg.BLYNK_EMAIL_ADDRESS = "Address";
Blockly.Msg.BLYNK_EMAIL_BODY = "Body";
Blockly.Msg.BLYNK_EMAIL_TITLE_2 = "Title";
Blockly.Msg.BLYNK_TEXT = "Text";

//**** ETHERNET *****************************************************************************//
Blockly.Msg.ETHERNET_VERSION_FIELDDROPDOWN = [["Lib_EthernetV1",""],["Lib_EthernetV2","2"],["Lib_Proteus","PROTEUS"]];

Blockly.Msg.ETHERNET_AVAILABLE_HELPURL = "https://www.arduino.cc/en/Reference/ClientAvailable";
Blockly.Msg.ETHERNET_AVAILABLE_TITLE = "Client.availalbe";
Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP = "Returns the number of bytes available for reading (that is, the amount of data that has been written to the client by the server it is connected to).";
Blockly.Msg.ETHERNET_BEGIN_DHCP_TITLE = "Begin (DHCP) Client";
Blockly.Msg.ETHERNET_BEGIN_DHCP_SERVER_TITLE = "Begin (DHCP) Server";
Blockly.Msg.ETHERNET_BEGIN_STATICIP_SERVER_TITLE = "Begin (StaticIP) Server";
Blockly.Msg.ETHERNET_BEGIN_STATICIP_CLIENT_TITLE = "Begin (StaticIP) Client";
////
Blockly.Msg.ETHERNET_STATICIP_IP = "IP fixe de la carte";
Blockly.Msg.ETHERNET_STATICIP_DNS = "DNS local";
Blockly.Msg.ETHERNET_STATICIP_GATEWAY = "Passerelle";
Blockly.Msg.ETHERNET_STATICIP_SUBNET = "Masque sous-réseau";
////
Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP = "Using Ethernet.begin(mac) with the proper network setup, the Ethernet shield will automatically obtain an IP address.";
Blockly.Msg.ETHERNET_BEGIN_HELPURL = "https://www.arduino.cc/en/Reference/EthernetBegin";
Blockly.Msg.ETHERNET_BEGIN_TITLE = "Begin";
Blockly.Msg.ETHERNET_BEGIN_TOOLTIP = "Initializes the ethernet library and network settings.";
Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TITLE = "Client Request"; 
Blockly.Msg.ETHERNET_CLIENT_FOR_SERVER_TOOLTIP = "A client has sent a request"; 
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL = "https://www.arduino.cc/en/Reference/ClientPrintln";
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE = "Client.Println";
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP = "Print data, followed by a carriage return and newline, to the server a client is connected to. Prints numbers as a sequence of digits, each an ASCII character (e.g. the number 123 is sent as the three characters '1', '2', '3').";
Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL = "https://www.arduino.cc/en/Reference/ClientPrint";
Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE = "Client.Print";
Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP = "Print data to the server that a client is connected to. Prints numbers as a sequence of digits, each an ASCII character (e.g. the number 123 is sent as the three characters '1', '2', '3').";
Blockly.Msg.ETHERNET_CONNECTED_HELPURL = "https://www.arduino.cc/en/Reference/ClientConnected";
Blockly.Msg.ETHERNET_CONNECTED_TITLE = "Client.Connected";
Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP = "Returns true if the client is connected, false if not.";
Blockly.Msg.ETHERNET_CONNECT_HELPURL = "https://www.arduino.cc/en/Reference/ClientConnect";
Blockly.Msg.ETHERNET_CONNECT_TITLE = "Client.Connect";
Blockly.Msg.ETHERNET_CONNECT_TOOLTIP = "Connects to a specified IP address and port. The return value indicates success or failure. Also supports DNS lookups when using a domain name.";
Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL = "";
Blockly.Msg.ETHERNET_GET_REQUEST_TITLE = "GET Request";
Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP = "Create GET Request.";
Blockly.Msg.ETHERNET_GET_REQUEST_URL = "URL";
Blockly.Msg.ETHERNET_GET_REQUEST_SERVER = "serveur hôte";
////
Blockly.Msg.ETHERNET_HTML_SEND_TITLE = "SEND HTML PAGE";
Blockly.Msg.ETHERNET_HTML_SEND_HTMLJS = "page html/JS";
Blockly.Msg.ETHERNET_HEADER_SEND_TITLE = "SEND HEADER HTTP/1.1";
Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN = [["text/html", "text"], ["image/png", "png"]];
Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TITLE = "Envoyer Page HTML Part :";
Blockly.Msg.ETHERNET_HEADER_SEND_PAGE_TOOLTIP = "Envoyer une page html inclue dans un fichier HTML.h";
////
Blockly.Msg.ETHERNET_HEADER_SEND_FIELDDROPDOWN2 = [["OK", "200"], ["Pas de contenu", "204"], ["Erreur", "404"]];
////
Blockly.Msg.ETHERNET_PARSER_INIT_TITLE = "Initialisation Analyseur de requête";
Blockly.Msg.ETHERNET_PARSER_PARSE_TITLE = "";
Blockly.Msg.ETHERNET_PARSER_PARSE_INPUT = "Analyse de la requête";//"Requête reçue";
Blockly.Msg.ETHERNET_PARSER_END_TITLE = "Fin de requête ?";
Blockly.Msg.ETHERNET_PARSER_COUNT_TITLE = "nombre de paramètres détectés ?";
Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_TITLE = "recupère le contenu du paramètre : ";
Blockly.Msg.ETHERNET_PARSER_GETMYPARAM_PARAM = "nom du paramètre: ";
Blockly.Msg.ETHERNET_PARSER_PURGE_TITLE = "Fin de l'analyse";
////
Blockly.Msg.ETHERNET_ATTENTE_CLIENT_TITLE = "Attente requête Client";
Blockly.Msg.ETHERNET_PARSERV2_CREATION_TITLE = "Initialisation Analyseur de requête";
Blockly.Msg.ETHERNET_PARSERV2_CREATION_TOOLTIP = "Créer un objet Analyseur";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TITLE = "Lecture de la requête";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_FLUX = "flux à analyser";
Blockly.Msg.ETHERNET_PARSERV2_LECTURE_TOOLTIP = "Lecture et stockage du flux utile d'un POST ou d'un GET";
Blockly.Msg.ETHERNET_PARSERV2_PARSING_TITLE = "Nombre de paramètres détectés";
Blockly.Msg.ETHERNET_PARSERV2_PARSING_TOOLTIP = "Renvois le nombre de paramètres détectés";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TITLE = "Nom du paramètre";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_TOOLTIP = "Renvoie le nom d'un paramètre ou 'inconnu'";
Blockly.Msg.ETHERNET_PARSERV2_GETNAME_PARAM = "N° :";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TITLE = "Valeur du paramètre";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_TOOLTIP = "Renvoie la valeur d'un paramètre";
Blockly.Msg.ETHERNET_PARSERV2_GETVALUE_PARAM = "Nom : ";
Blockly.Msg.ETHERNET_PARSERV2_FREE_TITLE = "Fin de l'analyse de la requête (obligatoire)";
Blockly.Msg.ETHERNET_PARSERV2_FREE_TOOLTIP = "RaZ du Analyseur";
////
Blockly.Msg.ETHERNET_LOCALIP_HELPURL = "https://www.arduino.cc/en/Reference/EthernetLocalIP";
Blockly.Msg.ETHERNET_LOCALIP_TITLE = "localIP";
Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP = "Returns the IP address of the Ethernet shield";
Blockly.Msg.ETHERNET_MAC_ADDRESS = "MAC Address";
Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP = "Edit Mac Address";
Blockly.Msg.ETHERNET_PORT = "Port";
Blockly.Msg.ETHERNET_POST_DATA = "Data";
Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL = "";
Blockly.Msg.ETHERNET_POST_REQUEST_TITLE = "POST Request";
Blockly.Msg.ETHERNET_POST_REQUEST_URL = "URL";
Blockly.Msg.ETHERNET_POST_REQUEST_SERVER = "host server";
Blockly.Msg.ETHERNET_POST_REQUEST_DATA ="Data";
Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP = "Create POST Request.";
Blockly.Msg.ETHERNET_READ_HELPURL = "https://www.arduino.cc/en/Reference/ClientRead";
Blockly.Msg.ETHERNET_READ_TITLE = "Client.Read";
Blockly.Msg.ETHERNET_READ_TOOLTIP = "Read the next byte received from the server the client is connected to (after the last call to read()).";
Blockly.Msg.ETHERNET_STOP_HELPURL = "https://www.arduino.cc/en/Reference/ClientStop";
Blockly.Msg.ETHERNET_STOP_TITLE = "Client.Stop";
Blockly.Msg.ETHERNET_STOP_TOOLTIP = "Disconnect from the server.";
Blockly.Msg.ETHERNET_VERSION_1 = "Ethernet";
Blockly.Msg.ETHERNET_VERSION_2 = "Ethernet2";
Blockly.Msg.ETHERNET_VERSION_V2 = "Ethernet_v2";
////// ETHERNET WIFI ESP8266 /////
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_HELPURL = "https://www.arduino.cc/en/Reference/WiFi";
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TITLE = "Begin (DHCP) WIFI Server"; 
Blockly.Msg.ETHERNET_WIFI_SSID = "SSID";
Blockly.Msg.ETHERNET_WIFI_PASS = "PASS";
Blockly.Msg.ETHERNET_WIFI_BEGIN_SERVER_TOOLTIP = "initialisation de la liaison WIFI";
Blockly.Msg.ETHERNET_CLIENT_FOR_WIFI_SERVER_TITLE = "Requête Client sur serveur WIFI";
Blockly.Msg.ETHERNET_WIFI_LOCALIP_TITLE = "adresse IP locale (WIFI)";
Blockly.Msg.ETHERNET_WIFI_LOCALIP_TOOLTIP = "Retourne l'IP locale";

//********************null*************//
Blockly.Msg.NULL_TOOLTIP = "free text to describe or create algorithms";

//********************HX711 Load cell*************//
Blockly.Msg.HX711_HELPURL = "https://learn.sparkfun.com/tutorials/load-cell-amplifier-hx711-breakout-hookup-guide?_ga=2.253088841.1374984898.1508777134-607511387.1508777134";
Blockly.Msg.HX711_INIT_TITLE = "load sensor calibration, read calibration factor in serial console, open it";
Blockly.Msg.HX711_INIT_TOOLTIP = "without weight on it";
Blockly.Msg.HX711_READ_TITLE = "weight (kg)";
Blockly.Msg.HX711_READ_TEXT = "with factor correction";
Blockly.Msg.HX711_READ_TOOLTIP = "correction factor from calibration block";

//********************SENSORS ACTUATORS*************//
Blockly.Msg.lm35_1 = "température mesurée";
Blockly.Msg.lm35_2 = "renvoie la température mesurée par un LM35 en degré celcius(de 0 à 80°)";
Blockly.Msg.matrice8x8 = "symbole de la matrice";
Blockly.Msg.matrice8x8_symbole_TOOLTIP = "définition d'un symbole pour la matrice :\n 0 éteint une DEL\n 1 allume une DEL";
Blockly.Msg.ultrason_distance1 = "distance mesurée";
Blockly.Msg.ultrason_distance2 = "retourne la distance mesurée (de 0 à 100 cm)";
Blockly.Msg.lp2i_mp3_prev = "lire le fichier mp3 précédent";

//********************Pololu QTR-1RC*************//
Blockly.Msg.QTR_1RC_HELPURL = "https://ay128.lesusinesnouvelles.com/#!/projects/utilisation-de-capteur-qtr-1rc-avec-blockly";
Blockly.Msg.QTR_1RC_SENSORCALIBRATION = "calibration for QTR-1RC";
Blockly.Msg.QTR_1RC_SENSORCALIBRATION_TOOLTIP = "This has to be used at the start of the robot for calibrate the reading of the sensors.";
Blockly.Msg.QTR_1RC_ATTACH1 = "attach QTR-1RC sensor";
Blockly.Msg.QTR_1RC_ATTACH2 = "with name";
Blockly.Msg.QTR_1RC_DEFAULT_NAME = "QTR-1RC";
Blockly.Msg.QTR_1RC_INPUT = "PIN#";
Blockly.Msg.QTR_1RC_ATTACH_TOOLTIP = "Create an object for your type of sensor (RC).";
Blockly.Msg.QTR_1RC_READ_INPUT1 = "reflectance value of QTR-1RC";
Blockly.Msg.QTR_1RC_READ_INPUT2 = "named";
Blockly.Msg.QTR_1RC_READ_TOOLTIP = "Return value of sensors QTR-1RC.";
Blockly.Msg.QTR_1RC_COMPONENT = "QTR-1RC";

//********************Nintendo Wiimote nunchuck*************//
Blockly.Msg.WII_JOYSTICK = "joystick";
Blockly.Msg.WII_JOYSTICK_AXE = "direction";
Blockly.Msg.WII_JOYSTICK_TOOLTIP = "read values between 0 and 255";
Blockly.Msg.WII_JOYSTICK_HELPURL = "http://www.pobot.org/Wii-Nunchuck-Arduino-controle-servomoteurs.html";
Blockly.Msg.WII_ACCEL1 = "acceleration";
Blockly.Msg.WII_ACCEL2 = "on axis";
Blockly.Msg.WII_ACCEL_TOOLTIP = "3D angular accelerations";
Blockly.Msg.WII_BUTTON1 = "button";
Blockly.Msg.WII_BUTTON2 = "is";
Blockly.Msg.WII_BUTTON_TOOLTIP = "boolean test";
Blockly.Msg.WII_UPDATE = "update nunchuck";
Blockly.Msg.WII_UPDATE_TOOLTIP = "I2C bus: D is Data (SDA) and C is Clock (SDC),\nexample A4 & A5 for an Uno";

//********************PetitBot*************//
Blockly.Msg.PETITBOT_HELPURL = "https://github.com/julienrat/petitbot";
Blockly.Msg.PETITBOT_HCSR04 = "distance value (cm)";
Blockly.Msg.PETITBOT_HCSR04_TOOLTIP = "returns value distance in cm thanks to HC-SR04 sensor";
Blockly.Msg.PETITBOT_ANALOG = "value read on A0";
Blockly.Msg.PETITBOT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023, on A0 pin";
Blockly.Msg.PETITBOT_SERVO1_TITLEA = "rotate left servo";
Blockly.Msg.PETITBOT_SERVO1_TITLEB = "direction";
Blockly.Msg.PETITBOT_SERVO1_TOOLTIP = "returns a value between 0 and 1023, on A0 pin";
Blockly.Msg.PETITBOT_SERVO2_TITLEA = "rotate right servo";
Blockly.Msg.PETITBOT_SERVO2_TITLEB = "direction & speed (0~180)";
Blockly.Msg.PETITBOT_SERVO2_TOOLTIP = "rotate in 0~90° in a direction, then 90~180° to another";
Blockly.Msg.PETITBOT_SERVO31_TITLEA = "rotate servo 1";
Blockly.Msg.PETITBOT_SERVO31_TITLEB = "angle (0~180°)";
Blockly.Msg.PETITBOT_SERVO31_TOOLTIP = "angle of servo1 on D8";
Blockly.Msg.PETITBOT_SERVO32_TITLEA = "rotate servo 2";
Blockly.Msg.PETITBOT_SERVO32_TITLEB = "angle (0~180°)";
Blockly.Msg.PETITBOT_SERVO32_TOOLTIP = "angle of servo2 on D7";
Blockly.Msg.PETITBOT_SERVO33_TITLEA = "rotate servo 3";
Blockly.Msg.PETITBOT_SERVO33_TITLEB = "angle (0~180°)";
Blockly.Msg.PETITBOT_SERVO33_TOOLTIP = "angle of servo3 on D6";
Blockly.Msg.PETITBOT_LED_INPUT1 = "switch LED1 to";
Blockly.Msg.PETITBOT_LED_TOOLTIP1 = "swicth on/off LED on D3";
Blockly.Msg.PETITBOT_LED_INPUT2 = "switch LED2 to";
Blockly.Msg.PETITBOT_LED_TOOLTIP2 = "swicth on/off LED on D4";

////////////////////////////Adafruit_RGB_LCD_Shield///////////////////////////////////////////////////////////////////////////
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TEXT = "INIT Adafruit LCD RGB";
Blockly.Msg.Adafruit_RGB_LCD_Shield_INIT_TOOLTIP = "Initialisation du LCD";

Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TEXT = "CLEAR Adafruit LCD RGB";
Blockly.Msg.Adafruit_RGB_LCD_Shield_CLEAR_TOOLTIP = "Effaçage de l'écran LCD";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TEXT = "TEXT SCROLLING";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT = "Ecrit avec un ";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_EFFECT_FIELDDROPDOWN = [["défilement à gauche", "LEFT"], ["défilement à droite", "RIGHT"], ["défilement automatique", "AUTO"]];
Blockly.Msg.Adafruit_RGB_LCD_Shield_SCROLL_TOOLTIP = "Choix du sens de défilement du texte";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TEXT = "SET CURSOR";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_TOOLTIP = "Positionne le curseur aux coordonnées spécifiées";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_CURSOR_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TEXT = "SET RGB Backlight";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR = "COLOUR"
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_COLOUR_FIELDDROPDOWN = [["White", "0x07"],["Red", "0x01"], ["Green", "0x02"],["Yellow", "0x03"],["Teal", "0x06"], ["Blue", "0x04"],["Violet", "0x05"]];

Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_TOOLTIP = "Définit la couleur du rétro-éclairage";
Blockly.Msg.Adafruit_RGB_LCD_Shield_SET_RGB_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_DATA = "PRINT";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_TOOLTIP = "Ecrit la valeur numérique, la valeur de la variable ou la chaine de caractères spécifiée";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_PRINT_INPUTDATA = "DATA"

Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_DATA = "WRITE";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_TOOLTIP = "Ecrit le caractère correspondant au code ASCII spécifié";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_INPUTDATA = "DATA"
Blockly.Msg.Adafruit_RGB_LCD_Shield_WRITE_FORMAT_FIELDDROPDOWN = [["0x", "0x"], ["0b", "0b"], ["décimal", "1"],["variable", "2"]];

Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TEXT = "READ BUTTON";
Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_TOOLTIP = "UP = 0x08 - DOWN = 0x04 - LEFT = 0x10 - RIGHT = 0x02 - SELECT = 0x01";
Blockly.Msg.Adafruit_RGB_LCD_Shield_READ_button_HELPURL = "https://learn.adafruit.com/rgb-lcd-shield";

////////////////////////////DFROBOT Voice Recorder-ISD1820/////////////////////
Blockly.Msg.dfrobot_ISD1820_record_HELPURL = "https://www.dfrobot.com/wiki/index.php/Voice_Recorder-ISD1820_SKU:_SEN0197";
Blockly.Msg.dfrobot_ISD1820_TOOLTIP = "record for 10s max with button, play with block or button";
Blockly.Msg.dfrobot_ISD1820_record = "push record button to record 10s max";
Blockly.Msg.dfrobot_ISD1820_play = "play recorded sound";
Blockly.Msg.dfrobot_ISD1820_play_Input = "PIN#";

////////////////////////////Capacitive Sensor Librarie/////////////////////
Blockly.Msg.CAPACITIV_HELPURL = "https://github.com/PaulStoffregen/CapacitiveSensor";
Blockly.Msg.CAPACITIV_TEXT = "capacitive value";
Blockly.Msg.CAPACITIV_INPUT1 = "send pinn";
Blockly.Msg.CAPACITIV_INPUT2 = "sensor pin";
Blockly.Msg.CAPACITIV_CALIBRATION = "automatic calibration";
Blockly.Msg.CAPACITIV_TOOLTIP = "10M resistor between pins 4 & 2, pin 2 is sensor pin, add a wire and or foil if desired";

////////////////////////////ESP8266 WiFi/////////////////////
Blockly.Msg.esp8266_init_tooltip="initialisation du module wifi et connection avec les paramètres indiqués";
Blockly.Msg.esp8266_1="Esp 8266";
Blockly.Msg.esp8266_2="ssid";
Blockly.Msg.esp8266_3="clé";
Blockly.Msg.esp8266_4="IP";
Blockly.Msg.esp8266_5="passerelle";
Blockly.Msg.esp8266_6="masque";
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
Blockly.Msg.OTTO9_HOME_TEXT = "home";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "";
Blockly.Msg.OTTO9_HOME_URL = "https://www.ottodiy.com/";
Blockly.Msg.OTTO9_MOVE_TEXT = "move";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["forward", "FORWARD"], ["backward", "BACKWARD"], ["turn left", "LEFT"], ["turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dance";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalker left", "moonwalkerLEFT"],  ["moonwalker right", "moonwalkerRIGHT"],["crusaito left", "crusaitoLEFT"],["crusaito right", "crusaitoRIGHT"], ["flapping front", "flappingFRONT"], ["flapping back", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_DANCE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["little", "10"], ["big", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "do";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_DO_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_DO_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_DO_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DO_SIZE_CHOICE = [["normal", "20"], ["little", "5"], ["big", "45"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesture";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["happy", "OttoHappy"], ["super happy", "OttoSuperHappy"], ["sad", "OttoSad"], ["sleeping", "OttoSleeping"], ["fart", "OttoFart"], ["confused", "OttoConfused"], ["fretful", "OttoFretful"], ["love", "OttoLove"], ["angry", "OttoAngry"], ["magic", "OttoMagic"], ["wave", "OttoWave"], ["victory", "OttoVictory"], ["fail", "OttoFail"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sound";
Blockly.Msg.OTTO9_SOUND_CHOICE = [["cuddly", "S_cuddly"], ["OhOoh", "S_OhOoh"], ["OhOoh2", "S_OhOoh2"], ["surprise", "S_surprise"], ["button pushed", "S_buttonPushed"], ["mode1", "S_mode1"], ["mode2", "S_mode2"], ["mode3", "S_mode3"], ["sleeping", "S_sleeping"], ["fart1", "S_fart1"], ["fart2", "S_fart2"], ["fart3", "S_fart3"], ["happy", "S_happy"], ["happy short", "S_happy_short"], ["super happy", "S_superHappy"], ["sad", "S_sad"], ["confused", "S_confused"], ["connection", "S_connection"], ["disconnection", "S_disconnection"]];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance";
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch";
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["happyOpen", "happyOpen"],["happyClosed", "happyClosed"],["sadOpen", "23"], ["sadClosed", "24"],["vampire1", "vamp1"], ["vampire2", "vamp2"],   ["smile", "smile"], ["heart", "heart"], ["small surprise", "smallSurprise"], ["big surprise", "bigSurprise"], ["confused", "confused"], ["0", "zero"], ["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"],["5", "five"],["6", "six"],["7", "seven"],["8", "eight"],["9", "nine"], ["x", "xMouth"], ["ok", "okMouth"],["interrogation", "27"],["tongue", "tongueOut"],["culito", "culito"],  ["thunder", "thunder"], ["line", "lineMouth"], ["diagonal", "21"], ["little Uuh", "littleUuh, i"], ["dreamMouth0", "dreamMouth, 0"], ["dreamMouth1", "dreamMouth, 1"], ["dreamMouth2", "dreamMouth, 2"]];
Blockly.Msg.OTTO9_MATRIX_TEXT = "matrix";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "matrix text";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];


//20191010
Blockly.Msg.CAT_COG = "COG";
Blockly.Msg.CAT_MICROSAURUS = "マイクロサウルス";
Blockly.Msg.CAT_MICROMACHINE = "マイクロマシーン";
//
Blockly.Msg.ms_IR_init_TEXT = "赤外リモコン初期化";
Blockly.Msg.ms_IR_check_TEXT = "赤外リモコン受信チェック";
Blockly.Msg.ms_IR_flag_TEXT = "受信フラグ";
Blockly.Msg.ms_IR_reset_TEXT = "フラグリセット";
Blockly.Msg.ms_IR_reception_code_TEXT = "受信データ";
Blockly.Msg.ms_INIT_WAV = "WAV再生初期化 サウンド1";
Blockly.Msg.ms_INIT_WAV_SOUND2 = "サウンド2";
Blockly.Msg.ms_INIT_WAV_SOUND3 = "サウンド3";
Blockly.Msg.ms_INIT_WAV_AUDPIN = "出力ピン";
Blockly.Msg.ms_INIT_WAV_ENBLPIN = "ENピン";
Blockly.Msg.ms_PLAY_WAV = "WAV再生 サウンド：";
Blockly.Msg.ms_ACTION_STOP = "停止";
Blockly.Msg.ms_ACTION_FRONT = "前足";
Blockly.Msg.ms_ACTION_REAR = "後足";
Blockly.Msg.ms_ACTION_OFFSET = "補正";
Blockly.Msg.ms_ACTION_FWRD = "前進";
Blockly.Msg.ms_ACTION_BWRD = "後退";
Blockly.Msg.ms_ACTION_LTRN = "左旋回";
Blockly.Msg.ms_ACTION_RTRN = "右旋回";
//
Blockly.Msg.mm_IR_init_TEXT = "赤外リモコン初期化";
Blockly.Msg.mm_IR_check_TEXT = "赤外リモコン受信チェック";
Blockly.Msg.mm_IR_flag_TEXT = "受信フラグ";
Blockly.Msg.mm_IR_reset_TEXT = "フラグリセット";
Blockly.Msg.mm_IR_reception_code_TEXT = "受信データ";
Blockly.Msg.mm_INIT_WAV = "WAV再生初期化 サウンド1";
Blockly.Msg.mm_INIT_WAV_SOUND2 = "サウンド2";
Blockly.Msg.mm_INIT_WAV_SOUND3 = "サウンド3";
Blockly.Msg.mm_INIT_WAV_AUDPIN = "出力ピン";
Blockly.Msg.mm_INIT_WAV_ENBLPIN = "ENピン";
Blockly.Msg.mm_PLAY_WAV = "WAV再生 サウンド：";
Blockly.Msg.mm_ACTION_INIT = "アクション初期化";
Blockly.Msg.mmp_ACTION_INIT = "アクション初期化";
Blockly.Msg.mm_ACTION_STOP = "停止";
Blockly.Msg.mm_ACTION_FRONT = "前足";
Blockly.Msg.mm_ACTION_REAR = "後足";
Blockly.Msg.mm_ACTION_OFFSET = "補正";
Blockly.Msg.mm_ACTION_FWRD = "前進";
Blockly.Msg.mm_ACTION_BWRD = "後退";
Blockly.Msg.mm_ACTION_LTRN = "左旋回";
Blockly.Msg.mm_ACTION_RTRN = "右旋回";
Blockly.Msg.mm_ACTION_LEFT = "左横歩き";
Blockly.Msg.mm_ACTION_RGHT = "右横歩き";
Blockly.Msg.mm_SERVO_DRIVE = "サーボ駆動";
Blockly.Msg.mm_SERVO_CON = "コネクタ#";
Blockly.Msg.mm_SERVO_ANGLE = "角度";
Blockly.Msg.mm_ACTION_FREE = "フリーアクション";
Blockly.Msg.mm_ARRAY_CREATE_WITH = "要素";
//20191010

//////////////////////////// Peguino Blocks Text 2019 ////////////////////////////
// ------------------------ Peguino input bricks ------------------------
// Peguino Nano Board default wiring:
// Port C1 = Pin 23 = D5; C2 = Pin 20 = D2; C3 = Pin 6 = A2; D1 = Pin 10 = A6; D2 = Pin 7 = A3; D3 = Pin 24 = D6;
// Peguino ESP Board default wiring:
// Port C1 = Pin 25 = GPIO27; C2 = Pin 15 = GPIO23; C3 = Pin 17 = GPIO36; D1 = Pin 21 = GPIO32; D2 = Pin 23 = GPIO25; D3 = Pin 22 = GPIO33;

Blockly.Msg.Peguino_Bodysensor_TEXT = "Personensensor (Bodysensor Brick)";
Blockly.Msg.Peguino_Bodysensor_TOOLTIP = "Mit diesem Peguino Brick können z.B. Personen und (größere) Tiere in der Nähe erkannt werden.";
Blockly.Msg.Peguino_Bodysensor_PLUG = "Buchse";
Blockly.Msg.Peguino_Bodysensor_UNIT = "port";
Blockly.Msg.Peguino_Bodysensor_UNIT_CHOICE = [["?", "0"],["C1", "23"],  ["C2", "20"], ["C3", "6"],  ["D1", "10"], ["D2", "7"],  ["D3", "24"]];
Blockly.Msg.Peguino_Bodysensor_HELPURL = "https://www.peguino.com/chat/thread-25.html";

Blockly.Msg.Peguino_ProximityBrick_TEXT = "Distanzsensor (Proximity Brick) / cm ";
Blockly.Msg.Peguino_ProximityBrick = "cm oder zoll";
Blockly.Msg.Peguino_ProximityBrick_TOOLTIP = "Proximity = „Nähe oder Lage“. Der Proximity Brick misst die Nähe zu Hindernissen und Objekten und muss mit Buchse A verbunden sein.";
Blockly.Msg.Peguino_ProximityBrick_HELPURL = "https://www.peguino.com/chat/thread-18.html";

Blockly.Msg.Peguino_ButtonBrick_TEXT = "Druckschalter (Button Brick)";
Blockly.Msg.Peguino_ButtonBrick_TOOLTIP = "Dieser Peguino Brick ist ein Druckschalter: solange er gedrückt ist, ist der Stromkreislauf geschlosssen.";
Blockly.Msg.Peguino_ButtonBrick_INPUT = "Buchse";
Blockly.Msg.Peguino_ButtonBrick_UNIT = "port";
Blockly.Msg.Peguino_ButtonBrick_UNIT_CHOICE = [["?", "0"],["C1", "23"],  ["C2", "20"], ["C3", "6"],  ["D1", "10"], ["D2", "7"],  ["D3", "24"]];
Blockly.Msg.Peguino_ButtonBrick_HELPURL = "https://www.peguino.com/chat/thread-21.html";

Blockly.Msg.Peguino_PotiBrick_TEXT = "Drehregler (Potentiometer Brick)";
Blockly.Msg.Peguino_PotiBrick_TOOLTIP = "Dieser Peguino Brick ist ein Potentiometer: Beim Drehen ändert sich der elektrische Widerstand und erzeugt somit unterschiedliche Zahlenwerte.";
Blockly.Msg.Peguino_PotiBrick_PLUG = "Buchse";
Blockly.Msg.Peguino_PotiBrick_UNIT = "port";
Blockly.Msg.Peguino_PotiBrick_UNIT_CHOICE = [["?", "0"], ["C3", "6"],  ["D1", "10"], ["D2", "7"]];
Blockly.Msg.Peguino_PotiBrick_HELPURL = "https://www.peguino.com/chat/thread-14.html";

Blockly.Msg.Peguino_Microprox_TEXT = "Microprox ";
Blockly.Msg.Peguino_Microprox_TOOLTIP = "Dieser Baustein kann zum Bau eines Roboters eingesetzt werden, der z.B. einer schwarzen Linie auf weißem Grund folgen soll. Es können aber auch kurze Distanzen erkannt werden und Helligkeitsunterschiede registriert werden.";
Blockly.Msg.Peguino_Microprox_PLUG = "Buchse";
Blockly.Msg.Peguino_Microprox_UNIT = "port";
Blockly.Msg.Peguino_Microprox_UNIT_CHOICE = [["?", "0"], ["C3", "6"],  ["D1", "10"], ["D2", "7"]];
Blockly.Msg.Peguino_Microprox_HELPURL = "https://www.peguino.com/chat/thread-15.html";

Blockly.Msg.Peguino_ClimateBrick_TEXT = "Klimasensor (Climate Brick)";
Blockly.Msg.Peguino_ClimateBrick_TOOLTIP = "Dieser Peguino Brick liefert Daten zur gemessenen Termperatur (in °Celsius ) und Luftfeuchtigkeit in %";
Blockly.Msg.Peguino_ClimateBrick_PLUG = "Buchse";
Blockly.Msg.Peguino_ClimateBrick_UNIT = "port";
Blockly.Msg.Peguino_ClimateBrick_CHOICENANO = [["?", "0"], ["C1", "23"], ["C2", "20"], ["D3", "24"]];
Blockly.Msg.Peguino_ClimateBrick_CHOICEESP32 = [["?", "0"],["C1", "25"],  ["C2", "15"], ["C3", "17"],  ["D1", "21"], ["D2", "23"],  ["D3", "22"]];
Blockly.Msg.Peguino_ClimateBrick_HELPURL = "https://www.peguino.com/chat/thread-26.html";
Blockly.Msg.Peguino_ClimateBrick_DHT_READ_C = "Temperatur °C";
Blockly.Msg.Peguino_ClimateBrick_DHT_READ_H = "Luftfeuchtigkeit %";

Blockly.Msg.PeguinoIRsender_TEXT = "Infrarot Sende-LED (IR-Sender Brick)";
Blockly.Msg.PeguinoIRsender_INPUT1 = "Pin";
Blockly.Msg.PeguinoIRsender_INPUT2 = "Frequenz (Hz) 38000 ";
Blockly.Msg.PeguinoIRsender_TOOLTIP = "Sendet Infrarotlicht in der gegebenen Frequenz aus.";
Blockly.Msg.PeguinoIRsender_HELPURL = "https://www.peguino.com/chat/";

Blockly.Msg.PeguinoIRreceiver_TEXT = "Infrarot Empfangs-LED (IR-Receiver Brick)";
Blockly.Msg.PeguinoIRreceiver_INPUT = "Pin";
Blockly.Msg.PeguinoIRreceiver_TOOLTIP = "Empfängt Signale im Infrarotlichtbereich.";
Blockly.Msg.PeguinoIRreceiver_HELPURL = "https://www.peguino.com/chat/";

Blockly.Msg.Peguino_Lightsensor_TEXT = "Helligkeitssensor (Lightsensor Brick)";
Blockly.Msg.Peguino_Lightsensor_TOOLTIP = "Der 'Lightsensor' erkennt Helligkeitsunterschiede. ";
Blockly.Msg.Peguino_Lightsensor_PLUG = "Buchse";
Blockly.Msg.Peguino_Lightsensor_UNIT = "port";
Blockly.Msg.Peguino_Lightsensor_UNIT_CHOICE = [["?", "0"], ["C3", "6"],  ["D1", "10"], ["D2", "7"]];
Blockly.Msg.Peguino_Lightsensor_HELPURL = "https://www.peguino.com/chat/thread-13.html";

// ------------------------ Peguino output bricks ------------------------
Blockly.Msg.Peguino_BuzzerBrick_TEXT = "Buzzer Brick";
Blockly.Msg.Peguino_BuzzerBrick_TOOLTIP = "Dieser Peguino Brick gibt einen Ton aus";
Blockly.Msg.Peguino_BuzzerBrick_PLUG = "Buchse";
Blockly.Msg.Peguino_BuzzerBrick_UNIT = "port";
Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY = "Ton";
Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_CHOICE = [["?", "0"],["Note A", "440"],  ["2250 Hz", "2250"], ["3500 Hz", "3500"]];
Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_UNIT  = "Ton";
Blockly.Msg.Peguino_BuzzerBrick_FREQUENCY_VALUE = "Tonfrequenz";
Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME = "Dauer";
Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_CHOICE = [["?", "0"], ["0,2 Sekunden", "200"], ["Halbe Sekunde", "500"],  ["1 Sekunde", "1000"]];
Blockly.Msg.Peguino_BuzzerBrick_PLAYTIME_UNIT  = "tondauer";
Blockly.Msg.Peguino_BuzzerBrick_UNIT_CHOICE = [["?", "0"],["C1", "23"],  ["C2", "20"], ["C3", "6"],  ["D1", "10"], ["D2", "7"],  ["D3", "24"]];
Blockly.Msg.Peguino_BuzzerBrick_HELPURL = "https://www.peguino.com/chat/thread-16.html";

Blockly.Msg.Peguino_LED_TEXT = "LED / Leuchtbaustein";
Blockly.Msg.Peguino_LED_INPUT = "Buchse";
Blockly.Msg.Peguino_LED_UNIT = "port";
Blockly.Msg.Peguino_LED_STATUS = "status";
Blockly.Msg.Peguino_LED_UNIT_CHOICE = [["?", "0"],["C1", "23"],  ["C2", "20"], ["C3", "6"],  ["D1", "10"], ["D2", "7"],  ["D3", "24"]];
Blockly.Msg.Peguino_LED_TOOLTIP = "Dieser Baustein erzeugt Licht: je nach LED-Typ z.B. in weiß, orange, pink, blau oder einer anderen Farbe.";
Blockly.Msg.Peguino_LED_HELPURL = "https://www.peguino.com/chat/";

Blockly.Msg.Peguino_RGBLED_TEXT = "RGB-LED / Mehrfarb -Leuchtbaustein";
Blockly.Msg.Peguino_RGBLED_UNIT = "port";
Blockly.Msg.Peguino_RGBLED_STATUS = "status";
Blockly.Msg.Peguino_RGBLED_INPUT = "Pin";
Blockly.Msg.Peguino_RGBLED_RGBCOLOR = "Farbe auswählen:";
Blockly.Msg.Peguino_RGBLED_RGBCOLORVALUE = "colorvalue";
Blockly.Msg.Peguino_RGBLED_RGBRED = "Rot";
Blockly.Msg.Peguino_RGBLED_RGBGREEN = "Grün";
Blockly.Msg.Peguino_RGBLED_RGBBLUE = "Blau";
Blockly.Msg.Peguino_RGBLED_TOOLTIP = "Dieser Baustein erzeugt Licht (an Port F) in unterschiedlichen Farben. Der Farbton kann dabei gemischt werden durch die drei Grundfarben: Rot, Grün und Blau. Leuchten alle drei ergibt die Mischfarbe weißes Licht.";
Blockly.Msg.Peguino_RGBLED_HELPURL = "https://www.peguino.com/chat/thread-19.html";

Blockly.Msg.Peguino_I2CScan_TEXT = "I2C Adressscanner";
Blockly.Msg.Peguino_I2CScan_TOOLTIP = "Mit diesem Element kann der I2C Datenbus an Port B auf verbundene Geräteadressen abgesucht werden. Die gefundenen Adressen werden an die serielle Schnittstelle gesendet.";
Blockly.Msg.Peguino_I2CScan_HELPURL = "https://www.peguino.com/chat/thread-20.html";

Blockly.Msg.Peguino_AttachServo_TEXT = "Servo Motor verbinden";
Blockly.Msg.Peguino_AttachServo_TOOLTIP = "Mit diesem Baustein wird ein Servo Motor verbunden.";
Blockly.Msg.Peguino_AttachServo_PLUG = "Buchse";
Blockly.Msg.Peguino_AttachServo_UNIT = "port";
Blockly.Msg.Peguino_AttachServo_UNIT_CHOICE = [["?", "0"], ["C3", "6"],  ["D1", "10"], ["D2", "7"]];
Blockly.Msg.Peguino_AttachServo_HELPURL = "https://www.peguino.com/chat/";
Blockly.Msg.Peguino_SERVO_DEFAULT_NAME = "Servo1";


//////////////////////////// Robobox Blocks Text 2019 ////////////////////////////
Blockly.Msg.CAT_ROBOBOX = "Robobox";
Blockly.Msg.ROBOBOX_ANGLE180 = "Angle [0~180°]:";
Blockly.Msg.ROBOBOX_PIN = "Pin:";
Blockly.Msg.ROBOBOX_TRIGGER_PIN = "Trigger on pin:";
Blockly.Msg.ROBOBOX_LISTEN_PIN = "Listen on pin:";
Blockly.Msg.ROBOBOX_ARRAY = "Array:";
Blockly.Msg.ROBOBOX_LEN = "Length:";

Blockly.Msg.CAT_ROBOBOX_SERVO = "- Servo-motors";
Blockly.Msg.ROBOBOX_SERVO_SETANGLE = "Set angle";
Blockly.Msg.ROBOBOX_SERVO_GETANGLE = "Get angle";
Blockly.Msg.ROBOBOX_SERVO_TOOLTIP = "Help";

Blockly.Msg.CAT_ROBOBOX_SENSORS = "- Sensors";
Blockly.Msg.ROBOBOX_SENSORS_ULTRASOUND = "Distance measured in cm";

Blockly.Msg.CAT_ROBOBOX_IRREMOTE = "- IRremote";
Blockly.Msg.ROBOBOX_IRREMOTE_DECODE = "Decode IRsignal";
Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALLEN = "Get signal length";
Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALARRAY = "Get signal array";
Blockly.Msg.ROBOBOX_IRREMOTE_SIGNALCODE = "Get signal code";
Blockly.Msg.ROBOBOX_IRREMOTE_RESUME = "Resume";
Blockly.Msg.ROBOBOX_IRREMOTE_SEND = "Send IRsignal";
Blockly.Msg.ROBOBOX_IRREMOTE_SENDARRAY = "Send IRsignal";

Blockly.Msg.CAT_ROBOBOX_MONTH4 = "- Robobox car";
Blockly.Msg.ROBOBOX_MONTH4_INIT = "Connect motors";
Blockly.Msg.ROBOBOX_MONTH4_MOVE = "Move forward";
Blockly.Msg.ROBOBOX_MONTH4_MOVEBACKWARD = "Move backward";
Blockly.Msg.ROBOBOX_MONTH4_TURNRIGHT = "Turn right";
Blockly.Msg.ROBOBOX_MONTH4_TURNLEFT = "Turn left";

Blockly.Msg.CAT_ROBOBOX_MONTH6 = "- Light";
Blockly.Msg.ROBOBOX_MONTH6_LINEC = "Get central line";
Blockly.Msg.ROBOBOX_MONTH6_LINED = "Get right line";
Blockly.Msg.ROBOBOX_MONTH6_LINEG = "Get left line";
Blockly.Msg.ROBOBOX_MONTH6_CALCANGLE = "Compile angle";

Blockly.Msg.CAT_ROBOBOX_MONTH8 = "- Motorbike";
Blockly.Msg.ROBOBOX_MONTH8_ANALYZE = "Analyze";

//////////////////////////// Virtuino 08/05/2020 ////////////////////////////
Blockly.Msg.VIRTUINO_INIT_TEXT = "initi connection :";
Blockly.Msg.VIRTUINO_INIT_RX = "RX";
Blockly.Msg.VIRTUINO_INIT_TX = "TX";
Blockly.Msg.VIRTUINO_INIT_SPEED = "speed";
Blockly.Msg.VIRTUINO_DV_TEXT = "receive state";
Blockly.Msg.VIRTUINO_DV_INPUT = "on virtual canal (DV)";
Blockly.Msg.VIRTUINO_TOOLTIP = "Virtuino use, see help or go website https://virtuino.com/";
Blockly.Msg.VIRTUINO_HELP = "https://youtu.be/v1mQ0VC6szw";

//////////////////////////// Grove Beginner Kit 12/09//2020 ////////////////////////////
Blockly.Msg.GROVE_BK_HELPURL = 'https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/';
Blockly.Msg.GROVE_BK_INOUT_LED_INPUT1 = Blockly.Msg.GROVE_INOUT_LED_INPUT1;
Blockly.Msg.GROVE_BK_INOUT_LED_INPUT3 = Blockly.Msg.GROVE_INOUT_LED_INPUT3;
Blockly.Msg.GROVE_BK_INOUT_LED_TOOLTIP = Blockly.Msg.GROVE_INOUT_LED_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_BUZZER_TEXT1 = Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1;
Blockly.Msg.GROVE_BK_INOUT_BUZZER_TEXT2 = Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2;
Blockly.Msg.GROVE_BK_INOUT_BUZZER_TOOLTIP = Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP;
Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT1 = "play tone on piezo";
Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT2 = "note";
Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT3 = "scale";
Blockly.Msg.GROVE_BK_OUT_BUZZER_TEXT4 = "time";
Blockly.Msg.GROVE_BK_OLED_TEXT1 = "write to OLED on I2C";
Blockly.Msg.GROVE_BK_OLED_TEXT2 = "input (string or number)";
Blockly.Msg.GROVE_BK_OLED_TEXT3 = "line (0~3)";
Blockly.Msg.GROVE_BK_OLED_TEXT4 = "column (0~15)";
Blockly.Msg.GROVE_BK_OLED_TEXT5 = "line refresh";
Blockly.Msg.GROVE_BK_OLED_TEXT = Blockly.Msg.lp2i_u8g_draw_string_Text;
Blockly.Msg.GROVE_BK_OLED_DRAW_STRING_X = Blockly.Msg.lp2i_u8g_draw_string_X;
Blockly.Msg.GROVE_BK_OLED_DRAW_STRING_Y = Blockly.Msg.lp2i_u8g_draw_string_Y;
Blockly.Msg.GROVE_BK_OLED_TOOLTIP = 'print on OLED screen';
Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT = Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display;
Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE1 = Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1;
Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE2 = Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2;
Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE3 = Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3;
Blockly.Msg.GROVE_BK_OLED_DRAW_4STRINGS_TEXT_LINE4 = Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4;
Blockly.Msg.GROVE_BK_OLED_PRINT_N = Blockly.Msg.lp2i_u8g_print_N;
Blockly.Msg.GROVE_BK_OLED_PRINT_X = Blockly.Msg.lp2i_u8g_print_X;
Blockly.Msg.GROVE_BK_OLED_PRINT_Y = Blockly.Msg.lp2i_u8g_print_Y;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT = Blockly.Msg.lp2i_u8g_4draw_print_to_display;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE1 = Blockly.Msg.lp2i_u8g_4draw_print_Text_line1;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE2 = Blockly.Msg.lp2i_u8g_4draw_print_Text_line2;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE3 = Blockly.Msg.lp2i_u8g_4draw_print_Text_line3;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_TEXT_LINE4 = Blockly.Msg.lp2i_u8g_4draw_print_Text_line4;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N1 = Blockly.Msg.lp2i_u8g_4draw_print_N1;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N2 = Blockly.Msg.lp2i_u8g_4draw_print_N2;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N3 = Blockly.Msg.lp2i_u8g_4draw_print_N3;
Blockly.Msg.GROVE_BK_OLED_DRAW_4DRAW_PRINT_N4 = Blockly.Msg.lp2i_u8g_4draw_print_N4;
Blockly.Msg.GROVE_BK_INOUT_BUTTON_TEXT = Blockly.Msg.GROVE_INOUT_BUTTON_TEXT;
Blockly.Msg.GROVE_BK_INOUT_BUTTON_TOOLTIP = Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_ROT_ANGLE_TEXT = Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TEXT;
Blockly.Msg.GROVE_BK_INOUT_ROT_ANGLE_TOOLTIP = Blockly.Msg.GROVE_INOUT_ROT_ANGLE_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_LDR_TEXT = Blockly.Msg.GROVE_INOUT_LDR_TEXT;
Blockly.Msg.GROVE_BK_INOUT_LDR_TOOLTIP = Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_SOUND_TEXT = Blockly.Msg.GROVE_INOUT_SOUND_TEXT;
Blockly.Msg.GROVE_BK_INOUT_SOUND_TOOLTIP = Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_DHT_READ_TYPE = Blockly.Msg.GROVE_INOUT_DHT_READ_TYPE;
Blockly.Msg.GROVE_BK_INOUT_DHT_READ_H = Blockly.Msg.GROVE_INOUT_DHT_READ_H;
Blockly.Msg.GROVE_BK_INOUT_DHT_READ_C = Blockly.Msg.GROVE_INOUT_DHT_READ_C;
Blockly.Msg.GROVE_BK_INOUT_DHT_READ_SENSOR = Blockly.Msg.GROVE_INOUT_DHT_READ_SENSOR;
Blockly.Msg.GROVE_BK_INOUT_DHT_READ_TOOLTIP = Blockly.Msg.GROVE_INOUT_DHT_READ_TOOLTIP;
Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT = 'value';
Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_T = 'of temperature (°C)';
Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_P = 'of pressure (Pa)';
Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TEXT_A = 'of altitude (m)';
Blockly.Msg.GROVE_BK_INOUT_PRESSURE_TOOLTIP = 'get back value of temperature and pressure sensors, and calculate altitude';
Blockly.Msg.GROVE_BK_INOUT_GYRO_TEXT1 = 'acceleration';
Blockly.Msg.GROVE_BK_INOUT_GYRO_TEXT2 = 'axis';
Blockly.Msg.GROVE_BK_INOUT_GYRO_TOOLTIP = "get back acceleration value from sensor, in 3 dimensions";

//******** mini LiDAR Grove 11/02/2021
Blockly.Msg.grove_TF_Mini_LiDAR_MISC_HELPURL = "https://wiki.seeedstudio.com/Grove-TF_Mini_LiDAR/";
Blockly.Msg.grove_TF_Mini_LiDAR_ATTACH1 = "attach laser LiDAR";
Blockly.Msg.grove_TF_Mini_LiDAR_ATTACH2 = "with name";
Blockly.Msg.grove_TF_Mini_LiDAR_INPUT1 = "on pin (yellow wire)";
Blockly.Msg.grove_TF_Mini_LiDAR_INPUT2 = "on pin (white wire)";
Blockly.Msg.grove_TF_Mini_LiDAR_attach_TOOLTIP = "define pin connected to the LiDAR and use instance name";
Blockly.Msg.grove_TF_Mini_LiDAR_distance_TITLE = "distance value";
Blockly.Msg.grove_TF_Mini_LiDAR_distance_TOOLTIP = "send back distance value, must be between 30cm and 2 m";
Blockly.Msg.grove_TF_Mini_LiDAR_strength_TITLE = "signal strenght";
Blockly.Msg.grove_TF_Mini_LiDAR_strength_TOOLTIP = "send back signal strenght to qualify quality";
Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TITLE = "sensor internal temperature";
Blockly.Msg.grove_TF_Mini_LiDAR_chip_temp_TOOLTIP = "send back signal internal temperature of the microcontroller on sensor";

//******** Grove Time of Flight Distance Sensor VL53L0X 13/02/2021
Blockly.Msg.grove_VL53L0X_MISC_HELPURL = "https://wiki.seeedstudio.com/Grove-Time_of_Flight_Distance_Sensor-VL53L0X/";
Blockly.Msg.grove_VL53L0X_test_TITLE = "sensor test";
Blockly.Msg.grove_VL53L0X_test_TOOLTIP = "use serial connection to send back message";
Blockly.Msg.grove_VL53L0X_start_and_report_TITLE = "distance mesured (in mm)";
Blockly.Msg.grove_VL53L0X_start_and_report_TOOLTIP = "send back distance value, in mm. /!\ Recommed measure distance 30mm-1000mm /!\ ";
Blockly.Msg.grove_VL53L0X_stop_measure_TITLE = "stop continuous mesure mode";
Blockly.Msg.grove_VL53L0X_stop_measure_TOOLTIP = "if the stop request occurs during a range measurement, then the measurement is completed before stopping.";

//******** Pulse Sensor 14/02/2021
Blockly.Msg.pulseSensor_HELPURL = "https://github.com/WorldFamousElectronics/PulseSensorPlayground";
Blockly.Msg.pulseSensor_TEXT1 = "value image";
Blockly.Msg.pulseSensor_TEXT2 = "of pulse detected on port A";
Blockly.Msg.pulseSensor_TOOLTIP = "analog value [0~1024] measured, set a threshold to define when there is a pulse";

//******** IIC to GPIO Shield V2.0 SKU DFR0013 21/02/2021
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_SCAN_TEXT = "scan all I²C devices and report in serial monitor";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_SCAN_TOOLTIP = "list all I2C components addresses in serial monitor, by default at 115200 bauds";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_SCAN_HELPURL = "https://playground.arduino.cc/Main/I2cScanner/";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_HELPURL = "https://wiki.dfrobot.com/IIC_to_GPIO_Shield_V2.0_SKU__DFR0013";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_ATTACH1 = "attach I2C shield";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_ATTACH2 = "with id";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_ATTACH3 = "on component";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_INPUT2 = "at address 0x";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_attach_TOOLTIP = "fixe l'adresse de la carte d'extension I2C et lui attribue un identifiant";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_INPUT1 = "logic state";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_INPUT2 = "pin";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_read_TOOLTIP = "pin numbers from 0 to 7 are 0.0 to 0.7, and 8 to 15 are 1.0 to 1.7";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_OUTPUT1 = "set digital state";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_OUTPUT2 = "on component";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_OUTPUT3 = "to";
Blockly.Msg.dfrobot_IIC_to_GPIO_Shield_V2_write_TOOLTIP = "pin numbers from 0 to 7 are 0.0 to 0.7, and 8 to 15 are 1.0 to 1.7";

//********IIC to GPIO Module 21/02/2021
Blockly.Msg.I2C_to_GPIO_Module_SCAN_TEXT = "scan all I²C devices and report in serial monitor";
Blockly.Msg.I2C_to_GPIO_Module_SCAN_TOOLTIP = "list all I2C components addresses in serial monitor, by default at 115200 bauds";
Blockly.Msg.I2C_to_GPIO_Module_SCAN_HELPURL = "https://playground.arduino.cc/Main/I2cScanner/";
Blockly.Msg.I2C_to_GPIO_Module_HELPURL = "https://github.com/nicoverduin/PCA9555";
Blockly.Msg.I2C_to_GPIO_Module_ATTACH1 = "attach I2C shield";
Blockly.Msg.I2C_to_GPIO_Module_ATTACH2 = "with id";
Blockly.Msg.I2C_to_GPIO_Module_ATTACH3 = "on component";
Blockly.Msg.I2C_to_GPIO_Module_INPUT1 = "at address 0x";
Blockly.Msg.I2C_to_GPIO_Module_attach_TOOLTIP = "set extension I2C shield at its address and set an instance name";
Blockly.Msg.I2C_to_GPIO_Module_INPUT2 = "logic state";
Blockly.Msg.I2C_to_GPIO_Module_INPUT3 = "of pin";
Blockly.Msg.I2C_to_GPIO_Module_read_TOOLTIP = "pin numbers from 0 to 7 are 0.0 to 0.7, and 8 to 15 are 1.0 to 1.7";
Blockly.Msg.I2C_to_GPIO_Module_OUTPUT1 = "set pin";
Blockly.Msg.I2C_to_GPIO_Module_OUTPUT2 = "on component";
Blockly.Msg.I2C_to_GPIO_Module_OUTPUT3 = "to";
Blockly.Msg.I2C_to_GPIO_Module_write_TOOLTIP = "pin numbers from 0 to 7 are 0.0 to 0.7, and 8 to 15 are 1.0 to 1.7";

//******** Crowtail Starter Kit for Arduino 11/11/2023
Blockly.Msg.CROWTAIL_HELPURL = "https://www.elecrow.com/crowtail-starter-kit-for-arduino.html";
Blockly.Msg.CROWTAIL_INOUT_LED_INPUT1 = Blockly.Msg.GROVE_INOUT_LED_INPUT1;
Blockly.Msg.CROWTAIL_INOUT_LED_INPUT2 = Blockly.Msg.GROVE_INOUT_LED_INPUT2;
Blockly.Msg.CROWTAIL_INOUT_LED_INPUT3 = Blockly.Msg.GROVE_INOUT_LED_INPUT3;
Blockly.Msg.CROWTAIL_INOUT_LED_TOOLTIP = Blockly.Msg.GROVE_BK_INOUT_LED_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_BUTTON_TEXT = Blockly.Msg.GROVE_INOUT_BUTTON_TEXT;
Blockly.Msg.CROWTAIL_INOUT_BUTTON_INPUT = Blockly.Msg.GROVE_INOUT_BUTTON_INPUT;
Blockly.Msg.CROWTAIL_INOUT_BUTTON_TOOLTIP = Blockly.Msg.GROVE_INOUT_BUTTON_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_SWITCH_TEXT = "state of switch";
Blockly.Msg.CROWTAIL_INOUT_TOUCHSENSOR_TEXT = "state of touch sensor";
Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT1 = "set vibration module";
Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT2 = Blockly.Msg.CROWTAIL_INOUT_LED_INPUT2;
Blockly.Msg.CROWTAIL_INOUT_VIBRATION_INPUT3 = Blockly.Msg.CROWTAIL_INOUT_LED_INPUT3;
Blockly.Msg.CROWTAIL_INOUT_TILT_TEXT = Blockly.Msg.GROVE_INOUT_TILT_TEXT;
Blockly.Msg.CROWTAIL_INOUT_TILT_INPUT = Blockly.Msg.GROVE_INOUT_TILT_INPUT;
Blockly.Msg.CROWTAIL_INOUT_TILT_TOOLTIP = Blockly.Msg.GROVE_INOUT_TILT_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_FLAME_TEXT = "state of flame sensor";
Blockly.Msg.CROWTAIL_INOUT_FLAME_INPUT = Blockly.Msg.GROVE_INOUT_BUTTON_INPUT;
Blockly.Msg.CROWTAIL_INOUT_FLAME_TOOLTIP = "send back logic state if fire is in range";
Blockly.Msg.CROWTAIL_INOUT_BUZZER_TEXT1 = Blockly.Msg.GROVE_INOUT_BUZZER_TEXT1;
Blockly.Msg.CROWTAIL_INOUT_BUZZER_INPUT = Blockly.Msg.GROVE_INOUT_BUZZER_INPUT;
Blockly.Msg.CROWTAIL_INOUT_BUZZER_TEXT2 = Blockly.Msg.GROVE_INOUT_BUZZER_TEXT2;
Blockly.Msg.CROWTAIL_INOUT_BUZZER_TOOLTIP = Blockly.Msg.GROVE_INOUT_BUZZER_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_MOISTURE_TEXT = Blockly.Msg.GROVE_INOUT_MOISTURE_TEXT;
Blockly.Msg.CROWTAIL_INOUT_MOISTURE_INPUT = Blockly.Msg.GROVE_INOUT_MOISTURE_INPUT;
Blockly.Msg.CROWTAIL_INOUT_MOISTURE_TOOLTIP = Blockly.Msg.GROVE_INOUT_MOISTURE_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_SOUND_TEXT = Blockly.Msg.GROVE_INOUT_SOUND_TEXT;
Blockly.Msg.CROWTAIL_INOUT_SOUND_INPUT = Blockly.Msg.GROVE_INOUT_SOUND_INPUT;
Blockly.Msg.CROWTAIL_INOUT_SOUND_TOOLTIP = Blockly.Msg.GROVE_INOUT_SOUND_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_LDR_TEXT = Blockly.Msg.GROVE_INOUT_LDR_TEXT;
Blockly.Msg.CROWTAIL_INOUT_LDR_INPUT = Blockly.Msg.GROVE_INOUT_LDR_INPUT;
Blockly.Msg.CROWTAIL_INOUT_LDR_TOOLTIP = Blockly.Msg.GROVE_INOUT_LDR_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_TEMP_TEXT = Blockly.Msg.GROVE_INOUT_TEMP_TEXT;
Blockly.Msg.CROWTAIL_INOUT_TEMP_INPUT = Blockly.Msg.GROVE_INOUT_TEMP_INPUT;
Blockly.Msg.CROWTAIL_INOUT_TEMP_TOOLTIP = Blockly.Msg.GROVE_INOUT_TEMP_TOOLTIP;
Blockly.Msg.CROWTAIL_INOUT_RELAY_TEXT1 = Blockly.Msg.GROVE_INOUT_RELAY_TEXT1;
Blockly.Msg.CROWTAIL_INOUT_RELAY_INPUT = Blockly.Msg.GROVE_INOUT_RELAY_INPUT;
Blockly.Msg.CROWTAIL_INOUT_RELAY_TEXT2 = Blockly.Msg.GROVE_INOUT_RELAY_TEXT12;
Blockly.Msg.CROWTAIL_INOUT_RELAY_TOOLTIP = Blockly.Msg.GROVE_INOUT_RELAY_TOOLTIP;