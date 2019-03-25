<?php
http_response_code(200);
$payload = file_get_contents('php://input');
echo var_dump($payload);