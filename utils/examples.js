/**
 * Examples
 */

'use strict';

var Examples = {};
Examples.Msg = {};
Examples.Msg.Html = {};

/*
 * Common init to local and server versions
 */
Examples.initCommon = function() {

	// move up a line
	$('button').has('span.glyphicon-arrow-up').on("click", function() {
		var row = $(this).parents('tr:first');
		row.insertBefore(row.prev());
	});

	// move down a line
	$('button').has('span.glyphicon-arrow-down').on("click", function() {
		var row = $(this).parents('tr:first');
		row.insertAfter(row.next());
	});

	// remove a line
	$('button').has('span.glyphicon-trash').on("click", function() {
		$(this).parents('tr:first').remove();
	});

	// add line, based on template
	$('#add_line').on(	"click", function() {
		var clone = $('table').find('tr.hide').clone(true).removeClass('hide');
		clone.find('.checkbox-inline').append('<input data-toggle="toggle" type="checkbox" data-onstyle="success">');
		$('table').append(clone);
		$('input[type=checkbox][data-toggle^=toggle]').bootstrapToggle();
	});

	Examples.initLanguage();
};

/*
 * Get rows inputs values to generate json
 */
Examples.getRows = function() {
	var columns = $('table thead th[id]').map(function() {
		return $(this).attr('id');
	});

	return $('table tbody tr:not(:hidden)').map(function(i) {
		var row = {};

		$(this).find('td').has("input").each(function(i) {
			var rowName = columns[i];
			$(this).find("input:checkbox").each(function() {
				row[rowName] = $(this).prop('checked');
			});
			$(this).find("input:not(:checkbox)").each(function() {
				row[rowName] = $(this).val();
			});
		});

		return row;

	}).get();

};

/*
 * Init local version
 */
Examples.initLocal = function() {

	Examples.initCommon();

	// load './examples/examples.json' file to init table
	$.ajax({
				url : './examples/examples.json',
				type : "get",
				dataType : "json",
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						var clone = $('table').find('tr.hide').clone(true)
								.removeClass('hide');
						var current = $(clone).find('td:first');
						$(current).find('input').val(data[i].source_url);
						current = $(current).next('td');
						$(current).find('input').val(data[i].source_text);
						current = $(current).next('td');
						$(current).find('input').val(data[i].image);
						$(current).find('img').attr('src', data[i].image);
						current = $(current).next('td');
						$(current).find('input').val(data[i].link_url);
						current = $(current).next('td');
						$(current).find('input').val(data[i].link_text);
						current = $(current).next('td');
						if (data[i].visible) {
							$(current)
									.find('.checkbox-inline')
									.append(	'<input data-toggle="toggle" type="checkbox" data-onstyle="success" checked="checked">');
						} else {
							$(current)
									.find('.checkbox-inline')
									.append(	'<input data-toggle="toggle" data-onstyle="success" type="checkbox">');
						}
						$('table').append(clone);
					}
					$('input[type=checkbox][data-toggle^=toggle]').bootstrapToggle();
				},
				error : function() {
					alert("error");
				}
			});

	// check if file exists
	$('.has-feedback > input').on("blur", 	function() {
		var divInput = $(this).parent();
		divInput.children('img').attr('src', $(this).val());
		if ($(this).val() != '') {
			$.ajax({
						url : $(this).val(),
						type : 'HEAD',
						error : function() {
							divInput.removeClass("has-success");
							divInput.children('span').remove();
							divInput.addClass("has-error");
							divInput.append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
						},
						success : function() {
							divInput.removeClass("has-error");
							divInput.children('span').remove();
							divInput.addClass("has-success");
							divInput.append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
						}
					});
		} else {
			divInput.removeClass("has-success");
			divInput.children('span').remove();
			divInput.addClass("has-error");
			divInput.append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
		}
	});

	// generate json
	$("#generate").on("click",	function() {
		$('pre').text(JSON.stringify(Examples.getRows(), null, 4)).removeClass('hide');
		$('#download').removeClass('hide');
	});

	// save json to file
	$("#download").on("click", function() {
		var fileName = "examples.json";

		var uri = 'data:application/text;charset=utf-8,'	+ encodeURIComponent($('pre').text());

		var link = document.createElement("a");
		link.href = uri;
		link.style = "visibility:hidden";
		link.download = fileName;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});
};

/*
 * Init server version
 */
