
/* DDWEC02 - Solución Tarea. Ejercicio 4 - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función esNumero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un valor numérico.
 */
function esNumero(c){
    if((isNaN(parseInt(c)))||(c!=parseFloat(c)))
        return false;
    else
        return true;
}


/*
 * Función numeroMayor()
 *   Recibe: 
 *              n1 [real]
 *              n2 [real]
 *              n3 [real]                            
 *                   
 *   Devuelve: -
 * 
 *  Imprime el mayor de los números introducido como parámetro
 */
function numeroMayor(n1,n2,n3){
    var mayor=n1; /* var mayor=Math.max(n1,n2,n3); */
    if(n2>mayor){
        if(n3>mayor)
            mayor=n3;
        else
            mayor=n2;
    }
    console.log("El mayor de "+n1+","+n2+" y "+n3+" es "+mayor);
}


/*
 * Función entradaReal()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [real]
 * 
 *   Pide al usuario un valor hasta que éste sea un número.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaReal(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseFloat(valorLeido);
        if(esNumero(valorLeido))
            correcto=true;
        else
            console.error(valorLeido+ " no es un número real");            
    }
    return numeroLeido;
}

/*****************   CUERPO DEL SCRIPT ******************************/

var numero1=entradaReal("Introduce el primer número");
var numero2=entradaReal("Introduce el segundo número");
var numero3=entradaReal("Introduce el tercer número");

numeroMayor(numero1,numero2,numero3);