/*
 * RECUERDA!!! En consola con console.table(array) podemos ver el array en forma tabla
 Cada posición de un array inicial representa las filas  en for i para las filas
 Cada posición del array inicial representa las columnas en for j para columnas
 */


var modulos = ["DWEC", "DWES", "EIE", "DIW", "DAW"];
var alumnos = ["carlos", "juan", "ines", "slot"];

function generaAleatorios(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//----------------ESTRUCTURA CON DOS ARRAYS--------------------------
/*
 //PASO 1º CREO LA ESTRUCTURA

        DEFINO LAS FILAS

 var notas = new Array (modulos.length);//con el tamaño del modulo le decimos las filas que va a tener el array

 SI NO SABEMOS LAS FILAS QUE TENDREMOS USAMOS notas.push(new Array());

        DEFINO LAS COLUMNAS
 
 for (var i = 0; i < modulos.length; i++) {  
 notas[i]=new Array(alumnos.length);//Definimos las columnas   TANTAS COMO DATOS QUERAMOS INSERTAR EN LA FILA
 }
 
 PASO 2º INSERTAMOS DATOS

 //Forma de recorrer el array. Usamos un doble bucle for 
 
 for (var i = 0; i < notas.length; i++) {//Primero las filas
 
 for (var j = 0; j < notas[i].length; j++) {//Para cada fila las columnas- Recorremos el tamaño de cada fila
 
 notas[i][j] = generaAleatorios(0,10);
 }
 }
 
 
 PASO 3º RECORREMOS EL ARRAY POR FILAS...
 //Recorremos el array por filas
 
 for (var i = 0; i < notas.length; i++) {
 console.log("Modulos " + modulos[i]);
 for (var j = 0; j < notas[i].length; j++) {
 console.log("nombre " + alumnos[j] + " nota " + notas[i][j]);
 }
 };
 
 ... O POR COLUMNAS

 //Recorremos el array por columnas
 for (var j = 0; j < alumnos.length; j++) {
 console.log("alumno " + alumnos[j]);
 for (var i = 0; i < notas.length; i++) {
 console.log("modulo " + modulos[j] + "nota " + notas[i][j]);  
 }
 }
 */




//-----------------ESTRUCTURA EN UN SOLO ELEMENTO--------------------


var notas = new Array(modulos.length + 1);//Tantas filas como tenga el array modulos + 1

notas[0] = new Array();//la posicion 0 sera nuevo array
notas[0].push("x");//En el nuevo array en al añado un x que estara en la posicion 0

for (var i = 0; i < alumnos.length; i++) {//Tantas columnas como posiciones de alumnos
    notas[0].push(alumnos[i]); //En el array añado los alumnos que estaran desde la poscion 1 en adelante. Recuerda que en la posicion 0 ya teniamos una x
}


for (var i = 1; i < notas.length; i++) {//RECUERDA EMPIEZO A CONTAR DESDE 1 POR QUE EN LA 0 TENGO METIDO LOS NOMBRE(LO QUE HICIMOS ANTES)
    notas[i] = new Array(alumnos.length + 1);//a partir posicion 1 creo tantas columnas como alumnos tengo
    notas[i][0] = modulos[i - 1];//En la columna 0 meto el nombre modulo
}

//RECORREMOS INSERTANOD VALORS
for (var i = 1; i < notas.length; i++) {
    for (var j = 1; j < notas[i].length; j++) {

        notas[i][j] = generaAleatorios(0, 10);
    }

}

for (var i = 1; i < notas.length; i++) {
    console.log("Modulo " + notas[i][0]);
    for (var j = 1; j < notas[i].length; j++) {
        console.log("Alumno " + notas[0][j] + "--> " + notas[i][j]);
    }
}