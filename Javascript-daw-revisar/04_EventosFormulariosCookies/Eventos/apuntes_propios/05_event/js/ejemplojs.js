
/*
 Eventos:
    -Implicitamente al añadir eventos se pàsa por parametro un evento
    -Este evento podemos capturalo y nos ofrece informacion util como coordenadas tipo boton pulsado etc
     RECUERDA!!! Mira archivo de ada 05_eventosinformacion para ver  mas informacion
     RECUERDA!!! preventEvento y stopPropagacion (mirar drag and drop eventos)
 */

/*RECUERDA!!! Para comparar eventos o botones mejor definir constantes y comparar con estas constantes(?)*/
const BOTONES_RATON={
    IZQUIERDO:0,
    CENTRAL:1,
    DERECHO:2
};

window.addEventListener("load", inicializador);

function inicializador()
{
    var caja1 = document.getElementById("caja1");

    caja1.addEventListener("click", clickCaja1); //Notacion propuesta nombreevento-ObjetoAobreActua
 
    caja1.addEventListener("mousedown", mouseDownCaja1);
}


function clickCaja1(evento)//RECUERDA!!!Parametro recibido de manera implicita todos los manejadores de evento //RECUERDA!!! El evento no es lo mismo que this
{
    var e = evento || window.event;//Por si tenemos una version vieja del Explore

    console.log("He pulsado sobre " + this.id);//RECUERDA!!! el evento esta asociado con el objeto por eso con this podemos acceder a objeto que desencadena el evento

    /*Cordenadas respecto a esquina superior izquierda de la pantalla*/
    console.log(" coordenadas (PANTALLA) " + e.screenX + " " + e.screenY);

    /*Cordenadas respecto a esquina supeioro izquierda del navegador*/
    console.log(" coordenadas (NAVEGADOR) " + e.clientX + " " + e.clientY);

    /*Cordenadas respecto a esquina superior izquierda de la pagina*/
    console.log(" coordenadas (PAGINA) " + e.pageX + " " + e.pageY);//Al hacer scroll en la pagina estar coordenadas cambian

    /*Tipo de boton pulsado*/
    console.log("boton pulsado " + e.button);
    
    //Con targer cogemos el elemento y podemos ver la propiedad que tiene en este caso su id
    console.log("Id cogido mediante target " + e.target.id);

}


function mouseDownCaja1(evento)
{
    var e = evento || window.event;//Por si tenemos una version vieja del Explore
    
    console.log("He pulsado sobre " + this.id + " con el boton " + e.button);

    (e.button === BOTONES_RATON.IZQUIERDO) ? console.log("he pulsado boton izquierdo") : console.log("he pulsado boton derecho");

  
   
}