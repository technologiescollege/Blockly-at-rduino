
***[Thanks for donation with Paypal to help me improve this software.](https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=o8z3KNFl16Tjlxhk1mBekCcRsG_3_NDe0CfWh8b1vfSYIbMxJnwa92YwM3y&dispatch=5885d80a13c0db1f8e263663d3faee8d4fe1dd75ca3bd4f11d72275b28239088)***

![enter image description here](https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif)

----------

**PROFS FRANCAIS & ASSOCIATIONS**
----------------------------------
*vous pouvez aussi me demander une facture pour que votre établissement me fasse un 'don' officiel par virement bancaire. Je ne fais pas payer de licence mais je compte sur vous pour aider du montant auquel vous estimez ce travail.*
----------

### WIKI !!! [http://www.libreduc.cc/wiki/doku.php/en/blockly_rduino](http://www.libreduc.cc/wiki/doku.php/en/blockly_rduino)

### FORUM !!! [http://blockly.technologiescollege.fr/forum](http://blockly.technologiescollege.fr/forum)

### Off-line upload [https://github.com/technologiescollege/BlocklyArduino_electrified](https://github.com/technologiescollege/BlocklyArduino_electrified)

### Off-line upload & supervision [https://github.com/technologiescollege/BlocklyArduino_AIO](https://github.com/technologiescollege/BlocklyArduino_AIO)

### Internet Explorer banni ! Internet Explorer banned!

**Multilingual version of Blockly@rduino**
=====

