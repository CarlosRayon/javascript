/*Creacion de elementos*/
$(window).ready(cargaPagina);
function cargaPagina()
{
    /*Creaccion de un elemento: RECUERDA!!! MIRA LIBRERIA PARA METODO DE CREACION DE ELEMENTOS
       -En varios pasos
       -En un solo paso
      */
     
    /*CREACION ELEMENTO EN VARIOS PÀSOS*/

    $capaNueva = $("<div></div>");

    //Una vaz creado podemos acceder, crear, modificar contenido,css,atributos de forma normal Jquery
    
    /*Crear contendio*/
    
    $capaNueva.html("<p>Capa creada con jquery</p>");//html añade contenido y etiquetas
    //$capaNueva.text("<p>Capa creada</p>")//text solo contenido (las etiquetas serian contendido tambien)

    /*Atributos*/
    
    //$capaNueva.attr("id","capa-nueva");Un atributo
     $capaNueva.attr({ "id": "capauno","class": "borde-azul"});//Varios atributos a la vez

    /*CSS*/
    
    $capaNueva.css("width", "700px");//Podemos modificar tambien el valor del css
    
    /*La añadimos a un elemento padre
     *  -Podemos pasar el elemeto o el selector:
              $(document.body)
              $("body")
     
        Añado la capa al body*/
    
    $capaNueva.appendTo($("body"));//La capa la añades al body

    /*CREACION ELEMENTO EN UN PASO*/
    
    $segundaCapa = $("<div></div>", {"text": "Segunda capa creado con jquery",
        "id": "capados",
        "class": "borde-azul",
        "width": "500px"});

    $capaNueva.append($segundaCapa);//Como hija de $capaNueva




}

