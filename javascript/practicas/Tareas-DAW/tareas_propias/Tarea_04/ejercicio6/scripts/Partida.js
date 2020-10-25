/* 
 Definimos la clase partida
COMPLETO...CREO
 */

function Partida()
{
    jugador1 = new Jugador("Cloud", 5, true, false, 100);
    jugador2 = new Jugador("Tifa", 3, true, false, 50);
    jugador3 = new Jugador("Nagaki", 5, false, false, 50);
    jugador4 = new Jugador("Shepirot", 3, true, false, 1000);
    jugador5 = new Jugador("Cid", 3, true, false, 13450);
    this._jugadores = new Array(jugador1, jugador2, jugador3, jugador4, jugador5);

}
;

//Funcion que muestra los datos de todos los jugadores
Partida.prototype.imprime = function ()
{
    for (var i = 0; i < this._jugadores.length; i++)
    {
        console.log(this._jugadores[i].toString());
    }

};

//Funcion que pone a 0 la vida de un jugador al azar
Partida.prototype.ruletaRusa = function () {
    function generaAleatorio(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    }
    var aleatorio = generaAleatorio(0, 4);

    this._jugadores[aleatorio].setNumeroVidas(0);

};