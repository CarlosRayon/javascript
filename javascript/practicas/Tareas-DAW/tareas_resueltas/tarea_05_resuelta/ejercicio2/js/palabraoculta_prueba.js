
/* DDWEC05 - Solución Tarea. Ejercicio 2 - Javier González Pisano */

/******** PRUEBA DE CLASE PalabraOculta  ************/

var palabraOculta=new PalabraOculta();

palabraOculta.setDificultad(4);
console.warn("Dificultad 4: ");
for (var i = 0; i < 10; i++) {
    console.log(palabraOculta.generaPalabra()+"["+palabraOculta.getPalabraActual()+"]");
}

palabraOculta.setDificultad(6);
console.warn("Dificultad 6: ");
for (var i = 0; i < 10; i++) {
    console.log(palabraOculta.generaPalabra()+"["+palabraOculta.getPalabraActual()+"]");
}

palabraOculta.setDificultad(8);
console.warn("Dificultad 8: ");
for (var i = 0; i < 10; i++) {
    console.log(palabraOculta.generaPalabra()+"["+palabraOculta.getPalabraActual()+"]");
}


for (var i = 0; i < 5; i++) {
    palabraOculta.acierto();
}

for (var i = 0; i < 5; i++) {
    palabraOculta.fallo();
}

console.log("Porcentaje de aciertos: "+palabraOculta.porcentajeAcierto()+"%");

