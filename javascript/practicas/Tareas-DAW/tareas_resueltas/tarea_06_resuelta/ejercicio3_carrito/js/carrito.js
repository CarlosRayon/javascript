
/* Clase Carrito. Almacena las compras que vamos realizando  */

function Carrito(){
    this._compras=new Array();
}

Carrito.prototype.numeroCompras=function(){
    return this._compras.length;
};

/* Obtiene el producto comprado a partir del ID */

Carrito.prototype.getCompraFromId=function(id){
    var producto=null;
  
    var indice=this._getIndiceFromId(id);
    if(indice!==-1)
          producto=this._compras[indice][0];
    
    return producto;
};

Carrito.prototype.getCompraFromPosition=function(i){
    var producto=null;
    if((i>=0)&&(i<=this.numeroCompras()-1))
        producto=this._compras[i][0];
    
    return producto;
};

Carrito.prototype.insertaProducto=function(producto){
    var nuevo=false;
    
    var indice=this._getIndiceFromId(producto.id);
    if(indice===-1){
        this._compras.push([producto,1]);
        nuevo=true;
     }
     else
         this._compras[indice][1]++;
     
    return nuevo;      
};

Carrito.prototype.eliminaProductoFromId=function(id){
    var eliminado=false;
    
    var indice=this._getIndiceFromId(id);
    if(indice!==-1){       
        this._compras.splice(indice,1);
         eliminado=true;
    }
    return eliminado;
};

Carrito.prototype.getTotalCompra=function(){
    var total=0;
    for (var i = 0; i < this._compras.length; i++) 
        total+=(this._compras[i][0].precio*this._compras[i][1]);
    
    return total;
};

Carrito.prototype.getCantidadFromId=function(id){
    var cantidad=-1;
    
    var indice=this._getIndiceFromId(id);
    if(indice!==-1)
            cantidad=this._compras[indice][1];
            
    return cantidad;
};

Carrito.prototype.incrementaCantidad=function(id){
    var cantidad=-1;
    
    var indice=this._getIndiceFromId(id);
    if(indice!==-1){
        this._compras[indice][1]++;
        cantidad=this._compras[indice][1];
    }
    
    return cantidad;

};

Carrito.prototype.decrementaCantidad=function(id){
    var cantidad=-1;
    
    var indice=this._getIndiceFromId(id);
    if(indice!==-1){
        this._compras[indice][1]--;
        cantidad=this._compras[indice][1];
    }
    
    return cantidad;
};


Carrito.prototype._getIndiceFromId=function(id){
    var indice=-1;
    var encontrado=false;
  
    for (var i = 0; ((i < this._compras.length)&&(!encontrado)); i++) {
        if(this._compras[i][0].id==id){
          indice=i;
            
        }
    }
    return indice;
};

