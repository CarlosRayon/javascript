/*Creacion de elementos*/
$(document).ready(cargaPagina);

/*
 function cargaPagina()
 {
 
        //Para asignar eventos usamos el metodo on("evento",{<opcion>algunParametro},function)

        $("#capa1").on("click", {idioma: "español", pais: "Viva españa"}, pulsaCapa1);//A un solo elementoRECUERDA!!! Puede ser una funcion anonima tambien

        $("div").on("click", pulsaCapa);//A todos los elementos div RECUERDA!!! NOOO hace falta asignar cada evento en un bucle for

        var $div = $("div");//Seleciono los elementos class color

        //Como alternativa con eq recorro los elementos y les doy eventos uno a uno

        for (var i = 0; i < $div.length; i++) {
        $div.eq(i).on("click", seleccionDiv);
 }
 

        //Para borrar un evento usamos el metodo off("evento",functio borrar)
        $("#capa2").off("click", pulsaCapa);

        }

        function pulsaCapa() {
        console.log("He pulsado sobre " + $(this).attr("id"));//Valdria this.id
        }


        function pulsaCapa1(e)
        {
        console.log("El pais es " + e.data.pais);//Capturamos los valores con el e.data.valor RECUERDA!!! Con e podemos capturar mas informaicion(mira EventosMasUsado)
        console.log("El idioma es " + e.data.idioma);
        }
        */

/*Ejemplo uso paso parametros*/

function cargaPagina()
{
    $("#capa1").on("click", {idioma: "es"}, pulsaCapa);
    $("#capa2").on("click", {idioma: "en"}, pulsaCapa);
    $("#capa3").on("click", {idioma: "fr"}, pulsaCapa);
}

function pulsaCapa(e)
{
    switch (e.data.idioma)
    {
        case "es":
            console.log("Hola");
            console.log("Tipo de evento" + e.type);
            console.log("Elemento sobre el que he actuado" + e.target);
            console.log(e.target);
            console.log("Boton causante elemento " + e.which);
            console.log("Posicion al pulsar " + e.pageX + " " + e.pageY);
            console.log("Boton causante elemento " + e.which);

            break;
        case "en":
            console.log("Hello");
            break;
        case "fr":
            console.log("Boun jour");
            break;
    }

}