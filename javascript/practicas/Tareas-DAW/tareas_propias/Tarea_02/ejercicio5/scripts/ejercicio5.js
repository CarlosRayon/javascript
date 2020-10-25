/* 
 Carlos Rayon Alvarez Ejercicio 5
 
 ESTE EJERCICIO NO DA BUEN RESULTADO. FALLA LA LOGICA DE LA FUNCION DEL RESULTADO. 
 
 5. Crea un script que pida 4 números enteros positivos e indique si dichos números están en orden
 estrictamente creciente
 */

//VARIABLES
var entero1, entero2, entero3, entero4;


//FUNCIONES
function esEntero(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}
//Funcion que comprueba si es positivo el numero
function esPositivo(num) {

    if (num >= 0) {

        return true;
    } else {
        return false;
    }


}


//Funcion que comprueba si el valor introduccido es un numero y positivo
function comprobarNumero(numero) {

    while (!(esEntero(numero)) && !(esPositivo(numero))) {

        numero = parseInt(prompt("Repite el numero entero positivo"));

    }

    return numero;

}


//EL RESULTADO NO ES CORRECTO. NO DOY CON ELLO
function ordenCreciente(n1, n2, n3, n4) {
    var arrayEntero = [n1, n2, n3, n4];

    var control = false;

    for (var i = 0; i < arrayEntero.length; i++) {

        if (arrayEntero[i] + 1 == arrayEntero[i + 1]) {

            control = true;
        }
    }

    return control;
}


//LOGICA DEL PROGRAMA

//Compruebo y valido todos los numero para que en la varible se guarde el un valor numerico y positivo

entero1 = comprobarNumero(parseInt(prompt("introducir primer numero entero positivo")));
entero2 = comprobarNumero(parseInt(prompt("introducir segundo numero entero positivo")));
entero3 = comprobarNumero(parseInt(prompt("introducir tercer numero entero positivo")));
entero4 = comprobarNumero(parseInt(prompt("introducir cuarto numero entero positivo")));

console.log("Los numeros estan en orden creciente???" + ordenCreciente(entero1, entero2, entero3, entero4));





//PRUEBAS
//
//console.log(esEntero(entero1));
//console.log(esPositivo(entero1));

//Asi no lo guarda directamente?¿?¿?

//arrayEntero[0]=comprobarNumero(parseInt(prompt("introducir primer numero entero positivo")));
//arrayEntero[1]=comprobarNumero(parseInt(prompt("introducir segundo numero entero positivo")));
//arrayEntero[2]=comprobarNumero(parseInt(prompt("introducir tercer numero entero positivo")));
//arrayEntero[3]=comprobarNumero(parseInt(prompt("introducir cuarto numero entero positivo")));
