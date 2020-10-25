/*Funcion para ver valor select
 * 
 * @param {String} id
 * @return {String}Sera el valor que tenga el value del select actualmente selecionado
 */
function valorSelect(id){  //RECUERDA DE ESTA FORMA OBTENEMOS SOLO EL VALUE....SI QUEREMOS EL CONTENIDO DE TEXTO TENEMOS QUE USAR LA OTRA FORMA
    return document.getElementById(id).value;
}



/*Funcion para ver valor select alternativa
 * 
 * @param {String} id
 * @return {String}Sera el valor que tenga el value del select actualmente selecionado
 */
function valorSelect(id) {//RECUERDA CON ESTA FORMA SI OBTENEMOS EL TEXTO QUE TIENE EL SELECT
    return document.getElementById(id).options[document.getElementById(id).selectedIndex].text;
    
};


//RECUERD!!! Sin valor el select devolvera none o devolvera el campo del primer select que tengamos Podemos hacer la siguente validacion simple
var select=valorSelect(id);
((select === "none") ? "campo sin seleccionar(none)" : select);