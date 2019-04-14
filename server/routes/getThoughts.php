<?php
if (!defined('IN_APP')) http_response_code(403);

if (!isset($_SERVER['HTTP_TOKEN'])) {
    http_response_code(403);
} else {
    require_once("./functions/hasAccess.php");

    if (hasAccess($_SERVER['HTTP_TOKEN'], $userId)) {
        $thoughtsQuery = $db->prepare('SELECT * FROM `thoughts` WHERE `userId` = :userId');
        $thoughtsQuery->execute([
            ':userId' => $userId
        ]);

        if ($thoughtsQuery === false) {
            http_response_code(204);
        } else {
            $thoughtsResults = $thoughtsQuery->fetchAll();
            echo json_encode($thoughtsResults);
            http_response_code(200);
        }
    } else {
        http_response_code(403);
    }
}