//SELECCION DEL FORMULARIO

//Conociendo el id
var formulario = document.getElementById("miFormulario");
var formulario2 = document.forms["miFormulario"];//Array de formularios con este id

//Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).

window.onload = iniciar; //Sin paréntesis porque sino lo ejecuta nada mas ver este dato y nosostros queremos que lo haga al final de leer la pagina

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

/*Podemos poner un paramametro y validar el parametro si tenemos mucho input*/
function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (isNaN(elemento.value)) {
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}

function validaFecha() {
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var fecha = new Date(ano, mes, dia);
    if (isNaN(fecha)) {
        alert("Los campos de la fecha son incorrectos");
        return false;
    }
    return true;
}

function validaCheck() {
    var campoCheck = document.getElementById("mayor");
    if (!campoCheck.checked) {//checked ==false
        alert("Debes ser mayor de edad");
        return false
    }
    return true;
}

function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();//Evita que se ejecute el evento àsociado osea el sumit asociado a enviar(enivar a la pagian php)
        return false;
    }
}

function error(elemento) {
    elemento.className = "error"; //En css poner una clase con este nombre
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}