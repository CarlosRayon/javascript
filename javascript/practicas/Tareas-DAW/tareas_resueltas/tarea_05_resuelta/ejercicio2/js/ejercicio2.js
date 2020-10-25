
/* DDWEC05 - Solución Tarea. Ejercicio 2 - Javier González Pisano */

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
    
    var botonesDificultad=document.getElementsByName("dificultad");
    for (var i = 0; i <botonesDificultad.length ; i++) {
        botonesDificultad[i].addEventListener("change",escogeDificultad);
    }
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
    document.getElementById("capa-info").innerHTML="<p>El porcentaje de aciertos es "+gestorPalabras.porcentajeAcierto()+" %</p>";
    
    if(compruebaRecord())
         document.getElementById("capa-info").innerHTML+="<p> Has batido el record!</p>";
        

}


function aciertoPalabra(){
    gestorPalabras.acierto();
    document.getElementById("capa-info").className="linea_formulario intentos";
    document.getElementById("capa-info").innerHTML="Has acertado la palabra "+gestorPalabras.getPalabraActual();
    
    estadoBoton("nueva",false);
    estadoBoton("solucion",true);  
}

/* Manejador del evento change sobre un botón de radio*/
function escogeDificultad(){
   gestorPalabras.setDificultad(this.value);
};


function compruebaRecord(){
    var hayRecord=false;
    if(hayCookies()){
        var valor=getCookie("record");
        if(valor===null){ /* Primera partida */
            setCookie("record",gestorPalabras.porcentajeAcierto());
            hayRecord=true;
        }
        else{
           if(gestorPalabras.porcentajeAcierto()>parseInt(valor)){
                setCookie("record",gestorPalabras.porcentajeAcierto());
                hayRecord=true;              
           }
        }  
    }
    return hayRecord;
}
