<?php
if (!defined('IN_APP')) http_response_code(403);

$user = json_decode(file_get_contents('php://input'));

if (!isset($_SERVER['HTTP_TOKEN'])) {
    http_response_code(403);
} else if (!isset($user) || $thoughtId === false) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    require_once("./functions/hasAccess.php");

    if (hasAccess($_SERVER['HTTP_TOKEN'], $user->userId, $thoughtId)) {

        $findThoughtQuery = $db->prepare('SELECT `id` FROM `thoughts` WHERE `id` = :id');
        $findThoughtQuery->execute([
            ':id' => $thoughtId
        ]);

        if ($findThoughtQuery === false) {
            echo "QUERY_FAILED";
            http_response_code(204);
        } else if($findThoughtQuery->rowCount() === 0) {
            echo "NOT_FOUND";
            http_response_code(404);
        } else {
            $deleteThoughtQuery = $db->prepare('DELETE FROM `thoughts` WHERE `id` = :id');
            $deleteThoughtQuery->execute(array(
                ':id' => $thoughtId
            ));
            if ($deleteThoughtQuery === false) {
                echo "QUERY_FAILED";
                http_response_code(204);
            } else {
                http_response_code(200);
            }
        }
    } else {
        http_response_code(403);
    }
}