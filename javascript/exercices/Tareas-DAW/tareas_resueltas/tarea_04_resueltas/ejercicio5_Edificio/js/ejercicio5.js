
/* DDWEC02 - Solución Tarea. Ejercicio 5 - Javier González Pisano */

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
 * Función ordenCreciente()
 *   Recibe: 
 *              n1 [entero]
 *              n2 [entero]              
 *              n3 [entero]
 *              n4 [entero]                          
 *                   
 *   Devuelve: [booleano]
 * 
 *  Determina si los números están en orden creciente
 */
function ordenCreciente(n1,n2,n3,n4){
   if((n1<n2)&&(n2<n3)&&(n3<n4))
       return true;
   else
       return false;
}


/*
 * Función entradaEnteraPositiva()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero positivo.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaEnteraPositiva(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseInt(valorLeido);
        if((esEntero(valorLeido))&&(esPositivo(numeroLeido)))
            correcto=true;
        else
            console.error(valorLeido+ " no es un entero positivo");            
    }
    return numeroLeido;
}

/*****************   CUERPO DEL SCRIPT ******************************/

var numero1=entradaEnteraPositiva("Introduce el primer número");
var numero2=entradaEnteraPositiva("Introduce el segundo número");
var numero3=entradaEnteraPositiva("Introduce el tercer número");
var numero4=entradaEnteraPositiva("Introduce el cuarto número");

var numeros=numero1+","+numero2+","+numero3+","+numero4;

if(ordenCreciente(numero1,numero2,numero3,numero4))
    console.log(numeros+ " están en orden estrictamente creciente");
else
   console.warn(numeros+ " no están en orden estrictamente creciente");