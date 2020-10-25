/* 
Para selecionar filas impares
 */


  // Seleccionamos las filas impares contenidas dentro de mitabla y le aplicamos la clase colorido.
     $("#mitabla tr:nth-child(even)").addClass("colorido");
     
//     Equivalentes a 
for (var i=0; i<filas.length; i++)
     {
          if (i%2==1)     // Es una fila impar
          {
               // Aplicamos la clase .colorido a esas filas.
               filas[i].setAttribute('class','colorido');
          }
     }