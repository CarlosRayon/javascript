//Coprobamos si tenemos la geolocalizacion
//


function compruebaGeolocalizacion()
{
    //opciones opcionales
var opciones = {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 0
};
    if ("geolocation" in navigator) {//si  la tenemos
        navigator.geolocation.getCurrentPosition(exito, error, opciones);//En caso de exito o en caso de error
        return true;
    } else {
        return false;
    }
}

//Si hemos podido obtener la posicion
function exito(posicion)
{
    var localizacion = {//Pasamos la coordenadas a un objeto literal
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude

    };

    var etiqueta = "Mi ubicacion ";//Etiqueta para la marca en el mapa
    cargaMapa(localizacion, etiqueta);//Llamo a la funcion que cargara el mapa

    console.log("tus coordenadas son " + posicion.coords.latitude,
            posicion.coords.longitude);
}


function cargaMapa(localizacion,etiqueta)
{
    var opcionesMapa = {zoom: 10};
    var mapa = new google.maps.Map(document.getElementById('mapa'), opcionesMapa);//Capturo el div donde quiero ubicar el mapa
    mapa.setCenter(localizacion);
    var marcador = new google.maps.Marker({position: localizacion, map: mapa});
    marcador.addListener("click", function () {
        var informacion = new google.maps.InfoWindow({content: etiqueta});
        informacion.open(mapa, this);
    });
}




//Si NO hemos podido tener la posicion
function error(codigo, mensaje)
{
    var localizacion = {
        lat: 40.71277837,
        lng: -74.00694130000002
    };
    var etiqueta = "new york";
    cargaMapa(localizacion, etiqueta);
}
console.log(compruebaGeolocalizacion());