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
		  'ar': 'العربية',
		  'be-tarask': 'Taraškievica',
		  'br': 'Brezhoneg',
		  'ca': 'Català',
		  'cs': 'Česky',
		  'da': 'Dansk',
		  'de': 'Deutsch',
		  'el': 'Ελληνικά',
		  'en': 'English',
		  'es': 'Español',
		  'fa': 'فارسی',
		  'fr': 'Français',
		  'he': 'עברית',
		  'hrx': 'Hunsrik',
		  'hu': 'Magyar',
		  'ia': 'Interlingua',
		  'is': 'Íslenska',
		  'it': 'Italiano',
		  'ja': '日本語',
		  'ko': '한국어',
		  'mk': 'Македонски',
		  'ms': 'Bahasa Melayu',
		  'nb': 'Norsk Bokmål',
		  'nl': 'Nederlands, Vlaams',
		  'oc': 'Lenga d\'òc',
		  'pl': 'Polski',
		  'pms': 'Piemontèis',
		  'pt-br': 'Português Brasileiro',
		  'ro': 'Română',
		  'ru': 'Русский',
		  'sc': 'Sardu',
		  'sk': 'Slovenčina',
		  'sr': 'Српски',
		  'sv': 'Svenska',
		  'ta': 'தமிழ்',
		  'th': 'ภาษาไทย',
		  'tlh': 'tlhIngan Hol',
		  'tr': 'Türkçe',
		  'uk': 'Українська',
		  'vi': 'Tiếng Việt',
		  'zh-hans': '簡體中文',
		  'zh-hant': '正體中文'
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
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
	BlocklyDuino.backupBlocks();

  var languageMenuSelected = $('#languageMenu option:selected').val();
  var newLang = encodeURIComponent(languageMenuSelected);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
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
  languageMenu.bind('change', Code.changeLanguage);

  // Inject language strings.
  $('#title').text(MSG['title']);
  $('#span_about').text(MSG['span_about']);
  $('#span_example').text(MSG['span_example']);
  $('#span_create_example').text(MSG['span_create_example']);
  $('#span_picture').text(MSG['span_picture']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#aboutBody').html(MSG['aboutBody']);
  
  $('#btn_switch').attr('title', MSG['btn_switch']);

  $('#span_config').text(MSG['span_config']);
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
  
  $('#span_plugin_codebender').text(MSG['span_plugin_codebender']);
  $('#span_verify_codebender').text(MSG['span_verify_codebender']);
  $('#span_flash_codebender').text(MSG['span_flash_codebender']);
  $('#span_saveIno').text(MSG['span_saveIno']);
  $('#span_pasteIDEArduino').text(MSG['span_pasteIDEArduino']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#span_edit_code').text(MSG['span_edit_code']);

  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#span_put_in_url').text(MSG['span_put_in_url']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);

  $('#editModalLabel').text(MSG['editModalLabel']);
  $('#showcardLabel').text(MSG['showcardLabel']);
  $('#exampleModalLabel').text(MSG['exampleModalLabel']);
  
  $('#btn_doc').attr('title', MSG['span_doc']);  
  $('#btn_tuto').attr('title', MSG['span_tuto']);
  $('#btn_closeCode').text(MSG['btn_closeCode']);
  $('#btn_validCode').text(MSG['btn_validCode']);

  $('#msg_ajax_ko').text(MSG['msg_ajax_ko']);
  $('#span_ajax_msg').text(MSG['span_ajax_msg']);
  
  $("xml").find("category").each(function() {
	// add attribute ID to keep categorie code
	$(this).attr('id', $(this).attr('name'));
	$(this).attr('name', Blockly.Msg[$(this).attr('name')]);
  });

};

/**
 * Initialize the page language.
 */
Code.initLanguageSupervision = function() {
	  $('#span_SV_connect').text(Blockly.Msg.SV_connect);
	  $('#span_supervision_tab1').text(Blockly.Msg.SV_tab1);
	  $('#span_supervision_tab2').text(Blockly.Msg.SV_tab2);
	  $('#span_supervision_tab3').text(Blockly.Msg.SV_tab3);
	  $('#span_supervision_tab4').text(Blockly.Msg.SV_tab4);
	  $('#span_supervision_tab5').text(Blockly.Msg.SV_tab5);
	  $('#span_supervision_tab6').text(Blockly.Msg.SV_tab6);
	  $('#span_supervision_tab7').text(Blockly.Msg.SV_tab7);
	  $('#span_supervision_tab8').text(Blockly.Msg.SV_tab8);
	  $('#span_supervision_tab9').text(Blockly.Msg.SV_tab9);
	  $('span[id^="span_supervision_enabled"]').text(Blockly.Msg.SV_enabled);
	  $('span[id^="span_supervision_disabled"]').text(Blockly.Msg.SV_disabled);	  
	  $('span[id^="span_supervision_pin_e"]').text(Blockly.Msg.SV_pin_e);	  	  
	  $('span[id^="span_supervision_pin_s"]').text(Blockly.Msg.SV_pin_s);  
	  $('span[id^="span_supervision_low_e"]').text(Blockly.Msg.SV_low_e);  
	  $('span[id^="span_supervision_high_e"]').text(Blockly.Msg.SV_high_e);  
	  $('span[id^="span_supervision_low_s"]').text(Blockly.Msg.SV_low_s);  
	  $('span[id^="span_supervision_high_s"]').text(Blockly.Msg.SV_high_s);
	  $('span[id^="span_supervision_PWM"]').text(Blockly.Msg.SV_PWM);
	  $('span[id^="span_supervision_read_pin').text(Blockly.Msg.SV_read_pin);	  
	  $('#span_supervision_get_analog_map').text(Blockly.Msg.SV_get_analog_map);
	  $('#span_supervision_get_capability').text(Blockly.Msg.SV_get_capability);
	  $('#span_supervision_get_firmware').text(Blockly.Msg.SV_get_firmware);
	  $('#span_supervision_get_protocol').text(Blockly.Msg.SV_get_protocol);
	  $('#span_supervision_get_pymata').text(Blockly.Msg.SV_get_pymata);
	  $('#span_supervision_get_pin_report').text(Blockly.Msg.SV_get_pin_report);
	  $('#span_supervision_get_pin_report_text').text(Blockly.Msg.SV_get_pin_report_text);
	  $('#span_supervision_digital_pin').text(Blockly.Msg.SV_digital_pin);
	  $('#span_supervision_analog_pin').text(Blockly.Msg.SV_analog_pin);
	  $('#span_supervision_latch_digital_pin').text(Blockly.Msg.SV_latch_digital_pin);
	  $('#span_supervision_latch_analog_pin').text(Blockly.Msg.SV_latch_analog_pin);
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
	  
};

//Load the Code demo's language strings.
document.write('<script src="lang/msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="lang/blocks/' + Code.LANG + '.js"></script>\n');
// Load Supervision's language strings.
document.write('<script src="lang/supervision/' + Code.LANG + '.js"></script>\n');