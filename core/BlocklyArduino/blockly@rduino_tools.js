/**
 * BlocklyDuino
 */
 
'use strict';

/**
 * Init modal Global Configuration
 */
BlocklyDuino.initBlocSort = function () {
	// set the toggle from url parameters
	var FunctionChoice = BlocklyDuino.getStringParamFromUrl('sortby', '');
	if (FunctionChoice === undefined || FunctionChoice === ""||FunctionChoice === "C") {
		window.localStorage.catblocsort = "C";
		$('#toggle-Functions').bootstrapToggle('off');
	} else {
		window.localStorage.catblocsort = "F";
		$('#toggle-Functions').bootstrapToggle('on');
	}
}

/**
 * Configuration & modify buttons state inside modal config
 */
BlocklyDuino.toggleFunctionsChoice = function() {
	// checked = sort by functions
	if ($('#toggle-Functions').prop('checked')) {
		window.localStorage.catblocsort = "F";
	} else {
		window.localStorage.catblocsort = "C";
	}
};

/**
 * Validate global configuration
 */
BlocklyDuino.validateConfigGlobal = function () {

	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
	var search = window.location.search;
	//change Arduino card
	$("#board_select").blur();
	var kitornot = false;
	if ($("#board_select").val().substring(0,4) == "kit_") {
		kitornot = true;
	}
	if ($("#board_select").val() != "none")
		{
		if (window.confirm(MSG['arduino_card']+' '+window.profile[$("#board_select").val()].description+' ?'))
			{
			BlocklyDuino.workspace.clear();
			if (search.length <= 1) {
				search = '?card=' + $("#board_select").val();
			} else if (search.match(/[?&]card=[^&]*/)) {
				search = search.replace(/([?&]card=)[^&]*/, '$1' + $("#board_select").val());
			} else {
				search = search.replace(/\?/, '?card=' + $("#board_select").val() + '&');
			}
			
			//recherche d'une maquette (toolbox) dans l'URL pour une maquette cablée complète, qui bloquera ensuite dans loadToolboxDefinition le bouton des configuration des catégories
			if (kitornot) {
				if (search.length <= 1) {
					search = '?toolbox=' + $("#toolboxes").val();
				} else if (search.match(/[?&]toolbox=[^&]*/)) {
					search = search.replace(/([?&]toolbox=)[^&]*/, '$1' + $("#board_select").val());
				} else {
					search = search.replace(/\?/, '?toolbox=' + $("#board_select").val() + '&');
				}
				BlocklyDuino.loadToolboxDefinition($("#board_select").val());
			} else {
                    search = search.replace(/([?&]toolbox=)[^&]*/, '$1' + 'toolbox_algo');
			}
		} else {
			$("#board_select").val(BlocklyDuino.selectedCard);
			}
		}	
	  
	//change language
	var languageMenuSelected = $('#languageMenu option:selected').val();
	var newLang = encodeURIComponent(languageMenuSelected);
	if (search.length <= 1) {
		search = '?lang=' + newLang;
		} else if (search.match(/[?&]lang=[^&]*/)) {
			//en mode AIO sans languageMenu on ne fait rien pour le choix des langues
			if ((newLang == 'undefined')||(newLang == "")) search = search;
				else search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
			} else {
				search = search.replace(/\?/, '?lang=' + newLang + '&');
		}
			
	var fontChoiced = BlocklyDuino.changeFont();
	if (search.length <= 1) {
		search = '?font=' + fontChoiced;
	} else if (search.match(/[?&]font=[^&]*/)) {
		search = search.replace(/([?&]font=)[^&]*/, '$1' + fontChoiced);
		} else {
			search = search.replace(/\?/, '?font=' + fontChoiced + '&');
	}
		
	window.localStorage.ConfigGlobaleSeen = 'ok';
	window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};

BlocklyDuino.validateConfigOffline = function () {

	// Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();
	
	var search = window.location.search;	
	// remove values from url to test toggles
	search = search.replace(/([?&]sortby=)[^&]*/, '');
	// put values in url
	if (search.length <= 1) {
		search = '?sortby=' + window.localStorage.catblocsort;
	} else {
		search = search + '&sortby=' + window.localStorage.catblocsort;
	}
	
	//change Arduino card
	$("#board_select").blur();
	if (window.profile["defaultBoard"]!=window.profile[$("#board_select").val()])
		{
		if (window.confirm(MSG['arduino_card']+' '+window.profile[$("#board_select").val()].description+' ?'))
			{
			BlocklyDuino.workspace.clear();				  
			if (search.length <= 1) {
					search = '?card=' + $("#board_select").val();
				  } else if (search.match(/[?&]card=[^&]*/)) {
					search = search.replace(/([?&]card=)[^&]*/, '$1' + $("#board_select").val());
				  } else {
					search = search.replace(/\?/, '?card=' + $("#board_select").val() + '&');
				  }
			} else {
				$("#board_select").val(BlocklyDuino.selectedCard);
			}
	}
	
	window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};

/**
 * Add convert bin <-> text
 */
BlocklyDuino.text2bin = function() {
  var output = document.getElementById("ti2");
  var input = document.getElementById("ti1").value;
  output.value = "";
  var data=input;
	var binArray = [];
	var datEncode = "";
	var i;
	for (i=0; i < data.length; i++) {
	binArray.push(data[i].charCodeAt(0).toString(2));
	}
	var j;
	for (j=0; j < binArray.length; j++) {
	var pad = padding_left(binArray[j], '0', 8);
	datEncode += pad + ' ';
	}
	output.value = datEncode;
};

function padding_left(s, c, n) {
	if (!s || !c || s.length >= n) {
		return s;
	}

	var max = (n - s.length) / c.length;
	for ( var i = 0; i < max; i++) {
		s = c + s;
	}
	return s;
};

BlocklyDuino.bin2text = function() {
var output = document.getElementById("ti4");
var input = document.getElementById("ti3").value;
output.value = "";
var s = input;
	s = s.replace(/\s/g, "");
	var data = "";
	if (s.length % 8 != 0) {
		data = "???:";
	} else {
		while (s.length > 0) {
			var first8 = s.substring(0, 8);
			s = s.substring(8);
			var chr = parseInt(first8, 2);
			data += String.fromCharCode(chr);
		}
	}
	output.value = data;
};