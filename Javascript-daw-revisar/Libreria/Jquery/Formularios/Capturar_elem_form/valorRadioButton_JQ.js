/*****************************FUNCION PARA CAPTURAR UN RADIO BUTON*************************
 /*Funcion para captura el valor de los radio button
 * @argument {String}  name
 * @returns {String} el valor del radio que este checked
 */
function valorRadioButton(name)
{
    return $("input:radio[name="+name+"]:checked").val();
}





