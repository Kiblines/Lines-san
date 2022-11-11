<?php
require_once "./controllers/back/Securite.class.php";
require_once "./models/back/editeur.manager.php";

class EditeurController{
    private $editeurManager;
public function __construct(){
    $this->editeurManager = new EditeurManager();


}

public function visualisation () {
 if(Securite::verifAccessSession()){
    $editeur = $this->editeurManager->getEditeur();
    print_r($editeur);
    require_once "views/editeurVisualisation.view.php";
    } else {
    throw new Exception("Vous n'avez pas le droit d'être là ! ");
    }


}


}