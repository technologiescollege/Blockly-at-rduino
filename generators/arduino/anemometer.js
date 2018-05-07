/**
 * Blocs pour le capteur anémomètre intégrant un contact reed (avec un aimant sur sa partie mobile)
 * par : franck.piot@ac-besancon.fr
 */
 
 //Script de la mesure de la vitesse de rotation des coupelles
 
'use strict';

goog.provide('Blockly.Arduino.anemometre');
goog.require('Blockly.Arduino');

Blockly.Arduino.anemometre_vitesse_rotation = function() {
  Blockly.Arduino.includes_['anemo_lib'] = '#include <PinChangeInt.h>';
  Blockly.Arduino.definitions_['var_anemo'] = 'unsigned long datedernierPassage;\n' +
    'long derniereSeconde; \n' +
    'byte secondes; \n' +
	'int force;\n' +
   	'float nombreTourSec (0);\n' +
	'float nombreTourMin (0);\n' +
	'float vitesseVentms(0);\n' +
	'float vitesseVentkmh(0);\n' +
	'float vitesseVentnoeud(0);\n' +
	'volatile unsigned int comptageILS = 0;\n' +
	'const unsigned long dureeAntiRebond = 1;';  
 
 Blockly.Arduino.codeFunctions_['function_anemo'] = "void interruptionILS() //comptage de l'ILS\n" +
	'  {\n' +
	'  static unsigned long dateDernierChangement = 0;\n' +
	'  unsigned long date = millis();\n' +
	'  if ((date - dateDernierChangement) > dureeAntiRebond) {\n' +
    '    comptageILS++;\n' +
    '    dateDernierChangement = date;\n' +
	'    }\n' +
	'  }';

 Blockly.Arduino.userFunctions_['function_anemo'] = 'float comptageRotation() //Renvoie le nombre de tours par minute effectué par les coupelles\n' +
	'  {\n' +
	'  float deltaTime = millis() - datedernierPassage;\n' +
	'  deltaTime = deltaTime/1000.0; //Converti en secondes\n' +
    '  nombreTourSec = (float)comptageILS / deltaTime;\n' +
    '  nombreTourMin = nombreTourSec * 60;\n' +
    '  comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n' +
    '  datedernierPassage = millis();\n' +
	'  return (nombreTourMin);\n' +
 	'  }';
 
	Blockly.Arduino.userFunctions_['function_incrotation'] = 'float incrementation()\n' +
	'  {\n' +
 	'  if(millis() - derniereSeconde >= 1000)\n' +
    '    {\n' +
    '    derniereSeconde += 1000;\n' +
	'    comptageRotation();\n' +
    '    }\n' +
    '  delay(100);\n' +
	'  return(nombreTourMin);\n' +
	'  }'; 
 
 var PIN_ANEMO = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
 
 Blockly.Arduino.setups_['setup_anemo'] = 'pinMode(' + PIN_ANEMO + ', INPUT_PULLUP);\n' +
	'  secondes = 0;\n' +
	'  derniereSeconde = millis();\n' +
	'  PCintPort::attachInterrupt(' + PIN_ANEMO + ', interruptionILS, FALLING);';
 
 var code = 'incrementation()';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};  


//Script de la mesure de la vitesse du vent en m/s

