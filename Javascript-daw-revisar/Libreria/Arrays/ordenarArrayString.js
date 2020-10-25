/* 
Forma para ordenar un array
    -sort() por defecto ordena un array de String de forma ascendente
    -Pasandole esta funcion podemos hacer que ordene el array de forma ascendente o descendente 

 */


function ordenacionArrays(a, b,)
            {
                if (a == b)
                {
                    return 0;
                } 
                else
                {
                    if (a > b) {//RECUERDA!!!Cambiando el simbolo ordenamos de forma accendente o descendente < MAS A MENOS  > MENOS A MAS
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
            
            array.sort(ordenacionArrays);