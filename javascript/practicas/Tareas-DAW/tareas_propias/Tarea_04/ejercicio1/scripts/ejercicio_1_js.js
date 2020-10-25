/* 
 Carlos Rayon Alvarez UD 4 Ejercicio 1
 
 */

//VARIABLES

var nombre = prompt("Introduccir un nombre y apellido");

//FUNCIONES
//funcion validar dato para que sea solo carazteres(por logica los nombres y apellido no suelen llevar numeros...bueno ni carazteres raros y asi no lo valido...)
function validarNombre(dato)
{
    while (!isNaN(dato))
    {
        dato = prompt("VUELVA un nombre y apellido");
    }
    return dato;
}

//El tamaño del nombre más los apellidos (sin contar espacios).
function tamanioSinEspacios(nombre)
{
//    var sinEspacios=nombre.trim(); Solo quita delante y detras

    var sinEspacios = nombre.replace(/\s/g, "");
    var tamaño = sinEspacios.length;
    return tamaño;

}

//Cadena a mayusculas
function aMayusculas(nombre)
{
    return nombre.toUpperCase();

}

//Cadena a minusculas
function aMinusculas(nombre)
{
    return nombre.toLowerCase();
}

//Cadena en lineas
function aLineas(nombre)
{
    var separada = nombre.split(" ");
    var resultado = "nombre: " + separada[0] + "\nApellidos: " + separada[1] + "\nApellido2: " + separada[2];

    return resultado;

}

//Propuesta de login

function propuestaLogin(nombre)
{
    var login = nombre.toLowerCase();
    login = login.split(" ");
    login = login[0] + login[1].substring(0, 1) + login[2].substring(0, 1);

    return login;

}


//LOGICA DEL PROGRAMA
console.log("El tamaño del nombre y apellidos es: " + tamanioSinEspacios(validarNombre(nombre)));
console.log("TODO EN MAYUSCULAS " + aMayusculas(validarNombre(nombre)));
console.log("todo en minusculas " + aMinusculas(validarNombre(nombre)));
console.log("Nombre y apellidos en lineas distintas \n" + aLineas(validarNombre(nombre)));
console.log("El nombre login es: " + propuestaLogin(validarNombre(nombre)));

//PRUEBAS
//validarNombre(nombre);
//console.log(nombre.replace(/\s/g, ""));


/*Una diferencia interesante que encontre
 var str = '  A B  C   D EF ';
 console.log(str.replace(/\s/g, '#'));  // ##A#B##C###D#EF#
 console.log(str.replace(/\s+/g, '#')); // #A#B#C#D#EF#
 */

