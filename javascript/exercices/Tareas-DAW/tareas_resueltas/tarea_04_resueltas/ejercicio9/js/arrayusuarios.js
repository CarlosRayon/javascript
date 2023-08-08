

/* DDWEC04 - Solución Tarea. Ejercicio 9 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE ArrayUsuarios (prototipos) ************/

function ArrayUsuarios(){
	this._usuarios=new Array();
	this_orden=true;
}

ArrayUsuarios.prototype.getPosicion=function(dni){
	var posicion=-1;
	for(var i=0;((i<this._usuarios.length)&&(posicion===-1));i++)
		if(this._usuarios[i].getDNI()===dni)
			posicion=i;
	return posicion;
};

ArrayUsuarios.prototype.insertaUsuario=function(){
	var retorno=-1;
	var usuario=null;
	if(arguments.length===1){
		usuario=arguments[0];
	}
	else{
		usuario=new Usuario(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	}
	
    var posicion=this.getPosicion(usuario.getDNI());
	if(posicion===-1){
		if(this._usuarios.length===0){
			this._usuarios.push(usuario);
			retorno=0;
		}
		else{
			for(var i=0;((i<this._usuarios.length)&&(retorno===-1));i++){
				if(this._usuarios[i].getDNI()>usuario.getDNI()){
					retorno=i;
				}				
			}
			if(retorno===-1){
				retorno=this._usuarios.length;
			}
			this._usuarios.splice(retorno,0,usuario);
		}
	}
	return retorno;
};

ArrayUsuarios.prototype.borraUsuario=function(dni){
	var encontrado=false;
	for(var i=0;((i<this._usuarios.length)&&(!encontrado));i++)
		if(this._usuarios[i].getDNI()===dni){
			encontrado=true;
			this._usuarios.splice(i,1);
		}
	return encontrado;
	
	
};

ArrayUsuarios.prototype.getUsuarioAt=function(posicion){
	var usuario=null;
	if((posicion>=0)&&(posicion<this._usuarios.length)){
		usuario=this._usuarios[posicion];		
	}
	
	return usuario;
};

ArrayUsuarios.prototype.primero=function(){
	return this._usuarios[0];
};



ArrayUsuarios.prototype.invierte=function(){
	if(this._orden===true){
		this._orden=false;
		this._usuarios.sort(function(a,b){
			if(a.getDNI()>b.getDNI())
				return +1;
			else
				return -1;
		});
	}
	else{
		this._orden=true;
		this._usuarios.sort(function(a,b){
			if(b.getDNI()>a.getDNI())
				return +1;
			else
				return -1;
		});		
		
	}
	
};

ArrayUsuarios.prototype.getLongitud=function(){
	return this._usuarios.length;
};


