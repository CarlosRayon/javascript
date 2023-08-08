
/* DDWEC04 - Solución Tarea. Ejercicio 7 - Javier González Pisano */

/******** DECLARACIÓN DE CLASE Usuario (prototipos) ************/

function Usuario(nombre,apellidos,dni,aNacimiento,provincia){
   this.setNombre(nombre);
   this.setApellidos(apellidos);
   this.setDNI(dni);
   this.setANacimiento(aNacimiento);
   this.setProvincia(provincia);
};

Usuario.prototype.setNombre=function(nombre){
   if((nombre!==undefined)&&(typeof nombre === "string")&&(nombre!=""))
        this._nombre=nombre;  
    else
        this._nombre="Sin nombre";
};
 

Usuario.prototype.setApellidos=function(apellidos){
   if((apellidos!==undefined)&&(typeof apellidos === "string")&&(apellidos!=""))
        this._apellidos=apellidos;  
    else
        this._apellidos= "Sin apellidos";
};

Usuario.prototype.setDNI=function(dni){
   if((dni!==undefined)&&(typeof dni === "string")&&(dni!=""))
        this._dni=dni;  
    else
        this._dni= "Sin DNI";  
};

Usuario.prototype.setANacimiento=function(aNacimiento){
    if((aNacimiento!==undefined)&&(typeof aNacimiento === "number")&&(esEntero(aNacimiento)))
       this._aNacimiento=aNacimiento;
    else
        this._aNacimiento=2017;   
};

Usuario.prototype.setProvincia=function(provincia){
   if((provincia!==undefined)&&(typeof provincia === "string")&&(provincia!=""))
        this._provincia=provincia;  
    else
        this._provincia= "Teruel";  
};

Usuario.prototype.getNombre=function(){
    return this._nombre;
};

Usuario.prototype.getApellidos=function(){
    return this._apellidos;
};

Usuario.prototype.getDNI=function(){
    return this._dni;
};

Usuario.prototype.getANacimiento=function(){
   return this._aNacimiento;
};

Usuario.prototype.getProvincia=function(){
    return this._provincia;
};

Usuario.prototype.generaLogin=function(){
  var login="";
  login+=this._nombre[0];
  var apellidos=this._apellidos.split(" ");
    for (var i = 0; i < apellidos.length; i++) {
        login+=apellidos[i][0];
    }
  login+=this._aNacimiento.toString().substring(2,4);
    
 return login;
};

Usuario.prototype.getEdad=function(){
 var anioActual=new Date().getFullYear();
 return (anioActual-this.getANacimiento());
};

Usuario.prototype.toString=function(){
 var salida="";
 salida+="Nombre >> "+this.getNombre()+"\n";
 salida+="Apellidos >> "+this.getApellidos()+"\n";
 salida+="DNI >> "+this.getDNI()+"\n";
 salida+="Año de nacimiento >>"+this.getANacimiento()+"\n";
 salida+="Provincia >>"+this.getProvincia();
 
 return salida;
};

Usuario.prototype.toHTML=function(){
 var salida="";
 salida+="<p>Usuario "+this.getNombre()+" "+this.getApellidos()+"</p>\n";
 salida+="<ul>\n";
 salida+="<li>"+this.getDNI()+"</li>";
 salida+="<li>"+this.getANacimiento()+"</li>";
  salida+="<li>"+this.getProvincia()+"</li>";
 salida+="</ul>\n";
 
 return salida;
 
 
};