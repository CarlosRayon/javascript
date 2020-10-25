<?php

header('Content-Type: Text/xml'); //Indicamos que vamos a pasar xml

$respuestaXML = "<?xml version=\"1.0\" encoding=\"utf-8\"?>"; //Vamos componiendo el xml que queremos pasar

$respuestaXML.="<personas>";
    $respuestaXML .= "<persona>";
        $respuestaXML .= "<nombre>Carlos</nombre>";
        $respuestaXML .= "<telefono>63678365</telefono>";
        $respuestaXML .= "<ciudad>Mexico</ciudad>";
        $respuestaXML .= "<anio>1992</anio>";
    $respuestaXML .= "</persona>";

    $respuestaXML .= "<persona>";
        $respuestaXML .= "<nombre>Ines</nombre>";
        $respuestaXML .= "<telefono>63678365</telefono>";
        $respuestaXML .= "<ciudad>Sanvi</ciudad>";
        $respuestaXML .= "<anio>1992</anio>";
    $respuestaXML .= "</persona>";
    
$respuestaXML.="</personas>";
echo $respuestaXML;
?>