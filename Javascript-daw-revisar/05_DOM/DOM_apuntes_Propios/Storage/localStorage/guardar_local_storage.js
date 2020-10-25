/* 
Demo local storage
 Uso local storage
      -pende de  objeto window  window.localStorage
      -guarda hasta diex megas mas menos
      -localStorage.setItem("key del dato","dato guardar");
      -Si graba otro objeto con mismo nombre se sobreescribe el antiguo
      -RECUERDA!!! Solo graba String para objeto debemos convertir el objeto a string(?)

 */

//Funcion que al llamarla crea dos tipos de datos y los guarda en localstorage
function guardar_ls_string()
{     
    var nombre="Guardado en local storage";
    
    /*Uso local storage
     * -pende de  objeto window  window.localStorage
     * -localStorage.setItem("key del dato","dato guardar");
     */   
    localStorage.setItem("nombre", nombre);
}

//Ejecutamos la funcion
guardar_ls_string();


//Guardar objeto (?)
function guardar_ls_objeto(){
       //Datos que quiero guardar
    var persona={
        nombre:"carlos",
        edad:31,
        correo:"xyz@xyz.com",
        coordenadas:{
            la:100,
            long:-100
        }
    };
    
    //Para guardar un obejo literal le convertimos con JSON.stringify()
    localStorage.setItem("persona", JSON.stringify(persona));
}

guardar_ls_objeto();

// RECUERDA!!!Para ver localStorage en el navegador -Vamos a la consola de depuracion -Application - Storage - Local Storage
 