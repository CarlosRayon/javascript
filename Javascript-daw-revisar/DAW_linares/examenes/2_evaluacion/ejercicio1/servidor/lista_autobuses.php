<?php


  /* autobuses.php. Dada una ruta, devuelve el listado de autobuses que cubren la misma
   * 
   * Recibe [GET]
   *    origen (cadena). Localidad de origen
   *    destino (cadena). Localidad de destino
   * 
   * Devuelve [XML]
   *   Si no existe ruta entre el origen y el destino:
   *            <autobuses>RUTA NO EXISTE</autobuses>
   * 
   *  Si existe ruta entre origen y destino:
   * 
    *      <autobuses>
    *              <autobus>
    *                 <id>10</id>
    *                 <salida>07:00</salida>
    *                 <llegada>09:00</llegada>
    *                 <paradas>0</paradas>
    *                 <precio>25</precio>
    *              </autobus>
    *              <autobus>
    *                 <id>11</id>
    *                 <salida>10:00</salida>
    *                 <llegada>13:00</llegada>
    *                 <paradas>2</paradas>
    **                <precio>20</precio>
    *               </autobus>
    *             …
    *     </autobuses>
    */

	// Para que el navegador no haga cache (fecha de expiración menor a la actual)
        header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
        
 	header("Content-Type: text/xml"); 
        
        $ficheroxml="<?xml version=\"1.0\" encoding=\"utf-8\"?>\t";       
   
        $ficheroxml="<autobuses>RUTA NO EXISTE</autobuses>";


$estaciones=array("Santander","Madrid","Barcelona","Oviedo");
$horarios=array();
for($i=0;$i<count($estaciones);$i++)
   for($j=0;$j<count($estaciones);$j++)
        $horarios[$i][$j]=NULL;
   
$ID=1; /* Id actual */
   
/* Santander-Madrid */
$horarios[0][1]=array(array("id"=>generaID(),"salida"=>"09:00","llegada"=>"13:00","paradas"=>0,"precio"=>25),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"16:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"15:00","llegada"=>"19:00","paradas"=>0,"precio"=>30),   
                      array("id"=>generaID(),"salida"=>"17:00","llegada"=>"22:00","paradas"=>3,"precio"=>22),   
                      array("id"=>generaID(),"salida"=>"23:30","llegada"=>"05:00","paradas"=>1,"precio"=>30)); 


/* Santander-Barcelona */
$horarios[0][2]=array(array("id"=>generaID(),"salida"=>"08:00","llegada"=>"17:00","paradas"=>6,"precio"=>55),
                      array("id"=>generaID(),"salida"=>"12:00","llegada"=>"20:00","paradas"=>0,"precio"=>65),
                      array("id"=>generaID(),"salida"=>"16:00","llegada"=>"01:00","paradas"=>5,"precio"=>55),    
                      array("id"=>generaID(),"salida"=>"23:45","llegada"=>"07:30","paradas"=>1,"precio"=>70)); 
           
/* Santander-Oviedo */
$horarios[0][3]=array(array("id"=>generaID(),"salida"=>"07:00","llegada"=>"09:00","paradas"=>0,"precio"=>25),
                      array("id"=>generaID(),"salida"=>"10:00","llegada"=>"13:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"13:00","paradas"=>0,"precio"=>25),   
                      array("id"=>generaID(),"salida"=>"13:00","llegada"=>"18:00","paradas"=>10,"precio"=>10),
                      array("id"=>generaID(),"salida"=>"16:00","llegada"=>"19:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"18:00","llegada"=>"20:00","paradas"=>0,"precio"=>25),   
                      array("id"=>generaID(),"salida"=>"20:00","llegada"=>"23:00","paradas"=>3,"precio"=>22),    
                      array("id"=>generaID(),"salida"=>"22:00","llegada"=>"00:00","paradas"=>0,"precio"=>26)); 

/* Madrid-Santander */
$horarios[1][0]=array(array("id"=>generaID(),"salida"=>"06:00","llegada"=>"10:00","paradas"=>0,"precio"=>25),
                      array("id"=>generaID(),"salida"=>"12:00","llegada"=>"17:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"15:00","llegada"=>"19:00","paradas"=>0,"precio"=>30),   
                      array("id"=>generaID(),"salida"=>"17:00","llegada"=>"21:00","paradas"=>0,"precio"=>25),   
                      array("id"=>generaID(),"salida"=>"23:00","llegada"=>"05:00","paradas"=>1,"precio"=>30)); 



/* Madrid-Barcelona */
$horarios[1][2]=array(array("id"=>generaID(),"salida"=>"05:00","llegada"=>"11:00","paradas"=>0,"precio"=>40),
                      array("id"=>generaID(),"salida"=>"10:00","llegada"=>"18:00","paradas"=>2,"precio"=>30),
                      array("id"=>generaID(),"salida"=>"15:00","llegada"=>"21:00","paradas"=>0,"precio"=>45),
                      array("id"=>generaID(),"salida"=>"17:00","llegada"=>"00:00","paradas"=>3,"precio"=>35),
                      array("id"=>generaID(),"salida"=>"23:00","llegada"=>"06:00","paradas"=>1,"precio"=>40));
    


/* Madrid-Oviedo */
$horarios[1][3]=array(array("id"=>generaID(),"salida"=>"09:00","llegada"=>"14:00","paradas"=>0,"precio"=>35),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"15:00","paradas"=>2,"precio"=>30),
                      array("id"=>generaID(),"salida"=>"16:00","llegada"=>"21:00","paradas"=>0,"precio"=>35),    
                      array("id"=>generaID(),"salida"=>"29:00","llegada"=>"00:00","paradas"=>1,"precio"=>30),   
                      array("id"=>generaID(),"salida"=>"23:45","llegada"=>"05:15","paradas"=>0,"precio"=>35)); 
    

/* Barcelona-Santander */
$horarios[2][0]=array(array("id"=>generaID(),"salida"=>"07:00","llegada"=>"16:00","paradas"=>6,"precio"=>55),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"19:00","paradas"=>0,"precio"=>65),
                      array("id"=>generaID(),"salida"=>"17:00","llegada"=>"02:00","paradas"=>5,"precio"=>55),    
                      array("id"=>generaID(),"salida"=>"23:15","llegada"=>"07:45","paradas"=>1,"precio"=>70)); 

/* Barcelona - Madrid */
$horarios[2][1]=array(array("id"=>generaID(),"salida"=>"06:00","llegada"=>"12:00","paradas"=>0,"precio"=>40),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"19:00","paradas"=>2,"precio"=>30),
                      array("id"=>generaID(),"salida"=>"14:00","llegada"=>"20:00","paradas"=>0,"precio"=>45),
                      array("id"=>generaID(),"salida"=>"18:00","llegada"=>"01:00","paradas"=>3,"precio"=>35),
                      array("id"=>generaID(),"salida"=>"23:30","llegada"=>"07:00","paradas"=>1,"precio"=>40));

