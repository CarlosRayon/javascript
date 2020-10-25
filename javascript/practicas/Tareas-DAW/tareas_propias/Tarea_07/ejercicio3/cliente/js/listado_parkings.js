
/* Definición de la clase ListadoParking */

function ListadoParking()
{
    //Propiedad
    this._parking = [];
}

//Añadimos las funciones por prototipo
/*Modifica el atributo _parking
 * @argument {Array} objetoParking
 */
ListadoParking.prototype.setListadoParking = function (arrayParking) {
    this._parking = arrayParking;
};

/*Devuelve la propieda _parking
 * @returns {Array} 
 */
ListadoParking.prototype.getListadoParking = function ()
{
    return this._parking;
};

/*Añade un objeto de tipo parking a la la propiedad _parking
 * @argument {Object} objetoParking
 */
ListadoParking.prototype.addParking = function (objetoParking)
{
    this._parking.push(objetoParking);
};

/*Devueleve el numero de objetos que tiene la propiedad _parking
 * @returns {Int} 
 */
ListadoParking.prototype.getNumeroParkings = function ()
{
    return this._parking.length;
};

/*Devuelve el objeto que concuerde con el parametro
 * @argument {String} id
 * @returns {Object} de tipo parking
 */
ListadoParking.prototype.getParkingFromId = function (id)
{
    for (var i = 0; i < this._parking.length; i++) {
        if (this._parking[i].id === id)
        {
            return this._parking[i];
        }
    }
    return false;
};

/*Actualiza el porcentaje del objeto con mismo id que el pasado por parametros
 * @argument {String} id
 * @argument {Int} porcentaje
 */
ListadoParking.prototype.actualizarPorcentaje = function (id, porcentaje)
{
    for (var i = 0; i < this._parking.length; i++) {     
        if (this._parking[i].id === id)
        {
            this._parking[i].porcentajeOcupacion = porcentaje;
        }
    }
};
 