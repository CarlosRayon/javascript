/*Ejemplo de peticion get sin parametros
    -Normalmente la usamos para obtener todos los datos del script php

 */
const ESTADO_FINALIZADO=4;
const CODIGO_EXITO=200;

window.addEventListener("load", cargaPagina);

function cargaPagina()
{
/*Peticion de tipo get al servidor*/

var miXHR= new XMLHttpRequest();//Creamos objeto 
miXHR.onreadystatechange=cambiaEstado;//Cuando la propiedad cambie efectue esta funcion

miXHR.open("GET","../servidor/get_sin_parametros.php");//hago la peticion
miXHR.send(null);//RECUERDA!!! Con peticiones get siempre enviamos null. Independientemente pasemos parametros o no


}

function cambiaEstado()
{
  
    //console.log(this.readyState);//Podemos ver como va cambiado el estado el objeto
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO) )
    {      
        console.log(this.responseText);//Muestro los datos obtenidos del script
       /*Puedo recoger los datos en una variable y jugar con ellos como desee. Los muestros los paso por parametros cambio el html con esto datos etc 
        var datoRecogido=this.responseText;       
        console.log(datoRecogido);
        */
    }else{
        
        alert("error " + this.statusText);
    }
    
}