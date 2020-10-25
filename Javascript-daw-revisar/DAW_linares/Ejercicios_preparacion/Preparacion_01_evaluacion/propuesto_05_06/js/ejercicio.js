


window.addEventListener("load", cargarEventos);

function elementoID(id) {
    return document.querySelector("#" + id);
}

function cargarEventos()
{
    document.getElementById("enviar").addEventListener("click", procesarFormulario);
    obtenerLiteralStorage("objetoFormu");
}

function procesarFormulario(e)
{

    if (validarEntradaCadena("nombre", "nombre", "nombre", "", "") && validarEntradaCadena("apellidos", "apellidos", "apellidos", "", "")
            && validarEntradaCadena("fecha_nacimiento", "fecha_nacimiento", "fecha", "^[1-9]/[1-9]/[1-9]$", "") && validarEntradaCadena("dni", "dni", "dni", "^[0-9]{5}[A-Z]{1}$")
            && validarEntradaCadena("email", "email", "email", "", "") && validarPassWord("password", "password2", "password", ".{6,}", "") && validarSelectValue("favorito", "Sin selecionar el select"))
    {

        var nombre = elementoID("nombre").value;

        var apellidos = elementoID("apellidos").value;
        var fecha = elementoID("fecha_nacimiento").value;
        var dni = elementoID("dni").value;
        var pass = elementoID("password").value;
        var sexo = valorRadioButton("genero");

        if (valorCheckBox("boletin") !== "none") {
            var boletin = true;
        } else
        {
            var boletin = false;
        }

        if (valorCheckBox("ofertas") !== "none") {
            var ofertas = true;
        } else
        {
            var ofertas = false;
        }
        var favorito = elementoID("favorito").value;
        var comentario = elementoID("comentario").value;

        var objetoFormulario = {
            nombre: nombre,
            apellidos: apellidos,
            fecha: fecha,
            dni: dni,
            pass: pass,
            sexo: sexo,
            boletin: boletin,
            ofertas: ofertas,
            favorito: favorito,
            comentario: comentario
        };

        guardarLiteralStorage("objetoFormu", objetoFormulario);

    } else {
        var nombre = elementoID("nombre").value;
        e.preventDefault();
    }
}

function validarPassWord(id, id_2, campoAfectado, expresion, modificador) {
    var pass_01 = document.getElementById(id);
    var pass_02 = document.getElementById(id_2);
//    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error
    var rex = new RegExp(expresion, modificador);//Expresion regular

    if ((pass_01.value.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        pass_01.value = "";
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