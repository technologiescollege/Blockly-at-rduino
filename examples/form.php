<?php
 
define('HTML_TEMPLATE', 'default.tmpl');

//upload du fichier xml dans un dossier du même nom
if (isset($_FILES['act_XML']) AND $_FILES['act_XML']['error'] == 0)
{
	// Testons si l'extension est autorisée
	$infosfichier = pathinfo($_FILES['act_XML']['name']);
	$extension_upload = $infosfichier['extension'];
	$extensions_autorisees = array('xml');
	if (in_array($extension_upload, $extensions_autorisees))
	{
		// On peut valider le fichier et le stocker définitivement dans le dossier de son nom
		$file_name_XML = basename($_FILES['act_XML']['name'], ".xml");
		mkdir($file_name_XML, 0777);
		move_uploaded_file($_FILES['act_XML']['tmp_name'], $file_name_XML.'/'.basename($_FILES['act_XML']['name']));
		echo "L'envoi a bien été effectué !";
	} else echo "L'extension du fichier n'est pas correcte";  
	
	//rajout de la vignette dans le dossier défini par le nom du fichier xml
	if (isset($_FILES['act_img']) AND $_FILES['act_img']['error'] == 0)
	{
		// Testons si l'extension est autorisée
		$infosfichier = pathinfo($_FILES['act_img']['name']);
		$extension_upload = $infosfichier['extension'];
		$extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
		if (in_array($extension_upload, $extensions_autorisees))
		{
			// On peut valider le fichier et le stocker définitivement dans le dossier de son nom
			move_uploaded_file($_FILES['act_img']['tmp_name'], $file_name_XML.'/'.basename($_FILES['act_img']['name']));
			echo "L'envoi a bien été effectué !";
		} else echo "L'extension du fichier n'est pas correcte";    
	}	
	
	//rajout du plan de cablage dans le dossier défini par le nom du fichier xml
	if (isset($_FILES['act_fritzing']) AND $_FILES['act_fritzing']['error'] == 0)
	{
		// Testons si l'extension est autorisée
		$infosfichier = pathinfo($_FILES['act_fritzing']['name']);
		$extension_upload = $infosfichier['extension'];
		$extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
		if (in_array($extension_upload, $extensions_autorisees))
		{
			// On peut valider le fichier et le stocker définitivement dans le dossier de son nom
			move_uploaded_file($_FILES['act_fritzing']['tmp_name'], $file_name_XML.'/'.basename($_FILES['act_fritzing']['name']));
			echo "L'envoi a bien été effectué !";
		} else echo "L'extension du fichier n'est pas correcte";    
	}
}

if (!file_exists(HTML_TEMPLATE))
	die( HTML_TEMPLATE . ' est manquant');

//rajout des informations dans exemples.txt pour la modal 
if (isset($_REQUEST['save'])) {
	$path = "exemples.txt";
	$file_name_XML = basename($_FILES['act_XML']['name'], ".xml");
	$inputs = filter_input_array(INPUT_POST, array(
		'act_descr' => FILTER_SANITIZE_STRING,
		'act_XML' => FILTER_UNSAFE_RAW,
		'act_IMG' => FILTER_UNSAFE_RAW,
		'act_fritzing' => FILTER_UNSAFE_RAW,
		'act_link' => FILTER_SANITIZE_STRING,
		'act_URL' => FILTER_VALIDATE_URL ,
	));
	$inputs['act_XML']=$file_name_XML.'/'.basename($_FILES['act_XML']['name']);
	$inputs['act_fritzing']=$file_name_XML.'/'.basename($_FILES['act_fritzing']['name']);
	$inputs['act_img']=$file_name_XML.'/'.basename($_FILES['act_img']['name']);
	//on enlève la dernière ligne des exemples
	file_put_contents($path, str_replace("</tbody>", "", file_get_contents($path)));
	//je récupère le contenu le contenu du template
	$buffer = file_get_contents(HTML_TEMPLATE);
	//je change les variables typiques par les valeurs en cours
	$buffer = str_replace(array('%act_xml%', '%act_descr%', '%act_fritzing%', '%act_img%', '%act_URL%', '%act_link%'), array($inputs['act_XML'], $inputs['act_descr'],$inputs['act_fritzing'],$inputs['act_img'],$inputs['act_URL'], $inputs['act_link']), $buffer);
	//j'additionne ce template au fichier déjà existant
	file_put_contents($path, $buffer, FILE_APPEND);
}
 
?>

<form method="post" enctype="multipart/form-data">
	<label for="act_descr">Description</label><textarea name="act_descr" id="act_descr"></textarea>
	<br />
	<label for="act_XML">Fichier XML pour l'élève</label><input type="file" name="act_XML" />
	<br />
	<label for="act_img">Vignette de l'activité</label><input type="file" name="act_img" />
	<br />
	<label for="act_fritzing">Plan de câblage</label><input type="file" name="act_fritzing" />
	<br />
	<label for="act_link">Page complémentaire</label><input type="text" name="act_link" id="act_link" />
	<br />
	<label for="act_URL">Lien URL</label><input type="text" name="act_URL" id="act_URL" />
	<br />
	<input type="submit" name="save" value="Ajouter" />
	<br />
	<tfoot>
		<tr>
			<th colspan="5"><input type="reset" value="Réinitialiser" /></th>
		</tr>
	</tfoot>
</form>