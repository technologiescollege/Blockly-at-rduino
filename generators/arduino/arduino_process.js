'use strict';

goog.provide('Blockly.Arduino.processes');
goog.require('Blockly.Arduino');

var basecode_process =
    'typedef struct process_s {\n' +
    '  int pid ;\n' +
    '  int state ;\n' +
    '  int timer ;\n' +
    '  int timer_goto ;\n' +
    '} process_t ;\n\n' +
    'process_t processes[nb_processes] ;\n' +
    '\n' +
    'void init_process(int n, process_t* pproc) {\n' +
    '  pproc->pid = n ;\n' +
    '  pproc->state = 0 ;\n' +
    '  pproc->timer = 0 ;\n' +
    '  pproc->timer_goto = 0 ;\n' +
    '}\n' +
    '\n' +
    'void init_processes() {\n' +
    '  for (int i=0 ; i < nb_processes ; i++) {\n' +
    '    init_process(i, &processes[i]) ;\n' +
    '  }\n' +
    '}\n' +
    '\n' +
    'void to_state(process_t* pproc, int st) {\n' +
    '  pproc->state = st ;\n' +
    '  pproc->timer = 0 ;\n' +
    '}\n' +
    '\n' +
    '// Returns 1 on the first call (timer initialisation).\n' +
    'int wait_to_state(process_t* pproc, int delay, int st) {\n' +
    '  if (pproc->timer==0) {\n' +
    '    pproc->timer = delay ;\n' +
    '    pproc->timer_goto = st ;\n' +
    '    return 1 ;\n' +
    '  }\n' +
    '  else { return 0 ; }\n' +
    '}\n' +
    '\n' +
    'int check_timer(process_t* pproc) {\n' +
    '  if (pproc->timer > 0) {\n' +
    '    if (--(pproc->timer) == 0) {\n' +
    '      to_state(pproc, pproc->timer_goto) ;\n' +
    '      return 1 ;\n' +
    '    }\n' +
    '  }\n' +
    '  return 0 ;\n' +
    '}\n' ;

var nb_processes = 0 ;

var exec_all = '' ;

Blockly.Arduino.process = function() {

    var insert = '' ;
    var process_name = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
                                                           Blockly.Process.NAME_TYPE);
    
    Blockly.Arduino.setups_['processes'] = 'init_processes() ;' ;
    
    // Is it the first process ?
    var bb = Blockly.Arduino.definitions_['init_process'] ;
    if (bb == null) {
        nb_processes = 0 ;
        exec_all =
            '\nvoid exec_all_processes() {\n' +
            '   // Sleep 1ms\n' +
            '   delayMicroseconds(1000) ;\n'+
            '\n' ;
        insert = 'exec_all_processes() ;' ;
    } ;

    var pid = nb_processes ;
    
    nb_processes++ ;
    var exec_name = 'exec_process' + pid ;
    var exec_decl = 'void ' + exec_name + '(process_t* pproc) ' ;
    
    exec_all = exec_decl + ';\n' + exec_all ;
    exec_all += '   ' + exec_name + '(&processes[' + pid + ']) ; // Exec ' + process_name + '\n';

    var pvarname = 'process_' + process_name ;
    
    Blockly.Arduino.definitions_['init_process'] = '#define nb_processes ' + nb_processes + '\n\n' + basecode_process ;
    Blockly.Arduino.definitions_[pvarname] = 'int ' + pvarname + ' ;' ;
    Blockly.Arduino.definitions_['exec_all_processes'] = '\n' + exec_all + '\n}\n\n' ;
    
    Blockly.Arduino.setups_[pvarname] = pvarname + ' = ' + pid + ';' ;

    var body_code = Blockly.Arduino.statementToCode(this, 'body');
    
    Blockly.Arduino.definitions_[exec_name] =
        '\n' + exec_decl + ' {\n' +
        '   if (0 == check_timer(pproc)) {\n' +
        '      switch(pproc->state) {\n' +
        body_code +
        '      }\n' +
        '   }\n' +
        '}\n' ;
    
    return insert ;
}

Blockly.Arduino.statedef = function() {

    var casenb = this.getFieldValue('STATENUM') ;
    var body = Blockly.Arduino.statementToCode(this, 'body');
    
    return "       case(" + casenb + "): " + body + "\n                  break ;\n" ;
}

Blockly.Arduino.goto = function() {
    var dest = this.getFieldValue('dest') ;
    return "                to_state(pproc, " + dest + ") ;"
}

Blockly.Arduino.pgoto = function() {
    var dest = this.getFieldValue('dest') ;
    var process_name = Blockly.Arduino.variableDB_.getName(this.getFieldValue('NAME'),
                                                           Blockly.Process.NAME_TYPE);
    var pvarname = 'process_' + process_name ;
    
    return "                to_state(&processes[" + pvarname + "], " + dest + ") ;"
}

Blockly.Arduino.timestatedef = function() {
    var casenb = this.getFieldValue('STATENUM') ;
    var delayms = this.getFieldValue('wait') ;
    var dest = this.getFieldValue('dest') ;

    // Companion state : -100 - state_number (could be -1 - state_number, but -100 gives easier-to-read numbers, avoids stupid confusions)
    var alt_state = -100 - casenb ;

    var body1 = Blockly.Arduino.statementToCode(this, 'body1');
    var body2 = Blockly.Arduino.statementToCode(this, 'body2');

    var has_post_action = this.getInputTargetBlock('body2') ;

    var dest1 = has_post_action ? alt_state : dest ;
    
    var gencode1 =
        "       // State #" + casenb + "\n" +
        "       case(" + casenb + "):     if (1 == wait_to_state(pproc, " + delayms + ", " + dest1 + ")) {\n" +
        "                     " + body1 +
        "                    }\n" +
        "                    break ;\n\n" ;

    var gencode2 = "" ;

    if (has_post_action) {
        gencode2 =
            "       case(" + alt_state + "):" + body2 +
            "                    to_state(pproc, " + dest + ") ; \n" +
            "                    break ;\n\n" ;
    } ;
    
    return (gencode1 + gencode2) ;
}
