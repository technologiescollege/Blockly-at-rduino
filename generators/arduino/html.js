//thanks to JP Fontaine

"use strict";
goog.provide("Blockly.Arduino.html");
goog.require("Blockly.Arduino");
  ////////////
 /*  html  */
////////////
Blockly.Arduino['html_title'] = function(block) {
    var value = block.getFieldValue('value');
    var code = 'client.println("<meta charset=\\"UTF-8\\">");\n';
    code += 'client.println("<title>'+looseEscape(value)+'</title>");\n';
    return code
};
//////////////
Blockly.Arduino['html_emptytext'] = function(block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
};
//////////////
Blockly.Arduino['html_textmod'] = function(block){
    var content = Blockly.Arduino.statementToCode(block,'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>' + content + '</' + type + '>'
};
//////////////
Blockly.Arduino['html_paragraph'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier');
    return 'client.println("<p' + block_modifier + '>' + statements_content + '</p>");\n'
};
//////////////
Blockly.Arduino['html_header'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<h' + header_size + block_modifier + '>' + statements_content + '</h' + header_size + '>");\n'
};
//////////////
Blockly.Arduino['html_link'] = function(block){
    var text = Blockly.Arduino.statementToCode(block, 'content');
    var link = URLInput(block.getFieldValue('target'));
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<a href=\\"' + link + '\\" target=\\"_blank\\"' + block_modifier + '>' + text + '</a>'
};
//////////////
Blockly.Arduino['html_table'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<table' + block_modifier + '>' + content + '</table>");\n'
};
//////////////
Blockly.Arduino['html_tablerow'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<tr' + block_modifier + '>' + content + '</tr>'
};
//////////////
Blockly.Arduino['html_tableheading'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<th' + block_modifier + '>' + content + '</th>'
};
//////////////
Blockly.Arduino['html_tabledata'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<td' + block_modifier + '>' + content + '</td>'
};
//////////////
Blockly.Arduino['html_image'] = function(block){
    var source = block.getFieldValue('source');
    var code = 'client.println("<img src=\\"' + URLInput(source) + '\\">");\n';
    return code
};
//////////////
Blockly.Arduino['html_args'] = function(block) {
    var code = Blockly.Arduino.statementToCode(block, 'content');
    return 'style=\\"' + code + '\\"'
};
//////////////
Blockly.Arduino['html_color'] = function(block){
    var color = block.getFieldValue('value');
    return 'color : ' + color + ' ; '
};
//////////////
Blockly.Arduino['html_bgcolor'] = function(block){
    var color = block.getFieldValue('value');
    return 'background-color : ' + color + ' ; '
};
//////////////
Blockly.Arduino['html_textalign'] = function(block){
    var value = block.getFieldValue('value');
    return 'text-align : ' + value + ' ; '
};
//////////////
Blockly.Arduino['html_border'] = function(block){
    var width = fullEscape(block.getFieldValue('width'));
    var type =  block.getFieldValue('type');
    var color = block.getFieldValue('color');
    return 'border : ' + width + 'px ' + type + ' ' + color + ' ; '
};
//////////////
Blockly.Arduino['html_input'] = function(block){
    var type = block.getFieldValue('type');
    var value = looseEscape(block.getFieldValue('value'));
    var name = looseEscape(block.getFieldValue('name'));
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<input type=\\"' + type + '\\" value=\\"' + value + '\\" name=\\"' + name + '\\"' + block_modifier + '>';
};
//////////////
Blockly.Arduino['html_form'] = function(block){
	var action = block.getFieldValue('action');
	var method = block.getFieldValue('method');
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return 'client.println("<form action=\\"' + action + '\\" method=\\"' + method + '\\" ' + block_modifier + '>' + content + '</form>");\n'
};
//////////////
Blockly.Arduino['html_label'] = function(block){
    var content = block.getFieldValue('value');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<label' + block_modifier + '>' + content + '</label>'
}
//////////////
Blockly.Arduino['html_br'] = function(block){
    return '<br>'
}
  ////////////////
 /*  function  */
////////////////
function fullEscape(input){
    return escape(input)
        .replace(/%25/g, "%");
}
function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function CSSEscape(input) {
    return input
        .replace(/;/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/</g, "")
        .replace(/:/g, "")
}
function URLInput(input){
    var URLRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(URLRegex.test(input)){
        return input;
    }
}