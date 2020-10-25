<?php

header('Content_Type: application/json');//Tipo dato que pasamos por la cabezera

if(isset($_POST["id"]))
{
    
    if($_POST["id"]=="1")
    {
        $empleado=array("nombre"=>"Carlos",
                        "telefono"=>"663318944",
                        "ciudad"=>"Mexico",
                        "anio"=>"1982");
        
        echo json_encode($empleado);//Recibe un dato y lo codifica en JSON para procesarlo en JS(?)
    }
    else if($_POST["id"]=="2")
    {
        class Persona
        {
            public $nombre;
            public $telefono;
            public $ciudad;
            public $anio;
        }
        
        
        $persona= new Persona("Carlos","663318944","Mexico","1982");
        
        echo json_encode($persona);//Recibe un dato y lo codifica en JSON para procesarlo en JS(?)
    }
   
    
    /*(?) Tanto un array asociativo como un objeto devuelve un objeto JSON bien formado*/
    
}
 else  //Si el id no existe
    {
     //Devolvemos un listado 
         $empleado1=array("nombre"=>"Ines",
                        "telefono"=>"663346444",
                        "ciudad"=>"Mexico",
                        "anio"=>"1997");
         
          $empleado2=array("nombre"=>"Carlos",
                        "telefono"=>"663318944",
                        "ciudad"=>"Mexico",
                        "anio"=>"1982");
          
          $empleados=array($empleado1,$empleado2);
          
          
          echo json_encode($empleados);
    }


