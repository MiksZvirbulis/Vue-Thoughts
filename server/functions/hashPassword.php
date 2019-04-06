<?php
if (!defined('IN_APP')) http_response_code(403);

function hashPassword($password, $hash = false) {
    if ($hash !== false) {
        // Check password against hash
        return password_verify($password, $hash);
    } else {
        // Create new hash
        return password_hash($password, PASSWORD_BCRYPT, [ 'cost' => 12 ]);
    }
}