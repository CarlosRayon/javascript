
/* Variable global con el objeto XMLHttpRequest que gestiona las peticiones AJAX nativas.
 *  Las peticiones AJAX destinadas a solicitar sugerencias de poblaciones se realizarán mediante 
 *  este objeto, mientras que las destintadas a solicitar los datos de una población
 * se realizarán mediante funciones jQuery  */
var miXHR;


/* Evento de carga de página */
$(document).ready(cargaPagina);


/* Manejador del evento de carga de página. Realiza las siguientes tareas:
 *   - Instancia el objeto miXHR que gestionará la petición de sugerencias.
 *   - Define el manejador para el evento de pulsación de tecla sobre 
 * 	   la caja de texto (id población).
 * 
 *   - Define el manejador para el evento de pulsación sobre el botón de búsqueda 
 * */
function cargaPagina(){
	miXHR=new objetoXHR();
        
        cargaMapaActual();

	$("#poblacion").on("keyup",cambiaTextoPoblacion);
	$("#buscar").on("click",pulsaBuscar);

}

/* Carga el mapa con la posición actual */
function cargaMapaActual(){
        navigator.geolocation.getCurrentPosition(cargaLocalizacion,errorLocalizacion);
     
        function cargaLocalizacion(posicion){
             var localizacion = {
                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude
                };
         var etiqueta="Mi ubicación";

         cargaMapa(localizacion,etiqueta);
      }

       function cargaMapa(centro,etiqueta){    

         var opcionesMapa={zoom:10};
         var mapa = new google.maps.Map(document.getElementById('mapa1'),opcionesMapa);

          mapa.setCenter(centro);

          var marcador=new google.maps.Marker({position:centro,map:mapa});
          marcador.addListener("click",function(){
                var informacion = new google.maps.InfoWindow({content: etiqueta});
                informacion.open(mapa,this);
          });
       }

        function errorLocalizacion(){
            var localizacion = {
                  lat: 40.7127837,
                  lng: -74.00594130000002
                };
   
        var etiqueta="New York, USA";
        cargaMapa(localizacion,etiqueta);
    };    
}


/* Manejador de evento para el evento de pulsación de tecla sobre la caja de texto:
 *   - Obtiene el texto actual de la caja de texto (en principio se corresponde 
 * 		a un nombre de población que no tiene por qué haber sido introducido completamente) 
 *
 *   -LLama a la función que se encarga de cargar las sugerencias pasandole el script
 * 	  que las proporciona ()  (sugerencia_poblaciones.php).
 *     Dicho script espera recibir un parámetro llamado "sugerencia" por el método GET.
 * 	   Para realizar la petición usando GET, concatenamos a la URL el nombre del parámetro que 
 * 	   recibe el script seguido de su valor, separando URL y parámetro por ?
 *     
 * 	   El script devolverá un listado de resultados en formato JSON.
 * 
 */
function cambiaTextoPoblacion(){
	var poblacion=$("#poblacion").val();
	cargarSugerencias("../servidor/sugerencia_poblaciones.php?sugerencia="+poblacion);
}


/* Carga sugerencias realizando una petición AJAX a la URL proporcionada.*/  

function cargarSugerencias(url) { 
	if (miXHR){	
		miXHR.open('GET', url, true); //Abro la petición (true=ASINCRONA) 
		miXHR.onreadystatechange = peticionSugerencias;	/* Esta función se llamará cada vez que cambie
														   el estado de la petición */			
		/* Hacemos la petición al servidor. Parámetro null -> cuando usamos GET. */
		miXHR.send(null);
	}
}


/* Maneja los cambios de estado de la petición.
 * Cuando el código de cambio de estado es "Completo" y el código de finalización es "éxito":
 * 
 *  - Borramos las posibles sugerencias que hubiéramos podido realizar anterormente.
 * 
 *  - Si la petición devuelve algo de contenido (hay sugerencias) [en caso contrario no se hace nada]: 
 *      - Interpretamos la cadena JSON recibida por miXHR.responseText usando JSON.parse().
 * 		  Introducimos el resultado (un array de objetos) en la variable resultados.
 * 
 * 		- Creamos una etiqueta ul destinada a mostrar el listado de sugerencias.
 * 		  Definimos la anchura de dicho listado a partir de la anchura de la caja de texto,
 *   	  y la posición del mismo [pues tiene posicionamiento absoluto] a partir de 
 * 		  la posición y la altura de la caja de texto.
 *        
 * 		  Las funciones de jQuery facilitan mucho el tratamiento de coordenadas y tamaño de componentes
 * 		  con respecto a las funciones del DOM.  
 * 
 * 		 Para crear la etiqueta hacemos uso de la función auxiliar creaEtiqueta() definida en funciones.js
 * 		   que recibe los principales parámetros de la etiqueta. Notese que seguimos la notación
 * 		   $variable para indicar que la variable que devuelve dicha función se corresponde con un 
 * 		   objeto jQuery.
 *  
 *    - Para cada población devuelta (un máximo de 5 según el script PHP) se crea un li
 * 		  que se añade al listado de sugerencias cuyo contenido es la propia población
 * 		  (propiedad .poblacion de los objetos del array resultados) 
 * 
 * 		   Además, para cada uno de ellos se define el manejador del evento de pulsación.
 * 
 */
