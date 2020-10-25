/* 
Function para hacer una peticion GET
 */

function peticionGET() //poner parametros si queremos para pasar a la peticion
{
     
        var miXHR = new XMLHttpRequest();
        miXHR.onreadystatechange = cambiaEstado;//Cada vez que cambie el estado, hace esta funcion

        var uri="../servidor/lista_autobuses.php?origen=parametro&destino=parametro"; //MODIFICAR CON LA URI CORRESPONDIENTE
        miXHR.open("GET", uri);
        miXHR.send(null);//Al ser GET el parametro es null
}

/*RECUERDA ESTA FUNCION INCLUIR DIRECTAMENTE EN EL JAVASCRIPT PARA UNA VEZ HECHA LA PETICION HACER ALGO*/
function cambiaEstado()
{
    /*Costantes que guardan los estados correctos del objeto y del servidor*/
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;
    
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var datosRecogidos = this.responseXML;//RECUERDA!!!   Si es JSON Text
        console.log(datosRecogidos);
    }
}