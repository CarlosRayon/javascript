/****************FUNCION PARA CAPTURA EL VALOR DE UN SELECT*************************
 * 
 * @param {String} id
 * @return {String}Sera el valor que tenga el value del select actualmente selecionado
 */
function valorSelect(id) {
    return $("select[id="+id+"]").val(); //RECUERDA!!! Sin seleccionar devuelve none
};