[Wiki : http://tic.technologiescollege.fr/wiki/doku.php/en/blockly_rduino/bugs](http://tic.technologiescollege.fr/wiki/doku.php/en/blockly_rduino/bugs)

**Multilingual** version of Blockly@rduino
=====

Blockly@rduino est un programme web, un **webware graphique permettant la programmation graphique pour [Arduino](http://www.arduino.cc/) et sa _traduction en code_**.

![](https://github.com/technologiescollege/Blockly-at-rduino/blob/master/documentation/CaptureEN.JPG)

Blockly@rduino est basé sur [Blockly](https://developers.google.com/blockly/), un éditeur de programme graphique par une interface web. Il fournit un seul type de traduction de la programmation graphique _(contrairement à Blockly qui traduit en Python, en JavaScript, etc et permet de le simuler en ligne : [exemple](http://www.technologiescollege.fr/blockly/apps/code/index.html))_, pour générer du code à copier coller dans l'IDE Arduino.

Blockly@rduino possède une bibliothèque de blocs pour les modules [Grove](http://www.seeedstudio.com/wiki/GROVE_System), particulièrement adaptée à la découverte des micro-contrôleurs et aux expérimentations de systèmes mécatroniques.

Libre à vous d'en rajouter autant que voulu grâce à cette notice explicative : [http://tic.technologiescollege.fr/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmulti](http://tic.technologiescollege.fr/wiki/doku.php/fr/arduino/blockly_rduino/creerblocsmulti)

Cette version a été réorganisée et améliorée pour la faire utiliser au mieux par des élèves débutants dans le code.

**_Toutes les remarques sont les bienvenues pour améliorer la syntaxe !_**

## Fonctions

* programmation pour Arduino en drag'n'drop graphique,
* génère un code totalement compatible avec le code Arduino,
* interaction des cartes Arduino grâce aux modules rajoutés : plus de 10 blocs spécifiques à des capteurs/actionneurs Grove, ainsi que ceux de TechnoZone51, Bitbloq, et ...
* possibilité de charger automatiquement des fichiers sur le site grâce aux paramètres de l'adresse URL _(voir les démos ci-dessous)._
* téléversement et console série depuis l'interface web,
* sauvegarde/lecture de fichiers INO et XML

## IMPORTANT Arduino

Pour le téléversement dans la carte Arduino directement depuis le navigateur, il faut installer le plugin Codebender : [https://codebender.cc/static/plugin](https://codebender.cc/static/plugin)

_For uploading in Arduino card directly from your Internet browser, you must install codebender plugin : [https://codebender.cc/static/plugin](https://codebender.cc/static/plugin)_

## Démos

Blockly@rduino est un outil web, un webware par référence aux software, hardware, etc. Vous pouvez le tester/utiliser à l'adresse suivante :
[Technologies/Blockly@rduino](http://www.technologiescollege.fr/blockly@rduino) 

Vous pouvez donc aussi lier directement l'ouverture de la page à l'ouverture d'un fichier XML hébergé (_ou tout en local_) :
* [démo 1 : faire clignoter une diode](http://www.technologiescollege.fr/blockly@rduino/index.html?url=./examples/blink.xml)
* [démo 2 : faire varier un servo-moteur proportionnellement à une consigne de potentiomètre](http://www.technologiescollege.fr/blockly@rduino/index.html?url=./examples/servo_potentio.xml)


## Utiliser en local dans son navigateur web

Si vous préfréez l'utiliser en local, il vous suffit de télécharger le code depuis Github (_[Download Zip](https://github.com/technologiescollege/Blockly-at-rduino/archive/master.zip)_) et d'ouvrir le fichier `index.html` dans votre navigateur.

Vous pouvez l'héberger sur un serveur, et ainsi y faire accéder de nombreux postes en pointant vers ce fichier 'index.html'.

**Pour le téléversement et la console série**, vous devez disposer d'un accès web et de filtres ne bloquant pas CodeBender.

## Utilisation en 4 temps

1. utiliser votre navigateur pour ouvrir Blockly@rduino grâce au fichier 'index.html'
2. créer son programme Arduino par drag'n'drop (_cliqué-déplacé_) des blocs
3. sélectionner l'onglet 'Arduino' pour en vérifier le code grâce à CodeBender
4. presser le bouton 'Téléverser' pour transférer le code dans la mémoire de la carte Arduino


## Auteurs et contributeurs
Programme Blockly : [https://developers.google.com/blockly/](https://developers.google.com/blockly/)

Concept d'origine BlocklyDuino : Fred Lin (@gasolin [https://github.com/gasolin/BlocklyDuino](https://github.com/gasolin/BlocklyDuino)).

Son projet s'est aussi inspiré de [ardublock](https://github.com/taweili/ardublock) et [modkit](http://www.modk.it/).

Intégration de CodeBender : Julien Rat [https://github.com/julienrat](https://github.com/julienrat)

**Ré-écriture totale et refonte graphique : Olivier Métayer**

_Julien RAT : CodeBender plugin_

_Frédéric PICARD : bitbloq, maquette Jeulin_

_Spanish translation : José Manuel Ruiz Gutteriez ([blog](http://josemanuelruizgutierrez.blogspot.com.es/))_

_Daniel PERS ([site](http://blogpeda.ac-poitiers.fr/techno-jean-mace/)) : FDPlayer, OLED, RGB LED_
