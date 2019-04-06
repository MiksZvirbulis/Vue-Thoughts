<?php
if (!defined('IN_APP')) http_response_code(403);

$thought = json_decode(file_get_contents('php://input'));

if (!$thought) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    $addThoughtQuery = $db->prepare('INSERT INTO `thoughts` (`title`, `content`, `date`, `lastUpdated`) VALUES (:title, :content, :date, :last)');
    $addThoughtQuery->execute(array(
        ':title' => $thought->title,
        ':content' => $thought->content,
        ':date' => $thought->date,
        ':last' => $thought->lastUpdated
    ));

    if ($addThoughtQuery === false) {
        echo "QUERY_FAILED";
        http_response_code(204);
    } else {
        echo $db->lastInsertId();
        http_response_code(200);
    }
}