<?php
require_once "models/model.php";
class EditeurManager extends Model {
    public function getEditeur () {
        $sql = "SELECT * FROM editeur";
        $stmt = $this->getDB()->prepare($sql);
        $stmt->execute();
        $editeur = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $editeur;
        
    }



}
