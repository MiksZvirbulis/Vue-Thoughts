<?php
if ($thoughtId === false) {
    echo "NO_ID";
    http_response_code(204);
} else {
    $findThoughtQuery = $db->prepare('SELECT `id` FROM `thoughts` WHERE `id` = :id');
    $findThoughtQuery->execute(array(
        ':id' => $thoughtId
    ));

    if ($findThoughtQuery === false) {
        echo "QUERY_FAILED";
        http_response_code(204);
    } else if($findThoughtQuery->rowCount() === 0) {
        echo "NOT_FOUND";
        http_response_code(404);
    } else {
        # $thoughtId = $db->lastInsertId();
        $deleteThoughtQuery = $db->prepare('DELETE FROM `thoughts` WHERE `id` = :id');
        $deleteThoughtQuery->execute(array(
            ':id' => $thoughtId
        ));
        if ($deleteThoughtQuery === false) {
            echo "QUERY_FAILED";
            http_response_code(204);
        } else {
            echo "SUCCESS";
            http_response_code(200);
        }
    }
}