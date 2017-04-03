<?php
  session_start ();
  error_reporting(E_ALL ^ E_DEPRECATED);
  $data='';
  if (isset($_POST['clearall'])) //l'utilisateur a cliqué sur le bouton effacer tout
  {
   $_SESSION['arduino'] = '';
   $_SESSION['arduino2'] = '';
   $_SESSION['phrase'] = '';
   $_SESSION['code'] = '';
   //echo "efface tout !";
  }
  if (isset($_POST['ajoute'])) //l'utilisateur a cliqué sur le bouton ajouter
  {
   $var=$_POST['lemot'];
   //echo "insertion de la chaine LPC correspondante au code ".$var;
   if ($var!="") {
        $db = new PDO('mysql:host=mysql;dbname=my_db;charset=utf8', 'my_db', 'tequila');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query=$db->query("SELECT lpc FROM `table_mots` WHERE code LIKE '".$var."%'");
        $d=$query->fetch(PDO::FETCH_ASSOC);
        $query->closeCursor();
        unset( $db );
        //echo "la requête SQL a fonctionnée ! on trouve la chaine LPC '".$d['lpc']."'";
        $_SESSION['arduino'] = $_POST['arduino'].$d['lpc']."};\n";
        $_SESSION['phrase'] = $_POST['ch_texte'];
        $_SESSION['code'] = $_POST['ch_code']; 
        $_SESSION['arduino2'] = $_POST['arduino2'];
        //echo $d[0];
    
    } else {
        $_SESSION['arduino'] = $_POST['arduino'];
        $_SESSION['phrase'] = $_POST['ch_texte'];
        $_SESSION['code'] = $_POST['ch_code'];
        $_SESSION['arduino2'] = $_POST['arduino2']; 
    } 
  }

  if (isset($_POST['cherche'])) //l'utilisateur a cliqué sur le bouton de recherche dans la base de données
  {
    $flag=0;
    $var=$_POST['search'];
    //echo "recherche les mots similaire &agrave; '".$var."' dans la base de donn&eacute;e...";
    if (strlen($var)!=0) 
    {  
     try {
        $db = new PDO('mysql:host=mysql;dbname=my_db;charset=utf8', 'my_db', 'tequila');
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query=$db->query("SELECT * FROM `dictionnaire` WHERE mot LIKE '".$var."%'");  
        $flag=1;
        //echo "no exception";
      } catch(PDOException $ex) {
              echo "An Error occured!"; //user friendly message
              $flag=0;
              }
    }
  }
?>
<!DOCTYPE html>
<html>
<head>
  <title>Dictionnaire Fran&ccedil;ais de chaines LPC pour TMS5220</title>
  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="utils/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <script type="text/javascript">
    $(function(){
      $("#btnch").click( function()
           {
            var a=$('.input').val();
            $.post('speech.php',{"search":a},function(data){
                  
                });
           }
      );
     
    });
    
    function Clear_all() {
    document.getElementById('Index').value = ""
    document.getElementById('Phrase').value = "";
    document.getElementById('Arduino').value = "";
    document.getElementById('Arduino2').value = "";
    } 
    
    function check() {
    var b=$("#myselect option:selected").val();
    var c=$("#myselect option:selected").text();
    //ajout liste d'index
    if (c!=""){
    if (b.charAt(0)==="H") {
      //Si homonyme, on remplace par la chaine originale du LPC
      b="W"+b.substring(1,7);
    }
    document.getElementById('idlemot').value = b;
    document.getElementById('Index').value += b;
    document.getElementById('Index').value += ";";
    //ajout du code pour prononcer la phrase
    document.getElementById('Arduino2').value += "  voice.say(sp";
    document.getElementById('Arduino2').value += b;
    document.getElementById('Arduino2').value += ");\n";
    //ajout du mot à la phrase
    document.getElementById('Phrase').value += c;
    document.getElementById('Phrase').value += ";";
    //Ajout du code arduino
    var textValue=document.getElementById('Arduino').value;
    if (textValue.indexOf(b)==-1)
    { 
      //On ajoute la chaine LPC que si elle n'est pas déjà dans le code !
      document.getElementById('Arduino').value += "//";
      document.getElementById('Arduino').value += c;
      document.getElementById('Arduino').value += "\n";
      document.getElementById('Arduino').value += "const uint8_t sp";
      document.getElementById('Arduino').value += b;
      document.getElementById('Arduino').value +=" [] PROGMEM ={";
      document.getElementById('Arduino').value +="";
    } else {
        document.getElementById('idlemot').value =""; 
    }
    }
    //alert(generMarque[1][cat]);
    } 

  </script>
