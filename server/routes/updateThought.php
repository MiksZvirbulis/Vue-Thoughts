<?php
if (!defined('IN_APP')) http_response_code(403);

$thought = json_decode(file_get_contents('php://input'));

if (!isset($_SERVER['HTTP_TOKEN'])) {
    http_response_code(403);
} else if (!isset($thought) || $thoughtId === false) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    require_once("./functions/hasAccess.php");

    if (hasAccess($_SERVER['HTTP_TOKEN'], $thought->userId, $thoughtId)) {
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
    } else {
        http_response_code(403);
    }
}