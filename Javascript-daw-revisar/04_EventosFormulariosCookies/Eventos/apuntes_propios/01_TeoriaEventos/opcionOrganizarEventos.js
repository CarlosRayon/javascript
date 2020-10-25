 /************ORGANIZACION DE LOS EVENTOS***********************
 
 -Crear una funcion que sera a la que llamares al principio del archivo JS o en el atributo onload que pondremos en el body del html
 -En esta funcion capturamos los objetos con los que vamos a añadir los objetos:
 Ejemplo de funcion para asociar eventos a los objetos del html:
 */

 inicializarEventos;//La llamamos al inicio para asociar a los elementos los evento
 function inicializarEventos()
 {
 //CAPTURAMOS LOS ELEMENTOS
 //
 //Captura de botones
 var boton1=document.getElementById("boton1");
 var boton2=document.getElementById("boton2");
 
 //Captura de input
 var inputNombre=document.getElementById("nombre");
 var inputApellido=document.getElementById("apellido");
 
 //AÑADIMOS LOS EVENTOS A LOS ELEMENTOS
 //Eventos para el boton1
 boton1.addEventListener("click",cambiarStringParrafo,false);
 boton1.addEventListener("click",ponerDato,false);
 boton1.addEventListener("click",ponerDato2,false);
 
 //Eventos para el boton2
 boton2.addEventListener("click",ponerDato,false);
 
 //Eventos para los inputs
 inputNombre.addEventListener("keyup",cambiarColor,false);
 inputApellido.addEventListener("mouseover",cambiarColor,false);
 };

