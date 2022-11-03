<?php
require_once "models/Model.php";

class APIManager extends Model{
    public function getLivres(){
        $req = "SELECT * 
        from livre a inner join editeur f on f.editeur_id = a.editeur_id
        inner join livre_auteur ac on ac.livre_id = a.livre_id
        inner join auteur c on c.auteur_id = ac.auteur_id
        ";
        $stmt = $this->getDb()->prepare($req);
        $stmt->execute();
        $livres = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $livres;
    }
    public function getDBLivre($idLivre){
        $req = "SELECT * 
        from livre a inner join editeur f on f.editeur_id = a.editeur_id
        inner join livre_auteur ac on ac.livre_id = a.livre_id
        inner join auteur c on c.auteur_id = ac.auteur_id
        where a.livre_id = :idLivre
        ";
        $stmt = $this->getDb()->prepare($req);
        $stmt->bindValue(":idLivre", $idLivre, PDO::PARAM_INT);
        $stmt->execute();
        $dataLivre = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $dataLivre;

    }
    public function getAuteur(){
        $req = "SELECT * 
        from auteur 
        ";
        $stmt = $this->getDb()->prepare($req);
     
        $stmt->execute();
        $dataAuteur = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $dataAuteur;
    } 
    public function getEditeur(){
        $req = "SELECT * 
        from editeur 
        ";
        $stmt = $this->getDb()->prepare($req);
        
        $stmt->execute();
        $dataEditeur = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $dataEditeur;
    }
}