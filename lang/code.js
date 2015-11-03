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

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  search = search.replace(/([?&]url=)[^&]*/, '');

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
  // document.dir fails in Mozilla, use document.body.parentNode.dir instead.
  // https://bugzilla.mozilla.org/show_bug.cgi?id=151407
  var rtl = Code.isRtl();
  document.head.parentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.head.parentElement.setAttribute('lang', Code.LANG);

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
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.getElementById('title').textContent = MSG['title'];
  document.getElementById('span_about').textContent = MSG['span_about'];
  document.getElementById('span_example').textContent = MSG['span_example'];
  document.getElementById('span_picture').textContent = MSG['span_picture'];
  document.getElementById('span_supervision').textContent = MSG['span_supervision'];
  document.getElementById('aboutModalLabel').textContent = MSG['aboutModalLabel'];
  document.getElementById('aboutBody').innerHTML = MSG['aboutBody'];
  
  document.getElementById('btn_switch').title = MSG['btn_switch'];

  document.getElementById('span_config').textContent = MSG['span_config'];
  document.getElementById('labelArduinoCard').textContent = MSG['labelArduinoCard'];

  document.getElementById('btn_preview').title = MSG['btn_preview'];

  document.getElementById('span_delete').textContent = MSG['span_delete'];
  document.getElementById('span_saveXML').textContent = MSG['span_saveXML'];
  document.getElementById('span_fakeload').textContent = MSG['span_fakeload'];

  document.getElementById('a_blocks').textContent = MSG['a_blocks'];
  document.getElementById('a_arduino').textContent = MSG['a_arduino'];
  document.getElementById('a_term').textContent = MSG['a_term'];
  document.getElementById('a_xml').textContent = MSG['a_xml'];

  document.getElementById('cb_cf_verify_btn').textContent = MSG['cb_cf_verify_btn'];
  document.getElementById('btn_edit_code').textContent = MSG['btn_edit_code'];
  document.getElementById('cb_cf_flash_btn').textContent = MSG['cb_cf_flash_btn'];
  document.getElementById('btn_saveArduino').textContent = MSG['button_saveArduino'];
  document.getElementById('btn_plugin_codebender').textContent = MSG['btn_plugin_codebender'];
  document.getElementById('cb_cf_serial_monitor_connect').textContent = MSG['cb_cf_serial_monitor_connect'];

  document.getElementById('configModalLabel').textContent = MSG['configModalLabel'];
  document.getElementById('span_select_all').textContent = MSG['span_select_all'];
  document.getElementById('btn_close').textContent = MSG['btn_close'];
  document.getElementById('btn_valid').textContent = MSG['btn_valid'];

  document.getElementById('editModalLabel').textContent = MSG['editModalLabel'];
  document.getElementById('showcardLabel').textContent = MSG['showcardLabel'];
  document.getElementById('exampleModalLabel').textContent = MSG['exampleModalLabel'];
  document.getElementById('span_doc').title = MSG['span_doc'];
  document.getElementById('btn_closeCode').textContent = MSG['btn_closeCode'];
  document.getElementById('btn_validCode').textContent = MSG['btn_validCode'];

};

//Load the Code demo's language strings.
document.write('<script src="lang/msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="lang/blocks/' + Code.LANG + '.js"></script>\n');
