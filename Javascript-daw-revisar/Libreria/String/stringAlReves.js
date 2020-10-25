/* 
Funcion que devuelve el String que le pasamos al reves
 */
/*
 * @argument {String} string
 * @returns {String}  El string pasado por argumento pero al reves
 */
function delReves(string)
{
    var salida="";
    for(var i=string.length-1; i>=0; i--)
    {
        salida+=string.substr(i,1);
    }
    return salida;
}
