/* 
Recopilatorio para captura los datos de los diferentes elementos de un formulariol
 */

function valorInput_textArea(id)
{
    return $("#"+id).val();
}

function valorRadioButton(name)
{
    return $("input:radio[name="+name+"]:checked").val();
}
;

function valorCheckBox(id)
{  
    return $("input:checkbox[id="+id+"]:checked").val();//RECUERDA!!! Si no esta seleccionado devuelve undefine
    
}

function checkBoxSeleccionado(id)
{         
   if($("#"+id).is(':checked'))return true; //RECUERDA!!!  $("#"+id).prop('checked');  tambien valdira
   else return false;// RECUERDA!!! Con .val() obtenemos el valor -Con .attr.("name")  su nombre -Con .attr.("id")  su id
 
}


function valorSelect(id) {
    return $("select[id="+id+"]").val(); //RECUERDA!!! Sin seleccionar devuelve none
};