<?php

/* Para recuperar los datos tenemos que usar file_get_contents */
$string = file_get_contents('php://input'); /* Tendremos string de un json que codificamos a array */

$input = json_decode(file_get_contents('php://input'), true);

print_r($input);
