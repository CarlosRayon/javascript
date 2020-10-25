/* 
Validar .com .es .org
 */

//      \.[a-z]{2,}?

/* El punto es un carácter especial, por lo que necesita ser escapado con la barra invertida. 
   Los corchetes indican un carácter entre la a y la z (una letra minúscula). 
   Y las llaves indican repetición, dos o más veces en este caso.
   Se trata de una expresión regular que podemos utilizar para validar los dominios de primer nivel (com, org, es, …).
*/