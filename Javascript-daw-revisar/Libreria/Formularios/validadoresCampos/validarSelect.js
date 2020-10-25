
/*Funcion validar select por su TEXT Captura los datos del select y comprueba que tengan alguna valor seleccionados
 @argument {String} id identificador del objeto que quiero validar que este seleccionado
 @argument {String} idMensaje identificador de donde quiero mostra un mensaje de error
 @argument {String} mensajeError Mensaje de error para mostrar
 */
function validarSelectText(id, idMensaje, mensajeError)
{
    var valor = document.getElementById(id).options[document.getElementById(id).selectedIndex].Text;//Capturo el valor del select
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error

    if (valor === "eliga uno")//RECUERDA!!!Cambio el valor para validar 
    {
        mensaje.innerHTML = mensajeError;
        return false;
    }
    return true;
}



/*
  Funcion validar select por su VALUE Captura los datos del select y comprueba que tengan alguna valor seleccionados
 @argument {String} id identificador del objeto que quiero validar que este seleccionado
 @argument {String} idMensaje identificador de donde quiero mostra un mensaje de error
 @argument {String} mensajeError Mensaje de error para mostrar
 */
function validarSelectValue(id, idMensaje, mensajeError)
{
    var valor = document.getElementById(id).value;//Capturo el valor del select
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error

    if (valor === "none")//RECUERDA!!!normalmente el valor es none
    {
        mensaje.innerHTML = mensajeError;
        return false;
    }
    
    return true;
}

