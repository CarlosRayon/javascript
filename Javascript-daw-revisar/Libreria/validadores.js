/* 
 Pseudoclase con metodos validadores de datos
 */

function Validadora() {

    /*Validamos que sea una cadena (string) si no lo es repite el bucle
     * @argument {string} cadena 
     * @returns {String}  
     */
    this.esString = function (cadena) {

        while (!isNaN(cadena) || cadena.trim() === "") {

            cadena = prompt(" No es un string vuelva introducir el dato");
        }
        return cadena;
    };
//EJEMPLO:    var string=esString((prompt("Introducir string")));


/*Funcion que valida si valor introducido es un numero (si no lo es repite)falta mejorar al introducir mucho espacios
 * @argument {number} numero
 * @returns {number}  
 */
    this.esNumbreEntero = function (numero) {

        while (isNaN(numero) || numero.trim() === "") {

            numero = prompt(" No es un numero vuelva introducir el dato");
        }
        return numero;
    };
    
//EJEMPLO:     var numero=comprobar(parseFloat(prompt("Introducir numero")))
//EJEMPLO:     var numeroEntero=comprobar(parseInt(prompt("Introducir numero")));
//EJEMPLO:     var numeroReal=comprobar(parseFloat(prompt("Introducir numero")))










}

