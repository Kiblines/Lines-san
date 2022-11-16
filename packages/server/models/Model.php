<?php
//pdo avec error mode exception
abstract class Model
{

    private static $pdo;
    private static function setDB()
    {
        //pdo try & catch
        try {
            self::$pdo = new PDO('mysql:host=localhost;dbname=jap;charset=utf8', 'lines', 'WAiieFfD3gz8WeX1yknq');
            self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Erreur de connexion : ' . $e->getMessage();
        }
    }


    protected function getDB()
    {
        if (self::$pdo === null) {
            self::setDB();
        }
        return self::$pdo;
    }
    public static function sendJSON ($info){
        header("Access-Control-Allow-Origin:*");
        header("Content-Type: application/json");
        echo json_encode($info);
        

    }
}
