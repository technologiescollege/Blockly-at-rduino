//www.technozone51fr

// define blocks
'use strict';

//pap1cc OK
Blockly.Blocks.technozone_pap1cc = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT69)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1relatif OK
Blockly.Blocks.technozone_pap1relatif = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT71)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT70)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);
    this.appendValueInput("PAS",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT72);               
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

Blockly.Blocks.technozone_robot_btn = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("le bouton RUN/STOP est appuyé");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

//robot_bt_available OK
Blockly.Blocks.technozone_robot_bt_available = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT159);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT160);
  }
};

//bt_init OK
Blockly.Blocks.technozone_bt_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT157);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT112);
    this.appendDummyInput("")
	      .appendTitle("RX ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.irqonchange), "DIST")
    this.appendDummyInput("")
        .appendTitle("TX ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.irqonchange), "TRIGER");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT158);
  }
};

//ihm_init OK
Blockly.Blocks.technozone_ihm_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT111);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT112);
    this.appendDummyInput("")
	      .appendTitle("RX ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.irqonchange), "DIST")
    this.appendDummyInput("")
        .appendTitle("TX ")
        .appendTitle(new Blockly.FieldDropdown(profile.default.irqonchange), "TRIGER");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT113);
  }
};

Blockly.Blocks.technozone_robot_ihm_init = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle("Initialise la console IHM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Initialise la console IHM');
  }
};

//robot_ihm_available OK
Blockly.Blocks.technozone_robot_ihm_available = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT114);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT115);
  }
};

//robot_ihm_change OK
Blockly.Blocks.technozone_robot_ihm_change = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT116);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT117);
  }
};

//robot_ihm_inter_read OK
Blockly.Blocks.technozone_robot_ihm_inter_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT140);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT141);
  }
};

//robot_ihm_btn_read OK
Blockly.Blocks.technozone_robot_ihm_btn_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT108);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT133);
  }
};

//robot_ihm_potar_read OK
Blockly.Blocks.technozone_robot_ihm_potar_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:BTIHM1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT148)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "10"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT149);
  }
};

//robot_ihm_led_def OK
Blockly.Blocks.technozone_robot_ihm_led_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT118)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT121);
  }
};

//robot_ihm_btn_def OK
Blockly.Blocks.technozone_robot_ihm_btn_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT131)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT132);
  }
};

//robot_ihm_inter_def OK
Blockly.Blocks.technozone_robot_ihm_inter_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT134)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT135);
  }
};

//robot_ihm_potar_def OK
Blockly.Blocks.technozone_robot_ihm_potar_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT142)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT143)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["10", "10"], ["100", "100"], ["1000", "1000"]]), "DIVISOR");
    this.appendValueInput("POTARI",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT144)
        .setCheck('Number');  
    this.appendValueInput("POTARA",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT145)
        .setCheck('Number'); 
    this.appendValueInput("POTARP",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT146)
        .setCheck('Number');  
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT147);
  }
};

//robot_ihm_gauge_def
Blockly.Blocks.technozone_robot_ihm_gauge_def = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT150)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119); 
    this.appendValueInput("GRADUATION", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT151); 
    this.appendValueInput("TITRE", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT152); 
    this.appendValueInput("CONTENT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT120); 
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT153);
  }
};

//robot_ihm_gauge_write
Blockly.Blocks.technozone_robot_ihm_gauge_write = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT154)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendValueInput("VALEUR",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT155)
        .setCheck('Number');   
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT156)
        .appendTitle(new Blockly.FieldDropdown([["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]]), "DECIMAL");
    this.setInputsInline(false);  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Positionne une gauge IHM (réf : BTIHM1)');
  }
};

//robot_ihm_led_on OK
Blockly.Blocks.technozone_robot_ihm_led_on = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT122)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT123)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT124, "0"], [Blockly.Msg.TECHNOZONE51_TEXT125, "1"], [Blockly.Msg.TECHNOZONE51_TEXT126, "2"], [Blockly.Msg.TECHNOZONE51_TEXT127, "3"], [Blockly.Msg.TECHNOZONE51_TEXT128, "4"], [Blockly.Msg.TECHNOZONE51_TEXT129, "5"]]), "COLOR");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT130);
  }
};

