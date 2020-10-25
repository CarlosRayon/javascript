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

