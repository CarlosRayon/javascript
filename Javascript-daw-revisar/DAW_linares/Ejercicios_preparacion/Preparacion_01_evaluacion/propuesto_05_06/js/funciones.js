/* 
 Funciones utiles
 */

function validarEntradaCadena(id, idMensaje, campoAfectado, expresion, modificador) {//Si no queremos expresion regular ""

    var dato = document.getElementById(id).value;//Elemento que quiero capturar
    var mensaje = document.getElementById(idMensaje);//Elemento donde poner mensaje error
    var rex = new RegExp(expresion, modificador);//Expresion regular


    if ((dato.trim() === "")) //Valido que el dato introduccido no este vacio
    {
        mensaje.value = "";
        mensaje.placeholder = "El campo " + campoAfectado + " es obligatorio";

        return false;
    } else if (!isNaN(dato))//Valido que sea solo letras
    {
        mensaje.value = "";
        mensaje.placeholder = "El campo " + campoAfectado + " solo admite letras";
        return false;
    } else if (!dato.match(rex))//Valido con un patron opcional
    {
        mensaje.value = "";
        mensaje.placeholder = "El campo " + campoAfectado + " no cumple el patron";
        return false;
    }
    
    return true;
}

function valorRadioButton(name)
{
    var resultado = "";
    var radio = document.getElementsByName(name);
    // Recorremos todos los valores del radio button para encontrar el
    // seleccionado
    for (var i = 0; i < radio.length; i++)
    {
        if (radio[i].checked)//Si tiene la propiedad checked
            resultado = radio[i].value;
    }
    return resultado;

};

function valorCheckBox(id)
{
    var checkBox = document.getElementById(id);
    if (checkBox.checked)
        return checkBox.value;
    else
        return "none"; //Si borro esto y no tengo seleccionado el checkBox me da undefined
    // 
    //RECUERDA!!! En los return puedo poner true||false si solo queremos validar que este o no seleccionado

}

function elementoID(id){
    return document.querySelector("#"+id);
}

function validarSelectValue(id,mensajeError)
{
    var valor = document.getElementById(id).value;//Capturo el valor del select
    
    if (valor === "none")//RECUERDA!!!normalmente el valor es none
    {
        alert(mensajeError);
        return false;
    }
    return true;
}

function guardarLiteralStorage(id,objeto)
{
    //Para guardar un obejo literal le convertimos con JSON.stringify()
    localStorage.setItem(id, JSON.stringify(objeto));
}

function obtenerLiteralStorage(id)
{
    if (localStorage.getItem(id)) {
        var objeto = localStorage.getItem(id);
        console.log(objeto); //Sin convertir sera un string

        //Para obtener el objeto JSON debemos convertir el string
        var objeto = JSON.parse(localStorage.getItem(id));
        console.log(objeto);
    } else {
        console.log("No existe el elemento en el local storage");
    }
}
