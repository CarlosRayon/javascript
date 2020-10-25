
/*
 FUNCIONES CONSTRUCTORAS
 -Simulamos una clase con una funcion constructora
 -Conveniente inicializar el constructor con un valor por defecto
 -En JS no podemos definir directamente como privados los atributos por lo que
 usamos la convencion del __ para indicar que el atributo es privado aunque le sigamos poder usar
 -Presenta el problema de que se vuelve a definir los metodos en cada objeto 
 */
function NombreClase(argumento1, argumento2)
{
    //Definimos los atributos
    this._atributo1 = argumento1;
    this._atributo2 = argumento2 || "valor por defecto";//Podemos poner valores por defecto por si no le pasamos argumento al crear el objeto

    //Metodos
    this.setAtributo1 = function (nuevoValor)
    {
        this._atributo1 = nuevoValor;
    };

    this.getAtributo = function ()
    {
        return this._atributo2;
    };

};


/*
 UTILIZACION:
    -Creamos objetos de la clase
    -Usamos el objeto de forma normal
    -RECUERDA!!! Incluir el archivo de la clase en el HTML
 */

var objeto= new NombreClase("valor para atributo 1", "valor para atributo 2");//RECUERDA!!! Puedo instanciar con constructor vacio y luego modificar con metodos set
var objeto2=new NombreClase("valor para atributo 1", "valor para atributo 2");
objeto.setAtributo1("cambio el valor atributo 1");
objeto2.getAtributo2();