/* 
Forma para ordenar un array
    -sort() por defecto no ordena bien un array ya que toma los numero como string
    -Pasandole esta funcion podemos hacer que ordene el array de forma ascendente o descendente correctamente

 */

function ordenarArrayNumero(a,b)//Para ordenar array con numeros
            {
                return parseInt(b)-parseInt(a);//RECUERDA!!! Cambiamos orden para cambiar ordenacion parseInt(a)-parseInt() ASCENDENTE parseInt(b)-parseInt(a) DESCENDENTE
            }
            
            array.sort(ordenarArrayNumero);

