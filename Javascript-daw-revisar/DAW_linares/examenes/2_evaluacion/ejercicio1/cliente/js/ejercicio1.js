

/* Manejadores de eventos y funciones de manejo del DOM */

window.addEventListener("load", cargarPagina);

function cargarPagina()
{
    var origen = document.getElementById("origen").addEventListener("click", listaAutobuse);
    var destino = document.getElementById("destino").addEventListener("click", listaAutobuse);
}

function capturarOrigen()
{
    var origen = document.getElementById("origen").options[document.getElementById("origen").selectedIndex].value;
//      console.log(origen);
    return origen;

}

function capturarDestino()
{
    var destino = document.getElementById("destino").options[document.getElementById("destino").selectedIndex].value;
//    console.log(destino);
    return destino;

}

function listaAutobuse()
{
    var origen = capturarOrigen();
    var destino = capturarDestino();

    if (origen === "none" || destino == "none")
    {
        vaciarInfoBuses();
        error("Algun campo sin escoger");
    } else if (origen == destino)
    {
        vaciarInfoBuses();
        error("Los dos campos son iguales");
    } else {
        vaciarInfoBuses();
        recibirDatos(origen, destino);
        console.log("Los dos son distintos");
    }

}


function recibirDatos(origen, destino)
{


    var miXHR = objetoXHR();//new XMLHttpRequest();
    miXHR.onreadystatechange = listaAutobus;//Cada vez que cambie el estado, hace esta funcion

    // miXHR.open("GET", "../servidor/lista_autobuses.php?origen=Santander&destino=Madrid");
    miXHR.open("GET", "../servidor/lista_autobuses.php?origen=" + origen + "&destino=" + destino + "");

    miXHR.send(null);//Al ser GET el parametro es null
}

function listaAutobus()
{
    /*Costantes que guardan los estados correctos del objeto y del servidor*/
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var datosRecogidos = this.responseXML.getElementsByTagName("autobus");
        vaciarInfoBuses();
        for (var i = 0; i < datosRecogidos.length; i++) {
            var infoBuses = document.getElementById("info-buses");
            var id = datosRecogidos[i].getElementsByTagName("id")[0].firstChild.nodeValue;
            var salida = datosRecogidos[i].getElementsByTagName("salida")[0].firstChild.nodeValue;
            var llegada = datosRecogidos[i].getElementsByTagName("llegada")[0].firstChild.nodeValue;
            var paradas = datosRecogidos[i].getElementsByTagName("paradas")[0].firstChild.nodeValue;
            var precio = datosRecogidos[i].getElementsByTagName("precio")[0].firstChild.nodeValue;

            var div = creaElemento("div", infoBuses, null, "info-bus", null);
            creaElemento("span", div, null, "salida", "Salida" + salida);
            creaElemento("span", div, null, "llegada", "llegada" + llegada);
            creaElemento("span", div, null, "paradas", "Paradas" + paradas);
            creaElemento("span", div, null, "precio", "Precio" + precio);
            var boton = creaElemento("button", div, id, "verplazas", "Ver Plazas");
            boton.addEventListener("click", verPlazas);
        }
    }
}

function verPlazas() {
    console.log(this.id);

    var miXHR = new XMLHttpRequest();

    miXHR.onreadystatechange = plazasAutobus;

    miXHR.open("POST", "../servidor/plazas_autobus.php");
    miXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    miXHR.send("id=" + this.id);//Con post los parametros aqui
}

function plazasAutobus()
{
    /*Costantes que guardan los estados correctos del objeto y del servidor*/
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        vaciarInfoBuses();
        var datosRecibidos = JSON.parse(this.responseText);// Convertimos el objeto JSON 
        console.log(datosRecibidos);

        var divAsiento = document.getElementById("asientos");
        divAsiento.style.display = "block";

//Usariamos un for para recorer y mostrar los asiento y con las contantes de varios.js un metodo que valide por los datos recogidos JSON si esta libre o no
//Luego eventos para todos los div asientos como en la practica del dibujo y etc

        var asientoAutobuses = document.getElementById("asientos-autobuse");
        var fila = document.createElement("div");
        fila.classList.add("asiento");

        var asiento = document.createElement("div");
        asiento.classList.add("asiento", "libre");
        fila.appendChild(asiento);
        divAsiento.appendChild(fila);



    }
}




function objetoXHR()
{
    if (window.XMLHttpRequest)
    {
        // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    } else if (window.ActiveXObject)
    {
        var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0',
                'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++)
        {
            try
            {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {
            }
        }
    }
}