function peticionSugerencias(){	
	if (this.readyState==4 && this.status == 200){
		
		$("#sugerencia").remove();
				
		if(this.responseText!=""){
			var resultados=JSON.parse(this.responseText);
                        if(resultados.length>0){	
                            var $sugerencias=creaEtiqueta("ul",$(document.body),"sugerencia");

                            $sugerencias.width($("#poblacion").width());

                            var posY=$("#poblacion").position().top;
                            var posX=$("#poblacion").position().left;

                            var altura=$("#poblacion").height();		

                            $sugerencias.css("left",posX+"px");
                            $sugerencias.css("top",(posY+altura)+"px");			

                            for (var i=0; i < resultados.length; i++){
                                     var $sugerencia=creaEtiqueta("li",$sugerencias,null,resultados[i].poblacion);
                                     $sugerencia.on("click",clickSugerencia);
                            }
                        }
		}
	}
}


/* Manejador de evento de pulsación sobre una sugerencia.
 * Carga el valor de la sugerencia en la caja de texto.
 */

function clickSugerencia(){
	$("#poblacion").val($(this).html());
	$("#sugerencia").remove();
}


/* Manejador de evento de pulsación sobre el botón de búsqueda.
 * A partir del valor de la caja de texto, se realiza una petició AJAX usando la API de jQuery.
 * 
 * El script info_poblacion.php recibe un parámetro llamado poblacion con el nombre de la población por POST,
 * devolviendo la información de dicha población en formato XML.
 * 
 * Por tanto usaremos la función jQuery $.post (dado que la petición es POST) 
 * 	pasando los siguientes parámetros (consúltese la documentación de la librería para otras opciones):
 *     - URL del script PHP.
 *     - Parámetros enviados.
 * 	   - Parámetro "xml" que indica el tipo de resultados que espero recibir.
 *     - Función a la que se va a llamar en caso de éxito [.done] (cargaInfo()).
 * 	   - Función a la que se va a llamar en caso de fallo [.fail] (error()).
 *   
 */
function pulsaBuscar(){
	
	var poblacion=$("#poblacion").val();	
	
	$.post("../servidor/info_poblacion.php",{poblacion:poblacion},"xml")
		.done(cargaInfo)
		.fail(error);
}


/* Función que se ejecuta en caso de que la petición AJAX realizada por $.post() tenga éxito.
 * El parámetro datos contiene el dato enviado por el script PHP (en este caso el documento XML).
 * 
 * Ocultamos las sugerencias de ciudades (pues ya no las necesitamos) y hacemos visible el panel 
 * de información, que vaciamos para borrar notificaciones anteriores.
 * 
 * A continuación recorremos el documento XML usando las correspondientes funciones del DOM, 
 * a partir del cual obtenemos los datos que mostramos en el panel de información. Para cargar 
 * el mapa pasamos a la función cargaMapa() las coordenadas además el objeto DOM donde vamos a mostrar el   
 * mismo.
 * 
 * En caso de que el documento XML tenga un único nodo hijo, significa que no se ha encontrado
 * niguna población con dicho nombre, luego lo notificamos en el panel.
 * 
 */
function cargaInfo(datos){
	
	$informacion=$("#informacion");
		
	$("#sugerencia").attr("class","oculto");
	$informacion.attr("class","visible");
	$informacion.empty();
	poblacion=datos.getElementsByTagName("poblacion")[0];
	if(poblacion.childNodes.length>1){
	 	var latitud=datos.getElementsByTagName("latitud")[0].firstChild.nodeValue ;
	 	var longitud=datos.getElementsByTagName("longitud")[0].firstChild.nodeValue;	
	 	var codPostal=datos.getElementsByTagName("codpostal")[0].firstChild.nodeValue;	 
	 	var provincia=datos.getElementsByTagName("provincia")[0].firstChild.nodeValue;	 
	
	
		$provincia=creaEtiqueta("p",$informacion,null,"Provincia: ");
		creaEtiqueta("span",$provincia,"provincia",provincia);
		
		$cp=creaEtiqueta("p",$informacion,null,"Código Postal: ");	
		creaEtiqueta("span",$cp,"cp",codPostal);	
		
		$mapa=creaEtiqueta("div",$informacion,"mapa");
                $mapa.attr("class","mapa")
		
		cargaMapa($mapa[0],latitud,longitud);	
	}
	else
		$informacion.html("NO EXISTE");		
}


/* Función llamada desde $.post en caso de error.
 * Usada con fines de depuración. Se muestra el error recibido (propiedad responseText de 
 * 	XMLHttpRequest) en el div de información.
 * */
function error(xhr, textStatus, errorThrown) {
	$informacion=$("#informacion");
	$informacion.attr("class","visible");
	$informacion.empty();
	$informacion.html("ERROR: "+xhr.responseText);
}


/* Carga un mapa de Google Maps en el div que le pasamos, usando la API correspondiente 
   Nótese que para funcionar correctamente necesita que le proporcionemos el objeto
   DOM donde vamos a cargar el mapa. */
function cargaMapa(mapa,latitud,longitud){
	var mapOptions={
   	    zoom: 12,
    	center: new google.maps.LatLng(latitud, longitud)
  	};
  	map = new google.maps.Map(mapa, mapOptions);
}

