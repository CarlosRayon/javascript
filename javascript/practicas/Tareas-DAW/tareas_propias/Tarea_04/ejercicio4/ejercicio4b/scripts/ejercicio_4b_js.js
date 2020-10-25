/* 
 Carlos Rayon Alvarez UD 4 Ejercicio 4
OBTENGO LA TABLA PERO ME FALTA CALCULAR EN NUMERO DE VOTOS Y LOS VOTOS DE MAYOR A MENOR
 */

//Variables Creacion de arrays
var partidos = ["PV", "OV", "VpSI", "UPV"];
var sedes = ["Ayuntamiento", "Polideportivo", "Instituto", "Colegio", "Mercado"];


var votos = new Array(sedes.length + 1);

votos[0] = new Array();
votos[0].push("x");


for (var i = 0; i < partidos.length; i++)
{
    votos[0].push(partidos[i])
}


for (var i = 1; i < votos.length; i++)
{
    votos[i] = new Array(partidos.length + 1);
    votos[i][0] = sedes[i - 1];
}


//LLenamos el array 
for (var i = 1; i < votos.length; i++)
{
    for (var j = 1; j < votos[i].length; j++) {
        votos[i][j]=generaAleatorio(5,10);
    }
}



//funciones

//Genera aleatorios entre 5 y 10 POR SEDE
function generaAleatorio(min, max)
{
    return Math.round(Math.random() * (max - min) + min)
}

//Funcion para mostra los datos
 function mostrarDatos() {
 var datos = "";
 for (var i = 0; i < votos.length; i++)
 {
 datos = "<tr>";
 
 for (var j = 0; j < votos[i].length; j++)
 {
 datos += "<td>" + votos[i][j] + "</td>";
 }
 datos += "</tr>";
 document.write(datos);
 }
 
 
 }
 
