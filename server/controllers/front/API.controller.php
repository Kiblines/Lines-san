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
        $tabResultat = $this->dataLivres($dataLivre);
        Model::sendJson($tabResultat);
        
    }
    private function dataLivres($lignes){
        $tab = [];
        
        foreach($lignes as $ligne){
            if(!array_key_exists($ligne['livre_id'],$tab)){
                $tab[$ligne['livre_id']] = [
                    "id" => $ligne['livre_id'],
                    "isbn" => $ligne['livre_isbn'],
                    "titre" => $ligne['livre_titre'],
                    "image" => $ligne['livre_img'],
                    "prix" => $ligne['livre_prix'],
                    "page" => $ligne['livre_page'],
                    "langue" => $ligne['livre_langue'],
                    "genre" => $ligne['livre_genre'],

                    "editeur" => [
                        "idEditeur" => $ligne['editeur_id'],
                        "libelleEditeur" => $ligne['editeur_libelle'],
                        "paysEditeur" => $ligne['editeur_pays']
                    ]
                ];
            }
           
            $tab[$ligne['livre_id']]['auteur'][] = [
                "idAuteur" => $ligne['auteur_id'],
                "nomAuteur" => $ligne['auteur_nom'],
                "nomPays" => $ligne['auteur_nationalite']

            ];
        }

        return $tab;
    }
//         $data = [];
//         foreach($lines as $line){
//             $data[] = [
//                 "id" => $line["livre_id"],
//                 "titre" => $line["livre_isbn"],
//                 "image" => $line["livre_img"],
//                 "prix" => $line["livre_prix"],
//                 "page" => $line["livre_page"],
//                 "langue" => $line["livre_langue"],
//                 "genre" => $line["livre_genre"],
//             ];
// //             livre_id	1
// // livre_isbn	154545548
// // livre_titre	"Dragon ball tome 1"
// // livre_img	"dbz.img"
// // livre_prix	7
// // livre_page	156
// // livre_langue	"FR"
// // livre_genre	"manga"
// // editeur_id	1
// // editeur_libelle	"Kana"
// // editeur_pays	"Japon"
// // auteur_id	3
// // auteur_nom	"Akira Toriyama\r\n\r\n"
// // auteur_nationalite	"Japonais"
//         }
//         echo "<pre>";
//         print_r($data);
//         echo "</pre>";
//         // return $data;
//     }

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
