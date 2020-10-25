
window.addEventListener("load", mostrarInfo);

function mostrarInfo()
{
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < input.length; i++) {
        input[i].addEventListener("focus", verDiv);
    }

    document.getElementById("favorito").addEventListener("focus", verDiv);
    document.getElementById("comentario").addEventListener("focus", verDiv);

}

function verDiv()
{
    refrestDivCodigo();

    if (this.dataset.id === "input")
    {
        document.getElementById("codigo-input").style.display = "block";
    } else if (this.dataset.id === "radio")

    {
        document.getElementById("codigo-radio").style.display = "block";

    } else if (this.dataset.id === "checkbox")
    {
        document.getElementById("codigo-checkbox").style.display = "block";
    } else if (this.dataset.id === "select") {
        document.getElementById("codigo-select").style.display = "block";
    } else if (this.dataset.id === "textarea") {
        document.getElementById("codigo-textarea").style.display = "block";
    }
}

function refrestDivCodigo()
{
    document.getElementById("codigo-input").style.display = "none";
    document.getElementById("codigo-radio").style.display = "none";
    document.getElementById("codigo-checkbox").style.display = "none";
    document.getElementById("codigo-select").style.display = "none";
    document.getElementById("codigo-textarea").style.display = "none";
}

