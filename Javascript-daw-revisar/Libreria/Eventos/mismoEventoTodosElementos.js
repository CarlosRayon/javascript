/* 
Si quiero dar el mismo evento a todos los elementos
 */

function mismoEventoTodos(name)
{
     //Eventos
    //Capturo todos los elementos de clase color
    var elements=document.getElementsByClassName(name);
    //A todos ellos les asocio el mismo evento
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", funcionAsociada);
    }
}

function funcionAsociada()
{
    console.log("elemento pulsado" + this.id);//Con this consigo los datos del elemento que ha provocado el evento
}