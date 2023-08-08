
/* Función auxiliar para la creación de etiquetas usando las funciones de jQuery para el manejo del DOM.
 * Parámetros:
 * 	   nombreEtiqueta: Nombre (HTML) de la etiqueta que se va a crear.
 * 
 * 	   $padre: Contenedor de la etiqueta (opcional). Se usa la notación $variable para indicar que es 
 * 			   un objeto jQuery, no un objeto del DOM como los que hemos manejado en temas 
 * 				anteriores
 *   
 *     id: Identificador de la etiqueta (opcional).
 * 
 *     contenido: Contenido de la etiqueta (opcional). 
 * 
 * 	 Nótese como se implementa la sobrecarga (parámetros opcionales). Si queremos
 * 		pasar parámetros más a la derecha pero no los de la izquierda (por ejemplo contenido pero 
 * 		no $padre ni id) tendremos que rellenar con null. 
 */

function creaEtiqueta(nombreEtiqueta,$padre,id,contenido){
	$etiqueta=$("<"+nombreEtiqueta+"></"+nombreEtiqueta+">");
	if(typeof id !== "undefined")
		$etiqueta.attr("id",id);
			
	if(typeof contenido !== "undefined")
		$etiqueta.html(contenido);
		
	if(typeof padre !== "undefined")
		$etiqueta.attr("id",id);	
	
	$padre.append($etiqueta);
	
	return $etiqueta;
}