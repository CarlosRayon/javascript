/* 
 Ejemplo de peticion get con parametros
 */
/*Costantes que guardan los estados correctos del objeto y del servidor*/
const ESTADO_FINALIZADO = 4;
const CODIGO_EXITO = 200;

window.addEventListener("load", cargaPagina);

function cargaPagina() {

    var miXHR = new XMLHttpRequest();
    miXHR.onreadystatechange = cambiaEstado;//Cada vez que cambie el estado, hace esta funcion

    /*FORMA 1 DE MANDAR LA PETICION GET CON PARAMETROS*/

    /*Peticion al script. Al ser get los parametros se los mandamos en la cabezera http
     -Al final ponemos ? y parametros que queremos pasar
     - Si es numero dato=valor
     - Si es string  dato=valor
     */

    //miXHR.open("GET","../servidor/get_con_parametros.php?id=2&nombre='carlos'");
    //miXHR.send(null);//Al ser GET el parametro es null


    /*FORMA 2 DE MANDAR LA PETICION CON PARAMETROS*/
    
    /*RECUERDA!!!
     -Para pasar parametros es buena practica usar encodeURI o encodeURIComponent
     para formatear los parametros por si tenemos caracteres raros
     */
    var uri = encodeURI("../servidor/get_con_parametros.php?id=2&nombre=rayón");
    //var uri=encodeURIComponent("../servidor/get_con_parametros.php?id=2&nombre='carlos'"); Este formatea mas signos raros
    miXHR.open("GET", uri);
    miXHR.send(null);//Al ser GET el parametro es null
    //console.log(uri);Aunque veamos simbolos raros al script php le llegan convertidos ya
}


function cambiaEstado()
{
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        var datosRecogidos = this.responseText;
        console.log(datosRecogidos);
    }


}