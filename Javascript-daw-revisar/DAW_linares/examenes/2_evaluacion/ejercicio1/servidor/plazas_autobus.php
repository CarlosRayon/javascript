<?php

/* plazas_autobus.php. Dado un autobús, devuelve las plazas disponibles para el mismo.
   * 
   * Recibe [POST]
   *    id (cadena). ID del autobús

   * 
   * Devuelve [JSON]
 *      Si no recibo id:
 *            []
 *      Si recibo un id, un objeto con los campos id y plazas (array bidimensional)
 * 
 *                {"id":"29",
 *                 "plazas":	 [[2,2,2,1],
 *                                [2,2,2,1],
 *                                [2,1,2,2],
 *                                [1,1,2,2],
 *                                [2,2,1,1],
 *                                [2,1,1,2],
 *                                [2,1,1,2],
 *                                [2,1,1,2],
 *                                [1,2,1,2],
 *                                [1,2,1,1]]}
 *
 */



	// Para que el navegador no haga cache (fecha de expiración menor a la actual)
    header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
        
       header('Content-Type: application/json');

        $respuesta=array();

        if (isset($_POST["id"])) {    
            $plazas=generaPlazas(10,4);
            $respuesta=array("id"=>$_POST["id"],"plazas"=>$plazas);              
        }


echo json_encode($respuesta);
   

function generaPlazas($filas,$columnas){
   $plazas=array();
    for($i=0;$i<$filas;$i++){
        array_push($plazas,array());
        for($j=0;$j<$columnas;$j++){    
            array_push($plazas[$i],rand(1, 2));
        }  
        
        
    }
   return $plazas;
}
        
     
?>