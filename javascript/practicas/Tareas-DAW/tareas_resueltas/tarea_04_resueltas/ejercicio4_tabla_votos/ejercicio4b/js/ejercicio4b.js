
/* DDWEC04 - Solución Tarea. Ejercicio 4b - Javier González Pisano */

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



/* Creamos la tabla de votos 
 * La fila 0 representa las sedes
 * La columna 0 representa los partidos */

var votos=new Array(partidos.length+1);
votos[0]=new Array(sedes.length+1);
votos[0][0]="";
for (var j = 0; j < sedes.length; j++) {
    votos[0][j+1]=sedes[j];
}
    
for (var i = 1; i < votos.length; i++) {
    votos[i]=new Array(sedes.length+1);
    votos[i][0]=partidos[i-1];
}

/* Rellenamos la tabla de votos */
for (var i = 1; i < votos.length; i++) {
    for (var j = 1; j < votos[i].length; j++) {
        votos[i][j]=generaAleatorio(MIN_VOTOS,MAX_VOTOS);
    }
}

/* Mostramos la tabla en el documento HTML: */
var tabla='<table border="1" >';

for (var j = 0; j < votos[0].length; j++) {
    tabla+="<th>"+votos[0][j]+"</th>";
}
tabla+="</tr>";


for (var i = 1; i < votos.length; i++) {
    tabla+="<tr><th>"+votos[i][0]+"</th>"
    for (var j = 1; j < votos[i].length; j++) {
       tabla+="<td>"+votos[i][j];
    }
    tabla+="</tr>";
}
tabla+="</table>";
 document.getElementById("votos").innerHTML=tabla;   





console.warn("Número de votos por partido: ");
for (var i = 1; i < votos.length; i++) {
    var total=0;
    for (var j = 1; j < votos[i].length; j++) {
       total+=votos[i][j];
    }
    console.log(" Partido "+votos[i][0]+"--> "+total+" votos");
}

console.warn("Número de votos por sede: ");
for (var j = 1; j < votos[0].length; j++) {
    var total=0;
    for (var i = 1; i < votos.length; i++) {
       total+=votos[i][j];
    }
    console.log(" Sede "+votos[0][j]+"--> "+total+" votos");
}
//
/* Para ordenar los votos por partido creamos una estructura de datos bidimensional
 * que nos permita asociar el número de votos recibido con el partido.
 */

var totales=new Array(votos.length-1);
for (var i = 1; i < votos.length; i++) {
    var total=0;
    for (var j = 1; j < votos[i].length; j++) {
       total+=votos[i][j];
    }
    totales[i-1]=new Array(votos[i][0],total);
}

totales.sort(function(a,b){
    return b[1]-a[1];
});

console.warn("Número de votos por partido (ordenados): ");
for (var i = 0; i < totales.length; i++) {
  console.log(" Partido "+totales[i][0]+"--> "+totales[i][1]+" votos");

}

