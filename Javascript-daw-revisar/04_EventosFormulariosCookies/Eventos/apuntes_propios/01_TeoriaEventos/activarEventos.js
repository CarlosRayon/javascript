
/*******************FORMAS DE PONER EN FUNCIONAMIENTO LOS EVENTOS*********
 
 +++++++++Forma 1: (Junto con la 2 La mejor que me funciona y que con mas navegadores funciona)+++++
 Funciona:(Chrome,Internet Explore,Opera, Edge)
 Da errores:(Firefox Quantum)--Da error. Dos eventListener para un mismo boton. Al llamarle un vez funciona pero al recargar solo borrara la accion del primer evento--
 No funciona:
 
 Poner el script al final del body para que cargue todo al acabar de cargar la pagina y el archivo de JS:
 inicializarEventos();  || funcion inicializadora (no hace falta poner document.onload)

+++++++++Forma 2 (La mejor forma y mas clara)+++++++++++
 Funciona:(Chrome,Internet Explore,Opera, Edge)
 Da errores:(Firefox Quantum)--Da error. Dos eventListener para un mismo boton. Al llamarle un vez funciona pero al recargar solo borrara la accion del primer evento--
 No funciona:
 
-Poner script en cabezera
-window.onlad=inicializarEventos; //Sin paréntesis porque sino lo ejecuta nada mas ver este dato y nosostros queremos que lo haga al final de leer la pagina
-window.addEventListener("load",inicializarEventos) (OPCION QUIZAS MAS VALIDA)

 
 ++++++++Forma 3 ++++++++++
 Funciona:(Chrome,Internet Explore,Opera, Edge)
 Da errores:(Firefox Quantum)--Da error. Dos dos eventListener para un mismo boton. Al llamarle un vez funciona pero al recargar solo borrara la accion del primer evento--
 No funciona:
 
 -Poner onload directamente en el body
 -onload="inicializarEventos()" 
 -El <script> puede ir en la cabezera o antes fin body
 
 ++++++Forma 4 ++++++++
 Funciona:(Chrome,Edge,Opera)
 Da errores:(Firefox Quantum)--Da error. Dos dos eventListener para un mismo boton. Al llamarle un vez funciona pero al recargar solo borrara la accion del primer evento--
 No funcion:(Internet Explore)
 
 Poner el script en la cabezera del html con el atributo defer  o  async  <script  defer src="pru.js" ></script>
 En el archivo js poner la funcion inicializadora inicializarEventos();  || funcion inicializadora(donde guardo la captura de elementos) 
 (no hace falta el window.onload)
 */




