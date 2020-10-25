/*
 * Función sumatorio()
 *   Recibe: 
 *              numero [entero]
 *   Devuelve:  [entero]
 * 
 *   Devuelve el sumatorio del número recibido
 *   Ejm. 10, la sumatoria es 1+2+3++4+5+6+7+8+9+10= 55
     ejm, 15, sumatoria= 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15=120 
 */
function sumatorio(numero) {
    var sumatorio = 0;
    for (var i = 1; i <= numero; i++) {

        sumatorio = sumatorio + i;
    }
    return sumatorio;
}
