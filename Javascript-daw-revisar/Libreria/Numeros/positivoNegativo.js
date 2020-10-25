 /* Función compruebaNumeros()
 *   Recibe: 
 *              numero1 [real]
 *              numero1 [real]  
 *   Devuelve:  [booleano]
 * 
 *   Determina uno de los valores es positivo y el otro negativo.
 *   //Cualquier numero con signo menos por otro numero sera -algo
 *   //Numero negativo por numero negativo devuelve un numero positivo
 */
function compruebaNumeros(numero1,numero2){
    if(numero1*numero2>0)
        return false;
    else
        return true;
}