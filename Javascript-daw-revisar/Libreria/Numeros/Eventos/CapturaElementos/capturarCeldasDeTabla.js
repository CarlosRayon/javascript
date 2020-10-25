/*Si tenemos por ejemplo una tabla con id="datos" y queremos acceder a todas las celdas de esa tabla,
tendríamos que combinar getElementById con getElementsByTagName. Por ejemplo:*/

var miTabla= document.getElementById("datos");
var filas= miTabla.getElementsByTagName("td");