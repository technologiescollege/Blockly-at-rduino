//www.technozone51fr

// define blocks
'use strict';

Blockly.Blocks.technozone_pap1cc = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("mettre en mouvement continu le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
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
        .appendTitle("mettre en mouvement relatif le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire ( VRAI ou FAUX ? )");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");
    this.appendValueInput("PAS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("nombre de pas");               
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
        .appendTitle("initialiser la carte PAP1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64))
        .appendTitle("sur le bus I2C");
    this.appendDummyInput("")
        .appendTitle("à l'adresse")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendTitle("le mode de commande des moteurs est")
        .appendTitle(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendTitle("le mode de libération des moteurs est")
        .appendTitle(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
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
        .appendTitle("l'état de mouvement des moteurs")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/pap1.jpg", 64, 64));
    this.appendDummyInput("")
        .appendTitle("à l'adresse sur le bus I2C")
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
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
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("de la carte MOT2")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/mot2.jpg", 64, 64))
        .appendTitle("connectér sur les broches");
    this.appendDummyInput("")
        .appendTitle("broche de commande de Direction (DIR)")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PINDIR");
    this.appendDummyInput("")
        .appendTitle("broche de commande de la Vitesse (PWM~)")
        .appendTitle(new Blockly.FieldDropdown(profile.default.PWM), "PINPWM");  
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
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
        .appendTitle("la touche")
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PLAY/PAUSE", "FF22DD"], ["PREVIOUS", "FF02FD"], ["NEXT", "FFC23D"],
         ["EQ", "FFE1F"], ["VOL-", "FFA857"], ["VOL+", "FF906F"], ["0", "FF6897"], ["RPT", "FF9867"], ["U/SD", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle("de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec2.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("a été appuyée ?");        
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
        .appendTitle("la touche")
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PREVIOUS", "FF22DD"], ["NEXT", "FF02FD"], ["PLAY/PAUSE", "FFC23D"],
         ["MINUS", "FFE1F"], ["PLUS", "FFA857"], ["EQ", "FF906F"], ["0", "FF6897"], ["100+", "FF9867"], ["RETURN", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle("de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/telec1.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("a été appuyée ?");        
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
        .appendTitle("initialise la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("une touche de la télécommande a été appuyée ?")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));
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
        .appendTitle("vide le tampon de réception de la télécommande")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/irf1.jpg", 64, 64));   
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
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("sur la carte EASYBOT1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easybot.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
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
        .appendTitle("commande le")
        .appendTitle(new Blockly.FieldDropdown([["moteur A", "HIGH"], ["moteur B", "LOW"]]), "MOT")
        .appendTitle("sur la carte EASYCON1")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/easycon1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sens horaire (VRAI ou FAUX ?)");
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("vitesse [0~255]");          
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
        .appendTitle("initialise l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle("à l'adresse I2C")
        .appendTitle(new Blockly.FieldDropdown([["39", "39"], ["63", "63"]]),"I2C_adress");
    this.appendDummyInput("")    
        .appendTitle("nombre de colonne(s)")
        .appendTitle(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")    
        .appendTitle("nombre de ligne(s)")
        .appendTitle(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")    
        .appendTitle("active le rétro-éclairage ?")     
        .appendTitle(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")    
        .appendTitle("active le curseur ?")     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")    
        .appendTitle("faire clignoter le curseur ?")     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'blink');          
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
        .appendTitle("fonctions spéciales de l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([["active le rétroéclairage", "backlight"], ["désactive le rétroéclairage", "noBacklight"],["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
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
        .appendTitle("efface l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64));   
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
        .appendTitle("écrire sur l'écran LCD")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lcd1.jpg", 64, 64))
        .appendTitle("à partir de la position");
    this.appendDummyInput("")    
        .appendTitle("colonne [0..MAXCOL-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendTitle("ligne [0..MAXLIG-1]")
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("le texte");
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
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1red.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
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
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1green.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle(new Blockly.FieldDropdown([["allume", "HIGH"], ["éteint", "LOW"]]), "STAT")
        .appendTitle("la DEL")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/led1yellow.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("mettre le relais")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/relay1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("à l'état")
        .appendTitle(new Blockly.FieldDropdown([["activé", "LOW"], ["désactivé", "HIGH"]]), "STAT"); 
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
		.appendTitle("émettre un son")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/buzzer1.jpg", 64, 64))
		.appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("NUM",'Number')
        .appendTitle("d'une fréquence (Hz)")
        .setCheck(Number);
    this.appendValueInput("TPS",'Number')
        .appendTitle("pendant une durée (ms) de")
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
	      .appendTitle("la distance mesurée (cm)")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/sonar1.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle("TRIG est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "TRIGER")
    this.appendDummyInput("")
        .appendTitle("DIST est sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DIST");
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
        .appendTitle("positionne le servo-moteur")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servomoteur1.jpg", 64, 64))
        .appendTitle("de la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE",'Number')
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle("sur l'angle [0~180°]");
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
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1white.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1black.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1green.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("l'état du bouton")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/btn1red.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("l'état du fin de course")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/switch1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("la détection")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ils1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("d'un champ magnétique");
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
        .appendTitle("la détection d'un obstacle à proximité")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/proxi1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("la détection d'un obstacle par la barrière infra-rouge")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/bari1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("l'état du capteur")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/lig1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle("de suivi de ligne");
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
        .appendTitle("la détection d'une présence")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/cmouv1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
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
        .appendTitle("la position du potentiomètre")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/potar1.jpg", 64, 64))
        .appendTitle("sur la broche ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
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
        .appendTitle("la température (°C) lue")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ctn1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
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
        .appendTitle("la luminosité (Lux) lue")
        .appendTitle(new Blockly.FieldImage("http://www.technozone51.fr/plugins/ldr1.jpg", 64, 64))
        .appendTitle("sur la broche")
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip('Entrée Capteur de Luminosité (réf : LDR1)');
  }
};