Blockly.Arduino.anemometre_vitesse_ventms = function() {
  
  var PIN_ANEMO = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var rayon = Blockly.Arduino.valueToCode(this, 'RAYONBRAS', Blockly.Arduino.ORDER_ATOMIC);
  var coeff = Blockly.Arduino.valueToCode(this, 'COEFETAL', Blockly.Arduino.ORDER_ATOMIC);
  
 Blockly.Arduino.includes_['anemo_lib'] = '#include <PinChangeInt.h>';
 Blockly.Arduino.definitions_['var_anemo'] = 'unsigned long datedernierPassage;\n' +
    'long derniereSeconde; \n' +
    'byte secondes; \n' +
	'int force;\n' +
   	'float nombreTourSec (0);\n' +
	'float nombreTourMin (0);\n' +
	'float vitesseVentms(0);\n' +
	'float vitesseVentkmh(0);\n' +
	'float vitesseVentnoeud(0);\n' +
	'volatile unsigned int comptageILS = 0;\n' +
	'const unsigned long dureeAntiRebond = 1;';
    
   Blockly.Arduino.codeFunctions_['function_anemo'] = "void interruptionILS() //comptage de l'ILS\n" +
	'  {\n' +
	'  static unsigned long dateDernierChangement = 0;\n' +
	'  unsigned long date = millis();\n' +
	'  if ((date - dateDernierChangement) > dureeAntiRebond) {\n' +
    '    comptageILS++;\n' +
    '    dateDernierChangement = date;\n' +
	'    }\n' +
	'  }';

  Blockly.Arduino.userFunctions_['function_ventms'] = "float mesureventms()// mesure de la vitesse du vent instantanée (m/s)\n" +
	'  {\n' +
	'  float deltaTime = millis() - datedernierPassage;\n' +
	'  deltaTime = deltaTime/1000.0; //Converti en secondes\n' +
    '  nombreTourSec = (float)comptageILS / deltaTime;\n' +
    '  nombreTourMin = nombreTourSec * 60;\n' +
	'  vitesseVentms = 3.1416 * '+rayon+' * nombreTourMin * '+coeff+' / 3000; // formule pour le calcul de la vitesse du vent\n' +
    '  comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n' +
    '  datedernierPassage = millis();\n' +
	'  return (vitesseVentms);\n' +
 	'  }';

	Blockly.Arduino.userFunctions_['function_incventms'] = 'float incrementation()\n' +
	'  {\n' +
 	'  if(millis() - derniereSeconde >= 1000)\n' +
    '    {\n' +
    '    derniereSeconde += 1000;\n' +
	'    mesureventms();\n' +
    '    }\n' +
    '  delay(100);\n' +
	'  return(vitesseVentms);\n' +
	'  }';
	
 Blockly.Arduino.setups_['setup_anemo'] = 'pinMode(' + PIN_ANEMO + ', INPUT_PULLUP);\n' +
	'  secondes = 0;\n' +
	'  derniereSeconde = millis();\n' +
	'  PCintPort::attachInterrupt(' + PIN_ANEMO + ', interruptionILS, FALLING);';
 
 var code = 'incrementation()';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Script de la mesure de la vitesse du vent en km/h

Blockly.Arduino.anemometre_vitesse_ventkmh = function() {
  
  var PIN_ANEMO = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var rayon = Blockly.Arduino.valueToCode(this, 'RAYONBRAS', Blockly.Arduino.ORDER_ATOMIC);
  var coeff = Blockly.Arduino.valueToCode(this, 'COEFETAL', Blockly.Arduino.ORDER_ATOMIC);
  
	Blockly.Arduino.includes_['anemo_lib'] = '#include <PinChangeInt.h>';
	Blockly.Arduino.definitions_['var_anemo'] = 'unsigned long datedernierPassage;\n' +
    'long derniereSeconde; \n' +
    'byte secondes; \n' +
	'int force;\n' +
   	'float nombreTourSec (0);\n' +
	'float nombreTourMin (0);\n' +
	'float vitesseVentms(0);\n' +
	'float vitesseVentkmh(0);\n' +
	'float vitesseVentnoeud(0);\n' +
	'volatile unsigned int comptageILS = 0;\n' +
	'const unsigned long dureeAntiRebond = 1;';  
  
	Blockly.Arduino.codeFunctions_['function_anemo'] = "void interruptionILS() //comptage de l'ILS\n" +
	'  {\n' +
	'  static unsigned long dateDernierChangement = 0;\n' +
	'  unsigned long date = millis();\n' +
	'  if ((date - dateDernierChangement) > dureeAntiRebond) {\n' +
    '    comptageILS++;\n' +
    '    dateDernierChangement = date;\n' +
	'    }\n' +
	'  }';
	
	Blockly.Arduino.userFunctions_['function_ventkmh'] = "float mesureventkmh()// mesure de la vitesse du vent instantanée (km/h)\n" +
	'  {\n' +
	'  float deltaTime = millis() - datedernierPassage;\n' +
	'  deltaTime = deltaTime/1000.0; //Converti en secondes\n' +
    '  nombreTourSec = (float)comptageILS / deltaTime;\n' +
    '  nombreTourMin = nombreTourSec * 60;\n' +
	'  vitesseVentkmh = 3.1416 * '+rayon+' * nombreTourMin * '+coeff+' * 0.036 / 30; // formule pour le calcul de la vitesse du vent\n' +
    '  comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n' +
    '  datedernierPassage = millis();\n' +
	'  return (vitesseVentkmh);\n' +
 	'  }';  
  
	Blockly.Arduino.userFunctions_['function_incventkmh'] = 'float incrementation()\n' +
	'  {\n' +
 	'  if(millis() - derniereSeconde >= 1000)\n' +
	'    {\n' +
    '    derniereSeconde += 1000;\n' +
	'    mesureventkmh();\n' +
    '    }\n' +
    '  delay(100);\n' +
	'  return(vitesseVentkmh);\n' +
	'  }';  
  
	Blockly.Arduino.setups_['setup_anemo'] = 'pinMode(' + PIN_ANEMO + ', INPUT_PULLUP);\n' +
	'  secondes = 0;\n' +
	'  derniereSeconde = millis();\n' +
	'  PCintPort::attachInterrupt(' + PIN_ANEMO + ', interruptionILS, FALLING);';
 
 var code = 'incrementation()';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Script de la mesure de la vitesse du vent en noeud

Blockly.Arduino.anemometre_vitesse_ventnoeud = function() {
  
  var PIN_ANEMO = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var rayon = Blockly.Arduino.valueToCode(this, 'RAYONBRAS', Blockly.Arduino.ORDER_ATOMIC);
  var coeff = Blockly.Arduino.valueToCode(this, 'COEFETAL', Blockly.Arduino.ORDER_ATOMIC);
  
 Blockly.Arduino.includes_['anemo_lib'] = '#include <PinChangeInt.h>';
 Blockly.Arduino.definitions_['var_anemo'] = 'unsigned long datedernierPassage;\n' +
	'long derniereSeconde; \n' +
    'byte secondes; \n' +
	'int force;\n' +
   	'float nombreTourSec (0);\n' +
	'float nombreTourMin (0);\n' +
	'float vitesseVentms(0);\n' +
	'float vitesseVentkmh(0);\n' +
	'float vitesseVentnoeud(0);\n' +
	'volatile unsigned int comptageILS = 0;\n' +
	'const unsigned long dureeAntiRebond = 1;';	
	
     Blockly.Arduino.codeFunctions_['function_anemo'] = "void interruptionILS() //comptage de l'ILS\n" +
	'  {\n' +
	'  static unsigned long dateDernierChangement = 0;\n' +
	'  unsigned long date = millis();\n' +
	'  if ((date - dateDernierChangement) > dureeAntiRebond) {\n' +
    '    comptageILS++;\n' +
    '    dateDernierChangement = date;\n' +
	'    }\n' +
	'  }';

	Blockly.Arduino.userFunctions_['function_ventnd'] = "float mesureventnoeud()// mesure de la vitesse du vent instantanée (noeuds)\n" +
	'  {\n' +
	'  float deltaTime = millis() - datedernierPassage;\n' +
	'  deltaTime = deltaTime/1000.0; //Converti en secondes\n' +
    '  nombreTourSec = (float)comptageILS / deltaTime;\n' +
    '  nombreTourMin = nombreTourSec * 60;\n' +
	'  vitesseVentnoeud = 3.1416 * '+rayon+' * nombreTourMin * '+coeff+' * 0.0012/1.852;  // formule pour le calcul de la vitesse du vent\n' +
    '  comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n' +
    '  datedernierPassage = millis();\n' +
	'  return (vitesseVentnoeud);\n' +
 	'  }';

	Blockly.Arduino.userFunctions_['function_incventnd'] = 'float incrementation()\n' +
	'  {\n' +
 	'  if(millis() - derniereSeconde >= 1000)\n' +
    '    {\n' +
    '    derniereSeconde += 1000;\n' +
	'    mesureventnoeud();\n' +
    '    }\n' +
    '  delay(100);\n' +
	'  return(vitesseVentnoeud);\n' +
	'  }';
  
	Blockly.Arduino.setups_['setup_anemo'] = 'pinMode(' + PIN_ANEMO + ', INPUT_PULLUP);\n' +
	'  secondes = 0;\n' +
	'  derniereSeconde = millis();\n' +
	'  PCintPort::attachInterrupt(' + PIN_ANEMO + ', interruptionILS, FALLING);';
 
 var code = 'incrementation()';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//Script de la mesure de la force du vent en degré de Beaufort

Blockly.Arduino.anemometre_force_Beaufort = function() {
  
  var PIN_ANEMO = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var rayon = Blockly.Arduino.valueToCode(this, 'RAYONBRAS', Blockly.Arduino.ORDER_ATOMIC);
  var coeff = Blockly.Arduino.valueToCode(this, 'COEFETAL', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['anemo_lib'] = '#include <PinChangeInt.h>';
  Blockly.Arduino.definitions_['var_anemo'] = 'unsigned long datedernierPassage;\n' +
    'long derniereSeconde; \n' +
    'byte secondes; \n' +
	'int force;\n' +
   	'float nombreTourSec (0);\n' +
	'float nombreTourMin (0);\n' +
	'float vitesseVentms(0);\n' +
	'float vitesseVentkmh(0);\n' +
	'float vitesseVentnoeud(0);\n' +
	'volatile unsigned int comptageILS = 0;\n' +
	'const unsigned long dureeAntiRebond = 1;';
  
    Blockly.Arduino.codeFunctions_['function_anemo'] = "void interruptionILS() //comptage de l'ILS\n" +
	'  {\n' +
	'  static unsigned long dateDernierChangement = 0;\n' +
	'  unsigned long date = millis();\n' +
	'  if ((date - dateDernierChangement) > dureeAntiRebond) {\n' +
    '    comptageILS++;\n' +
    '    dateDernierChangement = date;\n' +
	'    }\n' +
	'  }';

	Blockly.Arduino.userFunctions_['function_ventbf'] = 'float mesureforcebf()// mesure de la force du vent instantanée (Beaufort)\n' +
	'  {\n' +
	'  {\n' +
	'  float deltaTime = millis() - datedernierPassage;\n' +
	'  deltaTime = deltaTime/1000.0; //Converti en secondes\n' +
    '  nombreTourSec = (float)comptageILS / deltaTime;\n' +
    '  nombreTourMin = nombreTourSec * 60;\n' +
	'  vitesseVentkmh = 3.1416 * '+rayon+' * nombreTourMin * '+coeff+' * 0.036 / 30; // formule pour le calcul de la vitesse du vent\n' +
    '  comptageILS = 0; // Réinitialise et commence à incrémenter pour le nouveau comptage\n' +
    '  datedernierPassage = millis();\n' +
	'  }// Degrés de la force de Beaufort en fonction de la vitesse du vent\n' +
    '  if(vitesseVentkmh<1){ force= 0;}\n' +
    '  if((vitesseVentkmh>=1)&&(vitesseVentkmh<=5)){force= 1;}\n' +
    '  if((vitesseVentkmh>=6)&&(vitesseVentkmh<=11)){force=2;}\n' +
    '  if((vitesseVentkmh>=12)&&(vitesseVentkmh<=19)){force=3;}\n' +
    '  if((vitesseVentkmh>=20)&&(vitesseVentkmh<=28)){force=4;}\n' +
    '  if((vitesseVentkmh>=29)&&(vitesseVentkmh<=38)){force=5;}\n' +
    '  if((vitesseVentkmh>=39)&&(vitesseVentkmh<=49)){force=6;}\n' +
    '  if((vitesseVentkmh>=50)&&(vitesseVentkmh<=61)){force=7;}\n' +
    '  if((vitesseVentkmh>=62)&&(vitesseVentkmh<=74)){force=8;}\n' +
    '  if((vitesseVentkmh>=75)&&(vitesseVentkmh<=88)){force=9;}\n' +
    '  if((vitesseVentkmh>=89)&&(vitesseVentkmh<=102)){force=10;}\n' +
    '  if((vitesseVentkmh>=103)&&(vitesseVentkmh<=117)){force=11;}\n' +
    '  if(vitesseVentkmh>=118){force=12;}\n' +
	'    return (force);\n' +
	'}';

	Blockly.Arduino.userFunctions_['function_incventbf'] = 'int incrementation()\n' +
	'  {\n' +
 	'  if(millis() - derniereSeconde >= 1000)\n' +
    '    {\n' +
    '    derniereSeconde += 1000;\n' +
	'    mesureforcebf();\n' +
    '    }\n' +
    '  delay(100);\n' +
	'  return(force);\n' +
	'  }';
    
	Blockly.Arduino.setups_['setup_anemo'] = 'pinMode(' + PIN_ANEMO + ', INPUT_PULLUP);\n' +
	'  secondes = 0;\n' +
	'  derniereSeconde = millis();\n' +
	'  PCintPort::attachInterrupt(' + PIN_ANEMO + ', interruptionILS, FALLING);';
 
 var code = 'incrementation()';
	
 return [code, Blockly.Arduino.ORDER_ATOMIC];
};