<?php
if (!defined('IN_APP')) http_response_code(403);

$user = json_decode(file_get_contents('php://input'));

if (!$user) {
    http_response_code(204);
} else {
    include_once('./functions/hashPassword.php');

    $findUserQuery = $db->prepare('SELECT `id` FROM `users` WHERE `id` = :userId AND `hash` = :hash');
    $findUserQuery->execute(array(
        ':userId' => $user->userId,
        ':hash' => $user->token
    ));

    if ($findUserQuery->rowCount() === 0) {
        http_response_code(204);
    } else {
        http_response_code(200);
    }
}