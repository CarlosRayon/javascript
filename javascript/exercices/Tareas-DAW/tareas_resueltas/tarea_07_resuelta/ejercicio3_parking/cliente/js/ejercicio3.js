
/* Funciones manejadoras de eventos y de acceso al DOM */

/* Prefijo para los identificadores de parking */
const PREFIJO_PARKING="parking-";


var listado=new ListadoParkings();

window.addEventListener("load",cargaPagina);

/* Manejador de evento de carga de página */
function cargaPagina(){
    elementoID("actualizar").addEventListener("click",clickActualizar);
    elementoID("guardar").addEventListener("click",clickGuardar);
    elementoID("actualizar-local").addEventListener("click",clickActualizarLocal);
}

/* Manejador de evento click sobre botón Actualizar.
 * Realiza una petición AJAX a estado_parkings.php para cargar los parkings.
 * De acuerdo al enunciado, si es la primera vez que se pulsa 
 * el botón se carga toda la información de los parkings, mientras que si ya se 
 * ha pulsado con anterioridad simplemente actualizamos los porcentajes.
 */
function clickActualizar(){
    elementoID("guardar").disabled=false;
     var opciones={
         "url":"../servidor/estado_parkings.php",
         "type":"GET",
         dataType:"json"    
     };
     
     $.ajax(opciones)
             .done(actualizaParkings);
    
    function actualizaParkings(respuesta){
       var primera=false;
       if(listado.getNumeroParkings()===0)
           primera=true;
           
             
        for (var i = 0; i < respuesta.length; i++) {
          if(primera)
            listado.addParking(respuesta[i]);
          else
            listado.actualizaPorcentaje(respuesta[i].id,respuesta[i].porcentaje);
        }
        
        for (var i = 0; i < listado.getNumeroParkings(); i++) {
            var parking=listado.getParking(i);
            if(primera){
                var capaParking=creaEtiqueta("div",elementoID("mapa"),PREFIJO_PARKING+parking.id,"info-parking");
                capaParking.setAttribute("title",parking.nombre);
                capaParking.style.left=parking.coordenadas[0]+"px";
                capaParking.style.top=parking.coordenadas[1]+"px";  
                capaParking.classList.add(colorFromOcupacion(parking.porcentaje));
                capaParking.addEventListener("click",pulsaParking);
               
            }
            else{            
                var capaParking=elementoID(PREFIJO_PARKING+parking.id);
                capaParking.classList.remove("verde","naranja","azul","rojo");
                capaParking.classList.add(colorFromOcupacion(parking.porcentaje));
            }
        }    
    }
};


/* Manejador de evento de pulsación sobre un parking.Se realiza una petición 
 * AJAX a estado_parkings.php para obtener la información únicamente del parking
 * donde hemos pulsado.
 */
function pulsaParking(){
 
    var idParking=idFromCadena(this.id);
    cambiaOcupacion(idParking);  
}


function cambiaOcupacion(idParking){
      
   var miXHR=new XMLHttpRequest();
   miXHR.onreadystatechange=cambiaEstado;
   miXHR.open("GET","../servidor/estado_parkings.php?id="+idParking);
   miXHR.send(null);
    
   function cambiaEstado(){
      
       if((this.readyState===4)&&(this.status===200)){
           var respuesta=JSON.parse(this.responseText);
           listado.actualizaPorcentaje(idParking,respuesta.porcentaje);
           var capaParking=elementoID(PREFIJO_PARKING+idParking); 
           capaParking.classList.remove("verde","naranja","azul","rojo");
           capaParking.classList.add(colorFromOcupacion(respuesta.porcentaje));
       }
   }
}

/* Manejador de evento click sobre botón Guardar.
 * Se almacena la información del listado en localStorage.
 */

function clickGuardar(){
   elementoID("actualizar-local").disabled=false;
   localStorage.setItem("listado",JSON.stringify(listado._parkings));  
};

/* Manejador de evento click sobre botón 'Actualizar desde local.
 * Se recupera la información del listado desde localStorage,
 * actualizando los porcentajes corresponientes.
 */
function clickActualizarLocal(){
    var listadoJSON=JSON.parse(localStorage.getItem("listado"));
    for (var i = 0; i < listadoJSON.length; i++) {
        var parking=listadoJSON[i];
        listado.actualizaPorcentaje(parking.id,parking.porcentaje);

        var capaParking=elementoID(PREFIJO_PARKING+parking.id);
        capaParking.classList.remove("verde","naranja","azul","rojo");
        capaParking.classList.add(colorFromOcupacion(parking.porcentaje));
    }  
};

/* Función auxiliar para obtener el color a partir del porcentaje de ocupación */
function colorFromOcupacion(ocupacion){
    var color="verde";
    if(ocupacion < 25)
        color="rojo";
    else if(ocupacion < 50)
        color="naranja"
    else if(ocupacion < 75)
        color="azul";
    
    return color;
}


