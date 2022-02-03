<?php
session_start();
var_dump($_SESSION);

echo"<h1>HOLA".$_SESSION["nombre"]."</h1>";


?>