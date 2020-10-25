/*Podria definir constantes con los valores de los estado correctos*/
const ESTADO_FINALIZADO = 4;
const CODIGO_EXITO = 200;

window.addEventListener("load", cargaPagina);

function cargaPagina()
{
    /*Instanciamos un objeto de tipo XMLHttpRequest que es el que controla las peticiones al servidor*/
    var miXHR = new XMLHttpRequest(); //RECUERDA!!! Para asegurar funcionamiento culaquier navegador pasarle la funcion cross-browser
//    var miXHR = new objetoXHR();  Esto es mas fino y pulido ****

    /*Asociamos el nombre de una funcion a la propiedad onreadystatechange para que
     Cada vez que cambie el valor de readystate ejecuta la funcion
     * RECUERDA!!! Definir la funcion de callback antes de ejecutar la peticion (damos tiempo que se carge en memoria)*/
    miXHR.onreadystatechange = cambiaEstado;


    //Mandamos la peticion al servidor
    //miXHR.open(tipo,recurso,<sincrona, asincrona>);
    /* .open: especifica la solicitud
     - GET/POST.
     - Archivo: txt, php, xml, json, etc.
     - true/false: método de envío true es metodo asincrono. false sincrono.
     
     */
    miXHR.open("GET", "../servidor/hola_mundo.php");//Realizamos la peticion (de forma asincrona)

    /* .send: envía la solicitud al servidor.
     Si utilizamos POST debemos pasar los datos por parámetro */
    miXHR.send(null);//Enviamos parametros (en este caso ningun parametro)


    /*Cada vez que cambie el valor de readystate ejecuta la funcion*/
    function cambiaEstado()
    {

        /*Me interesa que lo de dentro de la funcion se cumpla cuando el estado de la peticion
         y el estado del servidor sean correctos 
         RECUERDA!!!this hace referencia al objeto miXHR por lo que si queremos ver alguna sintasis
         miXHR. el IDE nos la dara
         */
        /*  Con esta pequeña intruccion podemos ir viendo los cambios que se producen en el estado del objeto XMLHttpRequest
        switch (this.readyState)
        {
            case 1:
                console.log("el estado es " + this.readyState + " conexión del servidor establecida");
                break;
            case 2:
                console.log("el estado es " + this.readyState + " solicitud recibida");
                break;
            case 3:
                console.log("el estado es " + this.readyState + " solicitud de procesamiento");
                break;
            case 4:
                console.log("el estado es " + this.readyState + " solicitud finalizada y la respuesta está lista");
                break;
        }
        */
        if ((this.readyState === 4) && (this.status === 200))//Si todo esta bien ejecutamos lo que queramos RECUERDA!!! Puedo pasar la constantes  if ((this.readyState === ESTADO_FINALIZADO) && (this.status === CODIGO_ESTADO))
        {
            console.log("Respuesta recibidaddd");
            /*Podemos mostrar los datos devueltos por el script con la propiedad responseText*/

            console.log(this.responseText);

            /*Nos dice el estado del objeto XMLHttpRequest. Este estado puede ser:
             0: solicitud no inicializada
             1: conexión del servidor establecida
             2: solicitud recibida
             3: solicitud de procesamiento
             4: solicitud finalizada y la respuesta está lista --RECUERDA!!! Este valor nos interesa para saber que todo esta bien
             */
            console.log(this.readyState);

            /*No dice el estado que tiene el servidor:  
             200: "OK" ---Este nos interesa ya que nos dice que esta ok el servidor
             403: "Prohibido"
             404 No encontrado"   
             */
            console.log(this.status);

            /*Devuelve el estado del texto (por ejemplo, "No encontrado" o "Aceptar")*/
            console.log(this.statusText);

        }
    }



}
