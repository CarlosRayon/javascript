
/* DDWEC05 - Solución Tarea. Ejercicio 5 - Javier González Pisano */


/******** DEFINICION DE CLASE ListaColores ************/

function ListaColores(){
    this._colores=new Array();
}

ListaColores.prototype.addColor=function(color){
    this._colores.push(color);
};

ListaColores.prototype.getColor=function(i){
    return this._colores[i];
};

ListaColores.prototype.getNumeroColores=function(){
    return this._colores.length;
};

ListaColores.prototype.toHTML=function(){
    var salida="<ul>";
    for (var i = 0; i < this._colores.length; i++) {
        salida+="<li> #"+this._colores[i].getHex()+"</li>";
    }
    
    salida+="</ul>";
    return salida;
};






