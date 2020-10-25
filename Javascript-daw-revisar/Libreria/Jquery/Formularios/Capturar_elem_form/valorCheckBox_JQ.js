/* 
 Funcion que captura el valor del checkbox si esta seleccionado
 @argument {String} id
 @return {String} valor de checkbox o none si no esta seleccionando
 */

function valorCheckBox(id)
{
    return $("input:checkbox[id=" + id + "]:checked").val();//RECUERDA!!! Si no esta seleccionado devuelve undefine

}



