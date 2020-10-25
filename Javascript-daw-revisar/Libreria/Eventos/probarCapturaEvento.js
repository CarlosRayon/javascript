/**********************FUNCION PRUEBA*************************
 * Para ver si esta capturado bien el objeto
 * Ponemos un <p id"prueba> en el html
 * Le pasamos esta funcion al evento
 * 
 * */

function comprobarCaptura()
{
    document.getElementById("prueba").style.color = "red";
    var prueba = document.getElementById("prueba");
    prueba.innerHTML = "El elemento esta bien capturado"
}