<?php
class Securite {
    public static function secureHTML($string){
        return htmlspecialchars($string, ENT_QUOTES, 'UTF-8', false);

    }

    public static function verifAccessSession (){
        return (!empty($_SESSION['access']) && $_SESSION['access'] == "admin");
    }
}

?>