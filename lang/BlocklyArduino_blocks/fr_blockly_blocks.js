'use strict';

goog.provide('Blockly.Msg.fr');

goog.require('Blockly.Msg');

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
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1="retourne la valeur stockée dans la liste ou tableau";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2="créé une liste ou tableau du type sélectionné";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3="fixe un (ou plusieurs) élément(s) de la liste ou tableau à la (aux) valeur(s) indiquée(s)";
Blockly.Msg.ARRAY_CREATE = "définir ";
Blockly.Msg.ARRAY_TAILLE = "de taille";
Blockly.Msg.ARRAY_CONTIENT = "qui contient";
Blockly.Msg.ARRAY_LIST = "la liste";
Blockly.Msg.ARRAY_ARRAY = "le tableau";
Blockly.Msg.ARRAY_fixe = "mettre l'élément de rang";
Blockly.Msg.ARRAY_DECLARE_NAME = "créer un tableau nommé";
Blockly.Msg.ARRAY_DECLARE_TYPE = "de types";
Blockly.Msg.ARRAY_DECLARE_SIZE = "d'un nombre d'éléments";
Blockly.Msg.ARRAY_DECLARE_TOOLTIP = "crée un tableau de dimension et de type indiqués";
Blockly.Msg.ARRAY_MODIFY_INDICE = "affecter à l'élément de rang";
Blockly.Msg.ARRAY_MODIFY_NAME = "dans le tableau";
Blockly.Msg.ARRAY_MODIFY_VALUE = "la valeur";
Blockly.Msg.ARRAY_MODIFY_TOOLTIP = "affecte une valeur à un élément du tableau";

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

Blockly.Msg.TEXT_CHAR_TOOLTIP = "caractère unique, codé sur 1 octet";
Blockly.Msg.TEXT_CHAR_HELPURL = "https://www.arduino.cc/reference/en/language/variables/data-types/string/";
Blockly.Msg.TEXT_COMPARE_STRING_HELPURL = "";
Blockly.Msg.TEXT_COMPARE_STRING_TEXT = "Comparation des deux chaînes : ";
Blockly.Msg.TEXT_COMPARE_STRING_TEXT2 = " = ";
Blockly.Msg.TEXT_COMPARE_STRING_TOOLTIP = "Permet de savoir si deux chaînes sont identiques oui ou non.";

//july 9th function from JP Fontaine workspace
Blockly.Msg.PROCEDURES_DEFRETURN_FUNCTION = "pour la fonction";
Blockly.Msg.PROCEDURES_DEFRETURN_TYPE = "de type";

Blockly.Msg.VARIABLES_AS = "de type";
Blockly.Msg.VARIABLES_SET_CONST = "constante %1 fixée à %2";
Blockly.Msg.ARD_TYPE_ARRAY = "tableau";
Blockly.Msg.ARD_TYPE_BOOL = "binaire (ToR)";
Blockly.Msg.ARD_TYPE_CHAR = "caractère";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "typage manquant sur un bloc";
Blockly.Msg.ARD_TYPE_DECIMAL = "nombre à virgule (float)";
Blockly.Msg.ARD_TYPE_LONG = "nombre entier long (long)";
Blockly.Msg.ARD_TYPE_NULL = "vide";
Blockly.Msg.ARD_TYPE_NUMBER = "nombre entier (int)";
Blockly.Msg.ARD_TYPE_SHORT = "octet (byte)";
Blockly.Msg.ARD_TYPE_TEXT = "texte";
Blockly.Msg.ARD_TYPE_UNDEF = "non défini";
Blockly.Msg.ARD_TYPE_UNS_NUMBER = "nombre entier positif (unsigned int)";
Blockly.Msg.ARD_TYPE_UNS_LONG = "nombre entier long positif (unsigned long)";
Blockly.Msg.ARD_TYPE_VOLATILE = "nombre entier volatile (pour interruption)";