//robot_ihm_inter_on OK
Blockly.Blocks.technozone_robot_ihm_inter_on = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT136, "1"], [Blockly.Msg.TECHNOZONE51_TEXT137, "0"]]), "COLOR") 
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT138)
        .appendTitle(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["A", "A"]]), "LED")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT119);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT139);
  }
};

//robot_bt_read OK
Blockly.Blocks.technozone_robot_bt_read = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(160);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT161);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT162);
  }
};

//robot_bt_write
Blockly.Blocks.technozone_robot_bt_write = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btihm1',
  init: function() {
    this.setColour(190);
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT163);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT164);
  }
};

Blockly.Blocks.technozone_robot_irleft = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté à gauche");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ircenter = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté au centre");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_irright = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Un obstacle a été détecté à droite");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ligleft = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Une ligne a été détecté à gauche");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_ligright = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle("Une ligne a été détecté à droite");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Entrée bouton blanc (réf : BTN1-WHITE)');
  }
};

Blockly.Blocks.technozone_robot_move = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Faire ")
        .appendTitle(new Blockly.FieldDropdown([["avancer", "0"], ["reculer", "1"]]), "DIR");     
    this.appendValueInput("DISTANCE",'Number')
        .appendTitle(" le robot de ")
        .setCheck('Number');
    this.setInputsInline(true);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([["cm", "1"], ["mm", "0"]]), "UNIT");
    this.appendDummyInput("")
        .appendTitle(" en mode ")
        .appendTitle(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_robot_turn = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Faire tourner le robot à ")
        .appendTitle(new Blockly.FieldDropdown([["droite", "0"], ["gauche", "1"]]), "ROT");     
    this.appendValueInput("ANGLE",'Number')
        .appendTitle(" de ")
        .setCheck('Number');
    this.setInputsInline(true);
    this.appendDummyInput("")
        .appendTitle(" degré ");
    this.appendDummyInput("")
        .appendTitle("en mode ")
        .appendTitle(new Blockly.FieldDropdown([["préemptif", "1"], ["non préemptif", "0"]]), "PREEMPTIF");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

Blockly.Blocks.technozone_robot_stop = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("Stopper le robot")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Carte de commande de deux moteurs Pas à Pas pour EASYCON1,EASYCON2,EASYBOT1 (réf : PAP1)');
  }
};

//pap1init OK
Blockly.Blocks.technozone_pap1init = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT63)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD");         
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT66)
        .appendTitle(new Blockly.FieldDropdown([["Single Stepping", "SINGLE_STEPPING"], ["Full Stepping", "FULL_STEPPING"], ["Half Stepping", "HALF_STEPPING"]]), "MODE");             
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT67)
        .appendTitle(new Blockly.FieldDropdown([["Auto Relax", "AUTO_RELAX"], ["No Auto Relax", "NO_AUTO_RELAX"]]), "RELAX");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//pap1busy OK
Blockly.Blocks.technozone_pap1busy = {
  category: 'TechnoZone51 : moteur pas-à-pas',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:pap1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT73)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/pap1.jpg", 64, 64));
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT65)
        .appendTitle(new Blockly.FieldDropdown([["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "I2CADD")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT64);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT68);
  }
};

//mot2 OK
Blockly.Blocks.technozone_mot2 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:mot2',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT58)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/mot2.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT59);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT60)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PINDIR");
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT61)
        .appendTitle(new Blockly.FieldDropdown(profile.default.PWM), "PINPWM");  
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT62);
  }
};

//telec2 OK
Blockly.Blocks.technozone_telec2 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec2',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT106)
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PLAY/PAUSE", "FF22DD"], ["PREVIOUS", "FF02FD"], ["NEXT", "FFC23D"],
         ["EQ", "FFE1F"], ["VOL-", "FFA857"], ["VOL+", "FF906F"], ["0", "FF6897"], ["RPT", "FF9867"], ["U/SD", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT107)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/telec2.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT108);        
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT109);
  }
};

//telec1 OK
Blockly.Blocks.technozone_telec1 = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:telec1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT106)
        .appendTitle(new Blockly.FieldDropdown([["ON/OFF", "FFA25D"], ["MODE", "FF629D"], ["MUTE", "FFE21D"], ["PREVIOUS", "FF22DD"], ["NEXT", "FF02FD"], ["PLAY/PAUSE", "FFC23D"],
         ["MINUS", "FFE1F"], ["PLUS", "FFA857"], ["EQ", "FF906F"], ["0", "FF6897"], ["100+", "FF9867"], ["RETURN", "FFB04F"], ["1", "FF30CF"], ["2", "FF18E7"],
          ["3", "FF7A85"], ["4", "FF10EF"], ["5", "FF38C7"], ["6", "FF5AA5"], ["7", "FF42BD"], ["8", "FF4AB5"], ["9", "FF52AD"]]), "TOUCHE")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT107)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/telec1.jpg", 64, 64))
        //.appendTitle(" sur la broche ")
        //.appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT108);        
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT110);
  }
};