/* Barcelona - Oviedo */
$horarios[2][3]=array(array("id"=>generaID(),"salida"=>"06:00","llegada"=>"14:00","paradas"=>0,"precio"=>65),
                      array("id"=>generaID(),"salida"=>"12:00","llegada"=>"00:00","paradas"=>5,"precio"=>50),
                      array("id"=>generaID(),"salida"=>"23:00","llegada"=>"10:00","paradas"=>1,"precio"=>60));

/* Oviedo -Santander */

$horarios[3][0]=array(array("id"=>generaID(),"salida"=>"08:00","llegada"=>"10:00","paradas"=>0,"precio"=>25),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"14:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"12:00","llegada"=>"14:00","paradas"=>0,"precio"=>25),   
                      array("id"=>generaID(),"salida"=>"14:00","llegada"=>"19:00","paradas"=>10,"precio"=>10),
                      array("id"=>generaID(),"salida"=>"17:00","llegada"=>"20:00","paradas"=>2,"precio"=>20),
                      array("id"=>generaID(),"salida"=>"19:00","llegada"=>"21:00","paradas"=>0,"precio"=>25),   
                      array("id"=>generaID(),"salida"=>"21:00","llegada"=>"00:00","paradas"=>3,"precio"=>22),    
                      array("id"=>generaID(),"salida"=>"23:00","llegada"=>"01:00","paradas"=>0,"precio"=>26)); 

/* Oviedo - Madrid */
$horarios[3][1]=array(array("id"=>generaID(),"salida"=>"08:00","llegada"=>"13:00","paradas"=>0,"precio"=>35),
                      array("id"=>generaID(),"salida"=>"12:00","llegada"=>"16:00","paradas"=>2,"precio"=>30),
                      array("id"=>generaID(),"salida"=>"15:00","llegada"=>"20:00","paradas"=>0,"precio"=>35),    
                      array("id"=>generaID(),"salida"=>"20:00","llegada"=>"01:00","paradas"=>1,"precio"=>30),   
                      array("id"=>generaID(),"salida"=>"23:30","llegada"=>"05:00","paradas"=>0,"precio"=>35)); 
    
   
/* Oviedo - Barcelona */
$horarios[3][2]=array(array("id"=>generaID(),"salida"=>"08:00","llegada"=>"16:00","paradas"=>0,"precio"=>65),
                      array("id"=>generaID(),"salida"=>"11:00","llegada"=>"23:00","paradas"=>5,"precio"=>50),
                      array("id"=>generaID(),"salida"=>"23:30","llegada"=>"09:30","paradas"=>1,"precio"=>60));





if ((isset($_GET['origen']))&&(isset($_GET["destino"]))) {
    if($_GET['origen']!=$_GET["destino"]){
        if((in_array($_GET['origen'],$estaciones))&&(in_array($_GET['destino'],$estaciones))){
           $indice_origen=array_search($_GET['origen'], $estaciones);
           $indice_destino=array_search($_GET['destino'], $estaciones);          

           $ficheroxml="<autobuses>";
           $horarios_ruta=$horarios[$indice_origen][$indice_destino];
           foreach($horarios_ruta as $horario){
               $ficheroxml.="   <autobus>";
                $ficheroxml.="       <id>".$horario["id"]."</id>";           
                $ficheroxml.="       <salida>".$horario["salida"]."</salida>";               
                $ficheroxml.="       <llegada>".$horario["llegada"]."</llegada>";
                $ficheroxml.="       <paradas>".$horario["paradas"]."</paradas>"; 
                $ficheroxml.="       <precio>".$horario["precio"]."</precio>";         
                $ficheroxml.="   </autobus>";
           }
           $ficheroxml.="</autobuses>";

        }       
    }
}

echo $ficheroxml;


function generaID(){
    global $ID;
    return $ID++;
}

?>