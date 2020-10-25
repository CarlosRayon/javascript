/****************FUNCION PARA CAPTURA EL VALOR DE UN SELECT*************************
 * 
 * @param {obj} obj
 * @return {String}Sera el valor que tenga el value del select actualmente selecionado
 */
function myFunction(obj) {
    var x = document.getElementById(obj).options[document.getElementById(obj).selectedIndex].value;
    
};
