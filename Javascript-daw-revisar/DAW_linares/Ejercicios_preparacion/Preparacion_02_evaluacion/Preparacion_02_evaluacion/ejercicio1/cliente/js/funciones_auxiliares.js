

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

function eliminaContenido(elemento){
    while(elemento.firstChild!==null)
        elemento.removeChild(elemento.firstChild);
}