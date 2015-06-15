//www.technozone51fr

// define blocks
'use strict';

Blockly.Blocks.technozone_pap1cc = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("mettre en mouvement continu le")
        .appendField(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendField("de la carte PAP1")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendField("sur le bus I2C");
    this.appendDummyInput("")
        .appendField("à l'adresse")
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_pap1relatif = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("mettre en mouvement relatif le")
        .appendField(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendField("de la carte PAP1")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendField("sur le bus I2C");
    this.appendDummyInput("")
        .appendField("à l'adresse")
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse [0~255]");
    this.appendValueInput("PAS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nombre de pas");               
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_pap1init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendField("initialiser la carte PAP1")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendField("sur le bus I2C");
    this.appendDummyInput("")
        .appendField("à l'adresse")
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendField("le mode de commande des moteurs est")
        .appendField(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendField("le mode de libération des moteurs est")
        .appendField(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_pap1busy = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état de mouvement des moteurs")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64));
    this.appendDummyInput("")
        .appendField("à l'adresse sur le bus I2C")
        .appendField(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Teste si les moteurs pas à pas sont en mouvement ( réf : PAP1 )');
  }
};

Blockly.Blocks.technozone_mot2 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:mot2',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("commande le")
        .appendField(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendField("de la carte MOT2")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/mot2.jpg", 64, 64))
        .appendField("connectér sur les broches");
    this.appendDummyInput("")
        .appendField("broche de commande de Direction (DIR)")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PINDIR');
    this.appendDummyInput("")
        .appendField("broche de commande de la Vitesse (PWM~)")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinPWMValidator), 'PINPWM');
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs CC pour EASYCON1,EASYCON2,EASYBOT1 (réf : MOT2)');
  }
};

Blockly.Blocks.technozone_telec2 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec2',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la touche")
        .appendField(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PLAY/PAUSE", "FF22DD"], ["PREVIOUS", "FF02FD"], ["NEXT", "FFC23D"],
         ["EQ", "FFE1F"], ["VOL-", "FFA857"], ["VOL+", "FF906F"], ["0", "FF6897"], ["RPT", "FF9867"], ["U/SD", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendField("de la télécommande")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec2.jpg", 64, 64))
        //.appendField(" sur la broche ")
        //.appendField(new Blockly.FieldDropdown(profile.defaultBoard.digital), "PIN")
        .appendField("a été appuyée ?");        
    this.setOutput(true, 'Boolean');
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC2)');
  }
};

Blockly.Blocks.technozone_telec1 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la touche")
        .appendField(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PREVIOUS", "FF22DD"], ["NEXT", "FF02FD"], ["PLAY/PAUSE", "FFC23D"],
         ["MINUS", "FFE1F"], ["PLUS", "FFA857"], ["EQ", "FF906F"], ["0", "FF6897"], ["100+", "FF9867"], ["RETURN", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendField("de la télécommande")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec1.jpg", 64, 64))
        //.appendField(" sur la broche ")
        //.appendField(new Blockly.FieldDropdown(profile.defaultBoard.digital), "PIN")
        .appendField("a été appuyée ?");        
    this.setOutput(true, 'Boolean');
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1 + TELEC1)');
  }
};

Blockly.Blocks.technozone_telecsetup = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendField("initialise la télécommande")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Initialise la télécommande (réf : IRF1 + (TELEC1 ou TELEC2))');
  }
};

Blockly.Blocks.technozone_telecinit = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("une touche de la télécommande a été appuyée ?")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));
    this.setOutput(true, 'Boolean');
    this.setTooltip('Teste si une touche de la télécommande a été appuyée (réf : IRF1)');
  }
};

Blockly.Blocks.technozone_telecflush = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("vide le tampon de réception de la télécommande")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Vide le tampon de réception de la télécommande (réf :IRF1)");
  }
};

Blockly.Blocks.technozone_mot1easybot1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("commande le")
        .appendField(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendField("sur la carte EASYBOT1")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easybot.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Commande de deux moteurs CC sur EASYBOT1 (réf : EASYBOT1 + KIT-MOT1)');
  }
};

Blockly.Blocks.technozone_mot1easycon1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("commande le")
        .appendField(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendField("sur la carte EASYCON1")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easycon1.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse [0~255]");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Commande de deux moteurs CC sur EASYCON1 (réf : EASYCON1 + KIT-MOT1)');
  }
};

