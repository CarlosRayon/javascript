/* Devuelve el elemento DOM correspondiente al ID que recibe como parámetro */
function elementoID(id){
    return document.querySelector("#"+id);
}

var nombre=elementoID("noombre").value; //Seria valido y me cogeria el value del elemento capturado