/**
 * BlocklyDuino
 */

'use strict';

BlocklyDuino.pictSize = 2;
//set default image size
Blockly.Arduino.imageSizeNull = 0; //pictSize = 0
Blockly.Arduino.imageSizeSmall = 32; //pictSize = 1
Blockly.Arduino.imageSizeNormal = 64; //pictSize = 2
Blockly.Arduino.imageSizeBig = 96; //pictSize = 3
Blockly.Arduino.imageSizeOld = 32;
Blockly.Arduino.imageSize = Blockly.Arduino.imageSizeNormal;
Blockly.Arduino.imageBool = true;
Blockly.Arduino.cardSize = 200; //same as width in index.html showcardModal


/**
 * Override Blockly.makeColour to use Hexa or HUE
 */
Blockly.makeColour = function(color) {
	if (typeof color != 'string' || color.substring(0,1) != '#') {
		color = goog.color.hsvToHex(color, Blockly.HSV_SATURATION, Blockly.HSV_VALUE * 255);
	}
	return color;
};

BlocklyDuino.changeFont = function() {
	if ($('#fontChoice').prop('checked')) {
		document.body.style.fontFamily = "OpenDyslexic";
		var FontChoice = "O";
	} else {
		document.body.style.fontFamily = "Trebuchet MS";
		var FontChoice = "T";
	}
	return FontChoice;
};

BlocklyDuino.changeFontURL = function() {
	var FontChoiceUrl = BlocklyDuino.getStringParamFromUrl('font', '');
	if (FontChoiceUrl===undefined||FontChoiceUrl==='O') {
		document.body.style.fontFamily = "OpenDyslexic";
		var FontChoice = "O";
		$('#fontChoice').prop('checked', true);
	}
	if (FontChoiceUrl==='T') {
		document.body.style.fontFamily = "Trebuchet MS";
		var FontChoice = "T";
		$('#fontChoice').prop('checked', false);
	}
	return FontChoice;
};

BlocklyDuino.cardPicture_maxi = function() {
	var img = $("#arduino_card_picture");
	var modal = $("#pictureModalLabel").parent();

    if ((img.width() < 450)||(img.height() < 650))
    {
		Blockly.Arduino.cardSize += 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }
};

BlocklyDuino.cardPicture_mini = function() {
	var img = $("#arduino_card_picture");
	var modal = $("#pictureModalLabel").parent();

    if ((img.width() > 200)||(img.height() > 220))
    {
		Blockly.Arduino.cardSize -= 50;
		img.animate({width: Blockly.Arduino.cardSize}, 1000);
		modal.animate({width: Blockly.Arduino.cardSize + 50}, 1000);
    }
};

BlocklyDuino.cardPicture_change_AIO = function() {
	if ($("#board_select").val()) {
		// $('#arduino_card_miniPicture').attr("src", profile[$("#board_select").val()]['picture']);
		$('#arduino_card_mini_picture').attr("src", profile[$("#board_select").val()]['picture']);
		$('#arduino_card_picture').attr("src", profile[$("#board_select").val()]['picture']);
		$('#arduino_card_miniPicture_Menu').attr("src", profile[$("#board_select").val()]['picture']);
	} else {
		// $('#arduino_card_miniPicture').attr("src", "");
		$('#arduino_card_mini_picture').attr("src", "");
		$('#arduino_card_picture').attr("src", "");
		$('#arduino_card_miniPicture_Menu').attr("src", "");
	}
};

/**
 * Toggle blocks rendering : inline or block
 */
BlocklyDuino.inline = function() {
	var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);

	var blocks = xmlBlocks.getElementsByTagName("block");

	BlocklyDuino.inlineBool = !BlocklyDuino.inlineBool;

	for(var i=0; i<blocks.length;i++) {
		blocks.item(i).setAttribute("inline", BlocklyDuino.inlineBool);
	}

	BlocklyDuino.workspace.clear();
	BlocklyDuino.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));

	if (BlocklyDuino.inlineBool) {
		$('#icon_btn_inline').removeClass('glyphicon-option-horizontal');
		$('#icon_btn_inline').addClass('glyphicon-option-vertical');
	} else {
		$('#icon_btn_inline').addClass('glyphicon-option-horizontal');
		$('#icon_btn_inline').removeClass('glyphicon-option-vertical');
	}
};


/**
 * Get the size selected from the URL.
 *
 * @return {int} selectd size.
 */
BlocklyDuino.getSize = function() {
  var size = BlocklyDuino.getStringParamFromUrl('size', '');
  if ((size != 'max')&&(size != 'miniMenu')) {
	  size = '';
  }
  return size;
};

/**
 * Maximize/Minimize content blocks div
 */
BlocklyDuino.changeSize = function() {
  // Store the blocks for the duration of the reload.
  BlocklyDuino.backupBlocks();

  var search = window.location.search;
  if (search.length <= 1) {
    search = '?size=max';
  } else if (search.match(/[?&]size=[^&]*/)) {
    search = search.replace(/([?&]size=)[^&]*/, '');
    search = search.replace(/\&/, '?');
  } else {
    search = search.replace(/\?/, '?size=max&');
  }

  // remove url file
  //search = search.replace(/([?&]url=)[^&]*/, '');

  window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};


/**
 * Set menu orientation
 */
