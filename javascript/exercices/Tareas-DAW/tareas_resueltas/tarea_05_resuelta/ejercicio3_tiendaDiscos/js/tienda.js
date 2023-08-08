
/* DDWEC05 - Solución Tarea. Ejercicio 3 - Javier González Pisano */


/******** DEFINICION DE ENUMERADO TIPO_MUSICA ************/

const TIPO_MUSICA={
    "ROCK":1,
    "POP":2,
    "PUNK":3,
    "INDIE":4
};


/******** DECLARACIÓN DE CLASE Tienda (Función constructora) ************/

function Tienda(){
  this._discos=new Array();
  
  this.getNumeroDiscos=function(){
    return this._discos.length;  
  };
  
  this.getNumeroDiscosDisponibles=function(){
      var contador=0;
        for (var i = 0; i < this._discos.length; i++) {
            if(this._discos[i].prestado===false)
                contador++;
        }   
      return contador;
  };
  
  
  this.getTituloDisco=function(pos){
     var titulo=null;
     if((pos>=0)&&(pos<this.getNumeroDiscos()))
         titulo=this._discos[pos].titulo;
     
      return titulo;
  };
  
  this.getDisco=function(pos){
     var disco=null;
     if((pos>=0)&&(pos<this.getNumeroDiscos()))
         disco=this._discos[pos];
     
      return disco;
  };
  
  this.getPosicion=function(titulo){
      
   var posicion=-1;
    for (var i = 0;((i < this.getNumeroDiscos())&&(posicion===-1)); i++) {
        if(this.getTituloDisco(i).toUpperCase()===titulo.toUpperCase())
          posicion=i;
    }
    return posicion;
  };
  
  
  this.existeDisco=function(titulo){
   return (this.getPosicion(titulo)!==-1);
  };

 this.addDisco=function(titulo,cantante,tipo,fecha,estanteria,prestado){
     var insertado=false;
     if(!this.existeDisco(titulo)){     
        var disco={
            titulo:titulo,
            cantante:cantante,
            tipo:tipo,
            fecha:fecha,
            estanteria:estanteria,
            prestado:prestado
        };
        this._discos.push(disco);
        insertado=true;
    }
    return insertado; 
  };

  this.deleteDisco=function(titulo){
    var borrado=false;
    if(this.existeDisco(titulo)){
        var posicion=this.getPosicion(titulo);
        this._discos.splice(posicion,1);
        borrado=true;
    }
    return borrado;
  };
  
 
  this.modificaDisco=function(titulo,cantante,tipo,fecha,estanteria,prestado){
    var modificado=false;
    if(this.existeDisco(titulo)){
        var posicion=this.getPosicion(titulo);
        this._discos[posicion].cantante=cantante;
        if(tipo!==undefined)
             this._discos[posicion].tipo=tipo;
      
        if(fecha!==undefined)
             this._discos[posicion].fecha=fecha;        

        if(estanteria!==undefined)
             this._discos[posicion].estanteria=estanteria;

        if(prestado!==undefined)
             this._discos[posicion].prestado=prestado;
      
      modificado=true;
      }
      return modificado;
  };
  
  
};

