/**
 * Based on
 *
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
		'de': 'Deutsch',
		'en': 'English',
		'fr': 'Français',
		'jp': 'Japanese',
		'ca': 'Català - Valencià',
		'es': 'Español',
		'bg': 'Български',
		'ar': 'العربية',
    'pt-br': 'Português do Brasil'
		};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he'];

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = BlocklyDuino.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'en';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * User's language (e.g. "en").
 * @type string
 */
Code.LANG = Code.getLang();

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  $("html").attr('dir', rtl ? 'rtl' : 'ltr');
  $("html").attr('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);

// Populate the language selection menu.
  var languageMenu = $('#languageMenu');
  languageMenu.empty();
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.append(option);
  }

  // Inject language strings.
  $('#title').text(MSG['title']);
  $('#span_about').text(MSG['span_about']);
  $('#span_card_picture_change').text(MSG['span_card_picture_change']);
  $('#span_example').text(MSG['span_example']);
  $('#span_create_example').text(MSG['span_create_example']);
  //$('#span_picture').text(MSG['span_picture']);
  $('#arduino_card_miniPicture').attr('title', MSG['span_picture']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#span_version').html(BlocklyArduinoMSG['span_version']);
  $('#aboutBody').html(MSG['aboutBody']);
  $('#paypalModalLabel').text(MSG['paypalModalLabel']);
  $('#paypalBody').html(MSG['paypalBody']);
  $('#btn_variable').text(MSG['btn_variable']);
  $('#btn_switch').attr('title', MSG['btn_switch']);

  $('#span_config').text(MSG['span_config']);
  $('#span_config_kit').text(MSG['span_config_kit']);
  $('#labelArduinoCard').text(MSG['labelArduinoCard']);

  $('#btn_preview').attr('title', MSG['btn_preview']);

  $('#btn_inline').attr('title', MSG['btn_inline']);

  $('#span_delete').text(MSG['span_delete']);
  $('#span_saveXML').text(MSG['span_saveXML']);
  $('#span_fakeload').text(MSG['span_fakeload']);

  $('#a_supervision').text(MSG['span_supervision']);
  $('#a_blocks').text(MSG['a_blocks']);
  $('#a_arduino').text(MSG['a_arduino']);
  $('#a_term').text(MSG['a_term']);
  $('#a_xml').text(MSG['a_xml']);

  $('#span_saveIno').text(MSG['span_saveIno']);
  $('#span_pasteIDEArduino').text(MSG['span_pasteIDEArduino']);
  $('#span_verify_local').text(MSG['span_verify_local']);
  $('#span_flash_local').text(MSG['span_flash_local']);
  $('#span_flash_local_result').text(MSG['span_flash_local_result']);
  $('#span_detailedCompilation').text(MSG['span_detailedCompilation']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#span_edit_code').text(MSG['span_edit_code']);

  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#span_functionToggle').text(MSG['span_functionToggle']);
  $('#span_functionON').text(MSG['span_functionON']);
  $('#span_functionOFF').text(MSG['span_functionOFF']);
  $('#span_pymata_upload_text').text(MSG['span_pymata_upload_text']);
  $('#span_pymata_toggle_text').text(MSG['span_pymata_toggle_text']);
  $('#span_pymataON').text(MSG['span_pymataON']);
  $('#span_pymataOFF').text(MSG['span_pymataOFF']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);

  $('#toolbox_algo').attr('title', MSG['span_toolbox_algo']);
  $('#toolbox_arduino_1').attr('title', MSG['span_toolbox_arduino_1']);
  $('#toolbox_arduino_2').attr('title', MSG['span_toolbox_arduino_2']);
  $('#toolbox_arduino_3').attr('title', MSG['span_toolbox_arduino_3']);
  $('#toolbox_arduino_4').attr('title', MSG['span_toolbox_arduino_4']);

  $('#span_menu_1').text(MSG['span_menu_1']);
  $('#span_menu_11').text(MSG['span_menu_11']);
  $('#span_menu_12').text(MSG['span_menu_12']);
  $('#span_menu_13').text(MSG['span_menu_13']);
  $('#span_menu_131').text(MSG['span_menu_131']);
  $('#span_menu_132').text(MSG['span_menu_132']);
  $('#span_menu_133').text(MSG['span_menu_133']);
  $('#span_menu_2').text(MSG['span_menu_2']);
  $('#span_menu_21').text(MSG['span_menu_21']);
  $('#span_menu_22').text(MSG['span_menu_22']);
  $('#span_menu_23').text(MSG['span_menu_23']);
  $('#span_menu_24').text(MSG['span_menu_24']);
  $('#span_menu_25').text(MSG['span_menu_25']);
  $('#span_menu_3').text(MSG['span_menu_3']);
  $('#span_menu_31').text(MSG['span_menu_31']);
  $('#span_menu_32').text(MSG['span_menu_32']);
  $('#span_menu_4').text(MSG['span_menu_4']);
  $('#span_menu_41').text(MSG['span_menu_41']);
  $('#span_menu_42').text(MSG['span_menu_42']);
  $('#span_menu_420').text(MSG['span_menu_420']);
  $('#span_menu_421').text(MSG['span_menu_421']);
  $('#span_menu_422').text(MSG['span_menu_422']);
  $('#span_menu_423').text(MSG['span_menu_423']);
  $('#span_menu_424').text(MSG['span_menu_424']);
  $('#span_menu_429').text(MSG['span_menu_429']);
  $('#span_menu_43').text(MSG['span_menu_43']);
  $('#span_menu_44').text(MSG['span_menu_44']);
  $('#span_menu_441').text(MSG['span_menu_441']);
  $('#span_menu_442').text(MSG['span_menu_442']);
  $('#span_menu_5').text(MSG['span_menu_5']);
  $('#span_menu_51').text(MSG['span_menu_51']);
  $('#span_menu_52').text(MSG['span_menu_52']);
  $('#span_menu_53').text(MSG['span_menu_53']);
  $('#span_menu_6').text(MSG['span_menu_6']);

  $('#editModalLabel').text(MSG['editModalLabel']);
  $('#exampleModalLabel').text(MSG['exampleModalLabel']);
  $('#convertModal').attr('title', MSG['convertModalLabel']);
  $('#wiringModal').attr('title', MSG['wiringModalLabel']);
  $('#RGB_falsemodal').attr('title', MSG['RGBModalLabel']);
  $('#videoModalLabelTitle').text(MSG['videoModalLabelTitle']);
  $('#videoModalLabel1').text(MSG['videoModalLabel1']);
  $('#videoModalLabel2').text(MSG['videoModalLabel2']);
  $('#videoModalLabel3').text(MSG['videoModalLabel3']);
  $('#videoModalLabel4').text(MSG['videoModalLabel4']);
  $('#videoModalLabel5').text(MSG['videoModalLabel5']);

  $('#configModalGlobalLabel').text(MSG['configModalGlobalLabel']);
  $('#configGlobalLabel').text(MSG['configGlobalLabel']);
  $('#btn_closeConfigGlobale').text(MSG['btn_close']);
  $('#btn_saveConfigGlobale').text(MSG['btn_saveConfig']);
  $('#btn_validConfigGlobale').text(MSG['btn_valid']);
  $('#toolboxes option[value="toolbox_algo"]').text(MSG['span_toolbox_algo']);
  $('#toolboxes option[value="toolbox_arduino_1"]').text(MSG['span_toolbox_arduino_1']);
  $('#toolboxes option[value="toolbox_arduino_2"]').text(MSG['span_toolbox_arduino_2']);
  $('#toolboxes option[value="toolbox_arduino_3"]').text(MSG['span_toolbox_arduino_3']);
  $('#toolboxes option[value="toolbox_arduino_4"]').text(MSG['span_toolbox_arduino_4']);
  $('#toolboxes option[value="toolbox_arduino_all"]').text(MSG['span_toolbox_all']);
  $('#span_languageMenu').text(MSG['span_languageMenu']);
  $('#span_colorToggle').text(MSG['span_colorToggle']);
  $('#span_colorBW').text(MSG['span_colorBW']);
  $('#span_colorColors').text(MSG['span_colorColors']);
  $('#span_levelChoice').text(MSG['span_levelChoice']);

  $('#span_Upload').text(MSG['span_Upload']);
  $('#span_Upload_local').text(MSG['span_Upload_local']);
  $('#span_forms_videomodal').text(MSG['span_forms']);
  $('#span_forms_about').text(MSG['span_forms']);

  $('#btn_configGlobal').attr('title', MSG['span_configGlobal']);
  $('#btn_config').attr('title', MSG['span_config']);
  $('#tab_supervision').attr('title', MSG['span_supervision']);
  $('#tab_blocks').attr('title', MSG['a_blocks']);
  $('#tab_arduino').attr('title', MSG['a_arduino']);
  $('#btn_saveXML').attr('title', MSG['span_saveXML']);
  $('#btn_fakeload').attr('title', MSG['span_fakeload']);
  $('#btn_example').attr('title', MSG['span_example']);
  $('#btn_create_example').attr('title', MSG['span_create_example']);
  $('#btn_factory').attr('title', MSG['span_blockfactory']);
  $('#btn_RGB').attr('title', MSG['span_RGB']);
  $('#btn_screenduino').attr('title', MSG['span_screenduino']);
  $('#btn_convert').attr('title', MSG['span_convert']);
  $('#btn_font').attr('title', MSG['span_font']);
  $('#btn_colors').attr('title', MSG['span_colors']);
  $('#btn_miniMenuPanel').attr('title', MSG['span_miniMenuPanel']);
  $('#btn_reset').attr('title', MSG['span_reset']);
  $('#btn_about').attr('title', MSG['span_about']);
  $('#arduino_card_miniPicture_Menu').attr('title', MSG['span_picture']);
  $('#pre_previewArduino').attr('title', MSG['a_arduino']);
  $('#btn_doc').attr('title', MSG['span_doc']);
  $('#btn_tuto').attr('title', MSG['span_tuto']);
  $('#btn_videos').attr('title', MSG['span_videos']);
  $('#btn_undo').attr('title', MSG['span_undo']);
  $('#btn_redo').attr('title', MSG['span_redo']);
  $('#btn_block_capture').attr('title', MSG['span_block_capture']);
  $('#btn_CopyCode').attr('title', MSG['span_copycode']);
  $('#span_txt2bin').text(MSG['span_txt2bin']);
  $('#span_bin2txt').text(MSG['span_bin2txt']);

  $('#btn_closeCode').text(MSG['btn_closeCode']);
  $('#btn_validCode').text(MSG['btn_validCode']);

  $('#msg_ajax_ko').text(MSG['msg_ajax_ko']);
  $('#span_ajax_msg').text(MSG['span_ajax_msg']);

  $('#firstModalLabel').text(MSG['firstModalLabel']);
  $('#span_first_msg').text(MSG['span_first_msg']);
  $('#btn_valid_first_msg').text(MSG['btn_valid_first_msg']);

  $('#BT_ELEC_BUTTON').text(MSG['CAT_BT_ELEC_BUTTON']);

  $("xml").find("category").each(function() {
	// add attribute ID to keep categorie code
		if (!$(this).attr('id')) {
	$(this).attr('id', $(this).attr('name'));
	$(this).attr('name', Blockly.Msg[$(this).attr('name')]);
		}
  });

};

/**
 * Initialize the supervision page language.
 */
Code.initLanguageSupervision = function() {
	$('#span_SV_connect').text(Blockly.Msg.SV_connect);
	$('#span_supervision_tab1').text(Blockly.Msg.SV_tab1);
	$('#span_supervision_tab2').text(Blockly.Msg.SV_tab2);
	$('#span_supervision_tab3').text(Blockly.Msg.SV_tab3);
	$('#span_supervision_tab4').text(Blockly.Msg.SV_tab4);
	$('#span_supervision_tab5').text(Blockly.Msg.SV_tab5);
	$('#span_supervision_tab5_1').text(Blockly.Msg.SV_tab5_1);
	$('#span_supervision_tab5_2').text(Blockly.Msg.SV_tab5_2);
	$('#span_supervision_tab5_3').text(Blockly.Msg.SV_tab5_3);
	$('#span_supervision_tab5_4').text(Blockly.Msg.SV_tab5_4);
	$('span[id^="span_supervision_enabled"]').text(Blockly.Msg.SV_enabled);
	$('span[id^="span_supervision_disabled"]').text(Blockly.Msg.SV_disabled);
	$('span[id^="span_supervision_pin_e"]').text(Blockly.Msg.SV_pin_e);
	$('span[id^="span_supervision_pin_s"]').text(Blockly.Msg.SV_pin_s);
	$('span[id^="span_supervision_low_e"]').text(Blockly.Msg.SV_low_e);
	$('span[id^="span_supervision_high_e"]').text(Blockly.Msg.SV_high_e);
	$('span[id^="span_supervision_low_s"]').text(Blockly.Msg.SV_low_s);
	$('span[id^="span_supervision_high_s"]').text(Blockly.Msg.SV_high_s);
	$('span[id^="span_supervision_PWM"]').text(Blockly.Msg.SV_PWM);
	$('span[id^="span_supervision_read_pin"]').text(Blockly.Msg.SV_read_pin);
	$('span[id^="span_supervision_data_latchL"]').text(Blockly.Msg.SV_data_latch);
	$('span[id^="span_supervision_data_latchL1"]').text(Blockly.Msg.SV_data_latch1);
	$('span[id^="span_supervision_data_latchL2"]').text(Blockly.Msg.SV_data_latch2);
	$('span[id^="span_supervision_data_latchL3"]').text(Blockly.Msg.SV_data_latch3);
	$('span[id^="span_supervision_data_latchA"]').text(Blockly.Msg.SV_data_latch);
	$('span[id^="span_supervision_data_latchA1"]').text(Blockly.Msg.SV_data_latch1);
	$('span[id^="span_supervision_data_latchA2"]').text(Blockly.Msg.SV_data_latchA);
	$('span[id^="span_supervision_data_latchA3"]').text(Blockly.Msg.SV_latch_event);
	$('#span_supervision_visible').text(Blockly.Msg.SV_visible_tab4);
	$('#span_supervision_get_analog_map').text(Blockly.Msg.SV_get_analog_map);
	$('#span_supervision_get_capability').text(Blockly.Msg.SV_get_capability);
	$('#span_supervision_get_firmware').text(Blockly.Msg.SV_get_firmware);
	$('#span_supervision_get_protocol').text(Blockly.Msg.SV_get_protocol);
	$('#span_supervision_get_pymata').text(Blockly.Msg.SV_get_pymata);
	$('#span_supervision_get_pin_report').text(Blockly.Msg.SV_get_pin_report);
	$('#span_supervision_get_pin_report_text').text(Blockly.Msg.SV_get_pin_report_text);
	$('#span_supervision_digital_pin').text(Blockly.Msg.SV_digital_pin);
	$('#span_supervision_analog_pin').text(Blockly.Msg.SV_analog_pin);
	$('#span_supervision_latch_event').text(Blockly.Msg.SV_latch_event);
	$('#span_supervision_latch_digital_pin').text(Blockly.Msg.SV_latch_digital_pin);
	$('#span_supervision_latch_analog_pin').text(Blockly.Msg.SV_latch_analog_pin);
	$('#span_supervision_servo').text(Blockly.Msg.SV_servo);
	$('#span_supervision_servo_pin').text(Blockly.Msg.SV_servo_pin);
	$('#span_supervision_servo_angle').text(Blockly.Msg.SV_servo_angle);
	$('#span_supervision_servo_set').text(Blockly.Msg.SV_servo_set);
	$('#span_supervision_tone').text(Blockly.Msg.SV_tone);
	$('#span_supervision_tone_pin').text(Blockly.Msg.SV_tone_pin);
	$('#span_supervision_tone_freq').text(Blockly.Msg.SV_tone_freq);
	$('#span_supervision_tone_dur').text(Blockly.Msg.SV_tone_dur);
	$('#span_supervision_tone_play').text(Blockly.Msg.SV_tone_play);
	$('#span_supervision_encoder').text(Blockly.Msg.SV_encoder);
	$('#span_supervision_encoder_pinA').text(Blockly.Msg.SV_encoder_pinA);
	$('#span_supervision_encoder_pinB').text(Blockly.Msg.SV_encoder_pinB);
	$('#span_supervision_encoder_auto').text(Blockly.Msg.SV_encoder_auto);
	$('#span_supervision_encoder_manual').text(Blockly.Msg.SV_encoder_manual);
	$('#span_supervision_sonar').text(Blockly.Msg.SV_sonar);
	$('#span_supervision_sonar_trig').text(Blockly.Msg.SV_sonar_trig);
	$('#span_supervision_sonar_echo').text(Blockly.Msg.SV_sonar_echo);
	$('#span_supervision_sonar_auto').text(Blockly.Msg.SV_sonar_auto);
	$('#span_supervision_sonar_manual').text(Blockly.Msg.SV_sonar_manual);
	$('#span_supervision_stepper').text(Blockly.Msg.SV_stepper);
	$('#span_supervision_stepper_pin1').text(Blockly.Msg.SV_stepper_pin1);
	$('#span_supervision_stepper_pin2').text(Blockly.Msg.SV_stepper_pin2);
	$('#span_supervision_stepper_pin3').text(Blockly.Msg.SV_stepper_pin3);
	$('#span_supervision_stepper_pin4').text(Blockly.Msg.SV_stepper_pin4);
	$('#span_supervision_stepper_steps_rev').text(Blockly.Msg.SV_stepper_steps_rev);
	$('#span_supervision_stepper_motor').text(Blockly.Msg.SV_stepper_motor);
	$('#span_supervision_stepper_steps').text(Blockly.Msg.SV_stepper_steps);
	$('#span_supervision_stepper_run').text(Blockly.Msg.SV_stepper_run);
	$('#span_supervision_HTTP_BT').text(Blockly.Msg.SV_HTTP_BT);
	$('#span_supervision_i2c_info').text(Blockly.Msg.SV_i2c_info);
	$('#span_supervision_i2c_config').text(Blockly.Msg.SV_i2c_config);
	$('#span_supervision_i2c_readButton').text(Blockly.Msg.SV_i2c_readButton);
	$('#span_supervision_i2c_readDelay').text(Blockly.Msg.SV_i2c_readDelay);
	$('#span_supervision_i2c_read').text(Blockly.Msg.SV_i2c_read);
	$('#span_supervision_i2c_read_devAddress').text(Blockly.Msg.SV_i2c_read_devAddress);
	$('#span_supervision_i2c_read_devRegister').text(Blockly.Msg.SV_i2c_read_devRegister);
	$('#span_supervision_i2c_read_bytes').text(Blockly.Msg.SV_i2c_read_bytes);
	$('#span_supervision_i2c_read_type').text(Blockly.Msg.SV_i2c_read_type);
	$('#span_supervision_i2c_readRequest').text(Blockly.Msg.SV_i2c_readRequest);
	$('#span_supervision_i2c_retrieveButton').text(Blockly.Msg.SV_i2c_retrieveButton);
};

//Load FRENCH by default... This allow to have a definition for additionnal blocks messages in case another langage is chosen
//Load the Code demo's language strings.
//document.write('<script src="lang/BlocklyArduino_msg/fr.js"></script>\n');
// Load Blockly's language strings.
//document.write('<script src="lang/Blockly_msg/fr.js"></script>\n');
// Load Blockly@rduino specific block's language strings.
// document.write('<script src="lang/BlocklyArduino_blocks/fr.js"></script>\n');
// Load Supervision's language strings.
//document.write('<script src="lang/supervision/fr.js"></script>\n');

// And then load the choose langage
//Load the Code demo's language strings.
document.write('<script src="lang/BlocklyArduino_msg/UI.js"></script>\n');
document.write('<script src="lang/BlocklyArduino_msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="lang/Blockly_msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly@rduino specific block's language strings.
document.write('<script src="lang/BlocklyArduino_blocks/' + Code.LANG + '.js"></script>\n');
// Load Supervision's language strings.
document.write('<script src="lang/supervision/' + Code.LANG + '.js"></script>\n');
//Load the Micro:bit's language strings.
document.write('<script src="lang/microbit_blocks/' + Code.LANG + '.js"></script>\n');
