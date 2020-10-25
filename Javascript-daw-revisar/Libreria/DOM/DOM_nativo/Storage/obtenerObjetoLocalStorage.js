/* 
 Obtener un objeto con identificador KEY que le pasemos por parametro
    @argument {String} id identificador del objeto
 */


function obtenerLiteralStorage(id)
{
    if (localStorage.getItem(id)) {//Si tenemos el objeto este id KEY

        /*
         var objeto = localStorage.getItem(id);
         console.log(objeto); //Sin convertir sera un string
         */

        //Para obtener el objeto JSON debemos convertir el string
        var objeto = JSON.parse(localStorage.getItem(id));
        return objeto;

    } else {
        //O devolvemos false o lo que sea 
        console.log("No existe el elemento en el local storage");
    }
}