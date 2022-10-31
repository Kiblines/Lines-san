<?php
//L'index.php sera l'interface entre le client et le serveur 
define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") .
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

// require sur api.controller.php
require_once("controllers/front/API.controller.php");
require_once("controllers/back/admin.controller.php");
$apiController = new Apicontroller();
$adminController = new AdminController();


try {
    if (empty($_GET['page'])) {
        throw new Exception("La page n'existe pas");
    } else {
        $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL));
        if (empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
        switch ($url[0]) {
            case "front":
                switch ($url[1]) {
                    case "livres":
                        $apiController->getLivres();
                        break;
                        case "livre":
                            if(empty($url[2])) throw new Exception ("L'identifiant du livre est manquant");
                            $apiController -> getLivre($url[2]);
                            break;

                    case "auteur":
                                    $apiController->getAuteur();
                                    break;
                                case "editeur":
                                    $apiController->getEditeur();
                                    break;
                                default:
                                    throw new Exception("La page n'existe pas");
                            }
                            break;
                        case "back":
                            switch ($url[1]) {
                                case "login":
                                    $adminController->getPageLogin();
                                    break;
                                default:
                                    throw new Exception("La page n'existe pas");
                                    
                            }
                           
                            
                        default:
                            throw new Exception("La page n'existe pas");
                    }
                }
            } catch (Exception $e) {
                $msg = $e->getMessage();
                echo $msg;
            }
