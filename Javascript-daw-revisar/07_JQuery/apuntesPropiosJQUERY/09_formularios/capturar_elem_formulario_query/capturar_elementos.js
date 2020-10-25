/* 
 Formas de capturar elementos del formulario
 Tenemos varias opciones:
 -Capturar el un boton (Ej enviar) y capturar el valor de cada elemento para validar o lo que sea
 -Agregara eventos a los input para interactuar con ellos
 */

$("window").ready(cargarPagina);

function cargarPagina()
{

    //TRES OPCIONES DE USO:  (Comentar o descomentar segun la opcion que queramos)IMPORTANTE!!! Si tenemos enter y toda tecla activada por consola mostrara doble resultado 

    //Al pulsar el boton enviar mostramos los datos
    $("#enviar").on("click", mostrarDatos); 
    //Al pulsar cualquier tecla ira mostrandos los datos que vamos recibiendo...
    $("body").on("keyup", mostrarDatos);//RECUERDA!!! Mirar eventos de teclado para mas info de las keys
    //o si queremos solo cuanto pulsemos enter
    $("body").on("keypress", enter);//RECUERDA!!! Mirar eventos de teclado para mas info de las keys
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
     Para capturar el valor de los input usamos el atributo val()
     Aun siendo de types diferentes se capturan igual todos por su value
     */

    var nombre = $("#nombre").val();//var nombre=valorInput_textArea("nombre"); Funcion en libreria
    var apellidos = $("#apellidos").val(); 
    var fechas = $("#fecha_nacimiento").val();//RECUERDA La fecha la devuelve con el orden invertido yyyy-mm-dd (LIB>>>DATE_TIEMPOS>>funcion para reconvertir
    var email = $("#email").val(); 
    var dni = $("#dni").val();
    var pass_01 = $("#password").val(); 
    var pass_02 = $("#password2").val(); 

    /*--------------CAPTURA DE LOS RADIO BUTTON-------------------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     Para los radio buttons tenemos varias opciones: RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     - Capturar el valor directamente de los radio que es este seleccionados y luego ya le validamos RECUERDA!!! Otras opciones en carpeta Documentacion
     */

    // Obtenemos el valor del radio button directamente
//    var sexo = $("input:radio[name=genero]:checked").val();
    var sexo = valorRadioButton("genero");

    /*------------------CAPTURA DE LOS CHECKBOX------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     -Capturamos el checkBox por id
    
     Otra opcion es la siguente(es por name podria ser por id):
     $('input:checkbox[name=boletin]:checked').val(); Si esta señalado no da valor sino undefined
    
     -validamos en un if si esta seleccionado por varios metodos:
     if (checkBox_02.prop('checked')) (?)
     if(checkBox_01.is(':checked'))
     -Con .val() obtenemos el valor
     -Con .attr.("name")  su nombre   
     */

    var checkBox_01 = $("#boletin");
    var checkBox_02 = $("#ofertas");


    /*---------------CAPTURA DE SELECT/OPTION---------------- RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura
     -Una opcion es la siguiente
     */

    var select = $("select[id=favorito]").val();
    console.log(valorSelect("favorito"));

    /*----------------CAPTURAR TEXT AREA-------------------RECUERDA!!! LIB>>>DOM_NATIVO>>>funcion de captura(misma que input)
     -Para capturar un textarea lo hacemos exactamente igual que cualquier input
     */

    var textArea = $("#comentario").val(); 

    //MOSTRAMOS LOS DATOS CAPTURADOS Y GUARDADOS EN VARIABLES
    var datos = "El  NOMBRE (INPUT) : " + ((nombre === "") ? "campo vacio" : nombre) +
            " <br>El APELLIDO (INPUT) : " + ((apellidos === "") ? "campo vacio" : apellidos) +
            " <br>La FECHA (INPUT) :  " + ((fechas === "") ? "campo vacio" : fechas) + //RECUERDA La fecha la devuelve con el orden invertido yyyy-mm-dd (En libreria funcion reconvertir)
            " <br>El DNI (INPUT) : " + ((dni === "") ? "campo vacio" : dni) +
            " <br>El EMAIL (INPUT) : " + ((email === "") ? "campo vacio" : email) +
            " <br>El PASS 1 (INPUT) : " + ((pass_01 === "") ? "campo vacio" : pass_01) +
            " <br>El PASS 2 (INPUT) es : " + ((pass_02 === "") ? "campo vacio" : pass_02) +
            " <br>El SEXO(INPUT) es : " + ((sexo === "") ? "campo vacio" : sexo) +
            " <br>El CHECKBOX es : " + ((!checkBox_01.is(':checked')) ? "campo vacio" : checkBox_01.val()) + //(?)
            " <br>El CHECKBOX es : " + ((!checkBox_02.prop('checked')) ? "campo vacio" : checkBox_02.attr("name")) + //(?) 
            " <br>El SELECT es : " + ((select === "none") ? "campo sin seleccionar(none)" : select) +
            " <br>El TEXTAREA es : " + ((textArea === "") ? "campo vacio (El placeholder no se toma en cuenta)" : textArea);

    document.getElementById("mensajes").innerHTML = datos;
}
