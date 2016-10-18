<?php
session_start();

unset($_SESSION['connected']);

echo('./examples.php');
?>