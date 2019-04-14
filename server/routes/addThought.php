<?php
if (!defined('IN_APP')) http_response_code(403);

$thought = json_decode(file_get_contents('php://input'));



if (!isset($_SERVER['HTTP_TOKEN'])) {
    http_response_code(403);
} else if (!$thought) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    require_once("./functions/hasAccess.php");

    if (hasAccess($_SERVER['HTTP_TOKEN'], $thought->userId)) {
        $addThoughtQuery = $db->prepare('INSERT INTO `thoughts` (`title`, `content`, `date`, `lastUpdated`, `userId`) VALUES (:title, :content, :date, :last, :userId)');
        $addThoughtQuery->execute([
            ':title' => $thought->title,
            ':content' => $thought->content,
            ':date' => $thought->date,
            ':last' => $thought->lastUpdated,
            ':userId' => $thought->userId
        ]);

        if ($addThoughtQuery === false) {
            echo "QUERY_FAILED";
            http_response_code(204);
        } else {
            echo $db->lastInsertId();
            http_response_code(200);
        }
    } else {
        http_response_code(403);
    }
}