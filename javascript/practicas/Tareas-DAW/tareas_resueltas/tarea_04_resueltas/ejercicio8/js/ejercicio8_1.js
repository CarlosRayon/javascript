
/* DDWEC04 - Solución Tarea. Ejercicio 8 - Javier González Pisano */


/*****************   CUERPO DEL SCRIPT ******************************/
const NUMEROS=100;
const VALOR_MINIMO=1;
const VALOR_MAXIMO=100;

function generaAleatorio(min,max){
    return Math.round((Math.random()*(max-min))+min)
}



var array=new ArrayOrdenado();
for(var i=0;i<NUMEROS;i++)
	array.insertaNumero(generaAleatorio(VALOR_MINIMO,VALOR_MAXIMO));

console.warn("Contenido del array: ")
var salida="";
for(var i=0;i<array.getLongitud();i++)
	salida+=array.getNumeroAt(i)+" ";

console.log(salida);

array.invierte();

console.warn("Contenido del array invertido: ")
var salida="";
for(var i=0;i<array.getLongitud();i++)
	salida+=array.getNumeroAt(i)+" ";

console.log(salida);

/* Para borrar hacemos el recorrido a la inversa */
for(var i=array.getLongitud();i>=0;i--){
	if(array.getNumeroAt(i)%2===0)
		array.borraNumero(array.getNumeroAt(i));
}
	
console.warn("Contenido del array sin números pares: ")
var salida="";
for(var i=0;i<array.getLongitud();i++)
	salida+=array.getNumeroAt(i)+" ";

console.log(salida);