
window.addEventListener("load", formulario);

function formulario()
{
    document.getElementById("nombre").addEventListener("click", accesoContenido);//Cambiar la funcion segun tema de estudio
//    document.getElementById("enviar").addEventListener("click", validarFormu);
}


function accesoContenido()
{
    var formulario = document.forms[0];//Capturamos el formulario de una de las formas que ya vimos

    /*elements es un array con todos los elementos del formulario y podemos acceder a cualquiera de ellos*/

    console.log(formulario.elements.length);//Cuanto elementos tenemos

    console.log(formulario.elements[5].type);//Accedemos a un elemento y podemos ver sus propiedades

    /*Podemos vaciar todos los elemementos de typo text por ejemplo RECUERDA!!! Funcion en Libreria*/
    for (var i = 0; i < formulario.elements.length; i++)
        if (formulario.elements[i].type == "text")
            formulario.elements[i].value = "";


    /*ACCESO ELEMENTOS
            -Podemos acceder a los elementos del formulario de la siguietne manera
     */
    document.getElementById("nombre"); //Por id
    document.formulario.nombre;//Por nombres directamente
    document.forms["formulario"].elements["nombre"];//id formulario y nombre del elemento
    document.forms["formulario"].nombre;//id y nombre elemento
    
    //Verificamos
    console.log(document.forms["formulario"].elements["nombre"]);
}

