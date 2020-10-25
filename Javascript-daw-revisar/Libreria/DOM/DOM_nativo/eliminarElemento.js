/* RECUERDA QUITA EL ELEMENTO NO SUS HIJO Elimina el elemento que pasamos como parámetro */
function eliminaElemento(id){
    var elemento=document.getElementById(id);
    elemento.parentNode.removeChild(elemento);
}