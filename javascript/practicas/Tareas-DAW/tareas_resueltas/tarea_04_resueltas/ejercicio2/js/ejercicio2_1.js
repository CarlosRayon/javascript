
/* DDWEC04 - Solución Tarea. Ejercicio 2 - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función generaAleatorio()
 *   Recibe: 
 *              min [entero]
  *             max [entero]
 *              
 *   Devuelve:  [entero]
 * 
 *   Genera un aleatorio entre min y max
 *   
 */
function generaAleatorio(min,max){
    return Math.round((Math.random()*(max-min))+min)
}

/*
 * Función generaNAleatorios()
 *   Recibe: 
 *   
 *             n   [entero]
  *            min [entero]            
 *             max [entero]
 *              
 *   Devuelve:  entero[]
 * 
 *   Genera un array de n aleatorios entre min y max
 *   
 */
function generaNAleatorios(n,min,max){
   var numeros=new Array();
    for (var i = 0; i < n; i++) {
        numeros.push(generaAleatorio(min,max));
    }
   return numeros;
}

/*
 * Función cuentaFrecuencias()
 *   Recibe: 
 *             numeros   entero[]
 *              
 *   Devuelve:  entero[]
 * 
 *   Genera un array de que indica las frecuencias de repetición de cada número.
 *   
 */
function cuentaFrecuencias(numeros){
    var frecuencias=new Array(NUMERO_MAXIMO);
    for (var i = 0; i < frecuencias.length; i++) {
        frecuencias[i]=0;
    }
    for (var i = 0; i < numeros.length; i++) {
        frecuencias[numeros[i]-1]++;
    }
    return frecuencias;
}


/*
 * Función maximaFrecuencia()
 *   Recibe: 
 *             repeticiones   entero[]
 *              
 *   Devuelve:  -
 * 
 *   Imprime las frecuencias de repetición de cada número, indicando el número más repetido
 *   
 */
function maximaFrecuencia(repeticiones){
   var valorMaximo=repeticiones[0];
   var numeroMaximo=1;
   console.warn("Repeticiones:")
    for (var i = 0; i < repeticiones.length; i++) {
        console.log("Número "+(i+1)+"-->"+repeticiones[i]+" repeticiones");
        if(repeticiones[i]>valorMaximo){
            valorMaximo=repeticiones[i];
            numeroMaximo=(i+1);   
        }
    }
    console.log("El número más repetido es el "+numeroMaximo+" con "+repeticiones[numeroMaximo-1]+" repeticiones");
}

/*****************   CUERPO DEL SCRIPT ******************************/

const NUMERO_MINIMO=1;
const NUMERO_MAXIMO=50;

const CANTIDAD_MINIMA=500;
const CANTIDAD_MAXIMA=1000;

var cantidad=generaAleatorio(CANTIDAD_MINIMA,CANTIDAD_MAXIMA);
var numeros=generaNAleatorios(cantidad,NUMERO_MINIMO,NUMERO_MAXIMO);
var frecuencias=cuentaFrecuencias(numeros);
maximaFrecuencia(frecuencias);
