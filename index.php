<?php
//L'index.php sera l'interface entre le client et le serveur 
define("URL", str_replace("index.php", "", (isset($_SERVER['HTTPS']) ? "https" : "http") .
    "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

// require sur api.controller.php
require_once("controllers/front/API.controller.php");
$apiController = new Apicontroller();


try {
    if (empty($_GET['page'])) {
        throw new Exception("La page n'existe pas");
    } else {
        $url = explode("/", filter_var($_GET['page'], FILTER_SANITIZE_URL));
        if (empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
        switch ($url[0]) {
            case "front":
                switch ($url[1]) {
                    case "livre":
                        $apiController->getLivres();
                        break;


                    case "genre":
                        $apiController->getGenre($url[2]);
                        break;

                    case "auteur":
                        $apiController->getAuteur($url[2]);
                        break;
                    case "editeur":
                        $apiController->getEditeur($url[2]);
                        break;
                    default:
                        throw new Exception("La page n'existe pas");
                }
                break;
            case "back":
                echo "page back end demandée";
                break;
            default:
                throw new Exception("La page n'existe pas");
        }
    }
} catch (Exception $e) {
    $msg = $e->getMessage();
    echo $msg;
}
