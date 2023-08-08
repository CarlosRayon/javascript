/* 
 Carlos Rayon Alvarez Ejercicio 6
 Crea un script que pida al usuario un número entero entre 1 y 100. A continuación se mostrará un
 mensaje que indique si el número:
 a. Es divisible entre 2.
 b. Es divisible entre 3.
 c. Es divisible entre 5.
 d. Es divisible entre 10.
 */

//VARIABLES

var numero;
var entre = "";
var control = false;

//FUNCIONES
//
//Para comprobar si introduccimos un numero entero

function esEntero(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}

//Funcion para comprobar si el numero esta entre 0 y 100 (incluidos)

function estaEntreValores(num) {

    if (num >= 0 && num <= 100) {
        return true;
    } else {
        return false;
    }

}

//Funcion para que el dato introduccido sea valido y si no lo vuelva a pedir por pantalla
function esValido(num) {

    while (!(esEntero(num) && estaEntreValores(num))) {

        console.error("Dato no valido");

        num = parseInt(prompt("Vuelva a introduccir numero entre 0 y 100"));
    }

    return num;

}

//funcion para ver si el numero es divisible entre 2,3,5,10

function esDivisible(dividendo, divisor) {

    if ((dividendo % divisor) == 0) {
        return true;
    }

    return false;
}


//LOGICA DEL PROGRAMA

numero = esValido(parseInt(prompt("Introduccir numero entre 0 y 100")));



//TENGO LA SENSACION QUE SE PODIA HABER SIMPLIFICADO ALGUNA MANERA... PERO BUENO FUNCIONA CORRECTAMENTE
if (esDivisible(numero, 2)) {

    entre += "entre dos, ";
    control = true;
}

if (esDivisible(numero, 3)) {

    entre += "entre tres, ";
    control = true;
}
if (esDivisible(numero, 5)) {

    entre += "entre cinco, ";
    control = true;
}
if (esDivisible(numero, 10)) {

    entre += "entre diez";
    control = true;
}


if (control) {

    console.log("El numero es divisible " + entre);

} else {
    console.log("El numero no es divisible");
}


//PRUEBAS
/*
 numero=parseInt(prompt("Introduccir numero entre 0 y 100"));
 console.log(estaEntreValores(numero));
 */