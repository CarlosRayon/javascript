/* 
 Para borrar una posicion de un array y que quede ordenado
 */

var arrayDatos = [1, 2, 3, 4];

function borrarPosicionArray(numeroParaBorrar)
{
    for (var i = 0, max = arrayDatos.length; i < max; i++)//Recorremos todo el array
    {

        if (i === numeroParaBorrar)//Si es igual....
        {
            arrayDatos.splice(i, 1);//Mee borrar posicion y ordenas array
            return true;
        }
    }

    return false;
}