
/**********************FUNCION EVENTO SOLO UNA VEZ*************************
 * Funcion para lanzar un evento solo una vez. (No lanzara el evento si pulsamos mas veces sobre el elemento)
 * @param {identificador objetos} obj OPCIONAL
 * 
 */
function eventoSoloUnaVez(obj)
{
    document.getElementById(obj).removeEventListener('click', funcion, false);
}
;




/**********************FUNCION PARA MODIFICAR ELEMENTOS (COMPLETA)*************************
 * Funcion para hacer aparecer un elemento y muestra el mensaje 
 * que le pasemos por parametros
 * 
 * @argument {obj} obj
 * @argument {String} mensaje
 * @argument {String} color
 * @argument {String} display
 */
function modificarElemento(obj, mensaje, color, display) {
    document.getElementById(obj).style.display = display;
    document.getElementById(obj).innerHTML = mensaje;
    document.getElementById(obj).style.color = color;
}




/**********************FUNCION PARA MODIFICAR DATOS ELEMENTO*************************
 * Funcion simple para mostra datos en un objeto concreto
 * @param {objeto} obj OPCIONAL
 * @param {String} dato OPCIONAL
 */
function escribirDatos(obj, dato)
{
    document.getElementById(obj).innerHTML = dato; //"Poner String directamente"
}
;

/**********************FUNCION CAMBIAR COLOR*************************
 * Funcion que hace cambiar el color de un elemento
 * 
 * @param {String} obj OPCIONAL
 * @param {String} color OPCIONAL
 * 
 */
function cambiarColor(obj, color)
{
    document.getElementById(obj).style.color = color; //Poner el color directamente
}
;

/**********************FUNCION HACER APARECER UN OBJETO*************************
 * Funcion que hace aparecer el objeto capturado
 * @param {String} obj OPCIONAL
 */
function hacerAparecer(obj)
{
    document.getElementById(obj).style.display = "block";
}
;


/**********************FUNCION HACER DESAPARECER UN OBJETO*************************
 * Funcion que hace desaparecer el objeto capturado
 * @param {String} obj OPCIONAL
 */
function hacerDesaparecer(obj)
{
    document.getElementById(obj).style.display = "none";
}
;


/**********************FUNCION HACER DESAPARECER SI YA ESTA MOSTRADO*************************
 * Funcion que hace desaparecer el objeto si este ya esta mostrado
 * @argument {String} obj  OPCIONAL
 */
function hacerDesaparecer(obj) {
    var el = document.getElementById(obj);
    if (el.style.display != 'none') {
        el.style.display = 'none';
    } else {
        el.style.display = '';
    }
}
;
/***************************FUNCION PARA CONVERTIR TEXTO DE LOS INPUT EN MAYUSCULAS**************************
 funcion que convirte en mayusculas lo introduccido en el text
 
 */

function convertirMayusculas()
{
    document.getElementById(obj).value = document.getElementById(obj).value.toUpperCase();
}

/**********************FUNCION VALIDAR DATOS FORMULARIOS Y MANDARLOS*************************
 * Funcion que valida dos datos de un formulario y manda el formulario
 * @argument {obj} obj1  OPCIONAL
 * @argument {obj} obj2  OPCIONAL
 * @argument {obj} obj3  OPCIONAL
 */
function validaPassMandarFormulario(obj1, obj2, obj3)
{
    var contrasena = document.getElementById(obj1).value;
    var pass = document.getElementById(obj2).value;

    if ((contrasena == pass) && (nombre != ""))
    {
        //Capturo el formulario y cambio sus atributos...
        // var formulario = document.obj3;
        var formulario = document.getElementById(obj3);
        formulario.action = "dondemandarformulario.html";
        formulario.method = "get";//post;
        //Mando el formulario
        formulario.submit();
    }
}
;





/*EJEMPLOS:
 * 
 * 
 * (?)
 function inicializarEventos()
 {
 //eventos para el boton2 
 document.getElementById('boton1').addEventListener("click",function(){escribirDatos("hola que tal")}, false);
 //eventos para el boton2
 document.getElementById('boton2').addEventListener("click",function(){escribirDatos("que feo eres")}, false);
 
 
 };
 function escribirDatos(dato)
 {
 document.getElementById('parrafo').innerHTML =dato;
 };*/