/* 
 Definimos la clase jugador mediante prototipo
 COMPLETO...CREO
 */

function Jugador(nombre, numeroVidas, tienePistola, tieneGranada, numeroBalas)
{
    this._nombre = nombre || "Cloud";
    this._numeroVidas = numeroVidas || 3;
    this._tienePistola = tienePistola || false;
    this._tieneGranada = tieneGranada || false;
    this._numeroBalas = numeroBalas || 0;
}
;


//Definimos setter (fuera del constructor al contrario que mediante metodo constructores)
Jugador.prototype.setNombre = function (nombre)
{
    this._nombre = nombre;
};

Jugador.prototype.setNumeroVidas = function (numeroVidas)
{
    this._numeroVidas = numeroVidas;
};

Jugador.prototype.setTienePistola = function (tienePistola)
{
    this._tienePistola = tienePistola;
};

Jugador.prototype.setTieneGranada = function (tieneGranada)
{
    this._tieneGranada = tieneGranada;
};

Jugador.prototype.setNumeroBalas = function (numeroBalas)
{
    this._numeroBalas = numeroBalas;
};


//Definimos getter
Jugador.prototype.getNombre = function ()
{
    return this._nombre;
};

Jugador.prototype.getNumeroVidas = function ()
{
    return this._numeroVidas;
};

Jugador.prototype.getTienePistola = function ()
{
    return this._tienePistola;
};

Jugador.prototype.getTieneGranada = function ()
{
    return this._tieneGranada;
};

Jugador.prototype.getNumeroBalas = function ()
{
    return this._numeroBalas;
};



//Funcion to String
Jugador.prototype.toString = function ()
{
    if (this._tienePistola)
    {
        var pistola = "SI";
    } else
    {
        var pistola = "NO"
    }

    if (this._tieneGranada)
    {
        var granada = "SI";
    } else
    {
        var granada = "NO"
    }
    return "El jugador " + this._nombre + " tiene " + this._numeroVidas + " vidas, " + pistola +
            " tiene pistola y tiene " + this._numeroBalas + " y " + granada + " tiene granadas";
};

