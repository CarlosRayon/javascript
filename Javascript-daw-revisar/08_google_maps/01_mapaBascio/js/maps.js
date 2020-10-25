
window.addEventListener("load", iniciarjavascript);//Iniciamos el script

function iniciarjavascript()
{
    //Añado el evento al boton que cuando pulse me haga la funcion mostrar mapa
    var boton = document.getElementById("mostrarmapa");
    boton.addEventListener("click", obtenerCoordenadas);
}

function obtenerCoordenadas() {
    var divMapa = document.getElementById("mapa");//Capturo div para mostrar el mapa

    //Al iniciar el script lo primero compruebo si el navegador soporta la geolocalizcion
    if (navigator.geolocation)//Si el navegador soporta la geolocalizacion...
    {
        /*Para obtener nuestra posicion usamos el metodo getCurrentPosition()
         * 
         *   Parametros:
         *      Una función de devolución de llamada que toma un objeto de posición(Position) como único parámetro de entrada.
         *              RECUERDA!!!originalmente esta funcion serai initMap, si queremos definir otro nombre esta funcion debe ser incluida aunque sea vacia
         *      Una función de devolución de llamada opcional que toma un objeto PositionError como único parámetro de entrada.
         *      Un objeto opcional PositionOptions.
         */

        /*RECUERDA!!! El parametro de opciones no es necesario pero en caso de incluir, creamos objeto literal con esta 3 opciones*/
        var options = {//Mirar opciones de posicion para entender
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        
        navigator.geolocation.getCurrentPosition(coordenadas, error, options);//Option es opcional
        
    } else {//Si el navegador no lo soporta avisamos al usuario
        divMapa.innerHTML = "<p>Navegador NO soporta geolocalizacion</p>";
    }

}


//Obtenemos latitud y longitud
function coordenadas(posicion)
{

    var divMapa = document.getElementById("mapa");

    //Saco las coordenadas directamente del parametro
    //var latitud = posicion.coords.latitude;
    //var logitud = posicion.coords.longitude;

    //Otra opcion  es:
    //Capturo la posicon que nos manda getCurrentePosition como parametro en la funcion llamada
    var coordenadas = posicion.coords;
    var latitud = coordenadas.latitude;
    var longitud = coordenadas.longitude;

    //Estas coordenadas las pongo como objeto literal que sera el que le pase a las diferentes variables map  
    var myLatLng = {lat: latitud, lng: longitud};


    /*Con la longitud y latitud ya obtenidas esta se las pasamos a las diferentes variables de map que crearan diferentes mapas*/

    // OBLIGARTORIO!!! Crea el mapa y le pone en el div que queramos en el html
    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: myLatLng,
        zoom: 15
    });

    // Crea una marca en la posicion pasada
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Esta es mi casa!'
    });
    
    /*Con el mapa creado la api nos ofrece difentes funciones mirar la carpeta liberia google maps para verlas*/
}


function error()
{
    var divMapa = document.getElementById("mapa");
    divMapa.innerHTML = "No se pudo obtener tu ubicacion";
}

//RECUERDA!!! Si no la pongo me da un error pero el contendio le puedo usar 
function initMap() {//Funcion que crea el mapa en un div con id mapa
    // Create a map object and specify the DOM element for display.
    /*var map = new google.maps.Map(document.getElementById('mapa'), {
     center: {lat: -34.397, lng: 150.644},
     zoom: 8
     });     
     */
}

    