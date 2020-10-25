/*
 * Función esEntero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un número entero.
 */
function esEntero(c){
    if(isNaN(parseInt(c))||(parseInt(c)!==parseFloat(c))|| (c!=parseInt(c)))//RECUERDA IMPORTANTE LA ULTIMA CONDICION DEJAR COMO ESTA
        return false;
    else
        return true;
}

/*Evaluamos todas las posibilidades:
 * 1º condicion: que sea un numero
 * 2º condicion: que no sea un real 
 * 3º condicion: que no tenga letras
 * 
 * 
 */
