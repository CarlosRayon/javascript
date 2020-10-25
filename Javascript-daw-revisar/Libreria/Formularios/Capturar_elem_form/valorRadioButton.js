/*****************************FUNCION PARA CAPTURAR UN RADIO BUTON*************************
 /*Funcion para captura el valor de los radio button
 * @argument {String}  name
 * @returns {String} el valor del radio que este checked dentro del grupo de radios con el name pasado por parametros
 */
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

};




