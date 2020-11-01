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
Blockly.Arduino.wiringSize = 400;

/**
 * Override Blockly.makeColour to use Hexa or HUE
 */
Blockly.makeColour = function (color) {
    if (typeof color != 'string' || color.substring(0, 1) != '#') {
        color = goog.color.hsvToHex(color, Blockly.HSV_SATURATION, Blockly.HSV_VALUE * 255);
    }
    return color;
};

BlocklyDuino.changeFont = function () {
    var FontChoice = $('#fontChoice').val();
    if (FontChoice === 'O') {
        document.body.style.fontFamily = "OpenDyslexic";
    }
    if (FontChoice === 'T') {
        document.body.style.fontFamily = "Trebuchet MS";
    }
    if (FontChoice === 'V') {
        document.body.style.fontFamily = "V";
    }
    return FontChoice;
};

BlocklyDuino.changeFontURL = function () {
    var FontChoiceUrl = BlocklyDuino.getStringParamFromUrl('font', '');
    if (FontChoiceUrl === undefined || FontChoiceUrl === 'O') {
        document.body.style.fontFamily = "OpenDyslexic";
        var FontChoice = "O";
    }
    if (FontChoiceUrl === 'T') {
        document.body.style.fontFamily = "Trebuchet MS";
        var FontChoice = "T";
    }
    if (FontChoiceUrl === 'V') {
        document.body.style.fontFamily = "V";
        var FontChoice = "V";
    }
    return FontChoice;
};

BlocklyDuino.cardPicture_maxi = function () {
    var img = $("#arduino_card_picture");
    var modal = $("#pictureModalLabel").parent();

    if ((img.width() < 450)||(img.height() < 650))
    {
        Blockly.Arduino.cardSize += 50;
        img.animate({width: Blockly.Arduino.cardSize}, 500);
        modal.animate({width: Blockly.Arduino.cardSize + 50}, 500);
    }
};

BlocklyDuino.cardPicture_mini = function () {
    var img = $("#arduino_card_picture");
    var modal = $("#pictureModalLabel").parent();

    if ((img.width() > 200)||(img.height() > 220))
    {
        Blockly.Arduino.cardSize -= 50;
        img.animate({width: Blockly.Arduino.cardSize}, 500);
        modal.animate({width: Blockly.Arduino.cardSize + 50}, 500);
    }
};

BlocklyDuino.cardPicture_change_AIO = function () {
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
BlocklyDuino.inline = function () {
    var xmlBlocks = Blockly.Xml.workspaceToDom(BlocklyDuino.workspace);

    var blocks = xmlBlocks.getElementsByTagName("block");

    BlocklyDuino.inlineBool = !BlocklyDuino.inlineBool;

    for (var i = 0; i < blocks.length; i++) {
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
BlocklyDuino.getSize = function () {
    var size = BlocklyDuino.getStringParamFromUrl('size', '');
    if ((size != 'max') && (size != 'miniMenu')) {
        size = '';
    }
    return size;
};

/**
 * Maximize/Minimize content blocks div
 */
BlocklyDuino.changeSize = function () {
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
BlocklyDuino.setOrientation = function () {

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
    }
};

/**
 * Get the function from URL : offline for AIO version or normal in webbrowser
 *
 * @return {int} selectd size.
 */
BlocklyDuino.OnOffLine = function () {
    var AIO = BlocklyDuino.getStringParamFromUrl('AIO', '');
    if (AIO == 'on') {
        $("#btn_configGlobal").addClass("hidden");
        $("#btn_MiniconfigGlobal").addClass("hidden");
        $("#pictureModalLabel").addClass("hidden");
        $("#btn_card_picture_change").removeClass("hidden");
        $('#board_select_AIO_on').prepend($('#board_select'));
    } else if ((AIO == '') || (AIO == 'off')) {
        $("#btn_configGlobal").removeClass("hidden");
        $("#btn_MiniconfigGlobal").removeClass("hidden");
        $("#pictureModalLabel").removeClass("hidden");
        $("#btn_card_picture_change").addClass("hidden");
        $('#board_select_AIO_off').prepend($('#board_select'));
    }
};

BlocklyDuino.ExampleWiring = function () {
    var ExampleTest = BlocklyDuino.getStringParamFromUrl('url', '');
    var KitTest = BlocklyDuino.getStringParamFromUrl('card', '');
    var KitTestResult = KitTest.slice(0, 3);
    // ni exemple ni kit
    if ((ExampleTest === '') && (KitTestResult !== 'kit')) {
        $("#btn_wiring").addClass("hidden");
        $("#menu_21").addClass("hidden");

    } else {
        $("#btn_wiring").removeClass("hidden");
        $("#menu_21").removeClass("hidden");
        // exemple mais pas kit
        if ((ExampleTest !== '') && (KitTestResult !== 'kit')) {
            // ExampleTest = ExampleTest.replace('.xml', '');
            // ExampleTest = ExampleTest.replace('.B@', '');
            ExampleTest = ExampleTest.slice(0, -4);
            $('#wiringModal_picture').prepend("<img src='" + ExampleTest + ".jpg' id='wiringModalImg' width=100% height=auto/>");
            $('#arduino_card_miniPicture').attr('src', ExampleTest + '.jpg');
            $('#arduino_card_miniPicture').attr('style', "max-width: 100%; height: auto;");
            $('#arduino_card_picture').attr('src', ExampleTest + '_wiring.jpg');
        } else if ((ExampleTest === '') && (KitTestResult === 'kit')) {
            //c'est donc un kit
            $('#wiringModal_picture').prepend("<img src='media/boards/" + KitTest + "_wiring.jpg' id='wiringModalImg' width=100% height=auto/>");
            $("#btn_wiring").removeClass("hidden");
            $("#menu_21").removeClass("hidden");
        }
    }
};

BlocklyDuino.wiring_mini = function () {
    Blockly.Arduino.wiringSize -= 50;
    $("#arduino_card_picture").animate({width: Blockly.Arduino.wiringSize}, );
};

BlocklyDuino.wiring_maxi = function () {
    Blockly.Arduino.wiringSize += 50;
    $("#arduino_card_picture").animate({width: Blockly.Arduino.wiringSize}, );
};

// BlocklyDuino.toggleTextColors = function(taille) {
// if ($('#toggle-Colors').prop('checked')) {
// $(".btn").css({"color" : "#000000", "background-color" : "#FFFFFF"});
// $(".nav-pills").css({"color" : "#000000", "background-color" : "#FFFFFF"});	
// $("#header").css({"color" : "#000000", "background-color" : "#FFFFFF"});
// $(".submenu").css({"color" : "#000000", "background-color" : "#FFFFFF"});
// }
// }

// BlocklyDuino.tailleFonte = function(taille) {
// document.getElementsByClass("mod")[0].style.fontSize = taille + "[b]px[/b]";	
// };