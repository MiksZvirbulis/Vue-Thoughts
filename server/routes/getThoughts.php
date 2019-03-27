<?php
$thoughtsQuery = $db->prepare('SELECT * FROM `thoughts`');
$thoughtsQuery->execute();

if ($thoughtsQuery === false) {
    http_response_code(204);
} else {
    $thoughtsResults = $thoughtsQuery->fetchAll();
    echo json_encode($thoughtsResults);
    http_response_code(200);
}
