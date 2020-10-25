/* 
ARCHIVO CON FUNCIONES UTILES PARA STRINGS
 */

/*********************************FUNCION DESORDENAR UN STRING
 * Funcion que convierte una palabra en un array, desordena el array y vuelve a juntar la palabra en un String
 *  @argument {String} palabra
 *  @returns {String} (Devulve el mismo String que le pase pero con los valores desordenados
 * @requires Requiere la funcion shuffle del archivo shuffle.js(carpeta arrays)
 */
desordenarPalabra = function (palabra)
{
    //Guardo un array de las letras de la palabra seleciona al azar
    var palabraOrdenada = palabra.split("");
    //Desordeno el array y lo vuelvo a juntar para que sea una cadena
    var palabraDesordenada = shuffle(palabraOrdenada).join("");
    //devuelvo el resultado
    return palabraDesordenada;
};
