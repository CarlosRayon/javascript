/* 
 Eventos con drag and drop
 Pasos (obligatoris)
 1º Para que un elemento sea drap and drop debemos ponerle con atributo draggable=true;
 -Las imagenes implicitamente ya lo son, pero se recomienda ponerselo
 
 2º Definimos los eventos dragstart y dragend sobre el elemento
 
 3º Definimos eventos sobre el destino
 
 OPCIONALES
 -preventDefault() en funcion dragover para que al soltar el elemento en el destino se ejecute la funcion drop
 
 dragstart
 
 dataTransafer  -- Para pasar informacion
 dataTransfer.setData("tipoDato","valor"); e.dataTransfer.setData("text/html",this.id);RECUERDA!!! solo texto
 
 dragEnd
 -e.stopPropagation() evita las acciones implitas del elemento en html (Si es un enlace evita que se ejecute el enlace por ejemplo)
 
 
 */


window.addEventListener("load", cargarPagina);

function cargarPagina()
{
//    1º
    var tiburon = document.getElementById("tiburon");//Capturamos elemento
    tiburon.draggable = true;//le hacemos draggable
    //
//    2º
    tiburon.addEventListener("dragstart", dragStartTiburon);//Comienza cuando inicio el arrastre
    tiburon.addEventListener("dragend", dragEndTiburon);//Finalizo cuando acaba el arrastre

//    3º
    var destino = document.getElementById("destino");//Capturo el elemento de destino

    destino.addEventListener("dragover", dragOverDestino);//Ejecuta cuando entro elemento destino
    destino.addEventListener("drop", dropDestino);//Ejecuta cuando finaliza la operacion


}

function dragStartTiburon(evento)
{
    var e = evento || window.event;
    console.log("dragStart Sobre Tiburon");
    console.log("Se esta arrastrando el " + this.id);
    /*Damos valor en el dragstart para poder recupetar en el drop*/
    e.dataTransfer.setData("text/html", this.id);

}

function dragEndTiburon(evento)
{
    var e = evento || window.event;
    console.log("dragEnd Sobre Tiburon");
    console.log("Finalizo de arrastrar " + this.id);
    e.stopPropagation();
    /*e.stopPropagation() en cambio detiene la propagación de un evento, 
     con el objetivo de q no se realice otra ejecución u otro listener lo escuche
     a través del DOM.. esto se conoce como bubbling
     */
}

function dragOverDestino(evento)
{
    var e = evento || window.event;
    console.log("dragOver sobre el destino");
    console.log("Estoy sobre el elemento de destino con el " + this.id);

    e.preventDefault();
    /*
     e.PreventDefault() se utiliza para detener una acción por omisión,
     utilizada comunmente sobre etiquetas (a) o botones input:submit ..
     */
}

function dropDestino(evento)
{
    var e = evento || window.event;

    /*recuperamos el valor del dragstart aqui*/
    //console.log(e.dataTransfer.getData("text/html"));//RECUERDA!!! Esto NO es un elemento, es una cadena

    var id = e.dataTransfer.getData("text/html");
    console.log("drop sobre el destino");
    console.log("He soltado el  " + id + " sobre el div de destino");

}