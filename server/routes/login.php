<?php
if (!defined('IN_APP')) http_response_code(403);

$user = json_decode(file_get_contents('php://input'));

if (!$user) {
    http_response_code(204);
    echo "NO_PAYLOAD";
} else {
    include_once('./functions/hashPassword.php');

    $findUserQuery = $db->prepare('SELECT `hash`, `id` FROM `users` WHERE `email` = :email');
    $findUserQuery->execute(array(
        ':email' => $user->email
    ));

    if ($findUserQuery->rowCount() === 0) {
        http_response_code(401);
        echo "INCORRECT_CREDENTIALS";
    } else {
        $foundUser = $findUserQuery->fetch();
        $checkPassword = hashPassword($user->password, $foundUser['hash']);
    
        if ($checkPassword === false) {
            http_response_code(401);
            echo "INCORRECT_CREDENTIALS";
        } else {
            $updateUserQuery = $db->prepare('UPDATE `users` SET `lastAuth` = :lastAuth WHERE `email` = :email');
            $updateUserQuery->execute(array(
                ':lastAuth' => $user->authTime,
                ':email' => $user->email
            ));
            http_response_code(200);
            echo json_encode([
                'userId' => $foundUser['id'],
                'token' => $foundUser['hash']
            ]);
        }
    }
}