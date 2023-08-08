
/* DDWEC04 - Solución Tarea. Ejercicio 10 - Javier González Pisano */


/*****************   CUERPO DEL SCRIPT ******************************/
const NUMEROS=100;
const VALOR_MINIMO=1;
const VALOR_MAXIMO=50;

function generaAleatorio(min,max){
	var numero=Math.round((Math.random()*(max-min))+min);
	console.log("Genero "+numero);
    return numero;
}



var array=new ArrayOcurrencias();
for(var i=0;i<NUMEROS;i++)
	array.insertaNumero(generaAleatorio(VALOR_MINIMO,VALOR_MAXIMO));

console.warn("Contenido del array: ")
for(var i=0;i<array.getLongitud();i++)
	console.log("Numero "+array.getNumeroAt(i)+" >> Ocurrencias "+array.getNumeroOcurrencias(array.getNumeroAt(i)))



array.invierte();

console.warn("Contenido del array invertido: ")
for(var i=0;i<array.getLongitud();i++)
	console.log("Numero "+array.getNumeroAt(i)+" >> Ocurrencias "+array.getNumeroOcurrencias(array.getNumeroAt(i)))


/* Para borrar hacemos el recorrido a la inversa */
for(var i=array.getLongitud();i>=0;i--){
	if(array.getNumeroAt(i)%2===0){
            var ocurrencias=array.getNumeroOcurrencias(array.getNumeroAt(i));
            for(var j=0;j<ocurrencias;j++)
  		array.borraNumero(array.getNumeroAt(i));      
        }
}
	
console.warn("Contenido del array sin números pares: ")
for(var i=0;i<array.getLongitud();i++)
	console.log("Numero "+array.getNumeroAt(i)+" >> Ocurrencias "+array.getNumeroOcurrencias(array.getNumeroAt(i)))
