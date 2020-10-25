

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
    elemento.draggable=false; 
    padre.appendChild(nodo);
    if((id!==undefined)&&(id!==null))
        nodo.id=id;
   
     if((clase!==undefined)&&(clase!==null))
        nodo.className=clase;
 
      if((contenido!==undefined)&&(contenido!==null)){
          var texto=document.createTextNode(contenido);
          texto.draggable=false;
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


/* Obtiene el ID de un producto a partir de la cadena usada como identificador 
 * (de la forma PREFIJO-id)
 */
function idFromCadena(cadena){
    var trozos=cadena.split("-");    
    return trozos[1];
}

function sufijoFromCadena(cadena){
    var trozos=cadena.split("-");    
    return "-"+trozos[2];
}
   