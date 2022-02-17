<?php

$response = array(
    'data' => 'hello',
    'data-dos' => 'world',
);

$response = [
    'code' => 200,
    'msg' => 'success',
    'data' => [
        'data-1' => 'xxxxx',
        'data-2' => 'yyyyy',
    ]
];
echo json_encode($response, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
