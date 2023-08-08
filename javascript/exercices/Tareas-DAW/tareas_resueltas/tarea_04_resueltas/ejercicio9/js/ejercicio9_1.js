
/* DDWEC04 - Solución Tarea. Ejercicio 9 - Javier González Pisano */


/*****************   CUERPO DEL SCRIPT ******************************/


window.addEventListener("load",cargaPagina);

function cargaPagina(){

	 array=new ArrayUsuarios();

	array.insertaUsuario("David","Pérez Gómez","33333333E",1970,"Asturias");
	array.insertaUsuario(new Usuario("Federico","Pérez Gómez","1111111K",1950,"Asturias"));
	array.insertaUsuario(new Usuario("Luis","Gómez Pérez","4444444J",1980,"Cantabria"));
	array.insertaUsuario("Marcos","García Santos","2222222H",1960,"Cantabria");


	/* Mostramos las propiedades de los usuarios en la página HTML */
	for(var i = 0; i < array.getLongitud(); i++) {
		   document.getElementById("usuarios").innerHTML+=array.getUsuarioAt(i).toHTML(); 
		}

	console.warn("Usuarios de Asturias en orden ascendente: ");
	for(var i = 0; i < array.getLongitud(); i++) {
		   if(array.getUsuarioAt(i).getProvincia()==="Asturias")
			   console.log(array.getUsuarioAt(i).toString());
		}

		array.invierte();
		
	console.warn("Usuarios de Cantabria en orden descendente: ");
	for(var i = 0; i < array.getLongitud(); i++) {
		   if(array.getUsuarioAt(i).getProvincia()==="Cantabria")
			   console.log(array.getUsuarioAt(i).toString());
		}
}	