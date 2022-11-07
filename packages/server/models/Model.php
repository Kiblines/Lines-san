<?php
//pdo avec error mode exception
abstract class Model
{

    private static $pdo;
    private static function setDB()
    {
        self::$pdo = new PDO('mysql:host=localhost;dbname=jap;charset=utf8', 'lines', 'WAiieFfD3gz8WeX1yknq', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
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
