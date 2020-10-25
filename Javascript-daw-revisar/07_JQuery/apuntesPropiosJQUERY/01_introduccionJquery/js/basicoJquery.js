
/*FORMAS DE CARGAR LA PRIMER FUNCION
 
 -primera forma        
 $(document).(function()
 {
 console.log("Hola mundo");
 });
 -segunda forma
 $(document).on("ready",cargaPagina);
 
 -Tercera forma
 $(document).ready(cargaPagina);
 */

$(document).on("ready", cargaPagina);
//$(window).ready(cargaPagina);

function cargaPagina()
{
    /*Trabajando con un  solo elemento capturado*/

    var $capa1 = $("#capa1");//Capturo elemento con id capa1

    console.log($capa1.html());//Accedmos al contenido. ( innerText  innerHTML)
    $capa1.html("Cambio el dato");//Cambiamoa contendio ( innerText="dato"  innerHTML."dato")

    $capa1.attr("class", "borde-azul");//Añado una clase al elemento RECUERDA!!! puedo añadir mas de una clase separandolas por espacion
    console.log($capa1.attr("id"));//ver contenido del atributo
    $capa1.attr({"class": "borde-azul", "id": "capa-nueva"});//Varios atributos a la vez


    /*Podemos ver el valor del CSS con Jquery (con DOM requiere de mas proceso)*/

    console.log($capa1.css("width"));
    $capa1.css("width", "700px");//Podemos modificar tambien el valor del css

    /*OBJETOS LITERALES*/

    /*Podemos cambiar varias propiedades css y atributos a la vez pasandole un objeto literal*/
    $capa1.css({
        "width": "800px",
        "background-color": "yellow" //RECUERDA!!!La propiedad puede ir formato camel-case backgroundColor
    });


    /*Trabajando con varios elementos capturados*/

    var $capas = $("div");//Capturo todos los elementos div

    $capas.html("Nuevo contendio");       //Cambiamos el contenido de todos los elementos
    $capas.attr("class", "borde-azul");    //Cambiamos el atributo de todos los elementos
    $capas.css("background-color", "yellow");//Cambiamos el css de todos los elementos



    console.log($capas.html());//Nos de el contenido del primer elemento  
    //
    //Si queremos iterar por los elementos lo hacemos bucle for
    for (var i = 0; i < $capas.length; i++) {
        console.log($capas.eq(i).html());//RECUERDA!!! Con eq accedemos objeto jquery
        console.log($capas.get(i).innerText);//RECUERDA!!! Con get accedemos objeto DOM original (con notacion $capas[i] tambien funciona

    }


}

