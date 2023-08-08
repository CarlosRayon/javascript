/* 
 @author Carlos Rayon Alvarez
 */
var tienda = new Tienda();
//FUNCION QUE PONE EVENTOS A LOS BOTONES
function inicializarEventos()
{
    //eventos para el boton guardarDisco  
    document.getElementById("guardar").addEventListener("click", capturarDatosGuardar, false);
    //eventos para el boton eliminar
    document.getElementById("eliminar").addEventListener("click", eliminarDisco, false);
    //eventos para el boton ver discos
    document.getElementById("ver").addEventListener("click", verDisco, false);
    //eventos para el boton modificar
    document.getElementById("modificar").addEventListener("click", modificarDisco, false);
}
;

//FUNCION PARA GUARDAR LOS DATOS EN UN NUEVO DISCO
function capturarDatosGuardar()
{
    var titulo = document.getElementById("titulo").value;
    var cantante = document.getElementById("cantante").value;
    var fecha = document.getElementById("fecha").value;
    var estanteria = document.getElementById("estanteria").value;
    var tipoMusica = document.getElementById("tipo").value;
    var prestado = capturarRadio();

    /*Funcion anonima autoinvocada para conseguir un valor acorde de la variable Prestado
     * para pasar el valor por parametros
     * @returns {Boolean} 
     */
    prestado = (function ()
    {
        if (prestado == "si")
        {
            return true;
        } else
        {
            return false;
        }
    }());


    /*Comprobamos los datos que el usuario introduce en los input
     * Si todos los datos son correctos segun nuestro varemo entonce añadimos un disco a la tienda
     */

    if (titulo.trim() == "")
    {
        hacerAparecerObjeto("informacion", "El campo \"nombre\" esta vacio", "red", "block");
    } else if (cantante.trim() == "")
    {
        hacerAparecerObjeto("informacion", "El campo \"cantante\" esta vacio", "red", "block");
    } else if (fecha == "")

    {
        hacerAparecerObjeto("informacion", "El campo \"fecha\" esta vacio", "red", "block");

    } else if (estanteria.trim() == "" || isNaN(estanteria) || estanteria <= 0 || estanteria > 10)
    {
        hacerAparecerObjeto("informacion", "El campo \"estanteria\" esta vacio o no es correcto", "red", "block");
    } else if (tipoMusica == "none")
    {
        hacerAparecerObjeto("informacion", "El campo \"Tipo de musica\" esta vacio sin selecionar", "red", "block");

    } else {
        /*Si todos los datos son correctos y el disco que queremos añadir no exite ya en la tienda
         añadimos un nuevo disco a la tienda. 
         */
        /*La fecha la valido mediante HTML aqui lo que hago es ponerla en el formato dd/mm/yyyy*/

        // fecha=formato(fecha);
        fecha = formato(fecha);

        var discoGuardado = tienda.addDisco(titulo, cantante, tipoMusica, fecha, estanteria, prestado);

        /*Evaluamos la variable si todo ha sido correcto sera true sino sera false
         // Tambien funciona correctamente
         switch (discoGuardado)
         {
         case true:
         hacerAparecerObjeto("informacion", "Todo Esta Correcto", "green", "block");
         break;
         
         case false:
         hacerAparecerObjeto("informacion", "El disco \"" + titulo +"\" ya exite", "red","block");
         
         break;
         }
         */
//Mas sencillo asi con operador ternario
        discoGuardado == true ? hacerAparecerObjeto("informacion", "Se ha guardado \"" + titulo + "\" Correctamente", "green", "block") : hacerAparecerObjeto("informacion", "El disco \"" + titulo + "\" ya exite", "red", "block");

    }

    document.getElementById("listado").innerHTML = mostrarLista(discoGuardado);
}


//FUNCION PARA VER LOS DATOS DE UN DISCO
function verDisco()
{
    var titulo = document.getElementById("titulo").value;

    var existe = tienda.existeDisco(titulo);

    if (existe) {
        hacerAparecerObjeto("informacion", "El disco \"" + titulo + "\" existe en la tienda", "green", "none");

        for (var i = 0; i < tienda.Discos.length; i++)
        {
            if (titulo.toUpperCase() == tienda.Discos[i].titulo.toUpperCase())
            {
                disco = tienda.getDisco(i);
                break;
            }
        }

        hacerAparecerObjeto("listado", mostrarDatosDisco(disco), "green", "block");

    } else {
        hacerAparecerObjeto("informacion", "El disco \"" + titulo + "\" no existe en la tienda", "red", "block");
    }

}


//FUNCION PARA ELIMINAR UN DISCO POR SU NOMBRE
function eliminarDisco()
{
    var titulo = document.getElementById("titulo").value;
    var discoEliminado = tienda.deleteDisco(titulo);

    if (discoEliminado)
    {
        hacerAparecerObjeto("informacion", "El disco\"" + titulo + "\" ha sido borrado", "green", "block");
    } else {
        hacerAparecerObjeto("informacion", "El disco\"" + titulo + "\"no existe en la tienda", "red", "block");
    }

    document.getElementById("listado").innerHTML = mostrarLista(true);
}
;

