/* 
Con esta funcion consigo borrar todos los hijos que pueda tener un nodo(por id)
 */
function removeAllChilds(a)
 {
 var a=document.getElementById(a);
 while(a.hasChildNodes())
	a.removeChild(a.firstChild);	
 }