Blockly@rduino est un programme web, un **webware graphique permettant la programmation graphique pour [Arduino](http://www.arduino.cc/) et sa _traduction en code_**.

*Blockly@rduino is a web program, a graphic **webware allowing graphic programming for [Arduino](http://www.arduino.cc/) and its _translation into code_**.*

![](https://raw.githubusercontent.com/technologiescollege/Blockly-at-rduino/gh-pages/documentation/CaptureEN.JPG)

Blockly@rduino est basé sur [Blockly](https://developers.google.com/blockly/), un éditeur de programme graphique par une interface web. Il fournit un seul type de traduction de la programmation graphique _(contrairement à Blockly qui traduit en Python, en JavaScript, etc et permet de le simuler en ligne : [exemple](https://blockly-demo.appspot.com/static/demos/code/index.html))_, pour générer du code à copier coller dans l'EDI Arduino.

*Blockly@rduino is based on [Blockly](https://developers.google.com/blockly/), a web-based graphical program editor. It provides a single type of graphical programming translation _(unlike Blockly, which translates to Python, JavaScript, etc. and allows you to simulate it online : [example](https://blockly-demo.appspot.com/static/demos/code/index.html))_, to generate code to be copied and pasted into the Arduino IDE.*

Libre à vous de rajouter autant de bibliothèques que voulu grâce à cette notice explicative : [http://www.libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling](http://www.libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling)

*Feel free to add as many libraries as you want thanks to this explanatory note: [http://www.libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling](http://www.libreduc.cc/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmultiling)*

Cette version a été réorganisée et améliorée pour la faire utiliser au mieux par des élèves débutants dans le code.

**_Toutes les remarques sont les bienvenues pour améliorer la syntaxe !_**

This version has been organized and improved to make it best used by students who are new to the code.

**_All remarks are welcome to improve the syntax !_**

## Fonctions

* programmation pour Arduino en drag'n'drop graphique,
* génère un code totalement compatible avec le code Arduino,
* interaction des cartes Arduino grâce aux modules rajoutés : plus de 10 blocs spécifiques à des capteurs/actionneurs Grove, ainsi que ceux de TechnoZone51, Bitbloq, et ...
* possibilité de charger automatiquement des fichiers sur le site grâce aux paramètres de l'adresse URL _(voir les démos ci-dessous).
* téléversement et console série depuis l'interface web,
* sauvegarde/lecture de fichiers INO et XML
* création d'exemples
* supervision de la carte en temps réel grâce au serveur PyMata-AIO (accessible depuis le [panneau de contrôle](https://github.com/technologiescollege/Blockly-rduino-communication)

## Functions

* programming for Arduino in drag'n'drop graphic
* generates a code fully compatible with the Arduino code
* interaction of Arduino boards thanks to the added modules: more than 10 blocks specific to Grove sensors/actuators, as well as those of TechnoZone51, Bitbloq, and ...
* ability to automatically upload files to the site thanks to the parameters of the URL address _(see the demos below)
* upload and serial console from the web interface
* backup/reading of INO and XML files
* creation of examples
* real-time supervision of the map thanks to the PyMata-AIO server (accessible from the [control panel](https://github.com/technologiescollege/BlocklyArduino_AIO)

## Démos

Blockly@rduino est un outil web, un webware par référence aux software, hardware, etc. Vous pouvez le tester/utiliser à l'adresse suivante :
[http://technologiescollege.github.io/Blockly-at-rduino/](http://technologiescollege.github.io/Blockly-at-rduino/) 

Vous pouvez donc aussi lier directement l'ouverture de la page à l'ouverture d'un fichier XML hébergé (_ou tout en local_) :
* [démo 1 : faire clignoter une diode](http://technologiescollege.github.io/Blockly-at-rduino/?font=O&lang=fr&card=arduino_uno&url=./examples/./blink/blink.xml)
* [démo 2 : faire varier un servo-moteur proportionnellement à une consigne de potentiomètre](http://technologiescollege.github.io/Blockly-at-rduino/?font=O&lang=fr&card=arduino_uno&url=./examples/./servo_potentio/servo_potentio.xml)

## Demos

Blockly@rduino is a web tool, a webware by reference to software, hardware, etc.. You can test/use it at the following address :
[http://technologiescollege.github.io/Blockly-at-rduino/](http://technologiescollege.github.io/Blockly-at-rduino/) 

So you can also link directly the opening of the page to the opening of a hosted XML file (_or all locally_) :
* [demo 1: flashing a diode](http://technologiescollege.github.io/Blockly-at-rduino/?font=O&lang=en&card=arduino_uno&url=./examples/./blink/blink.xml)
* [demo 2: vary a servo-motor proportionally to a potentiometer setpoint](http://technologiescollege.github.io/Blockly-at-rduino/?font=O&lang=en&card=arduino_uno&url=./examples/./servo_potentio/servo_potentio.xml)


## Utiliser en local dans son navigateur web

Si vous préfréez l'utiliser en local, il vous suffit de télécharger le code depuis Github (_[Download Zip](https://github.com/technologiescollege/Blockly-at-rduino/archive/gh-pages.zip)_) et d'ouvrir le fichier `index.html` dans votre navigateur.

Vous pouvez l'héberger sur un serveur, et ainsi y faire accéder de nombreux postes en pointant vers ce fichier 'index.html'.

**Pour le téléversement et la console série**, vous devez télécharger la version 'Electron' :  https://github.com/technologiescollege/BlocklyArduino_electrified.

## Use locally in your web browser

If you want to use it locally, just download the code from Github (_[Download Zip](https://github.com/technologiescollege/Blockly-at-rduino/archive/gh-pages.zip)_) and open the file `index.html` in your browser.

You can host it on a server, and thus make many computers access it by pointing to this file `index.html'.

**For the upload and the serial console**, you have to download the 'Electron' version : https://github.com/technologiescollege/BlocklyArduino_electrified.


## Auteurs et contributeurs
Programme Blockly : [https://developers.google.com/blockly/](https://developers.google.com/blockly/)

Concept d'origine BlocklyDuino : Fred Lin (@gasolin [https://github.com/gasolin/BlocklyDuino](https://github.com/gasolin/BlocklyDuino)).

Son projet s'est aussi inspiré de [ardublock](https://github.com/taweili/ardublock) et [modkit](http://www.modk.it/).

Fonctions de typage ArduBlockly : Carlos Pereira Atencio ([https://github.com/carlosperate/ardublockly](https://github.com/carlosperate/ardublockly)).

Intégration de CodeBender : Julien Rat [https://github.com/julienrat](https://github.com/julienrat)

**Ré-écriture totale et refonte graphique : Olivier Métayer**

_Julien RAT : CodeBender plugin_

_Frédéric PICARD : bitbloq, maquette Jeulin, vidéos, etc_

_Spanish translation : José Manuel Ruiz Gutteriez ([blog](http://josemanuelruizgutierrez.blogspot.com.es/))_

_Daniel PERS ([site](http://blogpeda.ac-poitiers.fr/techno-jean-mace/)) : FDPlayer, OLED, RGB LED_

_Bernard REMOND [site](https://online.nbremond.net/) : téléversement local_

