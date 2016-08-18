<?php
session_start();

if (isset($_SESSION['connected'])
	&& isset($_FILES["inputFile"]) 
	&& $_FILES["inputFile"]["error"]== UPLOAD_ERR_OK
	&& isset($_POST['directory'])) {
	
    $UploadDirectory    = $_POST['directory'];
   
    //Is file size is less than allowed size.
    if ($_FILES["inputFile"]["size"] > 5242880) {
        echo("fileSize");
    }
   
    //allowed file type Server side check
    switch(strtolower($_FILES['inputFile']['type']))
        {
            //allowed file types
            case 'image/png':
            case 'image/gif':
            case 'image/jpeg':
            case 'image/pjpeg':
            case 'image/bmp':
            case 'text/plain':
            case 'text/xml':
            break;
            default:
            echo('fileType');
    }

    $oldmask = umask(0);
    if ( ! is_dir($UploadDirectory)) {
    	mkdir($UploadDirectory, 0777, true);
    }
    
    if(move_uploaded_file($_FILES['inputFile']['tmp_name'], $UploadDirectory.'/'.$_FILES['inputFile']['name'] ))
       {
       echo('uploadOK');
    }else{
        echo('uploadKO');
    }   
    umask($oldmask);
}
else
{
    echo('uploadKO');
}