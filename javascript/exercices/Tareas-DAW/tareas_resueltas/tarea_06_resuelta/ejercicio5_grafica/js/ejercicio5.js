
/* Funciones de manejo del DOM y tratamiento de eventos */

var miGrafica=new Grafica();

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    document.getElementById("nuevo-dato").addEventListener("click",clickNuevoDato);
    document.getElementById("quita-dato").addEventListener("click",clickQuitaDato);
    document.getElementById("actualiza-grafica").addEventListener("click",clickActualizaGrafica);   
}

function clickNuevoDato(){
    var error=false;
    var mensajeError="";
    
    var etiqueta=document.getElementById("etiqueta").value.trim();
    var valor=document.getElementById("valor").value.trim();
    
    
    if((etiqueta==="")|| (valor=="")){
        error=true;
        mensajeError="Los campos 'Etiqueta' y 'Valor' son obligatorios";    
    }
    
    else if(miGrafica.buscaDato(etiqueta)!==null){
        error=true;
        mensajeError="El campo etiqueta está repetido";
    }
     
    else if(!esEntero(valor)){
        error=true;
        mensajeError="El valor debe ser un entero";
    }
        
       
    if(error)
        muestraError(mensajeError);
    else{
        miGrafica.insertaDato({"etiqueta":etiqueta,"valor":parseInt(valor)});
         muestraMensaje("Se ha insertado correctamente el dato '"+etiqueta+"'");
    }
}
        

function clickQuitaDato(){
    var error=false;
    var mensajeError="";
    
    var etiqueta=document.getElementById("etiqueta").value.trim();
    
    if(etiqueta===""){
        error=true;
        mensajeError="El campo 'Etiqueta' es obligatorio";    
    } 
    
    else if(miGrafica.buscaDato(etiqueta)===null){
        error=true;
        mensajeError="El campo 'Etiqueta' no corresponde a ningún dato";
    }   
    if(error)
        muestraError(mensajeError);
    else{
         miGrafica.borrarDato(etiqueta);
         muestraMensaje("Se ha borrado correctamente el dato '"+etiqueta+"'");
    }
       
    
}

function clickActualizaGrafica(){  
    var divGrafica= document.getElementById("grafica");
    
     eliminaContenido(divGrafica);

    if(miGrafica.numeroElementos()>0){
     document.getElementById("mensajes").classList.add("oculto");
     divGrafica.classList.remove("oculto");
      for (var i = 0; i < miGrafica.numeroElementos(); i++) {
            var contenedor=creaElemento("div",divGrafica,null,"contenedor");
            var contenido=creaElemento("div",contenedor,null,"progreso",miGrafica.getDato(i).etiqueta);
            contenido.style.width=miGrafica.calculaPorcentaje(miGrafica.getDato(i).etiqueta)+"%";    
      }
    }
   else
       muestraError("El listado está vacío");
 }

function muestraError(mensaje){
    var divMensajes=document.getElementById("mensajes");
    var divGrafica=document.getElementById("grafica");
    
    eliminaContenido(divMensajes);
    eliminaContenido(divGrafica);
    
    divGrafica.classList.add("oculto");
    divMensajes.classList.remove("oculto");
     divMensajes.classList.remove("informacion");   
    divMensajes.classList.add("errores"); 
    creaElemento("p",divMensajes,null,null,mensaje); 
 
}



function muestraMensaje(mensaje){
    var divMensajes=document.getElementById("mensajes");
    
   var divGrafica=document.getElementById("grafica");
    
    eliminaContenido(divMensajes);
    eliminaContenido(divGrafica);
    
    divGrafica.classList.add("oculto");
    divMensajes.classList.remove("oculto");
    divMensajes.classList.remove("errores");   
    divMensajes.classList.add("informacion"); 
    
    creaElemento("p",divMensajes,null,null,mensaje);   
}