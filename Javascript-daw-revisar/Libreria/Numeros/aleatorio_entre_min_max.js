/*Funcion que genera un numero aleatorio entre un minimo y un maximo  
 * 
 * @param {number} min
 * @param {numbre} max
 * @return {boolean}
 */
function aleatoriosEntreMinimoMaximo(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}
;

/*Funcion que genera aleatorio entre uno y el maximo(incluidos) podemos poner en vez uno un 0
 * @param {number} maximo
 * @return {number}
 */
function aleatorio(maximo)
{
    return parseInt(Math.random() * maximo + 1);
}
;


/*Funcion que genera aleatorio entre 0 y el numero introducido
 * si quitamos el +1 genera entre 0 y el introduccido menos 1:
 *   -introduccimos 10 los generara entre 0 y 9 por ejemplo
 */
function cursorAleatorio(numero) {
    return Math.floor(Math.random() * (numero + 1));
}
;
