/* 
 En un array numerico podemos saber el mayor o menor de ellos de esta manera:
 */

var numbers = [1, 2, 3, 4];

Math.max.apply(null, numbers); // 4 // devuelve -Infinity  si no tenemos ningun valor en el array
Math.min.apply(null, numbers); // 1
