/* 
 Clase  que guarda metodos utiles para el programa (simula ser una clase estatica)
 La creo con prototypos totalmente. Los podia implementar en la clase Grafica o
 en archivo ejercico5.js pero he preferido ponerlos aparte para que el codigo
 quede, en mi opinion, mas claro.
 */

function Metodos()
{
//Añado todos sus metodos por prototypos
}
/*Metodo que valida que una cadena pasada sea solo numeros enteros
 * @argument {String} c 
 * @returns {Boolean}  
 */
Metodos.prototype.esEntero = function (c)
{
    if (isNaN(parseInt(c)) || (parseInt(c) !== parseFloat(c)) || (c != parseInt(c)))
        return false;
    else
        return true;
};

/*Metodo que valida que una cadena sea una cadena texto
 * -No admite solo numeros
 * @argument {String} cadena
 * @returns {Boolean} 
 */
Metodos.prototype.cadenaCorrecta = function (cadena)
{
    if (!isNaN(cadena) || cadena.trim() === "") {
        return false;
    }
    return true;
};

/*Metodo que pone los input vacios*/
Metodos.prototype.vaciarInput = function ()
{
    var inputEtiqueta = document.getElementById("etiqueta").value = "";
    var inputValor = document.getElementById("valor").value = "";
};

/*Metodo que muestra mensajes en la capa mensaje
 * @argument {String} textoMostrar  texto que quiero mostrar en al capa mensaje
 * @argument {String} que clase le quiero añadir errores/informacion
 */

Metodos.prototype.mostrarMensaje = function (mensajeMostrar, claseAñadir)
{

    var capaMensaje = document.getElementById("mensajes");//Capturo div mensajes....
    capaMensaje.className = "";//..Borro su clase original...
    capaMensaje.classList.add("visible");//...y le añado la clase visible


    var parrafoInformacion = document.createElement("p");//Creo elemento <p>...
    parrafoInformacion.classList.add(claseAñadir);//,,,Le añado la clase coveniente segun el caso errores/informacion
    var textoInformacion = document.createTextNode(mensajeMostrar);//,,,Creo el texto que quiero mostrar (pasado por parametros)...
    parrafoInformacion.appendChild(textoInformacion);//...Añado el texto al parrafo...
    capaMensaje.appendChild(parrafoInformacion);//...Añado el parrafo con class informacion y su texto al div

};

/*Metodo que vuelve a dejar la capa mensaje como estaba originalmente
 * -Borro todos los elementos de hijos del div. De esta menera evito repeticiones 
 * al mostrar los datos
 * */

Metodos.prototype.capaMensajeOriginal = function ()
{
    var capaMensaje = document.getElementById("mensajes");
    capaMensaje.className = "oculto";//vuelvo a ponerla como oculta...
    while (capaMensaje.hasChildNodes())//...y borro todos sus posibles hijos
        capaMensaje.removeChild(capaMensaje.firstChild);

};

/*Metodo que vuelve a dejar la capa grafica como estaba originalmente
 * -Borro todos los elementos de hijos del div. De esta manera evito repetiones al mostrar los datos  
 * */
Metodos.prototype.capaGraficaOriginal = function ()
{
    var capaGrafica = document.getElementById("grafica");
    capaGrafica.className = "oculto";//vuelvo a ponerla como oculta...
    while (capaGrafica.hasChildNodes())//...y borro todos sus posibles hijos
        capaGrafica.removeChild(capaGrafica.firstChild);

};



