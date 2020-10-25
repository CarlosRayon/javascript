/*Creacion de elementos*/
$(window).ready(cargaPagina);

function cargaPagina()
{
    /*Creamos dos elementos para probar*/
    
    $capaNueva1 = $("<div></div>", {"html": "Capa de fuera",
                         "id": "capa-exterior",
                         "class": "borde-azul",
                         "width": "800px"});
                     
    $capaNueva1.appendTo($("body"));//La capa la añades al body
    
    $capaNueva2 = $("<div></div>", {"html": "capa interio",
                        "id": "capa-interior",
                        "class": "borde-azul",
                        "width": "500px",
                        "height": "200px"});
                    
    $capaNueva2.appendTo($($capaNueva1));//La capa la añades a la primere capa

    /*ELIMINACION ELEMENTOS*/

    //$("#capa-interior").remove();//Selecionamos elemento y aplicamos metodos remove()
    //$("#capa-exterior").empty();//Borramos todo el contenido que tenga el elemento




}

