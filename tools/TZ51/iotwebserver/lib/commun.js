  var connection;

function begin_ws(s){
    connection = new WebSocket(s, ['arduino']);
    
    connection.onmessage = function (event) {
    if (event.data.startsWith("Connected")) {
      flag_init=1;
      index_field=0;
      if (index_field<field_name.length) {
        //On demande au serveur la valeur du champ index_field
        if (field_type[field_name[index_field]]!="LABEL" && field_type[field_name[index_field]]!="EDIT") {
          connection.send("read"+field_name[index_field]);
        }
      }
    }
    if (event.data.startsWith("field")) {
      var s_field=event.data.substring(5);
      firstspace = s_field.indexOf('=');
      var s_value=s_field.substring(firstspace+1);
      s_field=s_field.substring(0,firstspace); 
      //mise a jour des lEDs
      if (field_type[s_field]=="LED") {  
        if (s_value=='none') { 
          document.getElementById("LED"+s_field).innerHTML = '<div class="led-none"></div>';
        } else {
          document.getElementById("LED"+s_field).innerHTML = '<div class="led-none led-'+s_value+'"></div>';
        }
      }
      //mise a jour des LABELs
      if (field_type[s_field]=="LABEL") {  
          document.getElementById("label"+s_field).innerHTML = s_value;
      }
      //Mise à jour des SWITCHs
      if (field_type[s_field]=="SWITCH") {
        if (s_value=='true') { 
          document.getElementById("check"+s_field).checked=true;
        } else {
          document.getElementById("check"+s_field).checked = false;
        }
      }
      //Mise à jour des POTARs
      if (field_type[s_field]=="POTAR") {
        if (!in_slide) { 
          if (s_value!=document.getElementById("potar"+s_field).value) {
            document.getElementById("potar"+s_field).value=s_value;
          }
        }
      }  
      //Mise à jour des EDIT
      if (field_type[s_field]=="EDIT") {
        if (!in_editor) { 
          if (s_value!=document.getElementById("edit"+s_field).value) {
            document.getElementById("edit"+s_field).value=s_value;
          }
        }
      }  
      //Mise à jour des GAUGESs
      if (field_type[s_field]=="GAUGE") {
        if (!isNaN(s_value)) {
          gauge_colection['gauge'+s_field].refresh(s_value);
        }
      }
      //Poursuite mise a jour initiale
      if (flag_init==1) {
        //On poursuit l'initialisation de l'interface
        index_field=index_field+1;
        if (index_field<field_name.length) {
          //On demande au serveur la valeur du champ index_field
          if (field_type[field_name[index_field]]!="LABEL" && field_type[field_name[index_field]]!="EDIT") {
            connection.send("read"+field_name[index_field]);
          }
        } else {
          //On a fini l'initialisation de l'interface
          flag_init=0;
        }
      }
      //Fin
    }  
  }

    
    
    
  }
  
  //connection = new WebSocket("ws://192.168.0.150:81", ['arduino']);

  
  var previewgrid = $("#previewgrid ul").gridster({
  widget_margins: [0, 0],widget_base_dimensions: [80, 50],	max_cols: 12, min_cols: 12, min_rows:  2}).data('gridster');
  previewgrid.disable();

  function handleClick(cb,nb) {
    connection.send("field"+nb+"="+cb.checked);
    httpstate=1;
  }

  function handlebutton(nb) {
    connection.send("field"+nb+"=true");
  }

  function  editor(flag) {
    in_editor=flag;
  }

  function  slide(flag) {
    in_slide=flag;
  }

  function handlepot(o,nb) {
    connection.send("field"+nb+"="+o.value);
    httpstate=1;
    in_slide=false;
  }

  function handleeditor(o,nb) {
    connection.send("field"+nb+"="+decodeURIComponent(o.value.replace(/\+/g,  " ")));
  }