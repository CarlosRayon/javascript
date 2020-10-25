/*Tenemos 3 funciones basicas para trabajar con ajax mediante Jquery
 $.ajax();  
 $.get();  
 $.post();
 */

$(document).ready(cargaPagina);


function cargaPagina()
{
    /*$.get() Recibe puede recibir 4 parametros:
     * 
     * url donde realizamos la peticion get
     * parametros que pasamos por get
     *      Puede ser null
     *      Puede ser un objeto literal con parametros {id:3,nombre:"juan"}
     * Una funcion de exito (Si la definimos no nos haria falta done fail alway) mejor en null y definimos done fail always
     * Tipo dato que esperamos recibir "xml" "json"   RECUERDA!!!Importante si en el script php no hemos especificado el tipo dato mediante el header
     */

    $.get("../servidor/get_con_parametros_xml.php", {id: "1", nombre: "carlos"}, null, "xml") // RECUERDA!!! Si no queremos especificar parametros ni funcion ponemos null  $.get("../servidor/get_con_parametros_xml.php",null,null,"xml")
            .done(exito)
            .fail(error)
            .always(siempre);




}


function exito(data)//El parametro serian los datos que reciben del servidor similar a responseText o responseXML Recibe los dos tipos datos sin problemas
{
    // debugger; //Podemos ir debuggeando para ver los datos que reciben los parametros VEMOS QUE RECIBE EL #DOCUMENT. En all (en la consola depuracion) vemos todos los datos recibidos

    var personas = data.getElementsByTagName("persona");//data nos da la respuesta del script ==responseXML
    
    //Vemos todos los datos de la respuesta del script osea del xml
    for (var i = 0; i < personas.length; i++) {
        
        var nombre=personas[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;//Capturamos el valor de la etiqueta nombre...
        console.log(nombre);//... y le mostramos
        
        var nombre=personas[i].getElementsByTagName("ciudad")[0].firstChild.nodeValue;//Capturamos el valor de la etiqueta nombre...
        console.log(nombre);//... y le mostramos
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