

/*Funcion para validar password doble
    -Valida primer dato no este vacio
    -valida segun REX el primer dato
    -Valida que el segundo dato no este vacio
    -Valida que los dos coincidan

    @argument {String} id id del primer password
    @argument {String} id_2 id del segunod password
    @argument {String} campoAfectado  para mensaje error.
    @argument {String} expresion  expresion regular
    @argument {String} modificador  modificar para la expresion
 **/



function validarPassWord(id, id_2, campoAfectado, expresion, modificador) {
    var pass_01 = document.getElementById(id);
    var pass_02 = document.getElementById(id_2);
//   var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error

    var rex = new RegExp(expresion, modificador);//Expresion regular

    if ((pass_01.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        pass_01.value = "";                                     // MODIFICAR PARA PONER QUE QUIERO Y DONDE EN MENSAJE DE ERROR
        pass_01.placeholder = "El campo " + campoAfectado + " es obligatorio";
        return false;
    }
    
     if (!pass_01.value.match(rex))//Valido con un patron opcional
    {
        pass_01.value = "";
        pass_01.placeholder = "El campo " + campoAfectado + " no cumple el patron";
        return false;
    }
    
    if ((pass_02.value.trim() === ""))//Valido que el dato introduccido no este vacio
    {
        pass_02.value = "";
        pass_02.placeholder = "El campo " + campoAfectado + " es obligatorio";
        return false;
    }

    if (pass_01.value !== pass_02.value) {

        pass_02.value = "";
        pass_02.placeholder = "campos no iguales";
        return false;
    }

    return true;

}