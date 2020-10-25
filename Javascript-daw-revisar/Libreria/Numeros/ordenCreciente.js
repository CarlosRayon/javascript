/*
 * Funcion que determina si los numeros pasados estan en orden creciente
@argument {Number} n1
@argument {Number} n2
@argument {Number} n3
@argument {Number} n4

@returns {Boolean} 
 *  Determina si los números están en orden creciente(respetado el orden de paso en parametros)
 */
function ordenCreciente(n1,n2,n3,n4){
   if((n1<n2)&&(n2<n3)&&(n3<n4))
       return true;
   else
       return false;
}