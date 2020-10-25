/*
 * Función entradaEnteroPositivo() 
 * requiere funciones: esEntero y esPositivo
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