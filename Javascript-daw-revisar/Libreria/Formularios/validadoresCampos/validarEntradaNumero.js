
/*Funcion que valida que los datos introduccidos sea numeros enteros
 
 @argument {String} id  identificador del campo que quiero capturar
 @argument {String} id  identificador del campo donde quiero mostrar un mensaje
 @argument {String} campoAfectado  Nombre del campo al que afecta la validacion
 @param {Int} minimo  numero minimo para un rango de valores
 @param {Int} maximo  numero maximo para un rango de valores
 @return {Boolean} true si todo es correcto

 */
function validarEntradaNumeros(id, idMensaje, campoAfectado, minimo, maximo) {
    var dato = document.getElementById(id).value;//Elemento que quiero capturar
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error

    if ((dato.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        mensaje.innerHTML = "El campo " + campoAfectado + " es obligatorio";
        return false;
    }
    else if (isNaN(parseInt(dato)) || (parseInt(dato) !== parseFloat(dato)) || (dato != parseInt(dato)))//Valido que sea numeros enteros RECUERDA!!! CAMBIAR POR isNaN(dato) PARA ADMITIR NUMERO CON DECIMALES
    {
        mensaje.innerHTML = "El campo " + campoAfectado + " solo admite numeros enteros";
        return false;
    }
    else if (!(dato >= minimo && dato <= maximo)) {
        mensaje.innerHTML = "El campo " + campoAfectado + " debe estar entre " + minimo + " y " + maximo;
        return false;
    }

    return true;
}
