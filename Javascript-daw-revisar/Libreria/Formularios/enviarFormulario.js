 /*
 * Funcion que valida dos datos de un formulario y manda el formulario
 * @argument {obj} obj1  OPCIONAL
 * @argument {obj} obj2  OPCIONAL
 * @argument {obj} obj3  OPCIONAL
 */
function validaPassMandarFormulario(obj1, obj2, obj3)
{
    var contrasena = document.getElementById(obj1).value;
    var pass = document.getElementById(obj2).value;

    if ((contrasena == pass) && (nombre != ""))
    {
        //Capturo el formulario y cambio sus atributos...
        // var formulario = document.obj3;
        var formulario = document.getElementById(obj3);
        formulario.action = "dondemandarformulario.html";
        formulario.method = "get";//post;
        //Mando el formulario
        formulario.submit();
    }
}
;