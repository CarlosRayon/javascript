/* 
Clase Tablero que tendra como propiedades las caracteristicas de nuestro tablero (por prototypos)
 */

function Tablero()
{
    this._filas=40;
    this._celdas=40;
    this._arrayColores=["color1","color2","color3","color4","color5","color6"];
      this._colorPintura="";                
}

/*Metodos get para obtener los atributos de la clase*/
Tablero.prototype.getFilas=function()
{
    return this._filas;
};
//Funcion que devuelve el valor del atributo  celdas
Tablero.prototype.getCeldas=function()
{
    return this._celdas;
};
//Funcion que devuelve el array de colores
Tablero.prototype.getArrayColores=function()
{
    return this._arrayColores;
};
//Funcion que devuelve el atributo del color de pintura
Tablero.prototype.getColorPintura=function ()
{
    return this._colorPintura;
};
//Funcion que cambia el atributo color de pintura por parametro pasado
Tablero.prototype.setColorPintura=function(color)
{
    this._colorPintura=color;
};






