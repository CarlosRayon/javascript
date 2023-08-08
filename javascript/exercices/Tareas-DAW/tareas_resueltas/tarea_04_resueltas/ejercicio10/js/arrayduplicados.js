

/* DDWEC04 - Solución Tarea. Ejercicio 10 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE ArrayOcurrencias(prototipos) ************/

function ArrayOcurrencias(){
	this._ocurrencias=new Array();
	
}

ArrayOcurrencias.prototype = new ArrayOrdenado();
ArrayOcurrencias.prototype.constructor = ArrayOcurrencias;

ArrayOcurrencias.prototype.insertaNumero=function(numero){
	var posicion=this.getPosicion(numero);
	if(posicion!==-1){
		/* El número ya estaba insertado */
		this._ocurrencias[posicion]++;
	}
   else{
	   posicion=ArrayOrdenado.prototype.insertaNumero.call(this,numero);
	   this._ocurrencias.splice(posicion,0,1);
   }
   return posicion;
};

ArrayOcurrencias.prototype.borraNumero=function(numero){
	var posicion=this.getPosicion(numero);
	var borrado=false;
	if(posicion!=-1){
		var ocurrencias=this._ocurrencias[posicion];
		if(ocurrencias>1)
			this._ocurrencias[posicion]--;
		else{
			/* Si ocurrencias es 1 el borrado es real */
		    posicion=ArrayOrdenado.prototype.borraNumero.call(this,numero);
			this._ocurrencias.splice(posicion,1);
			borrado=true;
		}
	}
	return borrado;
};


ArrayOcurrencias.prototype.invierte=function(){
	ArrayOrdenado.prototype.invierte.call(this);
	this._ocurrencias.reverse();
	
};

ArrayOcurrencias.prototype.getNumeroOcurrencias=function(numero){
		var posicion=this.getPosicion(numero);
		return this._ocurrencias[posicion];
};



