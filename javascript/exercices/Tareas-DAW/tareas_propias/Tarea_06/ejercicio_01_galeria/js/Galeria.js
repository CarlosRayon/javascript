/* 
 Clase galeria
 */

function Galeria(cantidad)
{
//Atributos
    this._imagenes = new Array("foto1", "foto2", "foto3", "foto4", "foto5", "foto6", "foto7");
    this._cantidad = cantidad;
    this._indice;

    //Metodos   
    //Setter y getter de cantidad
    this.setCantidad = function (cantidad)
    {
        this._cantidad = cantidad;
    };

    this.getCantidad = function ()
    {
        return this._cantidad;
    };

    //Setter y getter de indice
    this.setIndice = function (indice)
    {
        this._indice = indice;
    };

    this.getIndice = function ()
    {
        return this._indice;
    };

    this.getImagen = function ()
    {
        return this._imagenes;
    };

    /*En cada metodo cambio el valor del atributo indice para que sea el mismo que la posicion que estamos mostrando*/

    /*Metodo que pone el cursor en una posicion aleatoria de array (_imagen)
     * @returns {String}  Nombre de la foto sacada del atributo _imagenes
     */

    this.posicionAleatoria = function ()
    {
        var posicion = parseInt((Math.random() * this._cantidad) + 0);
        this._indice = posicion;
        return this._imagenes[posicion];
    };


    /*Metodo que pone el cursor en la ultima posicon del array(_imagen)
     * @returns {String}  Nombre de la ultima foto sacada del atributo _imagenes
     */
    this.posicionUltima = function ()
    {
        this._indice = this._imagenes.length - 1;
        return this._imagenes[this._imagenes.length - 1];
    };

    /*Metodo que pone el cursor en la primera posicion del array(_imagen)
     * @returns {String}  Nombre de la primera foto que tenemos en el atributo _imagen
     */
    this.posicionPrimera = function ()
    {
        this._indice = 0;
        return this._imagenes[0];
    };

    /*Metodo que pone el cursor en una posicion anterior del array respecto a la posicon actual
     * @returns {String} Nombre de la foto anterior a la actual que tenemos en el atributo _imagen
     */
    this.posicionAnterior = function ()
    {
        if (this._indice > 0)
        {
            this._indice = this._indice - 1;
            return this._imagenes[this._indice];

        } else {

            this._indice = this._indice;
            return this._imagenes[this._indice];
        }

    };

    /*Metodo que pone el cursor en una posicion posterior del array respecto a la posicion actual
     * @returns {String} Nombre de la foto posicion a la actual que tenemos en el atributo _imagen
     */
    this.posicionPosterior = function ()
    {
        if (this._indice < this._imagenes.length - 1)
        {
            this._indice = this._indice + 1;
            return this._imagenes[this._indice];

        } else {
            this._indice = this._indice;
            return this._imagenes[this._indice];
        }
    };


}