</head>
<body>
  <div class="container">
      <div class="page-header">
        <h3>Dictionnaire Fran&ccedil;ais de chaines LPC pour TMS5220 &eacute;mul&eacute; par carte Arduino</h3>
      </div>
      
  
    <div class="row"> 
  <div class="col-md-6"><button name="info" class="form-control btn btn-success" onclick="window.location.href='http://www.technozone51.fr/dokuwiki2/doku.php?id=parole:faire_parler_vos_cartes_arduino';"><span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span> Plus d'infos sur le montage</button></div>
  <form action="speech.php" method="POST">
  <div class="col-md-6"><button name='clearall' class="form-control btn btn-danger" onClick="Clear_all();"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Effacer tout</button></div>
  </div><br/>
    <div class="row"> 
      <div class="col-md-6">1) Saisir le mot ou le d&eacute;but du mot &agrave; chercher dans la base de donn&eacute;e : </div><div class="col-md-4"><input class="form-control" type="text" name='search' class='input' placeholder="saisir un mot ici..."></div>
      <div class="col-md-2"><button id='btnch' name='cherche'  class="form-control btn btn-primary"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Chercher...</button></div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">2) S&eacute;lectionnez le mot &agrave; ins&eacute;rer dans la phrase dans la liste ci-contre :</div><div class="col-md-4"><select id="myselect" class="form-control">
<?php
if ($flag===1){
    //echo "query réussi !";
    while($fetch_options = $query->fetch(PDO::FETCH_ASSOC)) {//Boucle toutes les options de sélection contenu dans la requete
    //Added Id for Options Element 
    ?>
    <option id ="<?php echo $fetch_options['code']; ?>"  value="<?php echo $fetch_options['code']; ?>"><?php echo $fetch_options['mot']; ?></option><!--Echo out options-->
<?php
     }
     $query->closeCursor();
     unset($db);   
}
?>
      </select></div><div class="col-md-2"><button id='btnaj' name='ajoute' onClick="check();"  class="form-control btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Ajoute ce mot</button></div>
    </div>
          <input id="idlemot" name="lemot" type="hidden" size="20" readonly="true"/>
          <div class="form-group">
            <label for="exampleInputEmail1">Votre phrase</label>
            <input id="Phrase" name="ch_texte" type="text" class="form-control" value="<?php if(isset($_SESSION['phrase'])) { echo $_SESSION['phrase'];}?>" size="140" readonly="true" />
          </div>
      <hr>3) Le code &agrave; recopier dans <a href="http://www.technozone51.fr/BlocklyDuinotest/">Blockly@rduino</a> :<br/>
      <input class="form-control" id="Index" name="ch_code" type="text" value="<?php if(isset($_SESSION['code'])) { echo htmlentities($_SESSION['code']);}?>" size="100" readonly="true" />
            <hr>4) Code Arduino : &agrave; recopier dans la section d&eacute;finition des chaines LPC<br/>
            <textarea id="Arduino" name="arduino"  rows="6" value="" class="form-control"><?php if(isset($_SESSION['arduino'])) { echo $_SESSION['arduino'];}?></textarea>
            <hr>5) Code Arduino : &agrave; recopier dans la boucle loop de votre programme<br/>
            <textarea id="Arduino2" name="arduino2"  rows="6" value="" class="form-control"><?php if(isset($_SESSION['arduino2'])) { echo $_SESSION['arduino2'];}?></textarea>
            <hr>
        <h6>Les chaines LPC extraites de la base de donn&eacute;es de la soci&eacute;t&eacute; <a href="http://www.technozone51.fr/">Technozone51</a> sont gratuites pour toute utilisation non commerciale. Pour toute utilisation commerciale, veuillez contacter la soci&eacute;t&eacute; <a href="http://www.technozone51.fr/">Technozone51</a></h6>    
            
            
            
  </form>
   <div id="display"></div>
  </div> <!-- /container -->
</body>
</html>
