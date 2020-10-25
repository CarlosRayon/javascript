/* 
Formas de obtener los valores del html
 */

$(document).ready(obtenerValores);

function obtenerValores()
{
    
    
    //Obtener los valores
    alert($("#capauno").html());//Todo el contenido de la capa (html incluido)
    alert($("#capados").text());//Solo el contenido que tenga la capa
    
    alert($("ul li").html());
    
    //Obtener valores atributos
    alert($("#capauno").attr("id")); // RECUERDA!!! $(this).attr("id") Con $(this) obtenemos el objeto
    
    //Obtener valores css
    alert($("#capauno").css("background-color"));// alert($("#capauno").css("backgroundColor"));
    alert($("#capauno").css("border"));
    
    //Obtenemos el valor de un INPUT
    alert($("#entrada").val());
    
}