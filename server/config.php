<?php
# Settings
$config = (object) [
    # Debug Mode - true/false
    'DEBUG' => true,
    # Route folder name in CURRENT directory
    'ROUTES_DIR_NAME' => 'routes',
    # Database access information
    'DB_HOST' => 'localhost',
    'DB_USER' => 'miks_thoughts',
    'DB_NAME' => 'miks_thoughts',
    'DB_PASSWORD' => '',
    'DB_CHARSET' => 'latin1'
];

# Error Reporting
if ($config->DEBUG === true) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

# Connecting to database - no need to touch
$dsn = "mysql:host=$config->DB_HOST;dbname=$config->DB_NAME;charset=$config->DB_CHARSET";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];
try {
    $db = new PDO($dsn, $config->DB_USER, $config->DB_PASSWORD, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

define('IN_APP', true);