//telecsetup OK
Blockly.Blocks.technozone_telecsetup = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT100)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT101);
  }
};

//telecint OK
Blockly.Blocks.technozone_telecinit = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT104)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64));
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT105);
  }
};

//telecflush OK
Blockly.Blocks.technozone_telecflush = {
  category: 'TechnoZone51 : télécommande',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:irf1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT102)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/irf1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT103);
  }
};

//mot1easybot1 OK
Blockly.Blocks.technozone_mot1easybot1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT56)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/easybot.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT57);
  }
};

//mot1easycon1 OK
Blockly.Blocks.technozone_mot1easycon1 = {
  category: 'TechnoZone51 : moteur Courant Continu',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:easybot1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT51)
        .appendTitle(new Blockly.FieldDropdown([["A", "HIGH"], ["B", "LOW"]]), "MOT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT52)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/easycon1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/kitmot1.jpg", 64, 64));
    this.appendValueInput("SENS", 'Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT53);
    this.appendValueInput("VITESSE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT54);          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT55);
  }
};

//lcdinit OK
Blockly.Blocks.technozone_lcdinit = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(62);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT74)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT75)
        .appendTitle(new Blockly.FieldDropdown([["39", "39"], ["63", "63"]]),"I2C_adress");
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT76)
        .appendTitle(new Blockly.FieldTextInput('16',Blockly.Blocks.math_number.validator), 'nbcol');
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT77)
        .appendTitle(new Blockly.FieldTextInput('2',Blockly.Blocks.math_number.validator), 'nblig');   
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT78)     
        .appendTitle(new Blockly.FieldCheckbox('TRUE'), 'backlight');   
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT79)     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'cursor'); 
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT80)     
        .appendTitle(new Blockly.FieldCheckbox('FALSE'), 'blink');          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT81);
  }
};

//lcdspecial OK
Blockly.Blocks.technozone_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT82)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT83, "backlight"], [Blockly.Msg.TECHNOZONE51_TEXT84, "noBacklight"],[Blockly.Msg.TECHNOZONE51_TEXT85, "cursor"],[Blockly.Msg.TECHNOZONE51_TEXT86, "noCursor"],[Blockly.Msg.TECHNOZONE51_TEXT87, "blink"],[Blockly.Msg.TECHNOZONE51_TEXT88, "noBlink"],[Blockly.Msg.TECHNOZONE51_TEXT89, "display"],[Blockly.Msg.TECHNOZONE51_TEXT90, "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
  }
};

//lcdclear OK
Blockly.Blocks.technozone_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT92)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT93);
  }
};

//lcdwrite OK
Blockly.Blocks.technozone_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT94)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT95);
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT96)
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'COL');  
    this.appendDummyInput("")    
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT97)
        .appendTitle(new Blockly.FieldTextInput('0',Blockly.Blocks.math_number.validator), 'LIG');      
    this.appendValueInput("TEXT", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT98);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT99);
  }
};

Blockly.Blocks.technozone_robot_lcdclear = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("efface l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64));   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Efface l'écran LCD sur le bus I2C (réf : LCD1)");
  }
};

Blockly.Blocks.technozone_robot_lcdwrite = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("écrire sur l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
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

Blockly.Blocks.technozone_robot_lcdspecial = {
  category: 'TechnoZone51 : écran LCD',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lcd1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle("fonctions spéciales de l'écran LCD")
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lcd1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldDropdown([["active le curseur", "cursor"],["désactive le curseur", "noCursor"],["faire clignoter le curseur", "blink"],["arrête le clignotement du curseur", "noBlink"],["active l'affichage", "display"],["désactive l'affichage", "noDisplay"]]),"special");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Fonction spéciales de l'écran LCD (réf : LCD1)");
  }
};

//led1red OK
Blockly.Blocks.technozone_led1red = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1red.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT35);
  }
};

//led1green OK
Blockly.Blocks.technozone_led1green = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1green.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT36);
  }
};

