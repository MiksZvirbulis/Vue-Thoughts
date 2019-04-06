<?php
if (!defined('IN_APP')) http_response_code(403);

$thought = json_decode(file_get_contents('php://input'));

if (!$thought) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else if ($thoughtId === false) {
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
        $updateThoughtQuery = $db->prepare('UPDATE `thoughts` SET `title` = :title, `lastUpdated` = :last, `content` = :content WHERE `id` = :id');
        $updateThoughtQuery->execute(array(
            ':title' => $thought->title,
            ':last' => $thought->lastUpdated,
            ':content' => $thought->content,
            ':id' => $thoughtId,
        ));
        if ($updateThoughtQuery === false) {
            echo "QUERY_FAILED";
            http_response_code(204);
        } else {
            echo "SUCCESS";
            http_response_code(200);
        }
    }
}