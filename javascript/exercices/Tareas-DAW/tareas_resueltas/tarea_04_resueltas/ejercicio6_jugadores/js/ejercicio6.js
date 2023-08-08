
/* DDWEC02 - Solución Tarea. Ejercicio 6 - Javier González Pisano */

const MAXIMO=100;
const MINIMO=1;
const DIVISORES=[2,3,5,10];


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
 * Función esDivisible()
 *   Recibe: 
 *              dividendo [entero]
 *              divisor [entero]                                   
 *                   
 *   Devuelve: [booleano]
 * 
 *  Determina si dividendo es divisible entre divisor
 */
function esDivisible(dividendo,divisor){
   if((dividendo%divisor)===0)
       return true;
   else
       return false;
}


/*
 * Función entradaEnteraEnIntervalo()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero en el intervalo dado.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaEnteraEnIntervalo(mensaje,max,min){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseInt(valorLeido);
        if((esEntero(valorLeido))&&(enIntervalo(numeroLeido,max,min)))
            correcto=true;
        else
           console.error(valorLeido+ " no es un entero en el intervalo ["+min+" "+max+"]");
    }
    return numeroLeido;
}

/*****************   CUERPO DEL SCRIPT ******************************/

var dividendo=entradaEnteraEnIntervalo("Introduce un entero entre "+MINIMO+" y "+MAXIMO,MAXIMO,MINIMO);
var mensaje="";
for (var i = 0; i < DIVISORES.length; i++) {
    if(esDivisible(dividendo,DIVISORES[i]))
        mensaje+=" "+DIVISORES[i];
}

if(mensaje==="")
    console.warn(dividendo +" no es divisible entre "+DIVISORES);
else
    console.log(dividendo +" es divisible entre"+mensaje);
