
/* DDWEC05 - Solución Tarea. Ejercicio 5 - Javier González Pisano */

window.addEventListener("load",cargaPagina);

var lista=new ListaColores();

function cargaPagina(){
    document.getElementById("hex-to-rgb").addEventListener("click",pulsaHex2RGB);
    document.getElementById("rgb-to-hex").addEventListener("click",pulsaRGB2Hex);
    window.addEventListener("unload",guardaColores);    
    cargaColores();
}


function pulsaHex2RGB(){
    var valorHexadecimal=document.getElementById("hexadecimal").value.toUpperCase();
    
    document.getElementById("red").value="";
    document.getElementById("green").value=""; 
    document.getElementById("blue").value=""; 
    
    
    if(esHexadecimal(valorHexadecimal)){   
        var conversor=new Color(valorHexadecimal);
        document.getElementById("errores").className="oculto";
        document.getElementById("red").value=conversor.getRojo();
        document.getElementById("green").value=conversor.getVerde();
        document.getElementById("blue").value=conversor.getAzul();  
        
        document.getElementById("muestra").style.backgroundColor="#"+conversor.getHex();
        
        lista.addColor(conversor);
        document.getElementById("listado").className="";
        document.getElementById("listado").innerHTML=lista.toHTML();
    }
    else{
        document.getElementById("errores").className="";
        document.getElementById("errores").innerHTML="No existe el valor hexadecimal  "+valorHexadecimal;
        document.getElementById("hexadecimal").focus();
    }
}

function pulsaRGB2Hex(){
    
    var rojo=parseInt(document.getElementById("red").value);
    var verde=parseInt(document.getElementById("green").value);
    var azul=parseInt(document.getElementById("blue").value); 
    
    document.getElementById("hexadecimal").value="";
    
    var correcto=true;
    
    if(!esNumeroValido(rojo)){
        document.getElementById("errores").className="";
        document.getElementById("errores").innerHTML="El campo R tiene un valor no válido ( "+rojo+" )";
        document.getElementById("red").focus();
        correcto=false;
    }
    if(!esNumeroValido(verde)){
        document.getElementById("errores").className="";
        document.getElementById("errores").innerHTML="El campo G tiene un valor no válido ( "+verde+" )";
        document.getElementById("green").focus();
        correcto=false;
    }  
    if(!esNumeroValido(azul)){
        document.getElementById("errores").className="";
        document.getElementById("errores").innerHTML="El campo B tiene un valor no válido ( "+azul+" )";
        document.getElementById("blue").focus();
        correcto=false;
    }        
    
    if(correcto){
        document.getElementById("errores").className="oculto";
        var conversor=new Color(rojo,verde,azul);
        document.getElementById("hexadecimal").value=conversor.getHex();  
        document.getElementById("muestra").style.backgroundColor="#"+conversor.getHex();

        lista.addColor(conversor);
        document.getElementById("listado").innerHTML=lista.toHTML();
        
    }
}

function guardaColores(){
    if(window.localStorage) {
        if(lista.getNumeroColores()!==0){

            localStorage.setItem("lista-colores",JSON.stringify(lista));
            /* Guardamos el listado en formato JSON.
             * Solo se guardarán los datos del listado, no la clase lista completa 
             */
        }
    }
 }


function cargaColores(){
   
    if(window.localStorage){
        if(localStorage.getItem("lista-colores")!==null){
           var listadoJSON=JSON.parse(localStorage.getItem("lista-colores"));
           for(var i=0;i<listadoJSON._colores.length-1;i++){
               /* No podemos insertar los objetos directamente, pues al estar
                * recuperados desde JSON no mantienen métodos 
                */
              
               lista.addColor(new Color(listadoJSON._colores[i]._valorHexadecimal));
           }
          
          /* El último color lo vamos a cargar desde el método pulsaHex2RGB() */
           ultimoColor=listadoJSON._colores[listadoJSON._colores.length-1]._valorHexadecimal;
        }
        else
           ultimoColor="000000";
    }
    document.getElementById("hexadecimal").value=ultimoColor;
    document.getElementById("hex-to-rgb").click(); //pulsaHex2RGB();
}