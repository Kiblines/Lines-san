<!-- contenu de la page en temporisation -->
<?php ob_start(); ?>
caca
<?php
$content = ob_get_clean();
$titre = "Page de login";
require "views/commons/template.php";



