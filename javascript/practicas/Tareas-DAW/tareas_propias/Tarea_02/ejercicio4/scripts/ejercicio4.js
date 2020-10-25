/* 
 Carlos Rayon Alvarez Ejercicio 4
 
 Crea un script que pida tres números reales e indique el mayor de dichos números. En caso de haber
 varios mayores se devolverá uno de ellos de manera arbitraria.
 */

//VARIABLES

var numero1, numero2, numero3;

//FUNCIONES

function esReal(c) {

    if (!isNaN(c)) {//invierto los valores con ! para claridad

        return true;

    } else {

        return false;
    }

}


function numeroMayor(n1, n2, n3) {

    var numMayor = Math.max(n1, n2, n3);

    document.write("De los datos introduccidos el mayor es " + numMayor);

}


//LOGICA DEL PROGRAMA

do {
    var control = true;
    numero1 = parseFloat(prompt("Introducir el primer numero real"));
    numero2 = parseFloat(prompt("Introducir el segundo numero real"));
    numero3 = parseFloat(prompt("Introducir el tercer numero real"));

    if (esReal(numero1) && esReal(numero2) && esReal(numero3)) {

        control = false;
    }

} while (control);

numeroMayor(numero1, numero2, numero3);



//PRUEBAS
/*  
 while (!(esReal(numero1) && esReal(numero2)) && !(esReal(numero3))){
 console.info("Debe repetir los datos");
 numero1 = parseFloat(prompt("VUELVA!!Introducir el primer numero real"));
 numero2 = parseFloat(prompt("VUELVA!!Introducir el segundo numero real"));
 numero3 = parseFloat(prompt("VUELVA!!Introducir el tercer numero real"));
 
 }
 */
