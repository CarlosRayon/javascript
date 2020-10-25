
/* DDWEC05 - Solución Tarea. Ejercicio 1 - Javier González Pisano */

/******** PRUEBA DE CLASE PalabraOculta  ************/

var palabraOculta=new PalabraOculta();

for (var i = 0; i < 20; i++) {
    console.log(palabraOculta.generaPalabra()+"["+palabraOculta.getPalabraActual()+"]");
}

for (var i = 0; i < 5; i++) {
    palabraOculta.acierto();
}

for (var i = 0; i < 5; i++) {
    palabraOculta.fallo();
}

console.log("Porcentaje de aciertos: "+palabraOculta.porcentajeAcierto()+"%");

