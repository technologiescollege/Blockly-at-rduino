<?php
session_start();

if (isset($_SESSION['connected'])
	&& isset($_POST['examples'])) {
	try {
		$fp = fopen('./examples/examples.json', 'w');
		if ($fp) {
			fwrite($fp, $_POST['examples']);
			fclose($fp);
		    echo('jsonOK');
		} else {
			throw new Exception();
		}		
	} catch (Exception $e) {
		ob_clean();
    	echo('jsonKO');
	}
}
else
{
    echo('jsonKO');
}