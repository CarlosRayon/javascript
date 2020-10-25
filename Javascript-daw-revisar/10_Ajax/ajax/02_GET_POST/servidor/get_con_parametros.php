<?php

if(isset($_GET["nombre"])&& ($_GET["nombre"]=="rayón") ){//La mandar por encodeURI NO hace falta reconvertir los caracteres (lo hace http)
    
    echo "Mi apellido es " . $_GET["nombre"] . "\n" ;//Puedo devolver  mismo valor mandado por metodo get 
}


if (isset($_GET["id"])) //Si paso como parametro el id por el metodo get mediante el objeto XMLHttpRequest
{   
    if($_GET["id"]=="1")
    {
        echo "Datos de usuario con id igual a 1";
    }
    else if($_GET["id"]=="2")
    {
        echo "Datos de usuario con id igual a 2";
    }
    else if($_GET["id"]=="3")
    {
        echo "Datos de usuario con id igual a 3";
    }
    else
    {
        echo "No coincide ningun id";
    }
    
}else{
    echo "Sin resultado";
}

