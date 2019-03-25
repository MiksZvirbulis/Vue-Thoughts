<?php
# Setting headers - leave me as I am
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

# Dynamically sorting path from request - leave me as I am
$pathToHere = explode("/", getcwd());
$requestPath = explode("/", $_SERVER['REQUEST_URI']);
$path = array_values(array_diff($requestPath, $pathToHere));
$type = $_SERVER['REQUEST_METHOD'];
$foundRoute = false;

# Settings - you can adjust me
$routeFolderName = "routes";

switch($path[0]) {
    case "list":
    if ($type === "GET") {
        $foundRoute = true;
        include_once("./" . $routeFolderName . "/getList.php");
    }
    break;
    case "add":
    if ($type === "POST") {
        $foundRoute = true;
        include_once("./" . $routeFolderName . "/addThought.php");
    }
    break;
    default:
    $foundRoute = false;
    break;
}

if ($foundRoute === false) {
    http_response_code(404);
}