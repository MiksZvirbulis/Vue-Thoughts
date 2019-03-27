<?php
http_response_code(200);
$thought = json_decode(file_get_contents('php://input'));

if (empty($thought) || !$thought) {
    echo "NO_PAYLOAD";
    http_response_code(204);
} else {
    $addThoughtQuery = $db->prepare('INSERT INTO `thoughts` (`title`, `content`, `date`) VALUES (:title, :content, :date)');
    $addThoughtQuery->execute(array(
        ':title' => $thought->title,
        ':content' => $thought->content,
        ':date' => $thought->date
    ));

    if ($addThoughtQuery === false) {
        echo "QUERY_FAILED";
        http_response_code(204);
    } else {
        # $thoughtId = $db->lastInsertId();
        echo "SUCCESS";
        http_response_code(200);
    }
}