/*Tenemos 3 funciones basicas para trabajar con ajax mediante Jquery
 $.ajax();  
 $.get();  
 $.post();
 */

$(document).ready(cargaPagina);


function cargaPagina()
{
    /* el metodo $.ajax(opciones) nos permite hacer peticiones tanto get como post
     * -Creamos unas opciones de peticion y las pasamos como parametro a $.ajax
     */

    var opciones = {//Definimos las opciones del metodo ajax en forma de objeto literal
        
        method:"post", //Forma de peticion get o post
        url:"../servidor/post_con_parametros_rest.php", //URL del script php
       // response:"json", Con este response no devuelve el bien los valores me devuelve string
        dataType:"json",//Parametros que recibimos json  xml RECUEDAD!!! ESTA ES LA FORMA CORRECTA
        data: {id: "1"} //Parametros que el pasamos en la peticion Si no queremos parametros ponemos null
    };

    $.ajax(opciones)//Igual que con $.get y $.post podemos encadenar funciones de exito y error y siempre
            .done(exito)
            .fail(error)
            .always(siempre);//Siempre hara esta funcion si queremos
//    RECUERDAD!!! Tambien podemos meterlas dentro de las opciones(mirar imagen)

/*RECUERDA!!! Al final como vemos es como un post o get pero con otra estructura.
    $.post("../servidor/post_con_parametros_rest.php", null, null, "json") 
            .done(exito)
            .fail(error)
            .always(siempre);//Siempre hara esta funcion si queremos

*/
}


function exito(data)//El parametro serian los datos que reciben del servidor similar a responseText o responseXML Recibe los dos tipos datos sin problemas
{
    console.log(data);
    console.log(data.nombre);
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