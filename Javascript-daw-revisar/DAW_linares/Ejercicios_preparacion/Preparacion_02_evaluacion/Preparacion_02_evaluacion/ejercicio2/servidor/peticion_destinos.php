<?php

/* Recibe: Parámetro GET con el origen del vuelo para el cual quiero recibir destinos.
 * Devuelve: Fichero XML con un listado de aeropuertos.
 *
 * Si existe el aeropuerto de origen generamos un fichero XML con el siguiente formato:
 *  <aeropuertos>	
 *  <aeropuerto>
 * 		<nombre>John F Kennedy Intl</nombre>
 * 		<ciudad>New York</ciudad>
 * 		<pais>United States</pais>
 * 		<iata>JFK</iata>
 *  </aeropuerto>
 * 	<aeropuerto>
 * 		<nombre>Santander</nombre>
 * 		<ciudad>Santander</ciudad>
 * 		<pais>Spain</pais>
 * 		<iata>SDR</iata>
 *  </aeropuerto>  
 * </aeropuertos>
 * 
 * En caso contrario generamos un fichero XML con el siguiente formato:
 * 	 <aeropuertos>
 * 		VACIO
 *  </aeropuertos>
 * 
 */

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header("Content-Type: text/xml"); 


$ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";

$errorxml="<aeropuertos>VACIO</aeropuertos>";	
	
$servidor = "localhost";
$basedatos = "ddwec_repaso2ev_ejercicio2";
$usuario = "ddwec_repaso2ev_ejercicio2";	
$password = "ddwec_repaso2ev_ejercicio2";
        
        
        
if(isset($_GET["origen"])){
    try{
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        $conexion = new PDO('mysql:host='.$servidor.';dbname='.$basedatos,$usuario,$password, $opciones);

        //Configura el nivel de error
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $p){
        echo "<p>Error al conectar ".$p->getMessage()."</p>";
        exit();
    }
    
    try{
         $ficheroxml.="<aeropuertos>";
         $sql="select * from airports where Name ='".$_GET["origen"]."'";
         
         $resultado=$conexion->query($sql);
         $aeropuerto=$resultado->fetch(PDO::FETCH_ASSOC);
         if($aeropuerto!=null){
            $id=$aeropuerto["ID"];
            $sql2="select * from routes where  `Source Airport ID` = ".$id;
  
            $encontrado=false;
             foreach($conexion->query($sql2) as $fila){             
                 $encontrado=true;
                 $idDestino=$fila["Destination Airport ID"];
                 $sql3="select * from airports where ID = '".$idDestino."'";
                 $resultado=$conexion->query($sql3);
                 $aeropuertoDestino=$resultado->fetch(PDO::FETCH_ASSOC);
                 
                $nombre=$aeropuertoDestino["Name"];
                $ciudad=$aeropuertoDestino["City"];
                $pais=$aeropuertoDestino["Country"];	
                $iata=$aeropuertoDestino["IATA"];

                $ficheroxml.="<aeropuerto>\n";
                    $ficheroxml.="\t<nombre>".$nombre."</nombre>\n";
                    $ficheroxml.="\t<ciudad>".$ciudad."</ciudad>\n";	
                    $ficheroxml.="\t<pais>".$pais."</pais>\n";			
                    $ficheroxml.="\t<iata>".$iata."</iata>\n";			
                $ficheroxml.="</aeropuerto>";                 
                 
                 
             }
             if($encontrado==false){
                 $ficheroxml.="VACIO"; 
             }
         }
         else{
            $ficheroxml.="VACIO";          
         }       
    }
    catch (Exception $ex) {
           throw new Exception("No se ha podido recuperar la lista: "+$ex);
     }
      finally{
           $conexion=null;  
           $ficheroxml.="</aeropuertos>";
          
    }
}
else{
    $ficheroxml.=$errorxml;
}
        
echo $ficheroxml;
            
  
?>