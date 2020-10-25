/* 
 Carlos Rayon Alvarez ejercicio 7
 Implementa un script con una pequeña calculadora que haga las siguientes operaciones con enteros:
 a. Pedir un operando.
 b. Pedir otro operando
 c. Pedir la operación a realizar (puede ser suma, resta, multiplicación o división o FIN para
 finalizar).
 A continuación se mostrará en consola el resultado de la operación
 */

//VARIABLES
var operando1, operando2, operador;

//FUNCIONES

//Funcion para validar que sera un numero 
function esReal(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}


//funcion que valida los operandos. Si no son correctos los repite
function validarOperandos(num) {

    while (!esReal(num)) {

        num = parseFloat(prompt("Repite el operador"));
    }

    return num;
}

//Funcion que valida los operandos
function validarOperador(operacion) {

    var control = false;
//    suma
    if (operacion === "+") {

        control = true;
    }

//    resta
    if (operacion === "-") {

        control = true;
    }
//    multi
    if (operacion === "*") {

        control = true;
    }

//    divi
    if (operacion === "/") {

        control = true;
    }
//    FIN
    if (operacion === "FIN") {

        control = true;
    }

    return control;

}

//Funcion para reperir el operador si no es correcto
function repetirOperador(operador) {

    while (!validarOperador(operador)) {

        operador = prompt("Operacion no disponible vuelva  a realizar: + - * / FIN");
    }
    return operador;
}


//FUNCIONES PARA REALIZAR

//funcion para sumar
function suma(ope1, ope2) {
    return ope1 + ope2;
}

//funcion para restar
function resta(ope1, ope2) {
    return ope1 - ope2;
}

//funcion para multiplicar  
function multiplicar(ope1, ope2) {
    return ope1 * ope2;
}

//funcion  para dividir

function dividir(ope1, ope2) {
    return ope1 / ope2;
}


//LOGICA DEL PROGRAMA

do {

    operando1 = validarOperandos(parseFloat(prompt("Introducir operando primero")));
    operando2 = validarOperandos(parseFloat(prompt("Introducir operando segundo")));
    operador = repetirOperador(prompt("Introducir operacion a realizar: + - * / FIN"));

    if (operador === "+") {

        alert(suma(operando1, operando2));
    }
    if (operador === "-") {

        alert(resta(operando1, operando2));
    }
    if (operador === "*") {

        alert(multiplicar(operando1, operando2));
    }
    if (operador === "/") {

        alert(dividir(operando1, operando2));
    }

} while (operador !== "FIN");

alert("FIN DEL PROGRAMA");

//PRUEBAS


