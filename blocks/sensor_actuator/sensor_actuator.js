"use strict";

goog.provide("Blockly.Blocks.sensor_actuator");

goog.require("Blockly.Blocks");
goog.require('Blockly.Types');

Blockly.Blocks["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendValueInput("TEXT1", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT1);
        this.appendValueInput("TEXT2", "String").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LCD_SHIELD_PRINT_INPUT2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09_lc"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.LCD_SHIELD_PRINT_TEXT);
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("ligne").appendField(new Blockly.FieldDropdown(Blockly.Msg.ligne), "ligne");
        this.appendValueInput("TEXT4", "String").setCheck("String").setAlign(Blockly.ALIGN_RIGHT).appendField("colonne").appendField(new Blockly.FieldDropdown(Blockly.Msg.colonne), "colonne");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("affiche le texte à l'emplacement indiqué")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_LCD_Keypad_Shield_DFR_09_RAZ"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.LCD_SHIELD_PRINT_HELPURL);
        this.appendDummyInput().appendField("effacer l'écran LCD");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("efface l'écran")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_inout_buildin_led"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_digital_write"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setCheck("Number").appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_ONOFF), "STAT").appendField("la DEL connectée à la broche");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("allume (éteint) la DEL connectée à la broche indiquée")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_tone"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT1);
        this.appendValueInput("NUM", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT2).setCheck("Number");
        this.appendValueInput("TPS", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_TONE_INPUT3).setCheck("Number");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_notone"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_init"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.lp2i_mp3).appendField(new Blockly.FieldImage("blocks/sensor_actuator/dfplayer-mini-mp3.jpg", 50, 53));
        this.appendValueInput("Volume", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.lp2i_mp3_init_Volume);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("initialisation du module MP3, volume initialisé à la valeur indiqué\nModule MP3 Rx <--> Arduino Tx(1)");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_volume"] = {
    init: function() {
        this.appendValueInput("Volume", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldImage("blocks/sensor_actuator/volume-up.png", 20, 22, "+/-")).appendField("mettre le volume à");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("mettre le volume à la valeur indiquée");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_next"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/forward.png", 14, 18, ">>")).appendField("lire le fichier mp3 suivant");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("joue le morceau suivant");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_prev"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/backward.png", 14, 18, "<<")).appendField(Blockly.Msg.lp2i_mp3_prev);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("joue le morceau précédent");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_pause"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/pause.png", 14, 18, "||")).appendField("mettre le fichier mp3 en pause");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("stoppe le morceau en cours");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lp2i_mp3_play"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/play.png", 14, 18, ">")).appendField("lire le fichier mp3");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("joue le morceau en cours");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_moteur_dc"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/dagurs040.png", 75, 50)).appendField("actionner le moteur").appendField(new Blockly.FieldDropdown([
            ["droit", "6"],
            ["gauche", "5"]
        ]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("direction").appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("vitesse [0-125]");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("actionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 125");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_matrice8x8_symbole"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.matrice8x8).appendField(new Blockly.FieldTextInput("damier"), "NAME");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L1).appendField(new Blockly.FieldTextInput("01010101"), "L1");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L2).appendField(new Blockly.FieldTextInput("10101010"), "L2");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L3).appendField(new Blockly.FieldTextInput("01010101"), "L3");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L4).appendField(new Blockly.FieldTextInput("10101010"), "L4");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L5).appendField(new Blockly.FieldTextInput("01010101"), "L5");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L6).appendField(new Blockly.FieldTextInput("10101010"), "L6");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L7).appendField(new Blockly.FieldTextInput("01010101"), "L7");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.matrice8x8_symbole_L8).appendField(new Blockly.FieldTextInput("10101010"), "L8");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.matrice8x8_symbole_TOOLTIP)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_matrice8x8_init"] = {
    init: function() {
        this.appendDummyInput().appendField("matrice 8x8").appendField(new Blockly.FieldImage("blocks/sensor_actuator/matrice60.png", 60, 60));
        this.appendValueInput("DIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DIN");
        this.appendValueInput("CLK").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CLK");
        this.appendValueInput("CS").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("CS");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("Initialisation de la matrice à 64 DEL, il faut indiquer les broches de l'arduino sur lesquelles vont être connectées DIN, CLK, CS.");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_matrice8x8_aff"] = {
    init: function() {
        this.appendDummyInput().appendField("afficher le symbole").appendField(new Blockly.FieldTextInput("damier"), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("Affiche le symbole qui aura été préalablement défini.");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_matrice8x8"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.matrice8x8).appendField(new Blockly.FieldDropdown([
            ["rien", "rien"],
            ["coeur", "coeur"],
            ["LH", "LH"],
            ["euro", "euro"]
        ]), "symbole_matrice");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip("définition de 4 symboles (rien, coeur, LH et euro)")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_matrice_nombre_0_30"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.appendDummyInput().appendField("afficher le symbole").appendField(new Blockly.FieldDropdown([
            ["0", "zero"],
            ["1", "un"],
            ["2", "deux"],
            ["3", "trois"],
            ["4", "quatre"],
            ["5", "cinq"],
            ["6", "six"],
            ["7", "sept"],
            ["8", "huit"],
            ["9", "neuf"],
            ["10", "dix"],
            ["11", "onze"],
            ["12", "douze"],
            ["13", "treize"],
            ["14", "quatorze"],
            ["15", "quinze"],
            ["16", "seize"],
            ["17", "dixsept"],
            ["18", "dixhuit"],
            ["19", "dixneuf"],
            ["20", "vingt"],
            ["21", "vingtetun"],
            ["22", "vingtdeux"],
            ["23", "vingttrois"],
            ["24", "vingtquatre"],
            ["25", "vingtcinq"],
            ["26", "vingtsix"],
            ["27", "vingtsept"],
            ["28", "vingthuit"],
            ["29", "vingtneuf"],
            ["30", "trente"]
        ]), "nombre");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip("Affiche sur la matrice les nombres prédéfinis de 0 à 30")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_ultrason_distance"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/capteurultrasonique.png", 50, 33)).appendField(Blockly.Msg.ultrason_distance1);
        this.appendValueInput("a").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Trig");
        this.appendValueInput("b").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("Echo");
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.ultrason_distance2)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_moteur_action"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/shield293.jpg", 60, 60)).appendField(new Blockly.FieldDropdown([
            ["avancer", "a"],
            ["tourner à droite", "d"],
            ["tourner à gauche", "g"]
        ]), "menu").appendField("à la vitesse").appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "speed");
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("actionne les 2 moteurs pour avancer ou tourner, la vitesse peut être réglée entre 0 et 125");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_moteur_stop"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/shield293.jpg", 60, 60)).appendField("arrêter");
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("stoppe les deux moteurs");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_dagu_rs027"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/dagurs027.png", 75, 50)).appendField("actionner le moteur").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
            ["droit", "10"],
            ["gauche", "9"]
        ]), "MOTEUR");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("direction").appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_av_ar), "ETAT");
        this.appendValueInput("Vitesse").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("vitesse [0-125]");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("actionne une des 2 sorties pour piloter des moteurs à courant continu, la vitesse peut être réglée entre 0 et 125");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_bluetooth_b"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/bluetooth.jpg", 30, 30, "B")).appendField("si la donnée reçue");
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField("alors");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip("réception de données par bluetooth\nIl faut croiser Rx et Tx");
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("alors")
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField("sinon")
    },
    decompose: function(workspace) {
        var containerBlock = Blockly.Block.obtain(workspace, "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = Blockly.Block.obtain(workspace, "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = Blockly.Block.obtain(workspace, "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("vaut");
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField("alors");
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField("sinon");
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_blink"] = {
    init: function() {
        this.appendDummyInput().appendField("faire clignoter la DEL de la carte").appendField(new Blockly.FieldDropdown([
            ["lentement", "1000"],
            ["rapidement", "100"]
        ]), "speed");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("la DEL de la carte clignote 1 ou 10 fois par seconde");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lcd"] = {
    init: function() {
        this.appendDummyInput().appendField("écran LCD").appendField(new Blockly.FieldImage("blocks/sensor_actuator/lcd.png", 60, 35));
        this.appendValueInput("rs", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("RS");
        this.appendValueInput("en", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("E");
        this.appendValueInput("d4", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("D4");
        this.appendValueInput("d5", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("D5");
        this.appendValueInput("d6", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("D6");
        this.appendValueInput("d7", "String").setAlign(Blockly.ALIGN_RIGHT).appendField("D7");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("initialise l'écran LCD, de 2 lignes et 16 caractères, en indiquant les broches à connecter");
        this.setHelpUrl(Blockly.Msg.HELPURL);
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_inout_bp"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldImage("blocks/sensor_actuator/bp.png", 40, 40)).appendField("bouton pressé sur la broche");
        this.setOutput(true, "Boolean");
        this.setTooltip("détecte si un bouton poussoir est pressé et renvoie vrai (faux) si c'est le cas (ou pas)")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_dht11"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl("http://nagashur.com/blog/2013/06/18/lire-la-valeur-dune-sonde-de-temperature-et-d%E2%80%99hygrometrie-dht11/");
        this.appendValueInput("PIN", "Number").appendField(new Blockly.FieldImage("blocks/sensor_actuator/dht11.png", 60, 45)).appendField(new Blockly.FieldDropdown([
            ["humidité", "h"],
            ["température", "t"]
        ]), "choix").appendField(Blockly.Msg.pin);
        this.setOutput(true, "Number");
        this.setTooltip("retourne l'humidité (de 0 à 100%) ou la température (de 0 à 80°C) reçue par le capteur")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_suiveur_ligne"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("PIN", "Number").appendField(new Blockly.FieldImage("blocks/sensor_actuator/cap227.png", 90, 50)).appendField("ligne noire détectée sur la broche");
        this.setOutput(true, "Boolean");
        this.setTooltip("renvoie vrai (faux) si une ligne noire est (n'est pas) détectée")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_light_sensor"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-la-luminosite-ambiante-avec-une-photoresistance-et-une-carte-arduino-genuino/");
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/light_sensor.png", 40, 40)).appendField("luminosité sur la broche").appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownAnalog), "broche");
        this.setOutput(true, "Number");
        this.setTooltip("renvoie une valeur en fonction de la luminosité\n0 : obscurité\n255 : pleine lumière")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_potentiometre"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl("https://www.carnetdumaker.net/articles/la-conversion-analogique-numerique-avec-arduino-genuino/");
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/potar.png", 37, 50)).appendField("position du curseur sur la broche").appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownAnalog), "broche");
        this.setOutput(true, "Number");
        this.setTooltip("renvoie une valeur en fonction de la position du curseur\n0 : curseur à gauche\n255 : curseur à droite")
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_lm35"] = {
    init: function() {
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setHelpUrl("https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-lm35-et-une-carte-arduino-genuino/");
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/LM35.jpg", 32, 50)).appendField("température sur la broche").appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownAnalog), "broche");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.lm35_2)
    }
};
Blockly.Blocks["SENSOR_ACTUATOR_moteur3v"] = {
    init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("blocks/sensor_actuator/moteur.png", 45, 45)).appendField("actionner le moteur sur la broche").appendField(new Blockly.FieldDropdown(profile.defaultBoard.dropdownPWM), "pin");
        this.appendValueInput('speed').setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField("vitesse [0-255]");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("met en route le moteur à courant continu connecté à la broche indiquée, à la vitesse indiquée\nvitesse = 0 --> arrêt du moteur");
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks['SENSOR_ACTUATOR_bargraphe'] = {
    init: function() {
        this.appendValueInput("del", "Number").appendField(new Blockly.FieldImage("blocks/sensor_actuator/bargraphe.png", 55, 55)).appendField("allumer jusqu'à");
        this.appendValueInput("clk", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DCKI");
        this.appendValueInput("data", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("DI");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("Ce module bargraphe est composé de 10 DEL (8 vertes, 1 jaune et 1 rouge).\n0 n'allume aucune DEL\n2,5 allume les 2 premières DEL et la 3ème à moitié\n10 allume toutes les DEL");
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LED_Bar/");
    }
};
Blockly.Blocks['SENSOR_ACTUATOR_lcd_i2c'] = {
    init: function() {
        this.appendDummyInput().appendField("écran LCD I2C").appendField(new Blockly.FieldImage("blocks/sensor_actuator/lcd_i2c.png", 55, 35));
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField("fond").appendField(new Blockly.FieldDropdown([
            ["bleu", "bleu"],
            ["jaune", "jaune"],
            ["rouge", "rouge"],
            ["vert", "vert"]
        ]), "fond");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.sensor_actuator.HUE);
        this.setTooltip("initialise l'écran LCD I2C, de 2 lignes et 16 caractères avec rétro-éclairage RGB, en indiquant les broches à connecter.\nAfficheur <--> Arduino\nSDA <--------> A4\nSCL <--------> A5");
        this.setHelpUrl("http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/");
    }
};