/* 
 Archivo con la logica para ubicar a un usuario y mostrar su posicion en un mapa
 */
function ubicacionUsuario()

{
    navi
    var $divMapa=$("#maps");
    if (navigator.geolocation)//Compruebo si el navegador tiene la opcion de geolacalizacion
    {
        //opciones opcionales para obtener las coordenadas
        var opciones = {
            enableHigAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        
        //Llamamoa a la funcion para obtener las coordenadas
        navigator.geolocation.getCurrentPosition(posicionUsuario, error, opciones);
    } else//Si el navegador no tiene opcion geolocalizacion mostramos mensaje
    {
        $divMapa.html("<p>AVISO el navegador no admite la geolocalizacion</p>");
    }

    /*Funciones para sacar la ubicacion del usuario
        -Esta funcion recibe un parametro implicito (objeto Position) del cual puedo sacar las coordenas que de tiene el html
     */
    function posicionUsuario(posicion)
    {
        //añado un parrafo con una pequeña descripcion
        $parrafo = $("<p></p>", {"text": "Ubicacion del usuario"});
        $("#ubicacion-actual").prepend($parrafo);//prepend---antes de cualquier elemento quiero este

        //Obtengo las coordenadas
        var latitud = posicion.coords.latitude;
        var longitud = posicion.coords.longitude;

        //Estas coordenadas las pongo como objeto literal que sera el que le pase a las diferentes variables map  
        var miLatLng = {lat: latitud, lng: longitud};
        //usamos la api de maps para crear el mapa y mostrarlo con nuestras coordenadas
        var map = new google.maps.Map(document.getElementById('maps'), {//NO se puede usar Jquery aqui
            center: miLatLng,
            zoom: 15
        });

        // Crea una marca en la posicion pasada
        var marker = new google.maps.Marker({
            map: map,
            position: miLatLng,
            title: 'Estas ubicado aqui!!!'
        });
    }
    
    //Funcion  que sera llamada en caso de error la ubicacion
    function error()
    {
        $divMapa.html("<p>AVISO No se puede conseguir tu ubicacion</p>");
    }
}

//RECUERDA!!! Si no la pongo me da un error pero el contendio le puedo usar 
    function initMap() {//Funcion que crea el mapa en un div con id mapa

    }

