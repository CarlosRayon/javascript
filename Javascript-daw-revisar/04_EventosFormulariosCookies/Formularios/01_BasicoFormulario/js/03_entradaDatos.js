
window.addEventListener("load", formulario);

function formulario()
{
    //INPUT TEXTAREA
    document.getElementById("nombre").addEventListener("click", entradaDatosInput);

    //CHECKED
    document.getElementById("boletin").addEventListener("click", entradaCheckbox);
    document.getElementById("ofertas").addEventListener("click", entradaCheckbox);

    //RADIO
    var radio = document.getElementsByName("genero");//RECUERDA CAPTURAMOS`POR NAME TODO EL GRUPO RADIOS TIENE QUE TENER MISMO NOMBRE   AL CAPTURAR SE CRES UN ARRAY
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", entradaRadio);
    }

    //SELECT
    document.getElementById("favorito").addEventListener("click",entradaSelect);
    
    
    
}



function entradaDatosInput()
{
    /*PROPIEDADES DE LOS INPUT
     RECUERDA!!! PODEMOS VERLA O MODIFICARLAS this.value="NUEVO VALOR";
     */

    console.log(this.defaultValue);//Valor por defecto que tiene el campo si es que tiene

    console.log(this.form.id);//Accedo SU formulario y podemos ver una de sus propiedades

    console.log(this.maxLength);//Maximo caracteres permitidos -1 si no tiene limite

    console.log(this.name);//nombre

    console.log(this.readOnly);//Solo lectura false || true

    console.log(this.size);//Ancho caracteres (tamaño visible)

    console.log(this.type);//tipo

    console.log(this.value);//Valor RECUERDA!!! MUY IMPORTANTE PARA CAPTURA EL VALOR DEL INPUT

    /*METODOS*/
    document.getElementById("apellidos").select();//Hacemos que se marca un elemento como un focus
}

function entradaCheckbox()
{
    console.log(this.checked);//Indica si esta seleccionado o no true||false
    console.log(this.defaultChecked);//Valor por defecto que tiene
    console.log(this.form.id);//acceso formulario y a su id
    console.log(this.name);//name
    console.log(this.value);//Value
    console.log(this.id);//id del checkbox
}

function entradaRadio()
{
    //MISMA PROPIEDADES QUE EL CHECKBOX 
    if (this.checked) {
        console.log(this.value);
    }
}

function entradaSelect()
{
    console.log(this.value);//Asi el valor
    console.log(this.options[document.getElementById(this.id).selectedIndex].text);//Asi para obtener el texto del select
}