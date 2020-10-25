
/* Manejadores de eventos y funciones de acceso al DOM para la página billetes.html */
window.onload = iniciar2; 


function iniciar2()
{
    document.getElementById("comprar").addEventListener("click",validarBillete);
}
function validarNombre()
{
    var nombre=document.getElementById("nombre");
    valorNombre=nombre.value;
    if(!isNaN(valorNombre) || valorNombre.trim() === "")
    {
        nombre.value="Introducir letras";
        return false;
    }
    return true;
};

function validarApellido()
{
    var nombre=document.getElementById("nombre");
    valorNombre=nombre.value;
    if(isNaN(valorNombre) || valorNombre.trim() !== "")
    {
        nombre.value="Introducir letras";
        return false;
    }
    return true;
};

function validarDNI()
{
    var dni=document.getElementById("dni");
    var valorDNI=dni.value;
    var patter=/[0-9]{7}[A-Z]/;
    if(!isNaN(valorDNI) || valorDNI.trim() !== "" || !patter.test(valorDNI))
    {
        dni.value="Introducir formato correcto";
    }
    
    return true;
    
};


function validarBillete()
{
    if(validarNombre()&&validarApellido()&&validarDNI());
};
