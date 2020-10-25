/* 
 Archivo donde defino toda la logica de la obtencion de datos y el dibujo de los mismo en el mapa
 */

//Funcion que hace la llamada ajax para obtener los datos con lo que trabajaremos
function obtenerDatosParkings()
{
    var opciones = {//Definimos las opciones del metodo ajax en forma de objeto literal       
        method: "get", //Forma de peticion get o post
        url: "../servidor/estado_parkings.php", //URL del script php
        // response:"json", Con este response no devuelve el bien los valores me devuelve string
        dataType: "json", //Parametros que recibimos json  
        data: {null: null} //Parametros que el pasamos en la peticion Si no queremos parametros ponemos null:null
    };
    
    //Hacemos la llamada ajax
    $.ajax(opciones)
            .done(exito)
            .fail(error);
}

//Funcion que si la peticion ajax tiene exito devuelve los datos obtenidos
function exito(datos)
{
    //Con los datos obtenidos por la peticion ajax genero los objetos y dibujo los iconos
    if (listado.getNumeroParkings() === 0)
    {
        //opcion que entiendo que es como se pide en el ejercicio pero me parece redundante...
        for (var i = 0; i < datos.length; i++) {
            var objetoParking = {
                id: datos[i].id,
                porcentajeOcupacion: datos[i].porcentaje,
                coordenadas: datos[i].coordenadas,
                nombre: datos[i].nombre
            };
            listado.addParking(objetoParking);
        }
        
        dibujarIconos();//Dibujamos los iconos con los datos en el mapa
        
    } else //ya tenemos datos en la lista
    {
        for (var i = 0; i < datos.length; i++) {
            listado.actualizarPorcentaje(datos[i].id, datos[i].porcentaje);
        }
        
        resetIconos();//Borro los iconos
        dibujarIconos();//Los vuelvo a dibujar ya con los valores de porcentaje nuevo
    }
    
    //Independientemente de una cosa u otra ya tendremos creados los iconos por lo que le doy eventos
    eventosIconos();
}

//Funcon que inicia eventos a los iconos
function eventosIconos() {
    //Como de una u otra manera ya tendremos los iconos creados, los capturamos y le agregamos el evento para actualizarlos individualmente
    var iconos = document.getElementsByClassName("info-parking");
    for (var i = 0; i < iconos.length; i++) {
        iconos[i].addEventListener("click", datosParking);
    }
}

//Funcion que dibuja los iconos en el mapa
function dibujarIconos()
{
    for (var i = 0; i < listado.getNumeroParkings(); i++) {
        var infoParking = document.createElement("div");
        infoParking.id = listado.getListadoParking()[i].id;
        infoParking.classList.add("info-parking", porcentaje(listado.getListadoParking()[i].porcentajeOcupacion));
        infoParking.title = listado.getListadoParking()[i].nombre;
        infoParking.style.left = listado.getListadoParking()[i].coordenadas[0] + "px";
        infoParking.style.top = listado.getListadoParking()[i].coordenadas[1] + "px";
        document.getElementById("mapa").appendChild(infoParking);
    }
}

//Funcion que elimina todos los hijos del mapa (elimina los iconos para volver a ponerlos despues)
function resetIconos() {
    var mapa = document.getElementById("mapa");
    while (mapa.hasChildNodes())
    {
        mapa.removeChild(mapa.firstChild);
    }
}

//Funcion que genera la logica del tratamiento del porcentaje
function porcentaje(porcentajeOcupacion) {
    /*Resto al porcentaje maximo de plazas el porcentaje de ocupacion
     * con lo que obtengo el porcentaje de plazas libres
     */
    const MAXIMO_PORCENTAJE = 100;
    var plazasLibres = MAXIMO_PORCENTAJE - porcentajeOcupacion;
    //Tipo incono segun el porcentanje de plazas libres
    var icono = "";
    if (plazasLibres < 25) {
        icono = "rojo";
    } else if ((plazasLibres >= 25) && (plazasLibres < 50)) {
        icono = "naranja";
    } else if ((plazasLibres > 50) && (plazasLibres < 75)) {
        icono = "azul";
    } else {
        icono = "verde";
    }
    return icono;
}

//Funciones de llamada a un parking concreto y modificacion del mismo
function datosParking() {
    //creamos el objeto 
    var miXHR = new XMLHttpRequest();
    miXHR.onreadystatechange = cambiaEstado;
    //Efectuamos la llamada
    var uri = "../servidor/estado_parkings.php?id=" + this.id;
    miXHR.open("GET", uri);
    miXHR.send(null);
}

function cambiaEstado()
{
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;
    
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var datosRecogidos = JSON.parse(this.responseText);//Recogemos los datos como objetos JSON
        listado.actualizarPorcentaje(parseInt(datosRecogidos.id), datosRecogidos.porcentaje);//parseint para que el tipo de dato concuerde 
        //Reseteamos
        resetIconos();
        dibujarIconos();
        //Volvemos  a dar eventos a los iconos
        eventosIconos();
    }

}

//Funcion para que en caso de error muestre un error en un alert 
function error(xhr, estado, error)
{
    alert("Objeto xhr " + xhr);
    alert("estado " + estado);
    alert("Mensaje de error " + error);
}

