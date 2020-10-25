
//Comprobamos que tenemos geolocalizacion
function compruebaGeolocalizacion()
{
    if ("geolocation" in navigator) {//si  la tenemos
        cargaMapaActual();//llamamos al mapa
        return true;
    }else{
        console.log("Navegador sin geolocalizacion");
        return false;
    }
}
/* Carga el mapa con la posición actual RECUERDA!!! incluir la api en el html*/
function cargaMapaActual() {

    navigator.geolocation.getCurrentPosition(cargaLocalizacion, errorLocalizacion);

    //Funcion de la que obtengo las coordenadas
    function cargaLocalizacion(posicion) {
        var localizacion = {
            lat: posicion.coords.latitude,
            lng: posicion.coords.longitude
        };

        var etiqueta = "Mi ubicación";//Para mostrar en etiqueta

        cargaMapa(localizacion, etiqueta); //funcion que cargara el mapa (uso API Google)
    }

    function cargaMapa(centro, etiqueta) {//Le paso la localizaccion y la etiqueta
        
        var opcionesMapa = {zoom: 10};
        var mapa = new google.maps.Map(document.getElementById('mapa'), opcionesMapa);//Capturo el div donde quiero ubicar el mapa

        mapa.setCenter(centro);

        var marcador = new google.maps.Marker({position: centro, map: mapa});
        marcador.addListener("click", function () {
            var informacion = new google.maps.InfoWindow({content: etiqueta});
            informacion.open(mapa, this);
        });
    }

    function errorLocalizacion() { //Por si tenemos un error
        var localizacion = {
            lat: 40.7127837,
            lng: -74.00594130000002
        };

        var etiqueta = "New York, USA";
        cargaMapa(localizacion, etiqueta);
    }
    ;
}

compruebaGeolocalizacion();
//cargaMapaActual();//LLamamos a la funcion