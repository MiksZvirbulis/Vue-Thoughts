<?php
$thoughtsQuery = $db->prepare('SELECT * FROM thoughts');
$thoughtsQuery->execute();
$thoughtsResults = $thoughtsQuery->fetchAll();
http_response_code(202);
echo json_encode($thoughtsResults);