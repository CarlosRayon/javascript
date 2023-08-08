
/* Manejadores de evento y funciones de manejo del DOM 
 En el script se definen una única variable global de tipo ListadoParkings */

window.addEventListener("load", iniciar);
var listado = new ListadoParking();

function iniciar()
{

//Capturo botones que haran la logica del programa
    var actualizar = document.getElementById("actualizar");
    actualizar.addEventListener("click", eventActualizar);
    var guardar = document.getElementById("guardar");
    guardar.addEventListener("click", eventGuardarlocal);
    var actualizarLocal = document.getElementById("actualizar-local");
    actualizarLocal.addEventListener("click", eventActualizarLocal);

}


//Funcion que lanza el evento click de actualizar
function eventActualizar()
{
    obtenerDatosParkings();
    //Activo boton guardar
    document.getElementById("guardar").disabled = false;
}


//Funcion que lanza el evento click de guardar
function eventGuardarlocal()
{
    //Guardo los datos del listado en una variable
    var datosParkings = listado.getListadoParking();
    //Guardo los datos en localstorage previa conversion JSON (para que lo convierta a un string)
    localStorage.setItem("datosLocalStorage", JSON.stringify(datosParkings));

    //Activo boton actualizar en local
    document.getElementById("actualizar-local").disabled = false;
}

//Funcion que lanza el evento click de actualizar local
function eventActualizarLocal()
{
    //Recogemos los datos de lal localStorage previa reconversion a un objeto JSON
    var datosRecogidos = JSON.parse(localStorage.getItem("datosLocalStorage"));

    //Los pasamos al listado para que tenga lo datos guardados
    listado.setListadoParking(datosRecogidos);

    resetIconos();//Borro los iconos
    dibujarIconos();//Los vuelvo a dibujar ya con los valores de porcentaje nuevo
    eventosIconos();//Vuelta a darle eventos
}
