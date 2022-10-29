<?php
require_once 'models/front/API.manager.php';


class Apicontroller
{

    private $apiManager;

    public function __construct()
    {
        $this->apiManager = new APIManager();
    }


    public function getLivres()
    {
        $livres = $this->apiManager->getLivres();
        echo "<pre>";
        print_r($livres);
        echo "</pre>";
    }

    public function getlivre($id)
    {

        echo "envoie des informations sur le livre " . $id . " demandées";
    }
    public function getAuteur($id)
    {

        echo "envoie des informations sur l'auteur " . $id . " demandées";
    }
    public function getEditeur($id)
    {

        echo "envoie des informations sur l'éditeur " . $id . " demandées";
    }
    public function getGenre($id)
    {

        echo "envoie des informations sur le genre " . $id . " demandées";
    }
}
