<?php ob_start(); ?>

<?php 
$content = ob_get_clean();
$titre = " Visualisation des éditeurs";
require "views/commons/template.php";