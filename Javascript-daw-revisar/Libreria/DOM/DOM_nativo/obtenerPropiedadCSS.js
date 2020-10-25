/* Devuelve la propiedad CSS (procesada) del elemento  */
function getCSS(elemento, propiedad) {
    estilo = window.getComputedStyle(elemento);
    return estilo.getPropertyValue(propiedad);
}

/*Ejemplo uso
 * Creo un elemento y le añado al body
 * Con la funcion obtengo sus propiedades css RECUERDA!!!Como parametro el nombre de la propiedada escrito en CSS normal
*/
var nuevo = creaElemento("div", document.body, "nuevo", "nuevaclase", "Hola Mundo");
            nuevo.style.backgroundColor="rgb(0, 0, 255)";
            nuevo.style.border="2px solid";     
            
            console.log(getCSS(nuevo,"background-color"));//Devuelve codigo rgb rgb(0, 0, 255)
            console.log(getCSS(nuevo,"border"));//Devuelve 1.99653px solid rgb(0, 0, 0)
