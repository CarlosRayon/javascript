/* 
 Carlos Rayon Alvarez UD 4 Ejercicio 4
OBTENGO LA TABLA PERO ME FALTA CALCULAR EN NUMERO DE VOTOS Y LOS VOTOS DE MAYOR A MENOR
 */

//Variables
var partidos = ["PV", "OV", "VpSI", "UPV"];
var sedes = ["Ayuntamiento", "Polideportivo", "Instituto", "Colegio", "Mercado"];

//creamos array bidimensional del tamaño apropiado 4 filas(partidos) 5 columnas(sedes)
var votos = new Array(sedes.length);

for (var i = 0; i < sedes.length; i++)
{
    votos[i] = new Array(partidos.length);

}

//insertamos datos en el array
for (var i = 0; i < votos.length; i++)
{
    for (var j = 0; j < votos[i].length; j++)
    {
        votos[i][j] = generaAleatorio(5, 10);
    }
}



//funciones

//Genera aleatorios entre 5 y 10 POR SEDE
function generaAleatorio(min, max)
{
    return Math.round(Math.random() * (max - min) + min)
}


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

