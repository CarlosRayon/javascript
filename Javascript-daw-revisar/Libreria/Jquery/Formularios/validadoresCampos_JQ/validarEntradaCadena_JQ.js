/*Funcion para validar datos de entrada. Valida solo letras que cumplan cierto patron
 * RECUERDA!!! SI QUIERO QUITAR ALGO QUITO EL ARGUMENTO Y EL ELSE IF CORRESPONDIENDTE
 @argument {String} id  identificador del campo que quiero capturar
 @argument {String} id  identificador del campo donde quiero mostrar un mensaje
 @argument {String} campoAfectado  Nombre del campo al que afecta la validacion
 @argument {String} expresion  Expresion regular para validar (EJ:  "^[a-zA-ZñÑ ]{1,10}$") RECUERDA!!! SIN / SIMPLEMENTE LA EXPRESION REGULAR
 @argument {String} modificaor para la expresion regular  i --> Hace que la expresion sea case-insesitive  g --> Hace que la busqueda del patron sea global(que no pare al encontrar el patron)
 @return {Boolean} true si todo es correcto
 */
function validarEntradaCadena(id, idMensaje, campoAfectado, expresion, modificador) {//Si no queremos expresion regular ""
    
    var $dato = $("#" + id).val();//Elemento que quiero capturar
    var mensaje = $("#" + idMensaje);//Elemento donde poner mensaje error
    var rex = new RegExp(expresion, modificador);//Expresion regular
    
    if (($dato.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        mensaje.text("El campo " + campoAfectado + " es obligatorio");
        return false;
    }
    else if (!isNaN($dato))//Valido que sea solo letras
    {
        mensaje.text("El campo " + campoAfectado + " solo admite letras");
        return false;
    }
    else if (!dato.match(rex))//Valido con un patron opcional
    {
        mensaje.tect("El campo " + campoAfectado + " no cumple el patron");
        return false;
    }
    return true;
}