//led1yellow OK
Blockly.Blocks.technozone_led1yellow = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:led1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT33, "HIGH"], [Blockly.Msg.TECHNOZONE51_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT32)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/led1yellow.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT37);
  }
};

//relay1 OK
Blockly.Blocks.technozone_relay1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:relay1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT38)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/relay1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT39)
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.TECHNOZONE51_TEXT40, "LOW"], [Blockly.Msg.TECHNOZONE51_TEXT41, "HIGH"]]), "STAT"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT42);
  }
};

//buzzer1 OK
Blockly.Blocks.technozone_buzzer1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT43)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/buzzer1.jpg", 64, 64))
		.appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("NUM",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT44)
    this.appendValueInput("TPS",'Number')
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT45)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT46);
  }
};

Blockly.Blocks.technozone_robot_buzzer_tone = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendValueInput("FREQUENCE",'Number')
        .appendTitle("émettre un son d'une fréquence ")
        .setCheck('Number');
    this.appendValueInput("DURATION",'Number')
        .appendTitle(" Hz pendant une durée de ")
        .setCheck('Number');
    this.appendDummyInput("")
		.appendTitle(" ms");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

Blockly.Blocks.technozone_robot_irsend = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:buzzer1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
		.appendTitle("Déclenche une détection d'obstacles");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Sortie Buzzer (réf : LED1-BUZZER1)');
  }
};

//sonar1 OK
Blockly.Blocks.technozone_sonar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:sonar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
	      .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT28)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/sonar1.jpg", 64, 64))
    this.appendDummyInput("")
	      .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT29)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "TRIGER")
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT30)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "DIST");
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT31);
  }
};

//servo1 OK
Blockly.Blocks.technozone_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(190);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT47)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendValueInput("DEGREE",'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT48);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//read_servo1 OK
Blockly.Blocks.technozone_read_servo1 = {
  category: 'TechnoZone51 : actionneurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:servo1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT50)
        .appendField(new Blockly.FieldImage("blocks/technozone51/servomoteur1.jpg", 64, 64))
	this.appendDummyInput("")	
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendField(new Blockly.FieldDropdown(profile.default.PWM), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT49);
  }
};

//btn1white OK
Blockly.Blocks.technozone_btn1white = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1white.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT7);
  }
};

//btn1black OK
Blockly.Blocks.technozone_btn1black = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1black.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT8);
  }
};

//btn1green OK
Blockly.Blocks.technozone_btn1green = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1green.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT9);
  }
};

//btn1red OK
Blockly.Blocks.technozone_btn1red = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:btn1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT5)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/btn1red.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT10);
  }
};

//Switch1 OK
Blockly.Blocks.technozone_switch1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:switch1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT11)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/switch1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT6);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT12);
  }
};

//ils1 OK
Blockly.Blocks.technozone_ils1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ils1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ils1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT13);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT14);
  }
};

//proxi1 OK
Blockly.Blocks.technozone_proxi1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:proxi1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT15)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/proxi1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT17);
  }
};

//bari1 OK
Blockly.Blocks.technozone_bari1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:bari1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT18)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/bari1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT16);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT19);
  }
};

//Détecteur de ligne OK
Blockly.Blocks.technozone_lig1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:lig1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/lig1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT3);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT4);
  }
};

//cmouv1 OK
Blockly.Blocks.technozone_cmouv1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:cmouv1',
  init: function() {
    this.setColour(120);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/servo1.jpg", 64, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/plus.jpg", 20, 64))
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/cmouv1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT20);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT21);
  }
};

//potar1 OK
Blockly.Blocks.technozone_potar1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:potar1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT22)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/potar1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT23);
  }
};

//ctn1 OK
Blockly.Blocks.technozone_ctn1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ctn1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT24)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ctn1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT25);
  }
};

//ldr1 OK
Blockly.Blocks.technozone_ldr1 = {
  category: 'TechnoZone51 : capteurs',
  helpUrl: 'http://www.techno-zone-51.fr/dokuwiki2/doku.php?id=documentation:ldr1',
  init: function() {
    this.setColour(10);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT26)
        .appendTitle(new Blockly.FieldImage("blocks/technozone51/ldr1.jpg", 64, 64))
        .appendTitle(Blockly.Msg.TECHNOZONE51_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(profile.default.analog), "PIN")
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT27);
  }
};