/* 
Eventos de raton:
onmouseover/onmouseout - When the mouse passes over an element
onmousedown/onmouseup - When pressing/releasing a mouse button
onmousedown - When mouse is clicked: Alert which element
onmousedown - When mouse is clicked: Alert which button
onmousemove/onmouseout - When moving the mouse pointer over/out of an image
onmouseover/onmouseout - When moving the mouse over/out of an image
onmouseover an image map
 */

/*Eventos de raton mas usados:
 * onClick            cuando hacemos click   Solo boton principal
 * onDblClick      cuando hacemos doble click   Solo boton principal
 * 
 * onMouseOver       cuando entramos en un elemento
 * onMouseOut        cuando salimos de un elemento
 *  del raton
 * onMouseUp         cuando levantamos el boton
 * onMouseDown       cuando pulsamos el boton   Cualquier boton del raton
 * onMouseUp         cuando levantamos el boton   Cualquier boton del raton
 */
window.addEventListener("load", inicializador);

function inicializador()
{
    var caja1=document.getElementById("caja1");
    
    caja1.addEventListener("click",clickCaja1); //Notacion propuesta nombreevento-Objetosobreactua
    caja1.addEventListener("dblclick",dblclickCaja1); //Notacion propuesta nombreevento-Objetosobreactua
    
    caja1.addEventListener("mouseover",mouseOverCaja1);
    caja1.addEventListener("mouseout",mouseOutCaja1);
    
    caja1.addEventListener("mousedown", mouseDownCaja1);
    caja1.addEventListener("mouseup", mouseUpCaja1);
    
    
}

/*PARA CLICK DBLCLICK*/
function clickCaja1(evento)//RECUERDA!!!Parametro recibido de manera implicita todos los manejadores de evento //RECUERDA!!! El evento no es lo mismo que this
{
    var e=evento || window.event;//Por si tenemos una version vieja del Explore
    
    console.log("He pulsado sobre " + this.id);//RECUERDA!!! el evento esta asociado con el objeto por eso con this podemos acceder a objeto que desencadena el evento
      
   
}

function dblclickCaja1()
{
    console.log("Doble click sobre " + this.id);
}

/*PARA OUT OVER MOUSE*/
function mouseOverCaja1()
{
    console.log("He entrado en  " + this.id);
    document.body.style.cursor = "pointer";//Para cambiar el puntero del raton 
}

function mouseOutCaja1()
{
      console.log("He salido en  " + this.id);
      document.body.style.cursor = "auto";//Volver a dejar el puntero como estaba
}

/*PARA UP DOWM*/

function mouseDownCaja1()
{
    console.log("He pulsado sobre " + this.id + " MOUSEDOWN")
}

function mouseUpCaja1()
{
     console.log("He pulsado y levantodo el boton sobre " +  this.id + " MOUSEUP");
}