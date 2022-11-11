<?php
require_once "./controllers/back/Securite.class.php";
require_once "./models/back/livres.manager.php";

class LivresController{
    private $livresManager;

    public function __construct(){
        $this->livresManager = new LivresManager();
    }

    public function visualisation(){
        if(Securite::verifAccessSession()){
            $livres = $this->livresManager->getLivres();
            
            require_once "views/livresVisualisation.view.php";
        } else {
            throw new Exception("Vous n'avez pas le droit d'être là ! ");
        }
    }
}