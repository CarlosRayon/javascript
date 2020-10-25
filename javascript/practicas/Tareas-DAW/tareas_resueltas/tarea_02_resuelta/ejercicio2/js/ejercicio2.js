
/* DDWEC02 - Solución Tarea. Ejercicio 2 - Javier González Pisano */

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
 * Función esPositivo()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [booleano]
 * 
 *   Determina si el valor recibido es positivo.
 */
function esPositivo(numero){
    if(numero>=0)
        return true;
    else
        return false;
}

/*
 * Función sumatorio()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [entero]
 * 
 *   Devuelve el sumatorio del número recibido
 */
function sumatorio(numero){
    var sumatorio=0;
    for (var i = 1; i <= numero; i++) {
        sumatorio=sumatorio+i;
    }
    return sumatorio;
}


/*
 * Función entradaEnteroPositivo()
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero positivo.
 *   JS implementa cortocircuito en las expresiones booleanas con AND
 *   Esto implica que la segunda condición del AND no se evalúa si la 
 *   primera condición es falsa.
 */

function entradaEnteroPositivo(){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt("Introduce un número entero positivo");
        var numeroLeido=parseInt(valorLeido)
        if(esEntero(valorLeido) && (esPositivo(numeroLeido)))
            correcto=true;
        else
            console.error(valorLeido+ " no es un entero positivo");
    }
    return numeroLeido;
}


/*****************   CUERPO DEL SCRIPT ******************************/

var numero=entradaEnteroPositivo("Introduce un número");
console.log("El sumatorio del número es "+sumatorio(numero));
