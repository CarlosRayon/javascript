/* 
 Carlos Rayon Alvarez ejercicio 3
 
 33 Crea un script que pida al usuario cuatro números enteros.
 A continuación se mostrará un mensaje que indique si tanto el primer como el segundo número
 están en el intervalo cerrado formado por el tercer y el cuarto número.
 Nótese que los números pueden ser positivos o negativos.
 */



//VARIABLES

var numero1, numero2, numeroMinimo, numeroMaximo;

numero1 = parseInt(prompt("introduccir el numero a evaluar"));
numero2 = parseInt(prompt("introduccir otro numero a evaluar"));
numeroMinimo = parseInt(prompt("introduccir limite inferior"));
numeroMaximo = parseInt(prompt("introduccir limite superior"));


//FUNCIONES
//
//Funcion que comprueba si el numero que paso es entero
function esEntero(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}


//Funcion que comprueba que un numero esta en un intervalo cerrado de otros dos
function enIntervalo(numero, maximo, minimo) {

    if (numero >= minimo && numero <= maximo) { //HE CONSIDERADO QUE EL VALOR DE LOS LIMITES TAMBIEN SON VALIDOS
        return true;
    } else {
        return false;
    }

}


//LOGICA DEL PROGRAMA

while (!((esEntero(numero1) && esEntero(numero2)) && (esEntero(numeroMinimo) && esEntero(numeroMaximo)))) {

    alert("ERROR AL INTRODUCIR LOS NUMEROS");
    console.error("Algun numero no es entero. REPITA");

    numero1 = parseInt(prompt("VUELVA!!introduccir el numero a evaluar"));
    numero2 = parseInt(prompt("VUELVA!!introduccir otro numero a evaluar"));
    numeroMinimo = parseInt(prompt("VUELVA!!introduccir limite inferior"));
    numeroMaximo = parseInt(prompt("VUELVA!!introduccir limite superior"));


}


if (enIntervalo(numero1, numeroMaximo, numeroMinimo) && enIntervalo(numero2, numeroMaximo, numeroMinimo)) {

    console.log("Tanto el numero " + numero1 + " como el " + numero2 + " estan dentro del limite minimo de " + numeroMinimo + " y maximo de " + numeroMaximo);

} else if (enIntervalo(numero1, numeroMaximo, numeroMinimo)) {

    console.log("El numero " + numero1 + " esta entre el limite minimo " + numeroMinimo + " y el limite maximo " + numeroMaximo + " pero el numero " + numero2 + " no lo esta");


} else if (enIntervalo(numero2, numeroMaximo, numeroMinimo)) {

    console.log("El numero " + numero2 + " esta entre el limite minimo " + numeroMinimo + " y el limite maximo " + numeroMaximo + " pero el numero " + numero1 + " no lo esta");
}


//PRUEBAS

/*
 if (esEntero(numero1) && esEntero(numero2) && esEntero(numeroMinimo) && esEntero(numeroMaximo)) {
 console.log("Todos son enteros");
 } else {
 console.log("Alguno no es entero");
 }
 
 var primerNumero=enIntervalo(numero1,numeroMaximo,numeroMinimo);
 var segundoNumero=enIntervalo(numero2,numeroMaximo,numeroMinimo);
 
 console.log(primerNumero);
 console.log(segundoNumero);
 */