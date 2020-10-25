/* 
 Pruebas para la tarea
 */

//Prueba funcion porcentaje
function porcentaje(porcentajeOcupacion) {
    /*Resto al porcentaje maximo de plazas el porcentaje de ocupacion
     * con lo que obtengo el porcentaje de plazas libres
     */
    
    const MAXIMO_PORCENTAJE = 100;
    var plazasLibres = MAXIMO_PORCENTAJE - porcentajeOcupacion;
    //Tipo incono segun el porcentanje de plazas libres
    var icono = "";
    if (plazasLibres < 25) {
        icono = "rojo";
    } else if ((plazasLibres >= 25) && (plazasLibres < 50)) {
        icono = "naranja";
    } else if ((plazasLibres > 50) && (plazasLibres < 75)) {
        icono = "azul";
    } else {
        icono = "verde";
    }
   return icono;
}
//var pr_color=porcentaje(55);
//console.log(pr_color);

/*

//Prueba coger datos objeto literal
var objetoParking = {
    id: 1,
    porcentanjeOcupacion: 60,
    coordenadas: ["left", "top"],
    nombre: "parking 1"
};
console.log(objetoParking.coordenadas[0]);

//Pruebas para la clase listado_parking
var pr_listado= new ListadoParking();//instancion objeto

var pr_objParking_uno = {
    id: "uno",
    porcentanjeOcupacion: 50,
    coordenadas: [100, 250],
    nombre: "parking prueba uno"
};

var pr_objParking_dos = {
    id: "dos",
    porcentanjeOcupacion: 50,
    coordenadas: [100, 250],
    nombre: "parking prueba dos"
};

//Por consola poniendo el nombre podemos ir viendo los valores que va obteniendo las variables
var pr_arrayParking=[pr_objParking_uno,pr_objParking_dos,pr_objParking_tres];

pr_listado.setListadoParking(pr_arrayParking);//Pruebo modificar atributo 
var pr_atributoParking=pr_listado.getListadoParking();//Prubo obtener atributo

//Creo otro objeto para añadir
  var objetoParking={
        id:"cuatro",
        porcentajeOcupacion:100,
        coordenadas:[400,200], //["left","top"],
        nombre:"parking añadido" 
    };   

pr_listado.addParking(objetoParking);//Pruebo añadir objeto
var pr_numeroParking=pr_listado.getNumeroParkings();//Pruebo obtener el numero de parkings
var pr_porId=pr_listado.getParkingFromId("cinco");//Pruebo obtener parking por id
//Prueba modificar porcentaje
console.log(pr_listado._parking[1].porcentajeOcupacion);//Vemos valor

pr_listado.actualizarPorcentaje("dos",40);//Cambio valor
console.log(pr_listado._parking[1].porcentajeOcupacion);//muestro valor
*/

