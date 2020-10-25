/*
 PROTOTIPOS
 -igual que la funcion constructora pero añadimos metodos fuera de la funcion.
 */

function NombreClase(argumento1, argumento2)//Este equivaldria al constructor
{
    //Definimos los atributos
    this._atributo1 = argumento1;
    this._atributo2 = argumento2 || "valor por defecto";//Podemos poner valores por defecto por si no le pasamos argumento al crear el objeto
    
    //PUEDO COMBINAR EL ATRIBUTO CON EL METODO SET. (MIRAR TAREA 4 EJERCICIO 6 JUGADOR)
    //propiedad array
    //this.arrayAnimales = ["cerdo", "gato", "perro"]
    
    //DEFINO LOS METODOS FUERA MEDIANTE PROTOTIPOS
   
};

//Podemos añadir atributos fuera del constructor
NombreClase.prototype.nuevoAtributo="valor nuevo atributo";

 //Los metodos los añadimos fuera del constructor
 NombreClase.prototype.setAtributo1=function(nuevoValor)
 {
     this._atributo1=nuevoValor;
 };

NombreClase.prototype.getAtributo2=function()
{
  return this._atributo2;
};


/*
 UTILIZACION
    -Creamos objetos de la clase
    -Usamos el objeto de forma normal
    -RECUERDA!!! Incluir el archivo de la clase en el HTML
 */

objeto= new NombreClase("valor atributo 1","valor atributo 2");

objeto.getAtributo2();

objeto2 = new NombreClase("valor atributo 1","valor atributo 2");

objeto2 = new NombreClase("valor atributo 1","valor atributo 2");

//Puedo añadir atributos y metodos solo a un objeto concreto
// RECUERDA!!! En este caso no se pone prototype

objeto2.nuevoAtributo="atributo nuevo solo para objeto 2";

objeto2.nuevoMetodo=function()
{
    return this.nuevoAtributo;
};
     