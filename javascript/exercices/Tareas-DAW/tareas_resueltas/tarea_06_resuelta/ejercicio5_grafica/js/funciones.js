
/********************** FUNCIONES AUXILIARES *************************/


/* Devuelve el elemento DOM correspondiente al ID que recibe como parámetro */
function elementoID(id){
    return document.querySelector("#"+id);
}


/* Crea y devuelve un elemento y lo inserta en el DOM.
 * Si alguno de los parámetros es null no se considera
 * Parámetros:
 *              elemento: Etiqueta del elemento HTML a crear
 *              padre: Padre del elemento
 *              id [opcional]: id del elemento
 *              clase [opcional]: Clase del elemento
 *              contenido [opcional]: Contenido del elemento
 *      
 *  Devuelve:
 *      elemento que se ha creado.
 */
function creaElemento(elemento,padre,id,clase,contenido){
    var nodo=document.createElement(elemento);
    padre.appendChild(nodo);
    if((id!==undefined)&&(id!==null))
        nodo.id=id;
   
     if((clase!==undefined)&&(clase!==null))
        nodo.className=clase;
 
      if((contenido!==undefined)&&(contenido!==null)){
          var texto=document.createTextNode(contenido);
          nodo.appendChild(texto);
      }    
    return nodo;
}

/* Cambia el texto de un elemento 
 * Parámetros:
 *      elemento: Elemento cuyo contenido vamos a cambiar
 *      nuevoTexto: Cadena con el nuevo texto */
function cambiaTexto(elemento,nuevoTexto){
    var anterior=elemento.childNodes[0];
    var nuevo=document.createTextNode(nuevoTexto);
    elemento.replaceChild(nuevo,anterior);
}

/* Elimina el elemento que pasamos como parámetro */
function eliminaElemento(elemento){
    elemento.parentNode.removeChild(elemento);
}

/* Elimina el contenido elemento que pasamos como parámetro */
function eliminaContenido(elemento){
    while(elemento.firstChild!==null)
        elemento.removeChild(elemento.firstChild);
}




/*
 * Función esEntero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un número entero.
 */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))
        return false;
    else
        return true;
}




/* Obtiene el ID de un producto a partir de la cadena usada como identificador 
 * (de la forma PREFIJO-id)
 */
function idFromCadena(cadena){
    return cadena.split("-")[1];
    }