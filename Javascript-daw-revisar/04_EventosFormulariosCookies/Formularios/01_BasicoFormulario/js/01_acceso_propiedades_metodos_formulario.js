window.addEventListener("load", formulario);


function formulario()
{
    document.getElementById("nombre").addEventListener("click", acceso_propiedades_metodos_formulario);//Cambiar la funcion segun tema de estudio
//    document.getElementById("enviar").addEventListener("click", validarFormu);
}


function acceso_propiedades_metodos_formulario()
{
    /*Podemos capturar el formulario de estas formas*/
    /* Opción 1 */

    var formulario = document.getElementById("formulario");

    /* Opción 2 */
    var formularios = document.getElementsByTagName("form");
    var primerFormulario = formularios[0];
    /* Opción 2 (en una línea) */
    var formulario = document.getElementsByTagName("form")[0];

    /* Opción 3 */var formulario = document.forms[0];

    /*Y usar las siguietes propiedades y metodos del objeto formulario*/
    
    console.log(formulario.length);//cuanto elementos tiene
    console.log(formulario.action);//atributo action Nos dara la ruta tipo https://etc/etc
    console.log(formulario.name);//Atributo name
    console.log(formulario.method);//Atributo method  nos dara get o post
    console.log(formulario.target);//Atributo target 	Da el nombre de una ventana o sección a la que son enviados los datos. Solamente para Netscape e Internet Explorer.
    
}

function accesoContenido(){
    
    
    
}