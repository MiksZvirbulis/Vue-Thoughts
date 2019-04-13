<?php
if (!defined('IN_APP')) http_response_code(403);

function hasAccess($token, $targetUserId, $thoughtId = false) {
    global $db;

    $findUserQuery = $db->prepare("SELECT `id` FROM `users` WHERE `hash` = :token AND `id` = :id");
    $findUserQuery->execute([
        ':token' => $token,
        ':id' => $targetUserId
    ]);

    if ($findUserQuery->rowCount() === 0) {
        return false;
    } else {
        if ($thoughtId !== false) {
            $findThoughtQuery = $db->prepare("SELECT `id` FROM `thoughts` WHERE `id` = :id AND `userId` = :userId");
            $findThoughtQuery->execute([
                ':id' => $thoughtId,
                ':userId' => $targetUserId
            ]);

            if ($findThoughtQuery->rowCount() === 0) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}