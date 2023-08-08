/* 
 Carlos Rayon Alvarez ejercicio 2
 2. Crea un script que pida al usuario un número entero positivo. A continuación se mostrará en un
 mensaje por consola el sumatorio de dicho número.
 
 */

//VARIABLES PARA USAR

var entero = parseInt(prompt("Introducir un numero entero positivo"));

//FUNCIONES
//
//funcion que comprueba si se  puede convertir a entero
function esEntero(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}

//Funcion que devuelve true si el numero es positivo
function esPositivo(numero) {

    if (numero >= 0) {
        return true;
    } else {
        return false;
    }

}

//Funcion sumatoria de un numero
function sumatorio(numero) {
    //aplico esta formula para el sumatorio

    var suma = (numero * (numero + 1)) / 2;

    return suma;
}

//LOGICA DEL PROGRAMA

while (!esPositivo(entero)) {
    console.error("No es numero positivo");
    entero = parseInt(prompt("Vuelva a introducir el numero y que sea positivo"));

}

var resultado = sumatorio(entero);
console.log("El sumatorio del numero " + entero + " es " + resultado);


//PRUEBAS
/*
 var pruebaFuncion1 = esEntero(entero);
 console.info(pruebaFuncion1);
 console.info(entero);
 
 var pruebaFuncion2 = esPositivo(entero);
 console.info(pruebaFuncion2);
 
 var pruebaFuncion3 = sumatorio(entero);
 console.info(pruebaFuncion3);
 */