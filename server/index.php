<?php
# Setting header for CORSs - leave me as I am
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: PUT, GET, POST, OPTIONS, DELETE");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}
# Requiring config
require_once("./config.php");

# Dynamically sorting path from request - leave me as I am
$pathToHere = explode("/", getcwd());
$requestPath = explode("/", $_SERVER['REQUEST_URI']);
$path = array_values(array_diff($requestPath, $pathToHere));
$type = $_SERVER['REQUEST_METHOD'];
$foundRoute = false;

if ($path) {
    switch($path[0]) {
        case "list":
        if ($type === "GET") {
            $foundRoute = true;
            include_once("./" . $config->ROUTES_DIR_NAME . "/getThoughts.php");
        }
        break;
        case "add":
        if ($type === "POST") {
            $foundRoute = true;
            include_once("./" . $config->ROUTES_DIR_NAME . "/addThought.php");
        }
        break;
        case "delete":
        if ($type === "DELETE") {
            $foundRoute = true;
            $thoughtId = (isset($path[1]) && is_numeric($path[1])) ? $path[1] : false;
            include_once("./" . $config->ROUTES_DIR_NAME . "/deleteThought.php");
        }
        break;
        case "update":
        if ($type === "PUT") {
            $foundRoute = true;
            $thoughtId = (isset($path[1]) && is_numeric($path[1])) ? $path[1] : false;
            include_once("./" . $config->ROUTES_DIR_NAME . "/updateThought.php");
        }
        break;
        case "signup":
        if ($type === "POST") {
            $foundRoute = true;
            include_once("./" . $config->ROUTES_DIR_NAME . "/signup.php");
        }
        break;
        case "login":
        if ($type === "POST") {
            $foundRoute = true;
            include_once("./" . $config->ROUTES_DIR_NAME . "/login.php");
        }
        break;
        default:
        $foundRoute = false;
        break;
    }
}

if ($foundRoute === false || $path === false) {
    http_response_code(404);
}