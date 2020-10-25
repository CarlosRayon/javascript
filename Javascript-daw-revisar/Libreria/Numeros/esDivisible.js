/*
 * Función que comprueba si el dividendo es divisible entre el divisor
 * @argument {Number} dividendo
 * @argument {Number} divisor
 * @returns {Boolean} 
 * 
 *
 */
function esDivisible(dividendo,divisor){
   if((dividendo%divisor)===0)
       return true;
   else
       return false;
}
