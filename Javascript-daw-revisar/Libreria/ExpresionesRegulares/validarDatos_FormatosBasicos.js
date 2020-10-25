
/*BASICA*/

function validarDatos(dato)
{
    var rex = /expresion/;//Expresion regular que usare para validar
    if (dato.match(rex))
        return true;
    return false;
}


/*SOLO NUMEROS HASTA LA CANTIDAD INDICADA*/

function validarDatos(dato)
{
    var rex = /^[0-9]{6}$/;//Expresion regular que usare para validar
    if (dato.match(rex))
        return true;
    return false;
}


/*SOLO LETRAS HASTA LA ENTRE CANTIDADES*/

function validarDatos(dato)
{
    var rex = /^[a-zA-ZñÑ]{1,10}$/;//Expresion regular que usare para validar
    if (dato.match(rex))
        return true;
    return false;
}

/*NUMEROS Y LETRAS CON GUION EN MEDIO COMO CANTIDADES INDICADAS*/
function validarDatos(dato)//SOLO NUMEROS HASTA LA CANTIDAD INDICADA 
{
    var rex = /^[0-9]{4}-[A-ZÑ]{2}$/;//Expresion regular que usare para validar
    if (dato.match(rex))
        return true;
    return false;
}