BlocklyDuino.setOrientation = function() {

	var newOrientation = BlocklyDuino.getStringParamFromUrl('ort', '');

	if (newOrientation == 'hor') {
		$("#ul_nav").addClass("nav nav-pills");
		$("#menuPanelConfig").addClass("menuPanelBlockly-hor");
		$("#menuPanelBlockly").addClass("menuPanelBlockly-hor");
		$("#menuPanelFiles").addClass("menuPanelFiles-hor");
		$("#divTabpanel").addClass("divTabpanel-hor");
		$("#div_help_button").addClass("div_help_button-hor");
		$("#div_tools_button").addClass("div_tools_button-hor");
		$("#div_miniPicture").addClass("div_miniPicture-hor");

		$("#btn_config").removeClass("btn-block");
		$("#btn_supervision").removeClass("btn-block");

		$("#btn_saveXML").removeClass("btn-block");
		$("#btn_fakeload").removeClass("btn-block");
		$("#btn_example").removeClass("btn-block");

	} else {
		$("#ul_nav").addClass("nav nav-pills nav-stacked");
		$("#menuPanelBlockly").addClass("menuPanelBlockly-ver");
		if (Code.isRtl()) {
			$("#ul_nav").addClass("navbar-right");
		}
		$("#menuPanel").addClass("menuPanel-ver");
		$("#btn_config").addClass("btn_ver");
		$("#btn_supervision").addClass("btn_ver");
		$("#btn_saveXML").addClass("btn_ver");
		$("#btn_fakeload").addClass("btn_ver");
		$("#btn_example").addClass("btn_ver");
		$("#divTabpanel").addClass("divTabpanel-ver");
		$("#div_help_button").addClass("div_help_button-ver");
		$("#div_tools_button").addClass("div_tools_button-ver");
		$("#div_miniPicture").addClass("div_miniPicture-ver");
		var div_miniPicture_height = $("#div_tools_button").position().top
												- ($("#menuPanelFiles").offset().top + $("#menuPanelFiles").outerHeight(true))
												- 10;
		$("#arduino_card_miniPicture").css({"max-width" : '180px',  "max-height" : div_miniPicture_height});
		if (div_miniPicture_height < 180) {
			$("#arduino_card_miniPicture").addClass("rotate90");
		}
	}
};

BlocklyDuino.jsSimpleColorPickr = function(id) {
	var me = this; // lien objet
	me.id = id; // identifiant de l'élément html
	me.lineNb = 5; // nombre de ligne
	me.colNb = 25; // nombre de colonne
	me.tdNb = 0; // compteur de colonne
	me.pas = 0; // pas de calcul des couleurs
	me.classTable = ''; // class pour le tableau
	me.funcColorChoose = ''; // fonction de rappel utilisé en cliquant sur une couleur
	me.show = function(){
		var h = '', r, g, b;
		me.colNb = Math.pow(me.lineNb, 2);
		me.tdNb = 0;
		me.pas = Math.round(Math.pow(Math.pow(256, 3)/(me.colNb*(me.lineNb-1)), 1/3));
		h = '<table class="'+me.classTable+'">';
		for(r=255; r>=0; r-=me.pas){
			for(g=255; g>=0; g-=me.pas){
				for(b=255; b>=0; b-=me.pas){
					h += me.tdBuild(r, g, b);
				}
			}
		}
		r = 255/(me.colNb-1);
		for(g=me.colNb-1; g>=0; g--){
			b = parseInt(r*g);
			h += me.tdBuild(b, b, b);
		}
		h += '</tr></table>';
		document.getElementById(me.id).innerHTML = h;
	}
	me.tdBuild = function(r, g, b){
		var h = '', c;
		me.tdNb++;
		if(me.tdNb>me.colNb){
			me.tdNb = 1;
			h = '</tr><tr>';
		}
		c = me.rgb2hex(r, g, b);
		h += '<td style="background-color: '+c+';"><a href="#"'+(me.funcColorChoose!='' ? ' onclick="'+me.funcColorChoose+'(\''+c+'\');return false;"':'')+'></a></td>';
		return h;
	}
	me.rgb2hex = function(r, g, b){
		return '#'+('0'+r.toString(16)).slice(-2)+('0'+g.toString(16)).slice(-2)+('0'+b.toString(16)).slice(-2);
	}
};

/**
 * Get the function from URL : offline for AIO version or normal in webbrowser
 *
 * @return {int} selectd size.
 */
BlocklyDuino.OnOffLine = function() {
	var AIO = BlocklyDuino.getStringParamFromUrl('AIO', '');
	if (AIO == 'on') {
		$("#btn_configGlobal").addClass("hidden");
		$("#btn_MiniconfigGlobal").addClass("hidden");
		$("#pictureModalLabel").addClass("hidden");
		$("#btn_card_picture_change").removeClass("hidden");
		$('#board_select_AIO_on').prepend($('#board_select'));
	} else if ((AIO == '')||(AIO == 'off')){
			$("#btn_configGlobal").removeClass("hidden");
			$("#btn_MiniconfigGlobal").removeClass("hidden");
			$("#pictureModalLabel").removeClass("hidden");
			$("#btn_card_picture_change").addClass("hidden");
			$('#board_select_AIO_off').prepend($('#board_select'));
	}
};

BlocklyDuino.toggleTextColors = function(taille) {
	// checked = colors
	if ($('#toggle-Colors').prop('checked')) {
		$(".btn").css({"color" : "#000000", "background-color" : "#FFFFFF"});
		$(".nav-pills").css({"color" : "#000000", "background-color" : "#FFFFFF"});	
		$("#header").css({"color" : "#000000", "background-color" : "#FFFFFF"});
		$(".submenu").css({"color" : "#000000", "background-color" : "#FFFFFF"});
	}
}
 
BlocklyDuino.tailleFonte = function(taille) {
	document.getElementsByClass("mod")[0].style.fontSize = taille + "[b]px[/b]";	
};