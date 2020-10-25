
/* DDWEC04 - Solución Tarea. Ejercicio 6 - Javier González Pisano */

/* Funciones auxiliares */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

/******** DECLARACIÓN DE CLASE Jugador (prototipo) ************/

function Jugador(nombre,numeroVidas,tienePistola,tieneGranada,numeroBalas){
   this.setNombre(nombre);
   this.setNumeroVidas(numeroVidas);
   this.setTienePistola(tienePistola);
   this.setTieneGranada(tieneGranada);
   this.setNumeroBalas(numeroBalas);
}

Jugador.prototype.setNombre=function(nombre){
    if((nombre!==undefined)&&(typeof nombre === "string")&&(nombre!=""))
        this._nombre=nombre;  
    else
        this._nombre="Don nadie";
};

Jugador.prototype.setNumeroVidas=function(numeroVidas){
 if((numeroVidas!==undefined)&&(typeof numeroVidas === "number")&&(esEntero(numeroVidas)))
    this._numeroVidas=numeroVidas;
 else
     this._numeroVidas=0;
};

Jugador.prototype.setTienePistola=function(tienePistola){
  if((tienePistola!==undefined)&&(typeof tienePistola === "boolean"))
    this._tienePistola=tienePistola;
 else
     this._tienePistola=false; 
};  
    
 
Jugador.prototype.setTieneGranada=function(tieneGranada){
    if((tieneGranada!==undefined)&&(typeof tieneGranada === "boolean"))
    this._tieneGranada=tieneGranada;
 else
     this._tieneGranada=false; 
};

Jugador.prototype.setNumeroBalas=function(numeroBalas){
 if((numeroBalas!==undefined)&&(typeof numeroBalas === "number")&&(esEntero(numeroBalas)))
    this._numeroBalas=numeroBalas;
 else
     this._numeroBalas=0; 
};


Jugador.prototype.getNombre=function(){
    return this._nombre;
 };

Jugador.prototype.getNumeroVidas=function(){
    return this._numeroVidas;
 };
 
 Jugador.prototype.getTienePistola=function(){
    return this._tienePistola;
 };
 
 Jugador.prototype.getTieneGranada=function(){
    return this._tieneGranada;
 };
 
  Jugador.prototype.getNumeroBalas=function(){
    return this._numeroBalas;
 };
 
 Jugador.prototype.toString=function(){
  var salida="";
  salida+="El jugador "+this.getNombre();
  salida+=" tiene "+this.getNumeroVidas()+" vidas ";
  if(this.getTienePistola())
      salida+=", tiene pistola";

  if(this.getTieneGranada())
      salida+=", tiene granada";
  
  salida+=" y tiene "+this.getNumeroVidas()+" balas.";
  
  return salida;
 };


