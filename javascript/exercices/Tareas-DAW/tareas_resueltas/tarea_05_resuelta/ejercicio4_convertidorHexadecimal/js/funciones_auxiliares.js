
/* DDWEC05 - Solución Tarea. Ejercicio 4 - Javier González Pisano */

/********************** Funciones auxiliares     ************/

 const CARACTERES_HEX=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function esNumeroValido(numero){
    if((esEntero(numero))&&(numero>=0)&&(numero<=255))
        return true;
    else
        return false;
    
}

function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

function esHexadecimal(cadena){
    var hexadecimal=true;
    if(cadena.length===6){
        for(var i=0;((i<cadena.length)&&(hexadecimal));i++)
            if(!digitoHexadecimal(cadena[i]))
                hexadecimal=false;  
    }
    else
        hexadecimal=false;
    return hexadecimal; 
}

function digitoHexadecimal(digito){
   
    if(CARACTERES_HEX.indexOf(digito)!==-1)
        return true;
    else
        return false; 
}
   