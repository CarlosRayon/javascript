<?php
	// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos (Fecha pasada)
	header('Content-Type: application/json');
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); 
	
	/* Utilizar el fichero ejercicio2.sql incluído en la carpeta bd para crear 
	 *  la base de datos, usuario y tabla en tu servidor MySQL.
	 * Si fuera necesario modifica los datos de la configuración y adáptalos a tu entorno de trabajo. */
	
	// Configuración BASE DE DATOS MYSQL
	$servidor = "localhost";
	$basedatos = "ddwec07_ejercicio2";
	$usuario = "ddwec07_ejercicio2";	
	$password = "ddwec07_ejercicio2";
        
         // Se envía un listado en JSON de las 5 primeras poblaciones cuyo nombre coincide
         // con el parámetro proporcionado:
         //  "[{"poblacion":"Alegría-Dulantzi"},{"poblacion":"Alatoz"},{"poblacion":"Albacete"},{"poblacion":"Albatana"},{"poblacion":"Alborea"}]"      
         //  
         // Si no se proporciona el parámetro o no hay poblaciones se devuelve un array vacío:
        //   "[]"
        
        $salida=array();

        if(isset($_GET["sugerencia"])){
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
               $sql="select poblacion from poblacion where poblacion LIKE '".$_GET["sugerencia"]."%' LIMIT 5";	
               foreach($conexion->query($sql) as $fila){                
                   $salida[]=array("poblacion"=>$fila["poblacion"]);       
               }
            } 
            catch (Exception $ex) {
                throw new Exception("No se ha podido recuperar la lista: "+$ex);
            }
            finally{
                $conexion=null;        
            }
        }     
        echo json_encode($salida,JSON_UNESCAPED_UNICODE);
?>