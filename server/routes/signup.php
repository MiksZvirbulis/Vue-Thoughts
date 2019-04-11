<?php
if (!defined('IN_APP')) http_response_code(403);

$user = json_decode(file_get_contents('php://input'));

if (!$user) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    include_once('./functions/hashPassword.php');

    $findUserQuery = $db->prepare('SELECT `id` FROM `users` WHERE `email` = :email');
    $findUserQuery->execute(array(
        ':email' => $user->email
    ));

    if ($findUserQuery->rowCount() >= 1) {
        echo "USER_EXISTS";
        http_response_code(204);
    } else {
        $addUserQuery = $db->prepare('INSERT INTO `users` (`email`, `hash`, `signedUpDate`) VALUES (:email, :hash, :date)');
        $addUserQuery->execute(array(
            ':email' => $user->email,
            ':hash' => hashPassword($user->password),
            ':date' => $user->signedUpDate,
        ));
    
        if ($addUserQuery === false) {
            echo "QUERY_FAILED";
            http_response_code(204);
        } else {
            http_response_code(200);
        }
    }
}