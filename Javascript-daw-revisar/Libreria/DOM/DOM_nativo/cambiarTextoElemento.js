/* Cambia el texto de un elemento 
 * Parámetros:
 *      elemento: Elemento cuyo contenido vamos a cambiar
 *      nuevoTexto: Cadena con el nuevo texto 
 *      El elemento puedo cogerlo con documento.getele o con cualquier metodo
 *      */
function cambiaTexto(elemento,nuevoTexto){
    var anterior=elemento.childNodes[0];
    var nuevo=document.createTextNode(nuevoTexto);
    elemento.replaceChild(nuevo,anterior);
}