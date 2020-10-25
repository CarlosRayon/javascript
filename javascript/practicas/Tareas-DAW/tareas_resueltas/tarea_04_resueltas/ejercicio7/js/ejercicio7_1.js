
/* DDWEC04 - Solución Tarea. Ejercicio 7 - Javier González Pisano */

/* Funciones auxiliares */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}

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








/*****************   CUERPO DEL SCRIPT ******************************/

window.addEventListener("load",cargaPagina);

function cargaPagina(){
    var usuarios=new Array();
    usuarios.push(new Usuario("Federico","Pérez Gómez","1111111K",1950,"Asturias"));
    usuarios.push(new Usuario("Marcos","García Santos","2222222H",1960,"Cantabria"));
    usuarios.push(new Usuario("David","Pérez Gómez","33333333E",1970,"Asturias"));
    usuarios.push(new Usuario("Luis","Gómez Pérez","4444444J",1980,"Cantabria"));

    /* Mostramos las propiedades de los usuarios por consola */
    console.warn("USUARIOS: ");
    for(var i = 0; i < usuarios.length; i++) {
       console.log(usuarios[i].toString()); 
    }

    /* Mostramos las propiedades de los usuarios en la página HTML */
    for(var i = 0; i < usuarios.length; i++) {
       document.getElementById("usuarios").innerHTML+=usuarios[i].toHTML(); 
    }

    /* Mostramos algunas propiedades de los usuarios en la página HTML */
    for(var i = 0; i < usuarios.length; i++) {
       document.getElementById("usuarios2").innerHTML+="<p>";
       document.getElementById("usuarios2").innerHTML+=usuarios[i].getNombre();
       document.getElementById("usuarios2").innerHTML+=" "+usuarios[i].getApellidos();
       document.getElementById("usuarios2").innerHTML+=" "+usuarios[i].getANacimiento();
       document.getElementById("usuarios2").innerHTML+=" "+usuarios[i].generaLogin();
       document.getElementById("usuarios2").innerHTML+="</p>\n";   
    } 
}