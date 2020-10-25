
/* DDWEC02 - Solución Tarea. Ejercicio 7 - Javier González Pisano */


const OPERADORES=["+","-","*","/","FIN"];



/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función validaOperador()
 *   Recibe: 
 *              operador [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si el operador es correcto.
 */
function validaOperador(operador){
    var operadorValido=false;
    for (var i = 0; i < OPERADORES.length; i++) {
        if(operador===OPERADORES[i])
            operadorValido=true;
    }
    return operadorValido;
}

/*
 * Función validaOperando()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [booleano]
 * 
 *   Determina si el operando es correcto.
 *   NOTA: Esta función no se va a implementar, pues de acuerdo a lo
 *   especificado en la práctica previamente a llamar a validaOperando() 
 *   ya se deberían haber hecho las validaciones pertinentes para saber
 *   que está recibiendo un entero.
 *   
 *   Por tanto, la función no tiene sentido en este contexto
 */

function validaOperando(numero){
  return true;
}


/*
 * Función divisionValida()
 *   Recibe: 
 *              dividendo [entero]
 *              divisor [entero]              
 *   Devuelve:  [booleano]
 * 
 *   Determina si la división es valida. Para ello, solo usamos
 *   el parámetro divisor.
 
 */

function divisionValida(dividendo,divisor){
  return divisor!==0;
}




/*
 * Función esEntero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un número entero.
 */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

/*
 * Función entradaEntero()
 *  Recibe: 
 *              c [cadena]
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un valor hasta que éste sea un entero.
 *   Recibe el mensaje que le muestro al usuario en la ventana de entrada de datos
 */

function entradaEntero(mensaje){
    var correcto=false;
    while(!correcto){
        var valorLeido=prompt(mensaje);
        var numeroLeido=parseInt(valorLeido)
        if(esEntero(valorLeido))
            correcto=true;
        else
            console.error(valorLeido+ " no es un entero");            
    }
    return numeroLeido;
}

/*
 * Función entradaOperador()
 *  Recibe: 
 *           - 
 *   Devuelve:  [entero]
 * 
 *   Pide al usuario un operador hasta que éste sea válido.
 */

function entradaOperador(){
    var correcto=false;
    while(!correcto){
        var operador=prompt("Introduce el operador ["+OPERADORES+"]");
        if(validaOperador(operador))
            correcto=true;
        else
            console.error(operador+ " no es un operador válido");            
    }
    return operador;
}



/*****************   CUERPO DEL SCRIPT ******************************/

var finalizar=false;

while(!finalizar){
    var operando1=entradaEntero("Introduce un operando");
    var operando2=entradaEntero("Introduce otro operando");
    
    var operador=entradaOperador();
    switch(operador){
        case "+":
            console.log("La suma de "+operando1+" y "+operando2+" es "+(operando1+operando2));
            break;

        case "-":
            console.log("La resta de "+operando1+" y "+operando2+" es "+(operando1-operando2));
            break;  

        case "*":
            console.log("La multiplicación de "+operando1+" y "+operando2+" es "+(operando1*operando2));
            break;              

        case "/":
            if(divisionValida(operando1,operando2))
              console.log("La división de "+operando1+" entre "+operando2+" es "+(operando1/operando2));
            else
               console.error("División no válida");
            break; 
                    
        case "FIN":
            finalizar=true;
            console.warn("Fin del script")
            break;
    } 
}