//FUNCION PARA MODIFICAR LOS DATOS
function modificarDisco()
{
    var titulo = document.getElementById("titulo").value;
    var cantante = document.getElementById("cantante").value;
    var fecha = document.getElementById("fecha").value;
    var estanteria = document.getElementById("estanteria").value;
    var tipoMusica = document.getElementById("tipo").value;
    var prestado = capturarRadio();

    if (tienda.existeDisco(titulo))
    {

        prestado = (function ()
        {
            if (prestado == "si")
            {
                return true;
            } else
            {
                return false;
            }
        }());

        if (titulo.trim() == "")
        {
            hacerAparecerObjeto("informacion", "El campo \"nombre\" esta vacio", "red", "block");
        } else if (cantante.trim() == "")
        {
            hacerAparecerObjeto("informacion", "El campo \"cantante\" esta vacio", "red", "block");
        } else if (fecha == "")

        {
            hacerAparecerObjeto("informacion", "El campo \"fecha\" esta vacio", "red", "block");

        } else if (estanteria.trim() == "" || isNaN(estanteria) || estanteria <= 0 || estanteria > 10)
        {
            hacerAparecerObjeto("informacion", "El campo \"estanteria\" esta vacio o no es correcto", "red", "block");
        } else if (tipoMusica == "none")
        {
            hacerAparecerObjeto("informacion", "El campo \"Tipo de musica\" esta vacio sin selecionar", "red", "block");

        } else {

            fecha = formato(fecha);

            var discoGuardado = tienda.modificaDisco(titulo, cantante, tipoMusica, fecha, estanteria, prestado);

            discoGuardado == true ? hacerAparecerObjeto("informacion", "Se ha modificado \"" + titulo + "\" Correctamente. Pulsa ver Disco para ver los cambios", "green", "block") : hacerAparecerObjeto("informacion", "No se ha podido modificar el \"" + titulo + "\" por un error", "red", "block");

            document.getElementById("listado").innerHTML = mostrarLista(true);
        }
    } else
    {
        hacerAparecerObjeto("informacion", "El disco no existe", "red", "block");
    }
}


/*Funcion que muestra una lista con los disco disponibles en nuestra tienda cuando recibe un argumento true
 * 
 * @param {Boolean} valor
 * 
 * @return {String}
 */
function mostrarLista(valor) {
    var mostrarEnPantalla;

    if (valor)
    {
        mostrarEnPantalla = "<p>Hay" + tienda.getNumeroDiscosDisponibles() + " discos disponible</p>";
        mostrarEnPantalla += "<ol>";

        for (var i = 0; i < tienda.Discos.length; i++)
        {
            if (tienda.getDisco(i).prestado === false)
                mostrarEnPantalla += "<li>" + tienda.getTituloDisco(i) + "</li>";
        }
        mostrarEnPantalla += "</ol>";
    }
    return mostrarEnPantalla;
}

function mostrarDatosDisco(obj) {
    var mostrarPantalla;

    mostrarPantalla = "<p>El disco tiene los siguentes datos</p>";
    mostrarPantalla += "<ol>";
    mostrarPantalla += "<li>" + obj.titulo + "</li>";
    mostrarPantalla += "<li>" + obj.cantante + "</li>";
    mostrarPantalla += "<li>" + obj.tipoMusica + "</li>";
    /*Al modificar los datos si mantengo esta instruccion me da error al mostrar los datos por eso muestro los datos fecha tal cual
     mostrarPantalla += "<li>" + obj.fecha.getDay() + "/" + obj.fecha.getMonth() + "/" + obj.fecha.getFullYear() + "</li>";*/
    mostrarPantalla += "<li>" + obj.fecha + "</li>";//Asi no me produce ningun error la fecha
    mostrarPantalla += "<li>" + obj.estanteria + "</li>";
    mostrarPantalla += "<li>" + obj.prestado + "</li>";

    mostrarPantalla += "<ol>";
    return mostrarPantalla;
}

/*Funcion para capturar el valor de los radio buton
 * @returns {String} 
 * */
function capturarRadio()
{
    var resultado = "ninguno";
    var radio = document.getElementsByName("prestado");
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)
            resultado = radio[i].value;
    }
    return resultado;
}



/*Funcion para hacer aparecer un elemento y muestra el mensaje 
 * que le pasemos por parametros
 * 
 * @argument {obj} obj
 * @argument {String} mensaje
 * @argument {String} color
 * @argument {String} display
 */
function hacerAparecerObjeto(obj, mensaje, color, display) {
    document.getElementById(obj).style.display = display;
    document.getElementById(obj).innerHTML = mensaje;
    document.getElementById(obj).style.color = color;
}

/*
 * Convierte un texto de la forma 2017-01-10 a la forma
 * 10/01/2017
 
 * @param {string} texto Texto de la forma 2017-01-10
 * @return {string} texto de la forma 10/01/2017
 *
 */
function formato(texto) {
    return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
}



