//thanks to JP Fontaine

"use strict";
goog.provide("Blockly.Blocks.html");
goog.require("Blockly.Blocks");
goog.require('Blockly.Types');
  ////////////
 /*  html  */
////////////
Blockly.Blocks['html_title'] = {
    init: function() {
        this.jsonInit({
            "message0": '<title> %1 </title>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "Titre de l'onglet"
                }
            ],
            "previousStatement": "header",
            "nextStatement": "header",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Title tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_title.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_emptytext'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "un texte."
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Text",
            "helpUrl": ""
        });
    }
};
//////////////
Blockly.Blocks['html_textmod'] = {
    init: function() {
        this.jsonInit({
            "message0": '< %1 > %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "gras",
                            "strong"
                        ],
                        [
                            "italique",
                            "em"
                        ],
                        [
                            "indice"
                        ],
                        [
                            "exposant",
                            "sup"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Text modifier - used to achieve formatting effects with text",
            "helpUrl": "https://www.w3schools.com/html/html_formatting.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_paragraph'] = {
    init: function() {
        this.jsonInit({
            "message0": '<p> %1 %2 </p>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Paragraph tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_p.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_header'] = {
    init: function() {
        this.jsonInit({
            "message0": '<h %1 > %2 %3 </h>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],
]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Header tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_hn.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_link'] = {
    init: function() {
        this.jsonInit({
            "message0": '<a href=%1 > %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Paragraph tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_p.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_table'] = {
    init: function() {
        this.jsonInit({
            "message0": '<table> %1 %2 </table>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "table"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Table tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_table.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_tablerow'] = {
    init: function() {
        this.jsonInit({
            "message0": '<tr> %1 %2 </tr>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "tablerow"
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Table row tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_tr.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_tableheading'] = {
    init: function() {
        this.jsonInit({
            "message0": '<th> %1 %2 </th>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Table heading tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_th.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_tabledata'] = {
    init: function() {
        this.jsonInit({
            "message0": '<td> %1 %2 </td>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Table data tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_td.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_image'] = {
    init: function() {
        this.jsonInit({
            "message0": '<img src=%1 > %2',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Image tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_args'] = {
    init: function() {
        this.jsonInit({
            "message0": 'style : %1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"
                }
            ],
            "colour": Blockly.Blocks.html.HUE,
            "output": "attributes",
            "tooltip": "Additional attributes",
            "helpUrl": "https://www.w3schools.com/html/html_attributes.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_color'] = {
    init: function() {
        this.jsonInit({
            "message0": 'color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"

                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "CSS Color",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_color.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_bgcolor'] = {
    init: function() {
        this.jsonInit({
            "message0": 'background-color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "CSS Background-Color",
            "helpUrl": "https://www.w3schools.com/css/css_background.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_textalign'] = {
    init: function(){
        this.jsonInit({
            "message0": "text-align: %1 ;",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["center", "center"],
                        ["left", "left"],
                        ["right", "right"],
                        ["justify", "justify"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "CSS Text-align",
            "helpUrl": "https://www.w3schools.com/cssref/pr_text_text-align.asp"
        })
    }
};
//////////////
Blockly.Blocks['html_border'] = {
    init: function() {
        this.jsonInit({
            "message0": 'border: %1 px %2 %3 ;',
            "args0": [
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 5,
                    "min": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "none",
                            "none"
                        ],
                        [
                            "solid",
                            "solid"
                        ],
                        [
                            "dotted",
                            "dotted"
                        ],
                        [
                            "dashed",
                            "dashed"
                        ],
                        [
                            "double",
                            "double"
                        ],
                        [
                            "groove",
                            "groove"
                        ],
                        [
                            "ridge",
                            "ridge"
                        ],
                        [
                            "inset",
                            "inset"
                        ],
                        [
                            "outset",
                            "outset"
                        ]
                    ]
                },
                {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#000000"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "CSS Border",
            "helpUrl": "https://www.w3schools.com/css/css_border.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_input'] = {
    init: function() {
        this.jsonInit({
            "message0": '<input type=%1 value=%2 name=%3 >',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [["checkbox","checkbox"],["radio","radio"],["submit","submit"],["text","text"]]
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                },
                {
                    "type": "field_input",
                    "name": "name",
                    "text": ""
                },
                {
                    "type": "input_dummy"
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "Input tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_input.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_form'] = {
    init: function() {
        this.jsonInit({
            "message0": '<form action=%1 method=%2> %3 %4 </form>',
            "args0": [
				{
                    "type": "field_input",
                    "name": "action",
                    "text": "/"
                },
                {
                    "type": "field_dropdown",
                    "name": "method",
                    "options": [["GET","GET"],["POST","POST"],["PUT","PUT"]]
                },
				{
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "form"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_label'] = {
    init: function() {
        this.jsonInit({
            "message0": '<label> %1 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "value",
                    "text": "un label"
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};
//////////////
Blockly.Blocks['html_br'] = {
    init: function() {
        this.jsonInit({
            "message0": '<br>',
            "args0": [
                {
                    "type": "field_dummy"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.html.HUE,
            "tooltip": "button tag",
            "helpUrl": "https://www.w3schools.com/tags/tag_img.asp"
        });
    }
};