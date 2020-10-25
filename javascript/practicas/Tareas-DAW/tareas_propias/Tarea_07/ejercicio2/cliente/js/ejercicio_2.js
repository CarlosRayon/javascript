$(document).ready(iniciarJavaScript);

/*Costantes que guardan los estados correctos del objeto y del servidor*/
const ESTADO_FINALIZADO = 4;
const CODIGO_EXITO = 200;

function iniciarJavaScript()
{
    //Llamo a la funcion que tengo en un archivo aparte que me ubica el usuario en el mapa
    ubicacionUsuario();

    //Capturo el input y cada vez que pulsemos sobre el llama a la funcion de busqueda ajax a la base datos
    $("#poblacion").on("keyup", botonPulsado);
    //Evento para cuando pulse el boton buscar
    $("#buscar").on("click", buscar);
}

//LOGICA PARA LA SUGUERENCIA DE POBLACION (AJAX NATIVO)
//Funcion que crea el objeto XMLHtppRequest y hace la peticion al servidor
function botonPulsado()
{
    //Capturo los datos del input convertidos a miniscular para ser coherente con la base datos
    var datosInput = $(this).val().toLowerCase();
    //Creo una uri que tendra de parametros recibidos. Uso
    var uri = "../servidor/sugerencia_poblaciones.php?sugerencia=" + datosInput;

    //Creo el objeto XMLHttpRequest
    var miXHR = new XMLHttpRequest();

    miXHR.onreadystatechange = datosRecibidos;//Cuando el estado cambie llama a esta funcion

    miXHR.open("GET", uri);//Preparo la peticion
    miXHR.send(null);//Efectuo la peticion

}

//Funcion que devuelve la peticion al servidor y muestro los datos en una lista
function datosRecibidos()
{
    $("#informacion").attr("class", "oculto");//Pongo oculta la clase informacion 

    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var respuesta = JSON.parse(this.responseText);// capturo la respuesta y convertimos el objeto JSON 

        $("#sugerencia").remove();//borramos el div en caso de que exista para evitar repeticiones

        //Creamos y añadimos la estructura con los datos
        var $divSugerencia = $("<div></div>").attr("id", "sugerencia");
        var $ul = $("<ul></ul>");

        for (var i = 0; i < respuesta.length; i++)
        {
            var $li = $("<li></li>");
            $li.text(respuesta[i].poblacion);
            $ul.append($li);
        }
        $divSugerencia.append($ul);
        $("body").append($divSugerencia);

        /* estructura del div creado
         <div id="sugerencia">
         <ul>
         <li>Datos</li>
         <li>Datos</li>
         </ul>
         </div>
         */

        //Pequeñp codigo para comprobar que si la respuesta esta vacia datos borre la suguerencia
        if (Object.keys(respuesta).length === 0) {
            $("#sugerencia").remove();
        }

        //Doy un evento a cada elemento de la lista de sugerencias
        $("li").on("click", seleccionado);
    }

    //Si al final de todo el input esta vacio borramos el div sugerencias
    datosVacios();
}
//Funcion que quita el div suguerencia si el input esta vacio
function datosVacios() {
    var datosVacios = $("#poblacion").val();
    if (datosVacios === "") {
        $("#sugerencia").remove();
    }
}

//Function para comprobar si la respuesta del array de respuesta esta vacio 
function respuestaVacia() {

}

/*Funcion que pone el dato seleccionado en el input*/
function seleccionado()
{
    $("#poblacion").val($(this).text());
    $("#sugerencia").remove();
}

//LOGICA PARA BUSCAR POBLACIONES Y PONERLAS EN EL MAPA (AJAX con JQUERY)
//Funciones para buscar los datos y mostrarlos en el mapa 
function buscar()
{
    //Paso como parametro el valor de la poblacion
    $.post("http://localhost/Carlos_Rayon_Alvarez_DWEC_Tarea_07/ejercicio2/servidor/info_poblacion.php", {poblacion: $("#poblacion").val()}, null, "xml")
            .done(respuesta)
            .fail(error);
}

function respuesta(datos)
{
    var poblacion = datos.getElementsByTagName("poblacion");//De los datos cogo la etiqueta poblacion
    var $informacion = $("#informacion");//Capturo el div informacion para usar a posterior

    if (poblacion[0].firstChild.nodeValue === "NO EXISTE")//Si el valor devuelto es NO EXISTE
    {
        $("#sugerencia").remove();//Borro las suguerencia
        $informacion.attr("class", "visible");//Hago visible la informacion
        $informacion.html("<p>" + poblacion[0].firstChild.nodeValue + "</p>");//Y a la informacio le pongo el valor devuelo (osea NO EXISTE)
    } else   //Si la informacion existe
    {
        $("#sugerencia").remove();//Borramos div suquerencias
        $informacion.attr("class", "visible");//Visible la informaion y añadimos la informacion de la poblacion devuelta por la consulta
        $informacion.html("<p>PROVINCIA: " + poblacion[0].getElementsByTagName("provincia")[0].firstChild.nodeValue + "</p><p>CODIGO POASTAL: "
                + poblacion[0].getElementsByTagName("codpostal")[0].firstChild.nodeValue + "</p>");

        //Creo un div con id mapa y se le añado a la informacion
        var $divMapa = $("<div></div>").attr("id", "mapa");
        $informacion.append($divMapa);

        //Obtengo la latitud y longitus de la respuesta de la base datos.(La convierto a float para que funcione en la funcion de maps)
        var latitud = parseFloat(poblacion[0].getElementsByTagName("latitud")[0].firstChild.nodeValue);
        var longitud = parseFloat(poblacion[0].getElementsByTagName("longitud")[0].firstChild.nodeValue);

        //Estas coordenadas las pongo como objeto literal que sera el que le pase a las diferentes variables map  
        var myLatLng = {lat: latitud, lng: longitud};
        /*Con la longitud y latitud ya obtenidas esta se las pasamos a las diferentes variables de map que crearan diferentes mapas*/
        // OBLIGARTORIO!!! Crea el mapa y le pone en el div que queramos en el html
        var map = new google.maps.Map(document.getElementById('mapa'), {
            center: myLatLng,
            zoom: 15
        });
    }
}

//Funcion para que en caso de error muestre un estado en el div de informacion
function error(xhr, estado, error)
{
    $("#informacion").html("<p>Error" + estado + "</p>");
}