Examples.initServer = function() {
	Examples.initCommon();

	// check API file
	if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
		$('#uploadModal .modal-body').empty();
		$('#uploadModal .modal-body').html("<p class='alert alert-danger'>" + Examples.Msg.noUpload + "</p>");
		$('#btn_submit').addClass("hide");
	}

	// logout
	$("#btn_logout").on("click", function() {
		$.ajax({
			url : "logout.php",
			type : "POST",
			success : function(data) {
				window.location.href = data;
			}
		});
	});

	// inject selected file to input
	$('select').on("change",	function() {
		$(this).parent().siblings().nextAll('input').first().val($(this).val());
		$(this).parent().siblings().nextAll(".vignette").first().attr("src", $(this).val());
	});

	// hide/show new directory input
	$('#directory').on("change", function() {
		if ($(this).val() == "newDir") {
			$('#divNewDir').removeClass("hide");
			$('#btn_submit').prop("disabled", true);
		} else {
			$('#divNewDir').addClass("hide");
			if ($('#inputFile').val()) {
				$('#btn_submit').removeAttr("disabled");
			}
		}
	});

	// add new directory to select list
	$("#addDir").on("click",	function(e) {
		e.preventDefault();
		var newDir = $("#newDir").val();
		if (newDir.substring(0, 11) != './examples/') {
			newDir = './examples/' + $("#newDir").val();
		}
		if ($("#directory option[value='" + newDir + "']").length == 0) {
			$("#directory").append(	'<option value="' + newDir
							+ '" selected="selected">' + newDir
							+ '</option>');
			$('#divNewDir').addClass("hide");
			if ($('#inputFile').val()) {
				$('#btn_submit').removeAttr("disabled");
			}
		}
	});

	// generate json file on server
	$("#generate").on("click", function() {

		var lignes = Examples.getRows();

		$.ajax({
			url : "generate.php",
			type : "POST",
			data : {
				'examples' : JSON.stringify(lignes, null, 4)
			},
			success : function(data) {
				alert(Examples.Msg[data]);
			},
			error : function(data) {
				alert(Examples.Msg[data]);
			}
		});

		$('pre').text(JSON.stringify(lignes, null, 4)).removeClass('hide');
	});

	// // put image preview and information on upload modal
	// $('form').find('input[name="image"]').on('change', function (e) {
	// var files = $(this)[0].files;
	// 
	// if (files.length > 0) {
	// var file = files[0],
	// image_preview = $('#image_preview').removeClass('hide');
	// 
	// image_preview.find('.thumbnail');
	// image_preview.find('img').attr('src', window.URL.createObjectURL(file));
	// image_preview.find('h4').html(file.name);
	// image_preview.find('.caption p:first').html(file.size +' bytes');
	// }
	// });
	//    
	// reset modal upload on open
	$('#uploadModal').on('show.bs.modal', function() {
		$("#uploadForm")[0].reset();
		var image_preview = $('#image_preview').addClass('hide');

		image_preview.find('img').removeAttr('src');
		image_preview.find('h4').empty();
		image_preview.find('p').empty();
		$("#msgUpload").empty();
		$("#msgUpload").removeClass();
		$("#msgUpload").addClass("hide");
		$('#btn_submit').prop("disabled", true);
	});

	// put image preview and information in upload modal
	$('#inputFile').on(	'change', 	function() {
		if ($(this)[0].files[0]) {
			var file = $(this)[0].files[0];
			$('#fileName').val($(this).val().replace(/\\/g, '/'));

			$("#msgUpload").addClass('hide');
			var image_preview = $('#image_preview')	.removeClass('hide');

			image_preview.find('img').attr('src',	window.URL.createObjectURL(file));
			image_preview.find('h4').html(file.name);

			var exp = Math.log(file.size) / Math.log(1024) | 0;
			var result = (file.size / Math.pow(1024, exp)).toFixed(2);

			image_preview.find('p').html(result + ' ' 	+ (exp == 0 ? 'bytes'	: 'KM?'[exp - 1] + 'B'));

			if ($('#directory').val() != "newDir") {
				$('#btn_submit').removeAttr("disabled");
			}
		}
	});

	// submit image uplaod
	$('#btn_submit').on("click", function() {
		$("#msgUpload").empty();
		if (beforeSubmit()) {
			var $form = $('#uploadForm');
			var formdata = (window.FormData) ? new FormData($form[0]) : null;
			var data = (formdata !== null) ? formdata : $form.serialize();

			$.ajax({
				url : "upload.php",
				type : "POST",
				data : data,
				contentType : false,
				processData : false,
				success : function(data) {
					$("#msgUpload").html(Examples.Msg[data]);
					$("#msgUpload").removeClass();
					$("#msgUpload").addClass("alert alert-success");
				},
				error : function(data) {
					$("#msgUpload").html(Examples.Msg[data]);
					$("#msgUpload").removeClass();
					$("#msgUpload").addClass("alert alert-danger");
				}
			});
		}
	});

	// checks before upload
	function beforeSubmit() {
		var files = $('#inputFile')[0].files;
		var file = files[0];

		var fsize = file.size;
		var ftype = file.type;

		// restrict mime-type
		switch (ftype) {
			case 'image/png':
			case 'image/gif':
			case 'image/jpeg':
			case 'image/pjpeg':
			case 'image/bmp':
			case 'text/plain':
			case 'text/xml':
				break;
			default:
				$("#msgUpload").html(
						"<b>" + ftype + "</b> " + Examples.Msg.fileType + "");
				$("#msgUpload").removeClass();
				$("#msgUpload").addClass("alert alert-danger");
				return false;
		}

		// 5 Mb limit
		if (fsize > 5242880) {
			$("#msgUpload").html("<b>" + fsize + "</b> Too big file! <br />" + Examples.Msg.fileSize);
			$("#msgUpload").removeClass();
			$("#msgUpload").addClass("alert alert-danger");
			return false;
		} else {
			return true;
		}
	}

};

