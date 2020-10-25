function elementoID(id){
    return document.querySelector("#"+id);
}



function validaDatos(evento) {
    var e = evento || window.event;//Por si tenemos una version vieja del Explore
    if (validarNombre() && validarApellido() && validarEmail() && validarPass() && validarSelect()) {
        intentos[0].innerHTML = "Este es tu primer intento";
    } else
    {
        var intentos = document.getElementsByClassName("linea_formulario intentos");
        if (intento < 3) {
            intento++;
            
            intentos[0].innerHTML = "Este es tu " + arrayIntentos[intento];
            e.preventDefault();
        }else
        {
            intentos[0].innerHTML = "Recarga para reiniciar intento";
             e.preventDefault();
        }
    }

}

function validarNombre() {//Si no queremos expresion regular ""
    var dato = document.getElementById("nombre");

    var expresion = "^[a-z]{1,5}$";
    var rex = new RegExp(expresion);//Expresion regular
    if ((dato.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo nombre es obligatorio";
        return false;
    } else if (!isNaN(dato.value))//Valido que sea solo letras
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo nombre solo admite letras";
        return false;

    } else if (!dato.value.match(rex))//Valido con un patron opcional
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo nombre no cumple el patron";
        return false;
    }
    dato.style.borderColor = "black";
    return true;

}
function validarApellido() {//Si no queremos expresion regular ""
    var dato = document.getElementById("apellidos");
    var expresion = "^[a-z]{1,5}[ ][a-z]{1,5}$";
    var rex = new RegExp(expresion);//Expresion regular

    if ((dato.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo apellido es obligatorio";
        return false;
    } else if (!isNaN(dato.value))//Valido que sea solo letras
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo apellido solo admite letras";
        return false;

    } else if (!dato.value.match(rex))//Valido con un patron opcional
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo apellido no cumple el patron";
        return false;
    }
    dato.style.borderColor = "black";
    return true;

}

function validarEmail() {//Si no queremos expresion regular ""
    var dato = document.getElementById("email");
    var expresion = "^[a-z]{1,5}[\.][a-z]{1,5}$";
    var rex = new RegExp(expresion);//Expresion regular

    if ((dato.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo email es obligatorio";
        return false;
    } else if (!isNaN(dato.value))//Valido que sea solo letras
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo email solo admite letras";
        return false;

    } else if (!dato.value.match(rex))//Valido con un patron opcional
    {
        dato.value = "";
        dato.style.borderColor = "red";
        dato.placeholder = "El campo email no cumple ^[a-z]{1,5}[\.][a-z]{1,5}$";
        return false;
    }
    dato.style.borderColor = "black";
    return true;
}


function validarPass() {
    var pass_01 = document.getElementById("password");
    var pass_02 = document.getElementById("password2");
//   var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error
    var expresion = "^[0-9]{4}$";
    var rex = new RegExp(expresion);//Expresion regular

    if ((pass_01.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        pass_01.style.borderColor = "red";
        pass_01.value = "";                                     // MODIFICAR PARA PONER QUE QUIERO Y DONDE EN MENSAJE DE ERROR
        pass_01.placeholder = "El campo pass es obligatorio";
        return false;
    }

    if (!pass_01.value.match(rex))//Valido con un patron opcional
    {
        pass_01.style.borderColor = "red";
        pass_01.value = "";
        pass_01.placeholder = "El campo pass no cumple ^[0-9]{4}$";
        return false;
    }

    if ((pass_02.value.trim() === ""))//Valido que el dato introduccido no este vacio
    {
        pass_02.style.borderColor = "red";
        pass_02.value = "";
        pass_02.placeholder = "El campo pass doses obligatorio";
        return false;
    }

    if (pass_01.value !== pass_02.value) {

        pass_02.style.borderColor = "red";
        pass_02.value = "";
        pass_02.placeholder = "campos no iguales";
        return false;
    }
    pass_01.style.borderColor = "black";
    pass_02.style.borderColor = "black";
    return true;
}

function validarSelect()
{
    var valor = document.getElementById("favorito");//Capturo el valor del select  
    if (valor.value === "none")//RECUERDA!!!normalmente el valor es none
    {
        valor.style.borderColor = "red";
        return false;
    }
    valor.style.borderColor = "black";
    return true;
}
