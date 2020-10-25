/* 
 Carlos Rayon Alvarez Tarea05 (INACABADO)
 ejercicio1.js: Contiene los manejadores de eventos y el código de acceso al DOM.
 */
/*Creo una instancia de la clase PalabraOculta
 */

var nuevaPalabra = new PalabraOculta();


var a=nuevaPalabra.escogerPalabra();
var b=nuevaPalabra.palabraParaDescifrar(a);

//EVENTOS
inicializarEventos();

function inicializarEventos()
{
    mostrarPalabra(b);//Para mostrar la palabra al inicio
    document.getElementsByClassName("linea_formulario error")[0].style.display="none";//De salida el div no se ve
    
    //Capturamos los objetos del html en variables*/
    var botonNuevaPalabra=document.getElementById("nueva");
    var botonVerSolucion=document.getElementById("solucion");
    var botonFinalizarJuego= document.getElementById("finalizar");
    
    
    //eventos para el boton Nueva
    botonNuevaPalabra.addEventListener("click", nuevaPalabra,false);
    
    //eventos para el boton solucion
    botonVerSolucion.addEventListener("click", function(){verSolucion(a);}, false);
    
    
    //eventos para el boton finalizar
   botonFinalizarJuego.addEventListener("click", finalizarJuego, false);
    
    //evento para el input palabra
    var inputPalabra=document.getElementById("palabra");
    inputPalabra.addEventListener("keyup", convertirMayusculas, false);
    inputPalabra.addEventListener("keyup", mostrarPalabra, false);

};

//Funcion para crear una nueva palabra
function nuevaPalabra()
{
    a=nuevaPalabra.escogerPalabra();
    b=nuevaPalabra.palabraParaDescifrar(a);
    document.getElementById("palabra").value="";
}


//Funcion para finalizar juego
function finalizarJuego()
{
    document.getElementById('letras').value = "";
    document.getElementById("palabra").value="";
    document.getElementById('palabra').disabled=true;
    document.getElementById('nueva').disabled=true;
    document.getElementById('solucion').disabled=true;
    document.getElementById('finalizar').disabled=true;
    document.getElementsByClassName("linea_formulario error")[0].style.display="block";
    document.getElementsByClassName("linea_formulario error")[0].innerHTML="Porcentaje"; 
}

//Funcion  para ver la solucion
function verSolucion(palabra)
{

    var div = document.getElementsByClassName("linea_formulario error");
    div[0].style.display="block";
    div[0].style.color = "blue";
    div[0].style.backgroundColor = "rgba(100,100,0,0.2)";
    div[0].style.borderColor = "blue";
    div[0].innerHTML =palabra;
    /*
     var x=document.getElementsByTagName("div");
     x[3].style.color="blue";
     */
}


/*Funcion que muestra la palabra para descubrir. Le paso la palabra original que cogi del array y me la pone 
 * encryptada en el input letras
 * @argument {String} palabra
 * @Hace uso del metodo palabraParaDescifrar
 */
function mostrarPalabra(palabra) {
//    document.getElementById('letras').value = nuevaPalabra.palabraParaDescifrar(palabra);
    document.getElementById('letras').value = palabra;
}


//funcion que convirte en mayusculas lo introduccido en el text
function convertirMayusculas()
{
    document.getElementById("palabra").value = document.getElementById("palabra").value.toUpperCase();
}














