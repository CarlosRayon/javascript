/* Funciones para el uso de cookies */

function setCookie(nombre, valor) {
    document.cookie = nombre + "=" + valor;
}
 
function setCookieCaducidad(name, value,caducidad) {
    var now= new Date();
    var then = new Date(now.getTime() + caducidad);
    document.cookie= name + "=" + value + "; expires=" + then.toGMTString() + "; path=/";
}
 
function getCookie(nombreCookie) {
    var partes;
    var nombre;
	var valor;
    var cookies=document.cookie.split(";");
    for(var i=0; i<cookies.length; i++){ 
        partes = cookies[i].split("="); 
        nombre=partes[0];
        valor =partes[1];
        if (nombre.trim() === nombreCookie.trim()) 
           return valor;
    }
    return null; // si no se encuentra se devuelve el valor nulo
}
 
function hayCookies(){
    setCookie("micookie","hay");
    return (getCookie("micookie") == "hay");
}