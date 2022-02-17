<?php


// print_r($_POST);

echo json_encode(
    [
        'code' => 200,
        'msg' => 'success',
        'data' => [
            'data-1' => 'xxxxx',
            'data-2' => 'yyyyy',
        ]
    ]
);
echo json_encode(['status' => true, 'code' => 'ok', 'msg' => 'all ok']);
// echo json_encode(['status' => true, 'code' => 'ok', 'msg' => 'all ok'],JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
