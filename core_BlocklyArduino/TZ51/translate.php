<?php
  error_reporting(E_ALL ^ E_DEPRECATED);
  $db = new PDO('mysql:host=mysql;dbname=my_db;charset=utf8', 'my_db', 'tequila');
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $data='';
   
   //echo "insertion de la chaine LPC correspondante au code ".$var;
   if (isset($_GET["code"])) {
        $var=$_GET["code"];
        $query=$db->query("SELECT lpc FROM `table_mots` WHERE code LIKE '".$var."'");
        $d=$query->fetch(PDO::FETCH_ASSOC);
        $query->closeCursor();
        if ($d['lpc']!='') {
          echo "LPC=".$d['lpc']."\n";
        } else {
          echo "Invalid LPC\n";
        }
    
    } else {
        echo "Invalid LPC\n";
    } 
    unset($db);
?>
<!DOCTYPE html>
<html>
<head>
  <title>Traduction en chaine LPC</title>
</head>
<body>
</body>
</html>
