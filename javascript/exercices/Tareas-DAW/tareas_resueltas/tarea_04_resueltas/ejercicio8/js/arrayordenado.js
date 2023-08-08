

/* DDWEC04 - Solución Tarea. Ejercicio 8 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE ArrayOrdenado(prototipos) ************/

function ArrayOrdenado(){
	this._numeros=new Array();
	this._orden=true;
}

ArrayOrdenado.prototype.getPosicion=function(numero){
	var posicion=-1;
	for(var i=0;((i<this._numeros.length)&&(posicion===-1));i++)
		if(this._numeros[i]===numero)
			posicion=i;
	return posicion;
};

ArrayOrdenado.prototype.insertaNumero=function(numero){
	var retorno=-1;
	var posicion=this.getPosicion(numero);
	if(posicion===-1){
		if(this._numeros.length===0){
			this._numeros.push(numero);
			retorno=0;
		}
		else{
			for(var i=0;((i<this._numeros.length)&&(retorno===-1));i++){
				if(this._numeros[i]>numero){
					retorno=i;
				}				
			}
			if(retorno===-1){
				retorno=this._numeros.length;
			}
			this._numeros.splice(retorno,0,numero);
		}
	}
	return retorno;
};

ArrayOrdenado.prototype.borraNumero=function(numero){
	var encontrado=false;
	for(var i=0;((i<this._numeros.length)&&(!encontrado));i++)
		if(this._numeros[i]===numero){
			encontrado=true;
			this._numeros.splice(i,1);
		}
	return encontrado;
	
	
};

ArrayOrdenado.prototype.getNumeroAt=function(posicion){
	var numero=-1;
	if((posicion>=0)&&(posicion<this._numeros.length)){
		numero=this._numeros[posicion];		
	}
	
	return numero;
};

ArrayOrdenado.prototype.primero=function(){
	return this._numeros[0];
};



ArrayOrdenado.prototype.invierte=function(){
	if(this._orden===true){
		this._orden=false;
		this._numeros.sort(function(a,b){
			return a-b;
		});
	}
	else{
		this._orden=true;
		this._numeros.sort(function(a,b){
			return b-a;
		});		
		
	}
	
};

ArrayOrdenado.prototype.getLongitud=function(){
	return this._numeros.length;
};


