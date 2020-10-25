/*****************************FUNCION PARA CAPTURAR UN RADIO BUTON*************************
 /*Funcion para captura el valor de los radio button
 * @argument {identificador} obj
 * @returns {String} el valor del radio que este checked
 */
function capturarRadio(obj)
{
    var resultado = "ninguno";
    var radio = document.getElementsByName(obj);
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)
            resultado = radio[i].value;
    }
    return resultado;

};

/***********************OTRA FORMA ACCEDER A UN RADIO A TRAVES FORMULARIO******************************
 * (((((((((((NOOOOOOOOOO PROBADA)))))))))))))))))))))))
 * @param {obj} obj (form   this.form(codigo inline)) 
 * @param {Number} indice indice que tiene el radio que queramos
 * 
 * 
 */
 function accederRadio(formulario, indice){ 
 formulario.miradio[indice].checked = true 
 formulario.miradio[indice].blur()	
 } 



