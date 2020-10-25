<?php

$response = array(
'data' => 'hello',
'data-dos' => 'world',
);

echo json_encode($response, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
