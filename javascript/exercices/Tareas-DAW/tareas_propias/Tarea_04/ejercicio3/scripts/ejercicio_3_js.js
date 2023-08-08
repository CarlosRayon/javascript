/* 
Carlos Rayon Alvarez UD 4 Ejercicio 1
//SIN ACABAR... UN FOLLON CON EL INTERVAL BUENO TENGO
 */

//Variables
var fechaUsuario=pedirFecha();
var añoUsuario, mesUsuario, diaUsuario;

diaUsuario=parseInt(fechaUsuario.substring(0,2));
mesUsuario=parseInt(fechaUsuario.substring(3,5));
añoUsuario=parseInt(fechaUsuario.substring(6,10));

var fechaCumpleaños= new Date(añoUsuario,mesUsuario-1,diaUsuario);
var fechaActual= new Date();

/*aqui me he liado con la posible solucion*/
var meseRestantes=fechaActual.getMonth()-fechaCumpleaños.getMonth();
var diasRestantes=fechaActual.getDate()-fechaCumpleaños.getDate();
var horasRestantes=fechaActual.getHours()-fechaCumpleaños.getHours();
var minutosRestantes=fechaActual.getMinutes()-fechaCumpleaños.getMinutes();
var segundosRestantes=fechaActual.getSeconds()-fechaCumpleaños.getSeconds();

//Funciones
//Pido las fecha
function pedirFecha()
{
    var fechaUsuario=prompt("Introducir fecha con formato dd/mm/yyyy (entre 1900 y 2099");
    var patron=new RegExp("(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9][0-9]");
    while(fechaUsuario.search(patron)!=0)
    {
    var fechaUsuario=prompt("Vuelva a introducir fecha con formato dd-yyyy");
    
    }
return fechaUsuario;
}


//Pruebas
/*Me lio con esto?¿¿?*/
function segundoR(){
 segundosRestantes=fechaActual.getSeconds()-fechaCumpleaños.getSeconds(); 
   console.log(segundosRestantes);
 
}
setInterval(segundoR,1000);