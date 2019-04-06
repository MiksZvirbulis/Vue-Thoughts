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

    if ($findUserQuery->rowCount() === 0) {
        echo "USER_NOT_FOUND";
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
            echo $db->lastInsertId();
            http_response_code(200);
        }
    }
}