
/* DDWEC05 - Solución Tarea. Ejercicio 3 - Javier González Pisano */

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    document.getElementById("hex-to-rgb").addEventListener("click",pulsaHex2RGB);
    document.getElementById("rgb-to-hex").addEventListener("click",pulsaRGB2Hex);
    window.addEventListener("unload",guardaCookie);    
    cargaCookie();
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
    }
}

function guardaCookie(){
    if(hayCookies()){
        if(document.getElementById("hexadecimal").value!=="")
            setCookieCaducidad("color",document.getElementById("hexadecimal").value,1000*60*60*24*7);
    }
}

function cargaCookie(){
    var valorHex;
    if(hayCookies()){
        if(getCookie("color")!==null){
            valorHex=getCookie("color");
            borraCookie("color");
        }
        else
            valorHex="000000";
    }
    document.getElementById("hexadecimal").value=valorHex;
     document.getElementById("hex-to-rgb").click(); //pulsaHex2RGB();
}