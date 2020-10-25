/* 
 Carlos Rayon Alvarez Tarea05
 Contiene la clase PalabraOculta, que contiene la lógica necesaria para manejar el juego.
 Será necesario determinar antes de comenzar a programar qué métodos y propiedades
 se necesitan (aunque puede ser adecuado focalizarnos en las propiedades
 y los métodos principales, para luego ir añadiendo los métodos a medida que los necesitemos).
 */


function PalabraOculta() {
/*  Array de diez valores de donde se sacaran las palabras
 *  @property {Array} _
 */
    this._palabras = ["ESTUDIAR", "APROBAR", "JAVASCRIPT", "DESARROLLO", "HOLA", "FEO", "GUAPO", "CASA", "ORDENADOR", "CONSOLA"];
    this.palabraOriginal="";
}


    /*Funcion que genera un numero aleatorio entre un minimo y un maximo  
     * 
     * @param {number} min
     * @param {numbre} max
     * @return {boolean}
     */ 
PalabraOculta.prototype.generarAleatorio = function (min, max)
{
    return Math.round(Math.random() * (max - min) + min);
};



    /*Funcion que desordena los elementos de un array(hace un shuffle de un array)
     * @argument {array} array
     * @returns {array} 
     */
PalabraOculta.prototype.desordenarPalabra = function (array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E intercambiarlo con el elemento actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

/*Metodo que me escoge una palabra al azar del array
 * @returns {String} 
 */
PalabraOculta.prototype.escogerPalabra = function ()
{
    return this._palabras[this.generarAleatorio(0, 9)];
};



/*Funcion que convierte una palabra en un array, desordena el array y vuelve a juntar la palabra en un String
 *  @argument {String} palabra
 *  @returns {String} (Devulve el mismo String que le pase pero con los valores desordenados
 * @requires Requiere del metodo desordenarPalabra   para funcionar
 */
PalabraOculta.prototype.palabraParaDescifrar = function (palabra)
{
    //Guardo un array de las letras de la palabra seleciona al azar
    var palabraOrdenada = palabra.split("");

    //Desordeno el array y lo vuelvo a juntar para que sea una cadena
    var palabraDesordenada = this.desordenarPalabra(palabraOrdenada).join("");
    //devuelvo el resultado
    return palabraDesordenada;
};