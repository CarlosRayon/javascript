
/*
 Guardar un objeto literal en el local storage
@argument {string} id identificador del objeto KEY
@argument {Object} objeto litera que queremos guardar VALUE
 */

function guardarLiteralStorage(id,objeto)
{
    //Para guardar un obejo literal le convertimos con JSON.stringify()
    localStorage.setItem(id, JSON.stringify(objeto));
}
