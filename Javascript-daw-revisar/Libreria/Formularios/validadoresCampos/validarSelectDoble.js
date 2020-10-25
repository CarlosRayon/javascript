/*Funcion validar valores de dos select no sean iguales Captura los datos del select y comprueba que tengan alguna valor seleccionados y despues comparo los valores de uno y otro
 * 
 @argument {String} id identificador del primer select que quiero validar
 @argument {String} id_dos identificador del segundo select que quiero validar
 @argument {String} idMensaje identificador de donde quiero mostra un mensaje de error
 @argument {String} mensajeError Mensaje de error para mostrar si alguno esta sin selecconar
 @argument {String} mensajeIguales Mensaje de error para mostrar si el valor de los select es igual
 */
function validarSelectDoble(id, id_dos, idMensaje, mensajeError,mensajeIguales)
{
    var valorSelect_01 = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;//Capturo el valor del select
    var valorSelect_02 = document.getElementById(id_dos).options[document.getElementById(id_dos).selectedIndex].value;//Capturo el valor del select
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error

    if (valorSelect_01 === "eliga uno" || valorSelect_02 === "eliga uno")//RECUERDA!!!Cambio el valor para validar 
    {
        mensaje.innerHTML = mensajeError;
        return false;
    } 
    else if (valorSelect_01 === valorSelect_02)
    {
        mensaje.innerHTML = mensajeIguales;
        return false;
    }
    return true;
}