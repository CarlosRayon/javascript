<?php

/* respuesta.php. Dado un id de pregunta, devuelve el id de respuesta correcta para la misma.
   * 
   * Recibe [GET]
   *    id-pregunta (cadena). Identificador de pregunta.
   * 
   * Devuelve [XML]
   *   Si no existe la pregunta:
   *            <respuesta>VACIO</respuesta>
   * 
   *   Si no existe la pregunta, el identificador de respuesta correcta para dicha pregunta
 *              <respuesta>130</respuesta>
 * 
 */

// Para que el navegador no haga cache (fecha de expiración menor a la actual)
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

header("Content-Type: text/xml"); 

// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "ddwec_ord1";
$usuario = "ddwec_ord1";	
$password = "ddwec_ord1";


$ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";

$errorxml="<respuesta>VACIO</respuesta>";

if(isset($_GET["id-pregunta"])){
        try{
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        $conexion = new PDO('mysql:host='.$servidor.';dbname='.$basedatos,$usuario,$password, $opciones);

         //Configura el nivel de error
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $p){
         echo "<p>Error al conectar ".$p->getMessage()."</p>";
          exit();
    }

    try{
       $sql="select * from respuestas where pregunta=".$_GET["id-pregunta"]." and correcta=true";
       $resultado=$conexion->query($sql);
       $respuesta=$resultado->fetch(PDO::FETCH_ASSOC);
       if($respuesta!=null){
         $ficheroxml.="<respuesta>".$respuesta["id"]."</respuesta>";   
       }
       else{
           $ficheroxml.=$errorxml;
       }
    }
    catch (Exception $ex) {
        throw new Exception("No se ha podido recuperar la lista: "+$ex);
    }
    finally{
        $conexion=null;        
    }      
}
else{
    $ficheroxml.=$errorxml;
}

echo $ficheroxml;