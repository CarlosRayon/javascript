<?php
/* For get request */
// echo json_encode(['status' => true, 'code' => 'ok', 'msg' => 'all ok']);

/* For post request */
$string = file_get_contents('php://input'); /* Tendremos string de un json que codificamos a array */
$input = json_decode(file_get_contents('php://input'), true);
print_r($input);
