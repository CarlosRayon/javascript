/*Funciona para validar si un checkbox esta seleccionado
 @argument {String} id
 @returns {Boolena} 
 */

function checkBoxSeleccionado(id)
{
    if ($("#" + id).is(':checked'))
        return true; //RECUERDA!!!  $("#"+id).prop('checked');  tambien valdira
    else
        return false;// RECUERDA!!! Con .val() obtenemos el valor -Con .attr.("name")  su nombre -Con .attr.("id")  su id

}

