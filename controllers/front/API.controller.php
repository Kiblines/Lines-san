<?php
require_once 'models/front/API.manager.php';
require_once 'models\Model.php';


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
        Model::sendJson($this->dataLivres($livres));
    }

    public function getLivre($idLivre)
    {
     
        $dataLivre = $this->apiManager->getDBLivre($idLivre);
        Model::sendJson($dataLivre);
        
    }
    private function dataLivres($lines){
        $data = [];
        foreach($lines as $line){
            $data[] = [
                "id" => $line["livre_id"],
                "titre" => $line["titre"],
                "date" => $line["date_parution"],
                "resume" => $line["resume"],
                "editeur" => $line["nom"],
                "auteur" => $line["nom_auteur"]
            ];
        }
        return $data;
    }

    public function getAuteur()
    {

        $dataAuteur = $this->apiManager->getAuteur();
        Model::sendJSON($dataAuteur);
    }
    public function getEditeur()
    {

        $dataEditeur = $this->apiManager->getEditeur();
        Model::sendJSON($dataEditeur);
        
    }
   
}
