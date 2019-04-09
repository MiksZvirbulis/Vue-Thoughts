<?php
if (!defined('IN_APP')) http_response_code(403);

$user = json_decode(file_get_contents('php://input'));

if (!$user) {
    http_response_code(204);
} else {
    include_once('./functions/hashPassword.php');

    $findUserQuery = $db->prepare('SELECT `hash`, `id` FROM `users` WHERE `email` = :email');
    $findUserQuery->execute(array(
        ':email' => $user->email
    ));

    if ($findUserQuery->rowCount() === 0) {
        http_response_code(204);
    } else {
        $foundUser = $findUserQuery->fetch();
        $checkPassword = hashPassword($user->password, $foundUser['hash']);
    
        if ($checkPassword === false) {
            http_response_code(401);
        } else {
            echo json_encode([
                'userId' => $foundUser['id'],
                'token' => $foundUser['hash']
            ]);
            http_response_code(200);
        }
    }
}