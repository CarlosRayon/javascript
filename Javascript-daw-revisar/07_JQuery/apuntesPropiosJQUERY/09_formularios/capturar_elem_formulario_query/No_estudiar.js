
/*Archivo con la logica para mostrar los div que no tiene que ver con el formulario en si*/
window.addEventListener("load", mostrarInfo);

function mostrarInfo()
{
    $("input").on("focus", verDiv);
    $("#favorito").on("focus", verDiv);
    $("#comentario").on("focus", verDiv);

}

function verDiv()
{
    refrestDivCodigo();

    if (this.dataset.id === "input")
    {
        $("#codigo-input").css("display","block");
        
    } else if (this.dataset.id === "radio")

    {
        $("#codigo-radio").css("display","block");

    } else if (this.dataset.id === "checkbox")
    {
        $("#codigo-checkbox").css("display","block");
    } else if (this.dataset.id === "select") {
        $("#codigo-select").css("display","block");
    } else if (this.dataset.id === "textarea") {
        $("#codigo-textarea").css("display","block");
    }
}

function refrestDivCodigo()
{
    $("#codigo-input").css("display","none");
    $("#codigo-radio").css("display","none");
    $("#codigo-checkbox").css("display","none");
    $("#codigo-select").css("display","none");
    $("#codigo-textarea").css("display","none");
   
}

