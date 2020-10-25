/*Funcion validar select. Captura los datos del select y comprueba que tengan alguna valor seleccionados
 @argument {String} id identificador del objeto que quiero validar que este seleccionado
 @argument {String} idMensaje identificador de donde quiero mostra un mensaje de error
 @argument {String} mensajeError Mensaje de error para mostrar
 */
function validarSelect(id, idMensaje, mensajeError)
{
    var $valor = $("select[id="+id+"]").val();//Capturo el valor del select
    var $mensaje = $("#"+idMensaje);//Elemento donde poner mensaje error

    if ($valor === "eliga uno")//RECUERDA!!!Cambio el valor para validar 
    {
        $mensaje.text(mensajeError);
        return false;
    }
    return true;
}



