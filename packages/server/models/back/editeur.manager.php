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

 public function deleteEditeur ($editeur_id) {
    $sql = "DELETE FROM editeur WHERE editeur_id = :editeur_id";
    $stmt = $this->getDB()->prepare($sql);
    $stmt->bindValue(":editeur_id", $editeur_id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->closeCursor();
    return $stmt;
 }

}
