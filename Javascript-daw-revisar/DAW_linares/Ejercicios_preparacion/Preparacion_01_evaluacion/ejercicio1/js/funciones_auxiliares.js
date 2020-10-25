

function elementoID(id){
    return document.querySelector("#"+id);
}

function validarRadio(name)
{
    var radio = document.getElementsByName(name);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(this.value);
        }
    }

}

function aleatoriosEntreMinimoMaximo(min, max)
{
    return Math.round(Math.random() * (max - min) + min);
}
;

function validarEntradaCadena(id, idMensaje, campoAfectado, expresion, modificador) {//Si no queremos expresion regular ""
    var dato = document.getElementById(id).value;//Elemento que quiero capturar
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error
    var rex = new RegExp(expresion, modificador);//Expresion regular
    if ((dato.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        mensaje.innerHTML = "El campo " + campoAfectado + " es obligatorio";//RECUERDA  SI QUIERO PONER EL MENSAJE EN EL CAMPO CAMBIAR INNERHTML POR placeholder
        return false;                                     //IMPORTANTE SI PONEMOS VALUE EL CAMPO TENDRIA VALORES Y PODRIA SER VALIDOS Y ESO NO NOS INTERESA
    }
    else if (!isNaN(dato))//Valido que sea solo letras o letras con numeros
    {
        mensaje.innerHTML= "El campo " + campoAfectado + " solo admite letras";
        return false;
    }
    else if (!dato.match(rex))//Valido con un patron opcional
    {

        mensaje.innerHTML="El campo " + campoAfectado + " no cumple con ser solo letras";
        return false;
    }

    return true;

}