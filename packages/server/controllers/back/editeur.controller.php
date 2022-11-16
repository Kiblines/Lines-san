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
    
    require_once "views/editeurVisualisation.view.php";
    } else {
    throw new Exception("Vous n'avez pas le droit d'être là ! ");
    }


}
public function suppression () {
    if(Securite::verifAccessSession()){
        $this->editeurManager->deleteEditeur((int)Securite::secureHTML($_POST['editeur_id']));
        } else {
        throw new Exception("Vous n'avez pas le droit d'être là ! ");
        }
    
    
    }

public function creation () {
    if(Securite::verifAccessSession()){
        
        
        require_once "views/editeurCreation.view.php";
        } else {
        throw new Exception("Police que faites vous là ? ");
        }


}
public function creationValidation () {
    if(Securite::verifAccessSession()){
        $libelle = Securite::secureHTML($_POST['editeur_libelle']);
        $pays = Securite::secureHTML($_POST['editeur_pays']);
        $idEditeur= $this->editeurManager->addEditeur($libelle, $pays);
       
        header("Location: ".URL."back/editeur/visualisation");
        
        
        } else {
        throw new Exception("Police que faites vous là ? ");
        }
    
    
    }
    
}