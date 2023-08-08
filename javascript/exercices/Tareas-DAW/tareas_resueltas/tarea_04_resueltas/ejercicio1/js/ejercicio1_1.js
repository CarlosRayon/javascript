
/* DDWEC04 - Solución Tarea. Ejercicio 1 - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función tamanioSinEspacios()
 *   Recibe: 
 *              nombre [cadena]
 *   Devuelve:  [entero]
 * 
 *   Devuelve el tamaño de la cadena que recibe, ignorando espacios
 *   
 */
function tamanioSinEspacios(nombre){
    var tamanio=0;
    for (var i = 0; i < nombre.length;i++) {
        if(nombre[i]!==" ")
            tamanio++;
    }
    return tamanio;
}



/*
 * Función aMayusculas(nombre)
 *   Recibe: 
 *              nombre [cadena]
 *   Devuelve:  [cadena]
 * 
 *   Devuelve la cadena que recibe como parámetro, pasada a mayúsculas
 *   
 */
function aMayusculas(nombre){
    return nombre.toUpperCase();
}

/*
 * Función aMinusculas(nombre)
 *   Recibe: 
 *              nombre [cadena]
 *   Devuelve:  [cadena]
 * 
 *   Devuelve la cadena que recibe como parámetro, pasada a minúsculas
 *   
 */
function aMinusculas(nombre){
    return nombre.toLowerCase();
}

/*
 * Función aMinusculas(nombre)
 *   Recibe: 
 *              nombre [cadena]
 *   Devuelve:  [cadena]
 * 
 *   Devuelve la cadena que recibe como parámetro, pasada a minúsculas
 *   
 */
function aLineas(nombre){
   var lineas=nombre.split(" ");
   var salida="";
    for (var i = 0; i < lineas.length; i++) {
        salida+=lineas[i]+"\n";
        
    }
    return salida;
}

/*
 * Función propuestaLogin(nombre)
 *   Recibe: 
 *              nombre [cadena]
 *   Devuelve:  [cadena]
 * 
 *   Devuelve una propuesta de login (nombre en minúsculas + Iniciales de apellidos)
 *   
 */
function propuestaLogin(nombre){
  var elementos=nombre.split(" ");
  var salida="";
  salida=aMinusculas(elementos[0]);
    for (var i = 1; i < elementos.length; i++) {
        salida+=elementos[i][0];
    }
  return salida;
}


/*****************   CUERPO DEL SCRIPT ******************************/

var nombre=prompt("Introduce tu nombre y apellidos");
console.log("Tu nombre tiene "+tamanioSinEspacios(nombre)+" caracteres");
console.log("Tu nombre en mayúsculas: "+aMayusculas(nombre));
console.log("Tu nombre en minúsculas: "+aMinusculas(nombre));
console.log("Tu nombre en varias líneas: "+aLineas(nombre));
console.log("Propuesta de login: "+propuestaLogin(nombre));



