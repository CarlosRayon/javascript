

/* DDWEC05 - Solución Tarea. Ejercicio 4 - Javier González Pisano */


/******** PRUEBA DE CLASE Color ************/

console.warn("Constructor sin parámetros: ");
var color1=new Color();
console.log(color1.getRojo()+" "+color1.getVerde()+" "+color1.getAzul());
console.log(color1.getHex());

console.warn("Constructor con valor hexadecimal C4F25F: ");
var color2=new Color("C4F25F");
console.log(color2.getRojo()+" "+color2.getVerde()+" "+color2.getAzul());
console.log(color2.getHex());

console.warn("Constructor con valor RGB (196,242,95): ");
var color3=new Color(196,242,95);
console.log(color3.getRojo()+" "+color3.getVerde()+" "+color3.getAzul());
console.log(color3.getHex());