/* 
 Logica del programas
 */
window.addEventListener("load", inicializadora);
var tablero = new Tablero();

/*Funcion que inica el programa*/
function inicializadora()
{
    //Genero el tablero al cargar la pagina
    creartablero();

    //Doy eventos a los recuadros de selecion de color
    var color = document.getElementsByClassName("color");  //Capturo todos los elementos de clase color...  
    for (var i = 0; i < color.length; i++) {//...A todos ellos les asocio el mismo evento
        color[i].addEventListener("click", seleccionColor);
    }

}

/*Funcion que captura el color del recuadro, le remarca y prepara las celdas para ser usadas*/
function seleccionColor()
{
    /*Hago un reinicio de elementos que me pueden provocar repeticiones en el programa*/
    quitarClassSeleccionado();//Quito la clase seleccionado para evitar repeticiones   
    desactivoPincel();//Desactivo modo pintura para evitar que siga activo al cambiar de color con el modo activo

    /*Preparo la informacion sobre el estado del pincel*/
    var color = this.id;//capturo el id del recuadro de color pulsado (el color de la pintura)  
    tablero.setColorPintura(color);//Se le paso a propiedad del tablero para poder usarlo en el resto del programa
    var colorPulsado = document.getElementById(color);//Capturo el recuadro pulsado por su id...
    colorPulsado.classList.add("seleccionado");//...y le añado la clase seleccionado
    cambiarEstadoInactivo();//Pongo el estado en inactivo 

    /*Preparo las celdas para que al pulsar sobre ellas efectuen una accion*/
    //Damos eventos a todas las celdas
    var celdas = document.getElementsByClassName("celdadibujo");
    //A todos ellos les asocio el evento que al pulsar sobre ella se pueda colorear
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("click", celdasActivas);
    }

}

/*Funcion que cambia el color(background) de las celdas al pasar por encima*/
function celdasActivas()
{
    //Damos eventos a todas las celdas
    var celdas = document.getElementsByClassName("celdadibujo");
    //A todos ellos les asocio el mismo evento 
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener("mouseover", activoPincel);//Activamos el pincel

        //reinvierto la opcion de activar/desactivar el pincel de las celdas
        celdas[i].removeEventListener("click", celdasActivas);//borro el evento para...
        celdas[i].addEventListener("click", desactivoPincel);//...añadir el evento para al pulsar de nuevo la celda se desactive el pincel
    }
    cambiarEstadoActivo();//Indicamos que el pincel esta activo
}

/*Funcion que activa el modo de pintar*/
function activoPincel()
{
    this.id = tablero.getColorPintura();//Cuando el cursor pase sobre la celda cambie su id
    document.body.style.cursor = "pointer";//... y cambie el formato del cursos
}

/*Funcion que desactiva el poder pintar*/
function desactivoPincel() {
    /*Capturo todas las celdas*/
    var celdas = document.getElementsByClassName("celdadibujo");
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].removeEventListener("mouseover", activoPincel);//Quito el evento que activa  el pincel

        //reinvierto la opcion de activar/desactivar el pincel de las celdas
        celdas[i].removeEventListener("click", desactivoPincel);
        celdas[i].addEventListener("click", celdasActivas);//Si pulso ahora sobre la celda comienzan el proceso
    }

    document.body.style.cursor = "auto";//pongo el formato del cursor como estaba inicialmente
    cambiarEstadoInactivo();//Pongo el estado del pincel en inactivo
}

/*Funcion para quitar la clase "seleccionado" (Para evitar que al pulsar otro boton el anterior quede seleccionado*/
function quitarClassSeleccionado()
{
    var color = document.getElementsByClassName("color");
    //A todos ellos les asocio el mismo evento
    for (var i = 0; i < color.length; i++) {
        color[i].classList.remove("seleccionado");
    }
}

/*Funciones para cambiar la informacion del estado del pincel*/
function cambiarEstadoActivo()
{
    //Cambio el estado de la informacion del pincel
    var estadoPincel = document.getElementById("estado");
    estadoPincel.innerHTML = "ACTIVO";
    estadoPincel.style.color = "red";
}
function cambiarEstadoInactivo()
{
    //Cambio el estado de la informacion del pincel
    var estadoPincel = document.getElementById("estado");
    estadoPincel.innerHTML = "INACTIVO";
    estadoPincel.style.color = "red";
}


/*Funcion que crear la estructura HTML del tablero*/
function creartablero()
{
    //TABLERO
    //Creo el contenedor del tablero
    var divContenedor = document.createElement("div");
    divContenedor.id = "contenedor";

    //ENCABEZADO
    //Creo encabezado tablero
    var h1 = document.createElement("h1");
    h1.innerHTML = "TABLERO DE DIBUJO";

    //Añado al contenedor tablero
    divContenedor.appendChild(h1);

    //PALETA DE COLORES
    //Creo el div de la paleta
    var divPaleta = document.createElement("div");
    divPaleta.id = "paleta";
    //Creo del parrafo con la informacion que tendra
    var parrafoInfoPaleta = document.createElement("p");
    parrafoInfoPaleta.innerHTML = "Haga CLICK en el boton para empezar a pintar";
    //Añado el parrafo a la paleta
    divPaleta.appendChild(parrafoInfoPaleta);


    //Añadimos los colores a la paleta
    for (var i = 0; i < tablero.getArrayColores().length; i++) {//Tantas veces como colores del array
        //Creo el div que tendra el color a elegir
        var divColor = document.createElement("div");
        divColor.id = tablero.getArrayColores()[i];//Creo con id sacado del array de colores
        divColor.className = "color";//Y clase color que sera la misma para todos
        //Añado el divColor como hijo de la paleta
        divPaleta.appendChild(divColor);
    }


    //Creo el parrafo y el span que cambiara dinamicamente su contendio a seleccionar un color u otro
    var parrafoEstado = document.createElement("p");
    parrafoEstado.innerHTML = "Estodo del pincel: ";

    //Creo el span 
    var spanEstado = document.createElement("span");
    spanEstado.id = "estado";//Un id para capturarlos a posterir mejor
    spanEstado.innerHTML = "SIN SELECCIONAR";//Texto que contiene
    //Añado el span al parrafo
    parrafoEstado.appendChild(spanEstado);

    //Añado el parrafo del estado a la paleta
    divPaleta.appendChild(parrafoEstado);

    //Añado la paleta al contenedor
    divContenedor.appendChild(divPaleta);

    //ZONA DE DIBUJO
    //Creo el div de la zona de dibujo de las filas y las celdas
    var divZonaDibujo = document.createElement("div");
    divZonaDibujo.className = "zonadibujo";


    for (var i = 0; i < tablero.getFilas(); i++) {//Repite 40 veces(40 filas)
        //Creo el div fila que tendra las celdas
        var divFila = document.createElement("div");
        divFila.className = "filadibujo";

        for (var z = 0; z < tablero.getCeldas(); z++) {//Por cada fila creo 40 div celdas y cada uno de ellos se lo añado a la fila
            var divCelda = document.createElement("div");//Creo la celda
            divCelda.className = "celdadibujo";
            divFila.appendChild(divCelda);//añado al divfila
        }

        //Añado cada fila con sus celdas a la zona de dibujo
        divZonaDibujo.appendChild(divFila);
    }

    //Añado al contenedor la zona de dibujo
    divContenedor.appendChild(divZonaDibujo);

    //Por ultimo añado el div contenedor con todos sus elementos a al body
    document.body.appendChild(divContenedor);
}