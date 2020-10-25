//Coprobamos si tenemos la geolocalizacion

//watchPosition se repite cada cierto tiempo para obtener la ubicacion del usuario
function compruebaGeolocalizacion()
{
    if ("geolocation" in navigator) {//si  la tenemos
        //RECUERDA!! Ponemos id por si queremos parala(?)
      var id=navigator.geolocation.watchPosition(exito,error);//En caso de exito o en caso de error
        return true;
    }else{
        return false;
    }
}

//Si hemos podido obtener la posicion
function exito(posicion)
{
    console.log("tus coordenadas son " + posicion.coords.latitude,
            posicion.coords.longitude);
}

//Si NO hemos podido tener la posicion
function error(codigo,mensaje)
{
    console.log("No se ha podido obtener las coordenadas Codigo " + codigo.code);
}

//Como se repite constantemente si queremos parala la hacemos con clearWatch(?)
//Esta funcion podemos ponerla en un setTime para que se ejecute pasado un tiempo o donde queremos
function abortar(id)
{
    navigator.geolocation.clearWatch(id);
}