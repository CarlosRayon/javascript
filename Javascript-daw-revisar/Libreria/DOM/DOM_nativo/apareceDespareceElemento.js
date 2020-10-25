 
 /*        
 * Funcion que hace desaparecer el objeto si este ya esta mostrado
 * @argument {String} id 
 */
function hacerDesaparecer(id) {
    var el = document.getElementById(id);
    
    if (el.style.display != 'none') {
        el.style.display = 'none';
    } else {
        el.style.display = '';
    }
}
;

 /*        
 * Funcion que hace desaparecer el objeto si este ya esta mostrado
 * @argument {Object} elemento    Puedo hacer document.getElementById()
 */
function hacerDesaparecer(elemento) {
   
    
    if (elemento.style.display != 'none') {
        elemento.style.display = 'none';
    } else {
        elemento.style.display = '';
    }
}
;