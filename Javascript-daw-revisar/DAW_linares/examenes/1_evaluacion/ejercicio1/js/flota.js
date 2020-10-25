

/* Definición de la clase Flota */

function Flota(){
    this._autobuses=new Array();
}

Flota.prototype.addAutobus=function(autobus){
    var nuevo=true;
    for (var i = 0; ((i < this._autobuses.length)&&(nuevo===true)); i++) {
        if(this._autobuses[i].matricula===autobus.matricula)
            nuevo=false;
    }
    if(nuevo){
        /* No se ha encontrado otro autobús con la matrícula */
        this._autobuses.push(autobus);
    }
    return nuevo;    
};

Flota.prototype.getAutobus=function(origen,destino){
    var encontrado=null;
    for (var i = 0; ((i < this._autobuses.length)&&(!encontrado)); i++) {
        if((this._autobuses[i].origen===origen)
         &&(this._autobuses[i].destino===destino)
         &&(this._autobuses[i].getPorcentajeOcupacion()<100)){
            encontrado= this._autobuses[i];
        } 
    }
    return encontrado;
};

Flota.prototype.getAutobusPosicion=function(posicion){
   var autobus;
    if((posicion>=0)&&(posicion<=this._autobuses.length))
        autobus=this._autobuses[posicion];
    else
        autobus=null;
   return autobus;
};


Flota.prototype.getNumeroAutobuses=function(){
    return this._autobuses.length;
};



