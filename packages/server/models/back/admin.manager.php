<?php
//require once de model.php
require_once ".\models\Model.php";


class AdminManager extends Model {
    public function getPasswordUser ($login){
        $req= 'SELECT * FROM administrateur WHERE login = :login';
        $stmt = $this->getDB()->prepare($req);
        $stmt->bindValue(":login",$login,PDO::PARAM_STR);
        $stmt->execute();
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->closeCursor();
        return $admin['password'];

    }
    public function isConnexionValid ($login,$password) {
       $passwordDB = $this->getPasswordUser($login); 
       return password_verify($password, $passwordDB);


    }



}