
<?php

	/* Recibe: Parámetro POST con el nombre del aeropuerto origen.
                   Parámetro POST con el nombre del aeropuerto destino.
	 * Devuelve: Fichero JSON que representa un objeto con información del aeropuerto:
         *
	 *  { "aerolinea":"Ryanair",
   	 *  	  "pais":"Ireland",
         *     "paradas":"0"
 	 *	}
	 *  
	 */


    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 

    $servidor = "localhost";
    $basedatos = "ddwec_repaso2ev_ejercicio2";
    $usuario = "ddwec_repaso2ev_ejercicio2";	
    $password = "ddwec_repaso2ev_ejercicio2";

    $salida=array("aerolinea"=>"ERROR");
    
    if((isset($_POST["origen"]))&&(isset($_POST["destino"]))){
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
               $sql="select * from airports where Name ='".$_POST["origen"]."'"; 
                $resultado=$conexion->query($sql);
                $aeropuertoOrigen=$resultado->fetch(PDO::FETCH_ASSOC);
                if($aeropuertoOrigen!=null){
                    $idOrigen=$aeropuertoOrigen["ID"];
                    $sql2="select * from airports where Name ='".$_POST["destino"]."'";	
                    $resultado=$conexion->query($sql2);
                    $aeropuertoDestino=$resultado->fetch(PDO::FETCH_ASSOC);
                     if($aeropuertoDestino!=null){
                         $idDestino=$aeropuertoDestino["ID"];
                         $sql3="select * from routes where  `Source Airport ID` = ".$idOrigen." AND  `Destination Airport ID` =".$idDestino;	
                         $resultado=$conexion->query($sql3);
                          $ruta=$resultado->fetch(PDO::FETCH_ASSOC);
                          if($ruta!=null){
                                $compID=$ruta["Airline ID"];
                                $paradas=$ruta["Stops"];   
                                $sql4="select * from airlines where  ID = ".$compID;
                                 $resultado=$conexion->query($sql4);
                                 $aerolinea=$resultado->fetch(PDO::FETCH_ASSOC);
                                 if($aerolinea!=null){
                                      $nombre=$aerolinea["Name"];
                                      $pais=$aerolinea["Country"];
                                        $salida = array("aerolinea"=>$nombre,"pais"=>$pais,"paradas"=>$paradas);
                                 }
                         
                         }     
                    } 
                 } 
            }
            catch (Exception $ex) {
                throw new Exception("No se ha podido recuperar la lista: "+$ex);
            }
            finally{
                $conexion=null;        
            }   
    }
    
    echo json_encode($salida);
    
    
    
    
?>