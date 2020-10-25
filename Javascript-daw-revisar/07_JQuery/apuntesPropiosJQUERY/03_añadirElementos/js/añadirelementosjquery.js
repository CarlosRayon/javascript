
$(document).ready(cargaPagina);
/* 
 Formas de añadir elementos en jquery:
 append() añade como hijo final del elemento seleccionado
 prepend() añade al principio del elemento seleccionado(Al principio de todos)
 after()  añade despues del elemento seleccionado
 before() añade antes del elemento seleccionado
 */

function cargaPagina() {

    /*Creo los elementos que voy a usar*/
    $divPrincipal = $("<div></div>", {"text": "div principal",
                          "id": "principal"
    });

    $divSecundario = $("<div></div>", {"text": "div secundario",
                           "id": "secundario"
    });

    $parrafoUno = $("<p></p>", {"text": "parrafo uno",
                       "class": "parrafo"
    });

    $parrafoDos = $("<p></p>", {"text": "parrafo dos",
                       "class": "parrafo"
    });


    /*Añadimos el divprincipal como ultimo hijo del body*/
    
    $("body").append($divPrincipal);
    //$divPrincipal.appendTo($("body"));//Tambiene es valido
    

    /*Añadimos al principio del divPrincipal(Antes incluso que su contenido)*/
    
    $("#principal").prepend($parrafoUno);
    //$divSecundario.prependTo("#principal");//Tambien es valido
    

    /*Añadimos despues del div principal el div secundario*/
    
    $("#principal").after($divSecundario);
    

    /*Añadimos antes del div principal un parrafo*/
    
    $("#principal").before($parrafoDos);

}