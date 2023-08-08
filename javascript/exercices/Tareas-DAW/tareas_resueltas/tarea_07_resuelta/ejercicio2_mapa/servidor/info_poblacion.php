<?php

	// Para que el navegador no haga cache (fecha de expiración menor a la actual)
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	
	
	// Indicamos  al navegador que va a recibir contenido XML
	header("Content-Type: text/xml"); 
        
	
        /* Utilizar el fichero ejercicio2.sql incluído en la carpeta bd para crear 
	 *  la base de datos, usuario y tabla en tu servidor MySQL.
	 * Si fuera necesario modifica los datos de la configuración y adáptalos a tu entorno de trabajo. */
	
	// Configuración BASE DE DATOS MYSQL
	$servidor = "localhost";
	$basedatos = "ddwec07_ejercicio2";
	$usuario = "ddwec07_ejercicio2";	
	$password = "ddwec07_ejercicio2";
        
//	 Si la poblacion es correcta generamos un fichero XML con el siguiente formato:
//	  	<poblacion>
//	  		<nombre>Oviedo</nombre>
//	  		<codpostal>33001</codpostal>
//	  		<provincia>Asturias</provincia>
//	  		<latitud>43.362689</latitud>
//	  		<longitud>-5.847531</longitud>
//	        </poblacion>
//	  
//	  Si la población  no es correcta o no recibimos el parámetro correctamente generamos un fichero XML con el siguiente formato:
//	  	 <poblacion>
//	  		NO EXISTE
//	         </poblacion>      
 
        $ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>\t";       
   
        $errorxml="<poblacion>NO EXISTE</poblacion>";
   
        if(isset($_POST["poblacion"])){
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
                $sql="select * from poblacion where poblacion LIKE '".$_POST["poblacion"]."'";	
                $resultado=$conexion->query($sql);
                $poblacion=$resultado->fetch(PDO::FETCH_ASSOC);
                if($poblacion!=null){
                    
                    $latitud=$poblacion["latitud"];
                    $longitud=$poblacion["longitud"];
                    $codPostal=$poblacion["postal"];	
                    $idProvincia=$poblacion["idprovincia"];
                    
                     $sql2="select * from provincia where idprovincia = ".$idProvincia;	
                     $resultado=$conexion->query($sql2);
                     $provincia=$resultado->fetch(PDO::FETCH_ASSOC);
                     $nombreProvincia=$provincia["provincia"];
                     
                    $ficheroxml.="<poblacion>\n";
                    $ficheroxml.="\t<nombre>".$_POST["poblacion"]."</nombre>\n";
                    $ficheroxml.="\t<codpostal>".$codPostal."</codpostal>\n";	
                    $ficheroxml.="\t<provincia>".$nombreProvincia."</provincia>\n";			
                    $ficheroxml.="\t<latitud>".$latitud."</latitud>\n";			
                    $ficheroxml.="\t<longitud>".$longitud."</longitud>\n";	
                    $ficheroxml.="</poblacion>";            
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
     
?>