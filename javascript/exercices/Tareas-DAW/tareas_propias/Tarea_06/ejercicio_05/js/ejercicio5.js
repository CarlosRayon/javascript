
window.addEventListener("load", inicializarEventos);
var grafica = new Grafica();
var metodos = new Metodos();

function inicializarEventos()
{
    /*Capturo e inicializo los botones*/
    var botonAñadir = document.getElementById("nuevo-dato");
    var botonBorrar = document.getElementById("quita-dato");
    var botonActualizar = document.getElementById("actualiza-grafica");

    botonAñadir.addEventListener("click", añadirDatoGrafica);
    botonBorrar.addEventListener("click", borrarDatoGrafica);
    botonActualizar.addEventListener("click", actualizarGrafica);
}
;

/*Funcion que añade un objeto a la grafica*/
function añadirDatoGrafica()
{
    /*Capturamos los valores*/
    var inputEtiqueta = document.getElementById("etiqueta").value;
    var inputValor = document.getElementById("valor").value;

    /*Compramos que sean correctos los datos introducidos
     * -Que los campos no esten vacios
     * -etiqueta: No este vacia y admite solo string, no admite solo valores numeros
     * -valor:No este vacia y solo valores numericos,  ninguna letra
     */
    if (inputEtiqueta.trim() === "")//etiqueta totalmente vacia...
    {
        metodos.capaGraficaOriginal();
        metodos.mostrarMensaje("El campo etiqueta esta vacio.", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    } else if (!metodos.cadenaCorrecta(inputEtiqueta))//dato etiqueta incorrecto..
    {
        metodos.capaGraficaOriginal();
        metodos.mostrarMensaje("Etiqueta NO valida. NO admite solo numeros", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    } else if (inputValor.trim() === "")//valor totalmente vacio
    {
        metodos.capaGraficaOriginal();
        metodos.mostrarMensaje("El campo valor esta vacio", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    } else if (!metodos.esEntero(inputValor))//dato valor no valido..
    {
        metodos.capaGraficaOriginal();
        metodos.mostrarMensaje("Valor NO valido. SOLO admite numeros enteros", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    } else//Todos los campos son correctos...
    {
        //Compruebo que no tengamos un objeto con la misma etiqueta ya incluido en la lista
        if (grafica.buscarDato(inputEtiqueta))//Si ya existe indico que existe y vuelvo a pedir datos
        {
            metodos.capaGraficaOriginal();
            metodos.mostrarMensaje("Ya existe un objeto con etiqueta " + inputEtiqueta + ". Actualice el dato etiqueta", "errores");
            setTimeout(metodos.capaMensajeOriginal, 2000);

        } else//Que no existe...
        {
            var dato = new Dato(inputEtiqueta, inputValor);//..Creo objeto con los datos...
            grafica.añadirDato(dato);//...Le añado a la lista datos de la grafica...
            metodos.vaciarInput();//...y vacio los campos para poder introducir nuevos objetos
            metodos.capaGraficaOriginal();
            metodos.mostrarMensaje("Dato creado y añadido a la lista con exito.", "informacion");//Mustro mensaje confirmacion
            setTimeout(metodos.capaMensajeOriginal, 2000);
        }
    }
}
;

/*Funcion que borrar un objeto de la grafica
 -Solo borrara cuando tengamos datos en el input etiqueta y el input valor este vacio
 */
function borrarDatoGrafica()
{
    //Capturo los input
    var inputEtiqueta = document.getElementById("etiqueta").value;
    var inputValor = document.getElementById("valor").value;

    if (inputValor.trim() === "" && inputEtiqueta.trim() !== "")//Valido que solo la etiqueta tenga valores
    {

        if (!metodos.cadenaCorrecta(inputEtiqueta))//valido los datos de la etiqueta
        {
            metodos.capaGraficaOriginal();
            metodos.mostrarMensaje("Etiqueta no valida. NO admite solo numeros", "errores");
            setTimeout(metodos.capaMensajeOriginal, 2000);
        } else//si lo datos son correctos
        {
            if (grafica.borrarDato(inputEtiqueta))//Si hemos podido borrar el dato
            {
                metodos.capaGraficaOriginal();
                metodos.mostrarMensaje("Dato borrado", "informacion");
                setTimeout(metodos.capaMensajeOriginal, 2000);
            } else//Si no se ha encontrado y por lo tanto no se ha podido borrar
            {
                metodos.capaGraficaOriginal();
                metodos.mostrarMensaje("Dato NO encontrado", "errores");
                setTimeout(metodos.capaMensajeOriginal, 2000);
            }
        }

    } else//si el campo valor tiene datos
    {
        metodos.mostrarMensaje("Para borrar, introduccir datos SOLO en la etiqueta", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    }

}
;

/*Funcion que actualiza y muestra la grafica*/
function actualizarGrafica()
{
    metodos.capaGraficaOriginal();//pongo la capa de grafica como estaba originalmente(evito repeticion datos)
    if (!grafica.resultadoDatos())//Si no tenemos ningun valor en la lista
    {
        metodos.mostrarMensaje("No hay datos que mostrar. INGRESE algun dato", "errores");
        setTimeout(metodos.capaMensajeOriginal, 2000);
    }
    ;

}
;