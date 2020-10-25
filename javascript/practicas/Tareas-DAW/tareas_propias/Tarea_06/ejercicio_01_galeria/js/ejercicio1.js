window.addEventListener("load", inicializador);
//Creo un objeto de tipo Galeria y le paso como parametros el numero de fotos que tenemos en la galeria
var galeria = new Galeria(7);

function inicializador()
{
    //Capturo los elementos del HTML que voy a usar para interactuar, en este caso son elementos de enlace
    var fotoPrimera = document.getElementById("primera");
    var fotoAnterior = document.getElementById("anterior");
    var fotoSiguiente = document.getElementById("siguiente");
    var fotoUltima = document.getElementById("ultima");

    //Eventos para la botones/enlaces
    fotoPrimera.addEventListener("click", mostrarFotoPrimera, false);
    fotoAnterior.addEventListener("click", mostrarFotoAnterior, false);
    fotoSiguiente.addEventListener("click", mostrarFotoPosterior, false);
    fotoUltima.addEventListener("click", mostrarFotoUltima, false);

    mostrarImagen(galeria.posicionAleatoria());
    logicaBotones(galeria.getIndice());
}
;

//Funcion para mostrar la foto primera
function mostrarFotoPrimera()
{
    mostrarImagen(galeria.posicionPrimera());
    logicaBotones(galeria.getIndice());
    console.log(galeria.getIndice());
}
;

//Funcion para mostrar la foto anterior
function mostrarFotoAnterior()
{
    mostrarImagen(galeria.posicionAnterior());
    logicaBotones(galeria.getIndice());
    console.log(galeria.getIndice());
}
;

//Funcion para mostrar la foto posterior
function mostrarFotoPosterior()
{

    mostrarImagen(galeria.posicionPosterior());
    logicaBotones(galeria.getIndice());

}
;

//Funcion para mostrar la foto ultima
function mostrarFotoUltima()
{

    mostrarImagen(galeria.posicionUltima());
    logicaBotones(galeria.getIndice());

}
;

/*
 * Funcion que controla toda la logica de los botones.
 * @param {Intenger} indice
 * 
 */
function logicaBotones(indice)//Le paso por parametro el indice que tiene el objeto galeria
{

    if (indice == 0)
    {
        //Agrego una clase u otra segun la logica del programa
        document.getElementById("primera").className = "deshabilitado";
        document.getElementById("anterior").className = "deshabilitado";
        document.getElementById("ultima").className = "habilitado";
        document.getElementById("siguiente").className = "habilitado";

        //Desahabilito habilito totalmente los enlaces
        document.getElementById("primera").style.pointerEvents = 'none'; //desabilita totalmente el elemento
        document.getElementById("anterior").style.pointerEvents = 'none';
        document.getElementById("ultima").style.pointerEvents = 'auto';
        document.getElementById("siguiente").style.pointerEvents = 'auto';

    } else if (indice == galeria.getImagen().length - 1)
    {
        //Agrego una clase u otra segun la logica del programa
        document.getElementById("ultima").className = "deshabilitado";
        document.getElementById("siguiente").className = "deshabilitado";
        document.getElementById("primera").className = "habilitado";
        document.getElementById("anterior").className = "habilitado";

        //Desahabilito habilito totalmente los enlaces
        document.getElementById("primera").style.pointerEvents = 'auto';
        document.getElementById("anterior").style.pointerEvents = 'auto';
        document.getElementById("ultima").style.pointerEvents = 'none';
        document.getElementById("siguiente").style.pointerEvents = 'none';

    } else
    {
        //Si no se cumple ninguna condicion anterior, habilito todos los enlaces
        document.getElementById("primera").className = "habilitado";
        document.getElementById("anterior").className = "habilitado";
        document.getElementById("ultima").className = "habilitado";
        document.getElementById("siguiente").className = "habilitado";

        document.getElementById("primera").style.pointerEvents = 'auto';
        document.getElementById("anterior").style.pointerEvents = 'auto';
        document.getElementById("ultima").style.pointerEvents = 'auto';
        document.getElementById("siguiente").style.pointerEvents = 'auto';

    }

}


/*Funcion  que muestra una foto en el background del div imagen:
 * @argument {String} foto Nombre de la foto que obtenemos del array del objeto Galeria
 */
function mostrarImagen(foto) {

    var ruta = "images/" + foto + ".jpg";//Ruta donde se guardan las imagenes
    //Paso la ruta de la imagen al fondo del div imagen
    var divImagen = document.getElementById("imagen");
    divImagen.style.background = "url(" + ruta + ") top center";
    divImagen.style.backgroundSize = " 100% 100%";

}
;
