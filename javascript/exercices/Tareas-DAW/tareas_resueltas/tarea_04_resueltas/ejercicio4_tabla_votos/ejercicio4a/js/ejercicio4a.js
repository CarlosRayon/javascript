
/* DDWEC04 - Solución Tarea. Ejercicio 4a - Javier González Pisano */

/*****************   DECLARACIÓN DE FUNCIONES ******************************/

/*
 * Función generaAleatorio()
 *   Recibe: 
 *              min [entero]
  *             max [entero]
 *              
 *   Devuelve:  [entero]
 * 
 *   Genera un aleatorio entre min y max
 *   
 */
function generaAleatorio(min,max){
    return Math.round((Math.random()*(max-min))+min)
}



/*****************   CUERPO DEL SCRIPT ******************************/

const MAX_VOTOS=10;
const MIN_VOTOS=5;

var sedes=["Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];
var partidos=["PV","OV","VpSI","UPV"];



/* Creamos la tabla de votos */

var votos=new Array(partidos.length);//Creo filas tantas como partidos
for (var i = 0; i < votos.length; i++) {
    votos[i]=new Array(sedes.length);//Creo columnas tantas como sedes
}

/* Rellenamos la tabla de votos */
for (var i = 0; i < votos.length; i++) {
    for (var j = 0; j < votos[i].length; j++) {
        votos[i][j]=generaAleatorio(MIN_VOTOS,MAX_VOTOS);
    }
}

/* Mostramos la tabla en el documento HTML: */
var tabla='<table border="1" >';
tabla+="<tr><th></th>";//CREAMOS LA CABECERAS DE LAS TABLAS
for (var i = 0; i < sedes.length; i++) {
    tabla+="<th>"+sedes[i]+"</th>";
}
tabla+="</tr>";


for (var i = 0; i < votos.length; i++) {
    tabla+="<tr><th>"+partidos[i]+"</th>"
    for (var j = 0; j < votos[i].length; j++) {
       tabla+="<td>"+votos[i][j];
    }
    tabla+="</tr>";
}
tabla+="</table>";
 document.getElementById("votos").innerHTML=tabla;   





console.warn("Número de votos por partido: ");
for (var i = 0; i < votos.length; i++) {
    var total=0;
    for (var j = 0; j < votos[i].length; j++) {
       total+=votos[i][j];
    }
    console.log(" Partido "+partidos[i]+"--> "+total+" votos");
}

console.warn("Número de votos por sede: ");
for (var j = 0; j < sedes.length; j++) {
    var total=0;
    for (var i = 0; i < partidos.length; i++) {
       total+=votos[i][j];
    }
    console.log(" Sede "+sedes[j]+"--> "+total+" votos");
}

/* Para ordenar los votos por partido creamos una estructura de datos bidimensional
 * que nos permita asociar el número de votos recibido con el partido.
 */

var totales=new Array(partidos.length);
for (var i = 0; i < votos.length; i++) {
    var total=0;
    for (var j = 0; j < votos[i].length; j++) {
       total+=votos[i][j];
    }
    totales[i]=new Array(partidos[i],total);
}

totales.sort(function(a,b){
    return b[1]-a[1];
});

console.warn("Número de votos por partido (ordenados): ");
for (var i = 0; i < totales.length; i++) {
  console.log(" Partido "+totales[i][0]+"--> "+totales[i][1]+" votos");

}

