/* 
 Logica del programas
 */
$(window).ready(inicializadora);
var tablero = new Tablero();

/*Funcion que inica el programa*/
function inicializadora()
{
    //Genero el tablero al cargar la pagina
    creartablero();
    /*
     var $color = $(".color");//Seleciono los elementos class color
     //Doy eventos a los recuadros de selecion de color
     for (var i = 0; i < $color.length; i++) {
     $color.eq(i).on("click", seleccionColor);
     }
     */
    //No seria necesario lo anterior, directamente vale
    var $color = $(".color").on("click", seleccionColor);
}

function seleccionColor() {
    /*Hago un reinicio de elementos que me pueden provocar repeticiones en el programa*/
    quitarClassSeleccionado();//Quito la clase seleccionado para evitar repeticiones   
    desactivoPincel();//Desactivo modo pintura para evitar que siga activo al cambiar de color con el modo activo

    /*Preparo la informacion sobre el estado del pincel*/
    var color = this.id;//capturo el id del recuadro de color pulsado (el color de la pintura)  
    tablero.setColorPintura(color);//Se le paso a propiedad del tablero para poder usarlo en el resto del programa
    var $colorPulsado = $("#" + color);//Capturo el recuadro pulsado por su id...
    $colorPulsado.addClass("seleccionado");//...y le añado la clase seleccionado
    cambiarEstadoInactivo();//Pongo el estado en inactivo 

    /*Preparo las celdas para que al pulsar sobre ellas efectuen una accion*/
    //Damos eventos a todas las celdas
    var $celdas = $(".celdadibujo");

    /*A todos ellos les asocio el evento que al pulsar sobre ella se pueda colorear
     for (var i = 0; i < $celdas.length; i++) {
     $celdas.eq(i).on("click", celdasActivas);
     }
     */
    $celdas.on("click", celdasActivas);
}

/*Funcion que cambia el color(background) de las celdas al pasar por encima*/
function celdasActivas()
{
    //Damos eventos a todas las celdas
    var $celdas = $(".celdadibujo");
    //A todos ellos les asocio el mismo evento 
    $celdas.on("mouseover", activoPincel);//Activamos el pincel
    //reinvierto la opcion de activar/desactivar el pincel de las celdas
    $celdas.off("click", celdasActivas);//borro el evento para...
    $celdas.on("click", desactivoPincel);//...añadir el evento para al pulsar de nuevo la celda se desactive el pincel

    cambiarEstadoActivo();//Indicamos que el pincel esta activo
}
/*Funcion que activa el modo de pintar*/
function activoPincel()
{
    this.id = tablero.getColorPintura();//Cuando el cursor pase sobre la celda cambie su id
    $("body").css("cursor", "pointer");//... y cambie el formato del cursos
}

/*Funcion que desactiva el poder pintar*/
function desactivoPincel() {

    var $celdas = $(".celdadibujo");//var celdas = document.getElementsByClassName("celdadibujo");
  
    $celdas.off("mouseover", activoPincel);//Quito el evento que activa  el pincel

    //reinvierto la opcion de activar/desactivar el pincel de las celdas
    $celdas.off("click", desactivoPincel);
    $celdas.on("click", celdasActivas);//Si pulso ahora sobre la celda comienza el proceso
    $("body").css("cursor", "auto");//pongo el formato del cursor como estaba inicialmente
    cambiarEstadoInactivo();//Pongo el estado del pincel en inactivo
}

/*Funcion para quitar la clase "seleccionado" (Para evitar que al pulsar otro boton el anterior quede seleccionado(*/
function quitarClassSeleccionado()
{
    var $color = $(".color");
    //Quitamos la clase seleccionado
    $color.removeClass("seleccionado");
}

/*Funciones para cambiar el estado del pincel*/
function cambiarEstadoActivo()
{
    //Cambio el estado de la informacion del pincel
    var $estadoPincel = $("#estado");
    $estadoPincel.text("ACTIVO");
    $estadoPincel.css("color", "red");
}
function cambiarEstadoInactivo()
{
    //Cambio el estado de la informacion del pincel
    var $estadoPincel = $("#estado");
    $estadoPincel.text("INACTIVO");
    $estadoPincel.css("color", "red");
}


/*Funcion que crear la estructura HTML del tablero*/
function creartablero()
{
    //TABLERO
    //Creo el contenedor del tablero
    var $divContenedor = $("<div></div>");
    $divContenedor.attr("id", "contenedor");


    //ENCABEZADO
    //Creo encabezado tablero
    var $h1 = $("<h1>");
    $h1.text("TABLERO DE DIBUJO");
    //Añado al contenedor tablero
    $divContenedor.append($h1);


    //PALETA DE COLORES
    //Creo el div de la paleta
    var $divPaleta = $("<div></div>");//var divPaleta = document.createElement("div");
    $divPaleta.attr("id", "paleta");//divPaleta.id = "paleta";

    //Creo del parrafo con la informacion que tendra
    var $parrafoInfoPaleta = $("<p></p>");
    $parrafoInfoPaleta.text("Haga CLICK en el boton para empezar a pintar");
    //Añado el parrafo a la paleta
    $divPaleta.append($parrafoInfoPaleta);


    //Añadimos los colores a la paleta
    for (var i = 0; i < tablero.getArrayColores().length; i++) {//Tantas veces como colores del array
        //Creo el div que tendra el color a elegir
        var $divColor = $("<div></div>", {"id": tablero.getArrayColores()[i], "class": "color"});
        /*En varios pasos
         $divColor.attr("id",tablero.getArrayColores()[i]);
         $divColor.attr("class","color");
         */
        //Añado el divColor como hijo de la paleta
        $divPaleta.append($divColor);
    }

    //Creo el parrafo y el span que cambiara dinamicamente su contendio a seleccionar un color u otro
    var $parrafoEstado = $("<p></p>");
    $parrafoEstado.text("Estado del pincel: ");

    //Creo el span 
    var $spanEstado = $("<span></span>");
    $spanEstado.attr("id", "estado");
    $spanEstado.text("SIN SELECIONAR");
    //Añado el span al parrafo
    $parrafoEstado.append($spanEstado);

    //Añado el parrafo del estado a la paleta
    $divPaleta.append($parrafoEstado);

    //Añado la paleta al contenedor
    $divContenedor.append($divPaleta);


    //ZONA DE DIBUJO
    //Creo el div de la zona de dibujo de las filas y las celdas
    var $divZonaDibujo = $("<div></div>");
    $divZonaDibujo.attr("class", "zonadibujo");

    for (var i = 0; i < tablero.getFilas(); i++) {//Repite 40 veces(40 filas)
        //Creo el div fila que tendra las celdas
        var $divFila = $("<div></div>");
        $divFila.attr("id", "filadibujo");

        for (var z = 0; z < tablero.getCeldas(); z++) {//Por cada fila creo 40 div celdas y cada uno de ellos se lo añado a la fila
            var $divCelda = $("<div></div>");
            $divCelda.attr("class", "celdadibujo");
            $divFila.append($divCelda);
        }

        //Añado cada fila con sus celdas a la zona de dibujo
        $divZonaDibujo.append($divFila);
    }

    //Añado al contenedor la zona de dibujo
    $divContenedor.append($divZonaDibujo);

    //Por ultimo añado el div contenedor con todos sus elementos a al body
    $(document.body).append($divContenedor);

}