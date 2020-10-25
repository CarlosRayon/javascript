
/* DDWEC02 - Solución Tarea. Ejercicio 3 - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función esEntero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un número entero.
 */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}


/*
 * Función enIntervalo()
 *   Recibe: 
 *              numero [entero]
 *              maximo [entero]
 *              minimo [entero]                            
 *                   
 *   Devuelve:  [booleano]
 * 
 *  Determina si numero está en el intervalo cerrado formado por maximo y minimo
 */
function enIntervalo(numero,maximo,minimo){
    if((numero>=minimo)&&(numero<=maximo))
        return true;
    else
        return false;
}


/*
 * Función entradaEntero()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaEntero(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseInt(valorLeido)
        if(esEntero(valorLeido))
            correcto=true;
        else
            console.error(valorLeido+ " no es un entero");            
    }
    return numeroLeido;
}


/*****************   CUERPO DEL SCRIPT ******************************/

var numero1=entradaEntero("Introduce un número");
var numero2=entradaEntero("Introduce otro número");

var limite1=entradaEntero("Introduce un límite del intervalo");
var limite2=entradaEntero("Introduce el otro límite del intervalo");

var limiteInferior,limiteSuperior; /*No obligatorio declarar estas variables */

if(limite1<limite2){
     limiteInferior=limite1;
     limiteSuperior=limite2;
}
else{
     limiteInferior=limite2;
     limiteSuperior=limite1;    
}
    

if((enIntervalo(numero1,limiteSuperior,limiteInferior)) &&
   (enIntervalo(numero2,limiteSuperior,limiteInferior)))
       console.log(numero1+" y "+numero2+" están en ["+limiteInferior+" "+limiteSuperior+"]");
else
       console.warn(numero1+" y "+numero2+" no están en ["+limiteInferior+" "+limiteSuperior+"]"); 

