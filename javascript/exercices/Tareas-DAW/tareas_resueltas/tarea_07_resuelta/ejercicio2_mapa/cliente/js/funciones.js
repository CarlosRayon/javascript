
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


/* Método Cross-Browser para la creación de un objeto XMLHttpRequest */

function objetoXHR()
{
	if (window.XMLHttpRequest)
	{
		// El navegador implementa la interfaz XHR de forma nativa
		return new XMLHttpRequest();
	} 
	else if (window.ActiveXObject)
	{
		var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0',
		'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP'); 
		 
		for (var i = 0; i < versionesIE.length; i++) 
		{ 
			try  
			{ 
				return new ActiveXObject(versionesIE[i]); 
			}  
			catch (errorControlado) {}
		} 
	} 
}
