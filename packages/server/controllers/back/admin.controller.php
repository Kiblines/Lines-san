<?php

require "./controllers/back/Securite.class.php";
require "./models/back/admin.manager.php";

class AdminController{
    private $adminManager;


    public function __construct()
    {
        $this->adminManager = new AdminManager();
    }

    public function getPageLogin(){
        
         require_once "views/login.view.php";
    }
    public function connexion(){
        if(!empty($_POST['login']) && !empty($_POST['password'])){
            $login = Securite::secureHTML($_POST['login']);
            $password = Securite::secureHTML($_POST['password']);
            if($this->adminManager->isConnexionValid($login,$password)){
                $_SESSION['access'] = "admin";
                header('Location: '.URL."back/admin");
            } else {
                header('Location: '.URL."back/login");
            }
        }
    }

    public function getAccueilAdmin(){
        if(Securite::verifAccessSession()){
            require "views/accueilAdmin.view.php";
        } else {
            header('Location: '.URL."back/login");
        } 
    }

    public function deconnexion (){
        session_destroy();
        header('Location: '.URL."back/login");
    }
}