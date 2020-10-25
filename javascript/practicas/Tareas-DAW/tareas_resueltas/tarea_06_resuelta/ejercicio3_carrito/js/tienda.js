
/* Clase Tienda */

function Tienda(){
    this._productos=new Array();
}

Tienda.prototype.cargaProductos=function(){
    for (var i = 0; i < productos.length; i++) {
        var producto={id:(i+1),precio:parseInt(productos[i].price), imagen:productos[i].image};
        this._productos.push([producto,parseInt(productos[i].stock)]);        
    }
};

Tienda.prototype.numeroProductos=function(){
    return this._productos.length;
};

Tienda.prototype.getProducto=function(id){
    var producto=null;
   
    var indice=this._getPosicionFromId(id);
    if(indice>=0)
          producto=this._productos[indice][0];
   
    return producto;
};

Tienda.prototype.getProductoFromPosition=function(pos){
    var producto=null;   
    if((pos>=0)&&(pos<=this._productos.length-1))
        producto=this._productos[pos][0];
    
    return producto;
};

Tienda.prototype.getStock=function(id){
   var stock=-1;
   
    var indice=this._getPosicionFromId(id);
    if(indice>=0)
           stock=this._productos[indice][1];
        
    return stock;
};

Tienda.prototype.decrementaStock=function(id){
   var stock=-1;
    var indice=this._getPosicionFromId(id);
    if(indice>=0)
        if( this._productos[indice][1]>0)
            this._productos[indice][1]--;
   
    return this._productos[indice][1];
};

Tienda.prototype.incrementaStock=function(id){
   var stock=-1;
    var indice=this._getPosicionFromId(id);
    if(indice>=0)
            this._productos[indice][1]++;
   
    return this._productos[indice][1];
};


Tienda.prototype._getPosicionFromId=function(id){
    var indice=-1;
    var encontrado=false;
    for (var i = 0; ((i < this._productos.length)&&(!encontrado)); i++) {
        if(this._productos[i][0].id==id){
           indice=i;
           encontrado=true;
        }  
    }
    return indice;
};
