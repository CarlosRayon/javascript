
/* Prueba de la clase Flota */

var flota=new Flota();

var insertado;
insertado=flota.addAutobus(new Autobus("5534-GRF","Santander","Torrelavega",new Date("12-11-2017"),20,6));
if(insertado)
    console.log("Se ha insertado el autobús 5534-GRF");
insertado=flota.addAutobus(new Autobus("4423-GRF","Santander","Torrelavega",new Date("12-10-2017"),10,6));
if(insertado)
    console.log("Se ha insertado el autobús 4423-GRF");
insertado=flota.addAutobus(new Autobus("4423-GRF","Santander","Torrelavega",new Date("12-10-2017"),10,6));
if(!insertado)
    console.log("No ha insertado el autobús 4423-GRF (repetido)");
insertado=flota.addAutobus(new Autobus("1111-GRF","Reinosa","Suances",new Date("12-11-2017"),15,8));
if(insertado)
    console.log("Se ha insertado el autobús 1111-GRF");

console.warn("Autobús de Santander a Torrelavega: "+flota.getAutobus("Santander","Torrelavega").matricula);
console.warn("Autobús de Reinosa a Suances: "+flota.getAutobus("Reinosa","Suances").matricula);
if(flota.getAutobus("Suances","Torrelavega")===null)
    console.warn("No hay autobús de Suances a Torrelavega");

console.log("Recorremos todos los autobuses: ");
for (var i = 0; i < flota.getNumeroAutobuses(); i++) {
    var autobus=flota.getAutobusPosicion(i);
    console.log("  "+autobus.matricula+"- De "+autobus.origen+" a "+autobus.destino);
    
}