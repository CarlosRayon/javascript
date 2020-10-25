/*
 * Función esPositivo()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [booleano]
 * 
 *   Determina si el valor recibido es positivo.
 */
function esPositivo(numero){
    if(numero>=0) //Si ponemos menor que 0 evaluamos que sea negativo
        return true;
    else
        return false;
}
