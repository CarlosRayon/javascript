/* 
 Ejemplo para capturar un XML
 */

const ESTADO_FINALIZADO = 4;
const CODIGO_EXITO = 200;

window.addEventListener("load", cargaPagina);

function cargaPagina()
{

    var miXHR = new XMLHttpRequest();

    miXHR.onreadystatechange = cambioEstado;
    miXHR.open("GET", "../servidor/get_con_parametros_xml.php?id=1");
    miXHR.send(null);


}


function cambioEstado()
{
    if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_EXITO))
    {
        console.log(this.responseXML);//Por consola nos motrara #document que si pinchamos en el no da el XML

        /*Para acceder a los datos del xml lo hacemos con metodos del DOM
         -Ser suele usar getElementByTagName() asi capturamos la etiqueta
         * tenemos que tener en cuenta como es el xml en este caso
         <persona>
         <nombre>Carlos</nombre>
         <telefono>63678365</telefono>
         <ciudad>Mexico</ciudad>
         <anio>1992</anio>
         </persona>
         */

        //PASO 1 COGEMOS TODOS LOS ELEMENTOS
        var persona = this.responseXML.getElementsByTagName("persona")[0];//Gogemos la etiqueta que queramos en nuestro caso solo hay una persona
//        console.log(persona); //Podemos ver que hemos cogido la etiqueta persona con todo su contenido igual que con DOM

        // PASO 2 ACEDEMOS A ELEMENTO QUE QUERAMOS
        var nombre = persona.getElementsByTagName("nombre")[0];//Hacedemos a la etiqueta nomobre
        //
        //PASO 3 OBTENEMOS EL VALOR DE ESE ELEMENTO
        var valorNombre = nombre.firstChild.nodeValue;//Hacedemos al valor de la etiqueta osea al valor de su primer nodo hijo

        console.log(valorNombre);

        /*SI TENEMOS MAS DE UNA ETIQUETA PODEMOS RECORRER  EN UN ARRAY
         for (var i = 0; i < autobus.length; i++) {
            var salida = autobus[i].getElementsByTagName("salida")[0].firstChild.nodeValue;
            var llegada = autobus[i].getElementsByTagName("llegada")[0].firstChild.nodeValue;
            var paradas = autobus[i].getElementsByTagName("paradas")[0].firstChild.nodeValue;
            var precio = autobus[i].getElementsByTagName("precio")[0].firstChild.nodeValue;
         }
         */


        //Todo esto lo podemos hacer en un paso     
        // var valorCiudad=persona.getElementsByTagName("ciudad")[0].firstChild.nodeValue;
        var valorCiudad = this.responseXML.getElementsByTagName("persona")[0].getElementsByTagName("ciudad")[0].firstChild.nodeValue;

        console.log(valorCiudad);


        /*RECUERDA!!! En una estructura sencilla como esta podemos acceder directamente a la etiqueta y a su valor*/
        var valorAnio = this.responseXML.getElementsByTagName("anio")[0].firstChild.nodeValue;

        console.log(valorAnio);

        /*RECUERDA!!! Para comprobra posibles errores al obtener los datos podemos usar un try cath*/
        try {
            var valorAnio = this.responseXML.getElementsByTagName("anio")[0].firstChild.nodeValue;

            console.log(valorAnio);
        } catch (e) {
            console.log("Error al tener los datos");//var valor anio=""; Otra opcion poner el valor como vacion

        }



    }



}
