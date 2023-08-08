
/* Prueba de la clase gráfica para la gestión de un conjunto de datos */

var miGrafica=new Grafica();

miGrafica.insertaDato({"etiqueta":"Grapadoras","valor":50});
miGrafica.insertaDato({"etiqueta":"Clips","valor":100});
miGrafica.insertaDato({"etiqueta":"Lápices","valor":200});

console.log("Listado de datos:");
for (var i = 0; i < miGrafica.numeroElementos(); i++) {
    var dato=miGrafica.getDato(i);
    console.log(" Etiqueta: "+dato.etiqueta+". Valor: "+dato.valor);
    console.log("   Porcentaje:"+miGrafica.calculaPorcentaje(dato.etiqueta)+"%");
}

miGrafica.borrarDato("Lápices");

console.log("Listado de datos (tras borrar lápices)");
for (var i = 0; i < miGrafica.numeroElementos(); i++) {
    var dato=miGrafica.getDato(i);
    console.log(" Etiqueta: "+dato.etiqueta+". Valor: "+dato.valor); 
    console.log("   Porcentaje:"+miGrafica.calculaPorcentaje(dato.etiqueta)+"%");  
}