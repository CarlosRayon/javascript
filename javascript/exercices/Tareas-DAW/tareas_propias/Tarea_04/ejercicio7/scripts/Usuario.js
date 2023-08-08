/* 
 Creo la clase de tipo Usuario
 COMPLETO...CREO
 */

//Creo constructor sin parametros

function Usuario(nombre, apellidos, dni, aNacimiento, provincia)
{
    this._nombre = nombre || "sin nombre";
    this._apellido = apellidos || "sin apellidos";
    this._dni = dni || "0";
    this._aNacimiento = aNacimiento || 0;
    this._provincia = provincia || "sin provincia";
}

//Creamos los setter
Usuario.prototype.setNombre = function (nombre)
{
    this._nombre = nombre;
};
Usuario.prototype.setApellido = function (apellido)
{
    this._apellido = apellido;
};
Usuario.prototype.setDni = function (dni)
{
    this._dni = dni;
};
Usuario.prototype.setANacimiento = function (aNacimiento)
{
    this._aNacimiento = aNacimiento;
};
Usuario.prototype.setProvincia = function (provincia)
{
    this._provincia = provincia;
};

//Creamos los getter
Usuario.prototype.getNombre = function ()
{
    return this._nombre;
};

Usuario.prototype.getApellidos = function ()
{
    return this._apellido;
};

Usuario.prototype.getDni = function ()
{
    return this._dni;
};

Usuario.prototype.getANacimiento = function ()
{
    return this._aNacimiento;
};

Usuario.prototype.getProvincia = function ()
{
    return this._provincia;
};


//Funcion que genera un login
Usuario.prototype.generarLogin = function ()
{
    //Hacemos array para quitar espacios y poder coger el primer caracter(tengo que probar con expresio regular a ver)
    var apellidoJunto = this.getApellidos();
    apellidoJunto = apellidoJunto.split(" ");

    //Convierto al cadena a string y saco los caracteres que queremos
    var ultimaCifrasAños = this._aNacimiento.toString().substr(2);

    //Lo junto todo en una variables
    var login = this.getNombre();
    login += apellidoJunto[0].substring(0, 1) + apellidoJunto[1].substring(0, 1) + ultimaCifrasAños;

    //var login=this.getNombre()+apellidoJunto[0].substring(0,1) + apellidoJunto.substring(0,1);
    return login;
};

//Funcion que calcula la edad

Usuario.prototype.getEdad = function ()
{
    //Saco el año actual
    var fecha = new Date();
    var añoActual = fecha.getFullYear();

    //Calculo la edad. El año actual menos el año en que nacio
    var edad = añoActual - this.getANacimiento();
    return edad;
};

//Sobreescribimos toString(El ejercicio dice sin formato ni nada entiendo que sera asi?)
Usuario.prototype.toString = function ()
{
    return this._nombre + this._apellido + this._dni + this._aNacimiento + this._provincia;
};

//Cadena de html
Usuario.prototype.toHTML = function ()
{
    var listaPropiedades = "";
    listaPropiedades = "<ul>";
    listaPropiedades += "<li>" + this.getNombre() + "</li>";
    listaPropiedades += "<li>" + this.getApellidos() + "</li>";
    listaPropiedades += "<li>" + this.getDni() + "</li>";
    listaPropiedades += "<li>" + this.getANacimiento() + "</li>";
    listaPropiedades += "<li>" + this.getProvincia() + "</li>";
    listaPropiedades += "</ul>"

    return listaPropiedades;
};

//Creo una funcion mas para mostrar los datos que se piden en el ultimo punto


Usuario.prototype.toHTML2 = function ()
{
    var login = this.generarLogin();
    var edad = this.getEdad();
    var lista = "";
    lista += "<ul>";
    lista += "<li> DNI:" + this.getDni() + "LOGIN: " + login + " EDAD: " + edad + "</li>";
    lista += "</ul>"
    return lista;
}