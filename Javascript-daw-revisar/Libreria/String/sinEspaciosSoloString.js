/* 
Comprueba que la cadena sea un String no vacio. No admite solo numero
 */

function soloString(cadena)
{
        if(!isNaN(cadena) || cadena.trim() === "") {
           return false
        }
        return true;
};

/* 
Comprueba que no tengamos espacions
 */
function sinEspacios(cadena)
{
      if(cadena.trim() === "") {
           return false
        }
        return true;
}