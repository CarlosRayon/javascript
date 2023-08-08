
/* DDWEC02 - Solución Tarea. Ejercicio 1 - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función esNumero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un valor numérico.
 *   La segunda comparación hace que si recibe por ejemplo un "4wq"
 *   devuelva false, porque realmente no es un valor numérico
 *   (aunque parseFloat() lo convierta a un 4).
 *   
 *   Es importante el matiz de comparar con != y no con !== (que además de
 *   igualdad de valores compara igualdad de tipos), pues de  lo contrario 
 *   la función nunca va a devolver verdadero, ya que c siempre es una cadena 
 *   y parseFloat() siempre dará un valor de otro tipo.
 *   
 */
function esNumero(c){
    if((isNaN(parseInt(c)))||(c!=parseFloat(c)))
        return false;
    else
        return true;
}


/*
 * Función compruebaNumeros()
 *   Recibe: 
 *              numero1 [real]
 *              numero1 [real]  
 *   Devuelve:  [booleano]
 * 
 *   Determina uno de los valores es positivo y el otro negativo.
 */
function compruebaNumeros(numero1,numero2){
    if(numero1*numero2>0)
        return false;
    else
        return true;
}


/*****************   CUERPO DEL SCRIPT ******************************/

var lectura1=prompt("Introduce un número");
var lectura2=prompt("Introduce otro número");

if(esNumero(lectura1)&&esNumero(lectura2)){
    /* Convertimos los valores antes de pasarlos a la función,
     * pues ésta recibe reales */
    var numero1=parseFloat(lectura1);
    var numero2=parseFloat(lectura2);

    if(compruebaNumeros(numero1,numero2)){
        console.log("Uno de los números es positivo y el otro negativo.");
    }
    else{
        console.warn("Ambos números tienen el mismo signo.")
    }
    
}
else{
    console.error("Uno de los valores introducidos no es numérico")
}



