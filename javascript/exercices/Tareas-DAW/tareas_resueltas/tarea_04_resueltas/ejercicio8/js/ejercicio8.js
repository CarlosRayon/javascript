
/* DDWEC02 - Solución Tarea. Ejercicio 8 - Javier González Pisano */


const USUARIOS=["pepe","paco","juan","benito","manuel"];
const PASSWORDS=["12345","23456","09876","67890","666666"];

const MAX_INTENTOS=5;

/*
 * Función existeLogin()
 *   Recibe: 
 *              login [cadena] 
 *                              
 *   Devuelve:  [booleano]
 * 
 *   Valida si el login existe.
 
 */
function existeLogin(login){
   var existe=false;
    for (var i = 0; ((i < USUARIOS.length)&&(!existe)); i++) {
        if(USUARIOS[i]===login)
            existe=true;
    }
    return existe;
}


/*
 * Función passwordCorrecto()
 *   Recibe: 
 *             login [cadena]   
 *             password [cadena]    
 *                                     
 *   Devuelve:  [booleano]
 * 
 *   Valida si el password se corresponde con el login proporcionado.
 */
function passwordCorrecto(password,login){
   var indice=-1;
   var correcto=false;
    for (var i = 0; ((i < USUARIOS.length)&&(!correcto)); i++) {
        if(USUARIOS[i]===login)
            indice=i;
    }
    if(indice!=-1)
        if(PASSWORDS[indice]===password)
            correcto=true;
        
    return correcto;
}


/*****************   CUERPO DEL SCRIPT ******************************/

var intentos=MAX_INTENTOS;
var correcto=false;

while((intentos!==0)&&(!correcto)){
    var login=prompt("Introduce un login");
    if(existeLogin(login)){
        var password=prompt("Introduce una contraseña");
        if(passwordCorrecto(password,login)){
            correcto=true;
            console.log("El nombre de usuario y la contraseña son correctos");
        }
        else
           console.error("El nombre de usuario no coincide con la contraseña");  
    }
    else
        console.error("El nombre de usuario no existe");
    intentos--;
}
 if(intentos===0)
     console.warn("Has agotado el número de intentos");



