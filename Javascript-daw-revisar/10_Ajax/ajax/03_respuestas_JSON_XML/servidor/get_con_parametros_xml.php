<?php

header('Content-Type: Text/xml');//Indicamos que vamos a pasar xml RECUERDA!!! IMPORTANTE PONER PARA EVITAR ERRORES AL RECIBIR LOS DATOS

$respuestaXML="<?xml version=\"1.0\" encoding=\"utf-8\"?>";//Vamos componiendo el xml que queremos pasar
$respuestaXML.="<persona>";


if(isset($_GET["id"]))
{
    if($_GET["id"]=="1")
    {
        $respuestaXML.="<nombre>Carlos</nombre>";
        $respuestaXML.="<telefono>63678365</telefono>";
        $respuestaXML.="<ciudad>Mexico</ciudad>";
        $respuestaXML.="<anio>1992</anio>";      
        
    }
    else if($_GET["id"]=="2")
    {
        $respuestaXML.="<nombre>Ines</nombre>";
        $respuestaXML.="<telefono>63678365</telefono>";
        $respuestaXML.="<ciudad>Sanvi</ciudad>";
        $respuestaXML.="<anio>1992</anio>"; 
            
    }
}

$respuestaXML.="</persona>";
echo $respuestaXML;



?>