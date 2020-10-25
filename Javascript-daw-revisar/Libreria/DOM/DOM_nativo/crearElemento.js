
/* Crea y devuelve un elemento y lo inserta en el DOM.
 * Si alguno de los parámetros es null no se considera
 * Parámetros:
 *              elemento: Etiqueta del elemento HTML a crear
 *              padre: Padre del elemento
 *              id [opcional]: id del elemento o null
 *              clase [opcional]: Clase del elemento o null RECUERDA PEUDO PASAR MAS DE UNA CLASE
 *              contenido [opcional]: Contenido del elemento o null
 *      
 *  Devuelve:
 *      elemento que se ha creado.
 *      
 *      PARA PASAR EL PADRE DIRECTAMENTE:
 *          var original = document.getElementById("original");
 *          document.body
 *          document.getElementById("original")     directamente al parametro
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


/*Si quisiera añadir mas propiedades al elemento hariamos:
 *  -Creamos y guardamos en variable
 *  -Propiedades a la variable como hacemos normalmente
 */

var nodo=creaElemento("div",document.body,"id","clase","hola mundo");
nodo.style.color="red";

/*Si queremos dar eventos al elemento creado*/
nodo.addEventListener("click",loquesea);