

/* Clase Galería */

function Galeria(cantidad){

    this._cantidad=cantidad;
    this._generaImagenes();
    this._cursor=this.cursorAleatorio();
   
}

Galeria.prototype._generaImagenes=function(){
    this._imagenes=new Array();
    for (var i = 0; i < this._cantidad; i++) {
        this._imagenes.push("foto"+(i+1)+".jpg");
    }
};

Galeria.prototype.cursorAleatorio=function(){
    return Math.floor(Math.random()*this._cantidad);
};

Galeria.prototype.posicionAnterior=function(){
    var imagen=null;
    if(this._cursor>0){
        this._cursor--;
        imagen=this._imagenes[this._cursor];
    }
    return imagen;
};

Galeria.prototype.posicionSiguiente=function(){
    var imagen=null;
    if(this._cursor<this._imagenes.length-1){
        this._cursor++;
        imagen=this._imagenes[this._cursor];
    }
    return imagen;
};

Galeria.prototype.posicionPrimera=function(){
        this._cursor=0;
        return this._imagenes[this._cursor];
};

Galeria.prototype.posicionUltima=function(){
        this._cursor=this._imagenes.length-1;
        return this._imagenes[this._cursor];
};

Galeria.prototype.posicionActual=function(){
        return this._imagenes[this._cursor];
};

Galeria.prototype.cursorEnPrimera=function(){
    return this._cursor===0;
};

Galeria.prototype.cursorEnUltima=function(){
    return this._cursor===this._imagenes.length-1;
};





