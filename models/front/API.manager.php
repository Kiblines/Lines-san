<?php
require_once 'models/front/Model.php';

class APIManager extends Model
{
    public function getLivres()
    {
        $req = "SELECT * FROM livre 
        INNER JOIN auteur ON livre.auteur_id = auteur.id
        INNER JOIN editeur ON livre.editeur_id = editeur.id
        
        ORDER BY titre";



        $result = $this->getDB()->query($req);
        $livres = $result->fetchAll();

        $statement = $this->getDB()->prepare($req);
        $statement->execute();
        $livres = $statement->fetchAll(PDO::FETCH_ASSOC);
        $statement->closeCursor();
        return $livres;
    }
}
