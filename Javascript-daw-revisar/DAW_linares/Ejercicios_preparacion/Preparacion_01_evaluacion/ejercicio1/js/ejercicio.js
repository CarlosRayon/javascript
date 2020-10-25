window.addEventListener("load", iniciarAplicacion);

var medidas = new CentralMedidas();

function iniciarAplicacion()
{

    var ciudad = elementoID("ciudad").addEventListener("keyup", mayusculas);
    var medidas = elementoID("medidas").addEventListener("keyup", checkKey);

    var medidas = elementoID("medidas")

    var radio = document.getElementsByName("tipo");
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", tipoRadio);
    }

    var guardar = elementoID("guardar").addEventListener("click", guardarDatos);

}

function campoMedidas()
{
    console.log(obtenerValores(this.value));
}

var spacepending = false;
function format() {
    var element = document.querySelector('medidas');
    contenido = element.value,
            contenido_arr = contenido.replace(/,/g, ' ').trim().split(/\s+/);
    element.value = contenido_arr.join(', ');
}
;

function checkKey(event) {

    var keyName = event.key;
    if (keyName === ',')
    {
        //no hago naga
    } else if (keyName === ' ')
    {
        if (spacepending) { // si ya se insertó un espacio, ejecuto el formateo
            format()
            spacepending = false;
        } else { // si no, almaceno que hay un espacio pendiente
            spacepending = true;
        }
    } else if (isNaN(keyName))
    {
        event.preventDefault();
        return false;
    }
}

function tipoRadio()
{
    var medidas = elementoID("medidas");

    if (this.id === "medidas_manual")
    {
        medidas.value = "";
        medidas.disabled = "";

    }

    if (this.id === "medidas_aleatorio")
    {
        var aleatorios = generarValoresAleatorios();
        var ale = "";
        for (var i = 0; i < aleatorios.length; i++) {
            ale += aleatorios[i] + ", ";
            if (i == aleatorios.length - 1) {
                ale += aleatorios[i];
            }
        }
        medidas.value = ale;
        medidas.disabled = "false";

    }
}

function generarValoresAleatorios()
{
    var arrayAleatorios = new Array();
    for (var i = 0; i < 30; i++) {
        arrayAleatorios.push(aleatoriosEntreMinimoMaximo(-10, 99));
    }
    return arrayAleatorios;
}


function mayusculas()
{
    this.value = this.value.toUpperCase();
}

function existe(ciudad, array)
{
    for (var i = 0; i < array; i++) {
        if (array[i][0] === ciudad) {
            elementoID("errores").innerHTML = "Ya existe la ciudad";
            return false;
        }
    }
    return true;
}
function comprobarRango(array) {

    for (var i = 0; i < array.length; i++) {

        if (intervalo(parseInt(array[i], -11, 100)))
        {
            console.log("error dato");
            return false;
        }
    }
    return true;

}
function intervalo(numero, maximo, minimo) {
    if (numero >= minimo && numero <= maximo) { //HE CONSIDERADO QUE EL VALOR DE LOS LIMITES TAMBIEN SON VALIDOS
        return true;//Si el campo es correcto
    } else {
        return false;
    }
}
;
function guardarDatos() {

    var ciudad = elementoID("ciudad").value;
    var arrayDatos = elementoID("medidas").value.split(",");


    if (validarEntradaCadena("ciudad", "errores", "ciudad", "^[A-ZÑ]+$", "") && existe(ciudad.toLowerCase()) && comprobarRango(arrayDatos))
    {

        console.log(arrayDatos);
        medidas.insertarMedidas(ciudad, arrayDatos)
        medidas.toHTML();


    }
}