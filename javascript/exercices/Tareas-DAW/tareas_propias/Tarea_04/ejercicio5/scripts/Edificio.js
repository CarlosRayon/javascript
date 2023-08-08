/* 
 Carlos Rayon Alvarez UD 4 Ejercicio 5
 FALTA EL TEMA DEL ARRAY
 */

//Creamos la clase por prototipos

function Edificio(calle, numero, codigoPostal)
{
    //Propiedades
    this._calle = calle || "Sin calle";
    this._numero = numero || 0;
    this._codigoPostal = codigoPostal || 12345;
    this.planta = new Array();
    //Metodos
    this.agragePlantasYPuertas = function (nPlantas, nPuertas)
    {
//Me falta construir
    };

    //setter
    this.modificarNumero = function (numero)
    {
        this._numero = numero;
    };

    this.modificarCalle = function (calle)
    {
        this._calle = calle;
    };

    this.modificarCP = function (cp)
    {
        this._codigoPostal = cp;
    };

    //getter
    this.getCalle = function ()
    {
        return this._calle;
    };

    this.getNumero = function ()
    {
        return this._numero;
    };
    this.getCP = function ()
    {
        return this._codigoPostal;
    };

    //El ejercicio no la pide implicitamente pero la creo para mostra mensje por consola
    this.mostrarTodo = function ()
    {
        console.log("Construido nuevo edificio en calle: " + this._calle + " nº " + this._numero + " CP " + this._codigoPostal);
    };




}






