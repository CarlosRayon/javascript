
/* Clase gráfica para la gestión de un conjunto de datos 
   Tomamos la etiqueta de un dato como identificador que suponemos único */

function Grafica(){
    this._datos=new Array();
}

Grafica.prototype.insertaDato=function(dato){
    var insertado=false;
    if(this.buscaDato(dato.etiqueta)===null){
        this._datos.push(dato);
        insertado=true;
    }
    return insertado;
};

Grafica.prototype.borrarDato=function(etiqueta){
     var borrado=false;
     var indice=this._indiceDato(etiqueta);
    if(indice!==-1){
        this._datos.splice(indice,1);
    }
    return borrado;
};

Grafica.prototype.buscaDato=function(etiqueta){
    var dato=null;
    for (var i = 0; ((i < this._datos.length)&&(dato===null)); i++) {
        if(this._datos[i].etiqueta===etiqueta){
            dato=this._datos[i];
        }
    }
    return dato;
};

Grafica.prototype.numeroElementos=function(){
    return this._datos.length;
};

Grafica.prototype.getDato=function(indice){
    var dato=null;
    if((indice>=0)&&(indice<this._datos.length))
        dato=this._datos[indice];
    return dato;
};

Grafica.prototype.calculaPorcentaje=function(etiqueta){
    var porcentaje=0;
    
    var indice=this._indiceDato(etiqueta);
    if(indice!==-1){
       porcentaje=Math.floor((this._datos[indice].valor*100)/this._maximoValor());
    }
    return porcentaje;  
};



Grafica.prototype._indiceDato=function(etiqueta){
    var indice=-1;
    for (var i = 0; ((i < this._datos.length)&&(indice===-1)); i++) {
        if(this._datos[i].etiqueta===etiqueta){
            indice=i;
        }
    }
    return indice;
};

Grafica.prototype._maximoValor=function(){
    var maximo=0;
    if(this.numeroElementos()>0){
       maximo=this._datos[0].valor;
        for (var i = 1; i < this.numeroElementos(); i++) {
            if(this._datos[i].valor>maximo)
                maximo=this._datos[i].valor;
        }   
    }
    return maximo;
};



