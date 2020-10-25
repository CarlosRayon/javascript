/* 
Carlos Rayon Alvarez UD 4 Ejercicio 2
EJERCICIO SIN ACABAR FALTAN DOS ULTIMAS FUNCIONES ME HE LIAO
 */

//VARIABLES

//FUNCIONES

//Funcion numero aleatorio entre 1 y 50
function generaAleatorio(min,max)
{
        return Math.round(Math.random() * (max - min) + min)
}

//Funcion array de n posiciones(aleatoria) con valores entre 1 y 50 (aleatorias)

function generaNaleatorios(n,min,max)
{
   var arrayNaleatorios=new Array(n);
   var control=0;
   while(control<n)
   {
       arrayNaleatorios[control]=generaAleatorio(min,max);
       control++;
   }
   
    return arrayNaleatorios;
}


//Funcion que cuenta el numero mas frecuente en el array
function cuentaFrecuencias(numeros)
{
    var frecuencia=new Array(50);
    for (var i=0; i<frecuencia.length; i++)
    {
        for(var j=0;j<numeros.length; j++)
        {
            if(i==numeros[j])
            {
                frecuencia[i]=frecuencia[1]+1;
            }
        }     
    }
    
    return frecuencia;
    
}

var array=generaNaleatorios(generaAleatorio(500,1000),1,50);
 
//LOGICA DEL PROGRAMA


//PRUEBAS
console.log(generaAleatorio(1,50));
console.log(generaNaleatorios(generaAleatorio(500,1000),1,50));
console.log(cuentaFrecuencias(generaNaleatorios(generaAleatorio(500,1000),1,50)));

