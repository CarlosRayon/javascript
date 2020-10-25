/* 
Recopilatorio para captura los datos de los diferentes elementos de un formulariol
 */

function valorInput_textArea(id)
{
    return document.getElementById(id).value;
}

function valorRadioButton(name)
{
    var resultado = "";
    var radio = document.getElementsByName(name);
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)//Si tiene la propiedad checked
            resultado = radio[i].value;
    }
    return resultado;

}
;

function valorCheckBox(id)
{  
    var checkBox = document.getElementById(id);  
    if (checkBox.checked) return checkBox.value;              
    else return "none"; //Si borro esto y no tengo seleccionado el checkBox me da undefined 
    //RECUERDA!!! En los return puedo poner true||false si solo queremos validar que este o no seleccionado
    
}

function valorSelect(id) {
    return document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
    
};