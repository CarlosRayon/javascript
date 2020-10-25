/* 
 Formas de capturar elementos del formulario
 Tenemos varias opciones:
 -Capturar el un boton (Ej enviar) y capturar el valor de cada elemento para validar o lo que sea
 -Agregara eventos a los input para interactuar con ellos
RECUERDA!! Evento blur hace que salte el evento al perder el foco el input
 */

window.addEventListener("load", cargarPagina);

function cargarPagina()
{

    //TRES OPCIONES DE USO:  (Comentar o descomentar segun la opcion que queramos)IMPORTANTE!!! Si tenemos enter y toda tecla activada por consola mostrara doble resultado 

    //Al pulsar el boton enviar mostramos los datos
    document.getElementById("enviar").addEventListener("click", mostrarDatos);
    //Al pulsar cualquier tecla ira mostrandos los datos que vamos recibiendo...
    document.body.addEventListener("keyup", mostrarDatos);//RECUERDA!!! Mirar eventos de teclado para mas info de las keys RECUERDA!!! Cuidado con el evento. En este caso con keydoown o keypress no no pilla la primera letra
    //o si queremos solo cuanto pulsemos enter
    // document.body.addEventListener("keypress", enter);//RECUERDA!!! Mirar eventos de teclado para mas info de las keys
}

function enter(event)//RECUERDA!!! Mirar eventos de teclado para mas info
{
    var x = event.which || event.keyCode;
    if (x == 13)
    {
        mostrarDatos();
    }
}

function mostrarDatos()//Al pulsar el boton enviar nos muestra los datos que tengamos en el div mensajes
{
    /*--------------CAPTURA DE LOS INPUT------------------------------ RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     Para capturar el valor de los input usamos el atributo value
     Aun siendo de types diferentes se capturan igual todos por su value
     */

    var nombre = document.getElementById("nombre").value;// funcion de libreria valorInput("nombre");
    var apellidos = document.getElementById("apellidos").value; //funcion de libreria valorInput("apellidos"); 
    var fechas = document.getElementById("fecha_nacimiento").value;//RECUERDA La fecha la devuelve con el orden invertido yyyy-mm-dd (LIB>>>DATE_TIEMPOS>>funcion para reconvertir
    var email = document.getElementById("email").value;
    var dni = document.getElementById("dni").value;
    var pass_01 = document.getElementById("password").value;
    var pass_02 = document.getElementById("password2").value;

    /*--------------CAPTURA DE LOS RADIO BUTTON-------------------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     Para capturar los radio button usamos: RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     -Capturamos el elemento por name (Los radio tiene el mismo name para poder agruparlos)
     -Recorremos todos los valores del radio button para encontrar seleccionado
     */

//    var radio = document.getElementsByName("genero");
//    var sexo = "";
//    for (var i = 0; i < radio.length; i++)
//    {
//     if (radio[i].checked)sexo = radio[i].value;
//    }
    var sexo = valorRadioButton("genero");

    /*------------------CAPTURA DE LOS CHECKBOX------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     -Capturamos el checkBox por id
     -validamos en un if si esta seleccionado if (campoCheck.checked) (?)
     -Con .value obtenemos el valor
     -Con .name su nombre   
     */

    var checkBox_01 = valorCheckBox("boletin"); //document.getElementById("boletin");
    var checkBox_02 = document.getElementById("ofertas");


    /*---------------CAPTURA DE SELECT/OPTION---------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     Tres opciones:
     -1º Capturando el select por id (RECOMENDABLE)
     -2º Capturando el select por id y validando si esta selected el option. Esta manera solo capturamos los option del select deseado
     -3º Capturando el tagName option //RECUERDAD!!! Si tenemos mas de un select capturamos todos los option de la pagina
     */

    //- 1º Capturamos el select por su id y del array de options capturamos el index del select(RECOMENDABLE)
    var select = document.getElementById("favorito").options[document.getElementById("favorito").selectedIndex].value;
    // var select =valorSelect("favorito");

    /*
     2º Capturando el select por id y validando si esta selected el option
     
     var select = document.getElementById("favorito");
     for (var i = 0; i < select.options.length; i++) {
     if (select.options[i].selected) {
     console.log(select.options[i].innerText);
     }
     }
     
     3º Capturamos el tagName option y con bucle y un if mostramos el option que este selected 
     
     var options = document.getElementsByTagName("option");
     for (var i = 0; i < options.length; i++) {
     if (options[i].selected) {
     console.log(options[i].innerText);
     }
     }
     */

    /*----------------CAPTURAR TEXT AREA-------------------RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura(misma que input)
     -Para capturar un textarea lo hacemos exactamente igual que cualquier input
     */

    var textArea = document.getElementById("comentario").value;


    //MOSTRAMOS LOS DATOS CAPTURADOS Y GUARDADOS EN VARIABLES
    var datos = "El  NOMBRE (INPUT) : " + ((nombre === "") ? "campo vacio" : nombre) +
            " <br>El APELLIDO (INPUT) : " + ((apellidos === "") ? "campo vacio" : apellidos) +
            " <br>La FECHA (INPUT) :  " + ((fechas === "") ? "campo vacio" : fechas) + //RECUERDA La fecha la devuelve con el orden invertido yyyy-mm-dd (En libreria funcion reconvertir)
            " <br>El DNI (INPUT) : " + ((dni === "") ? "campo vacio" : dni) +
            " <br>El EMAIL (INPUT) : " + ((email === "") ? "campo vacio" : email) +
            " <br>El PASS 1 (INPUT) : " + ((pass_01 === "") ? "campo vacio" : pass_01) +
            " <br>El PASS 2 (INPUT) es : " + ((pass_02 === "") ? "campo vacio" : pass_02) +
            " <br>El SEXO(INPUT) es : " + ((sexo === "") ? "campo vacio" : sexo) +
            " <br>El CHECKBOX es : " + checkBox_01 + // ((!checkBox_01.checked) ? "campo vacio" : checkBox_01.value) + //(?)
            " <br>El CHECKBOX es : " + ((!checkBox_02.checked) ? "campo vacio" : checkBox_02.name) + //(?)
            " <br>El SELECT es : " + ((select === "none") ? "campo sin seleccionar(none)" : select) +
            " <br>El TEXTAREA es : " + ((textArea === "") ? "campo vacio (El placeholder no se toma en cuenta)" : textArea);

    document.getElementById("mensajes").innerHTML = datos;
}