Blockly.Blocks.technozone_lcdinit = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendField("initialise l'écran LCD")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendField("à l'adresse I2C")
        .appendField(new Blockly.FieldDropdown([["39", "39"], ["63", "63"]]),"I2C_adress");
    this.appendDummyInput("")    
        .appendField("nombre de colonne(s)")
        .appendField(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")    
        .appendField("nombre de ligne(s)")
        .appendField(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")    
        .appendField("active le rétro-éclairage ?")     
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")    
        .appendField("active le curseur ?")     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")    
        .appendField("faire clignoter le curseur ?")     
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Initialise l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("fonctions spéciales de l'écran LCD")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendField(new Blockly.FieldDropdown([["active le rétroéclairage", "backlight"], ["désactive le rétroéclairage", "noBacklight"],["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Fonction spéciales de l'écran LCD (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("efface l'écran LCD")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Efface l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("écrire sur l'écran LCD")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendField("à partir de la position");
    this.appendDummyInput("")    
        .appendField("colonne [0..MAXCOL-1]")
        .appendField(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendField("ligne [0..MAXLIG-1]")
        .appendField(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("le texte");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Ecrire sur l'écran LCD (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_led1red = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendField("la DEL")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1red.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led rouge (réf : LED1-RED)');
  }
};

Blockly.Blocks.technozone_led1green = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendField("la DEL")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1green.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led verte (réf : LED1-GREEN)');
  }
};

Blockly.Blocks.technozone_led1yellow = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendField("la DEL")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1yellow.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie led jaune (réf : LED1-YELLOW)');
  }
};

Blockly.Blocks.technozone_relay1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("mettre le relais")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/relay1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField("à l'état")
        .appendField(new Blockly.FieldDropdown([["activé", "LOW"], ["désactivé", "HIGH"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Relais de puissance (réf : RELAY1)');
  }
};

Blockly.Blocks.technozone_buzzer1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendField("émettre un son")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/buzzer1.jpg", 64, 64))
		.appendField("sur la broche")
		.appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.appendValueInput("NUM",'Number')
        .appendField("d'une fréquence (Hz)")
        .setCheck(Number);
    this.appendValueInput("TPS",'Number')
        .appendField("pendant une durée (ms) de")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Blocks.technozone_sonar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	      .appendField("la distance mesurée (cm)")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/sonar1.jpg", 64, 64));
    this.appendDummyInput("")
	      .appendField("TRIG est sur la broche")
	      .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'TRIGER');
    this.appendDummyInput("")
        .appendField("DIST est sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'DIST');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Sonar Ultrasonore (réf : SONAR1)');
  }
};

Blockly.Blocks.technozone_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendField("positionne le servo-moteur")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servomoteur1.jpg", 64, 64))
        .appendField("de la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.appendValueInput("DEGREE",'Number')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle [0~180°]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Servo-moteur (réf : SERVO1 + SERVO-MOT1)');
  }
};

Blockly.Blocks.technozone_btn1white = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du bouton")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1white.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_btn1black = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du bouton")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1black.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton noir (réf : BTN1-BLACK)');
  }
};

Blockly.Blocks.technozone_btn1green = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du bouton")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1green.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton vert (réf : BTN1-GREEN)');
  }
};

Blockly.Blocks.technozone_btn1red = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du bouton")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1red.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton rouge (réf : BTN1-RED)');
  }
};

Blockly.Blocks.technozone_switch1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du fin de course")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/switch1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Fin de course (réf : SWITCH1 ou SWITCH2)');
  }
};

Blockly.Blocks.technozone_ils1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la détection")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ils1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField("d'un champ magnétique");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Capteur Magnétique (réf : ILS1)');
  }
};

Blockly.Blocks.technozone_proxi1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la détection d'un obstacle à proximité")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/proxi1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Détecteur de Proximité (réf : PROXI1)');
  }
};

Blockly.Blocks.technozone_bari1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la détection d'un obstacle par la barrière infra-rouge")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/bari1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Barrière Infrarouge (réf : BARI1)');
  }
};

Blockly.Blocks.technozone_lig1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("l'état du capteur")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lig1.jpg", 64, 64))
        .appendField("sur la broche ")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField("de suivi de ligne");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Détecteur de ligne (réf : LIG1)');
  }
};

Blockly.Blocks.technozone_cmouv1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendField("la détection d'une présence")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/cmouv1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée Détecteur de Présence (réf : SERVO1 + CMOUV1)');
  }
};

Blockly.Blocks.technozone_potar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField("la position du potentiomètre")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/potar1.jpg", 64, 64))
        .appendField("sur la broche ")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée potentiomètre (réf : POTAR1)');
  }
};

Blockly.Blocks.technozone_ctn1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField("la température (°C) lue")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ctn1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée Capteur de Température (réf : CTN1)');
  }
};

Blockly.Blocks.technozone_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField("la luminosité (Lux) lue")
        .appendField(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ldr1.jpg", 64, 64))
        .appendField("sur la broche")
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinAnalogValidator), 'PIN');
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée Capteur de Luminosité (réf : LDR1)');
  }
};