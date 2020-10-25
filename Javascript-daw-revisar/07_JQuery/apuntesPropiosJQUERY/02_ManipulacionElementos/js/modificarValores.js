/* 
Modificar valores 
 */

$(document).ready(modificarContendio);

function modificarContendio()
{
    //Modificar contenido
    
    // $("#capados").html("contenido  modificado");
    $("#capados").text("contenido  modificado");
    
    $("#entrada").val("value cambiado con JQ");//Modificamos contenido de un INPUT
    
    //Modificar atributos/CSS
    $("#capados").attr("class","borde-rojo");//La cambiamos 
    //$("#capauno").removeAttr("class");//Borramos el atributo
    
    //Atributo class
    $("#capados").addClass("claseañadida");//Añadimos otra
    
    $("#capados").removeClass("claseañadida");//Borramos una en concreto
    
    $("#capados").toggleClass("clasenueva");//Si la clase existe la borra sino la añade
    
    //Atributos de CSS
    $("#capados").css("background-color","yellow");//Una sola propiedad
    $("#capados").css({"background-color":"yellow","border-color":"red"});//varias propiedades a la vez
    
    
    
    
    
}
