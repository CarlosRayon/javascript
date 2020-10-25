/* 
 Para borrar un elemento antes de volver a insertarle y que no se repita como un refresh
 */
function refresh(id)
{
  var elementoBorrar = document.getElementById(id);//Capturo el elemento que quiero borrar
elementoBorrar.parentNode.removeChild(elementoBorrar);  
}





