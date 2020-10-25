
/* DDWEC04 - Solución Tarea. Ejercicio 6 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE Partida (prototipo) ************/

function Partida(){
    this._jugadores=new Array();
    this._jugadores.push(new Jugador("Luci", 5,false,true,10));
    this._jugadores.push(new Jugador("Pepi", 10,true,true,0));
    this._jugadores.push(new Jugador("Bom", 2,false,false,5));
    this._jugadores.push(new Jugador("Pati", 1,true,false,2));
    this._jugadores.push(new Jugador("Sofi", 4,false,true,1));    
}

Partida.prototype.imprime=function(){
    console.warn("DATOS DE LA PARTIDA: ");
    for (var i = 0; i < this._jugadores.length; i++) {
        console.log(this._jugadores[i].toString());
    }
};

Partida.prototype.ruletaRusa=function(){
    var indice=generaAleatorio(0,this._jugadores.length-1);
    this._jugadores[indice].setNumeroVidas(0);
    
    function generaAleatorio(min,max){
         return Math.round((Math.random()*(max-min))+min)
     }
};



