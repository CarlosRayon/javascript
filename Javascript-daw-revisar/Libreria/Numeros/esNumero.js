 /* Función esNumero()
 *   Recibe: 
 *              c [cadena]
 *   Devuelve:  [booleano]
 * 
 *   Determina si c puede convertirse a un valor numérico.
 *   La segunda comparación hace que si recibe por ejemplo un "4wq"
 *   devuelva false, porque realmente no es un valor numérico
 *   (aunque parseFloat() lo convierta a un 4).
 *   
 *   Es importante el matiz de comparar con != y no con !== (que además de
 *   igualdad de valores compara igualdad de tipos), pues de  lo contrario 
 *   la función nunca va a devolver verdadero, ya que c siempre es una cadena 
 *   y parseFloat() siempre dará un valor de otro tipo.
 *   
 */
function esNumero(c){
    if((isNaN(parseInt(c)))||(c!=parseFloat(c)))
        return false;
    else
        return true;
}

var valor=esNumero(prompt("intro numero"));
 console.log(valor);