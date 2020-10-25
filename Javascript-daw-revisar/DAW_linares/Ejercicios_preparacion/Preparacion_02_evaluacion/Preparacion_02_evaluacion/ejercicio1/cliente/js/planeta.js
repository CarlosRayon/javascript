

function Planeta(id, nombre, posicion, velocidad, descripcion) {
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    
    this.posicionX=0;
    this.posicionY=0;
    
    this._posicion=posicion;
    this._velocidad=velocidad;			
 }
 
 Planeta.prototype.mover= function(ancho,alto) {

    var centroX	=ancho/2;
    var centroY	= alto/2;
    
    var rX = (centroX / 9) * this.id -50;
    var rY = (centroY / 9) * this.id -50;			

   this._posicion += this._velocidad;

   this.posicionX = (Math.sin(this._posicion)*(rX))+centroX;
   this.posicionY = (Math.cos(this._posicion)*rY)+centroY;
    
 
};

				
				