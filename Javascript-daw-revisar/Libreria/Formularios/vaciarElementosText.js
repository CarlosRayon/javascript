/* 
Funcion para vaciar todos los elementos de tipo text
@argument {String} idFormu  id del formulario que queremos afectar
 */

function vaciarElementosType(idFormu)
{
    var formulario = document.getElementById(idFormu);
    for (var i = 0; i < formulario.elements.length; i++)
        if (formulario.elements[i].type == "text")
            formulario.elements[i].value = "";
}
