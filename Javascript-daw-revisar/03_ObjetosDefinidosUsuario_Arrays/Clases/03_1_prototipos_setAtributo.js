/* 
 Podemos combinar la funcion setter para inicializar los atributos 
 */

/* Funciones auxiliares */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}


//Constructor
function Usuarios(nombre, apellidos, edad)
{
    this.setNombre(nombre);//(???);
    this.setApellidos(apellidos);
    this.setEdad(edad); 
}


Usuarios.prototype.setNombre = function (nombre)
{

    if ((nombre !== undefined) && (typeof nombre === "string") && (nombre != ""))//tiene que ser un string y no puede estar vacio
        this._nombre = nombre;//RECUERDAD La propiedad quedaria definida aqui (???)
    else
        this._nombre = "Sin nombre";//Valor por defecto


};

Usuarios.prototype.setApellidos=function (apellidos)
{
    if((apellidos!==undefined)&&(typeof apellidos === "string")&&(apellidos!=""))
        this._apellidos=apellidos;  
    else
        this._apellidos= "Sin apellidos";
}

Usuarios.prototype.setEdad=function(edad){
    if((edad!==undefined)&&(typeof edad === "number")&&(esEntero(edad)))
       this._aNacimiento=edad;
    else
        this._aNacimiento=2017;   
};

//usamos igual
var usuario=new Usuarios("carlos","rayon",36);

console.log(usuario);

usuario.setNombre("Ines");

console.log(usuario);