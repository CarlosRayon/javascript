/* POR ELEMENTO Elimina el contenido elemento que pasamos como parámetro */
function eliminaContenido(elemento){
    while(elemento.firstChild!==null)
        elemento.removeChild(elemento.firstChild);
}



/* POR ID DEL ELEMENTO Elimina el contenido elemento que id que pasemos por parametro*/
function eliminaContenido(id){
    var elemento=document.getElementById(id);
    while(elemento.firstChild!==null)
        elemento.removeChild(elemento.firstChild);
}