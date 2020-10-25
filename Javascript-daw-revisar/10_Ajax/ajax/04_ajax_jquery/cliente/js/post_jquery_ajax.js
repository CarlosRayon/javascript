/*Tenemos 3 funciones basicas para trabajar con ajax mediante Jquery
 $.ajax();  
 $.get();  
 $.post();
 */

$(document).ready(cargaPagina);


function cargaPagina()
{
    /*$.post() Recibe puede recibir 4 parametros:
     * 
     * url donde realizamos la peticion post
     * parametros que pasamos por post
     *      Puede ser null
     *      Puede ser un objeto literal con parametros {id:3,nombre:"juan"}
     * Una funcion de exito (Si la definimos no nos haria falta done fail alway) mejor en null y definimos done fail always
     * Tipo dato que esperamos recibir "xml" "json"   RECUERDA!!!Importante si en el script php no hemos especificado el tipo dato mediante el header
     */

    $.post("../servidor/post_con_parametros_rest.php", null, null, "json") // RECUERDA!!! Si no queremos especificar parametros ni funcion ponemos null  $.get("../servidor/get_con_parametros_xml.php",null,null,"xml")
            .done(exito)
            .fail(error)
            .always(siempre);//Siempre hara esta funcion si queremos
}


function exito(data)//El parametro serian los datos que reciben del servidor similar a responseText o responseXML Recibe los dos tipos datos sin problemas
{
    //    debugger; //Podemos ir debuggeando para ver los datos que reciben los parametros  VEMOS QUE RECIBE LOS DATOS EN FORMATO JSON
    
    //Tramaos el data como el objeto json que recibimos
//    console.log(data.nombre);
//    console.log(data.ciudad);
    
    //Todos los datos en un array
    for (var i = 0; i < data.length; i++) {
        
        console.log(data[i].nombre);
        console.log(data[i].ciudad);
        
    }
   
}

function error(xhr, estado, error)//(?) Parametros para error (en caso error podriamos obtener estos parametros)
{
//    debugger; //Podemos ir debuggeando para ver los datos que reciben los parametros  VEMOS QUE RECIBE LOS DATOS DE ERROR Y EL OBJETO XMLHttpRequest
    console.log("Objeto xhr " + xhr);
    console.log("estado " + estado);
    console.log("Mensaje de error " + error);
}

/*(?)
 primer parametro objeto xhr
 segundo parametro estado
 tercer parametro mensaje de error
 */

function siempre()
{
   // debugger; //Podemos ir debuggeando para ver los datos que reciben los parametros
    console.log("siempre");
}