/**
 * Lookup for names of supported languages. Keys should be in ISO 639 format.
 */
Examples.LANGUAGE_NAME = {
	'ar' : 'العربية',
	'be-tarask' : 'Taraškievica',
	'br' : 'Brezhoneg',
	'ca' : 'Català',
	'cs' : 'Česky',
	'da' : 'Dansk',
	'de' : 'Deutsch',
	'el' : 'Ελληνικά',
	'en' : 'English',
	'es' : 'Español',
	'fa' : 'فارسی',
	'fr' : 'Français',
	'he' : 'עברית',
	'hrx' : 'Hunsrik',
	'hu' : 'Magyar',
	'ia' : 'Interlingua',
	'is' : 'Íslenska',
	'it' : 'Italiano',
	'ja' : '日本語',
	'ko' : '한국어',
	'mk' : 'Македонски',
	'ms' : 'Bahasa Melayu',
	'nb' : 'Norsk Bokmål',
	'nl' : 'Nederlands, Vlaams',
	'oc' : 'Lenga d\'òc',
	'pl' : 'Polski',
	'pms' : 'Piemontèis',
	'pt-br' : 'Português Brasileiro',
	'ro' : 'Română',
	'ru' : 'Русский',
	'sc' : 'Sardu',
	'sk' : 'Slovenčina',
	'sr' : 'Српски',
	'sv' : 'Svenska',
	'ta' : 'தமிழ்',
	'th' : 'ภาษาไทย',
	'tlh' : 'tlhIngan Hol',
	'tr' : 'Türkçe',
	'uk' : 'Українська',
	'vi' : 'Tiếng Việt',
	'zh-hans' : '簡體中文',
	'zh-hant' : '正體中文'
};

/**
 * List of RTL languages.
 */
Examples.LANGUAGE_RTL = [ 'ar', 'fa', 'he' ];

/**
 * Extracts a parameter from the URL. If the parameter is absent default_value
 * is returned.
 * 
 * @param {string}
 *            name The name of the parameter.
 * @param {string}
 *            defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Examples.getStringParamFromUrl = function(name, defaultValue) {
	var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
	return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * 
 * @return {string} User's language.
 */
Examples.getLang = function() {
	var lang = Examples.getStringParamFromUrl('lang', '');
	if (Examples.LANGUAGE_NAME[lang] === undefined) {
		// Default to English.
		lang = 'en';
	}
	return lang;
};

/**
 * Is the current language (Examples.LANG) an RTL language?
 * 
 * @return {boolean} True if RTL, false if LTR.
 */
Examples.isRtl = function() {
	return Examples.LANGUAGE_RTL.indexOf(Examples.LANG) != -1;
};

/**
 * Save the blocks and reload with a different language.
 */
Examples.changeLanguage = function() {
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

	window.location = window.location.protocol + '//' + window.location.host
			+ window.location.pathname + search;
};

/**
 * User's language (e.g. "en").
 * 
 * @type string
 */
Examples.LANG = Examples.getLang();

/**
 * Initialize the page language.
 */
Examples.initLanguage = function() {
	// Set the HTML's language and direction.
	var rtl = Examples.isRtl();
	$("html").attr('dir', rtl ? 'rtl' : 'ltr');
	$("html").attr('lang', Examples.LANG);

	// Sort languages alphabetically.
	var languages = [];
	for ( var lang in Examples.LANGUAGE_NAME) {
		languages.push([ Examples.LANGUAGE_NAME[lang], lang ]);
	}
	var comp = function(a, b) {
		// Sort based on first argument ('English', 'Русский', '简体字', etc).
		if (a[0] > b[0])
			return 1;
		if (a[0] < b[0])
			return -1;
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
		if (lang == Examples.LANG) {
			option.selected = true;
		}
		languageMenu.append(option);
	}
	languageMenu.bind('change', Examples.changeLanguage);

	// Inject language strings.
	for ( var key in Examples.Msg.Html) {
		$('#' + key).text(Examples.Msg.Html[key]);
	}
	$('#directory').children('option:first').text(
			Examples.Msg.Html.new_directory);
	$(".glyphicon-upload").after(
			"<span>" + Examples.Msg.Html.span_addfile + "</span>");
};

// Load the Code demo's language strings.
document.write('<script src="lang/examples/' + Examples.LANG + '.js"></script>\n');