window.addEventListener("load", iniciarApli);
var arrayIntentos = new Array("primer", "segundo", "tercer", "cuarto");
var intento = 0;
function iniciarApli()
{
    var nombre = elementoID("nombre").addEventListener("blur", validarNombre);
    var apellido = elementoID("apellidos").addEventListener("blur", validarApellido);
    var email = elementoID("email").addEventListener("blur", validarEmail);
    var pass = elementoID("password").addEventListener("blur", validarPass);
    var pass_rp = elementoID("password2").addEventListener("blur", validarPass);
    var select = elementoID("favorito").addEventListener("blur", validarSelect);

    var select = elementoID("enviar").addEventListener("click", validaDatos);
}


