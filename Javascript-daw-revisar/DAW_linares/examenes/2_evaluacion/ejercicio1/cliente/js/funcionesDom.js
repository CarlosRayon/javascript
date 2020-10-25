
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

function vaciarInfoBuses()
{
       var a=document.getElementById("info-buses");
                        while(a.hasChildNodes())
                        a.removeChild(a.firstChild);

}


function error(mensaje)
{
    var contenedor = document.getElementById("info-buses");
    creaElemento("span", contenedor, "error", null, mensaje);
}

function eliminarError()
{
    var error = document.getElementById("error");
    error.parentNode.removeChild(error);
}