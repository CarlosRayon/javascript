
/* DDWEC05 - Solución Tarea. Ejercicio 1 - Javier González Pisano */

var gestorPalabras=new PalabraOculta();

window.addEventListener("load",cargaPagina);



function cargaPagina(){
   cargaManejadores();
   inicializaBotones();
   inicializaCapaInfo();
   
   document.getElementById("letras").disabled=true;
}

function cargaManejadores(){
    document.getElementById("nueva").addEventListener("click",pulsaNuevaPalabra);
    document.getElementById("solucion").addEventListener("click",pulsaSolucion);
    document.getElementById("finalizar").addEventListener("click",pulsaFinalizar);

    document.getElementById("palabra").addEventListener("keyup",teclaPalabra);  
    
}

function inicializaBotones(){
    estadoBoton("nueva",false);
    estadoBoton("solucion",true); 
    estadoBoton("finalizar",true);
}

function inicializaCapaInfo(){
    document.getElementsByClassName("error")[0].className+=" oculto";
    document.getElementsByClassName("error")[0].id="capa-info";
    /* Se permite hacer esta operación (agregar id) directamenteen el HTML */
}

function estadoBoton(id,estado){
    if(estado===true)
          document.getElementById(id).disabled=true;
      else
           document.getElementById(id).disabled=false;             
}

/* Manejador del evento click sobre el botón de nueva palabra*/
function pulsaNuevaPalabra(e){
    e=window.event || e;
    e.preventDefault();
   
    document.getElementById("capa-info").className+=" oculto";
     document.getElementById("palabra").value="";
   
   
    estadoBoton(this.id,true);
    estadoBoton("solucion",false);
    estadoBoton("finalizar",false);    
    
    document.getElementById("letras").value=gestorPalabras.generaPalabra();  
}

/* Manejador del evento onKeyUp sobre la caja de texto con id palabra */
function teclaPalabra(){
    this.value=this.value.toUpperCase();
    if(this.value===gestorPalabras.getPalabraActual()){
        aciertoPalabra();
    }
}

/* Manejador del evento click sobre el botón de ver solucion*/
function pulsaSolucion(e){
    e=window.event || e;
    e.preventDefault();
 
    gestorPalabras.fallo();
 
    estadoBoton(this.id,true);
    estadoBoton("nueva",false);
    
    document.getElementById("capa-info").className="linea_formulario info";
    document.getElementById("capa-info").innerHTML="La palabra correcta es "+gestorPalabras.getPalabraActual();
    
   
}

/* Manejador del evento click sobre el botón de finalizar*/
function pulsaFinalizar(e){
    e=window.event || e;
    e.preventDefault();
   
     document.getElementById("palabra").value="";
     document.getElementById("letras").value="";   
   
    estadoBoton(this.id,true);
    estadoBoton("nueva",true);
    estadoBoton("solucion",true);    
    
        document.getElementById("capa-info").className="linea_formulario error";
    document.getElementById("capa-info").innerHTML="El porcentaje de aciertos es "+gestorPalabras.porcentajeAcierto()+" %";
}


function aciertoPalabra(){
    gestorPalabras.acierto();
    document.getElementById("capa-info").className="linea_formulario intentos";
    document.getElementById("capa-info").innerHTML="Has acertado la palabra "+gestorPalabras.getPalabraActual();
    
    estadoBoton("nueva",false);
    estadoBoton("solucion",true);
    
}