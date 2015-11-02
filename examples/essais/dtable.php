<?

	if ( isset($ok) ) {
		echo '<pre>';
		print_r($_POST);
		echo '</pre>';
		exit;
	}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

<head>
	<meta http-equiv="Content-Type"	content="text/html; charset=ISO-8859-1" />
	<meta name="robots" content="noindex, follow" />
	
	<title>Blockly@rduino</title>
	
<style type="text/css">
table {
	border : 2px solid #666;
	border-collapse : collapse;
}
table thead th {
	background : #369;
	border-bottom : 2px solid #666;
	color : #fff;
}
table tbody td {
	border : 1px solid #ccc;
	padding : 5px 2px;
}
</style>

	<script type="text/javascript" src="form.js"></script>
</head>

<body>
	
	<form action="dtable.php" method="post" enctype="multipart/form-data">
	
	<table class="dTable">
		<thead>
			<tr>
				<th>Description</th>
				<th>Fichier XML pour l'élève</th>
				<th>Vignette de l'activité</th>
				<th>Plan de câblage</th>
				<th>Page complémentaire ?</th>
				<th>Lien URL</th>				
				<th>Suppression ?</th>
			</tr>
		</thead>
		
		<tfoot>
			<tr>
				<th colspan="5"><a href="#" onclick="addLigne(this); return false;">Ajouter une ligne</a></th>
			</tr>
		</tfoot>
		
		<tbody>
			
			<tr>
				<td><input type="text" name="champ1[]" /></td>
				<td><input type="file" name="champ2[]" /></td>
				<td><input type="file" name="champ3[]" /></td>
				<td><input type="file" name="champ4[]" /></td>
				<td><input type="text" name="champ5[]" /></td>
				<td><input type="text" name="champ6[]" /></td>
				<td><a href="#" onclick="delLigne(this); return false;">Suppr.</a></td>
			</tr>
			
		</tbody>
	</table>

	<p><input type="submit" value="TOUT VALIDER" name="OK" /></p>
	
	</form>
</body>
</html>
