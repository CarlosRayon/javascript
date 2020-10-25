
function peticionPOST()//poner parametros si queremos para pasar a la peticion
{
    var miXHR = new XMLHttpRequest();

    miXHR.onreadystatechange = cambiaEstado;

    miXHR.open("POST", "../servidor/post.php");
    miXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//RECUERDA!!! Añadir esta intruccion para indicar que los dato iran en el send
    miXHR.send("nombre=Carlos Rayon&telefono=663318944&ciudad=Mexico&anio=1982");//Con post los parametros aqui

}

function cambiaEstado()
{/* 
 Ejemplo peticion POST al servidor
 */
    const ESTADO_FINALIZADO = 4;
    const CODIGO_EXITO = 200;

    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var respuesta = this.responseText; //RECUERDA SI ES XML USAMOS XML
        console.log(respuesta);
    }


}