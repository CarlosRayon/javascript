/* 
 Carlos Rayon Alvarez UD 4 Ejercicio 5
 FALTA TEMA ARRAY
 */

//Instaciamos objetos de la clase Edificio

//Con todos los parametros
var edificio1 = new Edificio("la mia", 2, 520);
edificio1.mostrarTodo();
//Faltando un parametro
var edificio2 = new Edificio("la mia", 2);
edificio2.mostrarTodo();
//Faltando todos los parametros
var edificio3 = new Edificio();
edificio3.mostrarTodo();

//Vemos los datos. Compruebo que este edificio tiene los datos que le pase por parametros correctos
console.log("edificio 1 calle " + edificio1.getCalle());
console.log("edificio 1 calle " + edificio1.getNumero());
console.log("edificio 1 calle " + edificio1.getCP());
//Este  edificio muestran los valores que le pase  y coge el ultimo por defecto del cosntructor constructor
console.log("edificio 2 calle " + edificio2.getCalle());
console.log("edificio 2 numero " + edificio2.getNumero());
console.log("edificio 2 codigo postal " + edificio2.getCP());
//Este edificio muestra los parametros por defecto que le pase al constructor
console.log("edificio 3 calle " + edificio3.getCalle());
console.log("edificio 3 numero " + edificio3.getNumero());
console.log("edificio 3 codigo postal " + edificio3.getCP());

//Modificamos un edificio parametro del edificio y mostramos el cambio
edificio3.modificarCalle(" modificada");
edificio3.modificarNumero(5);//?¿¿?¿¿No entiendo por que no me la coge como funcion(ni compiando el nombre directamente)?¿?¿?
console.log(modificarNumero);//indefinida
edificio1.modificarCP(55555);




