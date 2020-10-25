/**********************FUNCION DE CAPTURA *************************
 * @description Funcion basica para captura los objetos que queramos de una Web
 * 
 * @param {identificador objeto} obj1 OPCIONAL
 * @param {identificador objeto} obj2 OPCIONAL
 * @return {Boolean}  OPCIONAL
 */
function inicializarEventos(obj1, obj2)
{

    //eventos para un boton   
    var boton1=document.getElementById(obj1);
    boton1.addEventListener("click", funcion, false);
    //eventos para un boton
    var boton2=document.getElementById(obj2);
    boton2.addEventListener("click", funcion, false);

    
    //return true || false (Opcional por si queremos hacer alguna comprobacion

};

