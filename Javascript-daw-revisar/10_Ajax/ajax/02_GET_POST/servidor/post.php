<?php

if(($_POST["nombre"])&&($_POST["telefono"])&&($_POST["ciudad"])&&($_POST["anio"]))
{
    
    $cadena=$_POST["nombre"] ."-".$_POST["telefono"]."-".$_POST["ciudad"]."-".$_POST["anio"];
    echo "Se insertado correctamente a " . $cadena;
    
    
}
else
{
    echo "Datos incompletos";
}

?>