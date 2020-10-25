/* 
 Demo locaStorage
 Para obtener los datos:
 -usamos localStorage.getItem("key del valor a obtener")
 -RECUERDA!!! Para obtener objetos usamos lo siguiete debemos convertir el string a objeto(?)
 
 */

//Para obtener un string normal
function obtener_ls_string()
{
    if (localStorage.getItem("nombre")) {//RECUERDA!!! si el elemento no existe devuelve null por eso comprobamos antes de obtenerle

        var nombre = localStorage.getItem("nombre");
        console.log(nombre);

    } else {
        console.log("No existe el elemento en el local storage");
    }

}

obtener_ls_string();

//Funcion para obtener un objeto
function obtener_ls_objeto()//(?)
{
    if (localStorage.getItem("persona")) {
        var persona = localStorage.getItem("persona");
        console.log(persona); //Sin convertir sera un string

        //Para obtener el objeto JSON debemos convertir el string
        persona = JSON.parse(localStorage.getItem("persona"));
        console.log(persona);
    } else {
        console.log("No existe el elemento en el local storage");
    }
}
obtener_ls_objeto();